<template>
  <div
    class="article-container"
    :class="{'md-sidebar-expand': !$store.state.isMdCollapse}"
  >
    <div class="crossnote markdown-preview">
      <h1
        id="拷贝与递归"
        ebook-toc-level-1=""
        heading="拷贝与递归 "
      >
        拷贝与递归
      </h1>
      <h2
        id="拷贝"
        ebook-toc-level-2=""
        heading="拷贝 "
      >
        拷贝
      </h2>
      <p>在 JavaScript 中，"拷贝"通常指的是复制一个变量的值。根据变量的数据类型，拷贝可以分为两种类型：浅拷贝（Shallow Copy）和深拷贝（Deep Copy）。</p>
      <h3
        id="浅拷贝shallow-copy"
        ebook-toc-level-3=""
        heading="浅拷贝（Shallow Copy） "
      >
        浅拷贝（Shallow Copy）
      </h3>
      <p>浅拷贝只复制对象的第一层属性。如果对象的属性值是基本数据类型（如 String, Number, Boolean, null, undefined, Symbol），则拷贝的是值本身。如果属性值是复合数据类型（如对象或数组），则拷贝的是引用。</p>
      <p>例如，你可以使用<code>Object.assign()</code>方法或展开运算符（<code>...</code>）来创建一个对象的浅拷贝：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-let">let</span> original <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword keyword-let">let</span> copy <span class="token operator">=</span> <span class="token known-class-name class-name">Object</span><span class="token punctuation">.</span><span class="token method function property-access">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> original<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword keyword-let">let</span> spreadCopy <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token spread operator">...</span>original <span class="token punctuation">}</span><span class="token punctuation">;</span>

original<span class="token punctuation">.</span><span class="token property-access">a</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
original<span class="token punctuation">.</span><span class="token property-access">b</span><span class="token punctuation">.</span><span class="token property-access">c</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>

