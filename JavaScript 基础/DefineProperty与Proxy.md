# DefineProperty 与 Proxy

## defineProperty（ES5）

`Object.defineProperty()` 是 JavaScript 中的一个方法，它允许你精确地添加新属性或修改对象中的现有属性，并且还可以控制这些属性的行为。

使用 `Object.defineProperty()`，你可以指定以下属性描述符：

- `value`：属性的值。
- `writable`：如果为 `true`，属性的值可以被重写；否则不可以。
- `configurable`：如果为 `true`，属性的描述符可以被改变，同时属性也可以从对应的对象上被删除。
- `enumerable`：如果为 `true`，在枚举对象时该属性会出现。
- `get`：一个给属性提供 getter 的方法。如果有 getter，它会在访问属性时被调用。
- `set`：一个给属性提供 setter 的方法。如果有 setter，它会在属性值被修改时被调用。

这是一个简单的例子：

```javascript
let obj = {};

Object.defineProperty(obj, "newProperty", {
  value: "This is the property value",
  writable: false,
  enumerable: true,
  configurable: true,
});

console.log(obj.newProperty); // 输出: This is the property value
```

在上面的例子中，我们定义了一个名为 `newProperty` 的新属性，其值为 `"This is the property value"`。该属性是可枚举和可配置的，但是不可写，这意味着你不能修改 `obj.newProperty` 的值。

如果尝试修改该属性的值（在 `writable` 设置为 `false` 的情况下）：

```javascript
obj.newProperty = "Another value";
```

这将不会改变 `newProperty` 的值，并且在严格模式（strict mode）下会抛出错误。

`Object.defineProperty()` 常用于创建“只读”属性，或者当你想要更细粒度地控制属性的行为时。它也是实现对象访问器（getter 和 setter）的基础。

## Proxy（ES6）

在 JavaScript 中，`Proxy` 是一个内置的构造函数，用于创建一个对象的代理，从而可以拦截和自定义某些操作，如属性访问、赋值、枚举、函数调用等。`Proxy` 可以用于各种用途，包括但不限于属性验证、值的自动填充、对象的观察或日志记录等。

使用 `Proxy` 的基本语法如下：

```javascript
let proxy = new Proxy(target, handler);
```

这里：

- `target` 是一个对象（可以是任何类型的对象，包括数组、函数或其他代理），它是代理的目标。
- `handler` 是一个对象，其属性是当执行一个操作时定义代理的行为的函数。

这些函数被称为“捕获器”（traps），因为它们可以捕获对 `target` 对象的操作。例如，你可以定义一个 `get` 捕获器来拦截属性访问，或者定义一个 `set` 捕获器来拦截属性赋值。

以下是一个使用 `Proxy` 的简单例子：

```javascript
let target = {
  message: "Hello, world!",
};

let handler = {
  get: function (obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }
    return `Property ${prop} doesn't exist.`;
  },
};

let proxy = new Proxy(target, handler);

