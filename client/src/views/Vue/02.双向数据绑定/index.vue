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
        <el-tab-pane
          label="流程图"
          name="second"
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
        <h1
          id="数据双向绑定-mvvm"
          ebook-toc-level-1=""
          heading="数据双向绑定 MVVM "
        >
          数据双向绑定 MVVM
        </h1>
        <ul>
          <li>
            MVVM：
            <ul>
              <li>M：数据模型</li>
              <li>V：视图</li>
              <li>VM：视图模型</li>
            </ul>
          </li>
        </ul>
        <p>数据双向绑定：逻辑 -&gt; 数据 &lt;-&gt; 视图</p>
        <ol>
          <li>数据 -&gt; 通过 Object.defineProperty()、Proxy 实现响应式的数据</li>
          <li>视图 -&gt; 通过 DOM 增加事件处理函数监听（input/keyup）实现视图的响应</li>
        </ol>
        <h2
          id="源码"
          ebook-toc-level-2=""
          heading="源码 "
        >
          源码
        </h2>
        <pre
          data-role="codeBlock"
          data-info="js"
          class="language-javascript js"
        ><code><span class="token keyword keyword-class">class</span> <span class="token class-name">MVVM</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">el</span> <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">querySelector</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">data</span> <span class="token operator">=</span> data<span class="token punctuation">;</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">domPool</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token method function property-access">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 初始化</span>
  <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token method function property-access">initData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token method function property-access">initDom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 初始化数据：通过 Object.defineProperty() 或 Proxy 实现数据劫持，当数据发生变化时，更新视图</span>
  <span class="token function">initData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 通过 Object.defineProperty() 实现数据劫持</span>
    <span class="token known-class-name class-name">Object</span><span class="token punctuation">.</span><span class="token method function property-access">keys</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">data</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token known-class-name class-name">Object</span><span class="token punctuation">.</span><span class="token method function property-access">defineProperty</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">data</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 更新视图</span>
          <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">domPool</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token property-access">value</span> <span class="token operator">=</span> newVal<span class="token punctuation">;</span>
          <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">data</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> newVal<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 通过 Proxy 实现数据劫持</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">data</span> <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">data</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword control-flow keyword-return">return</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 更新视图</span>
        <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">domPool</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token property-access">value</span> <span class="token operator">=</span> newVal<span class="token punctuation">;</span>
        target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> newVal<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">initDom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token method function property-access">bindDom</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">el</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token method function property-access">bindInput</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">el</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 绑定 DOM：通过递归回调获取所有 v-model 属性对应的 DOM 节点，存入 domPool</span>
  <span class="token function">bindDom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-const">const</span> childNodes <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token property-access">childNodes</span><span class="token punctuation">;</span>
    childNodes<span class="token punctuation">.</span><span class="token method function property-access">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token property-access">nodeType</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword keyword-const">const</span> key <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token method function property-access">getAttribute</span><span class="token punctuation">(</span><span class="token string">"v-model"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">domPool</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> node<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token property-access">childNodes</span><span class="token punctuation">.</span><span class="token property-access">length</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token method function property-access">bindDom</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 绑定 input 监听：获取 v-model 属性对应的数据模型，添加 input 监听</span>
  <span class="token function">bindInput</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-const">const</span> inputs <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token method function property-access">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">"input"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    inputs<span class="token punctuation">.</span><span class="token method function property-access">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">input</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword keyword-const">const</span> key <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token method function property-access">getAttribute</span><span class="token punctuation">(</span><span class="token string">"v-model"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      input<span class="token punctuation">.</span><span class="token property-access">value</span> <span class="token operator">=</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
      input<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span><span class="token string">"input"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword keyword-this">this</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token property-access">target</span><span class="token punctuation">.</span><span class="token property-access">value</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
      </div><div v-show="activeName === 'second'">
        <inline-svg :src="svg" />
      </div>
    </div>
  </div>
</template>
      
  <script setup lang="ts">
      import { onMounted, ref, Ref } from 'vue';
      import type { TabsPaneContext } from 'element-plus'
      import mdSidebar from '@/components/mdSidebar.vue';
      import svg from './index.drawio.svg'
  
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