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
        <h1 id="组件封装">
          组件封装
        </h1>
        <h2 id="v-model">
          v-model
        </h2>
        <ol>
          <li>
            <p><strong>使用 <code>v-model</code> 进行双向数据绑定</strong>：在 Vue 3 中，你可以在自定义组件上使用 <code>v-model</code>，并且可以使用多个 <code>v-model</code>。这使得你可以创建可复用的控件，如输入框、复选框等。</p>
            <pre
              data-role="codeBlock"
              data-info="html"
              class="language-html html"
            ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom-input</span>
  <span class="token attr-name"><span class="token namespace">v-model:</span>title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span>
  <span class="token attr-name"><span class="token namespace">v-model:</span>description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>description<span class="token punctuation">"</span></span>
<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>custom-input</span><span class="token punctuation">&gt;</span></span>
</code></pre>
          </li>
        </ol>
        <h2 id="provide-和-inject">
          provide 和 inject
        </h2>
        <ol start="2">
          <li>
            <p><strong>使用 <code>provide</code> 和 <code>inject</code> 进行依赖注入</strong>：<code>provide</code> 和 <code>inject</code> 是 Vue 3 中新引入的两个函数，它们可以在父组件中创建一个值，并在任何子组件中使用。这对于跨组件共享数据非常有用。</p>
            <pre
              data-role="codeBlock"
              data-info="javascript"
              class="language-javascript javascript"
            ><code><span class="token keyword module keyword-import">import</span> <span class="token imports"><span class="token punctuation">{</span> provide<span class="token punctuation">,</span> inject <span class="token punctuation">}</span></span> <span class="token keyword module keyword-from">from</span> <span class="token string">'vue'</span>

<span class="token comment">// 在父组件中</span>
<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">'theme'</span><span class="token punctuation">,</span> <span class="token string">'dark'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 在子组件中</span>
<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-const">const</span> theme <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">'theme'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre>
          </li>
        </ol>
        <h2 id="ref-和-onmounted">
          ref 和 onMounted
        </h2>
        <ol start="3">
          <li>
            <p><strong>使用 <code>ref</code> 和 <code>onMounted</code> 进行 DOM 操作</strong>：在 Vue 3 中，你可以使用 <code>ref</code> 创建一个引用，然后在 <code>onMounted</code> 生命周期钩子中，当 DOM 已经挂载时，进行操作。</p>
            <pre
              data-role="codeBlock"
              data-info="javascript"
              class="language-javascript javascript"
            ><code><span class="token keyword module keyword-import">import</span> <span class="token imports"><span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span></span> <span class="token keyword module keyword-from">from</span> <span class="token string">'vue'</span>

<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-const">const</span> divRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword null nil keyword-null">null</span><span class="token punctuation">)</span>

  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>divRef<span class="token punctuation">.</span><span class="token property-access">value</span><span class="token punctuation">)</span> <span class="token comment">// logs the DOM element</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword control-flow keyword-return">return</span> <span class="token punctuation">{</span>
    divRef
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
          </li>
        </ol>
        <h2 id="reactive">
          reactive
        </h2>
        <ol start="4">
          <li>
            <p><strong>使用 <code>reactive</code> 进行复杂数据响应式处理</strong>：Vue 3 中的 <code>reactive</code> 函数允许我们创建一个响应式的对象。这对于处理复杂的数据结构非常有用。</p>
            <pre
              data-role="codeBlock"
              data-info="javascript"
              class="language-javascript javascript"
            ><code><span class="token keyword module keyword-import">import</span> <span class="token imports"><span class="token punctuation">{</span> reactive <span class="token punctuation">}</span></span> <span class="token keyword module keyword-from">from</span> <span class="token string">'vue'</span>

<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-const">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Hello Vue 3'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre>
          </li>
        </ol>
        <h2 id="watch-和-watcheffect">
          watch 和 watchEffect
        </h2>
        <ol start="5">
          <li>
            <p><strong>使用 <code>watch</code> 和 <code>watchEffect</code> 进行响应式数据监听</strong>：Vue 3 提供了 <code>watch</code> 和 <code>watchEffect</code> 函数，让我们能够观察和响应 Vue 组件中的动态变化。</p>
            <pre
              data-role="codeBlock"
              data-info="javascript"
              class="language-javascript javascript"
            ><code><span class="token keyword module keyword-import">import</span> <span class="token imports"><span class="token punctuation">{</span> ref<span class="token punctuation">,</span> watch<span class="token punctuation">,</span> watchEffect <span class="token punctuation">}</span></span> <span class="token keyword module keyword-from">from</span> <span class="token string">'vue'</span>

