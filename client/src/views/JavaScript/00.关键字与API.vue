<template>
  <div
    class="article-container"
    :class="{'md-sidebar-expand': !$store.state.isMdCollapse}"
  >
    <div class="crossnote markdown-preview">
      <h1
        id="javascript-关键字与-api"
        ebook-toc-level-1=""
        heading="JavaScript 关键字与 API "
      >
        JavaScript 关键字与 API
      </h1>
      <h2
        id="关键字"
        ebook-toc-level-2=""
        heading="关键字 "
      >
        关键字
      </h2>
      <p>JavaScript 的关键字是在语言中有特定用途的保留单词，开发者不能将这些关键字用作变量名、函数名或任何其他标识符名称。以下是 JavaScript 关键字列表：</p>
      <ul>
        <li><code>await</code>: 用于等待一个 <code>async</code> 函数的 <code>Promise</code> 返回。</li>
        <li><code>break</code>: 用于跳出循环或一个 <code>switch</code> 语句。</li>
        <li><code>case</code>: 与 <code>switch</code> 语句一起使用，定义一个分支。</li>
        <li><code>catch</code>: 与 <code>try</code> 和 <code>finally</code> 一起使用，用来捕获异常。</li>
        <li><code>class</code>: 用于定义一个类。</li>
        <li><code>const</code>: 用于声明一个块作用域的常量。</li>
        <li><code>continue</code>: 用于跳过当前循环的剩余部分，并继续执行下一次迭代。</li>
        <li><code>debugger</code>: 用于调用调试功能。</li>
        <li><code>default</code>: 与 <code>switch</code> 语句一起使用，定义默认分支。</li>
        <li><code>delete</code>: 用于删除对象的属性。</li>
        <li><code>do</code>: 与 <code>while</code> 一起使用，创建一个至少执行一次的循环。</li>
        <li><code>else</code>: 与 <code>if</code> 语句一起使用，定义一个条件不满足时执行的代码块。</li>
        <li><code>enum</code>: 目前在 JavaScript 中保留未使用，但在其他语言如 Java 中用于定义枚举。</li>
        <li><code>export</code>: 用于导出模块中的函数、对象或原始值。</li>
        <li><code>extends</code>: 用于在类声明中创建一个子类。</li>
        <li><code>false</code>: 布尔类型的字面量，表示逻辑上的“假”。</li>
        <li><code>finally</code>: 与 <code>try</code> 和 <code>catch</code> 一起使用，定义无论是否有异常抛出都会执行的代码块。</li>
        <li><code>for</code>: 创建一个循环，包括初始化表达式、条件和增量表达式。</li>
        <li><code>function</code>: 用于声明一个函数。</li>
        <li><code>if</code>: 用于创建一个条件分支。</li>
        <li><code>import</code>: 用于导入模块中的函数、对象或原始值。</li>
        <li><code>in</code>: 用于检测对象是否拥有某个属性。</li>
        <li><code>instanceof</code>: 用于检测一个对象是否是某个构造函数的实例。</li>
        <li><code>let</code>: 用于声明一个块作用域的变量。</li>
        <li><code>new</code>: 用于创建一个对象实例。</li>
        <li><code>null</code>: 表示空值的字面量。</li>
        <li><code>return</code>: 用于从函数返回值。</li>
        <li><code>super</code>: 用于调用父类的构造函数或方法。</li>
        <li><code>switch</code>: 用于创建一个多分支的选择结构。</li>
        <li><code>this</code>: 用于引用当前对象。</li>
        <li><code>throw</code>: 用于抛出异常。</li>
        <li><code>true</code>: 布尔类型的字面量，表示逻辑上的“真”。</li>
        <li><code>try</code>: 用于标记一个尝试执行的代码块，并指定一个或多个响应异常的捕获。</li>
        <li><code>typeof</code>: 用于确定一个变量或表达式的类型。</li>
        <li><code>var</code>: 用于声明一个函数作用域的变量。</li>
        <li><code>void</code>: 用于指定一个表达式不返回值。</li>
        <li><code>while</code>: 创建一个条件循环。</li>
        <li><code>with</code>: 用于设置代码在特定对象的上下文中执行，不推荐使用，严格模式下不允许使用。</li>
        <li><code>yield</code>: 用于暂停和恢复一个生成器函数。</li>
      </ul>
      <p>此外，还有一些被视为 "将来的保留字"，根据 ECMAScript 规范的不同版本，这些保留字可能会有变化。在某些情况下，它们只在严格模式下被视为保留字。这些包括：</p>
      <ul>
        <li><code>implements</code></li>
        <li><code>interface</code></li>
        <li><code>let</code></li>
        <li><code>package</code></li>
        <li><code>private</code></li>
        <li><code>protected</code></li>
        <li><code>public</code></li>
        <li><code>static</code></li>
        <li><code>yield</code></li>
      </ul>
      <p>开发者应当避免使用这些关键字作为变量名或其他标识符，以防止语法错误和未来的兼容性问题。</p>
      <h2
        id="api"
        ebook-toc-level-2=""
        heading="API "
      >
        API
      </h2>
      <p>JavaScript 语言本身是一种编程语言的规范，它定义了语法和基础操作。与此同时，JavaScript 还可以通过各种 API（应用程序编程接口）与浏览器以及其他环境（如 Node.js）进行交互。以下是一些常见的 JavaScript API：</p>
      <h3
        id="dom-文档对象模型-api"
        ebook-toc-level-3=""
        heading="<strong>DOM (文档对象模型) API</strong> "
      >
        <strong>DOM (文档对象模型) API</strong>
      </h3>
      <ul>
        <li>用于操作 HTML 和 XML 文档的结构、样式和内容。</li>
        <li>例如：<code>document.getElementById()</code>, <code>document.createElement()</code>, <code>element.innerHTML</code>, <code>element.addEventListener()</code> 等。</li>
      </ul>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token comment">// 获取一个元素并改变其文本内容</span>
