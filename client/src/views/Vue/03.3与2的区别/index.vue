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
        <h1
          id="vue3-和-vue2-的区别"
          ebook-toc-level-1=""
          heading="Vue3 和 Vue2 的区别 "
        >
          Vue3 和 Vue2 的区别
        </h1>
        <h2
          id="大的变动"
          ebook-toc-level-2=""
          heading="大的变动 "
        >
          大的变动
        </h2>
        <h3
          id="编程方式选项式-option-api---组合式-composition-api"
          ebook-toc-level-3=""
          heading="编程方式：选项式 Option API -&amp;gt; 组合式 Composition API "
        >
          编程方式：选项式 Option API -&gt; 组合式 Composition API
        </h3>
        <p>Vue 3 的组合式 API (Composition API) 是一个新的可选的、更灵活的方式来组织和复用代码。相比于 Vue 2 的选项式 API，组合式 API 有以下优点：</p>
        <ol>
          <li>
            <p><strong>逻辑复用和代码组织</strong>：在 Vue 2 中，复用逻辑需要使用 mixins 或者高阶组件，但这些方法有一些问题，比如命名冲突、不清楚 mixin 中的逻辑、组件来源不明等。而组合式 API 提供了一种更好的复用逻辑的方式，可以清晰地组织和复用相关的代码，使得代码更易于理解和维护。</p>
          </li>
          <li>
            <p><strong>更好的类型推断</strong>：对于 TypeScript 用户来说，组合式 API 提供了更好的类型推断，使得 TypeScript 支持更为完善。</p>
          </li>
          <li>
            <p><strong>代码可读性</strong>：在大型组件中，相关的逻辑可能会分散在不同的选项中，这使得代码难以阅读和理解。而组合式 API 允许你按照逻辑关系组织代码，使得代码更易于阅读。</p>
          </li>
          <li>
            <p><strong>更好的控制</strong>：组合式 API 提供了更细粒度的响应性 API，这使得你可以更精确地控制响应性行为。</p>
          </li>
        </ol>
        <p>需要注意的是，组合式 API 并不是要取代选项式 API，而是为了解决选项式 API 在处理复杂逻辑时的一些问题。在许多情况下，选项式 API 仍然是一个简单有效的选择。</p>
        <h3
          id="响应式原理objectdefineproperty---proxy"
          ebook-toc-level-3=""
          heading="响应式原理：Object.defineProperty() -&amp;gt; Proxy() "
        >
          响应式原理：Object.defineProperty() -&gt; Proxy()
        </h3>
        <p><code>Proxy</code> 和 <code>Object.defineProperty</code> 都可以用来拦截和定义对象的行为，但它们在功能和工作方式上有显著的差异：</p>
        <p><strong>Object.defineProperty:</strong></p>
        <ol>
          <li><code>Object.defineProperty</code> 是 ES5 的特性，允许你精确地添加或修改对象的属性，并控制这些属性的行为。</li>
          <li>它可以让你控制属性的可枚举性（enumerability）、可写性（writability）、可配置性（configurability）以及定义 getter 和 setter。</li>
          <li><code>Object.defineProperty</code> 只能作用于单个属性。</li>
          <li>用于实现响应性的话，需要递归地遍历对象的每个属性，并对每个属性都使用 <code>Object.defineProperty</code>，这在大型对象或深层嵌套对象中可能会有性能问题。</li>
          <li>它无法监听到对象属性的添加或删除，只能工作在已经存在的属性上。</li>
        </ol>
        <p><strong>Proxy:</strong></p>
        <ol>
          <li><code>Proxy</code> 是 ES6 引入的特性，它允许你定义一个对象的整个行为，而不仅仅是对象的单个属性。</li>
          <li><code>Proxy</code> 可以拦截和自定义更多的操作，包括属性的读取、赋值、枚举、函数调用等几乎所有对象的基本操作。</li>
          <li><code>Proxy</code> 可以监听到属性的添加和删除，以及数组的索引赋值和长度变化等。</li>
          <li><code>Proxy</code> 提供的是对象级别的拦截，不需要递归地定义每个属性，因此在实现响应性系统时通常会有更好的性能表现。</li>
          <li><code>Proxy</code> 是不可撤销的，一旦创建，就无法取消拦截，除非通过另一个 Proxy 来包装它。</li>
        </ol>
        <p>总的来说，<code>Proxy</code> 提供了更强大、更灵活的拦截能力，而 <code>Object.defineProperty</code> 更适合于需要精确控制对象属性行为的场景。在现代 JavaScript 框架中，比如 Vue 3，<code>Proxy</code> 被用来实现响应性系统，因为它能更好地满足框架对性能和功能的要求。</p>
        <h3
          id="生命周期"
          ebook-toc-level-3=""
          heading="生命周期 "
        >
          生命周期
        </h3>
        <p>Vue 3 引入了新的生命周期钩子，以更好地与 Composition API 一起使用，同时保留了 Vue 2 中的大部分生命周期钩子以保证向后兼容性。以下是 Vue 2 和 Vue 3 生命周期钩子的对应关系：</p>
        <table>
          <thead>
            <tr>
              <th>Vue 2</th>
              <th>Vue 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>beforeCreate</td>
              <td>setup (这不是生命周期钩子，但在创建组件时会被调用)</td>
            </tr>
            <tr>
              <td>created</td>
              <td>setup (这不是生命周期钩子，但在创建组件时会被调用)</td>
            </tr>
            <tr>
              <td>beforeMount</td>
              <td>onBeforeMount</td>
            </tr>
            <tr>
              <td>mounted</td>
              <td>onMounted</td>
            </tr>
            <tr>
              <td>beforeUpdate</td>
              <td>onBeforeUpdate</td>
            </tr>
            <tr>
              <td>updated</td>
              <td>onUpdated</td>
            </tr>
            <tr>
              <td>beforeDestroy</td>
              <td>onBeforeUnmount</td>
            </tr>
            <tr>
              <td>destroyed</td>
              <td>onUnmounted</td>
            </tr>
            <tr>
              <td>errorCaptured</td>
              <td>onErrorCaptured</td>
            </tr>
            <tr>
              <td>-</td>
              <td>onRenderTracked</td>
            </tr>
            <tr>
              <td>-</td>
              <td>onRenderTriggered</td>
            </tr>
          </tbody>
        </table>
        <p>需要注意的是，<code>setup</code> 是 Vue 3 中 Composition API 的入口，它在组件实例被创建和初始化 props 和 reactive properties 之后调用，但在任何生命周期钩子被调用之前调用。<code>setup</code> 函数不等同于 Vue 2 中的 <code>created</code> 钩子，但通常可以在这里执行相同的逻辑。</p>
        <p>另外，Vue 3 中引入了两个新的调试相关的生命周期钩子 <code>onRenderTracked</code> 和 <code>onRenderTriggered</code>。这两个钩子可以帮助你理解组件的依赖项和何时重新渲染。</p>
        <p>最后，Vue 2 中的 <code>beforeDestroy</code> 和 <code>destroyed</code> 钩子在 Vue 3 中被重命名为 <code>onBeforeUnmount</code> 和 <code>onUnmounted</code>，以更好地反映它们的行为（即在组件卸载/解除挂载时被调用）。</p>
        <h3
          id="根实例创建-new-vue---createapp"
          ebook-toc-level-3=""
          heading="根实例创建 new Vue() -&amp;gt; createApp() "
        >
          根实例创建 new Vue() -&gt; createApp()
        </h3>
        <p>Vue 3 在创建根实例的方式上与 Vue 2 有一些不同。以下是两者的比较：</p>
        <p><strong>Vue 2 创建根实例的方式：</strong></p>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token keyword keyword-new">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">"#app"</span><span class="token punctuation">,</span>
  router<span class="token punctuation">,</span>
  store<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token maybe-class-name">App</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>在 Vue 2 中，我们使用 <code>new Vue()</code> 来创建和挂载根实例，并通过 <code>el</code> 选项指定一个页面内存在的 DOM 元素来挂载 Vue 实例。</p>
        <p><strong>Vue 3 创建根实例的方式：</strong></p>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token keyword module keyword-import">import</span> <span class="token imports"><span class="token punctuation">{</span> createApp <span class="token punctuation">}</span></span> <span class="token keyword module keyword-from">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword module keyword-import">import</span> <span class="token imports"><span class="token maybe-class-name">App</span></span> <span class="token keyword module keyword-from">from</span> <span class="token string">"./App.vue"</span><span class="token punctuation">;</span>
