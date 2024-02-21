<template>
  <div class="app-menu">
    <el-menu
      style="padding-bottom: 70px;"
      active-text-color="rgb(29, 147, 171)"
      background-color="#fafafa"
      class="el-menu-vertical-demo"
      default-active="2"
      :collapse="$store.state.isCollapse"
      router
    >
      <el-menu-item index="/">
        <el-icon><House /></el-icon>
        <span>首页</span>
      </el-menu-item>

      <el-sub-menu index="JavaScript">
        <template #title>
          <el-icon><DataAnalysis /></el-icon>
          <span>JavaScript</span>
        </template>
        <template
          v-for="js in JavaScript"
          :key="js.path"
        >
          <el-menu-item
            :index="js.path"
          >
            {{ js.name.split('/')[1] }}
          </el-menu-item>
        </template>
      </el-sub-menu>

      <el-sub-menu index="TypeScript">
        <template #title>
          <el-icon><DataAnalysis /></el-icon>
          <span>TypeScript</span>
        </template>
      </el-sub-menu>

      <el-sub-menu index="NodeJS">
        <template #title>
          <el-icon><DataAnalysis /></el-icon>
          <span>NodeJS</span>
        </template>
      </el-sub-menu>

      <el-sub-menu index="Vue3">
        <template #title>
          <el-icon><DataAnalysis /></el-icon>
          <span>Vue3</span>
        </template>
      </el-sub-menu>

      <el-sub-menu index="Net">
        <template #title>
          <el-icon><DataAnalysis /></el-icon>
          <span>网络安全</span>
        </template>
      </el-sub-menu>

      <el-sub-menu index="Web">
        <template #title>
          <el-icon><DataAnalysis /></el-icon>
          <span>网站架构</span>
        </template>
      </el-sub-menu>

      <el-sub-menu index="Qu">
        <template #title>
          <el-icon><DataAnalysis /></el-icon>
          <span>发展趋势</span>
        </template>
        <el-menu-item index="/">
          微前端
        </el-menu-item>
        <el-menu-item index="/">
          低代码
        </el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="88">
        <template #title>
          <el-icon><Guide /></el-icon>
          <span>其他</span>
        </template>
        <el-menu-item index="/about">
          关于
        </el-menu-item>
      </el-sub-menu>
      <div
        v-show="!$store.state.isCollapse"
        style="position: fixed;bottom: 0;width: 200px;background-color: #fafafa;padding-bottom: 10px;text-align: center;"
      >
        <div>&copy; 2024 Han Wei </div>
      </div>
    </el-menu>
  </div>
</template>
    
  <script lang="ts" setup>
    import {
      House,
      DataAnalysis,
      Guide
    } from '@element-plus/icons-vue'

    import { ref } from 'vue'
    const JavaScript = ref()

    const jsModules = import.meta.glob('@/views/JavaScript/*/*.vue')
    JavaScript.value = Object.entries(jsModules).map(([path, component]) => {
        const name = RegExp(/\/src\/views\/(.*)\.vue/).exec(path)?.[1]
        return {
            path: `/${name}`,
            name,
            component,
            meta: {
                title: name,
                requiresAuth: false
            }
        }
    })

  </script>
  
  <style lang="scss" scoped>
  .el-menu {
    height: 100%;
    overflow-y: auto;
    border-right: none;
    box-shadow: 5px 0 5px -5px rgba(0, 0, 0, 0.2);
  }
  .el-menu:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  </style>