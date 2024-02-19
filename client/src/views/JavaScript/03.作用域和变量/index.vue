<template>
  <div
    class="article-container"
    :class="{'md-sidebar-expand': !$store.state.isMdCollapse}"
  >
    <div class="crossnote markdown-preview">
      <h1 id="作用域和变量">
        作用域和变量
      </h1>
      <h2 id="作用域">
        作用域
      </h2>
      <h3 id="是什么">
        是什么
      </h3>
      <p>在 JavaScript 中，作用域是一个非常重要的概念。作用域决定了变量、函数和对象的可访问性和生命周期。它控制了标识符（变量名、函数名等）的可见性和查找。</p>
      <h3 id="作用域类型">
        作用域类型
      </h3>
      <p>JavaScript 主要有两种类型的作用域：</p>
      <ol>
        <li>
          <p><strong>全局作用域</strong>：在代码的任何地方都可以访问到的变量、函数等拥有全局作用域。例如，在浏览器环境中，全局作用域通常是 <code>window</code> 对象。</p>
        </li>
        <li>
          <p><strong>局部作用域</strong>：只在某个特定代码段内可以访问的变量、函数等拥有局部作用域。函数内部就是一个局部作用域，也称为函数作用域。</p>
        </li>
      </ol>
      <p>在 ES6 中，引入了一种新的作用域类型：</p>
      <ol start="3">
        <li><strong>块级作用域</strong>：由花括号 <code>{}</code> 包围的代码块具有块级作用域。<code>let</code> 和 <code>const</code> 声明的变量就在块级作用域中。</li>
      </ol>
      <p>以下是一个简单的例子来说明作用域的概念：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword keyword-var">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// a 在全局作用域中</span>

<span class="token keyword keyword-function">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-var">var</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// b 在 test 函数的局部作用域中</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 可以访问全局作用域中的 a</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 可以访问局部作用域中的 b</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 可以访问全局作用域中的 a</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 错误：无法访问局部作用域中的 b</span>
</code></pre><p>在这个例子中，变量 <code>a</code> 在全局作用域中，可以在任何地方访问。变量 <code>b</code> 在 <code>test</code> 函数的局部作用域中，只能在 <code>test</code> 函数内部访问。当我们试图在 <code>test</code> 函数外部访问 <code>b</code> 时，JavaScript 会抛出一个错误，因为 <code>b</code> 在那个作用域中不存在。</p>
      <p>总的来说，理解作用域对于编写和理解 JavaScript 代码非常重要，它帮助我们管理变量和函数，避免命名冲突，并提供了变量生命周期的控制。</p>
      <h2 id="变量">
        变量
      </h2>
      <h3 id="变量类型">
        变量类型
      </h3>
      <p>在 JavaScript 中，你可以使用以下几种变量：</p>
      <ol>
        <li>
          <p><code>var</code>: 这是最早的 JavaScript 变量声明方式，它的特性包括函数作用域和变量提升（hoisting）。</p>
        </li>
        <li>
          <p><code>let</code>: 在 ES6（即 ECMAScript 2015）中引入，<code>let</code>变量具有块级作用域，而不是<code>var</code>的函数作用域。这意味着<code>let</code>变量在声明它的块（或任何包含它的块）之外是不可见的。</p>
        </li>
        <li>
          <p><code>const</code>: 同样在 ES6 中引入，<code>const</code>变量的行为类似于<code>let</code>变量，但是一旦赋值就不能改变。这并不意味着它是不可变的，但是你不能重新分配引用。</p>
        </li>
      </ol>
      <p>这三种变量类型的主要区别在于它们的作用域（scope）、提升（hoisting）行为，以及是否可以重新赋值（re-assignment）。</p>
      <p>关于 JavaScript 变量，还有一些重要的知识点：</p>
      <ol>
        <li>
          <p><strong>变量提升（Hoisting）</strong>：在 JavaScript 中，变量和函数声明在编译阶段被"提升"到它们各自的作用域的顶部。这意味着你可以在声明之前使用变量和函数。但是，只有声明本身会被提升，初始化（如果存在）会保留在原地。对于<code>var</code>，提升意味着它会被提升到函数作用域的顶部，对于<code>let</code>和<code>const</code>，它们会被提升到块作用域的顶部，但是在声明之前的访问会导致一个暂时性死区（Temporal Dead Zone，TDZ）错误。</p>
        </li>
        <li>
          <p><strong>全局变量</strong>：在函数之外声明的变量是全局变量，它们可以在 JavaScript 代码的任何地方访问。在浏览器环境中，全局变量也是<code>window</code>对象的属性。</p>
        </li>
        <li>
          <p><strong>局部变量</strong>：在函数内部声明的变量是局部变量，它们只能在该函数内部访问。</p>
        </li>
        <li>
          <p><strong>块级作用域</strong>：<code>let</code>和<code>const</code>关键字创建的变量具有块级作用域，这意味着它们只能在最近的一组花括号（通常是一个<code>if</code>语句或<code>for</code>循环）中访问。</p>
        </li>
        <li>
          <p><strong>变量命名规则</strong>：变量名称可以包含字母、数字、美元符号($)和下划线(_)，但是不能以数字开头。此外，还有一些保留字（如<code>var</code>、<code>let</code>、<code>const</code>等）不能用作变量名。</p>
        </li>
        <li>
          <p><strong>动态类型</strong>：JavaScript 是一种动态类型语言，这意味着你可以声明一个变量来存储某种类型的值，然后再将同一变量用于存储不同类型的值。</p>
        </li>
        <li>
          <p><strong>null 和 undefined</strong>：在 JavaScript 中，<code>null</code>是一个表示无值或无对象的特殊值，它表示变量被赋予了"空"或"无"的值。<code>undefined</code>是变量未被赋值的状态。</p>
        </li>
        <li>
          <p><strong>严格模式</strong>：在严格模式下，必须明确使用<code>var</code>、<code>let</code>或<code>const</code>来声明变量。否则，如果你试图使用未声明的变量，JavaScript 将抛出错误。你可以通过在脚本的顶部添加<code>"use strict";</code>来启用严格模式。</p>
        </li>
      </ol>
      <h3 id="区别">
        区别
      </h3>
      <p><strong>var</strong></p>
      <p><code>var</code>关键字声明的变量存在变量提升（hoisting）的特性，即不论<code>var</code>出现在哪个位置，都会被提升到其作用域的顶部。但是，只有声明会被提升，赋值不会。此外，<code>var</code>没有块级作用域，它的作用域是函数作用域。如果在函数外部声明，它就是全局变量。</p>
      <p>例如：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：undefined</span>
