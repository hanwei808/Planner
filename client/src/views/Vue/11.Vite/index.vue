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
        <h1 id="vite">
          Vite
        </h1>
        <h2 id="原理">
          原理
        </h2>
        <p>Vite 的工作原理主要基于两个主要环节：开发（Dev）和构建（Build）。</p>
        <ol>
          <li>
            <p><strong>开发环节（Dev）</strong></p>
            <p>在开发环节，Vite 利用了现代浏览器原生支持的 ES 模块（ESM）进行开发服务器的工作。当一个源文件被请求时，Vite 会立即对其进行转换和编译，然后发送给浏览器。这种方式省去了打包步骤，使得服务器启动极快。</p>
            <p>除此之外，Vite 提供了高效的热模块替换（Hot Module Replacement，HMR）。当一个文件被修改时，Vite 会准确地推导出需要更新的模块，然后只重新编译这部分模块，而不是整个应用，这样可以实现更快的更新速度。</p>
          </li>
          <li>
            <p><strong>构建环节（Build）</strong></p>
            <p>在构建环节，Vite 使用 Rollup 进行预构建和打包。Rollup 是一个高效的模块捆绑器，它可以利用 ESM 的静态结构特性，实现更有效的代码摇树（tree shaking），生成更小的构建体积。同时，Rollup 还支持高效的代码拆分和动态导入，可以生成更高效的代码。</p>
            <p>Vite 还提供了一种插件系统，允许开发者使用 Rollup 插件，以及专为 Vite 设计的插件，这样可以扩展 Vite 的功能。</p>
          </li>
          <li>
            <p><strong>依赖预编译</strong></p>
            <p>Vite 会在开发环境中预编译所有依赖，将其转换为更有效的 ESM 格式，以提高开发环境的加载速度。这是因为一些第三方库可能包含复杂的或不常用的语法特性，这些特性在浏览器中可能无法直接运行，或者运行效率低下。通过预编译，可以将这些库转换为更简单、更高效的格式。</p>
          </li>
        </ol>
        <p>以上就是 Vite 的主要工作原理。通过这种方式，Vite 实现了快速的开发环境启动、高效的模块热替换、高效的构建等功能，大大提高了前端开发的效率。</p>
        <h2 id="运行机制">
          运行机制
        </h2>
        <p>Vite 是由尤雨溪（Vue.js 的作者）开发的一种新型前端构建工具，它采用了一种新颖的开发和构建策略，以提高开发效率和构建速度。下面是 Vite 的主要运行机制：</p>
        <ol>
          <li>
            <p><strong>开发环境：</strong> 在开发环境中，Vite 利用了现代浏览器支持的原生 ES 模块（ESM）特性，能够实现按需加载和即时编译，这样就无需预构建，可以大大提高开发环境的启动速度。</p>
          </li>
          <li>
            <p><strong>热模块替换（HMR）：</strong> Vite 提供了更精细的热模块替换机制。当文件发生变化时，只有被修改的文件会被重新编译和更新，而不是整个应用，这样可以实现更快的更新速度。</p>
          </li>
          <li>
            <p><strong>构建环境：</strong> 在生产环境中，Vite 使用 Rollup 进行打包。Rollup 是一种高效的模块捆绑器，它利用 ESM 的静态结构特性，可以实现更有效的代码摇树（tree shaking）和更小的构建体积。</p>
          </li>
          <li>
            <p><strong>插件系统：</strong> Vite 还提供了一种插件系统，允许开发者使用 Rollup 插件，以及专为 Vite 设计的插件，这样可以扩展 Vite 的功能。</p>
          </li>
          <li>
            <p><strong>开箱即用：</strong> Vite 支持 Vue、React 和 Preact 等现代框架，并提供了一键生成项目的脚手架功能。</p>
          </li>
          <li>
            <p><strong>CSS 代码分割：</strong> Vite 支持 CSS 代码分割，可以将 CSS 代码分割成多个独立的文件，以优化加载性能。</p>
          </li>
          <li>
            <p><strong>依赖预编译：</strong> Vite 可以预编译依赖，将其转换为更有效的 ESM 格式，以提高开发环境的加载速度。</p>
          </li>
        </ol>
        <p>以上就是 Vite 的主要运行机制，它的出现极大地改善了前端开发的体验和效率，可以说是现代前端工程化的一个重要里程碑。</p>
        <h2 id="配置示例">
          配置示例
        </h2>
        <p>Vite 的配置通常在项目根目录下的<code>vite.config.js</code>文件中进行。以下是一个基本的 Vite 配置示例：</p>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token comment">// vite.config.js</span>
<span class="token keyword module keyword-import">import</span> <span class="token imports">vue</span> <span class="token keyword module keyword-from">from</span> <span class="token string">"@vitejs/plugin-vue"</span><span class="token punctuation">;</span>
<span class="token keyword module keyword-import">import</span> <span class="token imports"><span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span></span> <span class="token keyword module keyword-from">from</span> <span class="token string">"vite"</span><span class="token punctuation">;</span>

<span class="token keyword module keyword-export">export</span> <span class="token keyword module keyword-default">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">"./"</span><span class="token punctuation">,</span> <span class="token comment">// 设置打包路径</span>
  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span> <span class="token comment">// 设置服务启动端口号</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 自动打开浏览器</span>
    <span class="token literal-property property">cors</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 允许跨域</span>
    <span class="token comment">// 设置代理，可以根据实际情况配置</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"/api"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">"http://localhost:5000"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token method function property-access">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 设置别名</span>
      <span class="token string-property property">"@"</span><span class="token operator">:</span> <span class="token string">"/src"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">outDir</span><span class="token operator">:</span> <span class="token string">"dist"</span><span class="token punctuation">,</span> <span class="token comment">// 指定输出路径</span>
    <span class="token literal-property property">assetsDir</span><span class="token operator">:</span> <span class="token string">"assets"</span><span class="token punctuation">,</span> <span class="token comment">// 指定生成静态资源的存放路径</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>在这个配置文件中，我们使用了 Vite 的 Vue 插件，设置了打包路径、服务启动端口号、是否自动打开浏览器、是否允许跨域、代理设置、路径别名、输出路径和静态资源的存放路径等选项。</p>
        <p>需要注意的是，Vite 的配置是非常灵活的，可以根据项目的实际需求进行适当的修改和调整。</p>
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