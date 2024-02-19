<template>
  <div
    class="article-container"
    :class="{'md-sidebar-expand': !$store.state.isMdCollapse}"
  >
    <div class="crossnote markdown-preview">
      <h1
        id="对象与数组"
        ebook-toc-level-1=""
        heading="对象与数组 "
      >
        对象与数组
      </h1>
      <h2
        id="对象"
        ebook-toc-level-2=""
        heading="对象 "
      >
        对象
      </h2>
      <h3
        id="是什么"
        ebook-toc-level-3=""
        heading="是什么 "
      >
        是什么
      </h3>
      <p>在 JavaScript 中，对象（Object）是一种数据结构，用于存储各种键值对。对象的键通常是字符串（或 Symbol），而值可以是任何类型的数据，如数字、字符串、布尔值、函数、甚至其他对象。</p>
      <p>对象可以被视为一个存储属性（properties）的集合，每个属性都有一个键（key）和对应的值（value）。在 JavaScript 中，对象也是一种非常灵活的数据类型，因为它们是动态的，可以随时添加、修改或删除属性。</p>
      <p>对象可以通过对象字面量的方式直接定义，或者通过构造函数（包括内置构造函数和自定义构造函数）来创建。对象字面量是用花括号 <code>{}</code> 包围的键值对列表。</p>
      <p>下面是一个简单的 JavaScript 对象字面量的例子：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-let">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">"John"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">"Doe"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
  <span class="token function-variable function">greet</span><span class="token operator">:</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>
      <span class="token string">"Hello, my name is "</span> <span class="token operator">+</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">firstName</span> <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">lastName</span> <span class="token operator">+</span> <span class="token string">"."</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 访问对象属性</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span><span class="token property-access">firstName</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: John</span>

