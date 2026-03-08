import DefaultTheme from "vitepress/theme";
import type { EnhanceAppContext } from "vitepress";

function forceFullPageNavigationForPrototypeIndex() {
  if (typeof window === "undefined") return;

  window.addEventListener(
    "click",
    (e) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest?.("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const url = new URL(anchor.href, window.location.origin);
      // 只对原型总入口做强制“新开页面”跳转，避免 VitePress 路由把 index.html 规范化为 /ui/
      // 同时兼容 GitHub Pages 项目页 base（如 /superoneman/）
      if (url.pathname.endsWith("/ui/index.html")) {
        e.preventDefault();
        window.open(url.href, "_blank", "noopener,noreferrer");
      }
    },
    { capture: true },
  );
}

export default {
  extends: DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp?.(ctx);
    forceFullPageNavigationForPrototypeIndex();
  },
};

