<template>
  <div
    class="article-container"
    :class="{'md-sidebar-expand': !$store.state.isMdCollapse}"
  >
    <div class="crossnote markdown-preview">
      <h1 id="异步编程">
        异步编程
      </h1>
      <h2 id="是什么">
        是什么
      </h2>
      <p>JavaScript 的异步编程是一种编程范式，它允许程序在等待某些长时间操作（例如文件读写、网络请求等）的完成时继续执行其他代码，而不是停下来等待。这种方式可以提高程序的性能和响应性，特别是在涉及到 I/O 操作时，因为 I/O 操作往往比 CPU 计算慢得多。</p>
      <h2 id="知识点">
        知识点
      </h2>
      <p>异步编程在 JavaScript 中是一个广泛的主题，涉及许多关键概念和知识点。以下是一些主要的知识点：</p>
      <ol>
        <li>
          <p><strong>事件循环（Event Loop）</strong>：</p>
          <ul>
            <li>了解 JavaScript 的事件循环是如何工作的，以及它是如何处理异步操作和回调队列的。</li>
            <li>理解宏任务（macro-tasks）和微任务（micro-tasks）的区别。</li>
          </ul>
        </li>
        <li>
          <p><strong>回调函数（Callbacks）</strong>：</p>
          <ul>
            <li>学习如何使用回调函数处理异步操作。</li>
            <li>理解回调函数可能导致的问题，例如回调地狱（callback hell）。</li>
          </ul>
        </li>
        <li>
          <p><strong>Promise 对象</strong>：</p>
          <ul>
            <li>掌握 Promise 的基本用法，包括创建 Promise、<code>then</code>、<code>catch</code> 和 <code>finally</code> 方法。</li>
            <li>理解 Promise 的状态（pending, fulfilled, rejected）和状态转换。</li>
            <li>学习如何用 Promises 处理并发异步操作，例如使用 <code>Promise.all</code>、<code>Promise.race</code> 等。</li>
          </ul>
        </li>
        <li>
          <p><strong>async/await</strong>：</p>
          <ul>
            <li>掌握如何使用 <code>async</code> 函数和 <code>await</code> 表达式简化异步操作。</li>
            <li>理解 <code>async/await</code> 如何与 Promises 一起工作。</li>
            <li>学习如何使用 try-catch 语句处理 <code>async/await</code> 中的错误。</li>
          </ul>
        </li>
        <li>
          <p><strong>错误处理</strong>：</p>
          <ul>
            <li>学习如何在异步编程中正确处理错误。</li>
            <li>理解在不同异步模式（回调、Promises、async/await）中的错误处理方式。</li>
          </ul>
        </li>
        <li>
          <p><strong>事件驱动编程</strong>：</p>
          <ul>
            <li>在 Node.js 中，学习如何使用事件发射器（EventEmitter）来处理异步事件。</li>
            <li>理解事件监听器和事件触发的概念。</li>
          </ul>
        </li>
        <li>
          <p><strong>异步迭代器和生成器</strong>：</p>
          <ul>
            <li>学习如何使用异步迭代器（Async Iterators）和异步生成器（Async Generators）来处理异步操作序列。</li>
          </ul>
        </li>
        <li>
          <p><strong>任务调度</strong>：</p>
          <ul>
            <li>理解 <code>setTimeout</code> 和 <code>setInterval</code> 的用法，以及它们如何在异步编程中调度任务。</li>
          </ul>
        </li>
        <li>
          <p><strong>异步模块和工具</strong>：</p>
          <ul>
            <li>学习现代 JavaScript 框架和库中的异步模型，例如 Node.js 的 <code>async</code> 模块、Axios、Fetch API 等。</li>
            <li>理解如何使用这些工具来执行异步 HTTP 请求和其他异步操作。</li>
          </ul>
        </li>
        <li>
          <p><strong>并发控制</strong>：</p>
          <ul>
            <li>掌握如何管理和控制并发执行的异步操作，例如通过使用信号量、互斥量等概念。</li>
          </ul>
        </li>
        <li>
          <p><strong>性能和优化</strong>：</p>
          <ul>
            <li>学习如何分析和优化异步代码的性能，例如避免不必要的异步操作、减少等待时间等。</li>
          </ul>
        </li>
      </ol>
      <p>这些知识点构成了 JavaScript 异步编程的基础，并且可以在不同的环境和场景下应用，包括浏览器和 Node.js。掌握这些概念对于编写高效、可维护和可扩展的异步代码至关重要。</p>
      <h2 id="异步编程方式">
        异步编程方式
      </h2>
      <p>在 JavaScript 中，处理异步编程的方式主要有以下几种：</p>
      <ol>
        <li>
          <p>
            <strong>回调函数（Callbacks）</strong>：<br>
            最初的异步编程模式是通过回调函数来实现的。你将一个函数作为参数传递给另一个函数，在异步操作完成时执行这个回调函数。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-function">function</span> <span class="token function">doSomethingAsync</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 执行异步任务</span>
    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token string">"result"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">doSomethingAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 处理结果</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>回调模式的问题在于，随着回调函数的嵌套，代码可读性和可维护性会大大降低，这种情况通常被称为“回调地狱”。</p>
        </li>
        <li>
          <p>
            <strong>Promise 对象</strong>：<br>
            Promises 提供了一个更好的错误处理和链式调用的机制。一个 Promise 代表了一个最终可能完成或失败的异步操作，并且它的结果值。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-new">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"result"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token method function property-access">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 处理结果</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token keyword control-flow keyword-catch">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 错误处理</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>Promises 改善了异步代码的结构，并允许更容易地组合和顺序执行异步操作。</p>
        </li>
        <li>
          <p>
            <strong>async/await</strong>：<br>
            <code>async/await</code> 是一个更现代的异步编程解决方案，它让异步代码看起来和同步代码更相似。一个 <code>async</code> 函数总是返回一个 Promise，而 <code>await</code> 关键字可以暂停 <code>async</code> 函数的执行，等待 Promise 解决。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-async">async</span> <span class="token keyword keyword-function">function</span> <span class="token function">asyncFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-try">try</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-const">const</span> result <span class="token operator">=</span> <span class="token keyword control-flow keyword-await">await</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"result"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 处理结果</span>
  <span class="token punctuation">}</span> <span class="token keyword control-flow keyword-catch">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 错误处理</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">asyncFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p><code>async/await</code> 使得编写异步代码更加直观和简洁。</p>
        </li>
        <li>
          <p>
            <strong>生成器（Generators）和异步迭代器（Async Iterators）</strong>：<br>
            生成器函数允许你通过 <code>yield</code> 关键字暂停和恢复函数的执行。当配合 Promises 使用时，它们可以用于控制异步流程。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-function">function</span><span class="token operator">*</span> <span class="token function">generatorFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-const">const</span> result <span class="token operator">=</span> <span class="token keyword control-flow keyword-yield">yield</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"result"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-const">const</span> iterator <span class="token operator">=</span> <span class="token function">generatorFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword keyword-const">const</span> promise <span class="token operator">=</span> iterator<span class="token punctuation">.</span><span class="token method function property-access">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token property-access">value</span><span class="token punctuation">;</span>
