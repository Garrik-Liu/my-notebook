# let 和 const 命令

## let

[文档 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let)

`let` 命令，用来声明变量。它的用法类似于 `var`.  `let` 声明的变量只在它所在的代码块有效。


``` js
// 在 for 循环中, let 声明的 i, 在循环外找不到

for (let i = 0; i < 10; i++) {
  // ...
}

console.log(i);
// ReferenceError: i is not defined
```

### 不存在变量提升 

`var` 命令会发生 ”变量提升“ 现象，即变量可以在声明之前使用，值为 `undefined`

`let` 所声明的变量一定要在声明后使用，否则报错。

``` js
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;
```

### 暂时性死区

只要块级作用域内存在 `let` 命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。

``` js
var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```

上面代码中，存在全局变量 `tmp`，但是块级作用域内 `let` 又声明了一个局部变量 `tmp`，导致后者绑定这个块级作用域，所以在 `let` 声明变量前，对 `tmp` 赋值会报错。

在代码块内，使用 `let` 命令声明变量之前，该变量都是不可用的。这在语法上，称为 “暂时性死区”（temporal dead zone，简称 TDZ）。

🌰 看看下面这段代码问题出在哪?

``` js
function bar(x = y, y = 2) {
  return [x, y];
}

bar(); // 报错
```

上面代码中，调用 `bar` 函数之所以报错（某些实现可能不报错），是因为参数 `x` 默认值等于另一个参数 `y`，而此时 `y` 还没有声明，属于”死区“。如果 `y` 的默认值是 `x`，就不会报错，因为此时 `x` 已经声明了。

### 不允许重复声明 

`let` 不允许在相同作用域内，重复声明同一个变量。

``` js
// 报错
function func() {
  let a = 10;
  var a = 1;
}

// 报错
function func() {
  let a = 10;
  let a = 1;
}

function func(arg) {
  let arg; // 报错
}
```

### ES5 没有块级作用域

ES5 只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景。

#### 内层变量覆盖外层变量

变量提升，导致内层的 `tmp` 变量覆盖了外层的 `tmp` 变量。

``` js
var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    var tmp = 'hello world';
  }
}

f(); // undefined
```

#### 计数的循环变量泄露为全局变量

``` js
var s = 'hello';

for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
}

console.log(i); // 5
```

### ES6 的块级作用域

`let` 实际上让 JavaScript 实现了块级作用域。

``` js
function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}
```

块级作用域的出现，实际上使得用**立即执行函数表达式**（IIFE）来构建函数作用域变得不再必要了。

``` js
// IIFE 写法
(function () {
  var tmp = ...;
  ...
}());

// 块级作用域写法
{
  let tmp = ...;
  ...
}
```

### 块级作用域 与 函数声明 

函数能不能在块级作用域之中声明？这是一个相当令人混淆的问题。

ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。但是事实上, 各家浏览器都允许在块级作用域之中声明函数.

ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。ES6 规定，块级作用域之中，函数声明语句的行为类似于 `let`，**在块级作用域之外不可引用**。

``` js
// ES5 环境
function f() { console.log('I am outside!'); }

(function () {
  if (false) {
      function f() { console.log('I am inside!'); }
  }
  f();
}());
```

上面的代码, 在 ES5 中运行，会得到 “I am inside!”.  在 ES6 中运行理论上会得到 “I am outside!” 但实际上在 ES6 浏览器中运行一下上面的代码，是可能会报错的.

为了兼容老代码, 浏览器的实现可以不遵守 ES6 的规定.

* 允许在块级作用域内声明函数。
* 函数声明类似于var，即会提升到全局作用域或函数作用域的头部。
* 同时，函数声明还会提升到所在的块级作用域的头部。

所以我们应在块级作用域中写函数表达式，而不是函数声明语句.

顺便一提, ES6 的块级作用域允许声明函数的规则，只在使用大括号的情况下成立，如果没有使用大括号，就会报错。

``` js
// 不报错
'use strict';
if (true) {
  function f() {}
}

// 报错
'use strict';
if (true)
  function f() {}
```

## const

[文档 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/const)

`const` 声明一个只读的常量。一旦声明，常量的值就不能改变。这意味着，`const` 一旦声明变量，就必须立即初始化

`const` 命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。

`const` 的作用域与 `let` 命令相同：只在声明所在的块级作用域内有效。

`const` 声明的常量，也与 `let` 一样不可重复声明。

``` js
const PI = 3.1415;
PI // 3.1415

PI = 3;
// TypeError: Assignment to constant variable.
```

`const` 实际上保证的，并不是变量的值不得改动，而是**变量指向的那个内存地址所保存的数据不得改动**。

对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，`const` 只能保证这个指针是固定的（即总是指向另一个固定的地址）

### [题外话] 顶层对象的属性

顶层对象，在浏览器环境指的是 `window` 对象，在 Node 指的是 `global` 对象。ES5 之中，**顶层对象的属性 与 全局变量 是等价的**。

``` js
window.a = 1;
a // 1

a = 2;
window.a // 2
```

顶层对象的属性与全局变量挂钩，被认为是 JavaScript 语言最大的设计败笔之一。

这样的设计带来了几个很大的问题:
* 首先, 是没法在编译时就报出变量未声明的错误，只有运行时才能知道（因为全局变量可能是顶层对象的属性创造的，而属性的创造是动态的）
* 其次, 程序员很容易不知不觉地就创建了全局变量（比如打字出错)
* 最后, 顶层对象的属性是到处可以读写的，这非常不利于模块化编程

另一方面，`window` 对象有实体含义，指的是浏览器的窗口对象，顶层对象是一个有实体含义的对象，也是不合适的。

ES6 为了改变这一点，一方面规定，为了保持兼容性，`var` 命令和 `function` 命令声明的全局变量，依旧是顶层对象的属性；另一方面规定，`let` 命令、`const` 命令、`class` 命令声明的全局变量，不属于顶层对象的属性。

### [题外话] global 对象

ES5 的顶层对象，本身也是一个问题，因为它在各种实现里面是不统一的。
* 浏览器里面，顶层对象是 `window`，但 Node 和 Web Worker 没有 `window`。
* 浏览器和 Web Worker 里面，`self` 也指向顶层对象，但是 Node 没有 `self`。
* Node 里面，顶层对象是 `global`，但其他环境都不支持。

为了同一段代码为了能够在各种环境，都能取到顶层对象，现在一般是使用 `this` 变量，但是有局限性。

* 全局环境中，`this` 会返回顶层对象。但是，Node 模块和 ES6 模块中，`this` 返回的是当前模块。
* 函数里面的 `this`，如果函数不是作为对象的方法运行，而是单纯作为函数运行，`this` 会指向顶层对象。但是，严格模式下，这时 `this` 会返回 `undefined`。
* 不管是严格模式，还是普通模式，`new Function('return this')()`，总是会返回全局对象。但是，如果浏览器用了 CSP（Content Security Policy，内容安全策略），那么 `eval`、`new Function` 这些方法都可能无法使用。

那么很难找到一种方法，**可以在所有情况下，都取到顶层对象**.  下面是两种勉强可以使用的方法:

``` js
(typeof window !== 'undefined'
   ? window
   : (typeof process === 'object' &&
      typeof require === 'function' &&
      typeof global === 'object')
     ? global
     : this);

// 方法二
var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};
```
