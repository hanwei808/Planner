<template>
  <div
    class="article-container"
    :class="{'md-sidebar-expand': !$store.state.isMdCollapse}"
  >
    <div class="crossnote markdown-preview">
      <h1
        id="函数与闭包"
        ebook-toc-level-1=""
        heading="函数与闭包 "
      >
        函数与闭包
      </h1>
      <h2
        id="函数"
        ebook-toc-level-2=""
        heading="函数 "
      >
        函数
      </h2>
      <h3
        id="是什么"
        ebook-toc-level-3=""
        heading="是什么 "
      >
        是什么
      </h3>
      <p>JavaScript 中的函数（Function）是一种封装了一段可以执行任务或计算值的代码块。函数在 JavaScript 中是一种基本的构建块，它允许你定义代码一次，然后在需要的时候多次调用执行。</p>
      <p>函数可以带有参数，这些参数相当于函数执行时的输入值，它们可以在函数体内被使用。函数还可以返回一个值，这个值可以是任何 JavaScript 数据类型的值，包括数字、字符串、对象或者甚至是另一个函数。</p>
      <p>下面是一个简单的 JavaScript 函数示例：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token comment">// 定义一个名为 "sayHello" 的函数，它接受一个参数 "name"</span>
<span class="token keyword keyword-function">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"Hello, "</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">"!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调用函数，并传递参数 "Alice"</span>
<span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token string">"Alice"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 弹出一个对话框显示 "Hello, Alice!"</span>
</code></pre><p>函数可以通过几种不同的方式来定义：</p>
      <ol>
        <li>函数声明（Function Declaration）:</li>
      </ol>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><ol start="2">
        <li>函数表达式（Function Expression）:</li>
      </ol>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-const">const</span> <span class="token function-variable function">myFunction</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><ol start="3">
        <li>箭头函数（Arrow Function）, ES6 引入的新语法:</li>
      </ol>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-const">const</span> <span class="token function-variable function">myFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 对于单一表达式，可以省略花括号和 return 关键字</span>
