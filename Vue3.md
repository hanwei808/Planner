# Vue3

## Vue3 原理

Vue.js 是一个用于构建用户界面的渐进式 JavaScript 框架。Vue 3 是这个框架的最新主要版本，它引入了许多新特性和优化，包括性能提升、组合式 API、更好的 TypeScript 集成等。以下是 Vue 3 的一些核心原理和特性：

1. **响应式系统**：
   Vue 3 使用了一个全新的响应式系统。这个系统基于 ES6 的 `Proxy` 对象，允许 Vue 直接监控对象和数组的变化，而不需要像 Vue 2 那样使用 `Object.defineProperty`。这样的改变带来了更好的性能和更直观的响应式数据绑定。

2. **组合式 API**：
   Vue 3 引入了组合式 API（Composition API），这是一套新的基于函数的 API。它允许开发者更灵活地组织代码，尤其是在处理大型组件或复杂的逻辑时。通过 `setup` 函数，可以使用 `ref`、`reactive`、`computed`、`watch` 等来创建和管理响应式状态。

3. **模板编译优化**：
   Vue 3 的模板编译器进行了重写，它现在可以更智能地编译模板。比如，它能够静态分析模板中的静态节点和动态节点，从而减少运行时的工作量。这种静态提升(static hoisting)和碎片化(patch flagging)帮助减少了虚拟 DOM 的渲染成本。

4. **虚拟 DOM 重写**：
   Vue 3 的虚拟 DOM(Virtual DOM)也进行了重写，它现在更快，并且内存占用更小。新的虚拟 DOM 实现了基于树的动态节点优化，这意味着更新过程中，Vue 可以更快地确定哪些部分需要重新渲染。

5. **片段(Fragments)**：
   在 Vue 2 中，每个组件必须有一个单独的根元素。Vue 3 允许组件有多个根节点，也称为片段。这简化了组件的结构，允许更自然的 HTML 结构布局。

6. **更好的 TypeScript 集成**：
   Vue 3 从一开始就考虑了 TypeScript 的集成。它的代码是用 TypeScript 编写的，这意味着 Vue 3 提供了更好的类型推断和更强大的类型支持。

7. **自定义渲染器 API**：
   Vue 3 提供了一个可以创建自定义渲染器的 API。这意味着你可以使用 Vue 的响应式系统来创建跨平台的应用程序，比如使用同样的组件和响应式逻辑来渲染到 Canvas 或 WebGL。

8. **更好的错误处理**：
   Vue 3 引入了更好的错误处理机制，它允许开发者更容易地捕获和处理渲染和生命周期钩子中的错误。

9. **多根组件和 Teleport**：
   多根组件简化了组件的结构，而 Teleport 是一个新的内置组件，它允许你将子节点渲染到 DOM 树的任意位置，而不是局限于父组件的 DOM 结构内。

这些只是 Vue 3 的一些核心特性和原理。Vue 3 的设计理念是提供更灵活的组件构建方式、更高效的更新机制和更好的开发体验。随着其生态系统的不断成熟，Vue 3 正在成为现代前端开发的一个强大工具。

## Vue3 Proxy 原理

Vue.js 3.0 版本引入了一个新的响应式系统，基于 ES6 的 `Proxy` 对象来替代之前版本的 `Object.defineProperty`。`Proxy` 对象可以在对象的操作上添加自定义行为，使得 Vue.js 能够在数据变动时自动更新视图。

下面是 `Proxy` 的基本用法：

```javascript
let obj = { a: 1 };

let proxy = new Proxy(obj, {
  get(target, property) {
    console.log(`Getting ${property}`);
    return target[property]; // 返回原对象的属性值
  },
  set(target, property, value) {
    console.log(`Setting ${property} to ${value}`);
    target[property] = value; // 更新原对象的属性值
    return true; // 表示设置成功
  },
});

proxy.a = 2; // 输出: Setting a to 2
console.log(proxy.a); // 输出: Getting a  2
```

在这个例子中，我们创建了一个 `obj` 对象的代理 `proxy`。我们在 `get` 和 `set` 操作上添加了自定义行为，分别在获取和设置属性值时输出一条消息。

Vue.js 3.0 使用 `Proxy` 的方式类似，但更复杂。在 Vue.js 中，`Proxy` 用于实现数据的响应式。当你在 Vue 组件的 `data` 选项中返回一个对象时，Vue 会用 `Proxy` 包装这个对象，然后在 `get` 和 `set` 操作上添加自定义行为。在 `get` 操作中，Vue 会把依赖这个属性的 watcher 添加到一个依赖列表中；在 `set` 操作中，Vue 会遍历这个依赖列表，然后重新计算和更新这些 watcher。

