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
        <h1 id="性能优化">
          性能优化
        </h1>
        <ol>
          <li>
            <p><strong>避免使用全局变量</strong>：全局变量需要更长的查找时间，而且可能会导致意外的命名冲突。尽可能地使用局部变量可以提高性能。</p>
          </li>
          <li>
            <p><strong>减少 DOM 操作</strong>：DOM 操作是 JavaScript 中最耗时的操作之一。尽可能地减少 DOM 操作，例如，可以一次性地修改 DOM，而不是每次改变一个元素就进行一次 DOM 操作。</p>
          </li>
          <li>
            <p><strong>避免重绘和回流</strong>：浏览器渲染页面时，任何元素的尺寸、布局、颜色的变化都可能导致重绘（repaint）或回流（reflow）。回流是布局或几何属性需要改变时发生的，而重绘是当元素的外观被改变，但布局不变时发生。因为回流比重绘的成本更高，所以应该尽量避免不必要的回流和重绘。</p>
          </li>
          <li>
            <p><strong>利用 CSS3 硬件加速</strong>：某些 CSS 属性（如 transform 和 opacity）可以触发硬件加速，这可以大大提高性能。当使用这些属性时，浏览器可以使用 GPU 而不是 CPU 来渲染动画，从而实现更流畅的动画效果。</p>
          </li>
          <li>
            <p><strong>使用现代的 JavaScript 特性</strong>：许多现代的 JavaScript 特性，如箭头函数、Promise、async/await 等，都可以提高代码的性能和可读性。</p>
          </li>
          <li>
            <p><strong>使用 Web Workers</strong>：Web Workers 允许你在后台线程中运行 JavaScript，这样就不会阻塞主线程，可以提高性能。</p>
          </li>
          <li>
            <p><strong>使用静态类型检查</strong>：虽然 JavaScript 是一种动态类型语言，但使用 TypeScript 这样的静态类型检查工具，可以在编译时发现和修复错误，避免运行时的类型转换，提高代码的运行效率。</p>
          </li>
          <li>
            <p><strong>最小化和压缩代码</strong>：通过删除不必要的字符（如空格、换行符和注释），你可以减小 JavaScript 文件的大小，从而减少加载时间。也可以使用工具如 UglifyJS 和 Terser 进行自动化的代码压缩。</p>
          </li>
          <li>
            <p><strong>代码分割和懒加载</strong>：通过将代码分割成多个小块，并只在需要时加载，可以减少初始加载时间。</p>
          </li>
          <li>
            <p><strong>利用浏览器的缓存机制</strong>：通过合理设置 HTTP 缓存头，可以避免不必要的文件重复下载，提高页面加载速度。</p>
          </li>
          <li>
            <p><strong>使用 CDN</strong>：内容分发网络（CDN）可以将你的 JavaScript 文件存储在全球各地的服务器上，从而使用户能够从最近的服务器加载文件，减少延迟。</p>
          </li>
        </ol>
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