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
          label="快速入门"
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
        <h1 id="typescript">
          TypeScript
        </h1>
        <h2 id="基础语法">
          基础语法
        </h2>
        <p>TypeScript 是 JavaScript 的一个超集，为大规模应用添加了类型，类，模块等特性。下面是一些 TypeScript 的基础语法：</p>
        <ol>
          <li><strong>变量声明</strong>：TypeScript 使用 <code>let</code> 和 <code>const</code> 关键字声明变量：</li>
        </ol>
        <pre
          data-role="codeBlock"
          data-info="typescript"
          class="language-typescript typescript"
        ><code><span class="token keyword keyword-let">let</span> isDone<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword keyword-const">const</span> maxNumber<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
</code></pre><ol start="2">
          <li><strong>类型注解</strong>：在 TypeScript 中，你可以使用类型注解来明确变量的类型：</li>
        </ol>
        <pre
          data-role="codeBlock"
          data-info="typescript"
          class="language-typescript typescript"
        ><code><span class="token keyword keyword-let">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"John"</span><span class="token punctuation">;</span>
<span class="token keyword keyword-let">let</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>
<span class="token keyword keyword-let">let</span> isStudent<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><ol start="3">
          <li><strong>数组</strong>：你可以使用类型后面跟上 <code>[]</code> 的方式表示数组，或者使用数组泛型 <code>Array&lt;elemType&gt;</code>：</li>
        </ol>
        <pre
          data-role="codeBlock"
          data-info="typescript"
          class="language-typescript typescript"
        ><code><span class="token keyword keyword-let">let</span> list<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword keyword-let">let</span> list<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><ol start="4">
          <li><strong>元组</strong>：元组类型允许你表达一个已知元素数量和类型的数组，各元素的类型不必相同：</li>
        </ol>
        <pre
          data-role="codeBlock"
          data-info="typescript"
          class="language-typescript typescript"
        ><code><span class="token keyword keyword-let">let</span> x<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"hello"</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>
