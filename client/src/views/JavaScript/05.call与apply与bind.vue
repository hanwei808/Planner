<template>
  <div
    class="article-container"
    :class="{'md-sidebar-expand': !$store.state.isMdCollapse}"
  >
    <div class="crossnote markdown-preview">
      <h1
        id="call-apply-bind"
        ebook-toc-level-1=""
        heading="call、apply、bind "
      >
        call、apply、bind
      </h1>
      <p>
        <img
          src="https://oss.hanwei.co/image/callApplyBind.png"
          alt="对比"
        >
      </p>
      <h2
        id="call"
        ebook-toc-level-2=""
        heading="call "
      >
        call
      </h2>
      <h3
        id="执行过程"
        ebook-toc-level-3=""
        heading="执行过程 "
      >
        执行过程
      </h3>
      <p>在 JavaScript 中，<code>call</code> 是 <code>Function</code> 原型链上的一个方法，它的主要作用是改变函数内部的 <code>this</code> 指向，并立即执行这个函数。<code>call</code> 的执行过程可以分为以下几个步骤：</p>
      <ol>
        <li>
          <p><strong>检查类型</strong>：首先，JavaScript 引擎会检查 <code>call</code> 的调用者是否为一个函数，因为只有函数才能调用 <code>call</code> 方法。如果调用者不是一个函数，JavaScript 会抛出一个类型错误。</p>
        </li>
        <li>
          <p><strong>确定 this 指向</strong>：然后，<code>call</code> 方法会将函数内部的 <code>this</code> 指向第一个参数。如果第一个参数是 <code>null</code> 或 <code>undefined</code>，或者没有提供参数，那么 <code>this</code> 会指向全局对象（在浏览器中是 <code>window</code>，在 Node.js 中是 <code>global</code>）。如果第一个参数是原始值（比如数字、字符串或布尔值），那么 <code>this</code> 会指向这个原始值的包装对象。如果第一个参数是一个对象，那么 <code>this</code> 就会指向这个对象。</p>
        </li>
        <li>
          <p><strong>执行函数</strong>：<code>call</code> 方法会立即执行函数。如果 <code>call</code> 方法有多个参数，那么第一个参数之后的所有参数都会作为函数的参数传入。</p>
        </li>
      </ol>
      <p>下面是一个简单的例子来说明 <code>call</code> 的执行过程：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token parameter">greeting<span class="token punctuation">,</span> punctuation</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>greeting <span class="token operator">+</span> <span class="token string">", "</span> <span class="token operator">+</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">+</span> punctuation<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-var">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"John"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