<span class="token keyword keyword-var">var</span> x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：5</span>

<span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-var">var</span> y <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：10</span>
</code></pre><p>在上述代码中，<code>x</code>在声明前就被引用，但由于变量提升，它的值是<code>undefined</code>而不是报错。<code>y</code>虽然在<code>if</code>块中声明，但由于<code>var</code>没有块级作用域，所以<code>y</code>在<code>if</code>块外也可以访问。</p>
      <p><strong>let</strong></p>
      <p><code>let</code>关键字声明的变量具有块级作用域，即只在声明它的代码块中有效。此外，<code>let</code>不会变量提升，如果在声明前就使用这个变量，JavaScript 会抛出一个错误。同时，<code>let</code>不允许在相同作用域内重复声明同一个变量。</p>
      <p>例如：</p>
      <pre
        data-role="codeBlock"
        data-info="javascript"
        class="language-javascript javascript"
      ><code><span class="token keyword control-flow keyword-if">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword keyword-let">let</span> z <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错：z is not defined</span>

<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错：Cannot access 'a' before initialization</span>
<span class="token keyword keyword-let">let</span> a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

<span class="token keyword keyword-let">let</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword keyword-let">let</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span> <span class="token comment">// 报错：Identifier 'b' has already been declared</span>
</code></pre><p>在上述代码中，<code>z</code>在<code>if</code>块中使用<code>let</code>声明，因此在<code>if</code>块外无法访问<code>z</code>，所以会报错。变量<code>a</code>在声明前就被引用，由于<code>let</code>不会变量提升，所以会报错。最后，尝试用<code>let</code>重复声明变量<code>b</code>，也会报错。</p>
      <p>总的来说，<code>var</code>和<code>let</code>的主要区别在于作用域和变量提升：<code>var</code>有函数作用域和变量提升，而<code>let</code>有块级作用域，没有变量提升，并且不允许重复声明。</p>
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