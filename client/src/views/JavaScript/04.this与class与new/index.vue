<template>
  <div
    class="article-container"
    :class="{'md-sidebar-expand': !$store.state.isMdCollapse}"
  >
    <div class="crossnote markdown-preview">
      <h1 id="this-class-new">
        this、class、new
      </h1>
      <h2 id="this">
        this
      </h2>
      <h3 id="是什么">
        是什么
      </h3>
      <p>在 JavaScript 中，<code>this</code> 是一个关键字，它在函数被调用的时候设定，指向函数运行时的上下文（context）。<code>this</code> 的值并不取决于函数本身是如何定义的，而是取决于函数是如何被调用的。</p>
      <h3 id="绑定方式">
        绑定方式
      </h3>
      <ol>
        <li>
          <p><strong>默认绑定</strong>：在非严格模式下，当一个函数独立调用（即它不是作为对象的属性或方法调用），<code>this</code> 通常会绑定到全局对象（在浏览器中是 <code>window</code> 对象，在 Node.js 中是 <code>global</code> 对象）。在严格模式下，<code>this</code> 会绑定到 <code>undefined</code>。</p>
        </li>
        <li>
          <p><strong>隐式绑定</strong>：当一个函数作为对象的方法调用时，<code>this</code> 会绑定到那个对象，就近原则。</p>
        </li>
        <li>
          <p><strong>显式绑定</strong>：我们可以使用 <code>call</code>、<code>apply</code> 或 <code>bind</code> 方法显式地设置 <code>this</code> 的值。<code>call</code> 和 <code>apply</code> 会立即调用函数，并允许你传入一个对象作为 <code>this</code> 的值，而 <code>bind</code> 会创建一个新的函数，当这个新函数被调用时，<code>this</code> 会被绑定到你传入的对象。</p>
        </li>
        <li>
          <p><strong>硬绑定</strong>：硬绑定是显式绑定的一种，使用 <code>.bind()</code> 方法可以创建一个新的函数，这个函数的 <code>this</code> 被永久绑定到 <code>bind</code> 的第一个参数。</p>
        </li>
        <li>
          <p><strong>new 绑定</strong>：当一个函数或类被 <code>new</code> 关键字作为构造函数调用时，JavaScript 会创建一个新的空对象，然后 <code>this</code> 会被绑定到这个新对象，也就是实例对象。</p>
        </li>
        <li>
          <p><strong>箭头函数</strong>：箭头函数不会创建自己的 <code>this</code> 上下文，而是会捕获其所在（即定义的位置）上下文的 <code>this</code> 值。这意味着箭头函数内的 <code>this</code> 值与它被定义时的外围上下文中的 <code>this</code> 值相同。</p>
        </li>
        <li>
          <p><strong>事件处理器</strong>：事件处理函数内部的 <code>this</code> 总是指向被绑定 <code>DOM</code> 元素，这种行为使得你可以在事件处理器中方便地访问和操作触发事件的元素。需要注意的是，如果你使用箭头函数作为事件处理器，那么 <code>this</code> 将不会指向触发事件的元素，而是指向箭头函数在定义时的上下文。</p>
        </li>
      </ol>
      <p>这些规则的优先级从高到低依次是：<code>new</code> 绑定 &gt; 显式绑定/硬绑定 &gt; 隐式绑定 &gt; 默认绑定。也就是说，如果一个函数同时满足多个规则，那么优先级高的规则将决定 <code>this</code> 的值。</p>
      <p>理解 <code>this</code> 的工作原理对于编写和理解 JavaScript 代码非常重要，因为 <code>this</code> 在函数调用、对象方法、构造函数、事件处理器等多个场景中都有广泛的应用。</p>
      <h3 id="使用场景">
        使用场景
      </h3>
      <p><code>this</code> 在 JavaScript 中有很多使用场景，下面是一些典型的例子：</p>
      <ol>
        <li>
          <p><strong>对象方法中使用 <code>this</code></strong></p>
          <p>在对象的方法中，<code>this</code> 通常指向调用该方法的对象。</p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-let">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Alice"</span><span class="token punctuation">,</span>
  <span class="token function-variable function">greet</span><span class="token operator">:</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Hello, "</span> <span class="token operator">+</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span><span class="token method function property-access">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：'Hello, Alice'</span>