greet<span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">"Hello"</span><span class="token punctuation">,</span> <span class="token string">"!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：Hello, John!</span>
</code></pre><p>在这个例子中，<code>greet.call(person, 'Hello', '!')</code> 的执行过程如下：</p>
      <ol>
        <li>
          <p>JavaScript 引擎检查 <code>greet</code> 是否为一个函数。因为 <code>greet</code> 是一个函数，所以可以调用 <code>call</code> 方法。</p>
        </li>
        <li>
          <p><code>call</code> 方法将 <code>greet</code> 函数内部的 <code>this</code> 指向 <code>person</code> 对象。</p>
        </li>
        <li>
          <p><code>call</code> 方法立即执行 <code>greet</code> 函数，<code>'Hello'</code> 和 <code>'!'</code> 作为参数传入。</p>
        </li>
      </ol>
      <p>总结一下，<code>call</code> 方法的主要作用是改变函数内部的 <code>this</code> 指向，并立即执行这个函数。</p>
      <h3
        id="模拟实现"
        ebook-toc-level-3=""
        heading="模拟实现 "
      >
        模拟实现
      </h3>
      <p>在 JavaScript 中，我们可以模拟实现<code>call</code>方法的功能。以下是一个简单的实现：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token class-name">Function</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">myCall</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果没有传入 context 或者 context 是 null，设置 context 为全局对象</span>
  <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>context <span class="token operator">==</span> <span class="token keyword null nil keyword-null">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    context <span class="token operator">=</span> <span class="token dom variable">window</span> <span class="token operator">||</span> global<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 如果传入的 context 不是对象，转化为对象</span>
  <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span><span class="token keyword keyword-typeof">typeof</span> context <span class="token operator">!==</span> <span class="token string">"object"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    context <span class="token operator">=</span> <span class="token known-class-name class-name">Object</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 创建一个唯一的属性名</span>
  <span class="token keyword keyword-var">var</span> uniqueId <span class="token operator">=</span> <span class="token string">"00"</span> <span class="token operator">+</span> <span class="token known-class-name class-name">Math</span><span class="token punctuation">.</span><span class="token method function property-access">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 将函数设置为 context 的一个属性</span>
  context<span class="token punctuation">[</span>uniqueId<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">;</span>

  <span class="token comment">// 获取参数</span>
  <span class="token keyword keyword-var">var</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword control-flow keyword-for">for</span> <span class="token punctuation">(</span><span class="token keyword keyword-var">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arguments<span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    args<span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token string">"arguments["</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">"]"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 使用 eval 执行函数</span>
  <span class="token keyword keyword-var">var</span> result <span class="token operator">=</span> <span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">"context[uniqueId]("</span> <span class="token operator">+</span> args <span class="token operator">+</span> <span class="token string">")"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 删除添加的属性</span>
  <span class="token keyword keyword-delete">delete</span> context<span class="token punctuation">[</span>uniqueId<span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// 返回执行结果</span>
  <span class="token keyword control-flow keyword-return">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><p>这个<code>myCall</code>方法首先检查传入的<code>context</code>，如果没有传入或者传入的是<code>null</code>，就设置<code>context</code>为全局对象。然后，将函数设置为<code>context</code>的一个属性，这样就可以改变函数内部的<code>this</code>指向。接着，获取<code>call</code>方法的参数，并使用<code>eval</code>函数执行函数。最后，删除添加的属性，并返回执行结果。</p>
      <p>请注意，这个实现使用了<code>eval</code>函数，这个函数有一些安全问题。在实际的生产环境中，我们应该尽量避免使用<code>eval</code>函数。</p>
      <h3
        id="使用场景"
        ebook-toc-level-3=""
        heading="使用场景 "
      >
        使用场景
      </h3>
      <p>在 JavaScript 中，<code>call</code> 方法是所有函数对象的内置方法之一。它的主要作用是改变函数的执行上下文，即函数运行时 <code>this</code> 关键字的指向。<code>call</code> 方法接受的参数是一个参数列表，第一个参数是要设置为 <code>this</code> 的值，其余参数是要传递给函数的参数。</p>
      <p>以下是一些 <code>call</code> 方法的使用场景：</p>
      <p>在 JavaScript 中，<code>call</code>是一个非常有用的方法，它允许我们借用一个对象的方法或者属性。这在很多情况下都非常有用。以下是一些使用场景和示例：</p>
      <ol>
        <li><strong>改变函数的上下文（this 的指向）</strong>:</li>
      </ol>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-let">let</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"John"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

greet<span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: "Hello, my name is John"</span>
</code></pre><p>在这个例子中，我们使用<code>call</code>方法将<code>greet</code>函数的上下文改为<code>user</code>对象。</p>
      <ol start="2">
        <li><strong>借用其他对象的方法</strong></li>
      </ol>
      <p>这是 <code>call</code> 最常见的用途。如果两个对象有相同的方法，你可以使用一个对象的方法来操作另一个对象。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-let">let</span> person1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">fullName</span><span class="token operator">:</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">firstName</span> <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">lastName</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-let">let</span> person2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">"John"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">"Doe"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>person1<span class="token punctuation">.</span><span class="token method function property-access">fullName</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// John Doe</span>
</code></pre><p>在这个例子中，<code>person1</code> 有一个 <code>fullName</code> 方法，而 <code>person2</code> 没有。我们使用 <code>call</code> 方法，将 <code>this</code> 设置为 <code>person2</code>，这样 <code>person1</code> 的 <code>fullName</code> 方法就能操作 <code>person2</code> 的数据了。</p>
      <ol start="3">
        <li><strong>使用参数列表调用函数</strong></li>
      </ol>
      <p><code>call</code> 方法的其他参数是要传递给函数的参数，这意味着我们可以使用 <code>call</code> 方法将参数列表传递给函数。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token parameter">greeting<span class="token punctuation">,</span> punctuation</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>greeting <span class="token operator">+</span> <span class="token string">", "</span> <span class="token operator">+</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">+</span> punctuation<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-let">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"John Doe"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

greet<span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">"Hello"</span><span class="token punctuation">,</span> <span class="token string">"!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Hello, John Doe!</span>
</code></pre><p>在这个例子中，<code>greet</code> 函数需要两个参数：<code>greeting</code> 和 <code>punctuation</code>。我们使用 <code>call</code> 方法，将 <code>this</code> 设置为 <code>person</code>，并传递 'Hello' 和 '!' 作为参数。</p>
      <ol start="4">
        <li><strong>链式继承（多重继承）</strong>:</li>
      </ol>
      <p>JavaScript 并不直接支持多重继承，但我们可以通过<code>call</code>方法来实现类似的功能。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Mammal</span></span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">isMammal</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">WingedAnimal</span></span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> wings</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token maybe-class-name">Mammal</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">wings</span> <span class="token operator">=</span> wings<span class="token punctuation">;</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">isWingedAnimal</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Bat</span></span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> wings<span class="token punctuation">,</span> isNocturnal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token maybe-class-name">WingedAnimal</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> wings<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">isNocturnal</span> <span class="token operator">=</span> isNocturnal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-let">let</span> bat <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Bat</span><span class="token punctuation">(</span><span class="token string">"Bruce"</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>bat<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Bat { name: 'Bruce', isMammal: true, wings: 2, isWingedAnimal: true, isNocturnal: true }</span>
</code></pre><p>在这个例子中，我们通过<code>call</code>方法实现了链式继承。<code>Bat</code>继承了<code>WingedAnimal</code>和<code>Mammal</code>的属性。</p>
      <ol start="5">
        <li><strong>将类数组对象转换为数组</strong>:</li>
      </ol>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-let">let</span> pseudoArray <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">0</span><span class="token operator">:</span> <span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">:</span> <span class="token string">"b"</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span> <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-let">let</span> realArray <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method function property-access">slice</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span>pseudoArray<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>realArray<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: [ 'a', 'b', 'c' ]</span>
</code></pre><p>在这个例子中，我们使用<code>call</code>方法和<code>Array.prototype.slice</code>将一个类数组对象转换为一个真正的数组。</p>
      <ol start="6">
        <li><strong>使用 Math 函数处理数组</strong>:</li>
      </ol>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-let">let</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword keyword-let">let</span> max <span class="token operator">=</span> <span class="token known-class-name class-name">Math</span><span class="token punctuation">.</span><span class="token method function property-access">max</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token keyword null nil keyword-null">null</span><span class="token punctuation">,</span> <span class="token spread operator">...</span>numbers<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 7</span>
</code></pre><p>在这个例子中，我们使用<code>call</code>方法和扩展运算符（<code>...</code>）来找到数组中的最大值。通常，<code>Math.max</code>不能直接用于数组，但是通过使用<code>call</code>，我们可以传递一个数组的所有元素作为参数。</p>
      <p>这些是<code>call</code>方法的一些常见使用场景，希望这些示例能帮助你更好地理解<code>call</code>方法在 JavaScript 中的应用。</p>
      <h2
        id="apply"
        ebook-toc-level-2=""
        heading="apply "
      >
        apply
      </h2>
      <h3
        id="执行过程-1"
        ebook-toc-level-3=""
        heading="执行过程 "
      >
        执行过程
      </h3>
      <p>JavaScript 中的<code>apply</code>方法是所有函数对象都有的一个方法，它的主要作用是改变函数内部的<code>this</code>指向，并立即执行这个函数。<code>apply</code>方法接受两个参数，第一个参数是需要绑定的<code>this</code>值，第二个参数是一个数组或类数组对象，其中的元素会被作为单独的参数传给函数。</p>
      <p>以下是<code>apply</code>方法的执行过程：</p>
      <ol>
        <li>
          <p><strong>检查调用对象</strong>：首先，<code>apply</code>会检查它的调用对象，也就是它前面的函数对象。如果调用对象不是一个函数，JavaScript 会抛出一个错误。</p>
        </li>
        <li>
          <p><strong>设置<code>this</code>值</strong>：然后，<code>apply</code>方法会设置函数内部的<code>this</code>值。如果<code>apply</code>的第一个参数是<code>null</code>或<code>undefined</code>，函数内部的<code>this</code>值会被设置为全局对象。如果<code>apply</code>的第一个参数是一个原始值（比如一个数字或字符串），函数内部的<code>this</code>值会被设置为这个原始值的包装对象。如果<code>apply</code>的第一个参数是一个对象，函数内部的<code>this</code>值会被设置为这个对象。</p>
        </li>
        <li>
          <p><strong>获取参数</strong>：<code>apply</code>方法会从它的第二个参数（一个数组或类数组对象）中获取参数，并把这些参数作为单独的参数传给函数。如果<code>apply</code>没有第二个参数，或者第二个参数是<code>null</code>或<code>undefined</code>，函数将不会接收到任何参数。</p>
        </li>
        <li>
          <p><strong>执行函数</strong>：最后，<code>apply</code>方法会立即执行函数，并返回函数的执行结果。</p>
        </li>
      </ol>
      <p>以下是一个使用<code>apply</code>方法的例子：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token parameter">greeting<span class="token punctuation">,</span> punctuation</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>greeting <span class="token operator">+</span> <span class="token string">", "</span> <span class="token operator">+</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">+</span> punctuation<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-var">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"John"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

greet<span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"Hello"</span><span class="token punctuation">,</span> <span class="token string">"!"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：Hello, John!</span>
</code></pre><p>在这个例子中，<code>apply</code>方法改变了<code>greet</code>函数内部的<code>this</code>值，并立即执行了<code>greet</code>函数。</p>
      <h3
        id="模拟实现-1"
        ebook-toc-level-3=""
        heading="模拟实现 "
      >
        模拟实现
      </h3>
      <p>在 JavaScript 中，我们可以模拟实现 <code>apply</code> 方法的功能。以下是一个简单的实现：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token class-name">Function</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">myApply</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 判断调用对象是否为函数</span>
  <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span><span class="token keyword keyword-typeof">typeof</span> <span class="token keyword keyword-this">this</span> <span class="token operator">!==</span> <span class="token string">"function"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-throw">throw</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">"Apply must be called on a function"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  context <span class="token operator">=</span> context <span class="token operator">?</span> <span class="token known-class-name class-name">Object</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token dom variable">window</span><span class="token punctuation">;</span> <span class="token comment">// 若没有传入this, 默认绑定window对象</span>
  context<span class="token punctuation">.</span><span class="token property-access">fn</span> <span class="token operator">=</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">;</span> <span class="token comment">// 将调用apply方法的函数添加到context的属性中</span>

  <span class="token keyword keyword-let">let</span> result<span class="token punctuation">;</span>
  <span class="token comment">// 判断参数是否存在</span>
  <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token method function property-access">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword control-flow keyword-else">else</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token known-class-name class-name">Array</span><span class="token punctuation">.</span><span class="token method function property-access">isArray</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword control-flow keyword-throw">throw</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">"CreateListFromArrayLike called on non-object"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword keyword-let">let</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword control-flow keyword-for">for</span> <span class="token punctuation">(</span><span class="token keyword keyword-let">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      args<span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token string">"arr["</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">"]"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    result <span class="token operator">=</span> <span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">"context.fn("</span> <span class="token operator">+</span> args <span class="token operator">+</span> <span class="token string">")"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword keyword-delete">delete</span> context<span class="token punctuation">.</span><span class="token property-access">fn</span><span class="token punctuation">;</span> <span class="token comment">// 删除添加的属性</span>
  <span class="token keyword control-flow keyword-return">return</span> result<span class="token punctuation">;</span> <span class="token comment">// 返回执行结果</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><p>这个 <code>myApply</code> 方法首先检查它的调用对象是否是一个函数，如果不是，就抛出一个错误。然后，它设置函数内部的 <code>this</code> 值，并将调用 <code>apply</code> 方法的函数添加到 <code>context</code> 的属性中。接着，它检查参数是否存在，如果存在，就把参数作为单独的参数传给函数；如果不存在，函数将不会接收到任何参数。最后，它删除添加的属性，并返回函数的执行结果。</p>
      <p>下面是一个简单的例子来说明 <code>myApply</code> 方法的使用方法：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token parameter">greeting<span class="token punctuation">,</span> punctuation</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>greeting <span class="token operator">+</span> <span class="token string">", "</span> <span class="token operator">+</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">+</span> punctuation<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-var">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"John"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

greet<span class="token punctuation">.</span><span class="token method function property-access">myApply</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"Hello"</span><span class="token punctuation">,</span> <span class="token string">"!"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：Hello, John!</span>
</code></pre><p>在这个例子中，<code>myApply</code> 方法改变了 <code>greet</code> 函数内部的 <code>this</code> 值，并立即执行了 <code>greet</code> 函数。</p>
      <h3
        id="使用场景-1"
        ebook-toc-level-3=""
        heading="使用场景 "
      >
        使用场景
      </h3>
      <p>在 JavaScript 中，<code>apply</code> 方法和 <code>call</code> 方法类似，都是用来改变函数的执行上下文，即函数运行时 <code>this</code> 关键字的指向。不同之处在于，<code>apply</code> 方法接受的是一个参数数组，而 <code>call</code> 方法接受的是一个参数列表。</p>
      <p>以下是一些 <code>apply</code> 方法的使用场景：</p>
      <ol>
        <li><strong>借用其他对象的方法</strong></li>
      </ol>
      <p>这和 <code>call</code> 方法的用法类似。如果两个对象有相同的方法，你可以使用一个对象的方法来操作另一个对象。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-let">let</span> person1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">fullName</span><span class="token operator">:</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">firstName</span> <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">lastName</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-let">let</span> person2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">"John"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">"Doe"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>person1<span class="token punctuation">.</span><span class="token method function property-access">fullName</span><span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// John Doe</span>
</code></pre><p>在这个例子中，<code>person1</code> 有一个 <code>fullName</code> 方法，而 <code>person2</code> 没有。我们使用 <code>apply</code> 方法，将 <code>this</code> 设置为 <code>person2</code>，这样 <code>person1</code> 的 <code>fullName</code> 方法就能操作 <code>person2</code> 的数据了。</p>
      <ol start="2">
        <li><strong>使用参数数组调用函数</strong></li>
      </ol>
      <p><code>apply</code> 方法的第二个参数是一个数组，这意味着我们可以使用 <code>apply</code> 方法将一个数组的元素作为参数传递给函数。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token parameter">greeting<span class="token punctuation">,</span> punctuation</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>greeting <span class="token operator">+</span> <span class="token string">", "</span> <span class="token operator">+</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">+</span> punctuation<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-let">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"John Doe"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

greet<span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"Hello"</span><span class="token punctuation">,</span> <span class="token string">"!"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Hello, John Doe!</span>
</code></pre><p>在这个例子中，<code>greet</code> 函数需要两个参数：<code>greeting</code> 和 <code>punctuation</code>。我们使用 <code>apply</code> 方法，将 <code>this</code> 设置为 <code>person</code>，并传递一个数组 <code>['Hello', '!']</code> 作为参数。</p>
      <ol start="3">
        <li><strong>找出数组中的最大值或最小值</strong></li>
      </ol>
      <p><code>Math.max</code> 和 <code>Math.min</code> 函数可以接受多个参数，但不能接受一个数组。我们可以使用 <code>apply</code> 方法解决这个问题。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-let">let</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 使用 apply 方法找出数组中的最大值</span>
<span class="token keyword keyword-let">let</span> max <span class="token operator">=</span> <span class="token known-class-name class-name">Math</span><span class="token punctuation">.</span><span class="token method function property-access">max</span><span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span><span class="token keyword null nil keyword-null">null</span><span class="token punctuation">,</span> numbers<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 7</span>
</code></pre><p>在这个例子中，我们使用 <code>apply</code> 方法将 <code>numbers</code> 数组的元素作为参数传递给 <code>Math.max</code> 函数。注意，因为 <code>Math.max</code> 函数不使用 <code>this</code>，所以我们将 <code>this</code> 设置为 <code>null</code>。</p>
      <p>当然，除了上述的使用场景，<code>apply</code> 还有其他的使用方式。以下是一些额外的 <code>apply</code> 方法的使用场景：</p>
      <ol start="4">
        <li><strong>链接数组</strong></li>
      </ol>
      <p><code>apply</code> 可以用于链接数组。例如，我们需要将一个数组添加到另一个数组的末尾，我们可以使用 <code>Array.prototype.push.apply</code>：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-let">let</span> array1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword keyword-let">let</span> array2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 使用 apply 方法链接数组</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span>array1<span class="token punctuation">,</span> array2<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>array1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, 3, 4, 5, 6]</span>
