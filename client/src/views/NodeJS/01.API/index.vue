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
        <h1 id="api">
          API
        </h1>
        <p>Node.js 提供了很多内置的 API 来帮助开发者创建和管理网络应用。这些 API 大都是以模块的形式存在，你可以直接在你的应用中引入并使用它们。下面是一些常用的 Node.js API：</p>
        <h2 id="http-模块">
          HTTP 模块
        </h2>
        <ol>
          <li><strong>HTTP 模块</strong>：这个模块提供了创建 HTTP 服务器的工具，你可以使用它来创建你的 web 应用。</li>
        </ol>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token comment">// 创建一个简单的 HTTP 服务器</span>
<span class="token keyword keyword-const">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"http"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword keyword-const">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token method function property-access">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token method function property-access">end</span><span class="token punctuation">(</span><span class="token string">"Hello, World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

server<span class="token punctuation">.</span><span class="token method function property-access">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Server is listening on port 3000"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h2 id="file-systemfs模块">
          File System（fs）模块
        </h2>
        <ol start="2">
          <li><strong>File System（fs）模块</strong>：这个模块提供了操作文件系统的 API，例如读取文件、写入文件、删除文件等。</li>
        </ol>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token comment">// 读取一个文件</span>
<span class="token keyword keyword-const">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fs<span class="token punctuation">.</span><span class="token method function property-access">readFile</span><span class="token punctuation">(</span><span class="token string">"/path/to/file"</span><span class="token punctuation">,</span> <span class="token string">"utf8"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword control-flow keyword-throw">throw</span> err<span class="token punctuation">;</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h2 id="path-模块">
          Path 模块
        </h2>
        <ol start="3">
          <li><strong>Path 模块</strong>：这个模块提供了处理和转换文件路径的工具。</li>
        </ol>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token comment">// 解析一个文件路径</span>
<span class="token keyword keyword-const">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword keyword-const">const</span> filePath <span class="token operator">=</span> <span class="token string">"/path/to/file.txt"</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token method function property-access">basename</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：file.txt</span>
</code></pre><h2 id="url-模块">
          URL 模块
        </h2>
        <ol start="4">
          <li><strong>URL 模块</strong>：这个模块提供了处理和解析 URL 的工具。</li>
        </ol>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token comment">// 解析一个 URL</span>
<span class="token keyword keyword-const">const</span> url <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"url"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword keyword-const">const</span> myURL <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token method function property-access">parse</span><span class="token punctuation">(</span><span class="token string">"http://example.com/path?name=test"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>myURL<span class="token punctuation">.</span><span class="token property-access">host</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：example.com</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>myURL<span class="token punctuation">.</span><span class="token property-access">query</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：{ name: 'test' }</span>
</code></pre><h2 id="stream-模块">
          Stream 模块
        </h2>
        <ol start="5">
          <li><strong>Stream 模块</strong>：这个模块提供了处理流数据的 API，例如读取大文件或网络数据。</li>
        </ol>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token comment">// 读取一个大文件</span>
<span class="token keyword keyword-const">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword keyword-const">const</span> readStream <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token method function property-access">createReadStream</span><span class="token punctuation">(</span><span class="token string">"/path/to/bigfile"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

readStream<span class="token punctuation">.</span><span class="token method function property-access">on</span><span class="token punctuation">(</span><span class="token string">"data"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">chunk</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Received </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>chunk<span class="token punctuation">.</span><span class="token property-access">length</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> bytes of data.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

readStream<span class="token punctuation">.</span><span class="token method function property-access">on</span><span class="token punctuation">(</span><span class="token string">"end"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"There will be no more data."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h2 id="events-模块">
          Events 模块
        </h2>
        <ol start="6">
          <li><strong>Events 模块</strong>：这个模块提供了创建、触发和监听自定义事件的工具。</li>
        </ol>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token comment">// 创建和触发自定义事件</span>
<span class="token keyword keyword-const">const</span> <span class="token maybe-class-name">EventEmitter</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"events"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword keyword-class">class</span> <span class="token class-name">MyEmitter</span> <span class="token keyword keyword-extends">extends</span> <span class="token class-name">EventEmitter</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword keyword-const">const</span> myEmitter <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">MyEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

myEmitter<span class="token punctuation">.</span><span class="token method function property-access">on</span><span class="token punctuation">(</span><span class="token string">"event"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"an event occurred!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

myEmitter<span class="token punctuation">.</span><span class="token method function property-access">emit</span><span class="token punctuation">(</span><span class="token string">"event"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h2 id="buffer-模块">
          Buffer 模块
        </h2>
        <ol start="7">
          <li><strong>Buffer 模块</strong>：这个模块提供了处理二进制数据的工具。</li>
        </ol>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token comment">// 创建一个 Buffer，并写入数据</span>
<span class="token keyword keyword-const">const</span> buf <span class="token operator">=</span> <span class="token maybe-class-name">Buffer</span><span class="token punctuation">.</span><span class="token keyword module keyword-from">from</span><span class="token punctuation">(</span><span class="token string">"hello world"</span><span class="token punctuation">,</span> <span class="token string">"utf8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>buf<span class="token punctuation">.</span><span class="token method function property-access">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：hello world</span>
</code></pre><h2 id="crypto-模块">
          Crypto 模块
        </h2>
        <ol start="8">
          <li><strong>Crypto 模块</strong>：这个模块提供了加密和哈希功能。</li>
        </ol>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token comment">// 创建一个子进程，执行一个 shell 命令</span>
<span class="token keyword keyword-const">const</span> crypto <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"crypto"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword keyword-const">const</span> hash <span class="token operator">=</span> crypto<span class="token punctuation">.</span><span class="token method function property-access">createHash</span><span class="token punctuation">(</span><span class="token string">"sha256"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

hash<span class="token punctuation">.</span><span class="token method function property-access">update</span><span class="token punctuation">(</span><span class="token string">"some data to hash"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>hash<span class="token punctuation">.</span><span class="token method function property-access">digest</span><span class="token punctuation">(</span><span class="token string">"hex"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h2 id="child-processes-模块">
          Child Processes 模块
        </h2>
        <ol start="9">
          <li><strong>Child Processes 模块</strong>：这个模块可以创建和管理子进程。</li>
        </ol>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token comment">// 创建一个子进程，执行一个 shell 命令</span>
<span class="token keyword keyword-const">const</span> cluster <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"cluster"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword keyword-const">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"http"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword keyword-const">const</span> numCPUs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"os"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">cpus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">;</span>

<span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>cluster<span class="token punctuation">.</span><span class="token property-access">isMaster</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Master </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>process<span class="token punctuation">.</span><span class="token property-access">pid</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is running</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword control-flow keyword-for">for</span> <span class="token punctuation">(</span><span class="token keyword keyword-let">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> numCPUs<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cluster<span class="token punctuation">.</span><span class="token method function property-access">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  cluster<span class="token punctuation">.</span><span class="token method function property-access">on</span><span class="token punctuation">(</span><span class="token string">"exit"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">worker<span class="token punctuation">,</span> code<span class="token punctuation">,</span> signal</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">worker </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>worker<span class="token punctuation">.</span><span class="token property-access">process</span><span class="token punctuation">.</span><span class="token property-access">pid</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> died</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword control-flow keyword-else">else</span> <span class="token punctuation">{</span>
  http
    <span class="token punctuation">.</span><span class="token method function property-access">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token method function property-access">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      res<span class="token punctuation">.</span><span class="token method function property-access">end</span><span class="token punctuation">(</span><span class="token string">"hello world\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token method function property-access">listen</span><span class="token punctuation">(</span><span class="token number">8000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Worker </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>process<span class="token punctuation">.</span><span class="token property-access">pid</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> started</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><h2 id="cluster-模块">
          Cluster 模块
        </h2>
        <ol start="10">
          <li><strong>Cluster 模块</strong>：这个模块可以创建多个子进程，从而充分利用多核 CPU。</li>
        </ol>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token comment">// 创建一个子进程集群，每个子进程监听同一个端口</span>
<span class="token keyword keyword-const">const</span> cluster <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"cluster"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword keyword-const">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"http"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword keyword-const">const</span> numCPUs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"os"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">cpus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">;</span>

<span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>cluster<span class="token punctuation">.</span><span class="token property-access">isMaster</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Master </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>process<span class="token punctuation">.</span><span class="token property-access">pid</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is running</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword control-flow keyword-for">for</span> <span class="token punctuation">(</span><span class="token keyword keyword-let">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> numCPUs<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cluster<span class="token punctuation">.</span><span class="token method function property-access">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  cluster<span class="token punctuation">.</span><span class="token method function property-access">on</span><span class="token punctuation">(</span><span class="token string">"exit"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">worker<span class="token punctuation">,</span> code<span class="token punctuation">,</span> signal</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">worker </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>worker<span class="token punctuation">.</span><span class="token property-access">process</span><span class="token punctuation">.</span><span class="token property-access">pid</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> died</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword control-flow keyword-else">else</span> <span class="token punctuation">{</span>
  http
    <span class="token punctuation">.</span><span class="token method function property-access">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token method function property-access">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      res<span class="token punctuation">.</span><span class="token method function property-access">end</span><span class="token punctuation">(</span><span class="token string">"hello world\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token method function property-access">listen</span><span class="token punctuation">(</span><span class="token number">8000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Worker </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>process<span class="token punctuation">.</span><span class="token property-access">pid</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> started</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><p>以上只是 Node.js 提供的一部分 API，实际上还有更多。你可以在 Node.js 的官方文档中查看完整的 API 列表和详细的使用说明。</p>
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