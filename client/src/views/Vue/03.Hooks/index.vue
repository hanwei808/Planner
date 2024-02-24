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
        <h1 id="hooks">
          Hooks
        </h1>
        <h2 id="是什么">
          是什么
        </h2>
        <p>Vue 3 中的 "Hooks" 是一个非正式的术语，通常用来描述 Composition API 中的一些特性。这是一个新的 API，允许开发者在 Vue 组件中更好地重用和组织逻辑。</p>
        <p>Vue 3 的 Composition API 提供了一种新的方式来组织和复用代码，特别是对于更复杂的组件。这是一个可选的 API，旨在解决 Vue 2 中的 Options API 的一些限制。Options API 是按选项类型（如 data、methods、computed 等）组织代码，而不是按功能组织代码。这可能使得复杂组件的代码难以理解和维护。</p>
        <p>在 Composition API 中，可以创建可复用的函数，这些函数可以被视为 "Hooks"。这些函数可以封装和抽象出组件逻辑，然后在多个组件中重用。这个概念与 React 的 Hooks 类似，但在 Vue 中并没有正式的 "Hooks" 术语。</p>
        <p>例如，你可以创建一个用于获取和管理 API 数据的 "Hook"：</p>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token keyword module keyword-import">import</span> <span class="token imports"><span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span></span> <span class="token keyword module keyword-from">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword module keyword-import">import</span> <span class="token imports">axios</span> <span class="token keyword module keyword-from">from</span> <span class="token string">"axios"</span><span class="token punctuation">;</span>

<span class="token keyword module keyword-export">export</span> <span class="token keyword keyword-function">function</span> <span class="token function">useApi</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-const">const</span> data <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword null nil keyword-null">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword keyword-const">const</span> loading <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword keyword-const">const</span> error <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword null nil keyword-null">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token keyword keyword-async">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
    loading<span class="token punctuation">.</span><span class="token property-access">value</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword control-flow keyword-try">try</span> <span class="token punctuation">{</span>
      <span class="token keyword keyword-const">const</span> response <span class="token operator">=</span> <span class="token keyword control-flow keyword-await">await</span> axios<span class="token punctuation">.</span><span class="token method function property-access">get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
      data<span class="token punctuation">.</span><span class="token property-access">value</span> <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token property-access">data</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword control-flow keyword-catch">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      error<span class="token punctuation">.</span><span class="token property-access">value</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword control-flow keyword-finally">finally</span> <span class="token punctuation">{</span>
      loading<span class="token punctuation">.</span><span class="token property-access">value</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword control-flow keyword-return">return</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> loading<span class="token punctuation">,</span> error <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><p>然后在组件中使用此 "Hook"：</p>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token keyword module keyword-import">import</span> <span class="token imports"><span class="token punctuation">{</span> useApi <span class="token punctuation">}</span></span> <span class="token keyword module keyword-from">from</span> <span class="token string">"./hooks/useApi"</span><span class="token punctuation">;</span>

<span class="token keyword module keyword-export">export</span> <span class="token keyword module keyword-default">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-const">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> loading<span class="token punctuation">,</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useApi</span><span class="token punctuation">(</span><span class="token string">"/api/data"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword control-flow keyword-return">return</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> loading<span class="token punctuation">,</span> error <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><p>以上就是 Vue 3 中 "Hooks" 的基本概念。</p>
        <h2 id="使用场景">
          使用场景
        </h2>
        <p>Vue 3 的 Composition API（也被非正式地称为 "Hooks"）在许多场景中都非常有用。以下是一些常见的使用场景：</p>
        <ol>
          <li>
            <p><strong>逻辑重用和代码组织</strong>：如果你有一些在多个组件中重复的逻辑，你可以使用 Composition API 创建自定义的 "Hook"，然后在这些组件中重用这个 "Hook"。这可以使你的代码更加干净、更容易维护。</p>
          </li>
          <li>
            <p><strong>复杂组件的状态管理</strong>：在复杂的组件中，状态可能会变得非常复杂。使用 Composition API，你可以更清晰地组织和管理这些状态。例如，你可以将相关的状态放在一起，而不是将它们分散在 <code>data</code>、<code>computed</code> 和 <code>methods</code> 选项中。</p>
          </li>
          <li>
            <p><strong>在组件之间共享状态</strong>：你可以使用 <code>provide</code> 和 <code>inject</code> 函数在组件之间共享状态，而不需要将所有的状态通过 props 传递。这对于深层次的组件树特别有用。</p>
          </li>
          <li>
            <p><strong>集成第三方库</strong>：如果你正在使用一个第三方库，你可以创建一个自定义的 "Hook" 来封装这个库的使用。这样，你可以在你的组件中更容易地使用这个库。</p>
          </li>
          <li>
            <p><strong>异步操作</strong>：你可以使用 Composition API 来处理异步操作，如数据的获取。你可以在 <code>setup</code> 函数中使用 <code>async/await</code>，并使用响应式引用来存储异步操作的结果。</p>
          </li>
        </ol>
        <p>以上是一些使用 Vue 3 的 Composition API 的常见场景。这个 API 提供了一种新的、更灵活的方式来处理这些场景。</p>
      </div>
      <div v-show="activeName === 'second'">
        <img
          src="./options.awebp"
          alt="flowchart"
        >
        <img
          src="./options2.awebp"
          alt="flowchart"
        >
        <img
          src="./composition.awebp"
          alt="flowchart"
        >
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