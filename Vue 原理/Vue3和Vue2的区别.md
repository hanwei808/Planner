# Vue3 和 Vue2 的区别

## 大的变动

### 编程方式：选项式 Option API -> 组合式 Composition API

Vue 3 的组合式 API (Composition API) 是一个新的可选的、更灵活的方式来组织和复用代码。相比于 Vue 2 的选项式 API，组合式 API 有以下优点：

1. **逻辑复用和代码组织**：在 Vue 2 中，复用逻辑需要使用 mixins 或者高阶组件，但这些方法有一些问题，比如命名冲突、不清楚 mixin 中的逻辑、组件来源不明等。而组合式 API 提供了一种更好的复用逻辑的方式，可以清晰地组织和复用相关的代码，使得代码更易于理解和维护。

2. **更好的类型推断**：对于 TypeScript 用户来说，组合式 API 提供了更好的类型推断，使得 TypeScript 支持更为完善。

3. **代码可读性**：在大型组件中，相关的逻辑可能会分散在不同的选项中，这使得代码难以阅读和理解。而组合式 API 允许你按照逻辑关系组织代码，使得代码更易于阅读。

4. **更好的控制**：组合式 API 提供了更细粒度的响应性 API，这使得你可以更精确地控制响应性行为。

需要注意的是，组合式 API 并不是要取代选项式 API，而是为了解决选项式 API 在处理复杂逻辑时的一些问题。在许多情况下，选项式 API 仍然是一个简单有效的选择。

### 响应式原理：Object.defineProperty() -> Proxy()

`Proxy` 和 `Object.defineProperty` 都可以用来拦截和定义对象的行为，但它们在功能和工作方式上有显著的差异：

**Object.defineProperty:**

1. `Object.defineProperty` 是 ES5 的特性，允许你精确地添加或修改对象的属性，并控制这些属性的行为。
2. 它可以让你控制属性的可枚举性（enumerability）、可写性（writability）、可配置性（configurability）以及定义 getter 和 setter。
3. `Object.defineProperty` 只能作用于单个属性。
4. 用于实现响应性的话，需要递归地遍历对象的每个属性，并对每个属性都使用 `Object.defineProperty`，这在大型对象或深层嵌套对象中可能会有性能问题。
5. 它无法监听到对象属性的添加或删除，只能工作在已经存在的属性上。

**Proxy:**

1. `Proxy` 是 ES6 引入的特性，它允许你定义一个对象的整个行为，而不仅仅是对象的单个属性。
2. `Proxy` 可以拦截和自定义更多的操作，包括属性的读取、赋值、枚举、函数调用等几乎所有对象的基本操作。
3. `Proxy` 可以监听到属性的添加和删除，以及数组的索引赋值和长度变化等。
4. `Proxy` 提供的是对象级别的拦截，不需要递归地定义每个属性，因此在实现响应性系统时通常会有更好的性能表现。
5. `Proxy` 是不可撤销的，一旦创建，就无法取消拦截，除非通过另一个 Proxy 来包装它。

总的来说，`Proxy` 提供了更强大、更灵活的拦截能力，而 `Object.defineProperty` 更适合于需要精确控制对象属性行为的场景。在现代 JavaScript 框架中，比如 Vue 3，`Proxy` 被用来实现响应性系统，因为它能更好地满足框架对性能和功能的要求。

### 生命周期

Vue 3 引入了新的生命周期钩子，以更好地与 Composition API 一起使用，同时保留了 Vue 2 中的大部分生命周期钩子以保证向后兼容性。以下是 Vue 2 和 Vue 3 生命周期钩子的对应关系：

| Vue 2         | Vue 3                                              |
| ------------- | -------------------------------------------------- |
| beforeCreate  | setup (这不是生命周期钩子，但在创建组件时会被调用) |
| created       | setup (这不是生命周期钩子，但在创建组件时会被调用) |
| beforeMount   | onBeforeMount                                      |
| mounted       | onMounted                                          |
| beforeUpdate  | onBeforeUpdate                                     |
| updated       | onUpdated                                          |
| beforeDestroy | onBeforeUnmount                                    |
| destroyed     | onUnmounted                                        |
| errorCaptured | onErrorCaptured                                    |
| -             | onRenderTracked                                    |
| -             | onRenderTriggered                                  |

需要注意的是，`setup` 是 Vue 3 中 Composition API 的入口，它在组件实例被创建和初始化 props 和 reactive properties 之后调用，但在任何生命周期钩子被调用之前调用。`setup` 函数不等同于 Vue 2 中的 `created` 钩子，但通常可以在这里执行相同的逻辑。

另外，Vue 3 中引入了两个新的调试相关的生命周期钩子 `onRenderTracked` 和 `onRenderTriggered`。这两个钩子可以帮助你理解组件的依赖项和何时重新渲染。

最后，Vue 2 中的 `beforeDestroy` 和 `destroyed` 钩子在 Vue 3 中被重命名为 `onBeforeUnmount` 和 `onUnmounted`，以更好地反映它们的行为（即在组件卸载/解除挂载时被调用）。

### 根实例创建 new Vue() -> createApp()

Vue 3 在创建根实例的方式上与 Vue 2 有一些不同。以下是两者的比较：

**Vue 2 创建根实例的方式：**

```javascript
new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
```

在 Vue 2 中，我们使用 `new Vue()` 来创建和挂载根实例，并通过 `el` 选项指定一个页面内存在的 DOM 元素来挂载 Vue 实例。

**Vue 3 创建根实例的方式：**

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
```

在 Vue 3 中，我们使用 `createApp()` 函数来创建应用。这个函数接受一个根组件。然后，我们可以链式调用 `use()` 函数来使用插件（如路由、状态管理等），最后调用 `mount()` 函数来挂载应用。

这种改变使得 Vue 3 的根实例更加清晰和灵活，也更加符合现代 JavaScript 的模块化编程风格。此外，这也使得多个应用实例可以更容易地共存，因为它们都是通过 `createApp()` 创建的，而不是通过全局的 `Vue` 对象。

## 细节变动

- template 模板：可以不包在一个根 div 里
- 优先级：v-if 高于 v-for
- Vue3 不推荐使用 mixin 进行复用逻辑提取，而是推荐写成 hook 方式，不会有命名冲突的问题。
