<template>
  <div
    class="article-container"
    :class="{'md-sidebar-expand': !$store.state.isMdCollapse}"
  >
    <div class="crossnote markdown-preview">
      <h1 id="继承与扩展">
        继承与扩展
      </h1>
      <h2 id="是什么">
        是什么
      </h2>
      <p>JavaScript 中的继承是一种允许一个对象获取另一个对象的属性和方法的机制。这是实现代码重用和创建基于现有对象的新对象的一种方式。在 ES5 及之前的版本中，继承通常是通过原型链实现的，而在 ES6 中，引入了 class 关键字，让基于类的继承看起来更像是传统面向对象编程语言中的继承。</p>
      <h3 id="原型链继承es5-及之前">
        原型链继承（ES5 及之前）
      </h3>
      <p>在 ES5 及之前的版本中，所有的 JavaScript 对象都有一个内置的属性，叫做原型（prototype）。每个函数都有一个 prototype 属性，这个属性是一个指向对象的指针，而这个对象包含可以由特定类型的所有实例共享的属性和方法。当试图访问一个对象的属性或方法时，如果这个对象本身没有这个属性或方法，解释器就会去其原型对象上查找，如果原型对象上也没有，就会继续查找原型对象的原型，依此类推，形成了所谓的“原型链”。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Parent</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">parentAttribute</span> <span class="token operator">=</span> <span class="token string">"I am the parent"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Parent</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">parentMethod</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> <span class="token string">"This method is on the parent!"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Child</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token maybe-class-name">Parent</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 继承属性</span>
<span class="token punctuation">}</span>

