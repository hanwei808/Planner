# This

## 是什么

this 是一个指向对象的指针，它指向的是调用函数的那个对象。
this 是在运行时绑定的，而不是在编译时绑定的，它的上下文取决于函数调用时的各种条件。
this 的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。

## 全局作用域 this

在全局作用域中，this 指向全局对象，浏览器中是 window，node 中是 global，wokder 中是 self，通用是 globalThis。

```js
console.log(this === window); // true
```

## new

在 JavaScript 中，`new` 关键字用于创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。使用 `new` 关键字创建对象的过程主要有以下几个步骤：

1. **创建一个新对象**：JavaScript 首先会创建一个新的空对象。

2. **设置原型**：新创建的对象的 `__proto__` 属性会被设置为构造函数的 `prototype` 对象。这样新对象就可以访问构造函数原型中定义的方法和属性。

3. **绑定 `this`**：在构造函数内部，`this` 关键字被设置为新创建的对象。如果构造函数中的代码引用了 `this`，那么这个 `this` 就指向新创建的对象。

4. **执行构造函数中的代码**：构造函数内部的代码（对 `this` 的属性和方法的引用）被执行，通常这些代码会初始化新对象的状态。

5. **返回新对象**：如果构造函数没有显式返回一个对象，则会自动返回新创建的对象。如果构造函数返回了一个对象，那么这个对象会作为 `new` 表达式的结果返回；如果构造函数返回了一个非对象类型的值，那么这个返回值会被忽略，还是会返回新创建的对象。

以下是一个简单的例子：

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

var john = new Person("John", 30);
john.sayHello(); // 输出 "Hello, my name is John"
```

在这个例子中，`new Person('John', 30)` 创建了一个新的 `Person` 对象，并将 `name` 和 `age` 属性初始化为 'John' 和 30。新对象的 `__proto__` 属性被设置为 `Person.prototype`，所以它可以访问 `sayHello` 方法。

## class

在类中，this 指向实例对象。
类的本质是函数，类的所有方法都定义在类的 prototype 属性上，类的实例对象通过 new 命令生成，实例对象的原型链上有一个 constructor 属性，指向它的构造函数。
类相当于容器/作用域/模块，类内部定义的方法都是不可枚举的，类的所有实例共享一个原型对象，类的所有实例共享一个构造函数。

```js
class Test {
  constructor() {
    this.name = "test";
  }
  getName() {
    return this.name;
  }
  static do() {}
}

// 相当于

const Text = (function () {
  this.name = "test";
  Test.prototype.getName = function () {
    return this.name;
  };
  Test.do = function () {};
  window.Test = Test;
})();

// 都可以 new 的过程就是绑定 this -> {}，然后执行构造函数，最后返回 this
const test = new Test();
```

```js
class Test {
  constructor() {
    // 类的非静态方法，new 直接绑定到 this -> {...}
    this.getName = function () {
      return "none-static: name";
    };
  }
  // 类的静态方法 -> Test.prototype{...}
  // 过程优先级：new -> this -> {非静态方法} -> __proto__ -> Test.prototype{静态方法}
  getName() {
    return "static: name";
  }
}

const test = new Test();
test.getName(); // 非静态方法 -> none-static: name
```

## extends 继承

```js
class Father {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
class Son extends Father {
  constructor(name, age) {
    // super 生成 this 绑定 -> Father this -> Son 的实例
    // this -> new Father() -> {} -> Son.prototype -> Son.prototype.__proto__ -> Father.prototype
    super(name);
    this.age = age;
  }
  getAge() {
    return this.age;
  }
}

const son = new Son("son", 18); // {name: "son", age: 18}
son.getName(); // son
son.getAge(); // 18

console.log(son);
/*
    Son {
        age: 18,
        name: "son"
        prototype: Father {
            constructor: class Son {
                prototype: Father {
                    constructor: class Son
                    getAge: ƒ getAge()
                }
            }
            getName: ƒ getName()
        }
    }
*/
```

## 箭头函数与 Function

箭头函数的 this 指向定义时所在的对象，而不是运行时所在的对象。
箭头函数是忽略任何形式的 this 指向的改变
箭头函数 this -> 外层作用域的 this 指向（外层函数如果还是箭头函数则继续往上一层）
Function this -> 最近引用作用域的 this 指向，如果不知道就是 window

```js
var a = 2;
var obj = {
  a: 1,
  test: () => {
    console.log(this.a);
  },
  do: function () {
    console.log(this.a);
  },
  testThis: function () {
    console.log("testThis", this); // 最近引用作用域 -> obj
    const test1 = () => {
      console.log("test1", this); // 上层作用域 -> obj
      const test2 = () => {
        console.log("test2", this); // 上层作用域 -> 上层作用域 -> obj
        const test3 = function () {
          console.log("test3", this); // 最近引用作用域 -> function -> window
          const test4 = () => {
            console.log("test4", this); // 上层作用域 -> window
          };
          test4();
        };
        test3();
      };
      test2();
    };
    test1();
  },
  insideObj: {
    a: 3,
    test: function () {
      console.log(this.a); // 3
    },
  },
};
const test = () => {
  console.log(this.a);
};
test(); // 2
test.call(obj); // 2
test.apply(obj); // 2
test.bind(obj)(); // 2
obj.test(); // 2
obj.do(); // 1
```

## Click

事件处理函数内部的 this 总是指向被绑定 DOM 元素
