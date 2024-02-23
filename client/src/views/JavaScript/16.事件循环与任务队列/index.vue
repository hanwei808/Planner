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
        <h1 id="事件循环与任务队列">
          事件循环与任务队列
        </h1>
        <h2 id="是什么">
          是什么
        </h2>
        <p>JavaScript 是一种单线程语言，这意味着它一次只能执行一个任务。为了克服这个限制并允许 JavaScript 非阻塞地运行，JavaScript 引擎使用了事件循环和任务队列的概念。</p>
        <p><strong>事件循环</strong>：</p>
        <p>事件循环是 JavaScript 内部的一个无限循环，它用于监视任务队列并执行任务队列中的回调。事件循环的主要任务是查看调用栈和任务队列。如果调用栈是空的，它会从任务队列中取出第一个任务并执行。如果调用栈中已经有其他任务在运行，那么事件循环会等待，直到调用栈为空。</p>
        <p><strong>任务队列</strong>：</p>
        <p>任务队列是一个任务列表，这些任务已经完成了它们的操作，但正在等待被事件循环取出并进入调用栈以执行它们的回调。例如，当我们使用 setTimeout 设置一个定时器时，定时器的回调会在指定的时间后放入任务队列，等待事件循环将其取出并放入调用栈。</p>
        <p>在 JavaScript 中，有两种类型的任务队列：宏任务队列和微任务队列。宏任务包括脚本本身、setTimeout、setInterval、setImmediate、I/O、UI 渲染等。微任务包括 Promise、MutationObserver、process.nextTick 等。</p>
        <p>在每个事件循环迭代中，事件循环首先会查看宏任务队列，如果宏任务队列不为空，那么它会将队列中的第一个任务取出并执行。然后，事件循环会查看微任务队列，执行所有的微任务。然后再次查看宏任务队列，这个过程会一直重复。</p>
        <p>这就是 JavaScript 的事件循环和任务队列。</p>
        <h2 id="知识点">
          知识点
        </h2>
        <p>这段文本涉及到 JavaScript 中的事件循环和任务队列的概念。关键知识点包括：</p>
        <ol>
          <li>JavaScript 是单线程语言，一次只能执行一个任务。</li>
          <li>为了克服单线程的限制，JavaScript 引擎使用了事件循环和任务队列的概念。</li>
          <li>事件循环是一个无限循环，用于监视任务队列并执行任务队列中的回调。</li>
          <li>任务队列是一个任务列表，包含已经完成操作但等待执行回调的任务。</li>
          <li>在 JavaScript 中，有两种类型的任务队列：宏任务队列和微任务队列。</li>
          <li>宏任务队列包括脚本本身、setTimeout、setInterval、setImmediate、I/O、UI 渲染等。</li>
          <li>微任务队列包括 Promise、MutationObserver、process.nextTick 等。</li>
          <li>在每个事件循环迭代中，事件循环首先会查看宏任务队列，执行队列中的第一个任务，然后查看微任务队列，执行所有微任务，然后再次查看宏任务队列，这个过程会一直重复。</li>
        </ol>
        <p>这些知识点涵盖了理解 JavaScript 中事件循环和任务队列的基本概念和机制。</p>
        <h2 id="运行机制">
          运行机制
        </h2>
        <p>JavaScript 的事件循环和任务队列的运行机制是一种设计，用以协调单线程环境下的异步行为，确保非阻塞执行。这个机制通过以下几个步骤来运作：</p>
        <ol>
          <li>
            <p><strong>执行全局脚本</strong>：首先，JavaScript 引擎执行全局脚本代码。</p>
          </li>
          <li>
            <p><strong>调用栈（Call Stack）</strong>：JavaScript 中的所有函数调用都会被推入调用栈。调用栈是一个后进先出（LIFO）的结构，用于跟踪程序中的函数调用。当前执行的函数位于栈顶。当一个函数执行完成后，它会从栈顶被弹出，控制权回到栈中的下一个函数。</p>
          </li>
          <li>
            <p><strong>宏任务（Macro Task）队列</strong>：当一个异步事件（如 setTimeout、setInterval、I/O 操作等）被触发时，它的回调函数将被放入宏任务队列。这些任务会等待当前执行栈清空，并等待当前正在执行的微任务（如果有的话）完成后，才会被执行。</p>
          </li>
          <li>
            <p><strong>微任务（Micro Task）队列</strong>：当 Promise 操作解决（resolve）或拒绝（reject）时，它的 then 或 catch 回调会被放入微任务队列。微任务也会在调用栈清空后立即执行，但是会在下一个宏任务之前完成。这意味着微任务的优先级高于宏任务。</p>
          </li>
          <li>
            <p><strong>事件循环（Event Loop）</strong>：</p>
            <ul>
              <li><strong>检查调用栈</strong>：如果调用栈为空，事件循环将移动到任务队列。</li>
              <li><strong>执行宏任务</strong>：从宏任务队列中取出第一个任务，将其回调推入调用栈执行。一次事件循环迭代中只执行一个宏任务。</li>
              <li><strong>执行所有微任务</strong>：执行完宏任务后，事件循环会检查微任务队列。如果有微任务，它们会被依次取出并执行，直到微任务队列为空。</li>
              <li><strong>渲染 UI</strong>（如果需要的话）：在适当的时候，浏览器会处理 UI 渲染工作。</li>
              <li><strong>重复</strong>：完成当前迭代后，事件循环会回到检查调用栈是否为空的步骤，然后继续下一个迭代。</li>
            </ul>
          </li>
        </ol>
        <p>通过这个机制，JavaScript 能够在保持单线程的同时，实现异步编程，允许代码非阻塞地执行，提高了应用程序的响应性和性能。</p>
      </div>
      <div v-show="activeName === 'second'">
        <iframe
          src="//player.bilibili.com/player.html?aid=278117938&bvid=BV1Vw411u7Cu&cid=1322794350&p=1"
          scrolling="no"
          border="0"
          frameborder="no"
          framespacing="0"
          allowfullscreen="true"
          width="500"
          height="800"
        />

        <inline-svg :src="svg" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue';
import type { TabsPaneContext } from 'element-plus'
import mdSidebar from '@/components/mdSidebar.vue';

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