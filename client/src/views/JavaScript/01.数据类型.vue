<template>
  <div
    class="article-container"
    :class="{'md-sidebar-expand': !$store.state.isMdCollapse}"
  >
    <div class="crossnote markdown-preview">
      <h1
        id="数据类型"
        ebook-toc-level-1=""
        heading="数据类型 "
      >
        数据类型
      </h1>
      <h2
        id="有哪些"
        ebook-toc-level-2=""
        heading="有哪些 "
      >
        有哪些
      </h2>
      <ul>
        <li>
          基础数据类型：存储在栈内存，被引用或拷贝时，会创建一个完全相等的变量
          <ul>
            <li>undefined</li>
            <li>Null</li>
            <li>Boolean</li>
            <li>String</li>
            <li>Number</li>
            <li>Symbol（ES6 引入）：符号类型，表示独一无二的值</li>
            <li>BigInt（ES10 引入）：大整数类型，可以安全地存储和操作大整数。</li>
          </ul>
        </li>
        <li>
          引用数据类型：存储在堆内存，存储的是地址，多个引用指向同一个地址
          <ul>
            <li>
              Object（以下类型继承自 Object）
              <ul>
                <li>Array</li>
                <li>RegExp</li>
                <li>Date</li>
                <li>Math</li>
                <li>Function</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <h2
        id="数据类型的检测"
        ebook-toc-level-2=""
        heading="数据类型的检测 "
      >
        数据类型的检测
      </h2>
      <h3
        id="typeof"
        ebook-toc-level-3=""
        heading="typeof "
      >
        typeof
      </h3>
      <blockquote>
        <p>可判断基础数据类型（null 除外），不能正确判断引用数据类型（function 除外）</p>
      </blockquote>
      <pre
        data-role="codeBlock"
        data-info="js"
        class="language-javascript js"
      ><code><span class="token keyword keyword-typeof">typeof</span> <span class="token number">42</span><span class="token punctuation">;</span> <span class="token comment">// "number"</span>
