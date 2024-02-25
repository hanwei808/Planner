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
        <h1 id="webpack">
          Webpack
        </h1>
        <h2 id="原理">
          原理
        </h2>
        <p>Webpack 是一个模块打包器（module bundler）。在 Webpack 看来，前端的所有资源文件（js、css、jpg、png、svg、scss、模板、字体等等）都会作为模块处理。它将根据模块的依赖关系进行静态分析，生成对应的静态资源。</p>
        <p>下面是 Webpack 的工作原理的简单概述：</p>
        <ol>
          <li>
            <p><strong>入口（Entry）</strong>：Webpack 需要知道从哪个文件开始构建，然后根据这个入口文件，找出所有的依赖关系。你可以在 Webpack 的配置文件中指定一个入口，例如：<code>entry: './src/index.js'</code>。</p>
          </li>
          <li>
            <p><strong>输出（Output）</strong>：Webpack 需要知道如何处理和在哪里输出它创建的 bundles。你可以在 Webpack 的配置文件中指定输出配置，例如：<code>output: { filename: 'bundle.js', path: path.resolve(__dirname, 'dist') }</code>。</p>
          </li>
          <li>
            <p><strong>加载器（Loaders）</strong>：Webpack 本身只理解 JavaScript，但是加载器转换这些文件（从输入到输出）。它们是在模块加载的时候进行的转换。例如，你可以使用<code>babel-loader</code>将所有的<code>.js</code>文件转换为 Webpack 能理解的有效模块。</p>
          </li>
          <li>
            <p><strong>插件（Plugins）</strong>：加载器被用于转换某些类型的模块，而插件则可以处理各种各样的任务，包括打包优化、压缩、定义环境变量等等。</p>
          </li>
          <li>
            <p><strong>模式（Mode）</strong>：你可以通过选择<code>development</code>或<code>production</code>之中的一个，来设置 mode 参数，以启用 Webpack 内置在相应环境下的优化。</p>
          </li>
        </ol>
        <p>Webpack 的工作流程是一个串行的过程，从启动到结束会依次执行以下流程：</p>
        <ol>
          <li>初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数。</li>
          <li>开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的<code>run</code>方法开始执行编译。</li>
          <li>确定入口：根据配置中的 entry 找出所有的入口文件。</li>
          <li>编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。</li>
          <li>完成模块编译：在经过第 4 步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系。</li>
          <li>输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会。</li>
          <li>输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。</li>
        </ol>
        <p>在以上过程中，Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。</p>
        <h2 id="运行机制">
          运行机制
        </h2>
        <p>Webpack 和 Gulp 是两种常用的前端构建工具，它们的运行机制有所不同。</p>
        <h3 id="webpack">
          Webpack
        </h3>
        <p>Webpack 是一个模块打包器（module bundler）。它将项目看作一个整体，通过一个给定的主文件（例如：index.js），Webpack 将从这个文件开始找到你的项目的所有依赖文件，使用 loaders 处理它们，然后打包成一个（或多个）bundle。</p>
        <p>Webpack 的主要特点：</p>
        <ol>
          <li><strong>代码分割</strong>：Webpack 有两种组织模块依赖的方式，同步和异步，异步依赖作为分割点，形成一个新的 chunk，从而实现了代码分割。</li>
          <li><strong>Loader</strong>：Webpack 本身只能处理 JavaScript 模块，如果要处理其他类型的文件，就需要使用对应的 loader 进行转换。</li>
          <li><strong>智能解析</strong>：Webpack 有一个智能解析器，几乎可以处理任何第三方库，无论它们的模块形式是 CommonJS、 AMD 还是普通的 JS 文件。</li>
          <li><strong>插件系统</strong>：Webpack 还有一个功能强大的插件系统，很多核心功能都是通过插件实现的。</li>
        </ol>
        <h3 id="gulp">
          Gulp
        </h3>
        <p>Gulp 是一个基于流的自动化构建工具。它将开发流程中的一些任务（如编译预处理器、压缩文件、运行测试等）自动化，这些任务在 Gulp 中被定义为一系列独立的步骤，可以逐个执行，也可以组合起来同时执行。</p>
        <p>Gulp 的主要特点：</p>
        <ol>
          <li><strong>易于使用</strong>：通过代码优于配置的策略，Gulp 让简单的任务简单，复杂的任务可管理。</li>
          <li><strong>构建快速</strong>：利用 Node.js 的流，你可以快速地构建项目并减少频繁的 IO 操作。</li>
          <li><strong>插件高质</strong>：Gulp 的插件都做到了尽可能小的作用域，每个插件都只做一件事。</li>
          <li><strong>强大的生态系统</strong>：使用 npm 来分发任务插件，从而让你有更多的选择。</li>
        </ol>
        <p>总的来说，Webpack 和 Gulp 的主要区别在于，Webpack 是模块打包器，专注于处理模块化的项目，而 Gulp 更像是一个任务运行器，用于自动化处理重复的任务。</p>
        <h2 id="配置示例">
          配置示例
        </h2>
        <p>以下是 Webpack 和 Gulp 的基本配置示例：</p>
        <h3 id="webpack-1">
          Webpack
        </h3>
        <p>一个基本的 webpack 配置文件（webpack.config.js）可能如下所示：</p>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token keyword keyword-const">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword keyword-const">const</span> <span class="token maybe-class-name">HtmlWebpackPlugin</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"html-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword keyword-const">const</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">CleanWebpackPlugin</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"clean-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">"./src/index.js"</span><span class="token punctuation">,</span> <span class="token comment">// 入口文件</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"bundle.js"</span><span class="token punctuation">,</span> <span class="token comment">// 输出的文件名</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token method function property-access">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"dist"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 输出路径</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// 正则匹配所有.css文件</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"style-loader"</span><span class="token punctuation">,</span> <span class="token string">"css-loader"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(png|svg|jpg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// 正则匹配图片文件</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"file-loader"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword keyword-new">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 每次构建前清理 /dist 文件夹</span>
    <span class="token keyword keyword-new">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 创建HtmlWebpackPlugin的实例，自动为你的bundle文件添加script引用</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"My App"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">"./src/index.html"</span><span class="token punctuation">,</span> <span class="token comment">// 指定模板路径</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><h3 id="gulp-1">
          Gulp
        </h3>
        <p>一个基本的 gulp 配置文件（gulpfile.js）可能如下所示：</p>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token keyword keyword-var">var</span> gulp <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"gulp"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword keyword-var">var</span> sass <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"gulp-sass"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 用于编译Sass文件</span>