这就是 Vue.js 3.0 使用 `Proxy` 实现响应式的基本原理。与 `Object.defineProperty` 相比，`Proxy` 的优势在于它可以代理整个对象，而不是单个属性，而且它可以拦截更多的操作，比如删除属性、添加新属性等。这使得 Vue.js 的响应式系统更强大，更灵活。

## Vue2 和 Vue3 的区别

1. **性能**:

   - Vue 3 提供了更好的性能，据报道，它的渲染速度比 Vue 2 快 1.3 到 2 倍，而且内存使用量也减少了大约 50%。

2. **组合式 API**:

   - Vue 3 引入了一个新的组合式 API（Composition API），这是一个灵活的函数式 API，允许用户更好地组织和重用代码逻辑。这与 Vue 2 中的选项式 API（Options API）形成对比，后者通过定义一个包含 data、methods、computed 等属性的对象来组织组件代码。

3. **响应式系统**:

   - Vue 3 使用 Proxy 作为其响应式系统的基础，这是 ES2015 中引入的一个特性，它允许 Vue 跟踪对象和数组的变化，而不需要定义 setter/getter 方法，这是 Vue 2 中 Object.defineProperty 的方法。

4. **TypeScript 支持**:

   - Vue 3 从一开始就考虑了对 TypeScript 的支持，提供了更好的集成。Vue 2 也可以与 TypeScript 一起使用，但集成不是那么顺畅。

5. **片段（Fragments）**:

   - Vue 3 支持片段，这意味着组件可以有多个根节点。而在 Vue 2 中，每个组件必须有一个单独的根节点。

6. **自定义渲染器 API**:

   - Vue 3 提供了一个自定义渲染器 API，允许开发者创建自定义的渲染器，这在 Vue 2 中是不可能的。

7. **更好的组件挂载和卸载控制**:

   - Vue 3 提供了更多的生命周期钩子，比如`onMounted`、`onUnmounted`，这些都是作为 Composition API 的一部分。

8. **全局 API 的变化**:

   - Vue 3 中，全局 API 和全局配置发生了变化，许多全局 API 现在需要通过应用实例来使用，以避免污染全局作用域。

9. **树摇（Tree-shaking）**:

   - Vue 3 设计时考虑到了树摇支持，这意味着如果你不使用某些特性或组件，它们将不会被包含在最终的构建中，从而减少了应用程序的大小。

10. **新的组件**:

    - Vue 3 引入了一些新的内置组件，如`<Suspense>`，以及新的功能，如异步组件的加载。

11. **更好的错误处理**:
    - Vue 3 提供了改进的错误处理能力，包括一个新的错误处理钩子`onErrorCaptured`。

这些是 Vue 2 和 Vue 3 之间的一些关键区别。Vue 3 的许多改进都是为了提高性能、增加灵活性和改善开发体验。然而，由于 Vue 3 的 API 和行为在某些方面与 Vue 2 不同，因此需要一些努力来迁移现有的 Vue 2 应用程序。

## Vite 原理

Vite 是一个由尤雨溪创建的现代化前端构建工具，它利用了现代浏览器支持的原生 ES 模块（ESM）特性来提供快速的开发环境启动。与传统的构建工具（如 Webpack）相比，Vite 在开发模式下提供了更快的服务器启动和模块热更新（HMR）。以下是 Vite 的主要实现原理：

1. **基于 ESM 的开发服务器**:

   - Vite 在开发模式下使用原生 ES 模块加载，这意味着它不需要预先打包模块。当浏览器请求一个文件时，Vite 会即时地将其作为一个模块提供给浏览器。这种按需编译的方式避免了传统构建工具中的初始化打包时间。

2. **快速的热模块替换（HMR）**:

   - Vite 对 HMR 的实现是高效的，因为它只需要重新请求改变了的模块，而不是整个应用程序。这是由于 Vite 管理了一个依赖图，可以精确地知道哪些模块依赖了被更改的文件。

3. **预构建依赖**:

   - 尽管 Vite 在开发时避免了打包，但对于 node_modules 中的第三方依赖，Vite 使用预构建步骤来优化它们。这是因为许多 NPM 包是用 CommonJS 或其他非 ESM 格式发布的，这些格式不适合在浏览器中直接使用。Vite 会在第一次运行时将这些依赖转换为 ESM，并缓存起来以提高后续启动的速度。

