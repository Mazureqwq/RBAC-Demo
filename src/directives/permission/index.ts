import { useUserStore } from "@/store/modules/info";
import { App } from "vue";

export function hasPermission(code: string) {
  const store = useUserStore();

  if (store.permissions.includes("*")) return true;

  return store.permissions.includes(code);
}

export const setupPermissionDirective = (app: App<Element>) => {
  app.directive("hasPermi", hasPermission);
};