<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-const">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token function">watch</span><span class="token punctuation">(</span>count<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Count changed from </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>oldValue<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>newValue<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Count is now </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>count<span class="token punctuation">.</span><span class="token property-access">value</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre>
          </li>
        </ol>
        <h2 id="computed">
          computed
        </h2>
        <ol start="6">
          <li>
            <p><strong>使用 <code>computed</code> 创建计算属性</strong>：Vue 3 的 <code>computed</code> 函数允许我们创建一个计算属性，它将根据依赖的响应式数据动态计算其值。</p>
            <pre
              data-role="codeBlock"
              data-info="javascript"
              class="language-javascript javascript"
            ><code><span class="token keyword module keyword-import">import</span> <span class="token imports"><span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed <span class="token punctuation">}</span></span> <span class="token keyword module keyword-from">from</span> <span class="token string">'vue'</span>

<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-const">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword keyword-const">const</span> doubleCount <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> count<span class="token punctuation">.</span><span class="token property-access">value</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre>
          </li>
        </ol>
        <h2 id="emits">
          emits
        </h2>
        <ol start="7">
          <li>
            <p><strong>使用 <code>emits</code> 选项定义组件可以触发的事件</strong>：Vue 3 允许你在组件选项中使用 <code>emits</code> 选项来定义组件可以触发的事件。这对于文档和类型检查非常有用。</p>
            <pre
              data-role="codeBlock"
              data-info="javascript"
              class="language-javascript javascript"
            ><code><span class="token keyword module keyword-export">export</span> <span class="token keyword module keyword-default">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"update"</span><span class="token punctuation">,</span> <span class="token string">"close"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
          </li>
        </ol>
        <h2 id="defineprops-和-defineemits">
          defineProps 和 defineEmits
        </h2>
        <ol start="8">
          <li>
            <p><strong>使用 <code>defineProps</code> 和 <code>defineEmits</code> 进行类型安全的属性和事件定义</strong>：在 <code>script setup</code> 中，你可以使用 <code>defineProps</code> 和 <code>defineEmits</code> 函数来定义组件的属性和事件，这对于 TypeScript 用户来说可以提供类型安全。</p>
            <pre
              data-role="codeBlock"
              data-info="html"
              class="language-html html"
            ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword module keyword-import">import</span> <span class="token imports"><span class="token punctuation">{</span> defineProps<span class="token punctuation">,</span> defineEmits <span class="token punctuation">}</span></span> <span class="token keyword module keyword-from">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>

  <span class="token keyword keyword-const">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token known-class-name class-name">String</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword keyword-const">const</span> emits <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"update"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>
          </li>
        </ol>
        <h2 id="definecomponent-和-defineasynccomponent">
          defineComponent 和 defineAsyncComponent
        </h2>
        <ol start="9">
          <li>
            <p><strong>使用 <code>defineComponent</code> 和 <code>defineAsyncComponent</code> 创建组件</strong>：Vue 3 提供了 <code>defineComponent</code> 和 <code>defineAsyncComponent</code> 函数，让我们能够更方便地创建和使用组件。</p>
            <pre
              data-role="codeBlock"
              data-info="javascript"
              class="language-javascript javascript"
            ><code><span class="token keyword module keyword-import">import</span> <span class="token imports"><span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> defineAsyncComponent <span class="token punctuation">}</span></span> <span class="token keyword module keyword-from">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>

