# TypeScript

## 基础语法

TypeScript 是 JavaScript 的一个超集，为大规模应用添加了类型，类，模块等特性。下面是一些 TypeScript 的基础语法：

1. **变量声明**：TypeScript 使用 `let` 和 `const` 关键字声明变量：

```typescript
let isDone: boolean = false;
const maxNumber: number = 100;
```

2. **类型注解**：在 TypeScript 中，你可以使用类型注解来明确变量的类型：

```typescript
let name: string = "John";
let age: number = 25;
let isStudent: boolean = true;
```

3. **数组**：你可以使用类型后面跟上 `[]` 的方式表示数组，或者使用数组泛型 `Array<elemType>`：

```typescript
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
```

4. **元组**：元组类型允许你表达一个已知元素数量和类型的数组，各元素的类型不必相同：

```typescript
let x: [string, number];
x = ["hello", 10]; // OK
x = [10, "hello"]; // Error
```

5. **枚举**：枚举类型用于定义数值集合：

```typescript
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
```

6. **任意值**：如果是一个任意值，允许你在编译时可随意设置其类型：

```typescript
let notSure: any = 4;
notSure = "maybe a string";
notSure = false; // okay, definitely a boolean
```

7. **函数**：在 TypeScript 中，你可以为函数的参数添加类型，也可以为函数本身添加返回值类型：

```typescript
function greet(name: string): string {
  return "Hello, " + name;
}
```

8. **接口**：接口在 TypeScript 中用于类型检查，确保对象符合特定的形状：

```typescript
interface Person {
  firstName: string;
  lastName: string;
}
```

9. **类**：TypeScript 支持基于类的面向对象编程：

```typescript
class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}
```

10. **模块**：TypeScript 也支持模块化编程，可以使用 `export` 和 `import` 关键字：

```typescript
// someModule.ts
export function someFunction() {}

// anotherModule.ts
import { someFunction } from "./someModule";
```

以上就是 TypeScript 的一些基础语法，更深入的内容包括泛型、高级类型、装饰器等等。

## 泛型

泛型（Generics）是编程语言的一种特性，允许你编写能够处理各种数据类型的通用代码，而不是限制函数或类只能使用特定的数据类型。

在 TypeScript 中，泛型是一种创建可重用的组件的强大工具，这些组件可以适应多种类型，而不是单一类型。这样，你可以创建出能够工作在不同数据类型上的函数和类，同时还保持类型安全。

下面是一个简单的泛型函数的例子：

```typescript
function identity<T>(arg: T): T {
  return arg;
}
```

在这个例子中，`T` 是一个类型变量，它代表任何类型。你可以将 `T` 看作是函数的一个参数，这个参数是类型，而不是值。

你可以像下面这样调用这个函数：

```typescript
let output = identity<string>("myString"); // type of output will be 'string'
```

在这个例子中，我们明确地指定 `T` 是 `string` 类型，并将一个字符串 "myString" 作为参数传递，返回值 `output` 的类型也将是 `string`。

你也可以让 TypeScript 编译器自动推断类型：

```typescript
let output = identity("myString"); // type of output will be 'string'
```

在这个例子中，我们没有明确地指定 `T` 是 `string` 类型，但是因为我们传递了一个字符串 "myString" 作为参数，TypeScript 编译器能够自动推断出 `T` 应该是 `string` 类型。

泛型在 TypeScript 中有很多用途，包括在类和接口中使用泛型，泛型约束，以及使用泛型创建高级工具，如映射类型和条件类型等。

## 高级类型

在 TypeScript 中，高级类型（Advanced Types）是一种强大的工具，它可以帮助你处理更复杂的类型场景。这些类型包括交叉类型（Intersection Types）、联合类型（Union Types）、类型别名（Type Aliases）、字符串字面量类型（String Literal Types）、数字字面量类型（Numeric Literal Types）、映射类型（Mapped Types）、条件类型（Conditional Types）等。下面是一些简单的介绍：

1. **交叉类型**：交叉类型是将多个类型合并为一个类型。这让我们可以将现有的多种类型叠加到一起得到所需的类型，例如，`Person & Serializable & Loggable` 表示一个类型同时是 `Person`、`Serializable` 和 `Loggable`。

```typescript
interface A {
  a: number;
}
interface B {
  b: string;
}

let x: A & B = { a: 1, b: "hello" };
```

2. **联合类型**：联合类型表示一个值可以是几种类型之一。我们用竖线（`|`）分隔每个类型，所以 `number | string | boolean` 是一个值可以为 `number`、`string` 或 `boolean` 的类型。

```typescript
function padLeft(value: string, padding: string | number) {
  // ...
}
```

3. **类型别名**：类型别名用来给一个类型起个新名字。类型别名有时和接口很相似，但是可以工作在原始值，联合类型，交叉类型等任何我们需要手写的地方。

```typescript
type StringOrNumber = string | number;
```

4. **字符串字面量类型**：字符串字面量类型允许你指定字符串必须的固定值。在实践中，字符串字面量类型可以与联合类型，类型守卫，和类型别名很好地配合。

```typescript
type Easing = "ease-in" | "ease-out" | "ease-in-out";
```

5. **映射类型**：映射类型允许你创建一个新类型，其属性与旧类型的属性一一对应，并且可以转换旧属性的类型。

```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

6. **条件类型**：条件类型可以让你有条件地选择类型。基础的形式看起来像 `T extends U ? X : Y`，表示当 `T` 可赋值给 `U` 时结果是 `X` 类型，否则为 `Y` 类型。

```typescript
type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends Function
  ? "function"
  : "object";
```

以上只是对 TypeScript 中高级类型的简单介绍，每种高级类型都有其特定的用途和复杂的用法。了解和掌握这些类型可以让你更好地使用 TypeScript 进行开发。

## 装饰器

装饰器（Decorators）是一种特殊类型的声明，它可以被附加到类声明，方法，访问器，属性或参数上。装饰器使用 `@expression` 这种形式，`expression` 必须求值为一个函数，它会在运行时被调用，被装饰的声明信息作为参数传入。

在 TypeScript 中，装饰器提供了一种方式来添加标记类和成员，通过反射（reflection）可以获取这些标记信息。

以下是一个简单的装饰器示例：

```typescript
function sealed(target) {
  // do something with 'target' ...
}

@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}
```

在这个示例中，`@sealed` 装饰器被应用到 `Greeter` 类。当 `@sealed` 被执行的时候，它将 `Greeter` 类的构造函数作为其唯一的参数。

装饰器可以用于类（Class Decorators）、方法（Method Decorators）、访问器（Accessor Decorators）、属性（Property Decorators）和参数（Parameter Decorators）。

需要注意的是，装饰器是一项实验性特性，在 TypeScript 中默认是禁用的，你需要在你的 tsconfig.json 文件中启用 `experimentalDecorators` 选项来使用装饰器。而且，由于装饰器目前处于 JavaScript 的提案阶段，所以其语法和行为在未来可能会有所改变。
