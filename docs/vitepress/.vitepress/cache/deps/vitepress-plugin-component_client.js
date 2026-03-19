import {
  getCurrentInstance,
  inject,
  provide
} from "./chunk-TCXBSQ4M.js";

// ../../node_modules/.pnpm/vitepress-plugin-component@1.1.1/node_modules/vitepress-plugin-component/src/client/index.ts
import ComponentView from "/home/maxim/Projects/personal-projects/ustatic-css/node_modules/.pnpm/vitepress-plugin-component@1.1.1/node_modules/vitepress-plugin-component/src/client/ComponentView.vue";

// ../../node_modules/.pnpm/vitepress-plugin-component@1.1.1/node_modules/vitepress-plugin-component/src/client/useLocaleMappings.ts
var localeMappingSymbol = Symbol(
  "__vitepress_plugin_component_localeMapping"
);
function useLocaleMappings(app) {
  return {
    set: (localeMapping) => {
      const instance = getCurrentInstance();
      if (app) {
        app == null ? void 0 : app.provide(localeMappingSymbol, localeMapping);
      } else {
        if (!instance) {
          throw new Error(
            "useLocaleMappings must be called within a Vue component if not providing an app"
          );
        }
        provide(localeMappingSymbol, localeMapping);
      }
    },
    get: () => {
      return inject(localeMappingSymbol, void 0);
    }
  };
}

// ../../node_modules/.pnpm/vitepress-plugin-component@1.1.1/node_modules/vitepress-plugin-component/src/client/index.ts
var COMPONENT_NAME = "ComponentView";
function enhanceAppWithComponentView(app, options) {
  const { localeMappings = {} } = options || {};
  app.component(COMPONENT_NAME, ComponentView);
  const { set } = useLocaleMappings(app);
  set(localeMappings);
}
export {
  COMPONENT_NAME,
  ComponentView,
  enhanceAppWithComponentView
};
//# sourceMappingURL=vitepress-plugin-component_client.js.map