<span class="token keyword module keyword-import">import</span> <span class="token imports">router</span> <span class="token keyword module keyword-from">from</span> <span class="token string">"./router"</span><span class="token punctuation">;</span>
<span class="token keyword module keyword-import">import</span> <span class="token imports">store</span> <span class="token keyword module keyword-from">from</span> <span class="token string">"./store"</span><span class="token punctuation">;</span>

<span class="token function">createApp</span><span class="token punctuation">(</span><span class="token maybe-class-name">App</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">mount</span><span class="token punctuation">(</span><span class="token string">"#app"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>在 Vue 3 中，我们使用 <code>createApp()</code> 函数来创建应用。这个函数接受一个根组件。然后，我们可以链式调用 <code>use()</code> 函数来使用插件（如路由、状态管理等），最后调用 <code>mount()</code> 函数来挂载应用。</p>
        <p>这种改变使得 Vue 3 的根实例更加清晰和灵活，也更加符合现代 JavaScript 的模块化编程风格。此外，这也使得多个应用实例可以更容易地共存，因为它们都是通过 <code>createApp()</code> 创建的，而不是通过全局的 <code>Vue</code> 对象。</p>
        <h2
          id="细节变动"
          ebook-toc-level-2=""
          heading="细节变动 "
        >
          细节变动
        </h2>
        <ul>
          <li>template 模板：可以不包在一个根 div 里</li>
          <li>优先级：v-if 高于 v-for</li>
          <li>Vue3 不推荐使用 mixin 进行复用逻辑提取，而是推荐写成 hook 方式，不会有命名冲突的问题。</li>
        </ul>
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