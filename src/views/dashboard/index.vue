<template>
  <div>
    <h2>首页</h2>
    <p>当前角色：{{ role }}</p>
    <p>权限：{{ permissions }}</p>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/store/modules/info";

const store = useUserStore();

const role = store.role;
const permissions = store.permissions.join(", ");
</script>
