<template>
  <el-icon
    size="22"
    @click="handleCollapse"
    style="cursor: pointer;"
  >
    <Expand v-if="$store.state.isCollapse" />
    <Fold v-else />
  </el-icon>
</template>

<script setup lang="ts">
import {
      Expand,
      Fold
    } from '@element-plus/icons-vue'

import { useStore } from '@/store'
const store = useStore()

const handleCollapse = () => {
    store.commit('toggleCollapse', !store.state.isCollapse)
}
</script>
