<template>
  <div
    class="article-container"
    :class="{'md-sidebar-expand': !$store.state.isMdCollapse}"
  >
    <div class="crossnote markdown-preview">
      <h1
        id="运算符与控制流"
        ebook-toc-level-1=""
        heading="运算符与控制流 "
      >
        运算符与控制流
      </h1>
      <p>好的，我会详细介绍 JavaScript 的运算符和控制流。</p>
      <h2
        id="运算符"
        ebook-toc-level-2=""
        heading="运算符 "
      >
        运算符
      </h2>
      <p>JavaScript 中的运算符主要可以分为以下几类：</p>
      <ol>
        <li>
          <p><strong>赋值运算符</strong>：如 <code>=</code>，<code>+=</code>，<code>-=</code>，<code>*=</code>，<code>/=</code>，<code>%=</code>，<code>**=</code>等，用于赋值。</p>
        </li>
        <li>
          <p><strong>算术运算符</strong>：如 <code>+</code>，<code>-</code>，<code>*</code>，<code>/</code>，<code>%</code>，<code>++</code>，<code>--</code>等，用于进行基本的数学运算。</p>
        </li>
        <li>
          <p><strong>比较运算符</strong>：如 <code>==</code>，<code>===</code>，<code>!=</code>，<code>!==</code>，<code>&gt;</code>，<code>&lt;</code>，<code>&gt;=</code>，<code>&lt;=</code>等，用于进行比较，返回一个布尔值。</p>
        </li>
        <li>
          <p><strong>逻辑运算符</strong>：如 <code>&amp;&amp;</code>（与），<code>||</code>（或），<code>!</code>（非），用于进行逻辑操作。</p>
        </li>
        <li>
          <p><strong>位运算符</strong>：如 <code>&amp;</code>（按位与），<code>|</code>（按位或），<code>^</code>（按位异或），<code>~</code>（按位非），<code>&lt;&lt;</code>（左移），<code>&gt;&gt;</code>（右移），<code>&gt;&gt;&gt;</code>（无符号右移）等，用于进行位操作。</p>
        </li>
        <li>
          <p><strong>三元运算符</strong>：<code>? :</code>，用于进行条件判断。</p>
        </li>
        <li>
          <p><strong>类型运算符</strong>：如 <code>typeof</code>，<code>instanceof</code>等，用于判断数据类型或实例。</p>
        </li>
        <li>
          <p><strong>其他运算符</strong>：如 <code>void</code>，<code>delete</code>，<code>in</code>等。</p>
        </li>
      </ol>
      <p>以下是一些特别要注意的点：</p>
      <ul>
        <li><code>==</code>和<code>===</code>的区别：<code>==</code>会进行类型转换，<code>===</code>不会进行类型转换，也被称为严格等于。</li>
        <li><code>++</code>和<code>--</code>可以放在变量前也可以放在变量后，放在前面叫做前置运算，放在后面叫做后置运算，两者在赋值操作时会有不同的结果。</li>
        <li><code>&amp;&amp;</code>和<code>||</code>具有短路效应，即在确定结果后，不会再执行后续的操作。</li>
        <li>位运算符只对整数有效，进行操作时，JavaScript 会把数字转换为 32 位整数，并且返回结果也是 32 位整数。</li>
        <li><code>typeof</code>返回的是字符串，表示类型，<code>instanceof</code>用来检测构造函数的<code>prototype</code>属性是否出现在对象的原型链中的任何位置。</li>
        <li><code>void</code>运算符的主要用途是得到<code>undefined</code>，以及在链接中执行 JavaScript 代码但不返回超链接。</li>
        <li><code>delete</code>运算符用于删除对象的属性，删除成功或者删除的属性不存在时返回<code>true</code>，删除失败时返回<code>false</code>。</li>
        <li><code>in</code>运算符用于检查对象是否含有某个属性，如果对象本身或者原型链上有这个属性，返回<code>true</code>，否则返回<code>false</code>。</li>
      </ul>
      <h2
        id="控制流"
        ebook-toc-level-2=""
        heading="控制流 "
      >
        控制流
      </h2>
      <p>JavaScript 的控制流有以下几个主要的知识点：</p>
      <ol>
        <li>
          <p><strong>条件语句</strong>：条件语句用于基于不同的条件来执行不同的代码块。</p>
          <ul>
            <li><code>if</code>语句：只有当指定条件为真时，使用这个语句来执行代码。</li>
            <li><code>if...else</code>语句：当条件为真时执行代码，当条件为假时执行其他代码。</li>
            <li><code>if...else if...else</code>语句：用于指定多个要被执行的条件。</li>
            <li><code>switch</code>语句：用于选择多个要被执行的代码块。</li>
          </ul>
        </li>
        <li>
          <p><strong>循环语句</strong>：循环可以执行一段代码块多次。</p>
          <ul>
            <li><code>for</code>循环：在代码块已经被指定的次数执行后停止。</li>
            <li><code>for/in</code>循环：循环遍历对象的属性。</li>
            <li><code>for/of</code>循环：循环遍历可迭代对象（例如数组，字符串，NodeList 等）的值。</li>
            <li><code>while</code>循环：只要指定的条件为真，就会执行代码块。</li>
            <li><code>do...while</code>循环：会先执行一次代码块，然后只要指定的条件为真，就会重复执行代码块。</li>
          </ul>
        </li>
        <li>
          <p><strong>跳转语句</strong>：改变正常的控制流。</p>
          <ul>
            <li><code>break</code>语句：用于跳出循环或者 switch 语句。</li>
            <li><code>continue</code>语句：跳过循环中的一次迭代。</li>
            <li><code>return</code>语句：结束函数的执行，并返回一个值。</li>
            <li><code>throw</code>语句：抛出（生成）错误。</li>
          </ul>
        </li>
        <li>
          <p><strong>错误处理语句</strong>：</p>
          <ul>
            <li><code>try...catch</code>语句：标记要尝试的语句块，并指定一个错误发生时的响应。</li>
          </ul>
        </li>
      </ol>
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