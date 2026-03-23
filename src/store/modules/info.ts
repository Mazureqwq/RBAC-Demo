import { defineStore } from "pinia";
import { rolePermissions } from "@/mock/permission";
import { getUserInfoApi, getRoutesApi } from "@/api";
import { setupRoutes } from "@/router";

export const useUserStore = defineStore("user", {
  state: () => ({
    role: "guest",
    permissions: [] as string[],
    router: [] as any[],
    tokenKey: "Bearer ",
    token: "",
  }),
  getters: {
    getRouter() {
      return this.router;
    },
  },
  actions: {
    setRole(role: string) {
      this.role = role;
      this.permissions = rolePermissions[role] || [];
    },
    setToken(token: string) {
      this.token = token;
    },

    async login(role: string) {
      console.log(1);
      const res = await getUserInfoApi({ role });
      console.log(2, res);
      if (res.code === 200) {
        const { token, userInfo } = res.data;
        console.log("Login successful, token set:", this.token); // 调试输出
        this.setRole(userInfo.role);
        this.setToken(token);
        this.permissions = userInfo.permissions;
        // await this.getRoutes();
      }
    },
    async getRoutes() {
      // if (this.token) {
      const res = await getRoutesApi();
      if (res.code === 200) {
        this.router = res.data;
        await setupRoutes(); // 登录后设置路由
      }
      // }
    },
  },
  persist: true,
});
