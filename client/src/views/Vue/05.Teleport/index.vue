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
        <h1 id="teleport">
          Teleport
        </h1>
        <h2 id="是什么">
          是什么
        </h2>
        <p>Vue 3 的 Teleport 是一个新的核心特性，它允许我们将子组件的模板部分“传送”到 DOM 中的任何位置，而不仅仅是在当前组件的模板内。这对于处理一些特定的 UI 挑战非常有用，例如创建模态框、弹出窗口或通知等。</p>
        <p>这个特性的实现基于一个新的 <code>&lt;teleport&gt;</code> 组件，该组件接受一个 <code>to</code> 属性，该属性指定了我们希望将内容传送到的目标元素的选择器。</p>
        <p>例如，我们可以创建一个模态窗口组件，其内容被传送到页面的根元素下：</p>
        <pre
          data-role="codeBlock"
          data-info="vue"
          class="language-vue vue"
        ><code>&lt;template&gt;
  &lt;teleport to="body"&gt;
    &lt;div class="modal"&gt;
      &lt;!-- 模态窗口的内容 --&gt;
    &lt;/div&gt;
  &lt;/teleport&gt;
&lt;/template&gt;
</code></pre><p>在这个例子中，尽管模态窗口组件可能被嵌套在页面的深处，但其内容会被传送到页面的 body 元素下，从而避免了一些由于 CSS 层叠上下文和 overflow 属性引起的 UI 问题。</p>
        <p>Teleport 还提供了一个 <code>disabled</code> 属性，我们可以使用它来动态决定是否启用 teleport。如果 <code>disabled</code> 属性被设置为 <code>true</code>，那么内容将会在原地渲染，而不是被传送：</p>
        <pre
          data-role="codeBlock"
          data-info="vue"
          class="language-vue vue"
        ><code>&lt;template&gt;
  &lt;teleport to="body" :disabled="isDisabled"&gt;
    &lt;div class="modal"&gt;
      &lt;!-- 模态窗口的内容 --&gt;
    &lt;/div&gt;
  &lt;/teleport&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      isDisabled: true,
    };
  },
};
&lt;/script&gt;
</code></pre><p>在这个例子中，如果 <code>isDisabled</code> 的值为 <code>true</code>，那么模态窗口的内容将会在原地渲染，而不是被传送到 body 元素下。</p>
        <h2 id="使用场景">
          使用场景
        </h2>
        <p>Vue 3 的 Teleport 特性在处理一些特定的 UI 挑战时非常有用。下面是一些常见的使用场景：</p>
        <ol>
          <li>
            <p><strong>模态窗口和对话框</strong>：模态窗口和对话框通常需要覆盖整个页面或其大部分内容，而不是仅仅覆盖其父组件。使用 Teleport，我们可以将模态窗口的内容传送到页面的根元素下，从而避免了一些由于 CSS 层叠上下文和 overflow 属性引起的 UI 问题。</p>
          </li>
          <li>
            <p><strong>弹出菜单和工具提示</strong>：弹出菜单和工具提示也是类似的情况。它们通常需要显示在其他元素的上方，而不是仅仅显示在其父组件内。使用 Teleport，我们可以将这些元素的内容传送到 DOM 的任何位置，从而确保它们能够正确地显示在其他元素的上方。</p>
          </li>
          <li>
            <p><strong>通知和提示</strong>：通知和提示通常需要显示在页面的顶部或底部，而不是仅仅显示在其父组件内。使用 Teleport，我们可以将这些元素的内容传送到页面的根元素下，从而确保它们能够在页面的顶部或底部正确地显示。</p>
          </li>
          <li>
            <p><strong>全局加载/进度指示器</strong>：这些通常需要覆盖整个应用或者在顶部显示一条进度条。借助 Teleport，我们可以将这些元素的内容传送到页面的根元素下，从而确保它们能在整个应用中正确显示。</p>
          </li>
        </ol>
        <p>总的来说，任何需要将内容渲染到父组件之外的情况都可以考虑使用 Teleport。</p>
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