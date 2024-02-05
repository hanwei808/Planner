<template>
  <el-container class="container">
    <AppMenu />
    <el-container>
      <el-header>
        <AppHeader />
      </el-header>
      <el-main class="main-view">
        <RouterView
          ref="routerView"
        />
        <el-collapse-transition>
          <el-backtop
            target=".main-view"
            :right="$store.state.isMdCollapse ? 15 : 150"
            :bottom="50"
          />
        </el-collapse-transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import AppHeader from '@/layout/components/AppHeader/index.vue'
import AppMenu from '@/layout/components/AppMenu/index.vue'
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
}
.el-header {
  padding: 0;
}
</style>