<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>copy<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { a: 1, b: { c: 4 } }</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>spreadCopy<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { a: 1, b: { c: 4 } }</span>
</code></pre><p>在这个例子中，修改<code>original</code>对象的<code>a</code>属性不会影响拷贝，因为它是一个基本数据类型的值。但是修改<code>original</code>对象的<code>b.c</code>属性会影响拷贝，因为<code>b</code>是一个对象，而浅拷贝只复制了对象的引用。</p>
      <h4
        id="实现浅拷贝"
        ebook-toc-level-4=""
        heading="实现浅拷贝 "
      >
        实现浅拷贝
      </h4>
      <ol>
        <li>
          <p><strong>使用数组方法</strong>：</p>
          <ul>
            <li><code>slice()</code>：返回一个新的数组对象，是一个由开始到结束（不包括结束）选择的浅拷贝。</li>
            <li><code>concat()</code>：用于合并两个或多个数组，如果只用一个数组调用它，就会返回这个数组的浅拷贝。</li>
          </ul>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-let">let</span> original <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword keyword-let">let</span> shallowCopy1 <span class="token operator">=</span> original<span class="token punctuation">.</span><span class="token method function property-access">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword keyword-let">let</span> shallowCopy2 <span class="token operator">=</span> original<span class="token punctuation">.</span><span class="token method function property-access">concat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p><strong>使用展开运算符（Spread Operator）</strong>：</p>
          <ul>
            <li>展开运算符<code>...</code>可以用来创建数组的浅拷贝。</li>
          </ul>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-let">let</span> original <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword keyword-let">let</span> shallowCopy <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token spread operator">...</span>original<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p><strong>使用<code>Array.from()</code>方法</strong>：</p>
          <ul>
            <li>创建一个新数组实例，从一个类似数组或可迭代的对象中拷贝其元素。</li>
          </ul>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-let">let</span> original <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword keyword-let">let</span> shallowCopy <span class="token operator">=</span> <span class="token known-class-name class-name">Array</span><span class="token punctuation">.</span><span class="token keyword module keyword-from">from</span><span class="token punctuation">(</span>original<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
      </ol>
      <p>浅拷贝只复制数组的第一层元素，对于数组中的对象或数组等引用类型，浅拷贝只会复制它们的引用，而不是值。</p>
      <h3
        id="深拷贝deep-copy"
        ebook-toc-level-3=""
        heading="深拷贝（Deep Copy） "
      >
        深拷贝（Deep Copy）
      </h3>
      <p>深拷贝复制对象的所有层级。不管是基本数据类型的值还是复合数据类型，深拷贝都会创建一个新的实例。</p>
      <p>在 JavaScript 中，可以使用<code>JSON.parse()</code>和<code>JSON.stringify()</code>来实现一个简单对象的深拷贝：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-let">let</span> original <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword keyword-let">let</span> deepCopy <span class="token operator">=</span> <span class="token known-class-name class-name">JSON</span><span class="token punctuation">.</span><span class="token method function property-access">parse</span><span class="token punctuation">(</span><span class="token known-class-name class-name">JSON</span><span class="token punctuation">.</span><span class="token method function property-access">stringify</span><span class="token punctuation">(</span>original<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

original<span class="token punctuation">.</span><span class="token property-access">a</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
original<span class="token punctuation">.</span><span class="token property-access">b</span><span class="token punctuation">.</span><span class="token property-access">c</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>

<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>deepCopy<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { a: 1, b: { c: 2 } }</span>
</code></pre><p>在这个例子中，修改<code>original</code>对象的任何属性都不会影响深拷贝，因为深拷贝创建了完全独立的副本。</p>
      <p>但是要注意，使用<code>JSON.parse(JSON.stringify())</code>方法进行深拷贝有一些局限性：</p>
      <ul>
        <li>它不能复制函数。</li>
        <li>它不能复制引用自身的对象（循环引用）。</li>
        <li>它不能复制特殊的对象，如<code>Map</code>, <code>Set</code>, <code>RegExp</code>, <code>Date</code>等，这些对象会丢失或者不会按预期方式被复制。</li>
      </ul>
      <p>对于复杂的对象或包含以上特殊情况的对象，你可能需要使用库（如 lodash 的<code>_.cloneDeep</code>方法）或者自己编写函数来实现深拷贝。</p>
      <p>实现 JavaScript 中的深拷贝可以有多种方法，每种方法适用于不同的场景和需求。以下是几种实现深拷贝的方法：</p>
      <h4
        id="实现深拷贝"
        ebook-toc-level-4=""
        heading="实现深拷贝 "
      >
        实现深拷贝
      </h4>
      <ol>
        <li>使用 <code>JSON.parse()</code> 和 <code>JSON.stringify()</code></li>
      </ol>
      <p>这是最简单的深拷贝实现方式，但它有局限性，例如不能复制函数、循环引用以及特殊对象（如<code>Date</code>, <code>RegExp</code>, <code>Map</code>, <code>Set</code>等，在 parse 过程中会变为字面量）。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">deepClone</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> <span class="token known-class-name class-name">JSON</span><span class="token punctuation">.</span><span class="token method function property-access">parse</span><span class="token punctuation">(</span><span class="token known-class-name class-name">JSON</span><span class="token punctuation">.</span><span class="token method function property-access">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-let">let</span> original <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword keyword-let">let</span> clone <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>original<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><ol start="2">
        <li>手动实现递归深拷贝</li>
      </ol>
      <p>你可以手动编写一个递归函数来处理各种数据类型的深拷贝：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> hash <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>obj <span class="token operator">===</span> <span class="token keyword null nil keyword-null">null</span><span class="token punctuation">)</span> <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword null nil keyword-null">null</span><span class="token punctuation">;</span>
  <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>obj <span class="token keyword keyword-instanceof">instanceof</span> <span class="token class-name">Date</span><span class="token punctuation">)</span> <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>obj <span class="token keyword keyword-instanceof">instanceof</span> <span class="token class-name">RegExp</span><span class="token punctuation">)</span> <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span><span class="token keyword keyword-typeof">typeof</span> obj <span class="token operator">!==</span> <span class="token string">"object"</span><span class="token punctuation">)</span> <span class="token keyword control-flow keyword-return">return</span> obj<span class="token punctuation">;</span>

  <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>hash<span class="token punctuation">.</span><span class="token method function property-access">has</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword control-flow keyword-return">return</span> hash<span class="token punctuation">.</span><span class="token method function property-access">get</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 处理循环引用</span>

  <span class="token keyword keyword-let">let</span> clone <span class="token operator">=</span> <span class="token known-class-name class-name">Array</span><span class="token punctuation">.</span><span class="token method function property-access">isArray</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  hash<span class="token punctuation">.</span><span class="token method function property-access">set</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> clone<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword control-flow keyword-for">for</span> <span class="token punctuation">(</span><span class="token keyword keyword-let">let</span> key <span class="token keyword keyword-in">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token method function property-access">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      clone<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> hash<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword control-flow keyword-return">return</span> clone<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-let">let</span> original <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword keyword-let">let</span> clone <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>original<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><ol start="3">
        <li>使用 <code>structuredClone()</code></li>
      </ol>
      <p>从 ECMAScript 2021 开始，<code>structuredClone()</code> 方法可以用来创建一个深拷贝的对象。它可以处理循环引用，并且能够复制许多内置类型，但不是所有环境都支持。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-let">let</span> original <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword keyword-let">let</span> clone <span class="token operator">=</span> <span class="token function">structuredClone</span><span class="token punctuation">(</span>original<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><ol start="4">
        <li>使用库函数</li>
      </ol>
      <p>一些第三方库如 Lodash 提供了深拷贝的函数。例如，Lodash 的 <code>_.cloneDeep()</code> 方法：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token comment">// 需要安装 lodash 库</span>
<span class="token keyword module keyword-import">import</span> <span class="token imports">cloneDeep</span> <span class="token keyword module keyword-from">from</span> <span class="token string">"lodash/cloneDeep"</span><span class="token punctuation">;</span>

<span class="token keyword keyword-let">let</span> original <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword keyword-let">let</span> clone <span class="token operator">=</span> <span class="token function">cloneDeep</span><span class="token punctuation">(</span>original<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><ol start="5">
        <li>使用 MessageChannel</li>
      </ol>
      <p>对于支持 HTML5 <code>MessageChannel</code> API 的环境（如浏览器），你可以使用它来异步地深拷贝对象：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">deepClone</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-const">const</span> <span class="token punctuation">{</span> port1<span class="token punctuation">,</span> port2 <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">MessageChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    port2<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">onmessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span>ev<span class="token punctuation">.</span><span class="token property-access">data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    port1<span class="token punctuation">.</span><span class="token method function property-access">postMessage</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-let">let</span> original <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">deepClone</span><span class="token punctuation">(</span>original<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">clone</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>clone<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>选择哪种方法取决于你的具体需求和目标环境。例如，如果你正在处理一个简单的对象并且不担心函数或特殊对象的问题，<code>JSON.parse(JSON.stringify())</code>可能足够了。但如果你需要一个更可靠的解决方案，可以处理各种边缘情况，那么使用递归函数或第三方库可能更合适。</p>
      <h4
        id="jsonparsejsonstringify"
        ebook-toc-level-4=""
        heading="JSON.parse(JSON.stringify()) "
      >
        JSON.parse(JSON.stringify())
      </h4>
      <ul>
        <li><strong>循环引用</strong>：如果数组中包含循环引用，<code>JSON.parse(JSON.stringify())</code>会抛出错误，而<code>structuredClone()</code>可以处理。</li>
        <li><strong>特殊对象</strong>：对于特殊对象（如<code>Date</code>, <code>RegExp</code>, <code>Map</code>, <code>Set</code>等），<code>JSON.parse(JSON.stringify())</code>不会正确处理，而<code>structuredClone()</code>和一些库函数可以。</li>
        <li><strong>函数和原型链</strong>：函数和原型链不会被<code>JSON.parse(JSON.stringify())</code>复制，而<code>structuredClone()</code>和库函数有可能处理这些情况。</li>
      </ul>
      <h4
        id="使用场景"
        ebook-toc-level-4=""
        heading="使用场景 "
      >
        使用场景
      </h4>
      <p>深拷贝通常在需要完全独立副本的场景中使用，以确保原始数据和副本之间的操作不会互相影响。以下是一些典型的深拷贝使用场景和示例：</p>
      <ol>
        <li>防止对原始数据的意外修改</li>
      </ol>
      <p>当你有一个对象或数组，并且你需要对其进行修改，但又不希望这些修改影响到原始数据时，深拷贝是非常有用的。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-let">let</span> originalConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">"localhost"</span><span class="token punctuation">,</span> <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8080</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">permissions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"read"</span><span class="token punctuation">,</span> <span class="token string">"write"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-let">let</span> newConfig <span class="token operator">=</span> <span class="token function">structuredClone</span><span class="token punctuation">(</span>originalConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
newConfig<span class="token punctuation">.</span><span class="token property-access">server</span><span class="token punctuation">.</span><span class="token property-access">port</span> <span class="token operator">=</span> <span class="token number">9090</span><span class="token punctuation">;</span> <span class="token comment">// 修改副本的端口</span>
newConfig<span class="token punctuation">.</span><span class="token property-access">permissions</span><span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token string">"delete"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 添加权限</span>

<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>originalConfig<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 原始配置不变</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>newConfig<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 副本已经变更</span>
</code></pre><ol start="2">
        <li>撤销/重做功能</li>
      </ol>
      <p>在实现撤销/重做功能时，你可能需要保留操作前后的数据状态。深拷贝可以用来保存每次操作的状态。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">saveState</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  history<span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token function">structuredClone</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-let">let</span> state <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"initial state"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">changes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">saveState</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 保存初始状态</span>

state<span class="token punctuation">.</span><span class="token property-access">text</span> <span class="token operator">=</span> <span class="token string">"changed state"</span><span class="token punctuation">;</span>
<span class="token function">saveState</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 保存更改后的状态</span>

<span class="token comment">// 可以使用 history.pop() 来撤销到上一个状态</span>
</code></pre><ol start="3">
        <li>在并发编程中避免冲突</li>
      </ol>
      <p>在进行并发编程，如 Web Workers 或 Node.js 的多线程时，深拷贝可以帮助避免共享状态导致的冲突。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token comment">// 在主线程</span>
<span class="token keyword keyword-let">let</span> originalData <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 发送数据到worker，深拷贝以防止共享引用</span>
worker<span class="token punctuation">.</span><span class="token method function property-access">postMessage</span><span class="token punctuation">(</span><span class="token function">structuredClone</span><span class="token punctuation">(</span>originalData<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 在Web Worker</span>
self<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">onmessage</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-let">let</span> data <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token property-access">data</span><span class="token punctuation">;</span>
  <span class="token comment">// 对data的操作不会影响主线程的originalData</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><ol start="4">
        <li>缓存不可变数据</li>
      </ol>
      <p>在某些应用中，你可能需要缓存数据，以便可以快速恢复到某个特定的状态。深拷贝可以确保缓存的数据保持不变。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-let">let</span> cache <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-function">function</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 假设 getDataFromDatabase 是一个异步获取数据的函数</span>
    cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">structuredClone</span><span class="token punctuation">(</span><span class="token function">getDataFromDatabase</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword control-flow keyword-return">return</span> cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-let">let</span> data <span class="token operator">=</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token string">"userInfo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// data是userInfo的深拷贝，可以安全地修改而不影响缓存</span>
</code></pre><ol start="5">
        <li>测试和模拟</li>
      </ol>
      <p>在编写测试时，深拷贝可以帮助创建测试用例的隔离副本，从而避免测试间的数据干扰。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-let">let</span> initialState <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">users</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Alice"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">loggedIn</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-function">function</span> <span class="token function">testApplication</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-let">let</span> state <span class="token operator">=</span> <span class="token function">structuredClone</span><span class="token punctuation">(</span>initialState<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 对state进行操作，测试不同的逻辑路径</span>
  <span class="token comment">// 每个测试都使用未经修改的initialState的深拷贝</span>
<span class="token punctuation">}</span>
</code></pre><p>在这些场景中，深拷贝的关键优势在于创建数据的独立副本。这样，你就可以自由地修改副本，而不用担心会影响到原始数据。这对于保持数据的完整性和预测性至关重要。</p>
      <p>除了前面提到的使用场景，深拷贝还可以应用于以下情况：</p>
      <ol start="6">
        <li>
          状态管理<br>
          在一些前端框架中，如 React 或 Vue，状态管理库（如 Redux 或 Vuex）经常要求你不直接修改状态，而是通过返回一个新的状态对象来进行更新。深拷贝可以在这里确保不直接修改原始状态。
        </li>
      </ol>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">reducer</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-switch">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span><span class="token property-access">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-case">case</span> <span class="token string">"ADD_ITEM"</span><span class="token operator">:</span>
      <span class="token comment">// 使用深拷贝来创建新的状态</span>
      <span class="token keyword keyword-let">let</span> newState <span class="token operator">=</span> <span class="token function">structuredClone</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span>
      newState<span class="token punctuation">.</span><span class="token property-access">items</span><span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span><span class="token property-access">payload</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword control-flow keyword-return">return</span> newState<span class="token punctuation">;</span>
    <span class="token keyword module keyword-default">default</span><span class="token operator">:</span>
      <span class="token keyword control-flow keyword-return">return</span> state<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><ol start="7">
        <li>
          数据归一化<br>
          在处理复杂的数据结构时，深拷贝可以帮助实现数据的归一化，即将嵌套的数据结构转换为每个实体的单一引用，以便于管理和更新。
        </li>
      </ol>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-let">let</span> comments <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">post1</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"Great post!"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">post2</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"Interesting read."</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-let">let</span> normalizedData <span class="token operator">=</span> <span class="token function">structuredClone</span><span class="token punctuation">(</span>comments<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 使用深拷贝后，可以重构数据结构而不影响原始数据</span>
</code></pre><ol start="8">
        <li>
          保持数据同步<br>
          在需要将数据同步到多个客户端或服务时，深拷贝可以确保每个地方都有一个一致的数据副本。
        </li>
      </ol>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-let">let</span> sessionData <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"John Doe"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">settings</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">"dark"</span><span class="token punctuation">,</span> <span class="token literal-property property">notifications</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 发送数据到另一个客户端</span>
<span class="token function">sendDataToClient</span><span class="token punctuation">(</span><span class="token function">structuredClone</span><span class="token punctuation">(</span>sessionData<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><ol start="9">
        <li>
          创建复杂的默认参数<br>
          在函数编程时，如果你有一个包含多层嵌套对象的默认参数，你可能会想要在每次函数调用时创建这个默认参数的一个新副本，以免意外更改。
        </li>
      </ol>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">initialize</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-let">let</span> defaultConfig <span class="token operator">=</span> <span class="token function">structuredClone</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">files</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">settings</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">directory</span><span class="token operator">:</span> <span class="token string">"/default/path"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">createIfMissing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  config <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token spread operator">...</span>defaultConfig<span class="token punctuation">,</span> <span class="token spread operator">...</span>config <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// 使用config进行初始化</span>
<span class="token punctuation">}</span>
</code></pre><ol start="10">
        <li>
          保护 API 返回的数据<br>
          当你从 API 接收到数据时，你可能想要对这些数据进行处理，但又不希望改变原始数据，以便日后的重用。
        </li>
      </ol>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://api.example.com/data"</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token method function property-access">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> response<span class="token punctuation">.</span><span class="token method function property-access">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token method function property-access">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-let">let</span> dataCopy <span class="token operator">=</span> <span class="token function">structuredClone</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 对dataCopy进行操作，而不影响原始data</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>在所有这些场景中，深拷贝的目的都是为了数据的安全性和代码的可维护性。通过确保数据的不可变性，你可以避免很多因数据共享和意外修改导致的 bug 和问题。在进行深拷贝时，应该考虑到性能开销，特别是对于大型或复杂的数据结构，深拷贝可能会导致显著的性能下降。因此，应该在需要时才使用深拷贝，并且在可能的情况下寻找更高效的解决方案。</p>
      <h2
        id="递归"
        ebook-toc-level-2=""
        heading="递归 "
      >
        递归
      </h2>
      <h3
        id="是什么"
        ebook-toc-level-3=""
        heading="是什么 "
      >
        是什么
      </h3>
      <p>递归是一种编程技术，它允许函数直接或间接地调用自身。在 JavaScript 中，递归通常用于处理那些可以分解为更小、更简单子问题的问题，尤其是在处理树形结构（如 DOM 树或数据结构）时非常有用。</p>
      <p>递归函数通常有两个主要特征：</p>
      <ol>
        <li>
          <p><strong>基本情况（Base Case）</strong>：这是递归停止的条件。每次递归调用都应该使问题更接近基本情况，否则递归将无限进行下去，最终可能导致堆栈溢出错误。</p>
        </li>
        <li>
          <p><strong>递归步骤（Recursive Step）</strong>：在这一步中，函数直接或间接地调用自身，通常是用一组不同的参数。</p>
        </li>
      </ol>
      <p>下面是一个简单的 JavaScript 递归函数示例，它计算一个数字的阶乘：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 基本情况</span>
  <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-return">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 递归步骤</span>
  <span class="token keyword control-flow keyword-else">else</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-return">return</span> n <span class="token operator">*</span> <span class="token function">factorial</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token function">factorial</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 120</span>
</code></pre><p>在上面的例子中，<code>factorial</code>函数调用自身，每次都将参数<code>n</code>减少 1，直到<code>n</code>等于 0 或 1，这时函数返回 1，递归调用结束。</p>
      <p>递归是一种强大的工具，但也需要谨慎使用，因为不恰当的递归可能导致性能问题或堆栈溢出错误。为了避免这些问题，可以使用迭代方法或实现尾递归优化（在支持尾调用优化的 JavaScript 引擎中）。尾递归是一种特殊形式的递归，递归调用是函数体中的最后一个操作，这允许某些编译器或解释器优化递归，使其在内存使用上与迭代解决方案相媲美。</p>
      <h3
        id="知识点"
        ebook-toc-level-3=""
        heading="知识点 "
      >
        知识点
      </h3>
      <p>递归是计算机科学中的一个核心概念，它在算法设计和程序实现中扮演着重要的角色。理解递归需要掌握以下几个关键知识点：</p>
      <ol>
        <li>
          <p><strong>递归定义</strong>：</p>
          <ul>
            <li>递归是一种解决问题的方法，它将问题分解成更小的子问题，然后再将子问题分解成更小的子问题，直到这些子问题变得足够小，可以直接解决。</li>
            <li>递归函数是一种调用自身的函数。</li>
          </ul>
        </li>
        <li>
          <p><strong>基本情况（Base Case）</strong>：</p>
          <ul>
            <li>基本情况是递归的停止条件。没有基本情况的递归将会无限进行下去，导致堆栈溢出错误。</li>
            <li>通常，基本情况对应于问题的最简单或最小实例。</li>
          </ul>
        </li>
        <li>
          <p><strong>递归步骤（Recursive Step）</strong>：</p>
          <ul>
            <li>在递归步骤中，问题被分解成一个或多个更小的子问题，这些子问题本身又是原始问题的实例。</li>
            <li>递归步骤必须逐渐靠近基本情况，以确保递归最终会结束。</li>
          </ul>
        </li>
        <li>
          <p><strong>栈内存（Stack Memory）</strong>：</p>
          <ul>
            <li>递归函数的每一次调用都会在调用栈上创建一个新的执行上下文。</li>
            <li>如果递归太深，可能会耗尽栈空间，导致堆栈溢出错误。</li>
          </ul>
        </li>
        <li>
          <p><strong>尾递归优化（Tail Recursion Optimization）</strong>：</p>
          <ul>
            <li>尾递归是递归的一种特殊形式，其中递归调用是函数中的最后一个动作。</li>
            <li>尾递归可以被某些编程语言的编译器优化，以避免增加新的栈帧而重用当前的栈帧。</li>
          </ul>
        </li>
        <li>
          <p><strong>递归与迭代（Recursion vs. Iteration）</strong>：</p>
          <ul>
            <li>递归和迭代都可以用来解决循环问题。</li>
            <li>在某些情况下，递归比迭代更自然地映射到问题上，尤其是在处理递归定义的数据结构（如树和图）时。</li>
          </ul>
        </li>
        <li>
          <p><strong>递归树（Recursion Tree）</strong>：</p>
          <ul>
            <li>递归树是一种可视化递归调用的工具，它展示了递归函数如何将问题分解成更小的子问题。</li>
            <li>递归树有助于分析递归算法的时间复杂度。</li>
          </ul>
        </li>
        <li>
          <p><strong>分治策略（Divide and Conquer）</strong>：</p>
          <ul>
            <li>分治策略是一种算法设计范式，它使用递归来解决问题。</li>
            <li>它将问题分解成若干个小问题，递归解决这些小问题，然后将小问题的解合并成原问题的解。</li>
          </ul>
        </li>
        <li>
          <p><strong>递归缓存（Memoization）</strong>：</p>
          <ul>
            <li>递归中可能会出现重复计算相同子问题的情况，这会导致效率低下。</li>
            <li>通过缓存已解决的子问题的结果，可以避免重复工作，这种技术称为 memoization。</li>
          </ul>
        </li>
        <li>
          <p><strong>递归算法的例子</strong>：</p>
          <ul>
            <li>许多经典算法都是递归的，比如快速排序、归并排序、二分搜索、深度优先搜索（DFS）、广度优先搜索（BFS）等。</li>
          </ul>
        </li>
      </ol>
      <p>理解上述知识点有助于在实际编程中更有效地使用递归，并能够识别和解决与递归相关的问题。</p>
      <h3
        id="实现递归"
        ebook-toc-level-3=""
        heading="实现递归 "
      >
        实现递归
      </h3>
      <p>在 JavaScript 中实现递归通常遵循以下步骤：</p>
      <ol>
        <li>确定基本情况</li>
      </ol>
      <p>基本情况是递归终止的条件。在设计递归函数时，首先要确定当问题规模足够小以至于可以直接解答时，函数应该如何行为。基本情况防止了无限递归的发生。</p>
      <ol start="2">
        <li>确定递归情况</li>
      </ol>
      <p>递归情况定义了函数如何将较大的问题分解为较小的子问题，并且如何从这些子问题的解构建出原问题的解。递归函数在每次递归调用时都应该使问题规模变小，从而逐步逼近基本情况。</p>
      <ol start="3">
        <li>编写递归函数</li>
      </ol>
      <p>结合基本情况和递归情况，编写递归函数。确保每次调用都是向基本情况靠近，并且每个递归调用都是独立的，不会相互干扰。</p>
      <ol start="4">
        <li>测试和调试</li>
      </ol>
      <p>测试递归函数以确保它不仅可以处理基本情况，还可以正确处理更复杂的情况。调试任何可能出现的问题，如堆栈溢出错误、逻辑错误或性能问题。</p>
      <ol start="5">
        <li>考虑优化</li>
      </ol>
      <p>对于某些递归函数，可能需要考虑优化以避免性能问题。优化可以包括使用尾递归（在支持的 JavaScript 引擎中），或者使用 memoization 来缓存和重用已经计算过的结果。</p>
      <p>示例：计算斐波那契数列</p>
      <p>下面是计算斐波那契数列的递归函数的一个例子：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 基本情况</span>
  <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-return">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-return">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 递归情况</span>
  <span class="token keyword control-flow keyword-return">return</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 55</span>
</code></pre><p>在这个例子中，基本情况是当<code>n</code>等于 0 或 1 时。递归情况是将<code>fibonacci(n)</code>分解为<code>fibonacci(n - 1) + fibonacci(n - 2)</code>。</p>
      <p>注意：</p>
      <p>上面的斐波那契数列实现非常直观，但它的效率很低，因为它重复计算了许多子问题。对于大的<code>n</code>值，这个实现会变得非常慢。使用 memoization 或迭代方法可以显著提高效率。</p>
      <p>使用 Memoization 的斐波那契数列：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">fibonacciMemo</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> memo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-return">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-return">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>memo<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    memo<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">fibonacciMemo</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> memo<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fibonacciMemo</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">,</span> memo<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword control-flow keyword-return">return</span> memo<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token function">fibonacciMemo</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 55</span>
</code></pre><p>在这个优化版本中，我们使用一个对象<code>memo</code>来存储和查找已经计算过的斐波那契数，这样就避免了重复计算。</p>
      <h3
        id="使用场景-1"
        ebook-toc-level-3=""
        heading="使用场景 "
      >
        使用场景
      </h3>
      <p>递归在计算机科学中有许多使用场景，尤其是在处理那些自然具有递归结构的问题时，比如数据结构（如树和图）和算法（如分而治之策略）。以下是一些具体的使用场景和示例：</p>
      <ol>
        <li>遍历树结构</li>
      </ol>
      <p>在遍历树结构（如 DOM 树、二叉树）时，递归能够简化代码，因为你可以对每个节点应用相同的逻辑。</p>
      <p><strong>示例</strong>：二叉树的中序遍历。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">inorderTraversal</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>node <span class="token operator">!==</span> <span class="token keyword null nil keyword-null">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">inorderTraversal</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token property-access">left</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token property-access">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">inorderTraversal</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token property-access">right</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><ol start="2">
        <li>文件系统操作</li>
      </ol>
      <p>递归可以用来遍历文件系统中的目录树，例如，搜索文件、计算目录大小等。</p>
      <p><strong>示例</strong>：计算给定目录中所有文件的总大小（假设有一个 API 可以列出目录内容和获取文件大小）。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">calculateDirectorySize</span><span class="token punctuation">(</span><span class="token parameter">directory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-let">let</span> totalSize <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword keyword-const">const</span> files <span class="token operator">=</span> <span class="token function">listFilesInDirectory</span><span class="token punctuation">(</span>directory<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 假设这个函数返回目录中的文件列表</span>
  files<span class="token punctuation">.</span><span class="token method function property-access">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span><span class="token function">isDirectory</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      totalSize <span class="token operator">+=</span> <span class="token function">calculateDirectorySize</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword control-flow keyword-else">else</span> <span class="token punctuation">{</span>
      totalSize <span class="token operator">+=</span> <span class="token function">getFileSize</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 假设这个函数返回文件的大小</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword control-flow keyword-return">return</span> totalSize<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><ol start="3">
        <li>分而治之算法</li>
      </ol>
      <p>许多算法使用分而治之的策略，将大问题分解成小问题，单独解决每个小问题，然后合并结果。典型的例子包括快速排序和归并排序。</p>
      <p><strong>示例</strong>：快速排序。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">quickSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token property-access">length</span> <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-return">return</span> arr<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword keyword-const">const</span> pivot <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword keyword-const">const</span> left <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword keyword-const">const</span> right <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword control-flow keyword-for">for</span> <span class="token punctuation">(</span><span class="token keyword keyword-let">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> pivot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      left<span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword control-flow keyword-else">else</span> <span class="token punctuation">{</span>
      right<span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword control-flow keyword-return">return</span> <span class="token function">quickSort</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">concat</span><span class="token punctuation">(</span>pivot<span class="token punctuation">,</span> <span class="token function">quickSort</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><ol start="4">
        <li>解决数学问题</li>
      </ol>
      <p>递归在解决数学问题中也非常有用，比如计算阶乘、斐波那契数列、汉诺塔问题等。</p>
      <p><strong>示例</strong>：计算阶乘。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-return">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword control-flow keyword-return">return</span> n <span class="token operator">*</span> <span class="token function">factorial</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><ol start="5">
        <li>搜索和路径发现</li>
      </ol>
      <p>在图形和游戏编程中，递归用于搜索操作，如深度优先搜索（DFS）和广度优先搜索（BFS），以及寻找路径和解决迷宫问题。</p>
      <p><strong>示例</strong>：深度优先搜索。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">depthFirstSearch</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token property-access">value</span> <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-return">return</span> node<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword control-flow keyword-for">for</span> <span class="token punctuation">(</span><span class="token keyword keyword-let">let</span> child <span class="token keyword keyword-of">of</span> node<span class="token punctuation">.</span><span class="token property-access">children</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-const">const</span> result <span class="token operator">=</span> <span class="token function">depthFirstSearch</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> target<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>result <span class="token operator">!==</span> <span class="token keyword null nil keyword-null">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword control-flow keyword-return">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword null nil keyword-null">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><ol start="6">
        <li>动态规划</li>
      </ol>
      <p>在动态规划问题中，通常会递归地定义值函数，并使用 memoization 来避免重复计算。</p>
      <p><strong>示例</strong>：使用递归和 memoization 解决背包问题。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">knapsack</span><span class="token punctuation">(</span><span class="token parameter">items<span class="token punctuation">,</span> capacity<span class="token punctuation">,</span> index<span class="token punctuation">,</span> memo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>memo<span class="token punctuation">[</span>capacity<span class="token punctuation">]</span><span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-return">return</span> memo<span class="token punctuation">[</span>capacity<span class="token punctuation">]</span><span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> capacity <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-return">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>items<span class="token punctuation">[</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token property-access">weight</span> <span class="token operator">&gt;</span> capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-return">return</span> <span class="token function">knapsack</span><span class="token punctuation">(</span>items<span class="token punctuation">,</span> capacity<span class="token punctuation">,</span> index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> memo<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword control-flow keyword-else">else</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-const">const</span> withItem <span class="token operator">=</span>
      items<span class="token punctuation">[</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token property-access">value</span> <span class="token operator">+</span>
      <span class="token function">knapsack</span><span class="token punctuation">(</span>items<span class="token punctuation">,</span> capacity <span class="token operator">-</span> items<span class="token punctuation">[</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token property-access">weight</span><span class="token punctuation">,</span> index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> memo<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword keyword-const">const</span> withoutItem <span class="token operator">=</span> <span class="token function">knapsack</span><span class="token punctuation">(</span>items<span class="token punctuation">,</span> capacity<span class="token punctuation">,</span> index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> memo<span class="token punctuation">)</span><span class="token punctuation">;</span>
    memo<span class="token punctuation">[</span>capacity<span class="token punctuation">]</span><span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token known-class-name class-name">Math</span><span class="token punctuation">.</span><span class="token method function property-access">max</span><span class="token punctuation">(</span>withItem<span class="token punctuation">,</span> withoutItem<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword control-flow keyword-return">return</span> memo<span class="token punctuation">[</span>capacity<span class="token punctuation">]</span><span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><p>递归是一种强大的编程工具，但它也有缺点，如潜在的堆栈溢出问题和可能的性能问题。因此，在选择使用递归时，应当根据问题的性质和上下文来权衡利弊。</p>
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