4. **插件系统**:

   - Vite 提供了一个丰富的插件接口，允许开发者扩展其功能。这些插件可以利用 Vite 的钩子系统在构建生命周期的不同阶段进行介入，例如实现自定义的加载逻辑或构建步骤。

5. **生产构建**:

   - 虽然 Vite 在开发模式下不打包应用程序，但它使用 Rollup 来进行生产构建。Rollup 是一个高效的打包器，专门用于生成尽可能小的静态资源，以便部署到生产环境。

6. **优化加载**:

   - Vite 对生成的代码进行了优化，以最大化 HTTP/2 的潜力。通过代码拆分（code splitting）、懒加载（lazy loading）和有效地利用缓存来减少加载时间。

7. **SSR 和静态站点生成**:
   - Vite 还支持服务器端渲染（SSR）和静态站点生成（SSG），这让它能够为更广泛的应用场景提供服务。

Vite 的这些特性和实现原理共同作用，大大提高了开发者的开发效率，特别是在大型项目和复杂应用程序中。通过利用现代浏览器的原生模块功能，Vite 实现了快速的重载和高效的构建过程，这使得它成为现代前端开发的有力工具。

## ref 和 reactive

在 Vue 3 中，`ref` 和 `reactive` 都是用来创建响应式数据的方法，但它们在使用方式和一些细节上有所不同。

`ref` 用于创建一个响应式的值，返回的是一个响应式对象，其 `.value` 属性指向这个响应式的值。这意味着你需要通过 `.value` 属性来获取或设置这个值。这在处理基本数据类型（如数字、字符串）时特别有用，因为在 JavaScript 中，基本数据类型是不可变的。

```javascript
import { ref } from "vue";

let count = ref(0);
console.log(count.value); // 0

count.value++;
console.log(count.value); // 1
```

`reactive` 则用于创建一个响应式的对象。返回的是一个新的响应式对象，这个对象和原对象有相同的属性和值，但它们是响应式的。你可以像操作普通对象一样操作这个响应式对象。

```javascript
import { reactive } from "vue";

let state = reactive({ count: 0 });
console.log(state.count); // 0

state.count++;
console.log(state.count); // 1
```

这两种方法在大多数情况下都可以交换使用，但有一些差异需要注意：

1. `ref` 在模板中使用时，不需要 `.value`，但在 JavaScript 代码中需要。`reactive` 无论在哪里都不需要 `.value`。

2. `ref` 返回的是一个响应式对象，而 `reactive` 返回的是一个响应式的代理对象。这意味着，如果你需要比较两个 `reactive` 对象是否相等，可能会遇到问题，因为它们可能指向同一个原对象，但代理对象是不同的。在这种情况下，你可以使用 `toRefs` 或 `isRef` 这样的工具函数。

3. `reactive` 可以处理嵌套对象，而 `ref` 不可以。如果你有一个嵌套的对象，你需要为每个嵌套的属性创建一个单独的 `ref`。

## computed

在 Vue 中，`computed` 属性默认是只读的，但你可以提供一个 setter 来使其变为可写。这在你需要在修改计算属性的值时同时修改其依赖的情况下非常有用。

以下是一个可写的 `computed` 属性的示例：

```javascript
import { ref, computed } from "vue";

export default {
  setup() {
    const baseValue = ref(0);
    // const doubleCount = computed(() => count.value * 2);
    const computedValue = computed({
      get: () => baseValue.value * 2,
      set: (newValue) => {
        baseValue.value = newValue / 2;
      },
    });

    return {
      baseValue,
      computedValue,
    };
  },
};
```

在这个示例中，`computedValue` 是 `baseValue` 的两倍。当你获取 `computedValue` 时，它会返回 `baseValue` 的两倍；当你设置 `computedValue` 时，它会同时修改 `baseValue`。

你可以在模板中像使用普通属性一样使用这个可写的计算属性：

```html
<template>
  <div>
    <p>Base Value: {{ baseValue }}</p>
    <p>Computed Value: {{ computedValue }}</p>
    <button @click="baseValue++">Increment Base Value</button>
    <button @click="computedValue++">Increment Computed Value</button>
  </div>
</template>
```