<span class="token comment">// 调用对象的方法</span>
person<span class="token punctuation">.</span><span class="token method function property-access">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Hello, my name is John Doe.</span>
</code></pre><p>在这个例子中，<code>person</code> 对象有三个属性（<code>firstName</code>、<code>lastName</code> 和 <code>age</code>）和一个方法（<code>greet</code>）。属性和方法可以通过点表示法（如 <code>person.firstName</code>）或者方括号表示法（如 <code>person['firstName']</code>）来访问。</p>
      <p>JavaScript 中的对象是引用类型，这意味着当你将一个对象赋值给另一个变量时，你只是复制了对该对象的引用，而不是对象本身的副本。因此，如果你修改了引用的对象，所有引用该对象的变量都会反映出这种修改。</p>
      <h3
        id="知识点"
        ebook-toc-level-3=""
        heading="知识点 "
      >
        知识点
      </h3>
      <ol>
        <li>
          <p><strong>创建对象</strong>:</p>
          <ul>
            <li>对象字面量：使用花括号 <code>{}</code> 创建对象。</li>
            <li>构造函数：使用 <code>new</code> 关键字和构造函数创建对象实例。</li>
            <li><code>Object.create()</code>：创建一个新对象，使用现有的对象来提供新创建的对象的<code>__proto__</code>。</li>
          </ul>
        </li>
        <li>
          <p><strong>属性和方法</strong>:</p>
          <ul>
            <li>属性访问：使用点符号（<code>.</code>）或方括号（<code>[]</code>）访问对象的属性。</li>
            <li>方法：对象的属性也可以是函数，这种属性称为方法。</li>
            <li>可计算属性名：在对象字面量中使用方括号来设置动态属性名。</li>
          </ul>
        </li>
        <li>
          <p><strong>原型和原型链</strong>:</p>
          <ul>
            <li>每个 JavaScript 对象都有一个原型，对象从原型继承方法和属性。</li>
            <li>原型链：对象的原型本身也是一个对象，它也有自己的原型，这样一直上溯到<code>null</code>。</li>
          </ul>
        </li>
        <li>
          <p><strong>继承</strong>:</p>
          <ul>
            <li>原型继承：通过原型链实现继承。</li>
            <li>类继承：使用<code>class</code>关键字创建类，并通过<code>extends</code>实现继承。</li>
          </ul>
        </li>
        <li>
          <p><strong><code>this</code>关键字</strong>:</p>
          <ul>
            <li>在方法内部，<code>this</code>指向调用该方法的对象。</li>
          </ul>
        </li>
        <li>
          <p><strong>属性的特性</strong>:</p>
          <ul>
            <li>可写（writable）：决定属性是否可以被重新赋值。</li>
            <li>可枚举（enumerable）：决定属性是否可以被<code>for...in</code>循环或<code>Object.keys()</code>枚举。</li>
            <li>可配置（configurable）：决定属性是否可以被修改或删除。</li>
          </ul>
        </li>
        <li>
          <p><strong>属性的获取和设置</strong>:</p>
          <ul>
            <li><code>Object.getOwnPropertyDescriptor()</code>：获取属性的描述符。</li>
            <li><code>Object.defineProperty()</code>：定义或修改属性的特性。</li>
            <li><code>Object.defineProperties()</code>：定义或修改多个属性的特性。</li>
          </ul>
        </li>
        <li>
          <p><strong>控制对象的可扩展性</strong>:</p>
          <ul>
            <li><code>Object.preventExtensions()</code>：阻止对象添加新属性。</li>
            <li><code>Object.seal()</code>：阻止添加新属性同时阻止现有属性的配置性。</li>
            <li><code>Object.freeze()</code>：除了<code>seal</code>的限制外，还可以使对象的所有属性不可写。</li>
          </ul>
        </li>
        <li>
          <p><strong>键的枚举和遍历</strong>:</p>
          <ul>
            <li><code>for...in</code>循环：遍历对象自身的和继承的可枚举属性。</li>
            <li><code>Object.keys()</code>：返回对象自身的所有可枚举属性键的数组。</li>
            <li><code>Object.values()</code>：返回对象自身的所有可枚举属性值的数组。</li>
            <li><code>Object.entries()</code>：返回对象自身的所有可枚举属性键值对的数组。</li>
          </ul>
        </li>
        <li>
          <p><strong>对象的复制和合并</strong>:</p>
          <ul>
            <li><code>Object.assign()</code>：用于复制一个或多个源对象的所有可枚举自有属性到目标对象。</li>
            <li>展开语法（Spread syntax）：<code>{...obj}</code>可以用来复制对象的属性。</li>
          </ul>
        </li>
        <li>
          <p><strong>高级函数和闭包</strong>:</p>
          <ul>
            <li>函数可以作为对象的属性（即方法），也可以作为构造器。</li>
            <li>闭包可以用来创建私有变量。</li>
          </ul>
        </li>
        <li>
          <p><strong>JSON 与对象</strong>:</p>
          <ul>
            <li><code>JSON.stringify()</code>：将 JavaScript 对象转换为 JSON 字符串。</li>
            <li><code>JSON.parse()</code>：将 JSON 字符串转换为 JavaScript 对象。</li>
          </ul>
        </li>
      </ol>
      <p>这些知识点构成了 JavaScript 对象的基础，理解它们对于掌握 JavaScript 编程至关重要。</p>
      <h3
        id="对象方法"
        ebook-toc-level-3=""
        heading="对象方法 "
      >
        对象方法
      </h3>
      <p>JavaScript 中的对象有许多内置的方法，这些方法是所有对象都可以使用的，因为它们定义在原型对象 <code>Object.prototype</code> 上。以下是一些常用的对象方法：</p>
      <ol>
        <li>
          <p><strong>对象属性的操作</strong>:</p>
          <ul>
            <li><code>Object.keys(obj)</code>: 返回一个包含所有给定对象自身可枚举属性名称的数组。</li>
            <li><code>Object.values(obj)</code>: 返回一个包含所有给定对象自身可枚举属性值的数组。</li>
            <li><code>Object.entries(obj)</code>: 返回一个给定对象自身可枚举属性的键值对数组。</li>
            <li><code>Object.assign(target, ...sources)</code>: 将所有可枚举属性的值从一个或多个源对象复制到目标对象。</li>
            <li><code>Object.defineProperty(obj, prop, descriptor)</code>: 在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回这个对象。</li>
            <li><code>Object.defineProperties(obj, props)</code>: 在一个对象上定义新的属性或修改现有属性，并返回该对象。</li>
            <li><code>Object.getOwnPropertyDescriptor(obj, prop)</code>: 返回指定对象上一个自有属性对应的属性描述符。</li>
            <li><code>Object.getOwnPropertyDescriptors(obj)</code>: 返回一个对象的所有自有属性的描述符。</li>
            <li><code>Object.getOwnPropertyNames(obj)</code>: 返回一个数组，包含所有给定对象自身的属性名称（不包含 Symbol 值作为名称的属性）。</li>
            <li><code>Object.getOwnPropertySymbols(obj)</code>: 返回一个数组，包含所有给定对象自身的 Symbol 属性名称。</li>
            <li><code>Object.getPrototypeOf(obj)</code>: 返回指定对象的原型。</li>
          </ul>
        </li>
        <li>
          <p><strong>对象的原型操作</strong>:</p>
          <ul>
            <li><code>Object.setPrototypeOf(obj, prototype)</code>: 设置一个指定的对象的原型到另一个对象或 <code>null</code>。</li>
          </ul>
        </li>
        <li>
          <p><strong>对象的可扩展性</strong>:</p>
          <ul>
            <li><code>Object.preventExtensions(obj)</code>: 阻止新属性被添加到对象。</li>
            <li><code>Object.isExtensible(obj)</code>: 判断一个对象是否是可扩展的（是否可以添加新的属性）。</li>
            <li><code>Object.seal(obj)</code>: 防止其他代码删除对象的属性。</li>
            <li><code>Object.isSealed(obj)</code>: 判断一个对象是否被密封。</li>
            <li><code>Object.freeze(obj)</code>: 冻结一个对象，使得对象不可修改。</li>
            <li><code>Object.isFrozen(obj)</code>: 判断一个对象是否被冻结。</li>
          </ul>
        </li>
        <li>
          <p><strong>对象的比较和测试</strong>:</p>
          <ul>
            <li><code>Object.is(value1, value2)</code>: 比较两个值是否相同。所有 NaN 值都相等（这与比较操作符 <code>==</code> 和 <code>===</code> 不同）。</li>
          </ul>
        </li>
        <li>
          <p><strong>原型方法</strong>:</p>
          <ul>
            <li><code>obj.hasOwnProperty(prop)</code>: 返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。</li>
            <li><code>obj.isPrototypeOf(object)</code>: 用于测试一个对象是否存在于另一个对象的原型链上。</li>
            <li><code>obj.propertyIsEnumerable(prop)</code>: 返回一个布尔值，表示指定的属性是否可枚举。</li>
            <li><code>obj.toString()</code>: 返回对象的字符串表示。</li>
            <li><code>obj.toLocaleString()</code>: 返回对象的本地化字符串表示。</li>
            <li><code>obj.valueOf()</code>: 返回指定对象的原始值。</li>
          </ul>
        </li>
      </ol>
      <p>请注意，这些方法中的许多都是静态方法，属于 <code>Object</code> 构造函数，而不是那些可以从对象实例中调用的方法。例如，你可以使用 <code>Object.keys(myObject)</code> 来获取 <code>myObject</code> 的所有键，但不能使用 <code>myObject.keys()</code>。</p>
      <p>除了上述列出的方法，JavaScript 对象还有一些其他的方法和技巧，这些方法可以帮助你更好地操作和理解对象：</p>
      <ol>
        <li>
          <p><strong>构造器和实例方法</strong>:</p>
          <ul>
            <li>构造器方法，如 <code>new Object()</code> 或者简单使用 <code>{}</code> 对象字面量语法，用于创建新对象。</li>
            <li>实例方法，如 <code>toString()</code> 和 <code>valueOf()</code>，可以在对象实例上调用。</li>
          </ul>
        </li>
        <li>
          <p><strong>原型方法的扩展</strong>:</p>
          <ul>
            <li>通过 <code>Object.prototype</code> 可以添加新的方法，这些方法将对所有对象实例可用。例如，<code>Object.prototype.myMethod = function() { /*...*/ };</code> 会给所有对象添加 <code>myMethod</code> 方法。</li>
          </ul>
        </li>
        <li>
          <p><strong>使用 <code>Object.create</code> 的原型式继承</strong>:</p>
          <ul>
            <li><code>Object.create(proto, [propertiesObject])</code> 方法创建一个新对象，使用现有的对象来提供新创建的对象的 <code>__proto__</code>。</li>
          </ul>
        </li>
        <li>
          <p><strong>访问器属性</strong>:</p>
          <ul>
            <li>使用 <code>Object.defineProperty()</code> 或 <code>Object.defineProperties()</code> 可以定义访问器属性（getter 和 setter）。</li>
          </ul>
        </li>
        <li>
          <p><strong>遍历对象</strong>:</p>
          <ul>
            <li><code>for...in</code> 循环可以遍历一个对象的可枚举属性，包括其原型链上的属性。</li>
            <li><code>Object.keys()</code>, <code>Object.values()</code>, 和 <code>Object.entries()</code> 方法在遍历时不考虑原型链中的属性。</li>
          </ul>
        </li>
        <li>
          <p><strong>属性的特性和元属性</strong>:</p>
          <ul>
            <li>使用 <code>Object.getOwnPropertyDescriptor()</code> 和 <code>Object.getOwnPropertyDescriptors()</code> 可以查询属性的特性。</li>
            <li><code>writable</code>, <code>enumerable</code>, <code>configurable</code> 是属性描述符的关键字，用于控制属性的行为。</li>
          </ul>
        </li>
        <li>
          <p><strong>代理和反射</strong>:</p>
          <ul>
            <li><code>Proxy</code> 对象用于定义基本操作的自定义行为（如属性查找、赋值、枚举、函数调用等）。</li>
            <li><code>Reflect</code> 对象提供了可拦截 JavaScript 操作的方法。这些方法与 <code>Proxy</code> handlers 的方法相同。</li>
          </ul>
        </li>
        <li>
          <p><strong>对象的解构赋值</strong>:</p>
          <ul>
            <li>解构赋值允许你使用类似数组或元组的语法从数组或对象中提取数据，例如 <code>let {a, b} = obj;</code>。</li>
          </ul>
        </li>
        <li>
          <p><strong>展开操作符</strong>:</p>
          <ul>
            <li>展开操作符 <code>...</code> 用于取出参数对象中的所有可枚举属性，拷贝到当前对象之中，例如 <code>let newObj = {...obj};</code>。</li>
          </ul>
        </li>
        <li>
          <p><strong>对象的深拷贝</strong>:</p>
          <ul>
            <li>JavaScript 默认的对象赋值是引用赋值，如果需要进行深拷贝，可以使用 <code>JSON.parse(JSON.stringify(obj))</code>，但这种方法有局限性，例如它不能复制函数和循环引用的对象。</li>
          </ul>
        </li>
        <li>
          <p><strong>对象的比较</strong>:</p>
          <ul>
            <li>由于对象是引用类型，直接比较两个对象总是返回 <code>false</code>，除非它们引用同一个内存地址。<code>Object.is()</code> 方法提供了一种确定两个值是否相同的方法。</li>
          </ul>
        </li>
        <li>
          <p><strong>原型方法与静态方法的区别</strong>:</p>
          <ul>
            <li>原型方法是定义在 <code>Object.prototype</code> 上，需要通过对象实例来调用，如 <code>myObj.toString()</code>。</li>
            <li>静态方法是定义在构造函数 <code>Object</code> 上，直接通过构造函数调用，如 <code>Object.keys(myObj)</code>。</li>
          </ul>
        </li>
      </ol>
      <p>了解这些方法和它们的使用场景对于编写高效和健壮的 JavaScript 代码非常重要。</p>
      <h3
        id="使用场景"
        ebook-toc-level-3=""
        heading="使用场景 "
      >
        使用场景
      </h3>
      <p>JavaScript 对象是一种复合数据类型，它是大多数 JavaScript 结构和算法的基础。对象用于存储、操作和传递数据。以下是一些常见的对象使用场景和示例：</p>
      <ol>
        <li>
          <p>
            <strong>存储和访问数据</strong>:<br>
            对象可以存储键值对，其中键是字符串（或 Symbol），值可以是任何数据类型。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-let">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Alice"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
  <span class="token literal-property property">isStudent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Alice</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>组织代码（模块化）</strong>:<br>
            对象可以用来组织代码，将相关功能分组为模块。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-let">let</span> calculator <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-return">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">subtract</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-return">return</span> x <span class="token operator">-</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-return">return</span> x <span class="token operator">*</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">divide</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-return">return</span> x <span class="token operator">/</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>calculator<span class="token punctuation">.</span><span class="token method function property-access">multiply</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 20</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>作为函数的参数和返回值</strong>:<br>
            对象可以作为参数传递给函数，也可以作为函数的返回值，这使得函数可以处理多个相关值。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-function">function</span> <span class="token function">createPerson</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> name<span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> age<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-let">let</span> bob <span class="token operator">=</span> <span class="token function">createPerson</span><span class="token punctuation">(</span><span class="token string">"Bob"</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>bob<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: {name: "Bob", age: 30}</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>构造函数和原型链</strong>:<br>
            使用构造函数和原型链可以创建具有特定方法和属性的对象。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-function">function</span> <span class="token function"><span class="token maybe-class-name">Car</span></span><span class="token punctuation">(</span><span class="token parameter">make<span class="token punctuation">,</span> model</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">make</span> <span class="token operator">=</span> make<span class="token punctuation">;</span>
  <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">model</span> <span class="token operator">=</span> model<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Car</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">displayInfo</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">This is a </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">make</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string" /><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">model</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-let">let</span> myCar <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token string">"Toyota"</span><span class="token punctuation">,</span> <span class="token string">"Corolla"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myCar<span class="token punctuation">.</span><span class="token method function property-access">displayInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: This is a Toyota Corolla.</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>数据建模</strong>:<br>
            对象可以用来模拟现实世界中的事物和它们之间的关系。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-let">let</span> book <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"1984"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token string">"George Orwell"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">genres</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"Dystopian"</span><span class="token punctuation">,</span> <span class="token string">"Political fiction"</span><span class="token punctuation">,</span> <span class="token string">"Social science fiction"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">details</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">publicationYear</span><span class="token operator">:</span> <span class="token number">1949</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isbn</span><span class="token operator">:</span> <span class="token string">"0451524934"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>book<span class="token punctuation">.</span><span class="token property-access">details</span><span class="token punctuation">.</span><span class="token property-access">isbn</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 0451524934</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>配置选项</strong>:<br>
            对象常用于提供配置选项给函数或方法。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-let">let</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"blue"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"My Chart"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-function">function</span> <span class="token function">drawChart</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 使用 options 对象中的配置来绘制图表</span>
<span class="token punctuation">}</span>

