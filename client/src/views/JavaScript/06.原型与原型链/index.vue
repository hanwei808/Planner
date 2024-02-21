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
        <el-tab-pane
          label="流程图"
          name="second"
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
        <h1
          id="原型与原型链"
          ebook-toc-level-1=""
          heading="原型与原型链 "
        >
          原型与原型链
        </h1>
        <p>JavaScript 中的原型（Prototype）和原型链（Prototype Chain）是实现基于原型继承的一种机制。</p>
        <h2
          id="原型prototype"
          ebook-toc-level-2=""
          heading="原型（Prototype） "
        >
          原型（Prototype）
        </h2>
        <p>每个 JavaScript 对象在创建时都会与另一个对象关联起来，后者就称为其“原型”。每个对象都会从其原型继承属性和方法。在 JavaScript 中，函数也是对象，因此每个函数都会有一个特殊的属性 <code>prototype</code>。</p>
        <p>当你创建一个函数时，JavaScript 会为这个函数自动添加 <code>prototype</code> 属性，其值是一个有 <code>constructor</code> 属性的对象，这个 <code>constructor</code> 属性指回函数本身。当你通过这个构造函数创建一个新对象时（使用 <code>new</code> 关键字），这个新对象的内部原型（在 ECMAScript 5+ 中可以通过 <code>Object.getPrototypeOf(obj)</code> 获取，在旧的浏览器中通常通过 <code>__proto__</code> 属性访问）会被设置为构造函数的 <code>prototype</code> 属性。</p>
        <p>例如：</p>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Person</span></span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">sayHello</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Hello, my name is "</span> <span class="token operator">+</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-var">var</span> alice <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"Alice"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
alice<span class="token punctuation">.</span><span class="token method function property-access">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Hello, my name is Alice</span>
</code></pre><p>在这个例子中，<code>alice</code> 对象的内部原型就是 <code>Person.prototype</code>，所以 <code>alice</code> 可以访问 <code>sayHello</code> 方法。</p>
        <ol>
          <li>
            <p><strong>每个函数都有一个原型对象</strong>：当你创建一个函数时，JavaScript 引擎会给这个函数添加一个 <code>prototype</code> 属性，它指向一个对象。</p>
          </li>
          <li>
            <p><strong>构造函数的原型</strong>：通过构造函数创建的对象会继承构造函数原型上的属性和方法。这个继承是通过设置对象的内部 <code>[[Prototype]]</code> 属性（通常被称为 <code>__proto__</code>）来实现的。</p>
          </li>
          <li>
            <p><strong>原型是共享的</strong>：所有通过同一构造函数创建的对象都会共享同一个原型对象，这意味着对原型对象的修改会影响所有继承自该原型的对象。</p>
          </li>
          <li>
            <p><strong><code>constructor</code> 属性</strong>：原型对象默认有一个 <code>constructor</code> 属性，指向与之关联的构造函数。</p>
          </li>
          <li>
            <p><strong>直接量的原型</strong>：字符串、数字、布尔值等基本类型的直接量也有原型，它们的原型分别是 <code>String.prototype</code>、<code>Number.prototype</code> 和 <code>Boolean.prototype</code> 等。这就是基本类型可以调用方法（如 <code>"hello".toUpperCase()</code>）的原因。</p>
          </li>
        </ol>
        <h2
          id="原型链__proto__"
          ebook-toc-level-2=""
          heading="原型链（<code>__proto__</code>） "
        >
          原型链（<code>__proto__</code>）
        </h2>
        <p>原型链是 JavaScript 实现继承的主要方法。当你尝试访问一个对象的属性或方法时，如果这个对象本身没有这个属性或方法，JavaScript 解释器就会去该对象的原型上查找。如果原型上也没有，那么就会去原型的原型上查找，如此类推，直到找到属性或方法或者到达原型链的末端（<code>Object.prototype</code> 的原型是 <code>null</code>）。</p>
        <p>这种链式的结构就允许对象继承另一个对象的属性和方法。这也意味着在 JavaScript 中，几乎所有对象最终都会继承自 <code>Object.prototype</code>，除非显式地改变对象的原型链。</p>
        <p>下面是一个更深层次的原型链的例子：</p>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token comment">// 构造函数</span>