在这个模板中，当你点击 "Increment Base Value" 按钮时，`baseValue` 会增加，并且 `computedValue` 会自动更新为 `baseValue` 的两倍；当你点击 "Increment Computed Value" 按钮时，`computedValue` 会增加，并且 `baseValue` 会自动更新为 `computedValue` 的一半。

## watch

在 Vue 中，`watch` 可以用来观察和响应 Vue 实例上的数据变动。当你需要在数据变化时执行异步或开销较大的操作时，这是最有用的。

以下是一个使用 `watch` 的示例：

```javascript
import { ref, watch } from "vue";

export default {
  setup() {
    const count = ref(0);
    const doubleCount = ref(0);

    watch(count, (newCount, oldCount) => {
      doubleCount.value = newCount * 2;
      console.log(`Count changed from ${oldCount} to ${newCount}`);
    });

    return {
      count,
      doubleCount,
    };
  },
};
```

在这个示例中，我们创建了两个响应式值 `count` 和 `doubleCount`，然后使用 `watch` 来观察 `count` 的变化。当 `count` 改变时，`watch` 的回调函数会被调用，我们在这个回调函数中更新了 `doubleCount` 的值，并在控制台打印了一条消息。

你可以在模板中像使用普通属性一样使用这两个响应式值：

```html
<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <button @click="count++">Increment</button>
  </div>
</template>
```

在这个模板中，当你点击 "Increment" 按钮时，`count` 会增加，然后 `watch` 的回调函数会被调用，`doubleCount` 会被更新为 `count` 的两倍，同时在控制台打印出一条消息。

## defineProps 和 defineEmits

在 Vue 中，子组件通常使用事件向父组件传递数据。在 Vue 3 中，你可以使用 `defineEmits` 函数在 `<script setup>` 中定义一个组件可以触发的事件。下面是一个例子：

```vue
<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="emitMessage">Click me</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const message = ref("Hello, Vue3!");
const emit = defineEmits(["updateMessage"]);

const emitMessage = () => {
  emit("updateMessage", "Hello from child component!");
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
button {
  margin-top: 20px;
}
</style>
```

在这个例子中，我们使用 `defineEmits` 定义了一个 `updateMessage` 事件。然后我们定义了一个 `emitMessage` 方法，当用户点击按钮时，这个方法会被调用，并触发 `updateMessage` 事件，同时传递一个字符串 'Hello from child component!'。

然后，在父组件中，我们可以监听这个事件，并在事件触发时执行一些操作。例如，在 `App.vue` 中：

```vue
<template>
  <div id="app">
    <HelloWorld @updateMessage="handleUpdateMessage" />
    <p>{{ parentMessage }}</p>
  </div>
</template>

<script>
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    const parentMessage = ref("");

    const handleUpdateMessage = (message) => {
      parentMessage.value = message;
    };

    return {
      parentMessage,
      handleUpdateMessage,
    };
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

在这个例子中，我们在 `HelloWorld` 组件上监听 `updateMessage` 事件，并定义了一个 `handleUpdateMessage` 方法来处理这个事件。当 `updateMessage` 事件被触发时，这个方法会被调用，并更新 `parentMessage` 的值。

所以，当你在浏览器中运行这个应用并点击按钮时，你将会看到父组件中的 `parentMessage` 更新为 'Hello from child component!'。

## defineExpose

在 Vue 3.2 中，你可以使用 `defineExpose` 函数在 `<script setup>` 中暴露子组件的方法，使得父组件可以通过 `ref` 调用这些方法。以下是如何使用 `defineExpose` 实现父组件调用子组件方法：

1. 子组件：

```vue
<!-- Child.vue -->
<template>
  <button @click="sayHello">Say hello</button>
</template>

<script setup>
import { defineExpose } from "vue";

const sayHello = () => {
  alert("Hello from child component!");
};

defineExpose({
  sayHello,
});
</script>
```

2. 父组件：

```vue
<!-- Parent.vue -->
<template>
  <div>
    <Child ref="childComponent" />
    <button @click="callChildMethod">Call child method</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Child from "./Child.vue";

const childComponent = ref(null);

const callChildMethod = () => {
  childComponent.value.sayHello();
};
</script>
```

在这个例子中，当你点击 "Call child method" 按钮时，父组件会调用子组件的 `sayHello` 方法。这是因为子组件使用 `defineExpose` 暴露了 `sayHello` 方法，使得父组件可以通过 `ref` 调用。

对于子组件调用父组件的方法，你可以继续使用 `defineEmits` 和事件来实现，这部分代码不需要改变。