</code></pre><p>在这个例子中，<code>greet</code> 方法内的 <code>this</code> 指向了 <code>obj</code> 对象。</p>
        </li>
        <li>
          <p><strong>构造函数中使用 <code>this</code></strong></p>
          <p>在使用 <code>new</code> 关键字调用的函数（即构造函数）中，<code>this</code> 指向新创建的对象。</p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Person</span></span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-let">let</span> alice <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"Alice"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>alice<span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：'Alice'</span>
</code></pre><p>在这个例子中，<code>this</code> 在 <code>Person</code> 函数内部指向新创建的对象。</p>
        </li>
        <li>
          <p><strong>显式绑定 <code>this</code></strong></p>
          <p>我们可以使用 <code>call</code>、<code>apply</code> 或 <code>bind</code> 方法显式地设置 <code>this</code> 的值。</p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-function">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Hello, "</span> <span class="token operator">+</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-let">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Alice"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

greet<span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：'Hello, Alice'</span>
</code></pre><p>在这个例子中，我们使用 <code>call</code> 方法将 <code>this</code> 绑定到 <code>obj</code> 对象，然后调用 <code>greet</code> 函数。</p>
        </li>
        <li>
          <p><strong>箭头函数中的 <code>this</code></strong></p>
          <p>箭头函数不会创建自己的 <code>this</code> 上下文，而是继承外层代码块的 <code>this</code>。</p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-let">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Alice"</span><span class="token punctuation">,</span>
  <span class="token function-variable function">greet</span><span class="token operator">:</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Hello, "</span> <span class="token operator">+</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span><span class="token method function property-access">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 一秒后输出：'Hello, Alice'</span>
</code></pre><p>在这个例子中，箭头函数内的 <code>this</code> 是从外层的 <code>greet</code> 方法继承的，所以它指向 <code>obj</code> 对象。</p>
        </li>
        <li>
          <p><strong>DOM 事件处理器中的 <code>this</code></strong></p>
          <p>在 DOM 事件处理器中，<code>this</code> 通常指向触发事件的元素。</p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-let">let</span> button <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">querySelector</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
button<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：点击的按钮元素</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>在这个例子中，<code>this</code> 在事件处理器函数中指向触发点击事件的按钮元素。</p>
        </li>
        <li>
          <p><strong>Function 与箭头函数</strong></p>
        </li>
      </ol>
      <pre
        data-role="codeBlock"
        data-info="js"
        class="language-javascript js"
      ><code><span class="token keyword keyword-var">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword keyword-var">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token function-variable function">test</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">a</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">do</span><span class="token operator">:</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">a</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">testThis</span><span class="token operator">:</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"testThis"</span><span class="token punctuation">,</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 最近引用作用域 -&gt; obj</span>
    <span class="token keyword keyword-const">const</span> <span class="token function-variable function">test1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"test1"</span><span class="token punctuation">,</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 上层作用域 -&gt; obj</span>
      <span class="token keyword keyword-const">const</span> <span class="token function-variable function">test2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"test2"</span><span class="token punctuation">,</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 上层作用域 -&gt; 上层作用域 -&gt; obj</span>
        <span class="token keyword keyword-const">const</span> <span class="token function-variable function">test3</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"test3"</span><span class="token punctuation">,</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 最近引用作用域 -&gt; function -&gt; window</span>
          <span class="token keyword keyword-const">const</span> <span class="token function-variable function">test4</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"test4"</span><span class="token punctuation">,</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 上层作用域 -&gt; window</span>
          <span class="token punctuation">}</span><span class="token punctuation">;</span>
          <span class="token function">test4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">insideObj</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token function-variable function">test</span><span class="token operator">:</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">a</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword keyword-const">const</span> <span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">a</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
