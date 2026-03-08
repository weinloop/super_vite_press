import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoRoot = path.resolve(__dirname, "../..");
const docsRoot = path.resolve(__dirname, "../docs");

async function rmIfExists(targetPath) {
  try {
    await fs.rm(targetPath, { recursive: true, force: true });
  } catch {
    // ignore
  }
}

async function ensureDir(targetPath) {
  await fs.mkdir(targetPath, { recursive: true });
}

async function copyDir(src, dest) {
  // Node 16+ supports fs.cp; Cursor environment usually >=18.
  await fs.cp(src, dest, {
    recursive: true,
    dereference: true,
    filter: (p) => !p.includes(`${path.sep}.DS_Store`),
  });
}

async function main() {
  const uiSrc = path.join(repoRoot, "ui");
  const reqSrc = path.join(repoRoot, "ai_wiki", "requirement", "REQ-018-002");
  const reqDesignDocSrc = path.join(
    repoRoot,
    "ai_wiki",
    "requirement",
    "REQ-018-002-超级个体平台-详细需求功能设计.md",
  );

  // 原型 HTML 作为静态资源放在 public/ui 下，才能通过 /ui/...html 直接访问
  const uiPublicDest = path.join(docsRoot, "public", "ui");
  const reqDest = path.join(docsRoot, "req", "REQ-018-002");
  const reqDesignDocDest = path.join(
    docsRoot,
    "req",
    "REQ-018-002-超级个体平台-详细需求功能设计.md",
  );

  await ensureDir(docsRoot);
  // 清理旧的 ui 位置（之前放在 docs/ui）
  await rmIfExists(path.join(docsRoot, "ui"));
  await rmIfExists(uiPublicDest);
  await rmIfExists(reqDest);

  await copyDir(uiSrc, uiPublicDest);
  await copyDir(reqSrc, reqDest);
  await ensureDir(path.dirname(reqDesignDocDest));
  await fs.copyFile(reqDesignDocSrc, reqDesignDocDest);

  // Ensure VitePress treats copied markdown as docs pages.
  // (No-op; files are already .md.)
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

