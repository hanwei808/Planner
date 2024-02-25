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
        <h1 id="seo-优化">
          SEO 优化
        </h1>
        <p>Vue.js 是一种用于构建用户界面的 JavaScript 框架，它主要用于单页应用（SPA）。然而，SPA 在搜索引擎优化（SEO）方面有一些挑战，因为搜索引擎爬虫可能无法完全解析 JavaScript 生成的内容。以下是一些用于优化 Vue.js 应用程序的 SEO 的策略：</p>
        <ol>
          <li>
            <p><strong>服务端渲染 (SSR)</strong>：这是最有效的解决方法。SSR 可以在服务器端渲染应用程序，然后将完全渲染的页面发送到客户端。这样，搜索引擎爬虫就可以看到完全渲染的页面，从而更好地索引你的网站。Vue.js 有一个官方的 SSR 解决方案，叫做 Nuxt.js。</p>
          </li>
          <li>
            <p><strong>预渲染</strong>：预渲染是在构建时生成静态 HTML 文件的过程。这样，当搜索引擎爬虫访问你的网站时，它会看到预先渲染的页面，而不是空白的页面。预渲染适用于内容不经常变化的页面。对于 Vue.js，你可以使用预渲染插件，如 prerender-spa-plugin。</p>
          </li>
          <li>
            <p><strong>使用 Meta 标签</strong>：确保你的应用程序有正确的 meta 标签是非常重要的。这包括 title 标签，description 标签，canonical 标签等。你可以使用 vue-meta 库来管理你的应用程序的 meta 标签。</p>
          </li>
          <li>
            <p><strong>使用结构化数据</strong>：结构化数据可以帮助搜索引擎理解你的页面内容。你可以使用 JSON-LD 格式的结构化数据，这是 Google 推荐的格式。</p>
          </li>
          <li>
            <p><strong>使用 robots.txt 和 sitemap.xml</strong>：robots.txt 文件可以告诉搜索引擎哪些页面可以爬取，哪些页面不能爬取。sitemap.xml 文件可以帮助搜索引擎了解你的网站结构。你应该确保你的网站有这两个文件，并且它们是最新的。</p>
          </li>
          <li>
            <p><strong>使用 Google Search Console 和 Bing Webmaster Tools</strong>：这些工具可以帮助你了解搜索引擎如何看待你的网站，以及你的网站在搜索结果中的表现。如果有任何问题，这些工具通常会提供警告或错误消息。</p>
          </li>
          <li>
            <p><strong>优化页面加载速度</strong>：页面加载速度是一个重要的 SEO 因素。你应该优化你的代码，减少 HTTP 请求，使用 CDN，压缩你的代码和图片等，以提高页面加载速度。</p>
          </li>
        </ol>
        <p>请注意，这些只是一些基本的策略，具体的实施可能会根据你的具体情况有所不同。</p>
      </div>
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