x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">"hello"</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
</code></pre><ol start="5">
          <li><strong>枚举</strong>：枚举类型用于定义数值集合：</li>
        </ol>
        <pre
          data-role="codeBlock"
          data-info="typescript"
          class="language-typescript typescript"
        ><code><span class="token keyword keyword-enum">enum</span> Color <span class="token punctuation">{</span>
  Red<span class="token punctuation">,</span>
  Green<span class="token punctuation">,</span>
  Blue<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword keyword-let">let</span> c<span class="token operator">:</span> Color <span class="token operator">=</span> Color<span class="token punctuation">.</span>Green<span class="token punctuation">;</span>
</code></pre><ol start="6">
          <li><strong>任意值</strong>：如果是一个任意值，允许你在编译时可随意设置其类型：</li>
        </ol>
        <pre
          data-role="codeBlock"
          data-info="typescript"
          class="language-typescript typescript"
        ><code><span class="token keyword keyword-let">let</span> notSure<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
notSure <span class="token operator">=</span> <span class="token string">"maybe a string"</span><span class="token punctuation">;</span>
notSure <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// okay, definitely a boolean</span>
</code></pre><ol start="7">
          <li><strong>函数</strong>：在 TypeScript 中，你可以为函数的参数添加类型，也可以为函数本身添加返回值类型：</li>
        </ol>
        <pre
          data-role="codeBlock"
          data-info="typescript"
          class="language-typescript typescript"
        ><code><span class="token keyword keyword-function">function</span> <span class="token function">greet</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-return">return</span> <span class="token string">"Hello, "</span> <span class="token operator">+</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><ol start="8">
          <li><strong>接口</strong>：接口在 TypeScript 中用于类型检查，确保对象符合特定的形状：</li>
        </ol>
        <pre
          data-role="codeBlock"
          data-info="typescript"
          class="language-typescript typescript"
        ><code><span class="token keyword keyword-interface">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  lastName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><ol start="9">
          <li><strong>类</strong>：TypeScript 支持基于类的面向对象编程：</li>
        </ol>
        <pre
          data-role="codeBlock"
          data-info="typescript"
          class="language-typescript typescript"
        ><code><span class="token keyword keyword-class">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
  fullName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token keyword keyword-public">public</span> firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token keyword keyword-public">public</span> middleInitial<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token keyword keyword-public">public</span> lastName<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span>fullName <span class="token operator">=</span> firstName <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> middleInitial <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> lastName<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><ol start="10">
          <li><strong>模块</strong>：TypeScript 也支持模块化编程，可以使用 <code>export</code> 和 <code>import</code> 关键字：</li>
        </ol>
        <pre
          data-role="codeBlock"
          data-info="typescript"
          class="language-typescript typescript"
        ><code><span class="token comment">// someModule.ts</span>
<span class="token keyword keyword-export">export</span> <span class="token keyword keyword-function">function</span> <span class="token function">someFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// anotherModule.ts</span>
<span class="token keyword keyword-import">import</span> <span class="token punctuation">{</span> someFunction <span class="token punctuation">}</span> <span class="token keyword keyword-from">from</span> <span class="token string">"./someModule"</span><span class="token punctuation">;</span>
</code></pre><p>以上就是 TypeScript 的一些基础语法，更深入的内容包括泛型、高级类型、装饰器等等。</p>
        <h2 id="泛型">
          泛型
        </h2>
        <p>泛型（Generics）是编程语言的一种特性，允许你编写能够处理各种数据类型的通用代码，而不是限制函数或类只能使用特定的数据类型。</p>
        <p>在 TypeScript 中，泛型是一种创建可重用的组件的强大工具，这些组件可以适应多种类型，而不是单一类型。这样，你可以创建出能够工作在不同数据类型上的函数和类，同时还保持类型安全。</p>
        <p>下面是一个简单的泛型函数的例子：</p>
        <pre
          data-role="codeBlock"
          data-info="typescript"
          class="language-typescript typescript"
        ><code><span class="token keyword keyword-function">function</span> <span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-return">return</span> arg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><p>在这个例子中，<code>T</code> 是一个类型变量，它代表任何类型。你可以将 <code>T</code> 看作是函数的一个参数，这个参数是类型，而不是值。</p>
        <p>你可以像下面这样调用这个函数：</p>
        <pre
          data-role="codeBlock"
          data-info="typescript"
          class="language-typescript typescript"
        ><code><span class="token keyword keyword-let">let</span> output <span class="token operator">=</span> <span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">"myString"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// type of output will be 'string'</span>
</code></pre><p>在这个例子中，我们明确地指定 <code>T</code> 是 <code>string</code> 类型，并将一个字符串 "myString" 作为参数传递，返回值 <code>output</code> 的类型也将是 <code>string</code>。</p>
        <p>你也可以让 TypeScript 编译器自动推断类型：</p>
        <pre
          data-role="codeBlock"
          data-info="typescript"
          class="language-typescript typescript"
        ><code><span class="token keyword keyword-let">let</span> output <span class="token operator">=</span> <span class="token function">identity</span><span class="token punctuation">(</span><span class="token string">"myString"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// type of output will be 'string'</span>
</code></pre><p>在这个例子中，我们没有明确地指定 <code>T</code> 是 <code>string</code> 类型，但是因为我们传递了一个字符串 "myString" 作为参数，TypeScript 编译器能够自动推断出 <code>T</code> 应该是 <code>string</code> 类型。</p>
        <p>泛型在 TypeScript 中有很多用途，包括在类和接口中使用泛型，泛型约束，以及使用泛型创建高级工具，如映射类型和条件类型等。</p>
        <h2 id="高级类型">
          高级类型
        </h2>
        <p>在 TypeScript 中，高级类型（Advanced Types）是一种强大的工具，它可以帮助你处理更复杂的类型场景。这些类型包括交叉类型（Intersection Types）、联合类型（Union Types）、类型别名（Type Aliases）、字符串字面量类型（String Literal Types）、数字字面量类型（Numeric Literal Types）、映射类型（Mapped Types）、条件类型（Conditional Types）等。下面是一些简单的介绍：</p>
        <ol>
          <li><strong>交叉类型</strong>：交叉类型是将多个类型合并为一个类型。这让我们可以将现有的多种类型叠加到一起得到所需的类型，例如，<code>Person &amp; Serializable &amp; Loggable</code> 表示一个类型同时是 <code>Person</code>、<code>Serializable</code> 和 <code>Loggable</code>。</li>
        </ol>
        <pre
          data-role="codeBlock"
          data-info="typescript"
          class="language-typescript typescript"
        ><code><span class="token keyword keyword-interface">interface</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword keyword-interface">interface</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">{</span>
  b<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword keyword-let">let</span> x<span class="token operator">:</span> <span class="token constant">A</span> <span class="token operator">&amp;</span> <span class="token constant">B</span> <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token string">"hello"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><ol start="2">
          <li><strong>联合类型</strong>：联合类型表示一个值可以是几种类型之一。我们用竖线（<code>|</code>）分隔每个类型，所以 <code>number | string | boolean</code> 是一个值可以为 <code>number</code>、<code>string</code> 或 <code>boolean</code> 的类型。</li>
        </ol>
        <pre
          data-role="codeBlock"
          data-info="typescript"
          class="language-typescript typescript"
        ><code><span class="token keyword keyword-function">function</span> <span class="token function">padLeft</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> padding<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><ol start="3">
          <li><strong>类型别名</strong>：类型别名用来给一个类型起个新名字。类型别名有时和接口很相似，但是可以工作在原始值，联合类型，交叉类型等任何我们需要手写的地方。</li>
        </ol>
        <pre
          data-role="codeBlock"
          data-info="typescript"
          class="language-typescript typescript"
        ><code><span class="token keyword keyword-type">type</span> <span class="token class-name">StringOrNumber</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
</code></pre><ol start="4">
          <li><strong>字符串字面量类型</strong>：字符串字面量类型允许你指定字符串必须的固定值。在实践中，字符串字面量类型可以与联合类型，类型守卫，和类型别名很好地配合。</li>
        </ol>
        <pre
          data-role="codeBlock"
          data-info="typescript"
          class="language-typescript typescript"
        ><code><span class="token keyword keyword-type">type</span> <span class="token class-name">Easing</span> <span class="token operator">=</span> <span class="token string">"ease-in"</span> <span class="token operator">|</span> <span class="token string">"ease-out"</span> <span class="token operator">|</span> <span class="token string">"ease-in-out"</span><span class="token punctuation">;</span>
</code></pre><ol start="5">
          <li><strong>映射类型</strong>：映射类型允许你创建一个新类型，其属性与旧类型的属性一一对应，并且可以转换旧属性的类型。</li>
        </ol>
        <pre
          data-role="codeBlock"
          data-info="typescript"
          class="language-typescript typescript"
        ><code><span class="token keyword keyword-type">type</span> <span class="token class-name">Readonly<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-readonly">readonly</span> <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword keyword-in">in</span> <span class="token keyword keyword-keyof">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><ol start="6">
          <li><strong>条件类型</strong>：条件类型可以让你有条件地选择类型。基础的形式看起来像 <code>T extends U ? X : Y</code>，表示当 <code>T</code> 可赋值给 <code>U</code> 时结果是 <code>X</code> 类型，否则为 <code>Y</code> 类型。</li>
        </ol>
        <pre
          data-role="codeBlock"
          data-info="typescript"
          class="language-typescript typescript"
        ><code><span class="token keyword keyword-type">type</span> <span class="token class-name">TypeName<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword keyword-extends">extends</span> <span class="token class-name"><span class="token builtin">string</span></span>
  <span class="token operator">?</span> <span class="token string">"string"</span>
  <span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword keyword-extends">extends</span> <span class="token class-name"><span class="token builtin">number</span></span>
  <span class="token operator">?</span> <span class="token string">"number"</span>
  <span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword keyword-extends">extends</span> <span class="token class-name"><span class="token builtin">boolean</span></span>
  <span class="token operator">?</span> <span class="token string">"boolean"</span>
  <span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword keyword-extends">extends</span> <span class="token class-name"><span class="token keyword keyword-undefined">undefined</span></span>
  <span class="token operator">?</span> <span class="token string">"undefined"</span>
  <span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword keyword-extends">extends</span> <span class="token class-name"><span class="token builtin">Function</span></span>
  <span class="token operator">?</span> <span class="token string">"function"</span>
  <span class="token operator">:</span> <span class="token string">"object"</span><span class="token punctuation">;</span>
</code></pre><p>以上只是对 TypeScript 中高级类型的简单介绍，每种高级类型都有其特定的用途和复杂的用法。了解和掌握这些类型可以让你更好地使用 TypeScript 进行开发。</p>
        <h2 id="装饰器">
          装饰器
        </h2>
        <p>装饰器（Decorators）是一种特殊类型的声明，它可以被附加到类声明，方法，访问器，属性或参数上。装饰器使用 <code>@expression</code> 这种形式，<code>expression</code> 必须求值为一个函数，它会在运行时被调用，被装饰的声明信息作为参数传入。</p>
        <p>在 TypeScript 中，装饰器提供了一种方式来添加标记类和成员，通过反射（reflection）可以获取这些标记信息。</p>
        <p>以下是一个简单的装饰器示例：</p>
        <pre
          data-role="codeBlock"
          data-info="typescript"
          class="language-typescript typescript"
        ><code><span class="token keyword keyword-function">function</span> <span class="token function">sealed</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// do something with 'target' ...</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">sealed</span></span>
<span class="token keyword keyword-class">class</span> <span class="token class-name">Greeter</span> <span class="token punctuation">{</span>
  greeting<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span>greeting <span class="token operator">=</span> message<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-return">return</span> <span class="token string">"Hello, "</span> <span class="token operator">+</span> <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span>greeting<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><p>在这个示例中，<code>@sealed</code> 装饰器被应用到 <code>Greeter</code> 类。当 <code>@sealed</code> 被执行的时候，它将 <code>Greeter</code> 类的构造函数作为其唯一的参数。</p>
        <p>装饰器可以用于类（Class Decorators）、方法（Method Decorators）、访问器（Accessor Decorators）、属性（Property Decorators）和参数（Parameter Decorators）。</p>
        <p>需要注意的是，装饰器是一项实验性特性，在 TypeScript 中默认是禁用的，你需要在你的 tsconfig.json 文件中启用 <code>experimentalDecorators</code> 选项来使用装饰器。而且，由于装饰器目前处于 JavaScript 的提案阶段，所以其语法和行为在未来可能会有所改变。</p>
      </div>
      <div
        v-show="activeName==='second'"
        style="height: 80vh;"
      >
        <iframe
          src="//player.bilibili.com/player.html?aid=284254105&bvid=BV1cc411v781&cid=1420167678&p=1"
          scrolling="no"
          frameborder="no"
          framespacing="0"
          width="90%"
          height="90%"
          allowfullscreen="true"
        />
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