<span class="token keyword keyword-const">const</span> <span class="token function-variable function">myFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
</code></pre><p>函数是 JavaScript 中的一等公民（First-class citizens），意味着它们可以像其他值一样被赋值给变量、作为参数传递给其他函数、甚至可以作为其他函数的返回值。这种特性使得 JavaScript 支持高阶函数（Higher-order functions），这是函数式编程的一个重要概念。</p>
      <h3
        id="知识点"
        ebook-toc-level-3=""
        heading="知识点 "
      >
        知识点
      </h3>
      <p>JavaScript 函数是非常强大和灵活的，涉及到多个关键的知识点。以下是一些核心的知识点：</p>
      <ol>
        <li>
          <p><strong>函数声明与表达式</strong>:</p>
          <ul>
            <li>函数声明（Function Declaration）定义一个命名的函数。</li>
            <li>函数表达式（Function Expression）定义一个作为表达式的函数，可以是匿名的，也可以是命名的。</li>
          </ul>
        </li>
        <li>
          <p><strong>箭头函数</strong>:</p>
          <ul>
            <li>ES6 引入了箭头函数，它提供了一种更简洁的函数写法，并且不绑定自己的 <code>this</code>，<code>arguments</code>，<code>super</code> 或 <code>new.target</code>。</li>
          </ul>
        </li>
        <li>
          <p><strong>函数参数</strong>:</p>
          <ul>
            <li>默认参数：允许在函数定义时给参数赋予默认值。</li>
            <li>剩余参数：使用 <code>...</code> 语法允许将不确定数量的参数作为一个数组传入。</li>
            <li>参数解构：允许直接在参数定义中解构对象或数组。</li>
          </ul>
        </li>
        <li>
          <p><strong>返回值</strong>:</p>
          <ul>
            <li>函数可以返回值，使用 <code>return</code> 语句。如果没有 <code>return</code> 语句，函数默认返回 <code>undefined</code>。</li>
          </ul>
        </li>
        <li>
          <p><strong>作用域（Scope）</strong>:</p>
          <ul>
            <li>函数创建自己的作用域，变量在函数内声明时只能在函数内部访问。</li>
            <li>闭包：函数可以记住并访问它创建时所在的作用域，即使函数在外部执行。</li>
          </ul>
        </li>
        <li>
          <p><strong>提升（Hoisting）</strong>:</p>
          <ul>
            <li>函数声明会被提升到作用域的顶部，意味着可以在声明之前调用函数。</li>
            <li>函数表达式（包括箭头函数）不会被提升。</li>
          </ul>
        </li>
        <li>
          <p><strong><code>this</code> 关键字</strong>:</p>
          <ul>
            <li>在函数中，<code>this</code> 关键字的值取决于函数的调用方式。</li>
            <li>箭头函数没有自己的 <code>this</code>，它会捕获其所在上下文的 <code>this</code> 值。</li>
          </ul>
        </li>
        <li>
          <p><strong>立即调用的函数表达式（IIFE）</strong>:</p>
          <ul>
            <li>IIFE 是一个在定义后立即执行的函数，常用于创建一个独立的作用域。</li>
          </ul>
        </li>
        <li>
          <p><strong>高阶函数</strong>:</p>
          <ul>
            <li>函数可以作为参数传递给其他函数，或者作为其他函数的返回值。</li>
          </ul>
        </li>
        <li>
          <p><strong>回调函数</strong>:</p>
          <ul>
            <li>一个函数可以作为参数传递给另一个函数，然后在某个事件或条件发生后被调用。</li>
          </ul>
        </li>
        <li>
          <p><strong>递归</strong>:</p>
          <ul>
            <li>函数可以调用自己，用于处理树形结构数据、执行重复任务等。</li>
          </ul>
        </li>
        <li>
          <p><strong>异步函数</strong>:</p>
          <ul>
            <li>使用 <code>async</code> 和 <code>await</code> 关键字可以编写异步代码，这实际上是基于 Promises 的语法糖。</li>
          </ul>
        </li>
        <li>
          <p><strong>构造函数与 <code>new</code> 关键字</strong>:</p>
          <ul>
            <li>函数可以用作构造函数，与 <code>new</code> 关键字一起使用来创建新的对象实例。</li>
          </ul>
        </li>
        <li>
          <p><strong>方法</strong>:</p>
          <ul>
            <li>函数可以作为对象的属性，即方法，可以使用 <code>this</code> 访问其所属对象的属性。</li>
          </ul>
        </li>
        <li>
          <p><strong>严格模式</strong>:</p>
          <ul>
            <li>在函数体内部使用 <code>'use strict'</code> 可以启用严格模式，这有助于捕获潜在的错误，如未声明的变量等。</li>
          </ul>
        </li>
        <li>
          <p><strong>函数的属性和方法</strong>:</p>
          <ul>
            <li>函数是对象，有自己的属性和方法，如 <code>length</code> 属性表示参数的数量，<code>call</code>、<code>apply</code> 和 <code>bind</code> 方法用于指定函数的 <code>this</code> 值和参数。</li>
          </ul>
        </li>
        <li>
          <p><strong>生成器函数</strong>:</p>
          <ul>
            <li>使用 <code>function*</code> 语法定义的函数，可以通过 <code>yield</code> 关键字暂停和恢复执行。</li>
          </ul>
        </li>
        <li>
          <p><strong>错误处理</strong>:</p>
          <ul>
            <li>在函数内部可以使用 <code>try...catch</code> 语句来处理错误和异常。</li>
          </ul>
        </li>
      </ol>
      <p>这些知识点构成了 JavaScript 函数的基础，并在日常编程中广泛使用。掌握这些概念对于理解和使用 JavaScript 函数至关重要。</p>
      <h3
        id="使用场景"
        ebook-toc-level-3=""
        heading="使用场景 "
      >
        使用场景
      </h3>
      <p>在 JavaScript 中，函数用于执行各种各样的任务。以下是一些常见的使用场景，包括示例：</p>
      <ol>
        <li>
          <p>
            <strong>封装代码以重用</strong>:<br>
            函数允许你将代码封装起来，以便在多个地方重用，而不必复制和粘贴相同的代码。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-function">function</span> <span class="token function">calculateArea</span><span class="token punctuation">(</span><span class="token parameter">width<span class="token punctuation">,</span> height</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> width <span class="token operator">*</span> height<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-let">let</span> area1 <span class="token operator">=</span> <span class="token function">calculateArea</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword keyword-let">let</span> area2 <span class="token operator">=</span> <span class="token function">calculateArea</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>事件处理</strong>:<br>
            在 Web 开发中，函数经常用于响应用户事件，如点击、鼠标移动、按键等。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-function">function</span> <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Button clicked!"</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span><span class="token string">"myButton"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> handleClick<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>回调函数</strong>:<br>
            函数可以作为参数传递给其他函数（称为回调函数），在某个操作完成时执行。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-function">function</span> <span class="token function">processData</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 假设这里有一些数据处理</span>
  <span class="token keyword keyword-let">let</span> processedData <span class="token operator">=</span> data <span class="token operator">+</span> <span class="token string">" processed"</span><span class="token punctuation">;</span>
  <span class="token function">callback</span><span class="token punctuation">(</span>processedData<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">processData</span><span class="token punctuation">(</span><span class="token string">"raw data"</span><span class="token punctuation">,</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: raw data processed</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>立即调用的函数表达式 (IIFE)</strong>:<br>
            一种模式是立即调用函数表达式，这在创建一个私有作用域时很有用。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-let">let</span> privateVar <span class="token operator">=</span> <span class="token string">"I am private"</span><span class="token punctuation">;</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>privateVar<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// privateVar 在这个匿名函数外部是无法访问的</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>返回函数的函数（高阶函数）</strong>:<br>
            函数可以返回另一个函数，这在需要创建具有特定功能的新函数时很有用。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-function">function</span> <span class="token function">makeMultiplier</span><span class="token punctuation">(</span><span class="token parameter">multiplier</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-return">return</span> value <span class="token operator">*</span> multiplier<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-let">let</span> double <span class="token operator">=</span> <span class="token function">makeMultiplier</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token function">double</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 10</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>数组方法中的函数</strong>:<br>
            JavaScript 数组有许多内置方法，如 <code>map</code>, <code>filter</code>, <code>reduce</code> 等，这些方法都使用了回调函数。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-let">let</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword keyword-let">let</span> squaredNumbers <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token method function property-access">map</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> number <span class="token operator">*</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>squaredNumbers<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: [1, 4, 9, 16, 25]</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>异步编程</strong>:<br>
            在处理异步编程，如使用 <code>setTimeout</code> 或与 Promises 交互时，函数也是必不可少的。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"This message is shown after 1 second."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>构造函数</strong>:<br>
            在 ES6 之前，JavaScript 使用构造函数模式来模拟类的行为。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Person</span></span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">age</span> <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">greet</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Hello, my name is "</span> <span class="token operator">+</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">+</span> <span class="token string">"!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-let">let</span> person1 <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"Alice"</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
person1<span class="token punctuation">.</span><span class="token method function property-access">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Hello, my name is Alice!</span>
</code></pre>
        </li>
      </ol>
      <p>这些例子展示了 JavaScript 函数的灵活性和多功能性，它们是编写 JavaScript 代码的基础。随着 ES6 和后续版本的发展，JavaScript 提供了更多高级的函数特性，如箭头函数、默认参数、剩余参数、扩展运算符等，进一步增强了函数的能力。</p>
      <p>当然，除了上述提到的使用场景，JavaScript 函数还有更多的应用方式。补充一些其他的场景和示例：</p>
      <ol start="9">
        <li>
          <p>
            <strong>模块化代码</strong>:<br>
            函数可以帮助你将代码分割成模块，这样可以更容易地维护和管理代码，也便于实现代码的复用和测试。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token comment">// math.js</span>
<span class="token keyword keyword-function">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-function">function</span> <span class="token function">subtract</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> x <span class="token operator">-</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword module keyword-export">export</span> <span class="token exports"><span class="token punctuation">{</span> add<span class="token punctuation">,</span> subtract <span class="token punctuation">}</span></span><span class="token punctuation">;</span>

<span class="token comment">// main.js</span>
<span class="token keyword module keyword-import">import</span> <span class="token imports"><span class="token punctuation">{</span> add<span class="token punctuation">,</span> subtract <span class="token punctuation">}</span></span> <span class="token keyword module keyword-from">from</span> <span class="token string">"./math.js"</span><span class="token punctuation">;</span>

<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 8</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token function">subtract</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 2</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>闭包</strong>:<br>
            函数可以创建闭包，即即使创建它的上下文已经销毁，它仍然能够记住并访问所在的词法作用域中的变量。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-function">function</span> <span class="token function">createCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-let">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword control-flow keyword-return">return</span> count<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-let">let</span> counter <span class="token operator">=</span> <span class="token function">createCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token function">counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 1</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token function">counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 2</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>递归</strong>:<br>
            函数可以调用自身，这称为递归。递归可以用来解决分而治之的问题，如树的遍历、排序算法等。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-function">function</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-return">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword control-flow keyword-else">else</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-return">return</span> n <span class="token operator">*</span> <span class="token function">factorial</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token function">factorial</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 120</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>函数作为对象的方法</strong>:<br>
            在 JavaScript 中，函数也可以作为对象的属性，这时它们被称为方法。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-let">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Alice"</span><span class="token punctuation">,</span>
  <span class="token function-variable function">greet</span><span class="token operator">:</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Hello, my name is "</span> <span class="token operator">+</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">+</span> <span class="token string">"!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

person<span class="token punctuation">.</span><span class="token method function property-access">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Hello, my name is Alice!</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>默认参数和剩余参数</strong>:<br>
            ES6 引入了默认参数和剩余参数，使得函数定义更加灵活。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token comment">// 默认参数</span>
<span class="token keyword keyword-function">function</span> <span class="token function">greet</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"Guest"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Hello, "</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">"!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">greet</span><span class="token punctuation">(</span><span class="token string">"Alice"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Hello, Alice!</span>
<span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Hello, Guest!</span>

<span class="token comment">// 剩余参数</span>
<span class="token keyword keyword-function">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter"><span class="token spread operator">...</span>numbers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> numbers<span class="token punctuation">.</span><span class="token method function property-access">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> current</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> acc <span class="token operator">+</span> current<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 10</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>链式调用</strong>:<br>
            通过在函数的末尾返回当前对象，可以实现链式调用，这是创建流畅接口（Fluent Interface）的关键。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-let">let</span> calculator <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">value</span> <span class="token operator">+=</span> a<span class="token punctuation">;</span>
    <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">subtract</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">value</span> <span class="token operator">-=</span> a<span class="token punctuation">;</span>
    <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">value</span> <span class="token operator">*=</span> a<span class="token punctuation">;</span>
    <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">value</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-let">let</span> result <span class="token operator">=</span> calculator<span class="token punctuation">.</span><span class="token method function property-access">add</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">multiply</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">subtract</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 7</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>异步函数（Async Functions）</strong>:<br>
            ES2017 引入了 <code>async</code>/<code>await</code>，使得编写异步代码变得更加简洁和直观。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-async">async</span> <span class="token keyword keyword-function">function</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-try">try</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-let">let</span> response <span class="token operator">=</span> <span class="token keyword control-flow keyword-await">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://api.example.com/data"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword keyword-let">let</span> data <span class="token operator">=</span> <span class="token keyword control-flow keyword-await">await</span> response<span class="token punctuation">.</span><span class="token method function property-access">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword control-flow keyword-catch">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">error</span><span class="token punctuation">(</span><span class="token string">"Error fetching data:"</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
      </ol>
      <p>函数是 JavaScript 中非常强大的特性，它们的灵活性和多样性使得你可以用各种各样的方式来组织和执行代码。上述示例仅仅是冰山一角，随着你对 JavaScript 的深入学习，你会发现更多高级和有趣的函数用法。</p>
      <h2
        id="闭包"
        ebook-toc-level-2=""
        heading="闭包 "
      >
        闭包
      </h2>
      <h3
        id="是什么-1"
        ebook-toc-level-3=""
        heading="是什么 "
      >
        是什么
      </h3>
      <p>JavaScript 中的闭包（Closure）是一个非常重要的概念，它允许一个函数访问并操作该函数外部作用域的变量。</p>
      <p>闭包产生的情况通常是这样的：</p>
      <ol>
        <li>当一个函数（我们称之为外部函数）声明了另一个函数（内部函数）。</li>
        <li>内部函数可以访问外部函数中的变量。</li>
        <li>外部函数的执行完成后，通常外部函数中的局部变量不再可用，因为生命周期结束了。</li>
        <li>然而，如果内部函数在外部函数执行完毕后仍然存活（比如被返回或者在其他地方被引用），那么内部函数仍然可以访问外部函数的变量。</li>
      </ol>
      <p>这种情况下，即使外部函数的执行上下文已经消失，内部函数依然保有外部函数变量的引用，这种引用就是闭包。</p>
      <p>这里有一个简单的闭包例子：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">createCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-let">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里的匿名函数就是闭包，它可以访问外部函数createCounter的变量count</span>
    count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword control-flow keyword-return">return</span> count<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-const">const</span> counter <span class="token operator">=</span> <span class="token function">createCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token function">counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 1</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token function">counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 2</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token function">counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 3</span>
</code></pre><p>在上面的例子中，函数 <code>createCounter</code> 返回了一个匿名函数，这个匿名函数可以访问 <code>createCounter</code> 函数作用域中的 <code>count</code> 变量。即使 <code>createCounter</code> 函数的执行上下文已经结束，返回的匿名函数仍然可以访问并修改 <code>count</code> 变量，因为闭包使得这个变量被保留下来了。</p>
      <p>闭包的用途非常广泛，包括但不限于：</p>
      <ul>
        <li>创建私有变量</li>
        <li>封装函数</li>
        <li>模块化代码</li>
        <li>在异步编程中保持对某些变量的引用</li>
      </ul>
      <p>需要注意的是，闭包可能会导致内存泄漏，因为闭包中的变量不会在外部函数执行完毕后被垃圾回收机制回收，除非闭包本身被销毁。因此，在使用闭包时要特别注意不要无意中保留了不再需要的大型对象的引用。</p>
      <h3
        id="知识点-1"
        ebook-toc-level-3=""
        heading="知识点 "
      >
        知识点
      </h3>
      <p>闭包（Closures）是 JavaScript 中一个重要的概念，涉及到作用域、函数和内存管理等多个知识点。以下是一些与闭包相关的关键知识点：</p>
      <ol>
        <li>
          <p><strong>作用域（Scope）</strong>：</p>
          <ul>
            <li><strong>全局作用域</strong>：在代码中任何地方都能访问到的变量。</li>
            <li><strong>局部作用域</strong>：在特定函数内部定义的变量只能在该函数内部访问。</li>
            <li><strong>块级作用域</strong>（ES6 引入的 <code>let</code> 和 <code>const</code>）：在特定代码块（如 <code>if</code> 语句或 <code>for</code> 循环）内定义的变量。</li>
          </ul>
        </li>
        <li>
          <p><strong>执行上下文（Execution Context）</strong>：</p>
          <ul>
            <li>当函数被调用时，会为该函数创建一个新的执行上下文，包含了该函数的局部作用域。</li>
            <li>执行上下文有一个关联的变量对象，它包含了函数的参数、局部变量和函数声明。</li>
          </ul>
        </li>
        <li>
          <p><strong>作用域链（Scope Chain）</strong>：</p>
          <ul>
            <li>函数定义时的作用域决定了它可以访问哪些变量，即作用域链。</li>
            <li>内部函数可以访问外部函数的变量，但外部函数不能访问内部函数的变量。</li>
          </ul>
        </li>
        <li>
          <p><strong>闭包的形成</strong>：</p>
          <ul>
            <li>当一个函数返回另一个函数时，后者会保持对前者作用域的引用，这种结构就形成了闭包。</li>
            <li>即使外部函数执行完毕，闭包也可以访问外部函数作用域中的变量。</li>
          </ul>
        </li>
        <li>
          <p><strong>闭包的用途</strong>：</p>
          <ul>
            <li>创建私有变量和函数。</li>
            <li>封装功能模块，防止全局污染。</li>
            <li>实现模块化和模块间通信。</li>
            <li>在异步编程中保持对状态的引用。</li>
          </ul>
        </li>
        <li>
          <p><strong>内存考量</strong>：</p>
          <ul>
            <li>闭包可能会阻止垃圾回收机制回收不再需要的变量，因此可能导致内存泄漏。</li>
            <li>需要适时释放闭包，或者使用闭包时避免捕获大的数据结构。</li>
          </ul>
        </li>
        <li>
          <p><strong>立即执行函数表达式（IIFE）</strong>：</p>
          <ul>
            <li>一种常见的模式，使用闭包来创建一个立即执行的函数作用域，避免变量污染全局作用域。</li>
            <li>形式如 <code>(function() { /* 代码 */ })();</code></li>
          </ul>
        </li>
        <li>
          <p><strong>ES6 中的块级作用域</strong>：</p>
          <ul>
            <li><code>let</code> 和 <code>const</code> 关键字允许变量在块级作用域中有效，有助于减少闭包带来的问题。</li>
          </ul>
        </li>
        <li>
          <p><strong>闭包和循环</strong>：</p>
          <ul>
            <li>在循环中使用闭包时，经典错误是闭包会捕获循环结束时的变量状态，而不是每次迭代时的状态。</li>
            <li>ES6 的 <code>let</code> 关键字在 <code>for</code> 循环中为每次迭代创建了新的作用域，从而解决了这个问题。</li>
          </ul>
        </li>
      </ol>
      <p>理解闭包的工作原理和它的使用场景对于成为一名高效的 JavaScript 开发者至关重要。正确使用闭包可以编写出更加强大和灵活的代码。</p>
      <h3
        id="使用场景-1"
        ebook-toc-level-3=""
        heading="使用场景 "
      >
        使用场景
      </h3>
      <p>闭包在 JavaScript 中有许多实用的使用场景，以下是一些常见的例子：</p>
      <ol>
        <li>数据封装和私有变量</li>
      </ol>
      <p>闭包可以用来创建私有变量，使得这些变量不会暴露在全局作用域中，从而避免全局变量污染。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">createBankAccount</span><span class="token punctuation">(</span><span class="token parameter">initialBalance</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-let">let</span> balance <span class="token operator">=</span> initialBalance<span class="token punctuation">;</span> <span class="token comment">// 私有变量，外部无法直接访问</span>
  <span class="token keyword control-flow keyword-return">return</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">deposit</span><span class="token operator">:</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">amount</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      balance <span class="token operator">+=</span> amount<span class="token punctuation">;</span>
      <span class="token keyword control-flow keyword-return">return</span> balance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">withdraw</span><span class="token operator">:</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">amount</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>amount <span class="token operator">&lt;=</span> balance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        balance <span class="token operator">-=</span> amount<span class="token punctuation">;</span>
        <span class="token keyword control-flow keyword-return">return</span> balance<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword control-flow keyword-else">else</span> <span class="token punctuation">{</span>
        <span class="token keyword control-flow keyword-return">return</span> <span class="token string">"Insufficient funds"</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">getBalance</span><span class="token operator">:</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword control-flow keyword-return">return</span> balance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-const">const</span> account <span class="token operator">=</span> <span class="token function">createBankAccount</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>account<span class="token punctuation">.</span><span class="token method function property-access">getBalance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 100</span>
account<span class="token punctuation">.</span><span class="token method function property-access">deposit</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>account<span class="token punctuation">.</span><span class="token method function property-access">getBalance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 150</span>
account<span class="token punctuation">.</span><span class="token method function property-access">withdraw</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>account<span class="token punctuation">.</span><span class="token method function property-access">getBalance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 130</span>
</code></pre><ol start="2">
        <li>模块模式</li>
      </ol>
      <p>闭包可以用于模块模式，这是一种软件设计模式，用于进一步封装和组织代码。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-const">const</span> myModule <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-let">let</span> privateVar <span class="token operator">=</span> <span class="token string">"I am private"</span><span class="token punctuation">;</span>

  <span class="token keyword control-flow keyword-return">return</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">publicMethod</span><span class="token operator">:</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>privateVar<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

myModule<span class="token punctuation">.</span><span class="token method function property-access">publicMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 "I am private"</span>
<span class="token comment">// privateVar 在模块外部不可访问</span>
</code></pre><ol start="3">
        <li>函数工厂</li>
      </ol>
      <p>闭包可以用来创建设置特定信息的函数，这些函数可以访问闭包中的变量。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">makeMultiplier</span><span class="token punctuation">(</span><span class="token parameter">multiplier</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-return">return</span> x <span class="token operator">*</span> multiplier<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-const">const</span> double <span class="token operator">=</span> <span class="token function">makeMultiplier</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword keyword-const">const</span> triple <span class="token operator">=</span> <span class="token function">makeMultiplier</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token function">double</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 10</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token function">triple</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 15</span>
</code></pre><ol start="4">
        <li>在异步操作中保持状态</li>
      </ol>
      <p>闭包允许在异步操作（如 setTimeout 或 AJAX 调用）中保持对特定变量的引用。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">asyncGreeting</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Hello, "</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">asyncGreeting</span><span class="token punctuation">(</span><span class="token string">"Alice"</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1秒后输出 "Hello, Alice"</span>
</code></pre><ol start="5">
        <li>循环中创建闭包</li>
      </ol>
      <p>使用闭包解决经典的循环中的变量作用域问题。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword control-flow keyword-for">for</span> <span class="token punctuation">(</span><span class="token keyword keyword-var">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">j</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 每个函数都有对应的 j 值的引用</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> j <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 输出 1 2 3 4 5，每秒一次</span>
</code></pre><ol start="6">
        <li>高阶函数</li>
      </ol>
      <p>闭包允许我们使用高阶函数，即函数可以接受函数作为参数或者返回一个函数。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> test</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-let">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword control-flow keyword-for">for</span> <span class="token punctuation">(</span><span class="token keyword keyword-let">let</span> item <span class="token keyword keyword-of">of</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span><span class="token function">test</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword control-flow keyword-return">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-const">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword keyword-const">const</span> oddNumbers <span class="token operator">=</span> <span class="token function">filter</span><span class="token punctuation">(</span>numbers<span class="token punctuation">,</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>oddNumbers<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 [1, 3, 5]</span>
</code></pre><p>这些例子展示了闭包在各种情况下的应用，从数据隐藏和封装到在异步编程中保持变量的引用。闭包是 JavaScript 中一个强大的特性，能够提供更多的控制和抽象层次。</p>
      <p>当然，闭包的使用场景远不止上述几个。闭包在 JavaScript 中的灵活性使得它可以用在许多其他场合：</p>
      <ol start="7">
        <li>部分应用（Partial Application）</li>
      </ol>
      <p>闭包可以用来实现部分应用，即固定一个函数的一些参数，生成一个新的函数。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token parameter">greeting<span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>greeting <span class="token operator">+</span> <span class="token string">", "</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-function">function</span> <span class="token function">partialApply</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> <span class="token spread operator">...</span>fixedArgs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token spread operator">...</span>remainingArgs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-return">return</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token spread operator">...</span>fixedArgs<span class="token punctuation">,</span> <span class="token spread operator">...</span>remainingArgs<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-const">const</span> sayHelloTo <span class="token operator">=</span> <span class="token function">partialApply</span><span class="token punctuation">(</span>greet<span class="token punctuation">,</span> <span class="token string">"Hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword keyword-const">const</span> sayByeTo <span class="token operator">=</span> <span class="token function">partialApply</span><span class="token punctuation">(</span>greet<span class="token punctuation">,</span> <span class="token string">"Goodbye"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">sayHelloTo</span><span class="token punctuation">(</span><span class="token string">"John"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 "Hello, John"</span>
<span class="token function">sayByeTo</span><span class="token punctuation">(</span><span class="token string">"John"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 "Goodbye, John"</span>
</code></pre><ol start="8">
        <li>记忆化（Memoization）</li>
      </ol>
      <p>闭包可以用来实现记忆化，这是一种优化技术，通过缓存函数的执行结果来提高程序的性能。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">memoize</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-const">const</span> cache <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token spread operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-const">const</span> key <span class="token operator">=</span> <span class="token known-class-name class-name">JSON</span><span class="token punctuation">.</span><span class="token method function property-access">stringify</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> fn<span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword control-flow keyword-return">return</span> cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-const">const</span> factorial <span class="token operator">=</span> <span class="token function">memoize</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-return">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword control-flow keyword-else">else</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-return">return</span> n <span class="token operator">*</span> <span class="token function">factorial</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token function">factorial</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 计算并缓存</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token function">factorial</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 直接从缓存中读取结果</span>
</code></pre><ol start="9">
        <li>迭代器和生成器</li>
      </ol>
      <p>闭包在迭代器和生成器的实现中扮演着关键角色，它们用于控制数据流的迭代过程。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">makeIterator</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-let">let</span> nextIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword control-flow keyword-return">return</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword control-flow keyword-return">return</span> nextIndex <span class="token operator">&lt;</span> array<span class="token punctuation">.</span><span class="token property-access">length</span>
        <span class="token operator">?</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> array<span class="token punctuation">[</span>nextIndex<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
        <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-const">const</span> it <span class="token operator">=</span> <span class="token function">makeIterator</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"yo"</span><span class="token punctuation">,</span> <span class="token string">"ya"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token method function property-access">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token property-access">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 'yo'</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token method function property-access">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token property-access">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 'ya'</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token method function property-access">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token property-access">done</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><ol start="10">
        <li>事件处理器和回调</li>
      </ol>
      <p>闭包经常用于事件处理和回调函数中，以便于访问其他作用域中的变量。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">setupButton</span><span class="token punctuation">(</span><span class="token parameter">buttonId<span class="token punctuation">,</span> onClick</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-const">const</span> button <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">getElementById</span><span class="token punctuation">(</span>buttonId<span class="token punctuation">)</span><span class="token punctuation">;</span>
  button<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这个匿名函数就是一个闭包</span>
    <span class="token function">onClick</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">setupButton</span><span class="token punctuation">(</span><span class="token string">"myButton"</span><span class="token punctuation">,</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Button was clicked!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><ol start="11">
        <li>柯里化（Currying）</li>
      </ol>
      <p>柯里化是将接受多个参数的函数转换成接受一个单一参数的函数的技术，闭包在这个过程中用于保存每次函数调用的参数。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword keyword-function">function</span> <span class="token function">curried</span><span class="token punctuation">(</span><span class="token parameter"><span class="token spread operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>args<span class="token punctuation">.</span><span class="token property-access">length</span> <span class="token operator">&gt;=</span> fn<span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword control-flow keyword-return">return</span> fn<span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword control-flow keyword-else">else</span> <span class="token punctuation">{</span>
      <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token spread operator">...</span>args2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword control-flow keyword-return">return</span> curried<span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">,</span> args<span class="token punctuation">.</span><span class="token method function property-access">concat</span><span class="token punctuation">(</span>args2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-function">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> a <span class="token operator">+</span> b <span class="token operator">+</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-const">const</span> curriedSum <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token function">curriedSum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 6</span>
</code></pre><ol start="12">
        <li>配置对象</li>
      </ol>
      <p>闭包可以用来创建特定的配置对象，这些对象可以在多个函数调用之间共享和修改状态。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">createConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-let">let</span> config <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword control-flow keyword-return">return</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      config<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword control-flow keyword-return">return</span> config<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-const">const</span> myConfig <span class="token operator">=</span> <span class="token function">createConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myConfig<span class="token punctuation">.</span><span class="token method function property-access">set</span><span class="token punctuation">(</span><span class="token string">"language"</span><span class="token punctuation">,</span> <span class="token string">"en"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>myConfig<span class="token punctuation">.</span><span class="token method function property-access">get</span><span class="token punctuation">(</span><span class="token string">"language"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 'en'</span>
</code></pre><p>这些例子进一步展示了闭包的多样性和实用性。无论是函数式编程的概念，如柯里化和部分应用，还是性能优化，如记忆化，闭包都是实现这些概念的基石。此外，闭包在事件处理、迭代器和配置管理等方面也非常有用。正确理解和使用闭包，可以极大地提高 JavaScript 代码的效率和可维护性。</p>
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