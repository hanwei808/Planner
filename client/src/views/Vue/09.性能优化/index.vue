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
        <h2 id="使用懒加载">
          使用懒加载
        </h2>
        <ol>
          <li><strong>使用懒加载：</strong>懒加载是一种优化技术，它可以帮助你在需要的时候才加载某些部分的代码。在 Vue 3 中，你可以使用动态 <code>import()</code> 语法来实现路由级别的懒加载。这种方式可以减少首次加载的时间，提高应用程序的性能。</li>
        </ol>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token keyword keyword-const">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"/about"</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token keyword module keyword-import">import</span><span class="token punctuation">(</span><span class="token string">"./About.vue"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h2 id="使用-v-if-代替-v-show">
          使用 v-if 代替 v-show
        </h2>
        <ol start="2">
          <li><strong>使用 <code>v-if</code> 代替 <code>v-show</code>：</strong>在处理大量数据时，<code>v-if</code> 优于 <code>v-show</code>。<code>v-if</code> 是“真实”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件被适当地销毁和重建。<code>v-if</code> 是惰性的：如果在初始渲染时条件为假，则什么也不做。只有当条件第一次变为真时，才会开始渲染条件块。</li>
        </ol>
        <h2 id="使用计算属性和侦听器">
          使用计算属性和侦听器
        </h2>
        <ol start="3">
          <li><strong>使用计算属性和侦听器：</strong>计算属性和侦听器是 Vue 3 的重要特性，它们可以帮助你更有效地处理数据变化。计算属性是基于它们的依赖关系进行缓存的，只有在它们的依赖属性发生变化时，才会重新计算它们的值。</li>
        </ol>
        <h2 id="使用-suspense-和异步组件">
          使用 Suspense 和异步组件
        </h2>
        <ol start="4">
          <li><strong>使用 Suspense 和异步组件：</strong>Vue 3 引入了一个新的 <code>Suspense</code> 组件，可以让你“等待”异步组件，直到它们准备好渲染。这可以帮助你更好地管理异步操作，提高应用程序的性能。</li>
        </ol>
        <h2 id="使用-vue-devtools">
          使用 Vue Devtools
        </h2>
        <ol start="5">
          <li><strong>使用 Vue Devtools：</strong>Vue Devtools 是一个浏览器插件，可以帮助你更好地理解你的 Vue 应用程序。你可以使用它来查看你的组件树，检查组件的属性和状态，以及跟踪它们的性能。</li>
        </ol>
        <h2 id="使用生产模式">
          使用生产模式
        </h2>
        <ol start="6">
          <li><strong>使用生产模式：</strong>在生产环境中，你应该始终使用 Vue 的生产模式。这将禁用 Vue 中的一些在开发过程中有用但在生产环境中可能会降低性能的功能，例如警告和错误检查。</li>
        </ol>
        <h2 id="优化组件渲染">
          优化组件渲染
        </h2>
        <ol start="7">
          <li><strong>优化组件渲染：</strong>Vue 3 提供了一种新的函数 <code>onUpdated</code>，它可以帮助你更准确地控制组件的更新。你可以使用它来避免不必要的组件渲染，从而提高应用程序的性能。</li>
        </ol>
        <h2 id="使用-v-memo">
          使用 <code>v-memo</code>
        </h2>
        <ol start="8">
          <li><strong>使用 <code>v-memo</code>：</strong> Vue 3.2 引入了一个新的指令 <code>v-memo</code>，它可以帮助你减少不必要的重新渲染。<code>v-memo</code> 可以记住它的模板和依赖，只有当依赖发生变化时，它才会重新渲染。</li>
        </ol>
        <h2 id="使用-teleport">
          使用 <code>teleport</code>
        </h2>
        <ol start="9">
          <li><strong>使用 <code>teleport</code>：</strong> Vue 3 提供了一个新的 <code>teleport</code> 组件，它可以让你将子组件渲染到 DOM 的任何位置，而不仅仅是当前组件的位置。这可以帮助你避免不必要的重新渲染，提高应用程序的性能。</li>
        </ol>
        <h2 id="使用-nexttick">
          使用 <code>nextTick</code>
        </h2>
        <ol start="10">
          <li><strong>使用 <code>nextTick</code>：</strong> <code>nextTick</code> 是一个全局 API，它可以在 DOM 更新后立即执行回调。你可以使用它来确保 DOM 已经更新，从而避免不必要的重新渲染。</li>
        </ol>
        <h2 id="优化列表渲染">
          优化列表渲染
        </h2>
        <ol start="11">
          <li><strong>优化列表渲染：</strong> 当你使用 <code>v-for</code> 渲染大量数据时，应该始终提供一个唯一的 <code>key</code> 属性。这样，Vue 可以跟踪每个节点的身份，从而重用和重新排序现有元素，提高渲染性能。</li>
        </ol>
        <h2 id="避免使用内联函数">
          避免使用内联函数
        </h2>
        <ol start="12">
          <li><strong>避免使用内联函数：</strong> 在模板中使用内联函数会导致 Vue 在每次渲染时都创建一个新的函数实例，这会降低性能。你应该尽可能地将函数移到组件的方法中。</li>
        </ol>
        <h2 id="使用函数式组件">
          使用函数式组件
        </h2>
        <ol start="13">
          <li><strong>使用函数式组件：</strong> 函数式组件没有实例，没有生命周期，也没有状态。它们只是接收一些属性，并返回虚拟 DOM。因此，函数式组件的渲染性能比常规组件更高。当你的组件不需要状态或生命周期钩子时，可以考虑使用函数式组件。</li>
        </ol>
        <h2 id="使用-web-workers">
          使用 Web Workers
        </h2>
        <ol start="14">
          <li><strong>使用 Web Workers：</strong> Web Workers 可以在后台线程中运行脚本，这可以避免阻塞主线程，提高应用程序的性能。</li>
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