test<span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
test<span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
test<span class="token punctuation">.</span><span class="token method function property-access">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
obj<span class="token punctuation">.</span><span class="token method function property-access">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
obj<span class="token punctuation">.</span><span class="token keyword control-flow keyword-do">do</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre><p>以上就是 <code>this</code> 在 JavaScript 中的一些典型使用场景。理解这些场景可以帮助你更好地理解和使用 <code>this</code> 关键字。</p>
      <h2 id="class">
        class
      </h2>
      <h3 id="是什么-1">
        是什么
      </h3>
      <p>在 JavaScript 中，<code>class</code>是 ES6（ECMAScript 2015）中引入的一个关键字，用于定义类。类是一种特殊的函数，它可以包含构造函数、方法、属性等。</p>
      <p>类主要用于创建对象（实例）。它是对象创建的蓝图，定义了一个对象的属性和方法。</p>
      <p>这是一个类的基本定义：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-class">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 初始化实例属性</span>
  <span class="token punctuation">}</span>

  <span class="token function">myMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义一个方法</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><p>你可以使用<code>new</code>关键字来创建一个类的实例：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-let">let</span> instance <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p><code>constructor</code>方法是类的特殊方法，它在创建新实例时被自动调用。</p>
      <p>类也支持继承，你可以通过<code>extends</code>关键字来创建一个类的子类：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-class">class</span> <span class="token class-name">MySubClass</span> <span class="token keyword keyword-extends">extends</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><p>在子类中，你可以使用<code>super</code>关键字来调用父类的方法。</p>
      <h3 id="执行过程">
        执行过程
      </h3>
      <p>JavaScript 中的<code>class</code>的执行过程可以分为以下几个步骤：</p>
      <ol>
        <li><strong>声明和定义</strong>：首先，我们需要声明并定义一个类。这包括定义类的构造函数、方法和属性。这些方法和属性将被存储在类的原型对象中。</li>
      </ol>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-class">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 初始化实例属性</span>
  <span class="token punctuation">}</span>

  <span class="token function">myMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义一个方法</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><ol start="2">
        <li><strong>实例化</strong>：当我们使用<code>new</code>关键字创建一个类的实例时，JavaScript 会创建一个新的对象，并将类的原型对象设置为这个新对象的原型。然后，JavaScript 会执行类的构造函数，初始化新对象的属性。</li>
      </ol>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-let">let</span> instance <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><ol start="3">
        <li><strong>方法调用</strong>：当我们调用实例的方法时，JavaScript 会首先在实例自身的属性中查找这个方法。如果没有找到，它会在实例的原型（也就是类的原型对象）中查找。如果在原型中找到了这个方法，JavaScript 会执行它。</li>
      </ol>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code>instance<span class="token punctuation">.</span><span class="token method function property-access">myMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><ol start="4">
        <li><strong>继承</strong>：如果我们定义了一个继承自其他类的类，那么在实例化这个子类时，JavaScript 会首先创建一个新的对象，并将子类的原型对象设置为这个新对象的原型。然后，JavaScript 会执行父类的构造函数，初始化新对象的属性。最后，JavaScript 会执行子类的构造函数，进一步初始化新对象的属性。</li>
      </ol>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-class">class</span> <span class="token class-name">MySubClass</span> <span class="token keyword keyword-extends">extends</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-super">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用父类的构造函数</span>
    <span class="token comment">// 进一步初始化新对象的属性</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><ol start="5">
        <li><strong>子类方法调用</strong>：当我们调用子类实例的方法时，JavaScript 的查找顺序是：首先在实例自身的属性中查找，然后在子类的原型中查找，最后在父类的原型中查找。如果在这个过程中找到了这个方法，JavaScript 会执行它。</li>
      </ol>
      <p>以上就是 JavaScript 中<code>class</code>的基本执行过程。</p>
      <h3 id="模拟实现">
        模拟实现
      </h3>
      <p>在 ES6 之前，JavaScript 并没有类（class）这个概念，但我们可以通过函数和原型（prototype）来模拟实现类的功能。以下是一个例子：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token comment">// 定义构造函数</span>
