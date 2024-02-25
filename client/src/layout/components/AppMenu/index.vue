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
        <el-icon>
          <img
            src="./icons/home.png"
            width="18px"
            alt="JavaScript"
          >
        </el-icon>
        <span>首页</span>
      </el-menu-item>

      <el-sub-menu index="JavaScript">
        <template #title>
          <el-icon>
            <img
              src="./icons/js.png"
              width="20px"
              alt="JavaScript"
            >
          </el-icon>
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
          <el-icon>
            <img
              src="./icons/ts.png"
              width="20px"
              alt="JavaScript"
            >
          </el-icon>
          <span>TypeScript</span>
        </template>
        <template
          v-for="ts in TypeScript"
          :key="ts.path"
        >
          <el-menu-item
            :index="ts.path"
          >
            {{ ts.name.split('/')[1] }}
          </el-menu-item>
        </template>
      </el-sub-menu>

      <el-sub-menu index="Vue">
        <template #title>
          <el-icon>
            <img
              src="./icons/vue.png"
              width="22px"
              alt="JavaScript"
            >
          </el-icon>
          <span>Vue</span>
        </template>
        <template
          v-for="vue in Vue"
          :key="vue.path"
        >
          <el-menu-item
            :index="vue.path"
          >
            {{ vue.name.split('/')[1] }}
          </el-menu-item>
        </template>
      </el-sub-menu>

      <el-sub-menu index="NodeJS">
        <template #title>
          <el-icon>
            <img
              src="./icons/node.png"
              width="19px"
              alt="JavaScript"
            >
          </el-icon>
          <span>NodeJS</span>
        </template>
        <template
          v-for="node in NodeJS"
          :key="node.path"
        >
          <el-menu-item
            :index="node.path"
          >
            {{ node.name.split('/')[1] }}
          </el-menu-item>
        </template>
      </el-sub-menu>

      <el-sub-menu index="Net">
        <template #title>
          <el-icon>
            <img
              src="./icons/secure.png"
              width="20px"
              alt="JavaScript"
            >
          </el-icon>
          <span>网络安全</span>
        </template>
        <template
          v-for="net in Netwrork"
          :key="net.path"
        >
          <el-menu-item
            :index="net.path"
          >
            {{ net.name.split('/')[1] }}
          </el-menu-item>
        </template>
      </el-sub-menu>

      <el-sub-menu index="Web">
        <template #title>
          <el-icon>
            <img
              src="./icons/web.png"
              width="20px"
              alt="JavaScript"
            >
          </el-icon>
          <span>网站架构</span>
        </template>
        <template
          v-for="arch in Architecture"
          :key="arch.path"
        >
          <el-menu-item
            :index="arch.path"
          >
            {{ arch.name.split('/')[1] }}
          </el-menu-item>
        </template>
      </el-sub-menu>

      <el-sub-menu index="Qu">
        <template #title>
          <el-icon>
            <img
              src="./icons/trend.png"
              width="22px"
              alt="JavaScript"
            >
          </el-icon>
          <span>发展趋势</span>
        </template>
        <template
          v-for="dev in DevTrend"
          :key="dev.path"
        >
          <el-menu-item
            :index="dev.path"
            disabled
          >
            {{ dev.name.split('/')[1] }}
          </el-menu-item>
        </template>
      </el-sub-menu>

      <el-sub-menu index="Bus">
        <template #title>
          <el-icon>
            <img
              src="./icons/project.png"
              width="18px"
              alt="JavaScript"
            >
          </el-icon>
          <span>商业案例</span>
        </template>
        <template
          v-for="sl in Solution"
          :key="sl.path"
        >
          <el-menu-item
            :index="sl.path"
            disabled
          >
            {{ sl.name.split('/')[1] }}
          </el-menu-item>
        </template>
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
      Guide
    } from '@element-plus/icons-vue'

    import { ref } from 'vue'
    const JavaScript = ref()
    const Vue = ref()
    const Netwrork = ref()
    const NodeJS = ref()
    const Architecture = ref()
    const DevTrend = ref()
    const TypeScript = ref()
    const Solution = ref()

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
    const nodeModules = import.meta.glob('@/views/NodeJS/*/*.vue')
    NodeJS.value = Object.entries(nodeModules).map(([path, component]) => {
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
    const vueModules = import.meta.glob('@/views/Vue/*/*.vue')
    Vue.value = Object.entries(vueModules).map(([path, component]) => {
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
    const netModules = import.meta.glob('@/views/Network/*/*.vue')
    Netwrork.value = Object.entries(netModules).map(([path, component]) => {
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
    const architectureModules = import.meta.glob('@/views/Architecture/*/*.vue')
    Architecture.value = Object.entries(architectureModules).map(([path, component]) => {
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
    const devModules = import.meta.glob('@/views/DevTrend/*/*.vue')
    DevTrend.value = Object.entries(devModules).map(([path, component]) => {
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
    const tsModules = import.meta.glob('@/views/TypeScript/*/*.vue')
    TypeScript.value = Object.entries(tsModules).map(([path, component]) => {
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
    const solutionModules = import.meta.glob('@/views/Solution/*/*.vue')
    Solution.value = Object.entries(solutionModules).map(([path, component]) => {
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