<span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">"myElement"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token property-access">textContent</span> <span class="token operator">=</span> <span class="token string">"Hello, World!"</span><span class="token punctuation">;</span>
</code></pre><h3
        id="bom-浏览器对象模型-api"
        ebook-toc-level-3=""
        heading="<strong>BOM (浏览器对象模型) API</strong> "
      >
        <strong>BOM (浏览器对象模型) API</strong>
      </h3>
      <ul>
        <li>提供与浏览器交互的方法，如窗口管理、定时器、导航等。</li>
        <li>例如：<code>window.location</code>, <code>window.setTimeout()</code>, <code>window.setInterval()</code>, <code>window.alert()</code> 等。</li>
      </ul>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token comment">// 使用 `setTimeout` 延迟执行一个函数</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"Hello after 3 seconds"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h3
        id="canvas-api"
        ebook-toc-level-3=""
        heading="<strong>Canvas API</strong> "
      >
        <strong>Canvas API</strong>
      </h3>
      <ul>
        <li>允许在网页上绘制 2D 图形。</li>
        <li>例如：<code>getContext()</code>, <code>fillRect()</code>, <code>drawImage()</code> 等。</li>
      </ul>
      <pre
        data-role="codeBlock"
        data-info="template"
        class="language-template template"
      ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myCanvas<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>
</code></pre><pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token comment">// 在画布上绘制一个矩形</span>
<span class="token keyword keyword-var">var</span> canvas <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">"myCanvas"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword keyword-var">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token method function property-access">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token property-access">fillStyle</span> <span class="token operator">=</span> <span class="token string">"blue"</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token method function property-access">fillRect</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h3
        id="webgl-api"
        ebook-toc-level-3=""
        heading="<strong>WebGL API</strong> "
      >
        <strong>WebGL API</strong>
      </h3>
      <ul>
        <li>用于在浏览器中渲染交互式 3D 和 2D 图形。</li>
        <li>例如：<code>createShader()</code>, <code>createProgram()</code>, <code>drawElements()</code> 等。</li>
      </ul>
      <pre
        data-role="codeBlock"
        data-info="template"
        class="language-template template"
      ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>glcanvas<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>640<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>480<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>