<span class="token keyword keyword-var">var</span> uglify <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"gulp-uglify"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 用于压缩JS文件</span>
<span class="token keyword keyword-var">var</span> rename <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"gulp-rename"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 用于重命名文件</span>

gulp<span class="token punctuation">.</span><span class="token method function property-access">task</span><span class="token punctuation">(</span><span class="token string">"styles"</span><span class="token punctuation">,</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> gulp
    <span class="token punctuation">.</span><span class="token method function property-access">src</span><span class="token punctuation">(</span><span class="token string">"src/styles/*.scss"</span><span class="token punctuation">)</span> <span class="token comment">// 源文件路径</span>
    <span class="token punctuation">.</span><span class="token method function property-access">pipe</span><span class="token punctuation">(</span><span class="token function">sass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">on</span><span class="token punctuation">(</span><span class="token string">"error"</span><span class="token punctuation">,</span> sass<span class="token punctuation">.</span><span class="token property-access">logError</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 编译Sass，出错则记录错误</span>
    <span class="token punctuation">.</span><span class="token method function property-access">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token method function property-access">dest</span><span class="token punctuation">(</span><span class="token string">"./dist/styles"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出文件路径</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

gulp<span class="token punctuation">.</span><span class="token method function property-access">task</span><span class="token punctuation">(</span><span class="token string">"scripts"</span><span class="token punctuation">,</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> gulp
    <span class="token punctuation">.</span><span class="token method function property-access">src</span><span class="token punctuation">(</span><span class="token string">"src/scripts/*.js"</span><span class="token punctuation">)</span> <span class="token comment">// 源文件路径</span>
    <span class="token punctuation">.</span><span class="token method function property-access">pipe</span><span class="token punctuation">(</span><span class="token function">uglify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 压缩JS文件</span>
    <span class="token punctuation">.</span><span class="token method function property-access">pipe</span><span class="token punctuation">(</span><span class="token function">rename</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">suffix</span><span class="token operator">:</span> <span class="token string">".min"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 添加后缀</span>
    <span class="token punctuation">.</span><span class="token method function property-access">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token method function property-access">dest</span><span class="token punctuation">(</span><span class="token string">"./dist/scripts"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出文件路径</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

gulp<span class="token punctuation">.</span><span class="token method function property-access">task</span><span class="token punctuation">(</span><span class="token string">"default"</span><span class="token punctuation">,</span> gulp<span class="token punctuation">.</span><span class="token method function property-access">series</span><span class="token punctuation">(</span><span class="token string">"styles"</span><span class="token punctuation">,</span> <span class="token string">"scripts"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 默认任务，执行styles和scripts</span>
</code></pre><p>这些只是配置文件的基本形式，实际的项目可能需要更复杂的配置，包括处理其他类型的文件、优化输出、配置开发服务器等等。</p>
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