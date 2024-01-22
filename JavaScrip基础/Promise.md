# Promise

Promise 是 JavaScript 中用于处理异步操作的一种对象，它代表一个最终可能完成（解决）或失败（拒绝）的操作，并其结果值。

Promise 的工作原理可以从以下几个方面来理解：

1. **状态**：Promise 对象有三种状态：pending（待定），fulfilled（已完成，也就是解决），或 rejected（已失败，也就是拒绝）。Promise 创建时的初始状态是 pending，然后可能转移到 fulfilled 或 rejected 状态，并且一旦状态改变，就不能再改变。

2. **构造函数**：Promise 是通过构造函数创建的，这个构造函数接受一个函数作为参数，这个函数又接受两个参数：resolve 和 reject，它们是两个函数，用于改变 Promise 的状态。

```javascript
let promise = new Promise((resolve, reject) => {
    // 异步操作
    if (/* 操作成功 */) {
        resolve(value);  // 将 Promise 的状态改为 fulfilled
    } else {
        reject(reason);  // 将 Promise 的状态改为 rejected
    }
});
```

3. **then 方法**：Promise 对象有一个 then 方法，用于指定 fulfilled 或 rejected 状态后的回调函数。then 方法返回一个新的 Promise 对象，因此可以链式调用。

```javascript
promise.then(
  (value) => {
    // 成功的回调函数
  },
  (reason) => {
    // 失败的回调函数
  }
);
```

4. **catch 方法**：Promise 对象有一个 catch 方法，用于指定发生错误时的回调函数。catch 方法也返回一个新的 Promise 对象，所以可以链式调用。

```javascript
promise.catch((reason) => {
  // 错误的回调函数
});
```

5. **Promise 链**：由于 then 和 catch 方法都返回 Promise 对象，因此可以将它们链接在一起，形成一个 Promise 链。在 Promise 链中，一个 Promise 的解决或拒绝可能会触发下一个 Promise 的解决或拒绝。

Promise 的这些特性使其成为处理异步操作的理想选择，因为它们提供了一种方式来处理异步操作的完成和失败，以及链接多个异步操作。