<span class="token class-name">Child</span><span class="token punctuation">.</span><span class="token property-access">prototype</span> <span class="token operator">=</span> <span class="token known-class-name class-name">Object</span><span class="token punctuation">.</span><span class="token method function property-access">create</span><span class="token punctuation">(</span><span class="token class-name">Parent</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 继承方法</span>
<span class="token class-name">Child</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token property-access">constructor</span> <span class="token operator">=</span> <span class="token maybe-class-name">Child</span><span class="token punctuation">;</span> <span class="token comment">// 修复构造函数指向</span>

<span class="token keyword keyword-var">var</span> childInstance <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>childInstance<span class="token punctuation">.</span><span class="token property-access">parentAttribute</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: I am the parent</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>childInstance<span class="token punctuation">.</span><span class="token method function property-access">parentMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: This method is on the parent!</span>
</code></pre><h3 id="类继承es6">
        类继承（ES6+）
      </h3>
      <p>ES6 引入了 class 语法，使得基于类的继承更加直观和易于理解。尽管在底层，JavaScript 仍然使用原型链来实现继承，但新的语法提供了一种更清晰、更传统的方式来创建和继承对象。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-class">class</span> <span class="token class-name">Parent</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">parentAttribute</span> <span class="token operator">=</span> <span class="token string">"I am the parent"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">parentMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-return">return</span> <span class="token string">"This method is on the parent!"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-class">class</span> <span class="token class-name">Child</span> <span class="token keyword keyword-extends">extends</span> <span class="token class-name">Parent</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-super">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用父类的 constructor</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-let">let</span> childInstance <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>childInstance<span class="token punctuation">.</span><span class="token property-access">parentAttribute</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: I am the parent</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>childInstance<span class="token punctuation">.</span><span class="token method function property-access">parentMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: This method is on the parent!</span>
</code></pre><p>在 ES6+ 的类继承中，关键字 <code>extends</code> 用于创建一个子类，<code>super()</code> 被用来调用父类的构造函数。</p>
      <p>继承是面向对象编程的一个核心概念，它在 JavaScript 中同样是一个重要的概念，无论是采用原型链还是类继承的方式。</p>
      <h2 id="知识点">
        知识点
      </h2>
      <p>JavaScript 中继承的知识点可以从多个角度来理解，包括原型链继承的基本概念、ES6 类继承的语法，以及与继承相关的高级概念和模式。下面是一些关键的知识点：</p>
      <h3 id="原型链">
        原型链
      </h3>
      <ol>
        <li>
          <p><strong>原型对象（Prototype）</strong>：</p>
          <ul>
            <li>每个 JavaScript 对象都有一个原型对象，从中继承方法和属性。</li>
            <li>函数的 <code>prototype</code> 属性是一个对象，通过 <code>new</code> 调用函数时，新对象会继承这个 <code>prototype</code> 对象上的属性。</li>
          </ul>
        </li>
        <li>
          <p><strong>原型链（Prototype Chain）</strong>：</p>
          <ul>
            <li>查找属性时，如果对象本身没有这个属性，JavaScript 引擎会沿着原型链向上查找。</li>
            <li>原型链的末端通常是 <code>Object.prototype</code>，所有对象默认继承自 <code>Object.prototype</code>。</li>
          </ul>
        </li>
        <li>
          <p><strong>构造函数（Constructor）</strong>：</p>
          <ul>
            <li>用来创建对象的特殊函数。</li>
            <li>通过 <code>new</code> 关键字调用时，构造函数内的 <code>this</code> 关键字会指向新创建的对象。</li>
          </ul>
        </li>
      </ol>
      <h3 id="es6-类继承">
        ES6 类继承
      </h3>
      <ol>
        <li>
          <p><strong>类定义（Class Definition）</strong>：</p>
          <ul>
            <li><code>class</code> 关键字用来定义一个类。</li>
            <li>类中的 <code>constructor</code> 方法是创建和初始化类创建的对象的特殊方法。</li>
          </ul>
        </li>
        <li>
          <p><strong>继承和扩展（Extends and Super）</strong>：</p>
          <ul>
            <li><code>extends</code> 关键字用于在类声明或类表达式中创建一个类作为另一个类的子类。</li>
            <li><code>super</code> 关键字用于访问和调用一个对象的父对象上的函数。</li>
          </ul>
        </li>
        <li>
          <p><strong>静态方法和属性（Static Methods and Properties）</strong>：</p>
          <ul>
            <li><code>static</code> 关键字用于定义类的静态方法。</li>
            <li>静态方法通常用于实现不特定于实例的功能。</li>
            <li>静态属性（ES2022 引入）是直接绑定到类构造函数的属性，而不是绑定到原型对象。</li>
          </ul>
        </li>
      </ol>
      <h3 id="高级概念和模式">
        高级概念和模式
      </h3>
      <ol>
        <li>
          <p><strong>原型继承模式</strong>：</p>
          <ul>
            <li>使用 <code>Object.create()</code> 创建一个新对象，使用现有的对象来提供新创建的对象的 <code>__proto__</code>。</li>
            <li>可以创建一个纯粹的继承链，没有构造函数的复杂性。</li>
          </ul>
        </li>
        <li>
          <p><strong>组合继承</strong>：</p>
          <ul>
            <li>结合了原型链继承和构造函数继承。</li>
            <li>属性通常在构造函数中定义，方法则继承自原型链。</li>
          </ul>
        </li>
        <li>
          <p><strong>寄生组合继承</strong>：</p>
          <ul>
            <li>优化了组合继承，解决了两次调用父类构造函数的问题（一次在创建子类原型时，一次在子类构造函数中）。</li>
          </ul>
        </li>
        <li>
          <p><strong>类的多态性</strong>：</p>
          <ul>
            <li>子类可以重写继承自父类的方法，这是多态的一种表现。</li>
            <li>通过 <code>super</code> 关键字可以调用父类被重写的方法。</li>
          </ul>
        </li>
        <li>
          <p><strong>封装和私有属性</strong>：</p>
          <ul>
            <li>类可以使用封装来限制对其内部属性和方法的直接访问。</li>
            <li>ES2022 引入的私有字段（使用 <code>#</code> 前缀）和私有方法提供了更好的封装。</li>
          </ul>
        </li>
        <li>
          <p><strong>Mixin</strong>：</p>
          <ul>
            <li>一种向类添加多个行为的模式，而不是通过传统的继承链。</li>
            <li>可以通过将方法添加到类的原型，或者通过类表达式创建混入。</li>
          </ul>
        </li>
      </ol>
      <p>理解和掌握这些知识点对于成为一个熟练的 JavaScript 开发者至关重要。它们不仅涉及到基本的语法和概念，还包括了更深层次的设计模式和最佳实践。</p>
      <h2 id="继承方式">
        继承方式
      </h2>
      <p>JavaScript 中实现继承的方式有多种，以下是一些常见的继承方式及示例：</p>
      <ol>
        <li>原型链继承</li>
      </ol>
      <p>使用原型链实现继承，子类型的原型是父类型的一个实例。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Parent</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">parentProperty</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Parent</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">getParentProperty</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">parentProperty</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Child</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">childProperty</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 继承父类型</span>
<span class="token class-name">Child</span><span class="token punctuation">.</span><span class="token property-access">prototype</span> <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword keyword-var">var</span> child <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child<span class="token punctuation">.</span><span class="token method function property-access">getParentProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><ol start="2">
        <li>构造函数继承</li>
      </ol>
      <p>通过在子类型构造函数的内部调用父类型构造函数实现继承，可以传递参数。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Parent</span></span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Child</span></span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token maybe-class-name">Parent</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-var">var</span> child <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">"Child Name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child<span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Child Name</span>
</code></pre><ol start="3">
        <li>组合继承</li>
      </ol>
      <p>结合原型链继承和构造函数继承，即在原型上定义方法实现重用，在构造函数中定义属性。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Parent</span></span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">colors</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token string">"blue"</span><span class="token punctuation">,</span> <span class="token string">"green"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Parent</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">sayName</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Child</span></span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token maybe-class-name">Parent</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 继承属性</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">age</span> <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Child</span><span class="token punctuation">.</span><span class="token property-access">prototype</span> <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 继承方法</span>
<span class="token class-name">Child</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token property-access">constructor</span> <span class="token operator">=</span> <span class="token maybe-class-name">Child</span><span class="token punctuation">;</span> <span class="token comment">// 修正 constructor 指向</span>

<span class="token class-name">Child</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">sayAge</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">age</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-var">var</span> child <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">"Child Name"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
child<span class="token punctuation">.</span><span class="token method function property-access">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Child Name</span>
child<span class="token punctuation">.</span><span class="token method function property-access">sayAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 18</span>
</code></pre><ol start="4">
        <li>原型式继承</li>
      </ol>
      <p>利用 <code>Object.create</code> 创建一个新对象，以一个现有对象作为新创建对象的原型。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-var">var</span> parent <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Parent Name"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">colors</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token string">"blue"</span><span class="token punctuation">,</span> <span class="token string">"green"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-var">var</span> child <span class="token operator">=</span> <span class="token known-class-name class-name">Object</span><span class="token punctuation">.</span><span class="token method function property-access">create</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span><span class="token punctuation">;</span>
child<span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> <span class="token string">"Child Name"</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>child<span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Child Name</span>
</code></pre><ol start="5">
        <li>寄生式继承</li>
      </ol>
      <p>创建一个仅用于封装继承过程的函数，该函数在内部以某种方式增强对象，最后返回对象。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">createAnother</span><span class="token punctuation">(</span><span class="token parameter">original</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-var">var</span> clone <span class="token operator">=</span> <span class="token known-class-name class-name">Object</span><span class="token punctuation">.</span><span class="token method function property-access">create</span><span class="token punctuation">(</span>original<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 通过调用函数创建一个新对象</span>
  clone<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">sayHi</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 以某种方式增强这个对象</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"hi"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword control-flow keyword-return">return</span> clone<span class="token punctuation">;</span> <span class="token comment">// 返回这个对象</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-var">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Person Name"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">friends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"Shelby"</span><span class="token punctuation">,</span> <span class="token string">"Court"</span><span class="token punctuation">,</span> <span class="token string">"Van"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-var">var</span> anotherPerson <span class="token operator">=</span> <span class="token function">createAnother</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
anotherPerson<span class="token punctuation">.</span><span class="token method function property-access">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// hi</span>
</code></pre><ol start="6">
        <li>寄生组合式继承</li>
      </ol>
      <p>通过借用构造函数来继承属性，通过原型链的混成形式来继承方法。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">inheritPrototype</span><span class="token punctuation">(</span><span class="token parameter">childObj<span class="token punctuation">,</span> parentObj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-var">var</span> prototype <span class="token operator">=</span> <span class="token known-class-name class-name">Object</span><span class="token punctuation">.</span><span class="token method function property-access">create</span><span class="token punctuation">(</span>parentObj<span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建对象</span>
  prototype<span class="token punctuation">.</span><span class="token property-access">constructor</span> <span class="token operator">=</span> childObj<span class="token punctuation">;</span> <span class="token comment">// 增强对象</span>
  childObj<span class="token punctuation">.</span><span class="token property-access">prototype</span> <span class="token operator">=</span> prototype<span class="token punctuation">;</span> <span class="token comment">// 指定对象</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Parent</span></span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">colors</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token string">"blue"</span><span class="token punctuation">,</span> <span class="token string">"green"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Parent</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">sayName</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Child</span></span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token maybe-class-name">Parent</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 继承属性</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">age</span> <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">inheritPrototype</span><span class="token punctuation">(</span><span class="token maybe-class-name">Child</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Parent</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Child</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">sayAge</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">age</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-var">var</span> child <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">"Child Name"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
child<span class="token punctuation">.</span><span class="token method function property-access">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Child Name</span>
child<span class="token punctuation">.</span><span class="token method function property-access">sayAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 18</span>
</code></pre><ol start="7">
        <li>ES6 类继承</li>
      </ol>
      <p>使用 <code>class</code> 和 <code>extends</code> 关键字实现继承。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-class">class</span> <span class="token class-name">Parent</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-class">class</span> <span class="token class-name">Child</span> <span class="token keyword keyword-extends">extends</span> <span class="token class-name">Parent</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-super">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用父类的 constructor(name)</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">age</span> <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">sayAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">age</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-const">const</span> child <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">"Child Name"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
child<span class="token punctuation">.</span><span class="token method function property-access">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Child Name</span>
child<span class="token punctuation">.</span><span class="token method function property-access">sayAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 18</span>
</code></pre><p>这些是实现继承的一些基本方式，每种方式都有其用途和适用场景。在实际开发中，根据具体需求选择合适的继承方式是非常重要的。</p>
      <h2 id="使用场景">
        使用场景
      </h2>
      <p>继承是面向对象编程中的一个核心概念，它允许一个类（称为子类或派生类）继承另一个类（称为父类或基类）的属性和方法。JavaScript 中的继承主要用于以下场景：</p>
      <ol>
        <li>代码重用</li>
      </ol>
      <p>当多个类共享相同的属性或方法时，可以将这些共通的部分提取到一个父类中，然后通过继承来重用这些代码。</p>
      <p><strong>示例</strong>：定义一个 <code>Vehicle</code> 类作为所有交通工具的基类，然后通过继承来创建 <code>Car</code> 和 <code>Bike</code> 类。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-class">class</span> <span class="token class-name">Vehicle</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">brand</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">brand</span> <span class="token operator">=</span> brand<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Starting the vehicle..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-class">class</span> <span class="token class-name">Car</span> <span class="token keyword keyword-extends">extends</span> <span class="token class-name">Vehicle</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">brand<span class="token punctuation">,</span> model</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-super">super</span><span class="token punctuation">(</span>brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">model</span> <span class="token operator">=</span> model<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Car: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">brand</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string" /><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">model</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-class">class</span> <span class="token class-name">Bike</span> <span class="token keyword keyword-extends">extends</span> <span class="token class-name">Vehicle</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">brand<span class="token punctuation">,</span> type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-super">super</span><span class="token punctuation">(</span>brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">type</span> <span class="token operator">=</span> type<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Bike: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">brand</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string" /><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">type</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-let">let</span> myCar <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token string">"Toyota"</span><span class="token punctuation">,</span> <span class="token string">"Corolla"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myCar<span class="token punctuation">.</span><span class="token method function property-access">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Starting the vehicle...</span>
myCar<span class="token punctuation">.</span><span class="token method function property-access">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Car: Toyota Corolla</span>

<span class="token keyword keyword-let">let</span> myBike <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Bike</span><span class="token punctuation">(</span><span class="token string">"Trek"</span><span class="token punctuation">,</span> <span class="token string">"Mountain Bike"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myBike<span class="token punctuation">.</span><span class="token method function property-access">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Starting the vehicle...</span>
myBike<span class="token punctuation">.</span><span class="token method function property-access">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Bike: Trek Mountain Bike</span>
</code></pre><ol start="2">
        <li>多态性</li>
      </ol>
      <p>继承允许子类重写父类的方法，这意味着同一个方法可以根据对象的不同而表现出不同的行为。</p>
      <p><strong>示例</strong>：<code>Animal</code> 类有一个 <code>speak</code> 方法，不同的动物类（如 <code>Dog</code> 和 <code>Cat</code>）继承 <code>Animal</code> 类并重写 <code>speak</code> 方法。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-class">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"The animal makes a sound."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-class">class</span> <span class="token class-name">Dog</span> <span class="token keyword keyword-extends">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"The dog barks."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-class">class</span> <span class="token class-name">Cat</span> <span class="token keyword keyword-extends">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"The cat meows."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-let">let</span> dog <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dog<span class="token punctuation">.</span><span class="token method function property-access">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// The dog barks.</span>

<span class="token keyword keyword-let">let</span> cat <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
cat<span class="token punctuation">.</span><span class="token method function property-access">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// The cat meows.</span>
</code></pre><ol start="3">
        <li>抽象和封装</li>
      </ol>
      <p>通过继承，可以创建抽象的基类，它定义了子类必须实现的方法。这有助于封装复杂性，并且只公开必要的接口。</p>
      <p><strong>示例</strong>：<code>Shape</code> 类定义了一个抽象方法 <code>draw</code>，它必须在派生类中实现。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-class">class</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
  <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-throw">throw</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"This method should be implemented by subclasses."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-class">class</span> <span class="token class-name">Circle</span> <span class="token keyword keyword-extends">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
  <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Drawing a circle..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-class">class</span> <span class="token class-name">Square</span> <span class="token keyword keyword-extends">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
  <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Drawing a square..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-let">let</span> circle <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
circle<span class="token punctuation">.</span><span class="token method function property-access">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Drawing a circle...</span>

<span class="token keyword keyword-let">let</span> square <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Square</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
square<span class="token punctuation">.</span><span class="token method function property-access">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Drawing a square...</span>
</code></pre><ol start="4">
        <li>创建框架或库时的扩展性</li>
      </ol>
      <p>当创建一个框架或库时，可以通过继承提供一个基本的实现，允许用户扩展和定制功能。</p>
      <p><strong>示例</strong>：一个简单的 UI 组件库，允许用户通过继承基本组件来创建自定义组件。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-class">class</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">id</span> <span class="token operator">=</span> id<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Rendering component with id: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">id</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-class">class</span> <span class="token class-name">Button</span> <span class="token keyword keyword-extends">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">id<span class="token punctuation">,</span> label</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-super">super</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">label</span> <span class="token operator">=</span> label<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-super">super</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Rendering a button with label: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">label</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-let">let</span> button <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string">"btn-1"</span><span class="token punctuation">,</span> <span class="token string">"Submit"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
button<span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Rendering component with id: btn-1</span>
<span class="token comment">// Rendering a button with label: Submit</span>
</code></pre><p>继承在 JavaScript 中的这些使用场景展示了它如何帮助组织和结构化代码，同时提高了代码的可维护性和可扩展性。</p>
      <p>当然，除了上述场景外，继承还有其他的使用场景，如：</p>
      <ol start="5">
        <li>处理类似对象的集合</li>
      </ol>
      <p>当需要对一组具有共同属性和方法的对象进行操作时，继承可以确保所有对象都遵循相同的接口。</p>
      <p><strong>示例</strong>：假设你有一个游戏，其中有多种类型的游戏角色，每个角色都有共同的属性和方法。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-class">class</span> <span class="token class-name">GameCharacter</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> health</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">health</span> <span class="token operator">=</span> health<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">attack</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> attacks </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>target<span class="token punctuation">.</span><span class="token property-access">name</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-class">class</span> <span class="token class-name">Knight</span> <span class="token keyword keyword-extends">extends</span> <span class="token class-name">GameCharacter</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> health<span class="token punctuation">,</span> armor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-super">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> health<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">armor</span> <span class="token operator">=</span> armor<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-class">class</span> <span class="token class-name">Archer</span> <span class="token keyword keyword-extends">extends</span> <span class="token class-name">GameCharacter</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> health<span class="token punctuation">,</span> range</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-super">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> health<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">range</span> <span class="token operator">=</span> range<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-let">let</span> knight <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Knight</span><span class="token punctuation">(</span><span class="token string">"Arthur"</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword keyword-let">let</span> archer <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Archer</span><span class="token punctuation">(</span><span class="token string">"Robin"</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

knight<span class="token punctuation">.</span><span class="token method function property-access">attack</span><span class="token punctuation">(</span>archer<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Arthur attacks Robin!</span>
archer<span class="token punctuation">.</span><span class="token method function property-access">attack</span><span class="token punctuation">(</span>knight<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Robin attacks Arthur!</span>
</code></pre><ol start="6">
        <li>创建插件式架构</li>
      </ol>
      <p>在设计可扩展的系统时，继承可以用来定义插件的基本行为，允许第三方开发者通过继承来创建新的插件。</p>
      <p><strong>示例</strong>：一个文本编辑器，可以通过插件来扩展其功能。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-class">class</span> <span class="token class-name">Plugin</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">editorInstance</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">editorInstance</span> <span class="token operator">=</span> editorInstance<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Default implementation</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-class">class</span> <span class="token class-name">SpellCheckerPlugin</span> <span class="token keyword keyword-extends">extends</span> <span class="token class-name">Plugin</span> <span class="token punctuation">{</span>
  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Checking spelling..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Specific implementation for spell checking</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-class">class</span> <span class="token class-name">AutoSavePlugin</span> <span class="token keyword keyword-extends">extends</span> <span class="token class-name">Plugin</span> <span class="token punctuation">{</span>
  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Saving document..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Specific implementation for auto-saving</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Assuming `editor` is an instance of some editor that the plugins are augmenting</span>
<span class="token keyword keyword-let">let</span> spellChecker <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">SpellCheckerPlugin</span><span class="token punctuation">(</span>editor<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword keyword-let">let</span> autoSaver <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">AutoSavePlugin</span><span class="token punctuation">(</span>editor<span class="token punctuation">)</span><span class="token punctuation">;</span>

spellChecker<span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Checking spelling...</span>
autoSaver<span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Saving document...</span>
</code></pre><ol start="7">
        <li>原型继承和动态语言特性</li>
      </ol>
      <p>在 JavaScript 这样的动态语言中，继承可以用来动态地改变对象的行为，通过改变对象的原型链来引入新的行为或者覆盖现有的行为。</p>
      <p><strong>示例</strong>：动态地改变对象的行为。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-let">let</span> animal <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"The animal is eating."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-let">let</span> rabbit <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">jump</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"The rabbit is jumping."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// rabbit 继承自 animal</span>
<span class="token known-class-name class-name">Object</span><span class="token punctuation">.</span><span class="token method function property-access">setPrototypeOf</span><span class="token punctuation">(</span>rabbit<span class="token punctuation">,</span> animal<span class="token punctuation">)</span><span class="token punctuation">;</span>

rabbit<span class="token punctuation">.</span><span class="token method function property-access">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// The animal is eating.</span>
rabbit<span class="token punctuation">.</span><span class="token method function property-access">jump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// The rabbit is jumping.</span>

<span class="token comment">// 动态改变 rabbit 的行为</span>
rabbit<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">eat</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"The rabbit is eating a carrot."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

rabbit<span class="token punctuation">.</span><span class="token method function property-access">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// The rabbit is eating a carrot.</span>
</code></pre><ol start="8">
        <li>遵循设计模式</li>
      </ol>
      <p>许多设计模式，如工厂模式、建造者模式、策略模式等，都涉及到继承。这些模式利用继承来实现对象的创建、行为的定义和算法的封装。</p>
      <p><strong>示例</strong>：使用工厂模式来创建不同类型的 UI 控件。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-class">class</span> <span class="token class-name">UIControl</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-throw">throw</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"You must implement the render method."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-class">class</span> <span class="token class-name">ButtonControl</span> <span class="token keyword keyword-extends">extends</span> <span class="token class-name">UIControl</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Rendering a button"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-class">class</span> <span class="token class-name">CheckBoxControl</span> <span class="token keyword keyword-extends">extends</span> <span class="token class-name">UIControl</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Rendering a checkbox"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-class">class</span> <span class="token class-name">UIControlFactory</span> <span class="token punctuation">{</span>
  <span class="token function">createControl</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-switch">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword keyword-case">case</span> <span class="token string">"button"</span><span class="token operator">:</span>
        <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">ButtonControl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword keyword-case">case</span> <span class="token string">"checkbox"</span><span class="token operator">:</span>
        <span class="token keyword control-flow keyword-return">return</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">CheckBoxControl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword module keyword-default">default</span><span class="token operator">:</span>
        <span class="token keyword control-flow keyword-throw">throw</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"Unknown control type"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-let">let</span> factory <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">UIControlFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword keyword-let">let</span> button <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token method function property-access">createControl</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword keyword-let">let</span> checkbox <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token method function property-access">createControl</span><span class="token punctuation">(</span><span class="token string">"checkbox"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

button<span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Rendering a button</span>
checkbox<span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Rendering a checkbox</span>
</code></pre><p>继承的使用场景非常广泛，它在不同的编程范式和模式中都有着重要的作用。以上示例只是冰山一角，实际应用时，继承的使用会更加多样化和复杂。</p>
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