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
      >
        <h1 id="suspense">
          Suspense
        </h1>
        <h2 id="是什么">
          是什么
        </h2>
        <p>Vue 3 引入了一个新的内置组件：<code>Suspense</code>，它提供了一种方式来等待嵌套的异步依赖加载完成，并在等待时显示一些回退内容。这在等待异步组件或者异步函数结果时非常有用。</p>
        <p>这是一个基本的 <code>Suspense</code> 使用示例：</p>
        <div>
          <Code
            v-model="fetchTxtFileData"
            :style="{width: '80vw'}"
          />
        </div>
        <p>在这个例子中，<code>Suspense</code> 会等待 <code>fetchData</code> 函数完成，并在等待时显示 "Loading..."。当 <code>fetchData</code> 完成时，它会显示 "Hello, world!"。</p>
        <p>总的来说，<code>Suspense</code> 提供了一种优雅的方式来处理 Vue 应用中的异步操作，无论是异步组件还是任何其他类型的异步函数。</p>
        <h2 id="使用场景">
          使用场景
        </h2>
        <p>Vue 3 的 <code>Suspense</code> 组件在处理异步操作时非常有用。以下是一些常见的使用场景：</p>
        <ol>
          <li>
            <p><strong>异步组件加载</strong>：当你使用异步组件时，<code>Suspense</code> 可以提供一个在组件加载完成之前显示的回退内容。这对于代码拆分和懒加载的情况非常有用，可以提供更好的用户体验。</p>
          </li>
          <li>
            <p><strong>数据获取</strong>：当你在 <code>setup</code> 函数中获取数据时，可以使用 <code>Suspense</code> 来显示一个加载指示器，直到数据获取完成。这对于依赖于异步 API 调用的组件非常有用。</p>
          </li>
          <li>
            <p><strong>依赖于其他异步操作的渲染</strong>：有时，组件的渲染可能依赖于其他异步操作的结果（例如，Web Worker 计算，IndexedDB 查询等）。在这些情况下，可以使用 <code>Suspense</code> 来等待这些操作完成。</p>
          </li>
          <li>
            <p><strong>嵌套异步依赖</strong>：<code>Suspense</code> 可以等待嵌套的异步依赖。例如，一个异步组件可能依赖于另一个异步组件。在这种情况下，<code>Suspense</code> 可以等待所有的异步依赖都完成。</p>
          </li>
          <li>
            <p><strong>在路由切换时显示加载状态</strong>：当使用 Vue Router 进行路由切换时，如果目标路由的组件是异步加载的，那么 <code>Suspense</code> 可以用来显示一个在组件加载完成之前的加载状态。</p>
          </li>
        </ol>
        <p>总的来说，任何涉及到异步操作和需要在操作完成之前显示一些回退内容的场景，都可以使用 <code>Suspense</code>。</p>
      </div>
    </div>
  </div>
</template>
        
  <script setup lang="ts">
      import { onMounted, ref, Ref } from 'vue';
      import type { TabsPaneContext } from 'element-plus'
      import mdSidebar from '@/components/mdSidebar.vue';
      import Code  from '@/components/code.vue';

      const fetchTxtFileData = ref('');    
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
        fetchTxtFileData.value = `<template>
  <Suspense>
    <template #default>
      <div>{{ data }}</div>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const data = ref(null);

    async function fetchData() {
      // simulate async operation
      await new Promise((resolve) => setTimeout(resolve, 2000));
      data.value = "Hello, world!";
    }

    fetchData();

    return {
      data,
    };
  },
};`;
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