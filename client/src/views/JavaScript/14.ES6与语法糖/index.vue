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
        <h1 id="es6-与语法糖">
          ES6 与语法糖
        </h1>
        <h2 id="es6">
          ES6+
        </h2>
        <p>ECMAScript 6（也称为 ES6 和 ECMAScript 2015）以及之后的版本（ES7/ES2016, ES8/ES2017 等）引入了许多新的语言特性，以改进 JavaScript 的编程体验和能力。以下是一些主要的新特性：</p>
        <h3 id="es6ecmascript-2015">
          ES6/ECMAScript 2015
        </h3>
        <ol>
          <li><strong>Let 和 Const</strong>: 引入了<code>let</code>和<code>const</code>关键字，用于声明变量，提供了块级作用域。</li>
          <li><strong>箭头函数</strong>: 提供了更简洁的函数写法，使用<code>=&gt;</code>符号，并且不绑定自己的<code>this</code>。</li>
          <li><strong>类</strong>: 引入了基于类的面向对象编程。</li>
          <li><strong>模板字符串</strong>: 使用反引号（<code>`</code>）来创建包含表达式的字符串。</li>
          <li><strong>解构赋值</strong>: 允许从数组或对象中提取数据，并赋值给新的变量。</li>
          <li><strong>默认参数</strong>: 函数参数可以有默认值。</li>
          <li><strong>扩展运算符</strong>: 使用<code>...</code>语法来展开数组或对象。</li>
          <li><strong>Promises</strong>: 提供了用于处理异步操作的 Promise 对象。</li>
          <li><strong>模块导入/导出</strong>: 使用<code>import</code>和<code>export</code>语句来导入和导出模块中的功能。</li>
          <li><strong>Map 和 Set</strong>: 引入了 Map 和 Set 数据结构。</li>
          <li><strong>迭代器和 for...of 循环</strong>: 允许在集合对象上创建自定义迭代，并使用<code>for...of</code>循环进行迭代。</li>
          <li><strong>Symbol</strong>: 引入了新的原始数据类型 Symbol，用于创建唯一的标识符。</li>
        </ol>
        <h3 id="es7ecmascript-2016">
          ES7/ECMAScript 2016
        </h3>
        <ol>
          <li><strong>Array.prototype.includes</strong>: 新增数组方法<code>includes</code>，用于检查数组是否包含某个元素。</li>
          <li><strong>指数运算符</strong>: 引入了指数运算符<code>**</code>，例如<code>2 ** 3</code>等于 8。</li>
        </ol>
        <h3 id="es8ecmascript-2017">
          ES8/ECMAScript 2017
        </h3>
        <ol>
          <li><strong>Async/Await</strong>: 引入了<code>async</code>函数和<code>await</code>运算符，用于简化异步操作的写法。</li>
          <li><strong>Object.values/Object.entries</strong>: 新增方法用于返回对象的值或键值对数组。</li>
          <li><strong>字符串填充</strong>: <code>String.prototype.padStart</code>和<code>String.prototype.padEnd</code>用于字符串填充。</li>
          <li><strong>Object.getOwnPropertyDescriptors</strong>: 用于获取对象所有自有属性的描述符。</li>
        </ol>
        <h3 id="es9ecmascript-2018">
          ES9/ECMAScript 2018
        </h3>
        <ol>
          <li><strong>异步迭代</strong>: 引入了<code>for-await-of</code>循环，用于遍历异步生成的数据。</li>
          <li><strong>Promise.finally</strong>: 新增<code>finally</code>方法，用于指定不管 Promise 对象最后状态如何都会执行的操作。</li>
          <li><strong>Rest/Spread 属性</strong>: 对象现在也支持 rest 参数和扩展运算符。</li>
          <li><strong>正则表达式改进</strong>: 包括命名捕获组、后行断言、dotAll 模式等。</li>
        </ol>
        <h3 id="es10ecmascript-2019">
          ES10/ECMAScript 2019
        </h3>
        <ol>
          <li><strong>Array 的 flat 和 flatMap 方法</strong>: 用于创建一个新的数组，其中的子数组元素被递归地连接或处理。</li>
          <li><strong>Object.fromEntries</strong>: 与<code>Object.entries</code>相反，它允许将键值对列表转换成一个对象。</li>
          <li><strong>String 的 trimStart 和 trimEnd 方法</strong>: 类似于<code>trim</code>，但只去除字符串开头或结尾的空白。</li>
          <li><strong>可选的 Catch Binding</strong>: <code>catch</code>子句不再强制要求必须有一个错误绑定。</li>
        </ol>
        <h3 id="es11ecmascript-2020">
          ES11/ECMAScript 2020
        </h3>
        <ol>
          <li><strong>BigInt</strong>: 用于表示大于<code>2^53 - 1</code>的整数。</li>
          <li><strong>Dynamic import()</strong>: 允许动态地加载模块。</li>
          <li><strong>nullish coalescing operator (<code>??</code>)</strong>: 用于处理 null 或 undefined 的默认值。</li>
          <li><strong>Optional Chaining (<code>?.</code>)</strong>: 允许读取位于连接对象链深处的属性，而不必显式验证链中的每个引用是否有效。</li>
          <li><strong>Promise.allSettled</strong>: 返回一个 promise，该 promise 在所有给定的 promise 已被解决或拒绝后解决。</li>
          <li><strong>globalThis</strong>: 提供了一个标准的方式来获取不同环境下的全局 this 对象。</li>
        </ol>
        <h3 id="es12ecmascript-2021">
          ES12/ECMAScript 2021
        </h3>
        <ol>
          <li><strong>String.prototype.replaceAll</strong>: 用于替换字符串中所有匹配项。</li>
          <li><strong>Promise.any</strong>: 接受一组 Promise 实例，只要其中的一个实例 fulfilled，就返回那个已经被 fulfilled 的实例。</li>
          <li><strong>WeakRefs 和 FinalizationRegistry</strong>: 提供了创建弱引用对象和注册清理回调的能力。</li>
          <li><strong>逻辑赋值运算符</strong>: 引入了逻辑与(<code>&amp;&amp;=</code>)、逻辑或(<code>||=</code>)、逻辑空值(<code>??=</code>)赋值运算符。</li>
        </ol>
        <h3 id="es13ecmascript-2022">
          ES13/ECMAScript 2022
        </h3>
        <ol>
          <li><strong>类字段</strong>: 类的实例字段和静态字段。</li>
          <li><strong>私有方法和访问器</strong>: 类的私有实例方法、访问器和静态方法。</li>
          <li><strong>顶层 <code>await</code></strong>: 允许在模块的顶层使用<code>await</code>关键字。</li>
          <li><strong>错误原因</strong>: <code>Error</code>对象的构造函数可以接受一个<code>options</code>对象，其中包含一个<code>cause</code>属性。</li>
        </ol>
        <p>随着 JavaScript 的发展，每年都会有新的特性被提案并添加到 ECMAScript 标准中。开发者应该关注最新的规范和浏览器实现状态，以便有效地利用这些新特性。</p>
        <h2 id="语法糖">
          语法糖
        </h2>
        <p>在编程语言中，"语法糖"（Syntactic Sugar）是指那些使代码更易读、更易写，但并不提供新功能的语法。JavaScript 中有许多这样的语法糖，它们使得代码更加简洁和表达性强。以下是一些 JavaScript 中的语法糖：</p>
        <h3 id="箭头函数">
          <strong>箭头函数</strong>
        </h3>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token comment">// 传统函数表达式</span>
<span class="token keyword keyword-const">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 使用箭头函数的语法糖</span>
<span class="token keyword keyword-const">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
</code></pre><h3 id="模板字符串">
          <strong>模板字符串</strong>
        </h3>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token comment">// 传统的字符串拼接</span>
<span class="token keyword keyword-var">var</span> name <span class="token operator">=</span> <span class="token string">"Alice"</span><span class="token punctuation">;</span>
<span class="token keyword keyword-var">var</span> greeting <span class="token operator">=</span> <span class="token string">"Hello, "</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">"!"</span><span class="token punctuation">;</span>

<span class="token comment">// 使用模板字符串的语法糖</span>
<span class="token keyword keyword-const">const</span> greeting <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
</code></pre><h3 id="对象属性简写">
          <strong>对象属性简写</strong>
        </h3>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token comment">// 传统的对象属性定义</span>
<span class="token keyword keyword-const">const</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
  y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword keyword-const">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> x<span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> y <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 使用属性简写的语法糖</span>
<span class="token keyword keyword-const">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><h3 id="方法简写">
          <strong>方法简写</strong>
        </h3>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token comment">// 传统的对象方法定义</span>
<span class="token keyword keyword-const">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">sayHello</span><span class="token operator">:</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Hello!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 使用方法简写的语法糖</span>
<span class="token keyword keyword-const">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Hello!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><h3 id="解构赋值">
          <strong>解构赋值</strong>
        </h3>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token comment">// 不使用解构赋值</span>
<span class="token keyword keyword-const">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Alice"</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword keyword-const">const</span> name <span class="token operator">=</span> person<span class="token punctuation">.</span><span class="token property-access">name</span><span class="token punctuation">;</span>
<span class="token keyword keyword-const">const</span> age <span class="token operator">=</span> person<span class="token punctuation">.</span><span class="token property-access">age</span><span class="token punctuation">;</span>

<span class="token comment">// 使用解构赋值的语法糖</span>
<span class="token keyword keyword-const">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span> <span class="token operator">=</span> person<span class="token punctuation">;</span>
</code></pre><h3 id="默认参数">
          <strong>默认参数</strong>
        </h3>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token comment">// 不使用默认参数</span>
<span class="token keyword keyword-function">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  name <span class="token operator">=</span> name <span class="token operator">||</span> <span class="token string">"Guest"</span><span class="token punctuation">;</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Hello, "</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用默认参数的语法糖</span>
<span class="token keyword keyword-function">function</span> <span class="token function">greet</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"Guest"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="扩展运算符">
          <strong>扩展运算符</strong>
        </h3>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token comment">// 不使用扩展运算符</span>
<span class="token keyword keyword-var">var</span> parts <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"shoulders"</span><span class="token punctuation">,</span> <span class="token string">"knees"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword keyword-var">var</span> lyrics <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"head"</span><span class="token punctuation">,</span> parts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> parts<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">"and"</span><span class="token punctuation">,</span> <span class="token string">"toes"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 使用扩展运算符的语法糖</span>
<span class="token keyword keyword-const">const</span> parts <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"shoulders"</span><span class="token punctuation">,</span> <span class="token string">"knees"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword keyword-const">const</span> lyrics <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"head"</span><span class="token punctuation">,</span> <span class="token spread operator">...</span>parts<span class="token punctuation">,</span> <span class="token string">"and"</span><span class="token punctuation">,</span> <span class="token string">"toes"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><h3 id="可选链">
          <strong>可选链</strong>
        </h3>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token comment">// 不使用可选链</span>
<span class="token keyword keyword-const">const</span> x <span class="token operator">=</span> foo <span class="token operator">&amp;&amp;</span> foo<span class="token punctuation">.</span><span class="token property-access">bar</span> <span class="token operator">&amp;&amp;</span> foo<span class="token punctuation">.</span><span class="token property-access">bar</span><span class="token punctuation">.</span><span class="token property-access">baz</span><span class="token punctuation">;</span>

<span class="token comment">// 使用可选链的语法糖</span>
<span class="token keyword keyword-const">const</span> x <span class="token operator">=</span> foo<span class="token operator">?.</span>bar<span class="token operator">?.</span>baz<span class="token punctuation">;</span>
</code></pre><h3 id="空值合并运算符">
          <strong>空值合并运算符</strong>
        </h3>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token comment">// 不使用空值合并运算符</span>
<span class="token keyword keyword-const">const</span> baz <span class="token operator">=</span> foo <span class="token operator">!==</span> <span class="token keyword null nil keyword-null">null</span> <span class="token operator">&amp;&amp;</span> foo <span class="token operator">!==</span> <span class="token keyword nil keyword-undefined">undefined</span> <span class="token operator">?</span> foo <span class="token operator">:</span> bar<span class="token punctuation">;</span>

<span class="token comment">// 使用空值合并运算符的语法糖</span>
<span class="token keyword keyword-const">const</span> baz <span class="token operator">=</span> foo <span class="token operator">??</span> bar<span class="token punctuation">;</span>
</code></pre><h3 id="异步函数">
          <strong>异步函数</strong>
        </h3>
        <pre
          data-role="codeBlock"
          data-info="javascript"
          class="language-javascript javascript"
        ><code><span class="token comment">// 不使用async/await</span>
<span class="token keyword keyword-function">function</span> <span class="token function">fetchUserData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-return">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"/users/1"</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token method function property-access">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> response<span class="token punctuation">.</span><span class="token method function property-access">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token method function property-access">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用async/await的语法糖</span>
<span class="token keyword keyword-async">async</span> <span class="token keyword keyword-function">function</span> <span class="token function">fetchUserData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-const">const</span> response <span class="token operator">=</span> <span class="token keyword control-flow keyword-await">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"/users/1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword keyword-const">const</span> data <span class="token operator">=</span> <span class="token keyword control-flow keyword-await">await</span> response<span class="token punctuation">.</span><span class="token method function property-access">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><p>这些语法糖不仅使代码更加简洁，而且往往使逻辑更加清晰和易于理解。然而，值得注意的是，过度使用或者在不适当的场合使用语法糖可能会使代码难以理解，特别是对于那些不熟悉这些特性的开发者。因此，应当在保持代码清晰和可维护的前提下，谨慎使用语法糖。</p>
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