<span class="token keyword keyword-const">const</span> <span class="token maybe-class-name">MyComponent</span> <span class="token operator">=</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// component options</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword keyword-const">const</span> <span class="token maybe-class-name">MyAsyncComponent</span> <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span>
  <span class="token keyword module keyword-import">import</span><span class="token punctuation">(</span><span class="token string">"./MyComponent.vue"</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
          </li>
        </ol>
        <h2 id="nexttick">
          nextTick
        </h2>
        <ol start="10">
          <li>
            <p><strong>使用 <code>nextTick</code> 进行 DOM 更新后的操作</strong>：有时候，你可能需要在 DOM 更新后立即进行一些操作。此时，你可以使用 Vue 3 的 <code>nextTick</code> 函数。</p>
            <pre
              data-role="codeBlock"
              data-info="javascript"
              class="language-javascript javascript"
            ><code><span class="token keyword module keyword-import">import</span> <span class="token imports"><span class="token punctuation">{</span> nextTick <span class="token punctuation">}</span></span> <span class="token keyword module keyword-from">from</span> <span class="token string">'vue'</span>

<span class="token keyword keyword-async">async</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...some data changes</span>

  <span class="token keyword control-flow keyword-await">await</span> <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// DOM has been updated</span>
<span class="token punctuation">}</span>
</code></pre>
          </li>
        </ol>
        <h2 id="v-once">
          v-once
        </h2>
        <ol start="11">
          <li>
            <p><strong>使用 <code>v-once</code> 进行静态内容优化</strong>：如果你的组件有一部分内容是静态的，不会改变，你可以使用 <code>v-once</code> 指令来优化它。这样 Vue 就不会为这部分内容创建响应式依赖，可以提高性能。</p>
            <pre
              data-role="codeBlock"
              data-info="html"
              class="language-html html"
            ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-once</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- This part will not be reactive --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre>
          </li>
        </ol>
        <h2 id="v-memo">
          v-memo
        </h2>
        <ol start="12">
          <li>
            <p><strong>使用 <code>v-memo</code> 进行列表渲染优化</strong>：Vue 3.2 引入了 <code>v-memo</code> 指令，可以用于优化列表渲染。如果列表项的内容依赖于某些特定的数据，当这些数据没有改变时，Vue 就不会重新渲染该列表项。</p>
            <pre
              data-role="codeBlock"
              data-info="html"
              class="language-html html"
            ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in items<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.id<span class="token punctuation">"</span></span> <span class="token attr-name">v-memo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[item.value]<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- This part will not be re-rendered if item.value didn't change --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre>
          </li>
        </ol>
        <h2 id="v-is">
          v-is
        </h2>
        <ol start="13">
          <li>
            <p><strong>使用 <code>v-is</code> 动态组件</strong>：在 Vue 3 中，你可以使用 <code>v-is</code> 指令来动态地渲染不同的组件。</p>
            <pre
              data-role="codeBlock"
              data-info="html"
              class="language-html html"
            ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">v-is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dynamicComponent<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><pre
              data-role="codeBlock"
              data-info="javascript"
              class="language-javascript javascript"
            ><code><span class="token keyword module keyword-import">import</span> <span class="token imports"><span class="token punctuation">{</span> ref <span class="token punctuation">}</span></span> <span class="token keyword module keyword-from">from</span> <span class="token string">'vue'</span>

<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-const">const</span> dynamicComponent <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'MyComponent'</span><span class="token punctuation">)</span>

  <span class="token keyword control-flow keyword-return">return</span> <span class="token punctuation">{</span>
    dynamicComponent
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
          </li>
        </ol>
        <h2 id="use-函数hook">
          use 函数（Hook）
        </h2>
        <ol start="14">
          <li>
            <p><strong>使用 <code>use</code> 函数创建可复用的逻辑（Hook）</strong>：在 Vue 3 中，你可以创建自定义的 <code>use</code> 函数，这是一种组织和复用组件逻辑的方式。</p>
            <pre
              data-role="codeBlock"
              data-info="javascript"
              class="language-javascript javascript"
            ><code><span class="token keyword keyword-function">function</span> <span class="token function">useCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-const">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token keyword keyword-function">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    count<span class="token punctuation">.</span><span class="token property-access">value</span><span class="token operator">++</span>
  <span class="token punctuation">}</span>

  <span class="token keyword control-flow keyword-return">return</span> <span class="token punctuation">{</span>
    count<span class="token punctuation">,</span>
    increment
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-const">const</span> <span class="token punctuation">{</span> count<span class="token punctuation">,</span> increment <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre>
          </li>
        </ol>
        <h2 id="teleport">
          teleport
        </h2>
        <ol start="15">
          <li>
            <p><strong>使用 <code>teleport</code> 进行内容传送</strong>：<code>teleport</code> 是 Vue 3 中的一个新特性，它允许你在 DOM 结构中的任何位置渲染组件的一部分，而不仅仅是在它的父组件内。这对于创建模态框、通知、弹出菜单等组件非常有用。</p>
            <pre
              data-role="codeBlock"
              data-info="html"
              class="language-html html"
            ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>teleport</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#modal<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>This will be rendered inside #modal element<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>teleport</span><span class="token punctuation">&gt;</span></span>
</code></pre>
          </li>
        </ol>
        <h2 id="suspense">
          Suspense
        </h2>
        <ol start="16">
          <li>
            <p><strong>使用 <code>Suspense</code> 组件进行异步依赖处理</strong>：Vue 3 引入了 <code>Suspense</code> 组件，可以用于处理异步组件的加载状态。你可以为 <code>Suspense</code> 提供一个 <code>fallback</code> 插槽，当异步组件正在加载时，将显示该插槽的内容。</p>
            <pre
              data-role="codeBlock"
              data-info="html"
              class="language-html html"
            ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Suspense</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AsyncComponent</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#fallback</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Loading...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Suspense</span><span class="token punctuation">&gt;</span></span>
</code></pre>
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