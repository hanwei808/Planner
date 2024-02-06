<template>
  <div class="app-menu">
    <el-menu
      style="padding-bottom: 70px;"
      active-text-color="rgb(29, 147, 171)"
      background-color="#fafafa"
      class="el-menu-vertical-demo"
      default-active="2"
      @open="handleOpen"
      @close="handleClose"
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
        <el-menu-item index="/JavaScript/00">
          00.关键字与API
        </el-menu-item>
        <el-menu-item index="/JavaScript/01">
          01.数据类型
        </el-menu-item>
        <el-menu-item index="/JavaScript/02">
          02.运算符与控制流
        </el-menu-item>
        <el-menu-item index="/JavaScript/03">
          03.作用域和变量
        </el-menu-item>
        <el-menu-item index="/JavaScript/04">
          04.this与class与new
        </el-menu-item>
        <el-menu-item index="/JavaScript/05">
          05.call与apply与bind
        </el-menu-item>
        <el-menu-item index="/JavaScript/06">
          06.原型与原型链
        </el-menu-item>
        <el-menu-item index="/JavaScript/07">
          07.继承与扩展
        </el-menu-item>
        <el-menu-item index="/JavaScript/08">
          08.对象与数组
        </el-menu-item>
        <el-menu-item index="/JavaScript/09">
          09.拷贝与递归
        </el-menu-item>
        <el-menu-item index="/JavaScript/10">
          10.函数与闭包
        </el-menu-item>
        <el-menu-item index="/JavaScript/11">
          11.节流与防抖
        </el-menu-item>
        <el-menu-item index="/JavaScript/12">
          12.异步编程
        </el-menu-item>
        <el-menu-item index="/JavaScript/13">
          13.错误与异常
        </el-menu-item>
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
        <el-link
          href="https://beian.miit.gov.cn/#/Integrated/recordQuery"
          target="_Blank"
          style="color: #79BBFF;"
        >
          <i style="display: inline-block;width: 12px;height: 12px;margin-right: 5px;background: url(https://m.baidu.com/static/index/plus/public/icon_police.png) no-repeat;background-size: 100% 100%;" />琼ICP备2021002448号-1
        </el-link>
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
  
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
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