<span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">MyClass</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 初始化实例属性</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">myProperty</span> <span class="token operator">=</span> <span class="token string">"some value"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 在原型上定义方法</span>
<span class="token class-name">MyClass</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">myMethod</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 定义一个方法</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"This is my method"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 实例化</span>
<span class="token keyword keyword-var">var</span> instance <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
instance<span class="token punctuation">.</span><span class="token method function property-access">myMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 'This is my method'</span>

<span class="token comment">// 模拟实现继承</span>
<span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">MySubClass</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token maybe-class-name">MyClass</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用父类构造函数</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">mySubProperty</span> <span class="token operator">=</span> <span class="token string">"some other value"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 设置原型为父类的实例，实现继承</span>
<span class="token class-name">MySubClass</span><span class="token punctuation">.</span><span class="token property-access">prototype</span> <span class="token operator">=</span> <span class="token known-class-name class-name">Object</span><span class="token punctuation">.</span><span class="token method function property-access">create</span><span class="token punctuation">(</span><span class="token class-name">MyClass</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">MySubClass</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token property-access">constructor</span> <span class="token operator">=</span> <span class="token maybe-class-name">MySubClass</span><span class="token punctuation">;</span>

<span class="token comment">// 在子类原型上添加方法</span>
<span class="token class-name">MySubClass</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">mySubMethod</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"This is my sub method"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 实例化子类</span>
<span class="token keyword keyword-var">var</span> subInstance <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">MySubClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
subInstance<span class="token punctuation">.</span><span class="token method function property-access">myMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 'This is my method'</span>
subInstance<span class="token punctuation">.</span><span class="token method function property-access">mySubMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 'This is my sub method'</span>
</code></pre><p>在上面的代码中，我们使用了函数和原型来模拟实现了类、实例化、方法定义和继承等功能。这就是在 ES6 引入<code>class</code>关键字之前，JavaScript 是如何模拟实现类的功能的。</p>
      <h3 id="使用场景-1">
        使用场景
      </h3>
      <p>JavaScript 的<code>class</code>主要用于创建对象模型，它的使用场景非常广泛。以下是一些常见的使用场景：</p>
      <ol>
        <li><strong>封装</strong>：我们可以使用<code>class</code>来封装相关的数据和操作。例如，我们可以定义一个<code>Person</code>类来封装人的属性和方法：</li>
      </ol>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-class">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">age</span> <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-let">let</span> john <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"John"</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
john<span class="token punctuation">.</span><span class="token method function property-access">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 'Hello, my name is John'</span>
</code></pre><ol start="2">
        <li><strong>继承</strong>：我们可以使用<code>class</code>来实现继承，以复用和扩展现有的代码。例如，我们可以定义一个<code>Student</code>类继承自<code>Person</code>类，并添加新的方法：</li>
      </ol>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-class">class</span> <span class="token class-name">Student</span> <span class="token keyword keyword-extends">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> grade</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-super">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">grade</span> <span class="token operator">=</span> grade<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">study</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is studying</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-let">let</span> alice <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"Alice"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">"A"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
alice<span class="token punctuation">.</span><span class="token method function property-access">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 'Hello, my name is Alice'</span>
alice<span class="token punctuation">.</span><span class="token method function property-access">study</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 'Alice is studying'</span>
</code></pre><ol start="3">
        <li><strong>多态</strong>：我们可以使用<code>class</code>来实现多态，即同一个方法在不同的类中有不同的实现。例如，我们可以定义一个<code>Animal</code>类和两个继承自它的<code>Dog</code>和<code>Cat</code>类，它们都有一个<code>makeSound</code>方法，但实现不同：</li>
      </ol>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-class">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-throw">throw</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"This method must be overridden in a subclass"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-class">class</span> <span class="token class-name">Dog</span> <span class="token keyword keyword-extends">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Woof!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-class">class</span> <span class="token class-name">Cat</span> <span class="token keyword keyword-extends">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Meow!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-let">let</span> dog <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dog<span class="token punctuation">.</span><span class="token method function property-access">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 'Woof!'</span>

<span class="token keyword keyword-let">let</span> cat <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
cat<span class="token punctuation">.</span><span class="token method function property-access">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 'Meow!'</span>
</code></pre><ol start="4">
        <li><strong>模块化和代码复用</strong>：我们可以将类定义在一个模块中，然后在其他模块中导入和使用它，从而实现代码的模块化和复用。例如，我们可以在一个模块中定义一个<code>Vector</code>类，然后在其他模块中导入它：</li>
      </ol>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token comment">// 在Vector.js模块中</span>
<span class="token keyword module keyword-export">export</span> <span class="token keyword keyword-class">class</span> <span class="token class-name">Vector</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">x</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">y</span> <span class="token operator">=</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">vector</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Vector</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">x</span> <span class="token operator">+</span> vector<span class="token punctuation">.</span><span class="token property-access">x</span><span class="token punctuation">,</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">y</span> <span class="token operator">+</span> vector<span class="token punctuation">.</span><span class="token property-access">y</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 在其他模块中</span>
<span class="token keyword module keyword-import">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Vector</span> <span class="token punctuation">}</span></span> <span class="token keyword module keyword-from">from</span> <span class="token string">"./Vector.js"</span><span class="token punctuation">;</span>