</code></pre><pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token comment">// 初始化 WebGL 上下文（更复杂的示例需要更多代码）</span>
<span class="token keyword keyword-var">var</span> canvas <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">"glcanvas"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword keyword-var">var</span> gl <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token method function property-access">getContext</span><span class="token punctuation">(</span><span class="token string">"webgl"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>gl<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"WebGL not supported, falling back on experimental-webgl"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  gl <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token method function property-access">getContext</span><span class="token punctuation">(</span><span class="token string">"experimental-webgl"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>gl<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"Your browser does not support WebGL"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><h3
        id="fetch-api"
        ebook-toc-level-3=""
        heading="<strong>Fetch API</strong> "
      >
        <strong>Fetch API</strong>
      </h3>
      <ul>
        <li>用于发起网络请求和处理响应。</li>
        <li>例如：<code>fetch()</code>, <code>Headers</code>, <code>Request</code>, <code>Response</code> 等。</li>
      </ul>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token comment">// 发送一个 GET 请求</span>
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://api.example.com/data"</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token method function property-access">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> response<span class="token punctuation">.</span><span class="token method function property-access">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token method function property-access">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token keyword control-flow keyword-catch">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">error</span><span class="token punctuation">(</span><span class="token string">"Error:"</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h3
        id="web-audio-api"
        ebook-toc-level-3=""
        heading="<strong>Web Audio API</strong> "
      >
        <strong>Web Audio API</strong>
      </h3>
      <ul>
        <li>用于在网页上处理和合成音频。</li>
        <li>例如：<code>AudioContext</code>, <code>AudioNode</code>, <code>AudioBufferSourceNode</code> 等。</li>
      </ul>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token comment">// 创建一个简单的音调</span>
<span class="token keyword keyword-var">var</span> audioContext <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token punctuation">(</span><span class="token dom variable">window</span><span class="token punctuation">.</span><span class="token property-access"><span class="token maybe-class-name">AudioContext</span></span> <span class="token operator">||</span> <span class="token dom variable">window</span><span class="token punctuation">.</span><span class="token property-access">webkitAudioContext</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword keyword-var">var</span> oscillator <span class="token operator">=</span> audioContext<span class="token punctuation">.</span><span class="token method function property-access">createOscillator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
oscillator<span class="token punctuation">.</span><span class="token property-access">type</span> <span class="token operator">=</span> <span class="token string">"square"</span><span class="token punctuation">;</span>
oscillator<span class="token punctuation">.</span><span class="token property-access">frequency</span><span class="token punctuation">.</span><span class="token method function property-access">setValueAtTime</span><span class="token punctuation">(</span><span class="token number">440</span><span class="token punctuation">,</span> audioContext<span class="token punctuation">.</span><span class="token property-access">currentTime</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置频率为 440 Hz</span>
oscillator<span class="token punctuation">.</span><span class="token method function property-access">connect</span><span class="token punctuation">(</span>audioContext<span class="token punctuation">.</span><span class="token property-access">destination</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
oscillator<span class="token punctuation">.</span><span class="token method function property-access">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h3
        id="web-storage-api"
        ebook-toc-level-3=""
        heading="<strong>Web Storage API</strong> "
      >
        <strong>Web Storage API</strong>
      </h3>
      <ul>
        <li>提供了存储键值对的方法。</li>
        <li>例如：<code>localStorage</code>, <code>sessionStorage</code>。</li>
      </ul>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token comment">// 存储数据</span>
<span class="token dom variable">localStorage</span><span class="token punctuation">.</span><span class="token method function property-access">setItem</span><span class="token punctuation">(</span><span class="token string">"myKey"</span><span class="token punctuation">,</span> <span class="token string">"myValue"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 检索数据</span>
<span class="token keyword keyword-var">var</span> data <span class="token operator">=</span> <span class="token dom variable">localStorage</span><span class="token punctuation">.</span><span class="token method function property-access">getItem</span><span class="token punctuation">(</span><span class="token string">"myKey"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: myValue</span>
</code></pre><h3
        id="indexeddb-api"
        ebook-toc-level-3=""
        heading="<strong>IndexedDB API</strong> "
      >
        <strong>IndexedDB API</strong>
      </h3>
      <ul>
        <li>用于在客户端存储大量结构化数据，并使用索引进行高性能搜索。</li>
        <li>例如：<code>indexedDB.open()</code>, <code>createObjectStore()</code>, <code>IDBTransaction</code> 等。</li>
      </ul>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token comment">// 打开数据库（更完整的示例需要更多代码）</span>
<span class="token keyword keyword-var">var</span> request <span class="token operator">=</span> <span class="token dom variable">window</span><span class="token punctuation">.</span><span class="token property-access">indexedDB</span><span class="token punctuation">.</span><span class="token method function property-access">open</span><span class="token punctuation">(</span><span class="token string">"MyTestDatabase"</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
request<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">onerror</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 错误处理</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
request<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">onsuccess</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 成功处理</span>
  <span class="token keyword keyword-var">var</span> db <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token property-access">target</span><span class="token punctuation">.</span><span class="token property-access">result</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><h3
        id="file-api"
        ebook-toc-level-3=""
        heading="<strong>File API</strong> "
      >
        <strong>File API</strong>
      </h3>
      <ul>
        <li>用于处理文件读写操作。</li>
        <li>例如：<code>FileReader</code>, <code>Blob</code>, <code>FileList</code> 等。</li>
      </ul>
      <pre
        data-role="codeBlock"
        data-info="template"
        class="language-template template"
      ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fileInput<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token comment">// 读取用户选择的文件</span>
<span class="token keyword keyword-var">var</span> input <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">"fileInput"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
input<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span><span class="token string">"change"</span><span class="token punctuation">,</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-var">var</span> file <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token property-access">target</span><span class="token punctuation">.</span><span class="token property-access">files</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword keyword-var">var</span> reader <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  reader<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">onload</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token property-access">target</span><span class="token punctuation">.</span><span class="token property-access">result</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  reader<span class="token punctuation">.</span><span class="token method function property-access">readAsText</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h3
        id="geolocation-api"
        ebook-toc-level-3=""
        heading="<strong>Geolocation API</strong> "
      >
        <strong>Geolocation API</strong>
      </h3>
      <ul>
        <li>
          <p>允许网站访问用户的地理位置信息。</p>
        </li>
        <li>
          <p>例如：<code>navigator.geolocation.getCurrentPosition()</code>, <code>watchPosition()</code> 等。</p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token comment">// 获取用户的当前位置</span>
<span class="token dom variable">navigator</span><span class="token punctuation">.</span><span class="token property-access">geolocation</span><span class="token punctuation">.</span><span class="token method function property-access">getCurrentPosition</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Latitude:"</span><span class="token punctuation">,</span> position<span class="token punctuation">.</span><span class="token property-access">coords</span><span class="token punctuation">.</span><span class="token property-access">latitude</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Longitude:"</span><span class="token punctuation">,</span> position<span class="token punctuation">.</span><span class="token property-access">coords</span><span class="token punctuation">.</span><span class="token property-access">longitude</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
      </ul>
      <h3
        id="web-workers-api"
        ebook-toc-level-3=""
        heading="<strong>Web Workers API</strong> "
      >
        <strong>Web Workers API</strong>
      </h3>
      <ul>
        <li>
          <p>允许运行后台脚本而不干扰主线程。</p>
        </li>
        <li>
          <p>例如：<code>Worker</code>, <code>postMessage()</code>, <code>onmessage</code> 等。</p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token comment">// 创建一个新的 Worker</span>
<span class="token keyword keyword-var">var</span> myWorker <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token string">"worker.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myWorker<span class="token punctuation">.</span><span class="token method function property-access">postMessage</span><span class="token punctuation">(</span><span class="token string">"Hello, worker!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myWorker<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">onmessage</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Message received from worker:"</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token property-access">data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
        </li>
      </ul>
      <h3
        id="websockets-api"
        ebook-toc-level-3=""
        heading="<strong>WebSockets API</strong> "
      >
        <strong>WebSockets API</strong>
      </h3>
      <ul>
        <li>
          <p>用于在网页和服务器之间建立一个持久的连接，以便任何一方可以开始发送数据。</p>
        </li>
        <li>
          <p>例如：<code>WebSocket</code>, <code>onopen</code>, <code>onmessage</code>, <code>send()</code> 等。</p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token comment">// 创建一个 WebSocket 连接</span>
<span class="token keyword keyword-var">var</span> socket <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">"ws://www.example.com/socketserver"</span><span class="token punctuation">,</span> <span class="token string">"protocol"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
socket<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">onopen</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  socket<span class="token punctuation">.</span><span class="token method function property-access">send</span><span class="token punctuation">(</span><span class="token string">"Hello Server!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
socket<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">onmessage</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Message from server "</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span><span class="token property-access">data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
        </li>
      </ul>
      <h3
        id="history-api"
        ebook-toc-level-3=""
        heading="<strong>History API</strong> "
      >
        <strong>History API</strong>
      </h3>
      <ul>
        <li>
          <p>用于操作浏览器会话历史记录。</p>
        </li>
        <li>
          <p>例如：<code>history.pushState()</code>, <code>history.replaceState()</code>, <code>onpopstate</code> 等。</p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token comment">// 添加一个新的状态</span>
history<span class="token punctuation">.</span><span class="token method function property-access">pushState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">"title 1"</span><span class="token punctuation">,</span> <span class="token string">"?page=1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 替换当前状态</span>
history<span class="token punctuation">.</span><span class="token method function property-access">replaceState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">"title 2"</span><span class="token punctuation">,</span> <span class="token string">"?page=2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 监听 popstate 事件</span>
<span class="token dom variable">window</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">onpopstate</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>
    <span class="token string">"location: "</span> <span class="token operator">+</span>
      <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token property-access">location</span> <span class="token operator">+</span>
      <span class="token string">", state: "</span> <span class="token operator">+</span>
      <span class="token known-class-name class-name">JSON</span><span class="token punctuation">.</span><span class="token method function property-access">stringify</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
        </li>
      </ul>
      <h3
        id="service-workers-api"
        ebook-toc-level-3=""
        heading="<strong>Service Workers API</strong> "
      >
        <strong>Service Workers API</strong>
      </h3>
      <ul>
        <li>
          <p>使得网站能够控制网络请求，缓存文件，以及在没有网络连接的情况下提供功能。</p>
        </li>
        <li>
          <p>例如：<code>ServiceWorker</code>, <code>install</code>, <code>activate</code>, <code>fetch</code> 事件等。</p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token comment">// 注册一个 Service Worker（更完整的示例需要更多代码）</span>
<span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span><span class="token string">"serviceWorker"</span> <span class="token keyword keyword-in">in</span> <span class="token dom variable">navigator</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token dom variable">navigator</span><span class="token punctuation">.</span><span class="token property-access">serviceWorker</span>
    <span class="token punctuation">.</span><span class="token method function property-access">register</span><span class="token punctuation">(</span><span class="token string">"/sw.js"</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token method function property-access">then</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">registration</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>
        <span class="token string">"Service Worker Registered with scope:"</span><span class="token punctuation">,</span>
        registration<span class="token punctuation">.</span><span class="token property-access">scope</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token keyword control-flow keyword-catch">catch</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Service Worker registration failed:"</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
        </li>
      </ul>
      <h3
        id="webrtc-api"
        ebook-toc-level-3=""
        heading="<strong>WebRTC API</strong> "
      >
        <strong>WebRTC API</strong>
      </h3>
      <ul>
        <li>
          <p>用于网页浏览器之间的实时通信。</p>
        </li>
        <li>
          <p>例如：<code>RTCPeerConnection</code>, <code>RTCSessionDescription</code>, <code>navigator.mediaDevices.getUserMedia()</code> 等。</p>
          <pre
            data-role="codeBlock"
            data-info="template"
            class="language-template template"
          ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>localVideo<span class="token punctuation">"</span></span> <span class="token attr-name">autoplay</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>
</code></pre><pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token comment">// 获取视频流并显示在页面上（需要信令和 STUN/TURN 服务器配置）</span>
<span class="token dom variable">navigator</span><span class="token punctuation">.</span><span class="token property-access">mediaDevices</span>
  <span class="token punctuation">.</span><span class="token method function property-access">getUserMedia</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">video</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token method function property-access">then</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">stream</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-var">var</span> video <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">"localVideo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    video<span class="token punctuation">.</span><span class="token property-access">srcObject</span> <span class="token operator">=</span> stream<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token keyword control-flow keyword-catch">catch</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Error accessing media devices."</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
      </ul>
      <h3
        id="payment-request-api"
        ebook-toc-level-3=""
        heading="<strong>Payment Request API</strong> "
      >
        <strong>Payment Request API</strong>
      </h3>
      <ul>
        <li>
          <p>提供了一种简单、一致的方式来处理支付操作。</p>
        </li>
        <li>
          <p>例如：<code>PaymentRequest</code>, <code>PaymentResponse</code> 等。</p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token comment">// 发起支付请求</span>
<span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span><span class="token dom variable">window</span><span class="token punctuation">.</span><span class="token property-access"><span class="token maybe-class-name">PaymentRequest</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-const">const</span> methodData <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">supportedMethods</span><span class="token operator">:</span> <span class="token string">"basic-card"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">supportedNetworks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"visa"</span><span class="token punctuation">,</span> <span class="token string">"mastercard"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">supportedTypes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"debit"</span><span class="token punctuation">,</span> <span class="token string">"credit"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword keyword-const">const</span> details <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">total</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Total"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">amount</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">currency</span><span class="token operator">:</span> <span class="token string">"USD"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"65.00"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword keyword-const">const</span> request <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">PaymentRequest</span><span class="token punctuation">(</span>methodData<span class="token punctuation">,</span> details<span class="token punctuation">)</span><span class="token punctuation">;</span>

  request
    <span class="token punctuation">.</span><span class="token method function property-access">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token method function property-access">then</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">paymentResponse</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 处理 paymentResponse</span>
      paymentResponse<span class="token punctuation">.</span><span class="token method function property-access">complete</span><span class="token punctuation">(</span><span class="token string">"success"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token keyword control-flow keyword-catch">catch</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">error</span><span class="token punctuation">(</span><span class="token string">"Payment Request failed"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
        </li>
      </ul>
      <h3
        id="notifications-api"
        ebook-toc-level-3=""
        heading="<strong>Notifications API</strong> "
      >
        <strong>Notifications API</strong>
      </h3>
      <ul>
        <li>
          <p>允许网页显示系统级的通知信息。</p>
        </li>
        <li>
          <p>例如：<code>Notification</code>, <code>permission</code>, <code>requestPermission()</code> 等。</p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token comment">// 显示一个通知</span>
<span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span><span class="token string">"Notification"</span> <span class="token keyword keyword-in">in</span> <span class="token dom variable">window</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token maybe-class-name">Notification</span><span class="token punctuation">.</span><span class="token method function property-access">requestPermission</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">then</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">permission</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>permission <span class="token operator">===</span> <span class="token string">"granted"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword keyword-var">var</span> notification <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Notification</span><span class="token punctuation">(</span><span class="token string">"Hello, World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
        </li>
      </ul>
      <p>这些 API 提供了丰富的功能集，允许开发者创建复杂的应用程序。需要注意的是，不同的浏览器可能会有不同程度的支持，因此在开发时需要考虑兼容性问题。</p>
    </div>
    <mdSidebar :navigation="navigation" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue';
import mdSidebar from '@/components/mdSidebar.vue';

// Define a type for navigation items
type NavigationItem = {
  title: string;
  id: string;
  children: NavigationItem[];
};

// Define the type for the navigation ref
const navigation: Ref<NavigationItem[]> = ref([]);

onMounted(() => {
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
.article-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
}
@media screen and (min-width: 600px) {
  .article-container {
    padding-right: 50px;
  }
  .md-sidebar-expand {
    padding-right: 200px;
  }
}
</style>