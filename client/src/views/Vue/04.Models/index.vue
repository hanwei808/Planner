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
        <h1 id="multiple-v-models">
          Multiple v-models
        </h1>
        <h2 id="是什么">
          是什么
        </h2>
        <p>在 Vue.js 2.x 中，只能在一个组件上使用一个 <code>v-model</code>。这是因为 <code>v-model</code> 是一个语法糖，它将 <code>v-bind:value</code> 和 <code>v-on:input</code> 组合在一起，用于处理表单输入和组件的数据双向绑定。但是，这在处理复杂的表单和组件时可能会受到限制。</p>
        <p>Vue.js 3.x 引入了一个新特性，允许在一个组件上使用多个 <code>v-model</code>，这使得组件的数据绑定更加灵活和强大。你可以在一个组件上绑定多个值，并且可以自定义它们的属性和事件。</p>
        <p>在 Vue 3.x 中，<code>v-model</code> 的语法糖更加灵活，可以接受一个参数来定义属性和事件。例如，你可以这样使用：</p>
        <pre
          data-role="codeBlock"
          data-info="vue"
          class="language-vue vue"
        ><code>&lt;custom-input v-model:title="title" v-model:description="description" /&gt;
</code></pre><p>在上面的例子中，<code>custom-input</code> 组件同时绑定了 <code>title</code> 和 <code>description</code> 两个值。Vue 3.x 将这两个 <code>v-model</code> 展开为以下的 <code>v-bind</code> 和 <code>v-on</code>：</p>
        <pre
          data-role="codeBlock"
          data-info="vue"
          class="language-vue vue"
        ><code>&lt;custom-input
  :title="title"
  @update:title="(val) =&gt; (title = val)"
  :description="description"
  @update:description="(val) =&gt; (description = val)"
/&gt;
</code></pre><p>在 <code>custom-input</code> 组件内部，你可以通过 <code>this.$emit('update:title', newTitle)</code> 和 <code>this.$emit('update:description', newDescription)</code> 来更新 <code>title</code> 和 <code>description</code>。</p>
        <p>这是一个强大的新特性，使得 Vue.js 在处理复杂的表单和组件时更加灵活和强大。</p>
        <h2 id="使用场景">
          使用场景
        </h2>
        <p>多个 <code>v-model</code> 的使用场景主要在于需要在一个组件上绑定和管理多个值的情况。以下是一些可能的使用场景：</p>
        <ol>
          <li>
            <p><strong>复杂的表单组件</strong>：如果你有一个表单组件，它需要管理多个输入字段，如用户名、密码、电子邮件等，你可以使用多个 <code>v-model</code> 来分别绑定和管理这些字段。</p>
          </li>
          <li>
            <p><strong>自定义的日期选择器</strong>：日期选择器通常需要管理年、月、日三个值，你可以使用多个 <code>v-model</code> 来分别绑定和管理这三个值。</p>
          </li>
          <li>
            <p><strong>颜色选择器</strong>：颜色选择器通常需要管理 RGB 或 HSL 三个值，你可以使用多个 <code>v-model</code> 来分别绑定和管理这三个值。</p>
          </li>
          <li>
            <p><strong>自定义的滑块组件</strong>：如果你有一个滑块组件，它需要管理两个值（如最小值和最大值），你可以使用两个 <code>v-model</code> 来分别绑定和管理这两个值。</p>
          </li>
          <li>
            <p><strong>自定义的对话框或模态窗口</strong>：如果你有一个对话框或模态窗口，它需要管理多个值（如标题、内容、是否可见等），你可以使用多个 <code>v-model</code> 来分别绑定和管理这些值。</p>
          </li>
        </ol>
        <p>总的来说，多个 <code>v-model</code> 的使用场景主要在于需要在一个组件上绑定和管理多个值的情况。这使得 Vue.js 在处理复杂的表单和组件时更加灵活和强大。</p>
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