<span class="token keyword keyword-let">let</span> v1 <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Vector</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword keyword-let">let</span> v2 <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Vector</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword keyword-let">let</span> v3 <span class="token operator">=</span> v1<span class="token punctuation">.</span><span class="token method function property-access">add</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>以上就是<code>class</code>在 JavaScript 中的一些常见使用场景。</p>
      <h2 id="new">
        new
      </h2>
      <h3 id="是什么-2">
        是什么
      </h3>
      <p>在 JavaScript 中，<code>new</code> 关键字用于创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。使用 <code>new</code> 关键字创建对象的过程主要有以下几个步骤：</p>
      <ol>
        <li>
          <p><strong>创建一个新对象</strong>：JavaScript 首先会创建一个新的空对象。</p>
        </li>
        <li>
          <p><strong>设置原型</strong>：新创建的对象的 <code>__proto__</code> 属性会被设置为构造函数的 <code>prototype</code> 对象。这样新对象就可以访问构造函数原型中定义的方法和属性。</p>
        </li>
        <li>
          <p><strong>绑定 <code>this</code></strong>：在构造函数内部，<code>this</code> 关键字被设置为新创建的对象。如果构造函数中的代码引用了 <code>this</code>，那么这个 <code>this</code> 就指向新创建的对象。</p>
        </li>
        <li>
          <p><strong>执行构造函数中的代码</strong>：构造函数内部的代码（对 <code>this</code> 的属性和方法的引用）被执行，通常这些代码会初始化新对象的状态。</p>
        </li>
        <li>
          <p><strong>返回新对象</strong>：如果构造函数没有显式返回一个对象，则会自动返回新创建的对象。如果构造函数返回了一个对象，那么这个对象会作为 <code>new</code> 表达式的结果返回；如果构造函数返回了一个非对象类型的值，那么这个返回值会被忽略，还是会返回新创建的对象。</p>
        </li>
      </ol>
      <p>以下是一个简单的例子：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Person</span></span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">age</span> <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">sayHello</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Hello, my name is "</span> <span class="token operator">+</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-var">var</span> john <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"John"</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