<span class="token keyword keyword-typeof">typeof</span> <span class="token string">"blubber"</span><span class="token punctuation">;</span> <span class="token comment">// "string"</span>
<span class="token keyword keyword-typeof">typeof</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// "boolean"</span>
<span class="token keyword keyword-typeof">typeof</span> <span class="token keyword nil keyword-undefined">undefined</span><span class="token punctuation">;</span> <span class="token comment">// "undefined"</span>
<span class="token keyword keyword-typeof">typeof</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// "object"</span>
<span class="token keyword keyword-typeof">typeof</span> <span class="token keyword null nil keyword-null">null</span><span class="token punctuation">;</span> <span class="token comment">// "object"</span>
<span class="token keyword keyword-typeof">typeof</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// "object"</span>
<span class="token keyword keyword-typeof">typeof</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// "function"</span>
<span class="token keyword keyword-typeof">typeof</span> <span class="token known-class-name class-name">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "symbol"</span>
<span class="token keyword keyword-typeof">typeof</span> <span class="token known-class-name class-name">BigInt</span><span class="token punctuation">(</span><span class="token number">9007199254740991</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "bigint"</span>
</code></pre><h3
        id="instanceof"
        ebook-toc-level-3=""
        heading="instanceof "
      >
        instanceof
      </h3>
      <blockquote>
        <p>
          返回对象是否是构造函数生成的对象<br>
          可判断复杂引用数据类型，不能正确判断基础数据类型
        </p>
      </blockquote>
      <pre
        data-role="codeBlock"
        data-info="js"
        class="language-javascript js"
      ><code><span class="token keyword keyword-let">let</span> <span class="token function-variable function"><span class="token maybe-class-name">Car</span></span> <span class="token operator">=</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword keyword-let">let</span> benz <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token maybe-class-name">Car</span> <span class="token keyword keyword-instanceof">instanceof</span> <span class="token class-name">Function</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token maybe-class-name">Car</span> <span class="token keyword keyword-instanceof">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
benz <span class="token keyword keyword-instanceof">instanceof</span> <span class="token class-name">Car</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token keyword keyword-let">let</span> car <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"Mercedes Benz"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
car <span class="token keyword keyword-instanceof">instanceof</span> <span class="token class-name">String</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token keyword keyword-let">let</span> str <span class="token operator">=</span> <span class="token string">"Covid-19"</span><span class="token punctuation">;</span>
str <span class="token keyword keyword-instanceof">instanceof</span> <span class="token class-name">String</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><p>instanceof 的工作原理更详细的解释：</p>
      <p>它首先会检查右侧的对象（函数）是否有 prototype 属性。如果没有，它会抛出一个类型错误。</p>
      <p>如果有，它接着会查看左侧对象的原型链，看是否能找到右侧对象的 prototype。这个过程会一直持续到原型链的末端，也就是 null。</p>
      <p>如果在原型链上找到了右侧对象的 prototype，那么 instanceof 就会返回 true。如果直到 null 都没有找到，那么就会返回 false。</p>
      <p>这就是 instanceof 运算符的工作原理。需要注意的是，所有的对象最终都会继承自 Object，所以几乎所有的对象都可以通过 instanceof Object 检测出来。</p>
      <h3
        id="objectprototypetostring"
        ebook-toc-level-3=""
        heading="Object.prototype.toString "
      >
        Object.prototype.toString
      </h3>
      <pre
        data-role="codeBlock"
        data-info="js"
        class="language-javascript js"
      ><code><span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method function property-access">toString</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "[object Object]"</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method function property-access">toString</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "[object Object]"</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method function property-access">toString</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "[object Number]"</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method function property-access">toString</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token string">"1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "[object String]"</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method function property-access">toString</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "[object Boolean]"</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method function property-access">toString</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "[object Function]"</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method function property-access">toString</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token keyword null nil keyword-null">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "[object Null]"</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method function property-access">toString</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token keyword nil keyword-undefined">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "[object Undefined]"</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method function property-access">toString</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">123</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "[object RegExp]"</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method function property-access">toString</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token keyword keyword-new">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "[object Date]"</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method function property-access">toString</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "[object Array]"</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method function property-access">toString</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token dom variable">document</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "[object HTMLDocument]"</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method function property-access">toString</span><span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span><span class="token dom variable">window</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "[object Window]"</span>
</code></pre><pre
        data-role="codeBlock"
        data-info="js"
        class="language-javascript js"
      ><code><span class="token keyword keyword-function">function</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-let">let</span> type <span class="token operator">=</span> <span class="token keyword keyword-typeof">typeof</span> obj<span class="token punctuation">;</span>
  <span class="token comment">// 先进行 typeof 判断，如果是基础数据类型，直接返回</span>
  <span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span>type <span class="token operator">!==</span> <span class="token string">"object"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword control-flow keyword-return">return</span> type<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 如果是引用数据类型，使用正则返回结果</span>
  <span class="token keyword control-flow keyword-return">return</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">.</span><span class="token method function property-access">toString</span>
    <span class="token punctuation">.</span><span class="token method function property-access">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token method function property-access">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\[object (\S+)]\]$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">"$1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// test</span>
<span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "Array"</span>
<span class="token function">getType</span><span class="token punctuation">(</span><span class="token string">"123"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "string"</span>
</code></pre><h2
        id="数据类型的转换"
        ebook-toc-level-2=""
        heading="数据类型的转换 "
      >
        数据类型的转换
      </h2>
      <h3
        id="强制类型转换"
        ebook-toc-level-3=""
        heading="强制类型转换 "
      >
        强制类型转换
      </h3>
      <ul>
        <li>
          Number()
          <ul>
            <li>布尔值：true 和 false 分别被转换为 1 和 0</li>
            <li>数字：返回自身</li>
            <li>null：返回 0</li>
            <li>undefined：返回 NaN</li>
            <li>
              字符串
              <ul>
                <li>只包含数字：转换为十进制</li>
                <li>有效的浮点格式：转换为浮点数值</li>
                <li>空字符串：转换为 0</li>
                <li>不是以上格式：返回 NaN</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>parseInt()</li>
        <li>parseFloat()</li>
        <li>toString()</li>
        <li>String()</li>
        <li>
          Boolean()
          <ul>
            <li>除了 undefined、null、false、''、0、NaN 转换是 false</li>
            <li>其他都是 true</li>
          </ul>
        </li>
      </ul>
      <p><code>toString()</code> 和 <code>String()</code> 都可以用来将其他数据类型转换为字符串，但它们的行为方式有一些不同。</p>
      <ol>
        <li>
          <p><code>toString()</code> 是包装对象的一个方法，所有的对象都继承了这个方法。当你调用这个方法时，它会返回一个表示该对象的字符串。对于内置类型（如 <code>Number</code>，<code>Boolean</code>，<code>Array</code> 等），它们的 <code>toString()</code> 方法已经被重新定义，以返回更有意义的字符串。例如，对于数组，<code>toString()</code> 会返回一个由数组中的所有元素组成的字符串，元素之间用逗号分隔。但是，如果你尝试在 <code>null</code> 或 <code>undefined</code> 上调用 <code>toString()</code>，会抛出一个错误，因为它们没有这个方法。</p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "123"</span>
<span class="token boolean">true</span><span class="token punctuation">.</span><span class="token method function property-access">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "true"</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token method function property-access">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "1,2,3"</span>
<span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "[object Object]"</span>
<span class="token keyword null nil keyword-null">null</span><span class="token punctuation">.</span><span class="token method function property-access">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 抛出错误</span>
<span class="token keyword nil keyword-undefined">undefined</span><span class="token punctuation">.</span><span class="token method function property-access">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 抛出错误</span>
</code></pre>
        </li>
        <li>
          <p><code>String()</code> 是一个函数，可以将任何类型的值转换为字符串。如果值有 <code>toString()</code> 方法，<code>String()</code> 会调用这个方法并返回结果。否则，它会直接返回一个表示该值的字符串。对于 <code>null</code> 和 <code>undefined</code>，<code>String()</code> 会返回 <code>"null"</code> 和 <code>"undefined"</code>。</p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token known-class-name class-name">String</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "123"</span>
<span class="token known-class-name class-name">String</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "true"</span>
<span class="token known-class-name class-name">String</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "1,2,3"</span>
<span class="token known-class-name class-name">String</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "[object Object]"</span>
<span class="token known-class-name class-name">String</span><span class="token punctuation">(</span><span class="token keyword null nil keyword-null">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "null"</span>
<span class="token known-class-name class-name">String</span><span class="token punctuation">(</span><span class="token keyword nil keyword-undefined">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "undefined"</span>
</code></pre>
        </li>
      </ol>
      <p>总的来说，<code>toString()</code> 是一个方法，通常在对象上调用，而 <code>String()</code> 是一个函数，可以接受任何类型的参数。在处理 <code>null</code> 和 <code>undefined</code> 时，<code>String()</code> 会更安全，因为它不会抛出错误。</p>
      <h3
        id="隐式类型转换"
        ebook-toc-level-3=""
        heading="隐式类型转换 "
      >
        隐式类型转换
      </h3>
      <ul>
        <li>
          <p>逻辑运算符：&amp;&amp;、||、!</p>
        </li>
        <li>
          <p>运算符：+、-、*、/</p>
        </li>
        <li>
          <p>关系操作符：&gt;、&lt;、&lt;=、&gt;=</p>
        </li>
        <li>
          <p>条件运算符：if/while</p>
        </li>
        <li>
          <p>相等运算符：==</p>
          <ol>
            <li><strong>数字和字符串比较</strong>：字符串会被转换为数字，然后进行比较。例如：<code>5 == '5'</code>，字符串 <code>'5'</code> 被转换为数字 <code>5</code>，所以结果为 <code>true</code>。</li>
            <li><strong>布尔值和其他类型比较</strong>：布尔值会被转换为数字（<code>true</code> 转换为 <code>1</code>，<code>false</code> 转换为 <code>0</code>），然后进行比较。例如：<code>1 == true</code>，布尔值 <code>true</code> 被转换为数字 <code>1</code>，所以结果为 <code>true</code>。</li>
            <li><strong>对象和非对象比较</strong>：当一个对象与一个非对象（数字或字符串）比较时，对象会尝试转换为原始类型（通过 <code>valueOf</code> 或 <code>toString</code> 方法），然后进行比较。例如：<code>[1] == 1</code>，数组 <code>[1]</code> 会先转换为字符串 <code>'1'</code>，然后字符串 <code>'1'</code> 转换为数字 <code>1</code>，所以结果为 <code>true</code>。</li>
            <li><strong><code>null</code> 和 <code>undefined</code> 比较</strong>：当 <code>null</code> 和 <code>undefined</code> 进行比较时，结果为 <code>true</code>。例如：<code>null == undefined</code> 的结果为 <code>true</code>。</li>
            <li><strong><code>NaN</code> 比较</strong>：<code>NaN</code> 与任何值比较，包括其自身，结果都是 <code>false</code>。</li>
          </ol>
        </li>
      </ul>
      <p>这些转换规则可能会导致一些出乎意料的结果，因此在可能的情况下，推荐使用 <code>===</code>（严格等于）进行比较，因为 <code>===</code> 不会进行类型转换。</p>
      <h2
        id="数据类型的比较"
        ebook-toc-level-2=""
        heading="数据类型的比较 "
      >
        数据类型的比较
      </h2>
      <p>在 JavaScript 中，数据类型的比较可以分为两种：严格比较（使用 <code>===</code> 和 <code>!==</code> 运算符）和抽象比较（使用 <code>==</code> 和 <code>!=</code> 运算符）。</p>
      <ol>
        <li>
          <p><strong>严格比较（<code>===</code> 和 <code>!==</code>）</strong></p>
          <p>严格比较运算符会比较两个值的类型和值。如果两个值的类型或值不同，那么这两个值就被认为是不相等的。</p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token number">123</span> <span class="token operator">===</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token string">"123"</span> <span class="token operator">===</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token boolean">true</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token keyword null nil keyword-null">null</span> <span class="token operator">===</span> <span class="token keyword nil keyword-undefined">undefined</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token number">NaN</span> <span class="token operator">===</span> <span class="token number">NaN</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><p>注意，<code>NaN</code> 是唯一一个不等于自身的值。</p>
        </li>
        <li>
          <p><strong>抽象比较（<code>==</code> 和 <code>!=</code>）</strong></p>
          <p>抽象比较运算符会在比较两个值之前尝试进行类型转换。如果两个值的类型不同，JavaScript 会尝试将一个或两个值转换为一个共同的类型，然后比较它们的值。</p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token number">123</span> <span class="token operator">==</span> <span class="token string">"123"</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token boolean">true</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token keyword null nil keyword-null">null</span> <span class="token operator">==</span> <span class="token keyword nil keyword-undefined">undefined</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token string">"0"</span> <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token number">NaN</span> <span class="token operator">==</span> <span class="token number">NaN</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><p>注意，尽管 <code>null</code> 和 <code>undefined</code> 在抽象比较中被认为是相等的，但它们不会被转换为其他任何值。此外，<code>NaN</code> 在任何比较中都不等于任何值，包括它自己。</p>
        </li>
      </ol>
      <p>在编程中，通常推荐使用严格比较运算符，因为抽象比较的规则可能会导致一些非直观的结果。严格比较运算符提供了更明确和可预测的比较结果。</p>
      <h2
        id="数据类型的包装对象"
        ebook-toc-level-2=""
        heading="数据类型的包装对象 "
      >
        数据类型的包装对象
      </h2>
      <p>在 JavaScript 中，原始数据类型（Primitive types）包括 Undefined、Null、Boolean、Number、String、Symbol 和 BigInt。这些原始数据类型的值是直接包含在变量中的简单数据段。然而，JavaScript 为我们提供了一种方法，可以在这些原始数据类型上调用方法。这就是通过所谓的包装对象（Wrapper objects）实现的。</p>
      <p>包装对象是一种特殊的对象，它们关联了一个原始类型的值。JavaScript 有三种内置的包装对象：String、Number 和 Boolean。当你在一个原始数据类型上调用一个方法时，JavaScript 会暂时把它转换（包装）成一个对象，这样就可以调用方法了。这个过程是自动的，你不需要显式创建一个包装对象。</p>
      <p>以下是一些例子：</p>
      <ol>
        <li>
          <p>String：当你对一个字符串调用方法时，JavaScript 会创建一个临时的 String 对象，调用方法，然后丢弃这个临时对象。你可以调用的方法包括 <code>charAt()</code>、<code>replace()</code>、<code>split()</code> 等。</p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-let">let</span> str <span class="token operator">=</span> <span class="token string">"hello world"</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token method function property-access">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 'h'</span>
</code></pre><p>在这个例子中，<code>str</code> 是一个字符串，不是一个对象，所以直接在 <code>str</code> 上调用 <code>charAt()</code> 方法实际上是 JavaScript 内部自动将 <code>str</code> 包装成了一个临时的 String 对象，然后在这个临时对象上调用了 <code>charAt()</code> 方法。</p>
        </li>
        <li>
          <p>Number：同样，当你对一个数字调用方法时，JavaScript 会创建一个临时的 Number 对象。</p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-let">let</span> num <span class="token operator">=</span> <span class="token number">12345.6789</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>num<span class="token punctuation">.</span><span class="token method function property-access">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// '12345.68'</span>
</code></pre><p>在这个例子中，<code>num.toFixed(2)</code> 实际上是 JavaScript 内部自动将 <code>num</code> 包装成了一个临时的 Number 对象，然后在这个临时对象上调用了 <code>toFixed()</code> 方法。</p>
        </li>
        <li>
          <p>Boolean：Boolean 包装对象同样存在，但在实际编程中使用的不多。</p>
        </li>
      </ol>
      <p>需要注意的是，虽然 JavaScript 会自动创建这些包装对象，但直接使用 <code>new</code> 关键字手动创建包装对象是不推荐的，因为这可能会导致一些意想不到的结果。</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-let">let</span> strObj <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"hello world"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token keyword keyword-typeof">typeof</span> strObj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 'object', not 'string'</span>
</code></pre><p>在这个例子中，<code>strObj</code> 是一个对象，而不是一个字符串。这可能会导致一些问题，因为在很多情况下，我们希望的是一个字符串，而不是一个 String 对象。</p>
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