promise<span class="token punctuation">.</span><span class="token method function property-access">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> iterator<span class="token punctuation">.</span><span class="token method function property-access">next</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>异步迭代器是生成器的异步版本，允许 <code>await</code> 在 <code>for...of</code> 循环中使用。</p>
        </li>
        <li>
          <p>
            <strong>事件驱动（Event-driven）</strong>：<br>
            在 Node.js 中，事件驱动模型非常重要。<code>EventEmitter</code> 类用于处理异步事件。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-const">const</span> <span class="token maybe-class-name">EventEmitter</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"events"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword keyword-const">const</span> eventEmitter <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

eventEmitter<span class="token punctuation">.</span><span class="token method function property-access">on</span><span class="token punctuation">(</span><span class="token string">"event"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 处理事件</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
  eventEmitter<span class="token punctuation">.</span><span class="token method function property-access">emit</span><span class="token punctuation">(</span><span class="token string">"event"</span><span class="token punctuation">,</span> <span class="token string">"result"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>回调队列和微任务队列</strong>：<br>
            JavaScript 运行时使用事件循环，其中包括宏任务队列（用于诸如 <code>setTimeout</code>、<code>setInterval</code> 的回调）和微任务队列（用于 Promises）。了解这些机制有助于编写更高效的异步代码。
          </p>
        </li>
        <li>
          <p><strong>发布/订阅（Pub/Sub）</strong>：这是一种消息传递模式，我们可以订阅一个主题，当有新的消息发布到这个主题时，所有的订阅者都会收到这个消息。</p>
        </li>
      </ol>
      <p>选择哪种方式取决于具体的应用场景、代码可读性、易于维护等因素。随着 JavaScript 的发展，<code>async/await</code> 由于其简洁性和易于理解的特性，已经成为许多开发者处理异步操作的首选方法。</p>
      <h2 id="使用场景">
        使用场景
      </h2>
      <p>JavaScript 异步编程主要用于不能立即完成的操作，这些操作通常涉及等待，例如等待网络请求返回、等待文件读写操作完成、或者等待定时器触发。使用异步编程，可以避免这些操作阻塞主线程，从而提高应用程序的性能和响应性。</p>
      <p>以下是一些常见的异步编程使用场景及示例：</p>
      <ol>
        <li>
          <p>
            <strong>网络请求</strong>：<br>
            通常使用 <code>fetch()</code> 或 <code>XMLHttpRequest</code> 发送网络请求并处理响应。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://api.example.com/data"</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token method function property-access">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> response<span class="token punctuation">.</span><span class="token method function property-access">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token method function property-access">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token keyword control-flow keyword-catch">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">error</span><span class="token punctuation">(</span><span class="token string">"Error:"</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>文件操作</strong>（在 Node.js 中）：<br>
            异步读取文件内容，避免阻塞其他操作。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-const">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fs<span class="token punctuation">.</span><span class="token method function property-access">readFile</span><span class="token punctuation">(</span><span class="token string">"/path/to/file"</span><span class="token punctuation">,</span> <span class="token string">"utf8"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword control-flow keyword-return">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>数据库操作</strong>（在使用 Node.js 进行服务器端开发时）：<br>
            异步查询数据库，不会阻塞服务器的主线程。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-const">const</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Pool</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"pg"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword keyword-const">const</span> pool <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Pool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

pool<span class="token punctuation">.</span><span class="token method function property-access">query</span><span class="token punctuation">(</span><span class="token string">"SELECT * FROM my_table"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-throw">throw</span> err<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span><span class="token property-access">rows</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>定时任务</strong>：<br>
            使用 <code>setTimeout()</code> 或 <code>setInterval()</code> 执行延迟操作或定期重复操作。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token comment">// 打印消息后等待2秒钟</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"This message is shown after 2 seconds"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>事件监听</strong>：<br>
            在用户交互或其他事件触发时执行异步操作。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">"myButton"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 异步操作，比如发送一个网络请求</span>
  <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"/some-url"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">then</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>Promise 链</strong>：<br>
            处理多个异步操作的顺序。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token function">doAsyncTask1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token method function property-access">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result1</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>result1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword control-flow keyword-return">return</span> <span class="token function">doAsyncTask2</span><span class="token punctuation">(</span>result1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token method function property-access">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result2</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>result2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword control-flow keyword-return">return</span> <span class="token function">doAsyncTask3</span><span class="token punctuation">(</span>result2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token method function property-access">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result3</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>result3<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token keyword control-flow keyword-catch">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">error</span><span class="token punctuation">(</span><span class="token string">"Something went wrong"</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>异步循环</strong>：<br>
            使用 <code>async/await</code> 在循环中处理异步操作。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-async">async</span> <span class="token keyword keyword-function">function</span> <span class="token function">processArray</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-for">for</span> <span class="token punctuation">(</span><span class="token keyword keyword-const">const</span> item <span class="token keyword keyword-of">of</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-await">await</span> <span class="token function">processItem</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 假设 processItem 是异步的</span>
  <span class="token punctuation">}</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"All items have been processed"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>Web Workers</strong>：<br>
            执行耗时的计算，而不冻结用户界面。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-const">const</span> worker <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token string">"worker.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

worker<span class="token punctuation">.</span><span class="token method function property-access">postMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"start"</span><span class="token punctuation">,</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> <span class="token string">"Do some work"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

worker<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">onmessage</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Received message from worker:"</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span><span class="token property-access">data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
        </li>
      </ol>
      <p>这些场景展示了异步编程在 JavaScript 中的多样性和重要性。通过使用适当的异步模式和 API，开发者可以构建快速响应且用户体验良好的应用程序。</p>
      <p>除了上述场景，JavaScript 中的异步编程还可以用于以下方面：</p>
      <ol start="9">
        <li>
          <p>
            <strong>动画</strong>：<br>
            使用<code>requestAnimationFrame</code>进行平滑的动画，它会在浏览器重绘之前执行代码，这是一个异步操作。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-function">function</span> <span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 更新动画状态</span>
  <span class="token comment">// ...</span>

  <span class="token comment">// 请求下一帧动画</span>
  <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>animate<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 启动动画</span>
<span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>animate<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>流处理</strong>（在 Node.js 中）：<br>
            使用流（Streams）异步处理大文件，避免一次性加载到内存中，可以提高性能和效率。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-const">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword keyword-const">const</span> readStream <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token method function property-access">createReadStream</span><span class="token punctuation">(</span><span class="token string">"/path/to/large/file"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword keyword-const">const</span> writeStream <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token method function property-access">createWriteStream</span><span class="token punctuation">(</span><span class="token string">"/path/to/destination"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

readStream<span class="token punctuation">.</span><span class="token method function property-access">on</span><span class="token punctuation">(</span><span class="token string">"data"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">chunk</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
  writeStream<span class="token punctuation">.</span><span class="token method function property-access">write</span><span class="token punctuation">(</span>chunk<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

readStream<span class="token punctuation">.</span><span class="token method function property-access">on</span><span class="token punctuation">(</span><span class="token string">"end"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
  writeStream<span class="token punctuation">.</span><span class="token method function property-access">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>消息队列和任务调度</strong>（在 Node.js 中）：<br>
            使用异步操作处理后台任务和消息队列。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-const">const</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Queue</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"bull"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword keyword-const">const</span> myQueue <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token string">"myQueue"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

myQueue<span class="token punctuation">.</span><span class="token method function property-access">process</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">job<span class="token punctuation">,</span> done</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 异步处理任务</span>
  <span class="token function">doSomeAsyncWork</span><span class="token punctuation">(</span>job<span class="token punctuation">.</span><span class="token property-access">data</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">then</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

myQueue<span class="token punctuation">.</span><span class="token method function property-access">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">task</span><span class="token operator">:</span> <span class="token string">"send email"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>服务端事件推送</strong>（Server-Sent Events, SSE）：<br>
            使用 SSE 在服务器与客户端之间建立单向通信通道，服务器可以异步推送数据到客户端。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span><span class="token keyword keyword-typeof">typeof</span> <span class="token maybe-class-name">EventSource</span> <span class="token operator">!==</span> <span class="token string">"undefined"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-const">const</span> evtSource <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">EventSource</span><span class="token punctuation">(</span><span class="token string">"sse-server"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  evtSource<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">onmessage</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-const">const</span> newElement <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">createElement</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    newElement<span class="token punctuation">.</span><span class="token property-access">textContent</span> <span class="token operator">=</span> <span class="token string">"message: "</span> <span class="token operator">+</span> event<span class="token punctuation">.</span><span class="token property-access">data</span><span class="token punctuation">;</span>
    <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token property-access">body</span><span class="token punctuation">.</span><span class="token method function property-access">appendChild</span><span class="token punctuation">(</span>newElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>异步导入模块</strong>（Dynamic Imports）：<br>
            使用动态导入（<code>import()</code>）语法在需要时才加载模块，这是一个异步操作。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code>button<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token keyword keyword-async">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-const">const</span> module <span class="token operator">=</span> <span class="token keyword control-flow keyword-await">await</span> <span class="token keyword module keyword-import">import</span><span class="token punctuation">(</span><span class="token string">"./module.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  module<span class="token punctuation">.</span><span class="token method function property-access">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>Promise.all 和 Promise.race</strong>：<br>
            同时处理多个异步操作，<code>Promise.all</code> 等待所有操作完成，而 <code>Promise.race</code> 返回最先完成的操作。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token known-class-name class-name">Promise</span><span class="token punctuation">.</span><span class="token method function property-access">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"/endpoint1"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"/endpoint2"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">then</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>response1<span class="token punctuation">,</span> response2<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 两个请求都完成后的处理</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token known-class-name class-name">Promise</span><span class="token punctuation">.</span><span class="token method function property-access">race</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"/endpoint1"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"/endpoint2"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">then</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">firstResponse</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 最先完成的请求的处理</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>异步迭代器和生成器</strong>：<br>
            使用异步迭代器 (<code>for-await-of</code>) 处理或生成异步流的数据。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-async">async</span> <span class="token keyword keyword-function">function</span><span class="token operator">*</span> <span class="token function">asyncGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-let">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword control-flow keyword-while">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-yield">yield</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token punctuation">(</span><span class="token keyword keyword-async">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-for">for</span> <span class="token keyword control-flow keyword-await">await</span> <span class="token punctuation">(</span><span class="token keyword keyword-const">const</span> num <span class="token keyword keyword-of">of</span> <span class="token function">asyncGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
      </ol>
      <p>这些示例进一步展现了异步编程的多样性和强大功能。在 JavaScript 中，几乎所有涉及等待的操作都可以异步执行，以提高应用程序的响应性和性能。</p>
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