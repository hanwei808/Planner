<template>
  <el-icon
    @click="toggleFullScreen"
    style="cursor: pointer;"
  >
    <FullScreen />
  </el-icon>
</template>

<script setup lang="ts">
import {
  FullScreen
} from '@element-plus/icons-vue'

const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen()
    } else if (document.exitFullscreen) {
        document.exitFullscreen()
    }
}
</script>