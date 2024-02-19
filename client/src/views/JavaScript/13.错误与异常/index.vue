<template>
  <div
    class="article-container"
    :class="{'md-sidebar-expand': !$store.state.isMdCollapse}"
  >
    <div class="crossnote markdown-preview">
      <h1 id="错误与异常">
        错误与异常
      </h1>
      <p>JavaScript 中的错误和异常处理是确保程序稳定性和用户体验的重要方面。以下是一些关于 JavaScript 错误和异常处理的关键知识点：</p>
      <ol>
        <li>
          <p><strong>错误类型</strong>:</p>
          <ul>
            <li><code>SyntaxError</code>：代码中的语法错误。</li>
            <li><code>ReferenceError</code>：引用了一个不存在的变量。</li>
            <li><code>TypeError</code>：在错误的数据类型上执行了操作。</li>
            <li><code>RangeError</code>：数值变量或参数超出其有效范围。</li>
            <li><code>EvalError</code>：与 <code>eval()</code> 函数有关的错误（在最新的 JavaScript 版本中不常见）。</li>
            <li><code>URIError</code>：全局 <code>URI</code> 处理函数被误用时抛出。</li>
            <li><code>Error</code>：其他错误的通用类型。</li>
          </ul>
        </li>
        <li>
          <p>
            <strong>throw 语句</strong>:<br>
            使用 <code>throw</code> 语句可以抛出自定义错误。你可以抛出数字、字符串、布尔值或对象。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword control-flow keyword-throw">throw</span> <span class="token string">"Error2"</span><span class="token punctuation">;</span> <span class="token comment">// 抛出一个字符串错误</span>
<span class="token keyword control-flow keyword-throw">throw</span> <span class="token number">42</span><span class="token punctuation">;</span> <span class="token comment">// 抛出一个数字错误</span>
<span class="token keyword control-flow keyword-throw">throw</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 抛出一个布尔错误</span>
<span class="token keyword control-flow keyword-throw">throw</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"Something went wrong"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 抛出一个错误对象</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>try...catch 语句</strong>:<br>
            <code>try</code> 代码块包含可能会抛出错误的代码。<code>catch</code> 代码块会捕获到 <code>try</code> 代码块中抛出的任何错误。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword control-flow keyword-try">try</span> <span class="token punctuation">{</span>
  <span class="token comment">// 尝试执行的代码</span>
  <span class="token function">nonExistentFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword control-flow keyword-catch">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 处理错误的代码</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">error</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span><span class="token property-access">message</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>finally 语句</strong>:<br>
            <code>finally</code> 代码块将在 <code>try</code> 和 <code>catch</code> 代码块之后执行，无论是否有异常抛出。这通常用于清理代码，比如关闭文件流或数据库连接。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword control-flow keyword-try">try</span> <span class="token punctuation">{</span>
  <span class="token comment">// 尝试执行的代码</span>
<span class="token punctuation">}</span> <span class="token keyword control-flow keyword-catch">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 处理错误的代码</span>
<span class="token punctuation">}</span> <span class="token keyword control-flow keyword-finally">finally</span> <span class="token punctuation">{</span>
  <span class="token comment">// 最终执行的代码</span>
<span class="token punctuation">}</span>
</code></pre>
        </li>
        <li>
          <p><strong>错误对象属性</strong>:</p>
          <ul>
            <li><code>message</code>：提供关于错误的描述性消息。</li>
            <li><code>name</code>：错误的名称（例如 <code>"ReferenceError"</code>）。</li>
            <li><code>stack</code>：一个代表代码执行堆栈的字符串，这有助于调试。</li>
          </ul>
        </li>
        <li>
          <p>
            <strong>自定义错误</strong>:<br>
            你可以通过扩展 <code>Error</code> 类来创建自定义错误类型。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token keyword keyword-class">class</span> <span class="token class-name">CustomError</span> <span class="token keyword keyword-extends">extends</span> <span class="token class-name">Error</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-super">super</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span><span class="token property-access">name</span> <span class="token operator">=</span> <span class="token string">"CustomError"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>错误事件</strong>:<br>
            在浏览器中，未捕获的异常将触发 <code>window</code> 对象上的 <code>error</code> 事件。你可以监听这个事件来全局处理未捕获的错误。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token dom variable">window</span><span class="token punctuation">.</span><span class="token method function property-access">addEventListener</span><span class="token punctuation">(</span><span class="token string">"error"</span><span class="token punctuation">,</span> <span class="token keyword keyword-function">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 全局错误处理</span>
  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token property-access">message</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </li>
        <li>
          <p>
            <strong>Promises 和 async/await 的错误处理</strong>:<br>
            对于基于 Promise 的异步代码，你应该使用 <code>.catch()</code> 方法或者在 <code>async/await</code> 函数中使用 <code>try...catch</code> 结构来处理错误。
          </p>
          <pre
            data-role="codeBlock"
            data-info="javascript"
            class="language-javascript javascript"
          ><code><span class="token comment">// 使用 .catch()</span>
<span class="token function">doSomethingAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token method function property-access">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理结果</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token keyword control-flow keyword-catch">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token arrow operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理错误</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 使用 async/await</span>
<span class="token keyword keyword-async">async</span> <span class="token keyword keyword-function">function</span> <span class="token function">asyncFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword control-flow keyword-try">try</span> <span class="token punctuation">{</span>
    <span class="token keyword keyword-let">let</span> result <span class="token operator">=</span> <span class="token keyword control-flow keyword-await">await</span> <span class="token function">doSomethingAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 处理结果</span>
  <span class="token punctuation">}</span> <span class="token keyword control-flow keyword-catch">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理错误</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
        </li>
      </ol>
      <p>理解和能够有效地处理错误和异常是成为一名熟练的 JavaScript 开发者的重要组成部分。这不仅可以帮助你编写更加健壮的代码，还可以提高用户体验和系统的可靠性。</p>
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