<span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Animal</span></span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Animal</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">eat</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">+</span> <span class="token string">" eats."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Dog</span></span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token maybe-class-name">Animal</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 设置 Dog 的原型为 Animal 的实例</span>
<span class="token class-name">Dog</span><span class="token punctuation">.</span><span class="token property-access">prototype</span> <span class="token operator">=</span> <span class="token known-class-name class-name">Object</span><span class="token punctuation">.</span><span class="token method function property-access">create</span><span class="token punctuation">(</span><span class="token class-name">Animal</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Dog</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token property-access">constructor</span> <span class="token operator">=</span> <span class="token maybe-class-name">Dog</span><span class="token punctuation">;</span>

<span class="token comment">// 扩展 Dog 的原型</span>
<span class="token class-name">Dog</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">bark</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">+</span> <span class="token string">" barks."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-var">var</span> buddy <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">"Buddy"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
buddy<span class="token punctuation">.</span><span class="token method function property-access">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Buddy eats.</span>
buddy<span class="token punctuation">.</span><span class="token method function property-access">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Buddy barks.</span>
</code></pre><p>在这个例子中：</p>
        <ul>
          <li><code>buddy</code> 的内部原型是 <code>Dog.prototype</code>。</li>
          <li><code>Dog.prototype</code> 的内部原型是 <code>Animal.prototype</code>。</li>
          <li>如果 <code>buddy</code> 调用 <code>eat</code> 方法，解释器会首先在 <code>buddy</code> 中查找，然后是 <code>Dog.prototype</code>，最后是 <code>Animal.prototype</code>，在这里找到 <code>eat</code> 方法。</li>
        </ul>
        <p>通过这种方式，JavaScript 中的对象可以继承其他对象的属性和方法，形成一个“原型链”。</p>
        <ol>
          <li>
            <p><strong>原型链的工作原理</strong>：当你尝试访问一个对象的属性或方法时，如果该对象本身没有这个属性或方法，JavaScript 会沿着原型链向上查找，直到找到为止或者到达原型链的末端。</p>
          </li>
          <li>
            <p><strong>原型链的终点</strong>：所有对象的原型链最终都会指向 <code>Object.prototype</code>，它是原型链的终点。<code>Object.prototype</code> 的原型是 <code>null</code>。</p>
          </li>
          <li>
            <p><strong>原型链的影响</strong>：原型链影响了属性查找（尤其是方法查找），但不影响属性的设置。如果设置一个对象的属性，这个操作总是在该对象上进行，而不是在其原型上。</p>
          </li>
          <li>
            <p><strong>性能考量</strong>：在原型链上查找属性或方法比在对象本身查找要慢，因为需要遍历链上的多个对象。</p>
          </li>
          <li>
            <p><strong>原型链和继承</strong>：在 JavaScript 中，继承通常是通过设置一个类型的原型为另一个类型的实例来实现的，这样就创建了一个原型链。</p>
          </li>
          <li>
            <p><strong>原型链的动态性</strong>：因为原型是动态的，如果一个对象通过其原型链继承了一个属性，那么即使在继承之后原型上的属性发生变化，对象也会反映这些变化。</p>
          </li>
          <li>
            <p><strong>构造函数的原型链</strong>：构造函数也是对象，因此它们同样有自己的原型链。例如，所有的函数对象都是通过 <code>Function.prototype</code> 来继承方法的，如 <code>apply</code>、<code>call</code> 和 <code>bind</code>。</p>
          </li>
          <li>
            <p><strong><code>instanceof</code> 操作符</strong>：<code>instanceof</code> 操作符可以用来检测一个对象是否是一个构造函数的实例，其内部机制是通过检查对象的原型链是否包含构造函数的 <code>prototype</code> 对象。</p>
          </li>
          <li>
            <p><strong><code>isPrototypeOf</code> 方法</strong>：每个对象都有一个 <code>isPrototypeOf</code> 方法，可以用来检查一个对象是否存在于另一个对象的原型链上。</p>
          </li>
          <li>
            <p><strong>修改原型链</strong>：可以使用 <code>Object.create</code>、<code>Object.setPrototypeOf</code> 或直接操作 <code>__proto__</code>（不推荐，因为这不是标准的方法）来修改对象的原型链。</p>
          </li>
        </ol>
        <h2
          id="使用场景"
          ebook-toc-level-2=""
          heading="使用场景 "
        >
          使用场景
        </h2>
        <p>原型和原型链在 JavaScript 编程中有广泛的应用场景。以下是一些使用原型和原型链的场景和示例：</p>
        <ol>
          <li>添加方法和属性</li>
        </ol>
        <p>原型常用于向构造函数添加方法和属性，这样所有实例都可以共享这些方法和属性，而不必在每个实例中重新创建。</p>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Person</span></span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 添加方法到 Person 的原型</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">greet</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-const">const</span> alice <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"Alice"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword keyword-const">const</span> bob <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"Bob"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

alice<span class="token punctuation">.</span><span class="token method function property-access">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Hello, my name is Alice</span>
bob<span class="token punctuation">.</span><span class="token method function property-access">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Hello, my name is Bob</span>
</code></pre><ol start="2">
          <li>实现继承</li>
        </ol>
        <p>通过原型链可以实现对象之间的继承。子构造函数的原型被设置为父构造函数的实例，从而实现继承。</p>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Animal</span></span><span class="token punctuation">(</span><span class="token parameter">legs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">legs</span> <span class="token operator">=</span> legs<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Animal</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">walk</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Walking on </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">legs</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> legs</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Bird</span></span><span class="token punctuation">(</span><span class="token parameter">legs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token maybe-class-name">Animal</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">,</span> legs<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 继承 Animal</span>
<span class="token class-name">Bird</span><span class="token punctuation">.</span><span class="token property-access">prototype</span> <span class="token operator">=</span> <span class="token known-class-name class-name">Object</span><span class="token punctuation">.</span><span class="token method function property-access">create</span><span class="token punctuation">(</span><span class="token class-name">Animal</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Bird</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token property-access">constructor</span> <span class="token operator">=</span> <span class="token maybe-class-name">Bird</span><span class="token punctuation">;</span>

<span class="token comment">// 添加或覆盖方法</span>
<span class="token class-name">Bird</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">fly</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Flying"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-const">const</span> sparrow <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Bird</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

sparrow<span class="token punctuation">.</span><span class="token method function property-access">walk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Walking on 2 legs</span>
sparrow<span class="token punctuation">.</span><span class="token method function property-access">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Flying</span>
</code></pre><ol start="3">
          <li>多态</li>
        </ol>
        <p>通过原型链，可以实现多态，即子类可以重写继承自父类的方法。</p>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Shape</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token class-name">Shape</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">draw</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> <span class="token string">"I am just a generic shape"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Circle</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token class-name">Circle</span><span class="token punctuation">.</span><span class="token property-access">prototype</span> <span class="token operator">=</span> <span class="token known-class-name class-name">Object</span><span class="token punctuation">.</span><span class="token method function property-access">create</span><span class="token punctuation">(</span><span class="token class-name">Shape</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Circle</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token property-access">constructor</span> <span class="token operator">=</span> <span class="token maybe-class-name">Circle</span><span class="token punctuation">;</span>

<span class="token class-name">Circle</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">draw</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> <span class="token string">"I am a circle"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-const">const</span> shape <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Shape</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword keyword-const">const</span> circle <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>shape<span class="token punctuation">.</span><span class="token method function property-access">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: I am just a generic shape</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>circle<span class="token punctuation">.</span><span class="token method function property-access">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: I am a circle</span>
</code></pre><ol start="4">
          <li>代码复用</li>
        </ol>
        <p>原型可以用于代码复用，通过在原型上定义方法，多个实例可以重用同一套方法逻辑。</p>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Formatter</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token class-name">Formatter</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">capitalize</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> str<span class="token punctuation">.</span><span class="token method function property-access">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> str<span class="token punctuation">.</span><span class="token method function property-access">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-const">const</span> formatter <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Formatter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>formatter<span class="token punctuation">.</span><span class="token method function property-access">capitalize</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Hello</span>
</code></pre><ol start="5">
          <li>扩展内置对象</li>
        </ol>
        <p>有时候，你可能需要扩展内置对象如 <code>Array</code> 或 <code>String</code>，以添加新的方法。</p>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token comment">// 扩展 String 原型以添加一个新方法</span>
<span class="token class-name">String</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">reverse</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token method function property-access">split</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">join</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">.</span><span class="token method function property-access">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: olleh</span>
</code></pre><p>当然，这里有更多的场景和示例，展示了原型和原型链的使用：</p>
        <ol start="6">
          <li>封装和模块化</li>
        </ol>
        <p>原型可以用于封装功能和行为，有助于模块化代码。这允许开发者将相关的功能组合在一起，易于维护和重用。</p>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">TabManager</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token class-name">TabManager</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">openTab</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Tab opened"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">TabManager</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">closeTab</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Tab closed"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-const">const</span> manager <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">TabManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
manager<span class="token punctuation">.</span><span class="token method function property-access">openTab</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
manager<span class="token punctuation">.</span><span class="token method function property-access">closeTab</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><ol start="7">
          <li>动态语言特性</li>
        </ol>
        <p>原型允许动态地修改和扩展对象，这在脚本语言中非常有用，因为它允许在运行时根据需要改变对象的行为。</p>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">User</span></span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-const">const</span> user <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">"Alice"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 动态添加方法到 User 的实例</span>
user<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">sayName</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

user<span class="token punctuation">.</span><span class="token method function property-access">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Alice</span>

<span class="token comment">// 甚至可以动态地修改原型</span>
<span class="token class-name">User</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">sayGoodbye</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Goodbye"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

user<span class="token punctuation">.</span><span class="token method function property-access">sayGoodbye</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Goodbye</span>
</code></pre><ol start="8">
          <li>封装私有属性和方法</li>
        </ol>
        <p>虽然 JavaScript 没有正式的私有属性或私有方法的概念，但可以利用闭包和原型来模拟。</p>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Counter</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 私有变量</span>
  <span class="token keyword keyword-let">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token comment">// 公开方法</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">increment</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">decrement</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    count<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-const">const</span> counter <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
counter<span class="token punctuation">.</span><span class="token method function property-access">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 1</span>
counter<span class="token punctuation">.</span><span class="token method function property-access">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 0</span>
</code></pre><p>在这个例子中，<code>count</code> 变量对外部代码是不可访问的，只能通过 <code>Counter</code> 提供的方法来修改。</p>
        <ol start="9">
          <li>链式调用</li>
        </ol>
        <p>原型也可以用来实现链式调用，这是一种流畅的接口风格，常见于许多 JavaScript 库。</p>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Query</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">elements</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Query</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">addClass</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">className</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">elements</span><span class="token punctuation">.</span><span class="token method function property-access">forEach</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    el<span class="token punctuation">.</span><span class="token property-access">classList</span><span class="token punctuation">.</span><span class="token method function property-access">add</span><span class="token punctuation">(</span>className<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">;</span> <span class="token comment">// 返回 this 以便链式调用</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Query</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">find</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">selector</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">elements</span> <span class="token operator">=</span> <span class="token dom variable">document</span><span class="token punctuation">.</span><span class="token method function property-access">querySelectorAll</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">;</span> <span class="token comment">// 返回 this 以便链式调用</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 链式调用</span>
<span class="token keyword keyword-const">const</span> query <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
query<span class="token punctuation">.</span><span class="token method function property-access">find</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">addClass</span><span class="token punctuation">(</span><span class="token string">"highlight"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><ol start="10">
          <li>原型链查找性能优化</li>
        </ol>
        <p>在设计大型应用时，了解原型链查找的性能影响是很重要的。如果在原型链上有很多层级，查找一个不存在的属性可能会导致性能问题。</p>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token keyword keyword-function">function</span> <span class="token function">findInPrototype</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> prop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-let">let</span> startTime <span class="token operator">=</span> <span class="token dom variable">performance</span><span class="token punctuation">.</span><span class="token method function property-access">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword keyword-let">let</span> result <span class="token operator">=</span> prop <span class="token keyword keyword-in">in</span> obj<span class="token punctuation">;</span>
  <span class="token keyword keyword-let">let</span> endTime <span class="token operator">=</span> <span class="token dom variable">performance</span><span class="token punctuation">.</span><span class="token method function property-access">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">查找 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>prop<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>endTime <span class="token operator">-</span> startTime<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 毫秒</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword control-flow keyword-return">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 假设有一个很深的原型链</span>
<span class="token function">findInPrototype</span><span class="token punctuation">(</span>deeplyNestedObject<span class="token punctuation">,</span> <span class="token string">"nonExistentProperty"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>在这个例子中，<code>findInPrototype</code> 函数衡量了在一个具有深层原型链的对象上查找不存在的属性所需的时间。</p>
        <h2
          id="注意事项"
          ebook-toc-level-2=""
          heading="注意事项 "
        >
          注意事项
        </h2>
        <p>在扩展内置对象时应当非常小心，因为这可能会导致与现有或未来的方法冲突，或者影响其他依赖这些内置对象的代码。通常来说，除非有充分的理由，否则不推荐修改内置对象的原型。</p>
        <p>原型和原型链的使用是 JavaScript 中面向对象编程的基础，它们提供了一种强大且灵活的方式来组织和复用代码。</p>
      </div>
      <div v-show="activeName === 'second'">
        <inline-svg :src="svg" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue';
import mdSidebar from '@/components/mdSidebar.vue';
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

import svg from './index.drawio.svg'

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
@import url(@/styles/base.scss);
</style>