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
          id="执行上下文与堆栈"
          ebook-toc-level-1=""
          heading="执行上下文与堆栈 "
        >
          执行上下文与堆栈
        </h1>
        <h2
          id="执行上下文"
          ebook-toc-level-2=""
          heading="执行上下文 "
        >
          执行上下文
        </h2>
        <h3
          id="是什么"
          ebook-toc-level-3=""
          heading="是什么 "
        >
          是什么
        </h3>
        <p>JavaScript 的执行上下文是一个抽象的概念，它是 JavaScript 引擎用来跟踪代码执行的环境。每次当函数被调用时，都会为其创建一个新的执行上下文。执行上下文包含了函数调用的所有相关信息，包括函数的参数、局部变量、this 指针以及函数的执行环境等信息。</p>
        <p>JavaScript 的执行上下文主要有以下三种类型：</p>
        <ol>
          <li>
            <p><strong>全局执行上下文</strong>：这是默认的、最基本的执行上下文。不在任何函数内部的代码都在全局执行上下文中。它会做两件事：创建一个全局对象（在浏览器中是 window 对象，在 Node.js 中是 global 对象），并将 this 关键字设置为这个全局对象。一个程序中只会有一个全局执行上下文。</p>
          </li>
          <li>
            <p><strong>函数执行上下文</strong>：每当一个函数被调用时，都会为该函数创建一个新的执行上下文。函数执行上下文可以有很多个，每个函数调用都有其自己的执行上下文。</p>
          </li>
          <li>
            <p><strong>Eval 函数执行上下文</strong>：执行在 eval 函数内部的代码也有其自己的执行上下文。</p>
          </li>
        </ol>
        <p>每个执行上下文都有三个主要的组成部分：</p>
        <ul>
          <li><strong>变量对象（Variable Object）</strong>：包含了函数的参数、局部变量以及函数声明。</li>
          <li><strong>作用域链（Scope Chain）</strong>：确定了哪些数据可以被函数访问。它包含了当前执行上下文的变量对象，以及所有父执行上下文的变量对象。</li>
          <li><strong>this 指针</strong>：在函数内部，this 指针通常指向函数的调用者。但是，它的值会根据函数的调用方式的不同而改变。</li>
        </ul>
        <p>JavaScript 引擎使用执行上下文栈（Execution Context Stack）来管理所有的执行上下文。当 JavaScript 开始运行时，会首先创建一个全局执行上下文并推入栈中。每次函数调用时，都会为该函数创建一个新的执行上下文并推入栈顶。当函数执行完毕后，它的执行上下文就会从栈中弹出，控制权返回到下一个执行上下文。</p>
        <h3
          id="知识点"
          ebook-toc-level-3=""
          heading="知识点 "
        >
          知识点
        </h3>
        <p>关于 JavaScript 执行上下文的知识点主要包括以下几个方面：</p>
        <ol>
          <li>
            <p><strong>执行上下文的类型</strong>：全局执行上下文、函数执行上下文和 Eval 函数执行上下文。</p>
          </li>
          <li>
            <p><strong>执行上下文的创建和管理</strong>：当 JavaScript 代码开始执行时，首先会创建一个全局执行上下文并推入执行上下文栈。之后每当函数被调用时，都会创建一个新的函数执行上下文并推入栈顶。当函数执行结束后，其执行上下文会被销毁，并从栈中弹出。</p>
          </li>
          <li>
            <p><strong>执行上下文的组成</strong>：每个执行上下文都由三个主要部分组成：变量对象（包含函数的参数、局部变量和函数声明）、作用域链（决定了哪些数据可以被函数访问）、this 指针（通常指向函数的调用者，但其值会根据函数的调用方式而改变）。</p>
          </li>
          <li>
            <p><strong>变量提升和函数提升</strong>：在 JavaScript 中，变量和函数的声明会被提升到它们所在的执行上下文的顶部。这意味着你可以在声明之前使用变量和函数，这就是所谓的 "hoisting" 现象。</p>
          </li>
          <li>
            <p><strong>闭包</strong>：闭包是 JavaScript 中的一个重要概念。当一个函数可以记住并访问其词法作用域，即使该函数在其词法作用域之外执行，这就形成了闭包。</p>
          </li>
          <li>
            <p><strong>this 关键字</strong>：在 JavaScript 中，this 是一个特殊的变量，它在每个执行上下文中都有自己的值。this 的值取决于函数的调用方式，不同的调用方式会导致 this 指向不同的对象。</p>
          </li>
        </ol>
        <p>理解这些知识点可以帮助你更深入地理解 JavaScript 的工作原理，从而编写出更高效、更可靠的代码。</p>
        <h3
          id="使用场景"
          ebook-toc-level-3=""
          heading="使用场景 "
        >
          使用场景
        </h3>
        <p>JavaScript 的执行上下文在任何 JavaScript 代码运行时都会用到，它是理解和解释 JavaScript 代码行为的关键。以下是一些具体的使用场景：</p>
        <ol>
          <li>
            <p><strong>变量和函数的提升（Hoisting）</strong>：在 JavaScript 中，变量和函数的声明会被提升到它们所在的执行上下文的顶部。理解执行上下文和提升机制能帮助你避免因为变量和函数提升导致的错误。</p>
          </li>
          <li>
            <p><strong>函数调用和 this 绑定</strong>：在函数执行时，会创建一个新的执行上下文，并确定 this 的值。理解执行上下文和 this 绑定机制能帮助你更好地理解和使用 this 关键字。</p>
          </li>
          <li>
            <p><strong>闭包</strong>：闭包是指那些能够访问自己作用域外变量的函数，这是因为函数的执行上下文在函数执行完后并未销毁，还能保留在内存中。理解执行上下文能帮助你更好地理解和使用闭包。</p>
          </li>
          <li>
            <p><strong>代码的调试和优化</strong>：理解执行上下文和作用域链能帮助你更好地调试和优化代码，例如，你可以通过减少作用域链的长度来提高代码的执行速度。</p>
          </li>
          <li>
            <p><strong>异步编程</strong>：在 JavaScript 的异步编程中，执行上下文和事件循环（Event Loop）有着密切的关系。理解执行上下文能帮助你更好地理解和使用 JavaScript 的异步编程。</p>
          </li>
          <li>
            <p><strong>模块化</strong>：在模块化编程中，每个模块都有其自己的执行上下文，模块内部的变量不会污染全局作用域。理解执行上下文能帮助你更好地理解和使用 JavaScript 的模块系统。</p>
          </li>
        </ol>
        <p>总的来说，理解执行上下文对于深入理解 JavaScript 的运行机制和编写高质量的 JavaScript 代码是非常重要的。</p>
        <h2
          id="堆栈"
          ebook-toc-level-2=""
          heading="堆栈 "
        >
          堆栈
        </h2>
        <h3
          id="是什么-1"
          ebook-toc-level-3=""
          heading="是什么 "
        >
          是什么
        </h3>
        <p>在 JavaScript 中，堆（Heap）和栈（Stack）是两种重要的数据结构，它们用于存储和管理数据。</p>
        <ul>
          <li>
            <p><strong>堆（Heap）</strong>：堆是一个运行时用于分配数据的区域。它通常用于存储复杂的数据类型，如对象和函数。在 JavaScript 中，当你创建一个对象或一个函数，这些数据就会被存储在堆中。堆中的数据没有严格的存储和访问顺序，它们的大小也不固定，这使得访问堆中的数据相比栈中的数据要慢一些。但是，堆的大小远大于栈，因此可以存储大量的数据。</p>
          </li>
          <li>
            <p><strong>栈（Stack）</strong>：栈是另一种运行时用于存储数据的区域，但它主要用于存储和管理函数调用中的信息，包括局部变量、参数和返回地址。栈中的数据是按照严格的后入先出（LIFO）顺序进行存储和访问的，这使得数据的存取速度非常快。然而，栈的大小通常比堆小得多，因此不能存储大量的数据。</p>
          </li>
        </ul>
        <p>在 JavaScript 的执行上下文中，堆和栈起着至关重要的作用。当 JavaScript 代码执行时，全局执行上下文首先被创建并放入执行上下文栈中。然后，堆用于存储全局变量和函数，而栈用于跟踪函数调用和管理局部变量。每当一个函数被调用，一个新的执行上下文就会被创建并放入栈中，同时函数的局部变量和参数也会被存储在栈中。当函数执行完毕，其执行上下文以及相关的局部变量和参数就会从栈中被移除。</p>
        <h3
          id="知识点-1"
          ebook-toc-level-3=""
          heading="知识点 "
        >
          知识点
        </h3>
        <p>JavaScript 的堆和栈的知识点包括：</p>
        <ol>
          <li>
            <p><strong>堆和栈的定义和区别</strong>：堆是用于存储复杂的数据类型（如对象和函数）的内存区域，而栈主要用于存储和管理函数调用的信息（如局部变量、参数和返回地址）。堆中的数据没有严格的存取顺序，大小也不固定，而栈中的数据遵循后入先出（LIFO）的原则，大小通常固定。</p>
          </li>
          <li>
            <p><strong>堆和栈在 JavaScript 执行上下文中的角色</strong>：在 JavaScript 的执行上下文中，堆和栈起着至关重要的作用。堆用于存储全局变量和函数，而栈用于跟踪函数调用和管理局部变量。</p>
          </li>
          <li>
            <p><strong>函数调用和执行上下文栈</strong>：每当一个函数被调用，一个新的执行上下文就会被创建并放入栈中，同时函数的局部变量和参数也会被存储在栈中。当函数执行完毕，其执行上下文以及相关的局部变量和参数就会从栈中被移除。</p>
          </li>
          <li>
            <p><strong>内存管理</strong>：理解堆和栈的工作原理有助于更好地理解 JavaScript 的内存管理。例如，知道什么类型的数据存储在堆中，什么类型的数据存储在栈中，可以帮助我们编写更高效的代码，并避免内存泄漏。</p>
          </li>
          <li>
            <p><strong>垃圾收集</strong>：JavaScript 使用垃圾收集机制来自动释放不再需要的对象占用的内存。理解堆和栈的工作原理可以帮助我们理解和优化垃圾收集过程。</p>
          </li>
        </ol>
        <p>这些知识点为 JavaScript 开发者提供了更深入的理解，有助于编写更高效、更可靠的代码。</p>
        <h3
          id="使用场景-1"
          ebook-toc-level-3=""
          heading="使用场景 "
        >
          使用场景
        </h3>
        <p>堆和栈在 JavaScript 的执行过程中有各自的使用场景：</p>
        <ol>
          <li>
            <p><strong>堆（Heap）的使用场景</strong>：</p>
            <ul>
              <li>存储对象：当你在 JavaScript 中创建一个对象时，这个对象就会被存储在堆中。这包括直接使用字面量创建的对象，也包括通过构造函数创建的对象。</li>
              <li>存储函数：当你在 JavaScript 中定义一个函数时，这个函数也会被存储在堆中。这包括函数体的代码，以及函数的作用域链。</li>
              <li>存储复杂的数据结构：除了对象和函数，其他复杂的数据结构，如数组和 Map，也会被存储在堆中。</li>
            </ul>
          </li>
          <li>
            <p><strong>栈（Stack）的使用场景</strong>：</p>
            <ul>
              <li>函数调用：每次调用函数时，JavaScript 会为该函数创建一个新的执行上下文，并将其推入执行上下文栈的顶部。这个执行上下文包含了函数的参数、局部变量、返回地址等信息。</li>
              <li>存储基本类型的值：在 JavaScript 中，基本类型（如 Number、String、Boolean、Undefined、Null 和 Symbol）的值会直接存储在栈中。</li>
              <li>控制程序执行流程：栈中存储的返回地址可以用于控制程序的执行流程。例如，当一个函数执行完毕后，JavaScript 会使用栈顶的返回地址来确定下一步应该执行哪段代码。</li>
            </ul>
          </li>
        </ol>
        <p>总的来说，堆主要用于存储复杂的数据类型，而栈主要用于跟踪函数调用和存储基本类型的值。理解这些使用场景可以帮助我们更好地理解 JavaScript 的执行过程，以及如何优化代码的性能。</p>
        <h2
          id="执行过程"
          ebook-toc-level-2=""
          heading="执行过程 "
        >
          执行过程
        </h2>
        <p>JavaScript 执行上下文（Execution Context）和执行堆栈（Execution Stack）是理解 JavaScript 代码执行过程中的关键概念。下面我将分别解释这两个概念，然后描述它们是如何共同工作的。</p>
        <ol>
          <li>
            <p>执行上下文（Execution Context）：在 JavaScript 中，执行上下文是一个抽象的概念，它表示 JavaScript 引擎当前执行的环境。每当 JavaScript 代码在一个环境中执行时，都会创建一个执行上下文。执行上下文包含了变量、函数声明、this 引用，以及控制代码的执行流程。在 JavaScript 中，有三种类型的执行上下文：全局执行上下文、函数执行上下文和 Eval 函数执行上下文。</p>
          </li>
          <li>
            <p>执行堆栈（Execution Stack）：执行堆栈，也被称为调用堆栈，是用来存储在代码执行过程中创建的所有执行上下文的数据结构。JavaScript 引擎使用执行堆栈来处理函数调用和执行上下文的管理。当一个函数被调用时，引擎会为该函数创建一个新的执行上下文并将其推入堆栈的顶部。当函数执行完毕后，其对应的执行上下文会从堆栈中弹出，控制权回到下一个执行上下文。</p>
          </li>
        </ol>
        <p>执行堆栈和执行上下文的交互过程如下：</p>
        <ol>
          <li>
            <p>当 JavaScript 引擎首次读取脚本时，它会创建一个全局执行上下文并推入执行堆栈。</p>
          </li>
          <li>
            <p>当引擎遇到一个函数调用时，它会为该函数创建一个新的执行上下文，并将其推入执行堆栈的顶部。</p>
          </li>
          <li>
            <p>JavaScript 引擎会处理堆栈顶部的执行上下文。处理包括初始化变量、函数声明、参数，以及确定<code>this</code>的值。</p>
          </li>
          <li>
            <p>当顶部的执行上下文（当前函数）执行完毕并返回结果后，该执行上下文会从堆栈中弹出，控制权回到下一个执行上下文（即之前的函数或全局环境）。</p>
          </li>
          <li>
            <p>这个过程会一直持续，直到执行堆栈变为空，即所有的代码执行完毕。</p>
          </li>
        </ol>
        <p>这就是 JavaScript 的执行上下文和执行堆栈的基本概念及其交互过程。理解这些概念对于理解 JavaScript 的执行模型和异步行为非常重要。</p>
      </div>
      <div v-show="activeName === 'second'">
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