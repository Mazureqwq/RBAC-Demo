<template>
  <div>
    <h2>用户管理</h2>

    <button v-permission="'user:add'">新增用户</button>

    <Permission code="user:delete">
      <button>删除用户</button>
    </Permission>
  </div>
</template>

<script setup lang="ts"></script>