</code></pre><p>在这个例子中，我们使用 <code>apply</code> 方法将 <code>array2</code> 的元素作为参数传递给 <code>array1.push</code> 方法。这样 <code>array2</code> 的所有元素就被添加到 <code>array1</code> 的末尾了。</p>
      <ol start="5">
        <li><strong>函数的柯里化</strong></li>
      </ol>
      <p>柯里化是一种将使用多个参数的函数转换成一系列使用一个参数的函数的技术。我们可以使用 <code>apply</code> 方法实现柯里化：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> x <span class="token operator">+</span> y <span class="token operator">+</span> z<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 柯里化函数</span>
<span class="token keyword keyword-function">function</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-let">let</span> args <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method function property-access">slice</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-let">let</span> innerArgs <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method function property-access">slice</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword keyword-let">let</span> finalArgs <span class="token operator">=</span> args<span class="token punctuation">.</span><span class="token method function property-access">concat</span><span class="token punctuation">(</span>innerArgs<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword control-flow keyword-return">return</span> fn<span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span><span class="token keyword null nil keyword-null">null</span><span class="token punctuation">,</span> finalArgs<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-let">let</span> curriedSum <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span>sum<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token function">curriedSum</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>
</code></pre><p>在这个例子中，<code>curry</code> 函数接受一个函数 <code>fn</code> 和一些参数 <code>args</code>，并返回一个新的函数。这个新的函数会将 <code>args</code> 和它自己的参数 <code>innerArgs</code> 合并，然后使用 <code>apply</code> 方法将这些参数传递给 <code>fn</code>。</p>
      <ol start="6">
        <li><strong>在构造函数中使用 apply</strong></li>
      </ol>
      <p>在某些情况下，我们可能需要在构造函数中使用 <code>apply</code>。这通常涉及到动态参数的传递，或者继承其他构造函数的属性和方法：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Person</span></span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">age</span> <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Employee</span></span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token maybe-class-name">Person</span><span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> age<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">position</span> <span class="token operator">=</span> position<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-let">let</span> employee <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Employee</span><span class="token punctuation">(</span><span class="token string">"John Doe"</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token string">"Developer"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>employee<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { name: 'John Doe', age: 30, position: 'Developer' }</span>
</code></pre><p>在这个例子中，<code>Employee</code> 构造函数使用 <code>Person.apply(this, [name, age])</code> 调用 <code>Person</code> 构造函数，这样 <code>Employee</code> 就能继承 <code>Person</code> 的属性了。</p>
      <h2
        id="bind"
        ebook-toc-level-2=""
        heading="bind "
      >
        bind
      </h2>
      <h3
        id="执行过程-2"
        ebook-toc-level-3=""
        heading="执行过程 "
      >
        执行过程
      </h3>
      <p>JavaScript 中的<code>bind</code>方法是所有函数对象都有的一个方法，它的主要作用是创建一个新的函数，这个新的函数在调用时会有预设的初始参数，这些参数会加在新函数的参数列表前面，并且新函数的<code>this</code>值会被绑定到<code>bind</code>的第一个参数上。</p>
      <p>以下是<code>bind</code>方法的执行过程：</p>
      <ol>
        <li>
          <p><strong>检查调用对象</strong>：首先，<code>bind</code>会检查它的调用对象，也就是它前面的函数对象。如果调用对象不是一个函数，JavaScript 会抛出一个错误。</p>
        </li>
        <li>
          <p><strong>获取参数</strong>：然后，<code>bind</code>会从它的参数列表中获取参数。这些参数（除了第一个参数外）会被作为新函数的初始参数。</p>
        </li>
        <li>
          <p><strong>设置<code>this</code>值</strong>：<code>bind</code>方法会设置新函数的<code>this</code>值。如果<code>bind</code>的第一个参数是<code>null</code>或<code>undefined</code>，新函数的<code>this</code>值会被设置为全局对象。如果<code>bind</code>的第一个参数是一个原始值（比如一个数字或字符串），新函数的<code>this</code>值会被设置为这个原始值的包装对象。如果<code>bind</code>的第一个参数是一个对象，新函数的<code>this</code>值会被设置为这个对象。</p>
        </li>
        <li>
          <p><strong>创建新函数</strong>：最后，<code>bind</code>会创建一个新的函数。这个新的函数在调用时会有预设的初始参数，这些参数会加在新函数的参数列表前面。并且新函数的<code>this</code>值会被绑定到<code>bind</code>的第一个参数上。</p>
        </li>
      </ol>
      <p>以下是一个使用<code>bind</code>方法的例子：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token parameter">greeting<span class="token punctuation">,</span> punctuation</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>greeting <span class="token operator">+</span> <span class="token string">", "</span> <span class="token operator">+</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">+</span> punctuation<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-var">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"John"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-var">var</span> boundGreet <span class="token operator">=</span> greet<span class="token punctuation">.</span><span class="token method function property-access">bind</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">"Hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">boundGreet</span><span class="token punctuation">(</span><span class="token string">"!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：Hello, John!</span>
</code></pre><p>在这个例子中，<code>bind</code>方法创建了一个新的函数<code>boundGreet</code>，并预设了<code>greet</code>函数的<code>this</code>值和初始参数。当调用<code>boundGreet</code>函数时，它会使用预设的<code>this</code>值和初始参数，然后加上它自己的参数列表，最后执行<code>greet</code>函数。</p>
      <h3
        id="模拟实现-2"
        ebook-toc-level-3=""
        heading="模拟实现 "
      >
        模拟实现
      </h3>
      <p>JavaScript 中的 <code>bind()</code> 方法可以通过以下步骤来模拟实现：</p>
      <ol>
        <li>首先，接收一个需要绑定的 <code>this</code> 上下文以及一些参数。</li>
        <li>然后，返回一个新的函数。</li>
        <li>在这个新函数中，调用原函数，并将 <code>this</code> 上下文以及参数传入。</li>
      </ol>
      <p>这个过程可以用以下的代码来实现：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token class-name">Function</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">myBind</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span><span class="token keyword keyword-typeof">typeof</span> <span class="token keyword keyword-this">this</span> <span class="token operator">!==</span> <span class="token string">"function"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-throw">throw</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>
      <span class="token string">"Function.prototype.myBind - what is trying to be bound is not callable"</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword keyword-var">var</span> self <span class="token operator">=</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">;</span>
  <span class="token keyword keyword-var">var</span> args <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method function property-access">slice</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword keyword-var">var</span> <span class="token function-variable function">fNOP</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword keyword-var">var</span> <span class="token function-variable function">fBound</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-var">var</span> bindArgs <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method function property-access">slice</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword control-flow keyword-return">return</span> self<span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span>
      <span class="token keyword keyword-this">this</span> <span class="token keyword keyword-instanceof">instanceof</span> <span class="token class-name">fNOP</span> <span class="token operator">?</span> <span class="token keyword keyword-this">this</span> <span class="token operator">:</span> context<span class="token punctuation">,</span>
      args<span class="token punctuation">.</span><span class="token method function property-access">concat</span><span class="token punctuation">(</span>bindArgs<span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  fNOP<span class="token punctuation">.</span><span class="token property-access">prototype</span> <span class="token operator">=</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">;</span>
  fBound<span class="token punctuation">.</span><span class="token property-access">prototype</span> <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">fNOP</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword control-flow keyword-return">return</span> fBound<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><p>在这段代码中：</p>
      <ul>
        <li><code>self</code> 是原函数。</li>
        <li><code>context</code> 是需要绑定的 <code>this</code> 上下文。</li>
        <li><code>args</code> 是 <code>bind</code> 方法接收的参数，除了第一个参数（<code>this</code> 上下文）以外的其他参数。</li>
        <li><code>fNOP</code> 是一个空函数，它的作用是为了让 <code>fBound</code> 可以作为构造函数使用，同时不调用 <code>self</code>。</li>
        <li><code>fBound</code> 是绑定后的新函数，它会调用 <code>self</code>，并根据是否使用 <code>new</code> 关键字来决定 <code>this</code> 的值，然后将 <code>args</code> 和新调用的参数一起传给 <code>self</code>。</li>
      </ul>
      <p>这样，我们就模拟实现了 JavaScript 的 <code>bind()</code> 方法。</p>
      <h3
        id="使用场景-2"
        ebook-toc-level-3=""
        heading="使用场景 "
      >
        使用场景
      </h3>
      <p><code>bind()</code> 方法在 JavaScript 中有许多使用场景。以下是一些常见的例子：</p>
      <ol>
        <li>
          <p><strong>事件监听器中的 <code>this</code></strong>：在事件监听器中，<code>this</code> 通常指向触发事件的元素。如果你希望 <code>this</code> 指向其他对象，可以使用 <code>bind()</code>。</p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-var">var</span> button <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">"myButton"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword keyword-var">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">num</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
button<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> obj<span class="token punctuation">.</span><span class="token method function property-access">onClick</span><span class="token punctuation">.</span><span class="token method function property-access">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：10</span>
</code></pre><p>在这个例子中，如果不使用 <code>bind()</code>，<code>this.num</code> 将会是 <code>undefined</code>，因为 <code>this</code> 将指向按钮元素，而不是 <code>obj</code>。</p>
        </li>
        <li>
          <p><strong>部分应用函数（Partial Application）</strong>：<code>bind()</code> 可以用来创建部分应用函数，即预先设置一些参数，返回一个新的函数，等待接收剩余的参数。</p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-function">function</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> a <span class="token operator">*</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword keyword-var">var</span> multiplyByTwo <span class="token operator">=</span> multiply<span class="token punctuation">.</span><span class="token method function property-access">bind</span><span class="token punctuation">(</span><span class="token keyword null nil keyword-null">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token function">multiplyByTwo</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：8</span>
</code></pre><p>在这个例子中，<code>multiplyByTwo</code> 是一个部分应用的 <code>multiply</code> 函数，它的第一个参数已经被设置为 <code>2</code>。</p>
        </li>
        <li>
          <p><strong>在定时器中保持 <code>this</code></strong>：在 <code>setTimeout</code> 或 <code>setInterval</code> 的回调函数中，<code>this</code> 通常指向全局对象（在浏览器中是 <code>window</code>）。如果你希望 <code>this</code> 指向其他对象，可以使用 <code>bind()</code>。</p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-var">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token function-variable function">startTimer</span><span class="token operator">:</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span>
      <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">num</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token method function property-access">bind</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token number">1000</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token method function property-access">startTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：10</span>
</code></pre><p>在这个例子中，如果不使用 <code>bind()</code>，<code>this.num</code> 将会是 <code>undefined</code>，因为 <code>this</code> 将指向 <code>window</code>，而不是 <code>obj</code>。</p>
        </li>
      </ol>
      <p>这些都是 <code>bind()</code> 在 JavaScript 中的常见用途，通过使用 <code>bind()</code>，可以更灵活地控制函数的 <code>this</code> 和参数。</p>
      <p>当然，除了上述的使用场景，<code>bind()</code> 还有其他的应用。以下是一些额外的例子：</p>
      <ol start="4">
        <li>
          <p><strong>在类（Class）方法中保持 <code>this</code></strong>：在 React 类组件中，经常需要在构造函数中使用 <code>bind()</code> 来确保方法中的 <code>this</code> 正确指向组件实例。</p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-class">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword keyword-extends">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-super">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">handleClick</span> <span class="token operator">=</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token method function property-access">handleClick</span><span class="token punctuation">.</span><span class="token method function property-access">bind</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// `this` 在这里正确地指向了组件实例</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-return">return</span> <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">handleClick</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token maybe-class-name">Click</span> me<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><p>在这个例子中，如果不使用 <code>bind()</code>，<code>handleClick</code> 方法中的 <code>this</code> 将是 <code>undefined</code>，因为 React 事件处理函数的回调中 <code>this</code> 不会自动绑定到组件实例。</p>
        </li>
        <li>
          <p><strong>创建具有特定上下文的函数</strong>：<code>bind()</code> 可以用来创建一个永久绑定到特定 <code>this</code> 上下文的函数。</p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-var">var</span> module <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">,</span>
  <span class="token function-variable function">getX</span><span class="token operator">:</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">x</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-var">var</span> retrieveX <span class="token operator">=</span> module<span class="token punctuation">.</span><span class="token property-access">getX</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token function">retrieveX</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：undefined，因为在这种情况下，this 指向全局对象</span>

<span class="token keyword keyword-var">var</span> boundGetX <span class="token operator">=</span> retrieveX<span class="token punctuation">.</span><span class="token method function property-access">bind</span><span class="token punctuation">(</span>module<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token function">boundGetX</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：42，因为 this 已经被绑定到 module</span>
</code></pre><p>在这个例子中，<code>retrieveX</code> 函数的 <code>this</code> 默认指向全局对象，而 <code>boundGetX</code> 函数的 <code>this</code> 则被绑定到 <code>module</code>。</p>
        </li>
      </ol>
      <p>以上就是 <code>bind()</code> 方法的一些常见使用场景。它提供了一种灵活的方式来控制函数的 <code>this</code> 上下文和参数，使得函数能够在各种不同的上下文中被重复使用。</p>
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