console.log(proxy.message); // 输出: Hello, world!
console.log(proxy.nonExistentProperty); // 输出: Property nonExistentProperty doesn't exist.
```

在这个例子中，`proxy` 是 `target` 对象的一个代理，它使用了一个 `get` 捕获器。当尝试访问 `target` 对象的一个存在的属性时（如 `message`），`get` 方法返回该属性的值。如果尝试访问一个不存在的属性，`get` 方法返回一个自定义的消息。

`Proxy` 的强大之处在于它能够让你控制对对象的几乎所有操作，包括属性读写、属性的删除、`in` 操作符的行为、函数调用、对象的原型链查询等。这使得 `Proxy` 成为一个非常强大和灵活的语言特性，可以用于创建各种抽象和模式。

## Reflect（ES6）

`Reflect` 是 JavaScript 中的一个内置对象，它为某些通常作为操作符进行的语言操作提供了函数形式的方法。例如，`delete` 操作符可以通过 `Reflect.deleteProperty()` 方法来调用。

`Reflect` 对象的设计目的有几个：

1. 将一些明确属于语言内部的方法（例如 `Object.defineProperty`）放在一起，使这些方法更易于操作。

2. 修改某些默认操作的行为。例如，`Reflect.defineProperty` 在失败时返回 `false`，而 `Object.defineProperty` 在失败时会抛出一个错误。

3. 让 JavaScript 的操作更像函数。`Reflect` 对象的所有方法都是函数式的。它们对于各种默认操作提供了一种函数式的调用方式，而不是作为操作符或方法调用。

4. `Reflect` 对象的方法与 `Proxy` 对象的处理程序方法一一对应。这使得 `Proxy` 对象可以方便地调用相应的 `Reflect` 方法来执行默认操作，无需手动编写这些操作的代码。

以下是 `Reflect` 的一些方法：

- `Reflect.apply(target, thisArgument, argumentsList)`
- `Reflect.construct(target, argumentsList[, newTarget])`
- `Reflect.get(target, propertyKey[, receiver])`
- `Reflect.set(target, propertyKey, value[, receiver])`
- `Reflect.defineProperty(target, propertyKey, attributes)`
- `Reflect.deleteProperty(target, propertyKey)`
- `Reflect.has(target, propertyKey)`
- `Reflect.ownKeys(target)`
- `Reflect.isExtensible(target)`
- `Reflect.preventExtensions(target)`
- `Reflect.getOwnPropertyDescriptor(target, propertyKey)`
- `Reflect.getPrototypeOf(target)`
- `Reflect.setPrototypeOf(target, prototype)`

例如，使用 `Reflect.get()` 方法获取对象属性的值：

```javascript
let obj = { x: 1, y: 2 };

console.log(Reflect.get(obj, "x")); // 输出: 1
```

在这个例子中，`Reflect.get()` 方法获取了对象 `obj` 的 `x` 属性的值。如果该属性不存在，`Reflect.get()` 将返回 `undefined`。

## Object

在 JavaScript 中，`Object` 是最基础的构造函数之一，几乎所有的 JavaScript 对象都是 `Object` 的实例或继承自 `Object`。`Object` 构造函数为创建对象提供了一种方式，并且它也有一系列的内置方法，这些方法可以操作任何 JavaScript 对象。

下面是 `Object` 的一些常用内置方法：

1. **创建或修改对象**:

   - `Object.create(proto[, propertiesObject])`：使用指定的原型对象和属性创建一个新对象。
   - `Object.defineProperty(obj, prop, descriptor)`：在对象上定义一个新属性，或修改一个对象的现有属性，并返回这个对象。
   - `Object.defineProperties(obj, props)`：定义多个属性。

2. **获取对象信息**:

   - `Object.keys(obj)`：返回一个包含所有给定对象自身可枚举属性名称的数组。
   - `Object.values(obj)`：返回一个包含给定对象自身所有可枚举属性值的数组。
   - `Object.entries(obj)`：返回一个给定对象自身可枚举属性的键值对数组。
   - `Object.getOwnPropertyDescriptor(obj, prop)`：返回指定对象上一个自有属性对应的属性描述符。
   - `Object.getOwnPropertyDescriptors(obj)`：返回指定对象所有自有属性的属性描述符。
   - `Object.getOwnPropertyNames(obj)`：返回一个包含所有给定对象自身属性（不包含 Symbol 属性）的数组。
   - `Object.getOwnPropertySymbols(obj)`：返回一个包含所有给定对象自身的 Symbol 属性的数组。
   - `Object.getPrototypeOf(obj)`：返回指定对象的原型。

3. **控制对象状态**:

   - `Object.preventExtensions(obj)`：防止对象扩展。
   - `Object.isExtensible(obj)`：判断对象是否可扩展。
   - `Object.seal(obj)`：防止对象的属性被删除，同时将所有现有属性标记为不可配置。
   - `Object.isSealed(obj)`：判断对象是否已经被密封。
   - `Object.freeze(obj)`：冻结对象，使其属性值不可变。
   - `Object.isFrozen(obj)`：判断对象是否已经被冻结。

4. **原型操作**:
   - `Object.setPrototypeOf(obj, prototype)`：设置一个对象的原型到另一个对象或 `null`。

除了这些方法，`Object` 构造函数本身也有一些属性和方法，如 `Object.prototype`，它是所有对象原型链的顶端。

使用这些 `Object` 方法可以执行许多有用的操作，如合并对象、复制对象、获取和设置属性、检查对象的状态和原型链等。这些操作是 JavaScript 编程中的基础，对于理解和使用对象至关重要。
