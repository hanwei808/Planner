# Suspense

## 是什么

Vue 3 引入了一个新的内置组件：`Suspense`，它提供了一种方式来等待嵌套的异步依赖加载完成，并在等待时显示一些回退内容。这在等待异步组件或者异步函数结果时非常有用。

这是一个基本的 `Suspense` 使用示例：

```vue
<template>
  <Suspense>
    <template #default>
      <AsyncComponent />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script>
import AsyncComponent from "./AsyncComponent.vue";

export default {
  components: {
    AsyncComponent,
  },
};
</script>
```

在这个例子中，`AsyncComponent` 是一个异步组件。当它正在加载时，`Suspense` 会渲染 `fallback` 插槽中的内容（在这个例子中是 "Loading..."）。当 `AsyncComponent` 加载完成时，`Suspense` 会渲染默认插槽的内容。

注意，`Suspense` 可以处理任何异步操作，不仅仅是异步组件。例如，你可以在组件的 `setup` 函数中使用异步函数，并且 `Suspense` 会等待它完成。

```vue
<template>
  <Suspense>
    <template #default>
      <div>{{ data }}</div>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const data = ref(null);

    async function fetchData() {
      // simulate async operation
      await new Promise((resolve) => setTimeout(resolve, 2000));
      data.value = "Hello, world!";
    }

    fetchData();

    return {
      data,
    };
  },
};
</script>
```

在这个例子中，`Suspense` 会等待 `fetchData` 函数完成，并在等待时显示 "Loading..."。当 `fetchData` 完成时，它会显示 "Hello, world!"。

总的来说，`Suspense` 提供了一种优雅的方式来处理 Vue 应用中的异步操作，无论是异步组件还是任何其他类型的异步函数。

## 使用场景

Vue 3 的 `Suspense` 组件在处理异步操作时非常有用。以下是一些常见的使用场景：

1. **异步组件加载**：当你使用异步组件时，`Suspense` 可以提供一个在组件加载完成之前显示的回退内容。这对于代码拆分和懒加载的情况非常有用，可以提供更好的用户体验。

2. **数据获取**：当你在 `setup` 函数中获取数据时，可以使用 `Suspense` 来显示一个加载指示器，直到数据获取完成。这对于依赖于异步 API 调用的组件非常有用。

3. **依赖于其他异步操作的渲染**：有时，组件的渲染可能依赖于其他异步操作的结果（例如，Web Worker 计算，IndexedDB 查询等）。在这些情况下，可以使用 `Suspense` 来等待这些操作完成。

4. **嵌套异步依赖**：`Suspense` 可以等待嵌套的异步依赖。例如，一个异步组件可能依赖于另一个异步组件。在这种情况下，`Suspense` 可以等待所有的异步依赖都完成。

5. **在路由切换时显示加载状态**：当使用 Vue Router 进行路由切换时，如果目标路由的组件是异步加载的，那么 `Suspense` 可以用来显示一个在组件加载完成之前的加载状态。

总的来说，任何涉及到异步操作和需要在操作完成之前显示一些回退内容的场景，都可以使用 `Suspense`。
