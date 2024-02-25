<template>
  <div>
    <el-affix
      :offset="58"
      style="width: 100%"
    >
      <el-tabs
        v-model="activeName"
        class="demo-tabs"
        @tab-click="handleClick"
      >
        <el-tab-pane
          label="文档"
          name="first"
        />
      </el-tabs>
    </el-affix>
    <mdSidebar
      :navigation="navigation"
      v-show="activeName === 'first'"
    />
    <div
      class="article-container"
      :class="{'md-sidebar-expand': !$store.state.isMdCollapse}"
    >
      <div
        class="crossnote markdown-preview"
        v-show="activeName === 'first'"
      />
    </div>
  </div>
</template>
          
      <script setup lang="ts">
          import { onMounted, ref, Ref } from 'vue';
          import type { TabsPaneContext } from 'element-plus'
          import mdSidebar from '@/components/mdSidebar.vue';
      
          const activeName = ref('first')
      
          const handleClick = (tab: TabsPaneContext, event: Event) => {
          console.log(tab, event)
          }
      
          // Define a type for navigation items
          type NavigationItem = {
          title: string;
          id: string;
          children: NavigationItem[];
          };
      
          // Define the type for the navigation ref
          const navigation: Ref<NavigationItem[]> = ref([]);
      
          onMounted(async () => {
          createNavigation();
          });
      
          const createNavigation = (): void => {
          const headers = Array.from(document.querySelectorAll('h2, h3')) as HTMLElement[];
          let currentH1: NavigationItem | null = null;
      
          headers.forEach(header => {
          const newItem: NavigationItem = {
          title: header.innerText,
          id: header.id,
          children: []
          };
      
          if (header.tagName === 'H2') {
          currentH1 = newItem;
          navigation.value.push(newItem);
          } else if (header.tagName === 'H3' && currentH1) {
          currentH1.children.push(newItem);
          }
          });
          };
      </script>
      <style scoped>
      @import url(@/styles/markdown.scss);
      @import url(@/styles/base.scss);
      </style>