<span class="token function">drawChart</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>回调和高阶函数</strong>:<br>
            对象可以存储函数，使得可以以回调的形式使用。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-let">let</span> callbacks <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">onSuccess</span><span class="token operator">:</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Success!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">onError</span><span class="token operator">:</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Error!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">onProgress</span><span class="token operator">:</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">percent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Progress: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>percent<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">%</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-function">function</span> <span class="token function">asyncTask</span><span class="token punctuation">(</span><span class="token parameter">callbacks</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 假设这是一个异步任务</span>
  callbacks<span class="token punctuation">.</span><span class="token method function property-access">onSuccess</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 如果出错了</span>
  <span class="token comment">// callbacks.onError();</span>
  <span class="token comment">// 如果需要报告进度</span>
  <span class="token comment">// callbacks.onProgress(50);</span>
<span class="token punctuation">}</span>

<span class="token function">asyncTask</span><span class="token punctuation">(</span>callbacks<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>JSON 数据格式</strong>:<br>
            JSON（JavaScript Object Notation）是一种基于对象的数据交换格式。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-let">let</span> jsonData <span class="token operator">=</span> <span class="token string">'{"name": "Alice", "age": 25, "isStudent": true}'</span><span class="token punctuation">;</span>
<span class="token keyword keyword-let">let</span> obj <span class="token operator">=</span> <span class="token known-class-name class-name">JSON</span><span class="token punctuation">.</span><span class="token method function property-access">parse</span><span class="token punctuation">(</span>jsonData<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将 JSON 字符串转换为 JavaScript 对象</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Alice</span>
</code></pre>
        </li>
      </ol>
      <p>这些示例展示了对象在 JavaScript 中的多样性和灵活性。几乎在任何需要结构化数据的场景中，对象都会是一个很好的选择。</p>
      <p>当然，JavaScript 对象的使用场景远不止上述这些。以下是一些额外的场景，其中对象扮演了关键角色：</p>
      <ol start="9">
        <li>
          <p>
            <strong>状态管理</strong>:<br>
            对象常用于在应用程序中跟踪状态。例如，在一个游戏中，你可能会用一个对象来保存游戏的当前状态。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-let">let</span> gameState <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lives</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"shield"</span><span class="token punctuation">,</span> <span class="token string">"potion"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-function">function</span> <span class="token function">loseLife</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  gameState<span class="token punctuation">.</span><span class="token property-access">lives</span> <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>gameState<span class="token punctuation">.</span><span class="token property-access">lives</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Game over logic</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>作为映射结构</strong>:<br>
            对象可用作映射，将键映射到值。这在需要快速查找能力时非常有用。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-let">let</span> userRoles <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">"alice@example.com"</span><span class="token operator">:</span> <span class="token string">"admin"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"bob@example.com"</span><span class="token operator">:</span> <span class="token string">"editor"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"charlie@example.com"</span><span class="token operator">:</span> <span class="token string">"subscriber"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-function">function</span> <span class="token function">checkUserRole</span><span class="token punctuation">(</span><span class="token parameter">email</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> userRoles<span class="token punctuation">[</span>email<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">"No role assigned"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>事件监听和处理</strong>:<br>
            对象可以用于管理事件监听器和事件处理程序。例如，你可能会有一个对象来管理不同的事件类型和关联的处理程序。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-let">let</span> eventHandlers <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* ... */</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">onMouseOver</span><span class="token operator">:</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* ... */</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">onLoad</span><span class="token operator">:</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* ... */</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 假设我们有一个函数来注册这些事件</span>
<span class="token keyword keyword-function">function</span> <span class="token function">registerEventHandlers</span><span class="token punctuation">(</span><span class="token parameter">handlers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-for">for</span> <span class="token punctuation">(</span><span class="token keyword keyword-let">let</span> eventType <span class="token keyword keyword-in">in</span> handlers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    element<span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span>eventType<span class="token punctuation">,</span> handlers<span class="token punctuation">[</span>eventType<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>插件或中间件系统</strong>:<br>
            对象可以用来定义插件或中间件系统，其中每个插件/中间件都是一个对象，具有特定的方法和属性。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-let">let</span> middleware <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">request</span><span class="token operator">:</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">req</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* ... */</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">response</span><span class="token operator">:</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* ... */</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 应用中间件</span>
<span class="token keyword keyword-function">function</span> <span class="token function">applyMiddleware</span><span class="token punctuation">(</span><span class="token parameter">middleware<span class="token punctuation">,</span> req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  middleware<span class="token punctuation">.</span><span class="token method function property-access">request</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// ... 处理请求 ...</span>
  middleware<span class="token punctuation">.</span><span class="token method function property-access">response</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>原型继承和行为共享</strong>:<br>
            对象可以用于通过原型继承共享行为。创建的每个新对象可以访问原型对象的属性和方法。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-let">let</span> animal <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">sound</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword keyword-let">let</span> dog <span class="token operator">=</span> <span class="token known-class-name class-name">Object</span><span class="token punctuation">.</span><span class="token method function property-access">create</span><span class="token punctuation">(</span>animal<span class="token punctuation">)</span><span class="token punctuation">;</span>
dog<span class="token punctuation">.</span><span class="token property-access">sound</span> <span class="token operator">=</span> <span class="token string">"Woof"</span><span class="token punctuation">;</span>

dog<span class="token punctuation">.</span><span class="token method function property-access">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Woof</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>封装和数据隐藏</strong>:<br>
            利用闭包和即时执行函数表达式(IIFE)，对象可以用于封装私有数据和方法。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-let">let</span> counter <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-let">let</span> value <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 私有数据</span>
  <span class="token keyword control-flow keyword-return">return</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      value<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      value<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword control-flow keyword-return">return</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

counter<span class="token punctuation">.</span><span class="token method function property-access">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>counter<span class="token punctuation">.</span><span class="token method function property-access">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 1</span>
counter<span class="token punctuation">.</span><span class="token method function property-access">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>counter<span class="token punctuation">.</span><span class="token method function property-access">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 0</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>动态属性和方法</strong>:<br>
            对象的灵活性允许动态地添加、修改或删除属性和方法。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-let">let</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Alice"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 动态添加方法</span>
user<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">greet</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Hello, "</span> <span class="token operator">+</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

user<span class="token punctuation">.</span><span class="token method function property-access">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Hello, Alice</span>

<span class="token comment">// 动态删除属性</span>
<span class="token keyword keyword-delete">delete</span> user<span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">;</span>
</code></pre>
        </li>
      </ol>
      <p>这些场景展示出了对象作为 JavaScript 中一个基本构建块的多功能性和强大能力。对象不仅可以用于存储数据，还能用于组织代码，提供封装，管理应用状态，处理事件，以及许多其他高级编程模式。</p>
      <h2
        id="数组"
        ebook-toc-level-2=""
        heading="数组 "
      >
        数组
      </h2>
      <h3
        id="是什么-1"
        ebook-toc-level-3=""
        heading="是什么 "
      >
        是什么
      </h3>
      <p>在 JavaScript 中，数组（Array）是一种用于存储多个值的单一变量。这些值可以是任意数据类型，包括数字、字符串、对象，甚至其他数组。数组是一种特殊类型的对象，用于表示有序的集合，并且可以通过索引来访问其元素。</p>
      <p>数组的特点：</p>
      <ol>
        <li><strong>有序集合</strong>：数组中的元素按照插入的顺序进行排列。</li>
        <li><strong>通过索引访问</strong>：数组的每个元素都有一个数字索引，从 0 开始。</li>
        <li><strong>动态大小</strong>：JavaScript 的数组是动态的，这意味着它们可以在运行时增长或缩小。</li>
        <li><strong>异质性</strong>：数组可以包含不同类型的元素，即一个数组可以同时存储字符串、数字和对象。</li>
      </ol>
      <p>创建数组的示例：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token comment">// 创建一个空数组</span>
<span class="token keyword keyword-let">let</span> emptyArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 创建一个包含数字的数组</span>
<span class="token keyword keyword-let">let</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 创建一个包含不同类型元素的数组</span>
<span class="token keyword keyword-let">let</span> mixedArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"two"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><p>数组的操作包括添加元素、删除元素、遍历元素、排序等。JavaScript 提供了丰富的数组方法来进行这些操作，如 <code>push()</code>、<code>pop()</code>、<code>shift()</code>、<code>unshift()</code>、<code>slice()</code>、<code>splice()</code>、<code>map()</code>、<code>filter()</code>、<code>reduce()</code> 等。</p>
      <p>例如，添加和删除元素：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token comment">// 添加元素到数组的末尾</span>
numbers<span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 移除数组最后一个元素</span>
numbers<span class="token punctuation">.</span><span class="token method function property-access">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 添加元素到数组的开头</span>
numbers<span class="token punctuation">.</span><span class="token method function property-access">unshift</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 移除数组的第一个元素</span>
numbers<span class="token punctuation">.</span><span class="token method function property-access">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>数组在 JavaScript 中是非常基础且强大的数据结构，广泛用于各种编程场景。</p>
      <h3
        id="知识点-1"
        ebook-toc-level-3=""
        heading="知识点 "
      >
        知识点
      </h3>
      <p>JavaScript 数组的知识点相当广泛，涵盖创建和初始化数组、操作数组元素、遍历数组、数组的方法、以及高级功能和性能考量。以下是一些主要的知识点：</p>
      <ol>
        <li>创建和初始化</li>
      </ol>
      <ul>
        <li><strong>字面量创建</strong>：使用方括号 <code>[]</code> 创建数组。</li>
        <li><strong>构造函数创建</strong>：使用 <code>new Array()</code> 创建数组。</li>
        <li><strong>数组的长度</strong>：通过 <code>.length</code> 属性获取数组的长度。</li>
        <li><strong>多维数组</strong>：数组的元素也可以是其他数组，形成多维数组。</li>
      </ul>
      <ol start="2">
        <li>访问和修改元素</li>
      </ol>
      <ul>
        <li><strong>索引访问</strong>：使用下标访问和修改数组元素，如 <code>array[0]</code>。</li>
        <li><strong>数组遍历</strong>：使用 <code>for</code>, <code>for...of</code>, <code>forEach</code> 等循环遍历数组。</li>
      </ul>
      <ol start="3">
        <li>常用方法</li>
      </ol>
      <ul>
        <li><strong>添加/删除元素</strong>：<code>push()</code>, <code>pop()</code>, <code>shift()</code>, <code>unshift()</code>, <code>splice()</code>。</li>
        <li><strong>数组拼接</strong>：<code>concat()</code> 将多个数组合并为一个。</li>
        <li><strong>截取和替换</strong>：<code>slice()</code>, <code>splice()</code>。</li>
        <li><strong>查找元素</strong>：<code>indexOf()</code>, <code>lastIndexOf()</code>, <code>find()</code>, <code>findIndex()</code>, <code>includes()</code>。</li>
        <li><strong>迭代方法</strong>：<code>forEach()</code>, <code>map()</code>, <code>filter()</code>, <code>reduce()</code>, <code>reduceRight()</code>, <code>every()</code>, <code>some()</code>。</li>
        <li><strong>排序和反转</strong>：<code>sort()</code>, <code>reverse()</code>。</li>
        <li><strong>转换为字符串</strong>：<code>join()</code>, <code>toString()</code>。</li>
      </ul>
      <ol start="4">
        <li>高级功能</li>
      </ol>
      <ul>
        <li><strong>迭代器方法</strong>：<code>keys()</code>, <code>values()</code>, <code>entries()</code> 提供遍历器对象。</li>
        <li><strong>数组解构</strong>：使用解构赋值来提取数组元素。</li>
        <li><strong>扩展运算符</strong>：<code>...</code> 可以用来展开数组。</li>
        <li><strong>Array.from() 和 Array.of()</strong>：用于从类数组对象或可迭代对象创建新的数组实例，或者根据一组参数来创建新数组实例。</li>
        <li><strong>flatMap() 和 flat()</strong>：用于扁平化嵌套数组。</li>
      </ul>
      <ol start="5">
        <li>性能考量</li>
      </ol>
      <ul>
        <li><strong>避免大规模的数组操作</strong>：大量或复杂的操作可能影响性能。</li>
        <li><strong>避免使用过大的索引</strong>：使用超出当前数组长度的索引会创建稀疏数组，可能影响性能和内存使用。</li>
        <li><strong>循环优化</strong>：避免在每次迭代中都计算数组长度，尤其是在大数组上。</li>
      </ul>
      <ol start="6">
        <li>数组类型检测</li>
      </ol>
      <ul>
        <li><strong>Array.isArray()</strong>：用于确定传递的值是否是一个 Array。</li>
      </ul>
      <ol start="7">
        <li>原型链和继承</li>
      </ol>
      <ul>
        <li><strong>原型</strong>：所有的 JavaScript 对象都有一个原型，数组对象也是如此。数组的方法和属性是定义在 <code>Array.prototype</code> 上的，这意味着所有数组都会继承这些方法和属性。</li>
      </ul>
      <p>掌握这些知识点可以帮助你有效地使用 JavaScript 数组，并在开发中处理各种数组相关的任务。</p>
      <h3
        id="数组方法"
        ebook-toc-level-3=""
        heading="数组方法 "
      >
        数组方法
      </h3>
      <p>JavaScript 数组提供了一系列的内置方法，这些方法可以分为几个类别，包括添加或删除元素、遍历数组、搜索和排序、以及其他实用的方法。以下是一些常用的数组方法：</p>
      <ol>
        <li>添加和删除元素</li>
      </ol>
      <ul>
        <li><code>push()</code>: 在数组的末尾添加一个或多个元素，并返回新的长度。</li>
        <li><code>pop()</code>: 删除数组的最后一个元素，并返回那个元素。</li>
        <li><code>shift()</code>: 删除数组的第一个元素，并返回那个元素。</li>
        <li><code>unshift()</code>: 在数组的开头添加一个或多个元素，并返回新的长度。</li>
        <li><code>splice()</code>: 通过删除现有元素和/或添加新元素来更改数组的内容。</li>
      </ul>
      <ol start="2">
        <li>遍历数组</li>
      </ol>
      <ul>
        <li><code>forEach()</code>: 对数组的每个元素执行一次给定的函数。</li>
        <li><code>map()</code>: 创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后的返回值。</li>
        <li><code>filter()</code>: 创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。</li>
        <li><code>reduce()</code>: 对数组中的每个元素执行一个由您提供的“reducer”函数(升序执行)，将其结果汇总为单个返回值。</li>
        <li><code>reduceRight()</code>: 与 <code>reduce()</code> 类似，但是从数组的末尾开始向前工作。</li>
        <li><code>some()</code>: 测试数组中是不是至少有 1 个元素通过了被提供的函数测试。</li>
        <li><code>every()</code>: 测试数组的所有元素是否都通过了指定函数的测试。</li>
      </ul>
      <ol start="3">
        <li>搜索和位置</li>
      </ol>
      <ul>
        <li><code>indexOf()</code>: 返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。</li>
        <li><code>lastIndexOf()</code>: 返回在数组中可以找到一个给定元素的最后一个索引，如果不存在，则返回-1。</li>
        <li><code>find()</code>: 返回数组中满足提供的测试函数的第一个元素的值，否则返回 <code>undefined</code>。</li>
        <li><code>findIndex()</code>: 返回数组中满足提供的测试函数的第一个元素的索引，否则返回-1。</li>
        <li><code>includes()</code>: 判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 <code>true</code>，否则返回 <code>false</code>。</li>
      </ul>
      <ol start="4">
        <li>排序和反转</li>
      </ol>
      <ul>
        <li><code>sort()</code>: 对数组元素进行排序，并返回数组。</li>
        <li><code>reverse()</code>: 颠倒数组中元素的位置，并返回数组。</li>
      </ul>
      <ol start="5">
        <li>切片和拼接</li>
      </ol>
      <ul>
        <li><code>slice()</code>: 返回一个新的数组对象，这一对象是一个由 <code>begin</code> 和 <code>end</code> 决定的原数组的浅拷贝（包括 <code>begin</code>，不包括<code>end</code>）。</li>
        <li><code>concat()</code>: 用于合并两个或多个数组，不会改变现有的数组，而是返回一个新数组。</li>
      </ul>
      <ol start="6">
        <li>转换为字符串</li>
      </ol>
      <ul>
        <li><code>join()</code>: 将数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。</li>
        <li><code>toString()</code>: 返回一个由数组中的所有元素组合而成的字符串。</li>
      </ul>
      <ol start="7">
        <li>迭代器方法</li>
      </ol>
      <ul>
        <li><code>keys()</code>: 返回一个新的 Array Iterator 对象，该对象包含数组中每个索引的键。</li>
        <li><code>values()</code>: 返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值。</li>
        <li><code>entries()</code>: 返回一个新的 Array Iterator 对象，该对象包含数组中每个索引的键/值对。</li>
      </ul>
      <ol start="8">
        <li>扁平化和映射</li>
      </ol>
      <ul>
        <li><code>flat()</code>: 创建一个新数组，其中所有子数组元素递归地按指定的深度连接到它。</li>
        <li><code>flatMap()</code>: 首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。</li>
      </ul>
      <ol start="9">
        <li>类数组对象转换</li>
      </ol>
      <ul>
        <li><code>Array.from()</code>: 从类似数组或可迭代的对象创建一个新的数组实例。</li>
      </ul>
      <ol start="10">
        <li>创建新数组</li>
      </ol>
      <ul>
        <li><code>Array.of()</code>: 创建具有可变数量参数的新数组实例，而不考虑参数的数量或类型。</li>
      </ul>
      <p>这些方法使得 JavaScript 数组成为一种非常灵活和强大的数据结构，适用于处理各种数据集合相关的问题。</p>
      <h3
        id="使用场景-1"
        ebook-toc-level-3=""
        heading="使用场景 "
      >
        使用场景
      </h3>
      <p>JavaScript 数组是一种用于存储多个值的数据结构，适用于多种编程场景。以下是一些常见的使用场景和示例：</p>
      <ol>
        <li>列表存储</li>
      </ol>
      <p>当你需要存储一系列的数据，比如用户列表、商品目录或者是待办事项时，数组就非常有用。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-const">const</span> users <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Alice"</span><span class="token punctuation">,</span> <span class="token string">"Bob"</span><span class="token punctuation">,</span> <span class="token string">"Charlie"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword keyword-const">const</span> products <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Keyboard"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Mouse"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword keyword-const">const</span> todos <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Wash car"</span><span class="token punctuation">,</span> <span class="token string">"Buy groceries"</span><span class="token punctuation">,</span> <span class="token string">"Read a book"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><ol start="2">
        <li>数据操作</li>
      </ol>
      <p>数组提供了一系列方法来进行数据添加、删除、搜索和排序等操作。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token comment">// 添加数据</span>
todos<span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token string">"Study JavaScript"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 删除数据</span>
todos<span class="token punctuation">.</span><span class="token method function property-access">splice</span><span class="token punctuation">(</span>todos<span class="token punctuation">.</span><span class="token method function property-access">indexOf</span><span class="token punctuation">(</span><span class="token string">"Wash car"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 搜索数据</span>
<span class="token keyword keyword-const">const</span> mouseProduct <span class="token operator">=</span> products<span class="token punctuation">.</span><span class="token method function property-access">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">product</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> product<span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">===</span> <span class="token string">"Mouse"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 排序数据</span>
users<span class="token punctuation">.</span><span class="token method function property-access">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><ol start="3">
        <li>数据遍历</li>
      </ol>
      <p>数组可以通过循环来遍历，执行函数或者操作数据。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token comment">// 使用 forEach 遍历数组</span>
todos<span class="token punctuation">.</span><span class="token method function property-access">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">todo</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>todo<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 使用 map 创建一个新的数组</span>
<span class="token keyword keyword-const">const</span> upperCaseUsers <span class="token operator">=</span> users<span class="token punctuation">.</span><span class="token method function property-access">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> user<span class="token punctuation">.</span><span class="token method function property-access">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><ol start="4">
        <li>数据聚合</li>
      </ol>
      <p>可以通过 <code>reduce</code> 等方法对数组中的数据进行聚合操作。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-const">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 计算总和</span>
<span class="token keyword keyword-const">const</span> sum <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token method function property-access">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">total<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> total <span class="token operator">+</span> value<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><ol start="5">
        <li>多维数组和矩阵</li>
      </ol>
      <p>在处理表格数据或者需要在多个维度上存储数据时，可以使用多维数组。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-const">const</span> matrix <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 访问第二行第三列的数据</span>
<span class="token keyword keyword-const">const</span> value <span class="token operator">=</span> matrix<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>
</code></pre><ol start="6">
        <li>队列和栈</li>
      </ol>
      <p>数组可以用作队列（先进先出）或栈（后进先出）这样的数据结构。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token comment">// 栈的使用</span>
<span class="token keyword keyword-const">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
stack<span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 入栈</span>
stack<span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
stack<span class="token punctuation">.</span><span class="token method function property-access">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 出栈</span>

<span class="token comment">// 队列的使用</span>
<span class="token keyword keyword-const">const</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
queue<span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 入队</span>
queue<span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
queue<span class="token punctuation">.</span><span class="token method function property-access">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 出队</span>
</code></pre><ol start="7">
        <li>作为函数参数</li>
      </ol>
      <p>数组可以作为参数传递给函数，让函数可以操作更多的数据。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">calculateSum</span><span class="token punctuation">(</span><span class="token parameter">numbers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> numbers<span class="token punctuation">.</span><span class="token method function property-access">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">total<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> total <span class="token operator">+</span> value<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-const">const</span> result <span class="token operator">=</span> <span class="token function">calculateSum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><ol start="8">
        <li>返回多个值</li>
      </ol>
      <p>函数可以通过返回数组来一次性返回多个值。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">getMinMax</span><span class="token punctuation">(</span><span class="token parameter">numbers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> <span class="token punctuation">[</span><span class="token known-class-name class-name">Math</span><span class="token punctuation">.</span><span class="token method function property-access">min</span><span class="token punctuation">(</span><span class="token spread operator">...</span>numbers<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token known-class-name class-name">Math</span><span class="token punctuation">.</span><span class="token method function property-access">max</span><span class="token punctuation">(</span><span class="token spread operator">...</span>numbers<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-const">const</span> <span class="token punctuation">[</span>min<span class="token punctuation">,</span> max<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">getMinMax</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>这些示例展示了数组在不同场景下的应用，从简单的数据存储到复杂的数据结构和算法实现。数组的灵活性和易用性使其成为 JavaScript 中最常用的数据结构之一。</p>
      <ol start="9">
        <li>数据流和异步处理</li>
      </ol>
      <p>数组可以用来处理数据流，例如，你可以将一系列异步操作的结果收集到一个数组中。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-async">async</span> <span class="token keyword keyword-function">function</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token parameter">urls</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-const">const</span> dataPromises <span class="token operator">=</span> urls<span class="token punctuation">.</span><span class="token method function property-access">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> response<span class="token punctuation">.</span><span class="token method function property-access">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword control-flow keyword-return">return</span> <span class="token known-class-name class-name">Promise</span><span class="token punctuation">.</span><span class="token method function property-access">all</span><span class="token punctuation">(</span>dataPromises<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-const">const</span> urls <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"https://api.example.com/data1"</span><span class="token punctuation">,</span> <span class="token string">"https://api.example.com/data2"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">fetchData</span><span class="token punctuation">(</span>urls<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 包含了所有URLs返回数据的数组</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><ol start="10">
        <li>配合扩展运算符进行操作</li>
      </ol>
      <p>扩展运算符（<code>...</code>）可以与数组一起使用，以实现更加灵活的操作。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-const">const</span> parts <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"shoulders"</span><span class="token punctuation">,</span> <span class="token string">"knees"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword keyword-const">const</span> body <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"head"</span><span class="token punctuation">,</span> <span class="token spread operator">...</span>parts<span class="token punctuation">,</span> <span class="token string">"and"</span><span class="token punctuation">,</span> <span class="token string">"toes"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// body 现在是 ['head', 'shoulders', 'knees', 'and', 'toes']</span>
</code></pre><ol start="11">
        <li>配置存储</li>
      </ol>
      <p>数组可以用于存储配置项，特别是当配置项的数量未知或者可能变化时。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-const">const</span> serverConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">ports</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">8080</span><span class="token punctuation">,</span> <span class="token number">8081</span><span class="token punctuation">,</span> <span class="token number">8082</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">ips</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"192.168.1.1"</span><span class="token punctuation">,</span> <span class="token string">"192.168.1.2"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 通过数组可以轻松添加或移除配置</span>
serverConfig<span class="token punctuation">.</span><span class="token property-access">ports</span><span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token number">8083</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><ol start="12">
        <li>随机访问和组合数据</li>
      </ol>
      <p>数组允许随机访问其元素，这使得组合数据变得简单。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-const">const</span> fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"apple"</span><span class="token punctuation">,</span> <span class="token string">"banana"</span><span class="token punctuation">,</span> <span class="token string">"cherry"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword keyword-const">const</span> randomFruit <span class="token operator">=</span> fruits<span class="token punctuation">[</span><span class="token known-class-name class-name">Math</span><span class="token punctuation">.</span><span class="token method function property-access">floor</span><span class="token punctuation">(</span><span class="token known-class-name class-name">Math</span><span class="token punctuation">.</span><span class="token method function property-access">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> fruits<span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 组合数组中的字符串</span>
<span class="token keyword keyword-const">const</span> fruitSalad <span class="token operator">=</span> fruits<span class="token punctuation">.</span><span class="token method function property-access">join</span><span class="token punctuation">(</span><span class="token string">" + "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><ol start="13">
        <li>数学和统计计算</li>
      </ol>
      <p>数组在进行数学和统计计算时非常有用，如存储一系列数值并进行分析。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-const">const</span> grades <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">87</span><span class="token punctuation">,</span> <span class="token number">94</span><span class="token punctuation">,</span> <span class="token number">68</span><span class="token punctuation">,</span> <span class="token number">74</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">,</span> <span class="token number">77</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword keyword-const">const</span> average <span class="token operator">=</span> grades<span class="token punctuation">.</span><span class="token method function property-access">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">sum<span class="token punctuation">,</span> grade</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> sum <span class="token operator">+</span> grade<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">/</span> grades<span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">;</span>
<span class="token keyword keyword-const">const</span> aboveAverage <span class="token operator">=</span> grades<span class="token punctuation">.</span><span class="token method function property-access">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">grade</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> grade <span class="token operator">&gt;</span> average<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><ol start="14">
        <li>动画和游戏开发</li>
      </ol>
      <p>在动画和游戏开发中，数组可以用来存储对象的状态、位置或其他属性。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-const">const</span> particles <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token literal-property property">velocity</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">220</span><span class="token punctuation">,</span> <span class="token literal-property property">velocity</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 更多粒子</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 更新粒子位置</span>
particles<span class="token punctuation">.</span><span class="token method function property-access">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">particle</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
  particle<span class="token punctuation">.</span><span class="token property-access">x</span> <span class="token operator">+=</span> particle<span class="token punctuation">.</span><span class="token property-access">velocity</span><span class="token punctuation">.</span><span class="token property-access">x</span><span class="token punctuation">;</span>
  particle<span class="token punctuation">.</span><span class="token property-access">y</span> <span class="token operator">+=</span> particle<span class="token punctuation">.</span><span class="token property-access">velocity</span><span class="token punctuation">.</span><span class="token property-access">y</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><ol start="15">
        <li>实现复杂数据结构</li>
      </ol>
      <p>数组可以用来实现更复杂的数据结构，如堆、图的邻接列表等。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token comment">// 实现一个简单的堆结构</span>
<span class="token keyword keyword-class">class</span> <span class="token class-name">MinHeap</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">heap</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 堆的插入等操作</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用数组实现图的邻接列表</span>
<span class="token keyword keyword-const">const</span> adjacencyList <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 顶点0连接到顶点1和2</span>
  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 顶点1连接到顶点0和3</span>
  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 顶点2连接到顶点0和4</span>
  <span class="token comment">// 更多顶点连接</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><p>这些补充的使用场景展示了数组在实际编程中的多样性和强大功能。无论是简单的数据聚合还是复杂的数据结构实现，数组都是一个不可或缺的工具。</p>
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