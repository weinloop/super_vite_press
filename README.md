# VitePress（需求 & 原型站点）

该站点把仓库里的两类内容聚合展示，并用 **REQ 编码**做对应关系维护：

- `docs/public/ui/`：原型图入口（区分 App / Web）
- `docs/req/REQ-018-002/`：功能需求说明（区分模块）

> 说明：本仓库根目录为 `vite_press/`（仅提交站点本身），因此 `ui/` 与 `ai_wiki/` 的内容已收敛进 `docs/` 目录作为发布源。

## 使用

在 `vite_press/` 目录执行：

```bash
npm install
```

本地开发预览（会先同步内容）：

```bash
npm run dev
```

构建部署产物（会先同步内容）：

```bash
npm run build
```

预览构建产物：

```bash
npm run preview
```

## 维护对应关系

- 对应关系入口页：`docs/req-map/REQ-018-002.md`
- 约定：每新增一个功能需求，就按 `REQ-xxx-yyy-zz` 增加一段，并同时放上 App/Web 原型链接与需求文档链接。