john<span class="token punctuation">.</span><span class="token method function property-access">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 "Hello, my name is John"</span>
</code></pre><p>在这个例子中，<code>new Person('John', 30)</code> 创建了一个新的 <code>Person</code> 对象，并将 <code>name</code> 和 <code>age</code> 属性初始化为 'John' 和 30。新对象的 <code>__proto__</code> 属性被设置为 <code>Person.prototype</code>，所以它可以访问 <code>sayHello</code> 方法。</p>
      <h3 id="执行过程-1">
        执行过程
      </h3>
      <p>在 JavaScript 中，<code>new</code>操作符的执行过程可以分为以下四个步骤：</p>
      <ol>
        <li>
          <p><strong>创建一个新对象</strong>：首先，<code>new</code>操作符会创建一个空的 JavaScript 对象。这个新对象是一个实例，它的类型是定义的特定构造函数。</p>
        </li>
        <li>
          <p><strong>设置原型</strong>：新创建的对象的<code>__proto__</code>属性会被指向构造函数的<code>prototype</code>属性，从而继承构造函数原型上的属性和方法。这是 JavaScript 的原型继承机制。</p>
        </li>
        <li>
          <p><strong>执行构造函数</strong>：然后，<code>new</code>操作符会调用构造函数，执行其中的代码。注意，构造函数中的<code>this</code>会被指向新创建的对象，因此构造函数中的属性和方法都会被添加到新对象上。</p>
        </li>
        <li>
          <p><strong>返回新对象</strong>：如果构造函数没有手动返回一个对象，那么<code>new</code>操作符会自动返回新创建的对象。如果构造函数返回的是一个非对象类型，那么这个返回值会被忽略，仍然返回新创建的对象。但是，如果构造函数返回的是一个新对象，那么<code>new</code>操作符会返回这个新对象，而不是之前创建的对象。</p>
        </li>
      </ol>
      <p>以下是一个简单的例子来说明<code>new</code>操作符的执行过程：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Person</span></span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">age</span> <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">sayHello</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Hello, my name is "</span> <span class="token operator">+</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-var">var</span> john <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"John"</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
john<span class="token punctuation">.</span><span class="token method function property-access">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：Hello, my name is John</span>
</code></pre><p>在这个例子中，<code>new Person('John', 30)</code>的执行过程如下：</p>
      <ol>
        <li>创建一个新对象<code>{}</code>。</li>
        <li>设置新对象的<code>__proto__</code>属性指向<code>Person.prototype</code>，从而继承<code>Person.prototype</code>上的方法。</li>
        <li>执行<code>Person</code>构造函数，其中的<code>this</code>被指向新对象，因此<code>name</code>和<code>age</code>属性被添加到新对象上。</li>
        <li><code>new</code>操作符返回新创建的对象。</li>
      </ol>
      <h3 id="模拟实现-1">
        模拟实现
      </h3>
      <p>在 JavaScript 中，我们可以模拟实现 <code>new</code> 操作符的功能。以下是一个简单的实现：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">myNew</span><span class="token punctuation">(</span><span class="token parameter"><span class="token maybe-class-name">Constructor</span><span class="token punctuation">,</span> <span class="token spread operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 创建一个新的空对象</span>
  <span class="token keyword keyword-var">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// 设置新对象的 __proto__ 属性指向构造函数的 prototype 对象</span>
  obj<span class="token punctuation">.</span><span class="token property-access">__proto__</span> <span class="token operator">=</span> <span class="token class-name">Constructor</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">;</span>
  <span class="token comment">// 执行构造函数，并将 this 指向新创建的对象</span>
  <span class="token keyword keyword-var">var</span> result <span class="token operator">=</span> <span class="token maybe-class-name">Constructor</span><span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 如果构造函数执行的结果是一个对象，就返回这个对象；否则，返回新创建的对象</span>
  <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword keyword-typeof">typeof</span> result <span class="token operator">===</span> <span class="token string">"object"</span> <span class="token operator">?</span> result <span class="token operator">:</span> obj<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><p>这个 <code>myNew</code> 函数首先创建一个新的空对象，然后设置这个新对象的 <code>__proto__</code> 属性指向构造函数的 <code>prototype</code> 对象，这样就可以让新对象继承构造函数的 <code>prototype</code> 对象上的属性和方法。接着，执行构造函数，并将 <code>this</code> 指向新创建的对象。最后，如果构造函数执行的结果是一个对象，就返回这个对象；否则，返回新创建的对象。</p>
      <p>下面是一个简单的例子来说明 <code>myNew</code> 函数的使用方法：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Person</span></span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">age</span> <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">sayHello</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>
    <span class="token string">"Hello, my name is "</span> <span class="token operator">+</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">+</span> <span class="token string">", I am "</span> <span class="token operator">+</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">age</span> <span class="token operator">+</span> <span class="token string">" years old."</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-var">var</span> john <span class="token operator">=</span> <span class="token function">myNew</span><span class="token punctuation">(</span><span class="token maybe-class-name">Person</span><span class="token punctuation">,</span> <span class="token string">"John"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
