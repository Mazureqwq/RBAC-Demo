<template>
  <div>
    <h2>选择角色</h2>
    <button @click="login('admin')">管理员</button>
    <button @click="login('user')">普通用户</button>
    <button @click="login('guest')">访客</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { useUserStore } from "@/store";
import { storeToRefs } from "pinia";
import { nextTick } from "vue";

const router = useRouter();
const store = useUserStore();
const { router: userRouter } = storeToRefs(store);

async function login(role: string) {
  await store.login(role);
  console.log("登录成功，路由：", userRouter.value, router.getRoutes());
  router.push({
    name: "Dashboard",
  });
}
</script>
