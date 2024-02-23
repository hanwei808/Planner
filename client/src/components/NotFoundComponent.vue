<template>
  <el-empty description="404 Not Found">
    <router-link to="/">
      返回首页
    </router-link>
  </el-empty>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import router from "@/router";

onMounted(()=>{
  setTimeout(() => {
    router.push({path:  decodeURIComponent(window.location.hash?.slice(1)) || '/'})
  });
})
</script>