john<span class="token punctuation">.</span><span class="token method function property-access">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：Hello, my name is John, I am 20 years old.</span>
</code></pre><p>在这个例子中，<code>myNew(Person, 'John', 20)</code> 创建了一个新的 <code>Person</code> 对象，并返回这个对象。这个新的对象可以访问 <code>Person.prototype</code> 对象上的 <code>sayHello</code> 方法。</p>
      <h3 id="使用场景-2">
        使用场景
      </h3>
      <p><code>new</code>关键字在 JavaScript 中主要用于创建对象的实例，这在以下几种场景中特别有用：</p>
      <ol>
        <li><strong>创建自定义对象类型</strong>：当你需要创建具有特定属性和方法的多个对象时，可以创建一个构造函数，并使用<code>new</code>关键字来创建新的对象实例。</li>
      </ol>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Car</span></span><span class="token punctuation">(</span><span class="token parameter">make<span class="token punctuation">,</span> model<span class="token punctuation">,</span> year</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">make</span> <span class="token operator">=</span> make<span class="token punctuation">;</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">model</span> <span class="token operator">=</span> model<span class="token punctuation">;</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">year</span> <span class="token operator">=</span> year<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-var">var</span> myCar <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token string">"Toyota"</span><span class="token punctuation">,</span> <span class="token string">"Corolla"</span><span class="token punctuation">,</span> <span class="token number">2005</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>myCar<span class="token punctuation">.</span><span class="token property-access">make</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 "Toyota"</span>
</code></pre><ol start="2">
        <li><strong>使用内置对象类型</strong>：JavaScript 内置了一些对象类型，如<code>Date</code>、<code>Array</code>、<code>Set</code>、<code>Map</code>等，你可以使用<code>new</code>关键字来创建这些对象的实例。</li>
      </ol>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token comment">// 创建一个新的日期对象</span>
<span class="token keyword keyword-var">var</span> now <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>now<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出当前日期和时间</span>

<span class="token comment">// 创建一个新的数组对象</span>
<span class="token keyword keyword-var">var</span> arr <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 [1, 2, 3, 4, 5]</span>
</code></pre><ol start="3">
        <li><strong>创建继承其他对象的对象</strong>：你可以使用<code>new</code>关键字和<code>Object.create</code>方法来创建一个新对象，该对象的原型被设置为另一个对象。</li>
      </ol>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-var">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Alice"</span><span class="token punctuation">,</span>
  <span class="token function-variable function">sayHello</span><span class="token operator">:</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Hello, my name is "</span> <span class="token operator">+</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-var">var</span> employee <span class="token operator">=</span> <span class="token known-class-name class-name">Object</span><span class="token punctuation">.</span><span class="token method function property-access">create</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
employee<span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> <span class="token string">"Bob"</span><span class="token punctuation">;</span>
employee<span class="token punctuation">.</span><span class="token method function property-access">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 "Hello, my name is Bob"</span>
</code></pre><p>在这个例子中，<code>employee</code>对象是通过<code>Object.create(person)</code>创建的，所以<code>employee</code>的原型就是<code>person</code>，并且<code>employee</code>继承了<code>person</code>的<code>sayHello</code>方法。</p>
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