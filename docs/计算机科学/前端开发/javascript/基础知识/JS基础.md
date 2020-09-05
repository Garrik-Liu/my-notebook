# JavaScript 基础

## 什么是 JavaScript

### JavaScript 历史回顾

在 90 年代，随着 Web 日益发展壮大，页面变得越来越复杂，但是大多数用户的网速仍旧很慢。为验证简单的表单而需要大量与服务器的往返通信成为用户的痛点。

1995 年，网景公司一位名叫 Brendan Eich 的工程师，开始为即将发布的 Netscape Navigator 2 浏览器开发一个叫 Mocha（后来改名为 LiveScript）的脚本语言。

它的主要用途是代替 Perl 等服务器端语言处理输入验证。使得浏览器在前端就可以进行验证，不需要与服务器进行一次往返通信。

为了赶上发布时间，网景与 Sun 公司结为开发联盟，共同完成 LiveScript 的开发。就在 Netscape Navigator 2 正式发布前，网景把 LiveScript 改名为 JavaScript，以便搭上媒体当时热烈炒作 Java 的顺风车。

由于 JavaScript 1.0 很成功，网景又在 Netscape Navigator 3 中发布了 1.1 版本。网景稳居市场领导者的位置。这时候，微软决定向 IE 投入更多资源。就在 Netscape Navigator 3 发布后不久，微软发布了 IE3，其中包含自己名为 JScript（叫这个名字是为了避免与网景发生许可纠纷）的 JavaScript 实现。

微软的 JavaScript 实现意味着出现了两个版本的 JavaScript。此时，JavaScript 还没有规范其语法或特性的标准，两个版本并存让这个问题更加突出了。随着业界担忧日甚，JavaScript 终于踏上了标准化的征程。

1997 年，JavaScript 1.1 作为提案被提交给欧洲计算机制造商协会（ Ecma ）。第 39 技术委员会（ TC39 ）承担了“标准化一门通用、跨平台、厂商中立的脚本语言的语法和语义” 的任务（ 参见 TC39-ECMAScript ）。TC39 委员会由来自网景、Sun、微软、Borland、Nombas 和其他对这门脚本语言有兴趣的公司的工程师组成。他们花了数月时间打造出 ECMA-262，也就是 ECMAScript 这个新的脚本语言标准。JavaScript 的核心语言特性在 ECMA-262 中以伪语言 ECMAScript 的形式来定义。

1998 年，国际标准化组织（ISO）和国际电工委员会（IEC）也将 ECMAScript 采纳为标准（ISO/IEC-16262）。从那时起，JavaScript 逐渐成为市面上所有主流浏览器的标配。

### JavaScript 的组成

JavaScript 是一门用来与网页交互的脚本语言，包含以下三个组成部分。

- **ECMAScript 实现** 对 ECMA-262 标准的实现，提供核心功能。
- **文档对象模型**（ DOM ）提供与网页内容交互的方法和接口。
- **浏览器对象模型**（ BOM ）提供与浏览器交互的方法和接口。

![2020-09-03-09-44-52](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-03-09-44-52.png)

#### ECMAScript

ECMAScript，即 ECMA-262 定义的语言。Web 浏览器只是 ECMAScript 实现可能存在的一种宿主环境（ host environment ），Node.js 也是一种宿主环境。

基于 ECMAScript 实现，宿主环境提供了特定于环境的额外功能。

JavaScript 实现了 ECMAScript，除此之外 Adobe ActionScript 同样也实现了 ECMAScript。

#### DOM

文档对象模型（DOM，Document Object Model）是一个 API，将 HTML 或 XML 文档抽象成一个层次化的节点树，并且允许开发者去操纵 ( 删除、添加、替换、修改 ) 这些节点，从而让开发者可以做到不刷新页面，而控制网页的内容和结构。

```html
<html>
  <head>
    <title>Sample Page</title>
  </head>
  <body>
    <p>Hello World!</p>
  </body>
</html>
```

![2020-09-03-09-55-46](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-03-09-55-46.png)

在早期，网景和微软有各自的 DOM 实现，这会导致开发者需要为不同的浏览器编写不同的代码。为了保持 Web 跨平台的本性，万维网联盟（W3C，World Wide Web Consortium）制定了 DOM 标准。

1998 年 10 月，DOM Level 1 成为 W3C 的推荐标准。这个规范由两个模块组成：DOM Core 和 DOM HTML。

- 前者提供了一种映射 XML 文档为节点树的方式，从而方便访问和操作文档任意部分；后者扩展了前者，并增加了特定于 HTML 的对象和方法。

DOM Level 2 新增了以下模块，以支持新的接口。

- DOM 视图：描述追踪文档不同视图（如应用 CSS 样式前后的文档）的接口。
- DOM 事件：描述事件及事件处理的接口。
- DOM 样式：描述处理元素 CSS 样式的接口。
- DOM 遍历和范围：描述遍历和操作 DOM 树的接口。

DOM Level 3 进一步扩展了 DOM，增加了加载和保存文档的方法，还有验证文档的方法。

> ⚠️ 在阅读关于 DOM 的资料时，你可能会看到 DOM Level 0 的说法。注意，并没有一个标准叫“DOM Level 0”，这只是 DOM 历史中的一个参照点。DOM Level 0 可以看作 IE4 和 Netscape Navigator 4 中最初支持的 DHTML。

> ⚠ 不同的浏览器对于 JavaScript 有不同的版本编号方式。所以，我们主要关注的应该是浏览器实现 ECMAScript 和 DOM 的程度。

#### BOM

浏览器对象模型（BOM）是一个 API，用于访问和操作浏览器窗口。

总体来说，BOM 主要针对浏览器窗口和子窗口（frame）其核心对象是 `window` 对象，不过人们通常会把任何特定于浏览器的扩展都归在 BOM 的范畴内。比如：

- 弹出新浏览器窗口的能力；
- 移动、缩放和关闭浏览器窗口的能力；
- `navigator` 对象，提供关于浏览器的详尽信息；
- `location` 对象，提供浏览器加载页面的详尽信息；
- `screen` 对象，提供关于用户屏幕分辨率的详尽信息；
- `performance` 对象，提供浏览器内存占用、导航行为和时间统计的详尽信息；
- 对 cookie 的支持；
- 其他自定义对象，如 XMLHttpRequest 和 IE 的 ActiveXObject。

BOM 在很长时间内都没有标准，所以每个浏览器实现的都是自己的 BOM。HTML5 改变了这个局面，这个版本的 HTML 以正式规范的形式涵盖了尽可能多的 BOM 特性。

## HTML 中的 JavaScript

通过 `<script>` 标签，把 JavaScript 插入到 HTML 文本之中。

该元素有下列 8 个属性：

- `async`：可选。表示应该立即开始下载脚本，但不能阻止其他页面动作，比如下载资源或等待其他脚本加载。只对外部脚本文件有效。
- `charset`：可选。使用 `src` 属性指定的代码字符集。这个属性很少使用，因为大多数浏览器不在乎它的值。
- `crossorigin`：可选。配置相关请求的 CORS（跨源资源共享）设置。默认不使用 CORS。crossorigin="anonymous"配置文件请求不必设置凭据标志。crossorigin="use-credentials"设置凭据标志，意味着出站请求会包含凭据。
- `defer`：可选。表示在文档解析和显示完成后再执行脚本是没有问题的。只对外部脚本文件有效。
- `integrity`：可选。允许比对接收到的资源和指定的加密签名以验证子资源完整性（SRI，Subresource Intergrity）。如果接收到的资源的签名与这个属性指定的签名不匹配，则页面会报错，脚本不会执行。这个属性可以用于确保内容分发网络（CDN，Content Delivery Network）不会提供恶意内容。
- `language`：废弃。最初用于表示代码块中的脚本语言（如"JavaScript"、"JavaScript 1.2"或"VBScript"）。大多数浏览器都会忽略这个属性，不应该再使用它。
- `src`：可选。表示包含要执行的代码的外部文件地址。
- `type`：可选。代替 `language`，表示代码块中脚本语言的内容类型（也称 MIME 类型）。按照惯例，这个值始终都是 "text/javascript"，尽管 "text/javascript" 和 "text/ecmascript" 都已经废弃了。
  - JavaScript 文件的 MIME 类型通常是 "application/x-javascript"，不过给 `type` 属性这个值有可能导致脚本被忽略。在非 IE 的浏览器中有效的其他值还有 "application/javascript" 和 "application/ecmascript"。
  - 如果这个值是 `module`，则代码会被当成 ES6 模块，而且只有这时候代码中才能出现 `import` 和 `export` 关键字。

### 使用 `<script>` 标签

使用 `<script>` 的方式有两种：

**直接在网页中嵌入 JavaScript 代码**。

- 注意代码中不能出现字符串 `</script>`。想避免这个问题，只需要转义字符 `\` 即可。

```html
<script>
  function sayScript() {
    console.log("</script>");
  }
</script>
```

---

**在网页中引入外部 JavaScript 文件**。

- 使用 `src` 属性。这个属性的值是一个 URL，指向包含 JavaScript 代码的文件。
- 使用了 `src` 属性的 `<script>` 元素不应该再在 `<script>` 和 `</script>` 标签中再包含其他 JavaScript 代码。如果两者都提供的话，则浏览器只会下载并执行脚本文件，从而忽略行内代码。

```html
<script src="example.js"></script>
```

- 浏览器会向 `src` 属性指定的路径发送一个 `GET` 请求，以取得相应资源。 `src` 属性的值指向的资源，可以跟包含 `<script>` 的 HTML 页面，不在同一个域中，也就是对于外部 JavaScript 资源的请求不受浏览器同源策略限制。
- 引用了放在别人服务器上的 JavaScript 文件时要格外小心，因为恶意的程序员随时可能替换这个文件。在包含外部域的 JavaScript 文件时，要确保该域是自己所有的，或者该域是一个可信的来源。`<script>` 标签的 `integrity` 属性可以对此问题进行防范。

### `<script>` 加载 & 执行时机

#### `<script>` 标签放在页面内容后

不管包含的是什么代码，浏览器都会按照 `<script>` 在页面中出现的顺序依次加载执行。

过去，所有 `<script>` 元素都被放在页面的 `<head>` 标签内。不过，把所有 JavaScript 文件都放在 `<head>` 里，也就意味着必须把所有 JavaScript 代码都下载、解析和解释完成后，才能开始渲染页面。

这会导致页面渲染的延迟。在此期间浏览器窗口完全空白。

为解决这个问题，现代 Web 应用程序通常将所有 JavaScript 引用放在 `<body>` 元素中的页面内容后面。

```html
<body>
  <!-- 这里是页面内容 -->
  <script src="example1.js"></script>
  <script src="example2.js"></script>
</body>
```

#### 推迟执行脚本

使用 `defer` 属性把脚本推迟到文档渲染完毕后再执行。推迟的脚本总是按照它们被列出的次序执行。

HTML5 中规定 `defer` 属性只对外部脚本有效。因此旧版本浏览器会忽略这个属性，按照通常的做法来处理脚本。考虑到这一点，还是把要推迟执行的脚本放在页面内容后面比较好。

```html
<head>
  <title>Example HTML Page</title>
  <script defer src="example1.js"></script>
  <script defer src="example2.js"></script>
</head>
```

#### 异步执行脚本

`async` 属性表示脚本不需要等待其他脚本，同时也不阻塞文档渲染，即异步加载。异步脚本不能保证按照它们在页面中出现的次序执行。只适用于外部脚本。

异步脚本与其他脚本之间之间应该没有依赖关系，也不应该在加载期间操作 DOM。

```html
<head>
  <title>Example HTML Page</title>
  <script async src="example1.js"></script>
  <script async src="example2.js"></script>
</head>
```

### 文档模式\*

IE5.5 发明了文档模式的概念，最初的文档模式有两种：

- **混杂模式**（quirks mode），浏览器按照规范呈现页面
- **标准模式**（standards mode），页面以一种比较宽松的向后兼容的方式显示。通过模拟老式浏览器的行为以防止老站点无法工作。

然这两种模式的主要区别只体现在通过 CSS 渲染的样式方面，但对 JavaScript 也有一些关联影响，或称为副作用。

IE 初次支持文档模式切换以后，其他浏览器也跟着实现了。之后又出现了第三种文档模式：

- **准标准模式**（almost standards mode），这种模式下的浏览器支持很多标准的特性，但是没有标准规定得那么严格。主要区别在于如何对待图片元素周围的空白。

混杂模式在所有浏览器中都以省略文档开头的 `doctype` 声明作为开关。

标准模式通过下列几种文档类型声明开启：

```html
<!-- HTML 4.01 Strict -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<!-- HTML5 -->
<!DOCTYPE html>
```

准标准模式通过 Transitional 和 Frameset 来触发：

```html
<!-- HTML 4.01 Transitional -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<!-- HTML 4.01 Frameset -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
```

### `<noscript>` 元素

`<noscript>` 元素用于给不支持 JavaScript 或禁用 JavaScript 的浏览器提供替代内容。

`<noscript>` 元素可以包含任何可以出现在 `<body>` 中的 HTML 元素，`<script>` 除外。下列两种情况中，任何一个条件被满足，包含在 `<noscript>` 中的内容就会被渲染。否则，浏览器不会渲染 `<noscript>` 中的内容。

- 浏览器不支持脚本；
- 浏览器对脚本的支持被关闭。

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example HTML Page</title>
    <script ""defer="defer" src="example1.js"></script>
    <script ""defer="defer" src="example2.js"></script>
  </head>
  <body>
    <noscript>
      <p>This page requires a JavaScript-enabled browser.</p>
    </noscript>
  </body>
</html>
```

## 基础语法

ECMAScript 的语法很大程度上借鉴了 C 语言和其他类 C 语言，如 Java 和 Perl。

**区分大小写**：ECMAScript 中一切都区分大小写。无论是变量、函数名还是操作符，都区分大小写。

**标识符**：就是变量、函数、属性或函数参数的名称。可以由一或多个下列字符组成：

- 第一个字符必须是一个字母、下划线 `_` 或美元符号 `$`
- 剩下的其他字符可以是字母、下划线、美元符号或数字。
- 标识符中的字母可以是扩展 ASCII（Extended ASCII）中的字母，也可以是 Unicode 的字母字符。

ECMAScript 标识符推荐使用驼峰形式。

**注释**：

```js
// 单行注释

/*  
这是多行
注释 
*/
```

**严格模式**：

ECMAScript 5 引入的严格模式（ strict mode ）是一种 JavaScript 解析和执行模型。

设立"严格模式"的目的，主要有以下几个：

- 消除老版本 Javascript 语法的一些不合理、不严谨之处，减少一些怪异行为;
- 消除代码运行的一些不安全之处，保证代码运行的安全；
- 提高编译器效率，增加运行速度；
- 为未来新版本的 Javascript 做好铺垫。

要对整个脚本启用严格模式，在脚本开头加上这一行：

```js
"use strict";
```

也可以单独指定一个函数在严格模式下执行，只要把这个预处理指令放到函数体开头即可：

```js
function doSomething() {
  "use strict";
  // 函数体
}
```

**语句**：

ECMAScript 中的语句以分号 `;` 结尾。省略分号意味着由解析器确定语句在哪里结尾。

即使语句末尾的分号不是必需的，也应该加上。这便于开发者通过删除空行来压缩代码，如果没有结尾的分号，只删除空行，则可能会导致语法错误。

**关键字与保留字**：

ECMA-262 描述了一组关键字，这些关键字有特殊用途，比如表示控制语句的开始和结束，或者执行特定的操作。关键字不能用作标识符或属性名。

规范中也描述了一组未来的保留字，同样不能用作标识符或属性名。虽然保留字在语言中没有特定用途，但它们是保留给将来做关键字用的。

## 变量声明

ECMAScript 变量是松散类型的，意思是变量可以用于保存任何类型的数据。每个变量只不过是一个用于保存任意值的「 命名占位符 」

有 3 个关键字可以声明变量：`var`、`const` 和 `let`。

### var 关键字

使用 `var` 操作符，后跟变量名（标识符）声明变量。

在声明变量时可以同时进行初始化，它可以保存任何类型的值。

不初始化的情况下，变量会保存一个特殊值 `undefined`。

```js
var x;
var y = "hi";
```

你可以改变一个变量保存的值，也可以改变值的类型。但是不推荐。

```js
var message = "hi";
message = 100; // 合法，但不推荐
```

#### `var` 声明作用域

使用 `var` 操作符声明的变量，会成为包含它的函数的「 局部变量 」

```js
function test() {
  var message = "hi"; // 局部变量
}
test();
console.log(message); // 出错！
```

省略 `var` 操作符，给一个从未声明过的变量赋值，该变量会成为「 全局变量 」但不推荐这么做。在局部作用域中定义的全局变量很难维护。

在严格模式下，如果给未声明的变量赋值，则会导致抛出 `ReferenceError`。

```js
function test() {
  message = "hi"; // 全局变量
}
test();
console.log(message); // "hi"
```

#### `var` 声明提升

使用 `var` 声明的变量会自动提升 hoist 到函数作用域顶部。具体原因后面再讲。

```js
console.log(age);
var age = 26;

// 等价于

var age;
console.log(age);
age = 26;
```

### let 关键字

`let` 声明的范围是块作用域，而 `var` 声明的范围是函数作用域。

块级作用域由最近的一对包含花括号 `{}` 界定。`let` 声明的变量的作用域仅限于所在块的内部。

```js
if (true) {
  let a;
}
console.log(a); // ReferenceError: a没有定义

while (true) {
  let b;
}
console.log(b); // ReferenceError: b没有定义

{
  let d;
}
console.log(d); // ReferenceError: d没有定义
```

`let` 也不允许同一个块作用域中出现重复的声明。但是 `var` 可以。

```js
var name;
var name;

let age;
let age; // SyntaxError；标识符age已经声明过了

var name;
let name; // SyntaxError

let age;
var age; // SyntaxError
```

#### 暂时性死区

`let` 声明的变量不会在作用域中被提升。

在解析代码时，JavaScript 引擎也会注意出现在块后面的 `let` 声明，只不过在此之前不能以任何方式来引用未声明的变量。在 `let` 声明之前的阶段称为该变量的「 暂时性死区 」（temporal dead zone），在此阶段引用后面才声明的变量都会抛出 `ReferenceError`。

```js
// name 会被提升
console.log(name); // undefined
var name = "Matt";

// age 不会被提升
console.log(age); // ReferenceError：age没有定义
let age = 26;
```

#### 全局声明

在全局作用域中，使用 `var` 声明的变量会变成 `window` 对象的属性，使用 `let` 在全局作用域中声明的变量不会。

```js
var name = "Matt";
console.log(window.name); // 'Matt'

let age = 26;
console.log(window.age); // undefined
```

#### for 循环中的 let 声明

在 `let` 出现之前，`for` 循环定义的迭代变量会渗透到循环体外部：

```js
for (var i = 0; i < 5; ++i) {
  // 循环逻辑
}
console.log(i); // 5
```

使用 `let` 之后，这个问题就消失了，迭代变量的作用域仅限于 `for` 循环块内部。

最常见的一个问题是，当循环中有「 异步操作 」或「 延时操作 」时，这些操作访问到的都是退出循环时，迭代变量保存的值。

```js
for (var i = 0; i < 5; ++i) {
  setTimeout(() => console.log(i), 0);
}
// 你可能以为会输出0、1、2、3、4
// 实际上会输出5、5、5、5、5
```

使用 `let` 声明迭代变量时，JavaScript 引擎在后台会为每个迭代循环声明一个新的迭代变量。每个 `setTimeout` 引用的都是不同的变量实例。

这同样适用于所有风格的 `for` 循环，包括 `for-in` 和 `for-of` 循环。

```js
for (let i = 0; i < 5; ++i) {
  setTimeout(() => console.log(i), 0);
}
// 会输出0、1、2、3、4
```

### const 关键字

`const` 声明变量时必须同时初始化变量，且尝试修改 `const` 声明的变量会导致运行时错误。除此之外，和 `let` 一样。

```js
const age = 26;
age = 36; // TypeError: 给常量赋值
// const也不允许重复声明
const name = "Matt";
const name = "Nicholas"; // SyntaxError

// const声明的作用域也是块
const name = "Matt";
if (true) {
  const name = "Nicholas";
}
console.log(name); // Matt
```

`const` 变量如果引用的是一个对象实例，那么该变量保存的是对象实例在内存中的地址，修改这个对象内部的属性并不违反 `const` 的限制。

### 声明风格及 & 最佳实践

**不使用 `var`**：

- 限制自己只使用 `let` 和 `const` 有助于提升代码质量，因为变量有了明确的作用域、声明位置，以及不变的值。变量的行为可以更容易预测。

**`const` 优先与 `let` **：

- 使用 `const` 声明可以让浏览器运行时强制保持变量不变，也可以让静态代码分析工具提前发现不合法的赋值操作。只在提前知道未来会有修改时，再使用 `let`。
- 这样可以让开发者更加明确哪些变量的值未来会改变，哪些不会变。也能迅速发现因意外赋值导致的非预期行为。

## 数据类型

ECMAScript 中的基本数据类型包括 `Undefined`、`Null`、`Boolean`、`Number`、`String` 和 `Symbol`。

还有一种引用数据类型叫 `Object`（对象）。`Object` 是一种无序名值对的集合。

### typeof 操作符

`typeof` 操作符可以确定任意变量的数据类型。

对一个值使用 `typeof` 操作符会返回下列字符串之一：

- "undefined" 表示值未定义；
- "boolean" 表示值为布尔值；
- "string" 表示值为字符串；
- "number" 表示值为数值；
- "object" 表示值为对象（而不是函数）或 null；
- "function" 表示值为函数；
- "symbol" 表示值为符号。

调用 `typeof null` 返回的是 "object"。这是因为特殊值 `null` 被认为是一个对空对象的引用。

严格来讲，函数在 ECMAScript 中被认为是对象，并不代表一种数据类型。可是，函数也有自己特殊的属性。为此，就有必要通过 `typeof` 操作符来区分函数和其他对象。

```js
let message = "some string";
console.log(typeof message); // "string"
console.log(typeof 95); // "number"
console.log(typeof null); // "object"
```

### Undefined 类型

`Undefined` 类型只有一个值，就是特殊值 `undefined`。当使用 `var` 或 `let` 声明了变量但没有初始化时，就相当于给变量赋予了 `undefined` 值：

```js
let message;
console.log(message == undefined); // true
```

- `undefined` 表示未初始化的变量；
- `null` 表示对空对象的引用；

### Null 类型

`Null` 类型同样只有一个值，即特殊值 `null`。逻辑上讲，`null` 值表示一个空对象指针。

在定义将来要保存对象值的变量时，建议使用 `null` 来初始化，不要使用其他值。这样，只要检查这个变量的值是不是 `null` 就可以知道这个变量是否在后来被重新赋予了一个对象的引用。

```js
if (car != null) {
  // car是一个对象的引用
}
```

### Boolean 类型

`Boolean`（布尔值）类型，有两个字面值：`true` 和 `false`。

所有其他 ECMAScript 类型的值，都有相应的布尔值等价形式，可以调用的 `Boolean()` 转型函数将一个其他类型的值转换为布尔值。

下表 👇 总结了不同类型与布尔值之间的转换规则：

![2020-09-04-10-14-21](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-04-10-14-21.png)

### Number 类型

Number 类型使用 IEEE 754 格式表示整数和浮点值。

默认数值字面量格式是 10 进制。

对于八进制字面量，第一个数字必须是零（0），然后是相应的 8 进制数字（数值 0~7）。如果字面量中包含的数字超出了应有的范围，就会被当成 10 进制数。

用 `0` 开头表示 8 进制字面量在严格模式下是无效的，会导致 JavaScript 引擎抛出语法错误。

ECMAScript 2015 或 ES6 中的八进制值通过前缀 `0o` 来表示，如果要表示八进制值，应该使用前缀 `0o`。

```js
let intNum = 55; // 整数，10 进制

let octalNum1 = 070; // 8 进制的 56
let octalNum2 = 079; // 无效的 8 进制值，当成 79 处理
```

要创建 16 进制字面量，数值前缀为 `0x` 后接 16 进制数字（0~9 以及 A~F）。

```js
let hexNum1 = 0xa; // 十六进制10
let hexNum2 = 0x1f; // 十六进制31
```

#### 浮点值

要定义浮点值，数值中必须包含小数点，而且小数点后面必须至少有一个非 `0` 数字。

因为存储浮点值使用的内存空间是存储整数值的两倍，所以 ECMAScript 总是想方设法把值转换为整数。在小数点后面没有数字，或后面为 `0` 的情况下，数值就会变成整数。

```js
let floatNum1 = 1.1;
let floatNum2 = 0.1;
let floatNum3 = 0.1; // 有效，但不推荐

let floatNum1 = 1; // 小数点后面没有数字，当成整数1处理
let floatNum2 = 10.0; // 小数点后面是零，当成整数10处理
```

对于非常大或非常小的数值，浮点值可以用科学记数法来表示。科学记数法用于表示一个应该乘以 `10` 的给定次幂的数值。

```js
let floatNum1 = 3.125e7; // 以 3.125 作为系数，乘以 10 的 7 次幂，等于 31250000。
let floatNum2 = 3e-17; // 等于 0.00000000000000003
```

浮点值的精确度最高可达 `17` 位小数，但在算术计算中远不如整数精确。例如，`0.1` 加 `0.2` 得到的不是 `0.3`，而是 `0.300 000 000 000 000 04`。由于这种微小的舍入错误，导致很难测试特定的浮点值。

这是 IEEE 754 格式表示数值的语言的通病。

#### 值的范围

由于内存的限制，ECMAScript 可以表示的最小数值保存在 `Number.MIN_VALUE` 中，值为 `5e-324`。可以表示的最大数值保存在 `Number.MAX_VALUE` 中，这个值在多数浏览器中是 `1.797 693 134 862 315 7e+308`。

如果某个计算得到的数值结果超出了 JavaScript 可以表示的范围，那么这个数值会被自动转换为一个特殊的 Infinity 值。任何无法表示的负数以 `-Infinity`（负无穷大）表示，任何无法表示的正数以 `Infinity`（正无穷大）表示。

可以使用 `isFinite()` 函数判断一个值是否为在可表示范围内。

`Infinity` 值将不能再进一步用于任何计算。这是因为 `Infinity` 没有可用于计算的数值表示形式。

```js
let result = Number.MAX_VALUE + Number.MAX_VALUE;
console.log(isFinite(result)); // false
```

如果分子是非 `0` 值，分母是有符号 `0` 或无符号 `0`，则会返回 `Infinity` 或 `-Infinity`：

```js
console.log(5 / 0); // Infinity
console.log(5 / -0); // -Infinity
```

#### NaN

`NaN`，意思是 “不是数值”（Not a Number），用于表示本来要返回数值的操作的失败结果。

- 任何涉及 `NaN` 的操作始终返回 `NaN`。
- `NaN` 不等于包括 `NaN` 在内的任何值。

```js
consoel.log(NaN / 10); // NaN
console.log(NaN == NaN); // false
```

使用 `isNaN()` 函数可以判断一个值是否为 `NaN`。该函数接收一个参数，可以是任意数据类型，函数会尝试把它转换为数值。任何不能转换为数值的值都会导致这个函数返回 `true`。

```js
console.log(isNaN(NaN)); // true
console.log(isNaN(10)); // false，10是数值
console.log(isNaN("10")); // false，可以转换为数值10
console.log(isNaN("blue")); // true，不可以转换为数值
console.log(isNaN(true)); // false，可以转换为数值1
```

#### 数值转换

有 3 个函数可以将非数值转换为数值：`Number()`、`parseInt()` 和 `parseFloat()`。

`Number()` 函数基于如下规则执行转换：

- Boolean 布尔值，`true` 转换为 `1`，`false` 转换为 `0`。
- Number 数值，直接返回。
- `null`，返回 `0`。
- `undefined`，返回 `NaN`。
- String 字符串，应用以下规则：
  - 如果字符串是一组整数数值字符，则转换为一个 10 进制数值。
  - 如果字符串是一组浮点值字符 ( 例如 "1.1" ) 则会转换为相应的浮点值。
  - 如果字符串包含有效的十六进制格式 ( 例如 "0xf" ) 则会转换为与该 16 进制值对应的 10 进制整数值。
  - 如果是空字符串，则返回 `0`。
  - 如果字符串包含除上述情况之外的其他字符，则返回 `NaN`。
- Object 对象，调用 `valueOf()` 方法，并按照上述规则转换返回的值。如果转换结果是 `NaN`，则调用 `toString()` 方法，再按照转换字符串的规则转换。

```js
let num1 = Number("Hello world!"); // NaN
let num2 = Number(""); // 0
let num3 = Number("000011"); // 11
let num4 = Number(true); // 1
```

---

`parseInt()` 函数将字符串转换成整数。

- 字符串最前面的空格会被忽略，从第一个非空格字符开始转换。
- 如果第一个字符不是数值字符、加号或减号，`parseInt()` 立即返回 `NaN`。空字符串也会返回 `NaN`，这一点跟 `Number()` 不一样，它返回 `0`。
- 如果第一个字符是数值字符、加号或减号，则继续依次检测每个字符，直到字符串末尾，或碰到非数值字符。则就此停住，不再继续向后检测。

`parseInt()` 函数也能识别不同的整数格式。如果字符串以 `0x` 开头，就会被解释为 16 进制整数。如果字符串以 `0` 开头，且紧跟着数值字符，就会被解释为 8 进制整数。

```js
let num1 = parseInt("1234blue"); // 1234
let num2 = parseInt(""); // NaN
let num3 = parseInt("0xA"); // 10，解释为十六进制整数
let num4 = parseInt(22.5); // 22
let num5 = parseInt("70"); // 70，解释为十进制值
let num6 = parseInt("0xf"); // 15，解释为十六进制整数
```

不同的数值格式很容易混淆，`parseInt()` 也接收第二个参数，用于指定进制数。

在开发中，为避免解析出错，建议始终传给它第二个参数。

```js
let num1 = parseInt("AF", 16); // 175
let num2 = parseInt("AF"); // NaN

let num1 = parseInt("10", 2); // 2，按二进制解析
let num2 = parseInt("10", 8); // 8，按八进制解析
let num3 = parseInt("10", 10); // 10，按十进制解析
let num4 = parseInt("10", 16); // 16，按十六进制解析
```

---

`parseFloat()` 函数的工作方式跟 `parseInt()` 函数类似，都是从位置 `0` 开始检测每个字符。同样，它也是解析到字符串末尾或者解析到一个无效的浮点数值字符为止。这意味着第一次出现的小数点是有效的，但第二次出现的小数点就无效了。

`parseFloat()` 只解析十进制值，因此不能指定进制数。同时，16 进制格式的数会返回 `0`，因为开头是 `Ox`。

如果字符串表示的是整数，则 `parseFloat()` 返回整数。

```js
let num1 = parseFloat("1234blue"); // 1234，按整数解析
let num2 = parseFloat("0xA"); // 0
let num3 = parseFloat("22.5"); // 22.5
let num4 = parseFloat("22.34.5"); // 22.34
let num5 = parseFloat("0908.5"); // 908.5
let num6 = parseFloat("3.125e7"); // 31250000
```

### String 类型

String（字符串）数据类型表示一组 Unicode 字符序列。

```js
let firstName = "John";
let lastName = "Jacob";
let lastName = `Jingleheimerschmidt`;
```

ECMAScript 中的字符串是不可变的（immutable），意思是一旦创建，它们的值就不能变了。要修改某个变量中的字符串值，必须先销毁原始的字符串，然后将包含新值的另一个字符串保存到该变量。

```js
let lang = "Java";
lang = lang + "Script";
```

变量 `lang` 一开始包含字符串 "Java"。紧接着，`lang` 被重新定义为包含 "Java" 和 "Script" 的组合，也就是 "JavaScript"。整个过程首先会分配一个足够容纳 10 个字符的空间，然后填充上 "Java" 和 "Script"。最后销毁原始的字符串 "Java" 和字符串 "Script"。

使用字符串的 `length` 属性可以返回字符串的长度。

```js
let text = "This is the letter sigma: \u03a3.";
console.log(text.length); // 28
```

#### 字符字面量

字符串数据类型包含一些字符字面量，用于表示非打印字符或有其他用途的字符。这些字符字面量可以出现在字符串中的任意位置。

![2020-09-04-15-20-01](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-04-15-20-01.png)

#### 转换为字符串

使用 `toString()` 方法可以返回当前值的对应的字符串。

```js
let age = 11;
let ageAsString = age.toString(); // 字符串"11"
let found = true;
let foundAsString = found.toString(); // 字符串"true"
```

`toString()` 方法可见于数值、布尔值、对象和字符串值。`null` 和 `undefined` 值没有 `toString()` 方法。

---

如果你不确定一个值是不是 `null` 或 `undefined`，可以使用 `String()` 转型函数，它始终会返回表示相应类型值对应的字符串。遵循如下规则：

- 如果值有 `toString()` 方法，则调用该方法并返回结果。
- 如果值是 `null`，返回 "null"。
- 如果值是 `undefined`，返回 "undefined"。

```js
let value1 = 10;
let value2 = true;
let value3 = null;
let value4;

console.log(String(value1)); // "10"
console.log(String(value2)); // "true"
console.log(String(value3)); // "null"
console.log(String(value4)); // "undefined"
```

---

用加号操作符给一个值加上一个空字符串 `""` 也可以将其转换为字符串，具体细节在「 操作符 」那一章再讲。

#### 模板字面量

模板字面量可以跨行定义字符串：

```js
let myMultiLineTemplateLiteral = `first line
second line`;

let pageHTML = `
<div>
  <a href="#">
    <span>Jake</span>
  </a>
</div>`;
```

可以在模板字面量中使用 `${expression}` 来进行字符串插值。表达式的计算结果，会被用 `toString()` 强制转换成字符串，插入到模板之中。

```js
let name = "Garrik";
let helloStr = `Hello ${name}`;
console.log(helloStr); // Hello Garrik
```

### Symbol 类型

`Symbol`（符号）是 ECMAScript 6 新增的数据类型。符号的值是唯一的、不可变的。可以用作非字符串形式的对象属性键，可以确保对象属性具有唯一标识符，不会发生属性冲突的危险。

符号需要使用 `Symbol()` 函数初始化。

调用 `Symbol()` 函数时，也可以传入一个字符串参数作为对符号的描述 description。但是，这个字符串参数与符号定义或标识完全无关。

```js
let genericSymbol = Symbol();
let otherGenericSymbol = Symbol();

let fooSymbol = Symbol("foo");
let otherFooSymbol = Symbol("foo");

console.log(genericSymbol == otherGenericSymbol); // false
console.log(fooSymbol == otherFooSymbol); // false
```

#### 使用全局符号注册表

如果需要共享和重用符号实例，那么可以用一个字符串作为键，在「 全局符号注册表 」中创建并重用符号。

需要使用 `Symbol.for()` 方法：

- 第一次使用某个字符串调用时，它会检查全局运行时注册表，发现不存在对应的符号，于是就会生成一个新符号实例并添加到注册表中。
- 后续使用相同字符串的调用同样会检查注册表，发现存在与该字符串对应的符号，然后就会返回该符号实例。

```js
let fooGlobalSymbol = Symbol.for("foo"); // 创建新符号
let otherFooGlobalSymbol = Symbol.for("foo"); // 重用已有符号

console.log(fooGlobalSymbol === otherFooGlobalSymbol); // true
```

即使采用相同的符号描述，使用 `Symbol.for()` 在全局注册表中定义的符号跟使用 `Symbol()` 定义的符号也并不等同：

```js
let localSymbol = Symbol("foo");
let globalSymbol = Symbol.for("foo");

console.log(localSymbol === globalSymbol); // false
```

可以使用 `Symbol.keyFor()` 来查询全局注册表，这个方法接收 Symbol 实例，返回该全局符号对应的字符串键。如果查询的不是全局符号，则返回 `undefined`。

```js
// 创建全局符号
let s = Symbol.for("foo");
console.log(Symbol.keyFor(s)); // foo

// 创建普通符号
let s2 = Symbol("bar");
console.log(Symbol.keyFor(s2)); // undefined
```

#### 使用符号作为属性

凡是可以使用字符串或数值作为属性的地方，都可以使用符号。

包括了对象字面量属性和 `Object.defineProperty()`，`Object.definedProperties()` 定义的属性。

在对象字面量中，只能在计算属性语法 `[expression]` 中使用符号作为属性。

```js
let s1 = Symbol("a"),
  s2 = Symbol("b"),
  s3 = Symbol("c"),
  s4 = Symbol("d");
s5 = Symbol("e");

let o = {
  [s1]: "abc",
};

o[s2] = "def";

Object.defineProperty(o, s3, { value: "ghi" });

Object.defineProperties(o, {
  [s3]: { value: "jkl" },
  [s4]: { value: "lmn" },
});

console.log(o);
// { Symbol(a): "abc", Symbol(b): "def", Symbol(c): "ghi",  Symbol(d): "jkl",  Symbol(e): "lmn"}
```

- `Object.getOwnPropertyNames()` 返回对象实例的 **常规属性** 数组。
- `Object.getOwnPropertySymbols()` 返回对象实例的 **符号属性** 数组。这两个方法的返回值彼此互斥。
- `Object.getOwnPropertyDescriptors()` 会返回同时包含 **常规 & 符号属性描述符** 的对象。
- `Reflect.ownKeys()` 返回对象实例的 **常规 & 符号属性** 数组。

```js
let s1 = Symbol("foo"),
  s2 = Symbol("bar");

let o = {
  [s1]: "foo val",
  [s2]: "bar val",
  baz: "baz val",
  qux: "qux val",
};

console.log(Object.getOwnPropertySymbols(o));
// [Symbol(foo), Symbol(bar)]

console.log(Object.getOwnPropertyNames(o));
// ["baz", "qux"]

console.log(Object.getOwnPropertyDescriptors(o));
// {baz: {...}, qux: {...}, Symbol(foo): {...}, Symbol(bar): {...}}

console.log(Reflect.ownKeys(o));
// ["baz", "qux", Symbol(foo), Symbol(bar)]
```

### Object 类型

## 流控制语句

### if 语句

```js
if (condition) statement1 else statement2
```

条件 `condition` 可以是任何表达式，并且求值结果不一定是布尔值。ECMAScript 会自动调用 `Boolean()` 函数将这个表达式的值转换为布尔值。

### do-while 语句

`do-while` 语句是一种后测试循环语句，即循环体中的代码执行后才会对退出条件进行求值。循环体内的代码至少执行一次。

```js
do {
  statement;
} while (expression);
```

### while 语句

while 语句是一种先测试循环语句，即先检测退出条件，再执行循环体内的代码。

```js
while (expression) statement;
```

### for 语句

`for` 语句也是先测试语句，只不过增加了进入循环之前的初始化代码，以及循环执行后要执行的表达式，

```js
for (initialization; expression; post - loop - expression) statement;
```

🌰 例如：

```js
let count = 10;
for (let i = 0; i < count; i++) {
  console.log(i);
}
```

### for-in 语句

`for-in` 语句是一种严格的迭代语句，用于枚举对象中的非 `Symbol` 键属性。

ECMAScript 中对象的属性是无序的，因此 `for-in` 语句不能保证返回对象属性的顺序。

```js
for (property in expression) statement;
```

🌰 例如：

```js
for (const propName in window) {
  document.write(propName);
}
```

### for-of 语句

for-of 语句是一种严格的迭代语句，用于遍历 Iterable 可迭代对象中的元素。

for-of 循环会按照可迭代对象的 `next()` 方法产生值的顺序迭代元素。

```js
for (property of expression) statement;
```

🌰 例如：

```js
for (const el of [2, 4, 6, 8]) {
  document.write(el);
}
```

### 标签语句

```js
label: statement;
```

🌰 例如：

```js
start: for (let i = 0; i < count; i++) {
  console.log(i);
}
```

### break 和 continue 语句

`break` 语句用于立即退出循环，强制执行循环后的下一条语句。

`continue` 语句立即退出当前循环，会再次从循环顶部开始执行下一次循环。

`break` 和 `continue` 都可以与标签语句一起使用，返回代码中特定的位置。这通常用在嵌套循环中。

```js
let num = 0;

outermost: for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i == 5 && j == 5) {
      break outermost;
    }
    num++;
  }
}

console.log(num); // 55
```

```js
let num = 0;

outermost: for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i == 5 && j == 5) {
      continue outermost;
    }
    num++;
  }
}

console.log(num); // 95
```

### switch 语句

JavaScript 会将 expression 计算的结果与每个 case 后面的 value 值进行全等判断 `===` 匹配的话，就执行后面的语句。

为避免不必要的条件判断，最好给每个条件后面都加上 `break` 语句。如果确实需要连续匹配几个条件，那么推荐写个注释表明是故意忽略了 `break`，如下所示：

```js
switch (i) {
  case 25:
  /*跳过*/
  case 35:
    console.log("25 or 35");
    break;
  case 45:
    console.log("45");
    break;
  default:
    console.log("Other");
}
```

### with 语句

`with` 语句的用途是将代码作用域设置为特定的对象

```js
with (expression) statement;
```

主要场景是针对一个对象反复操作，这时候将代码作用域设置为该对象能提供便利。

```js
let qs = location.search.substring(1);
let hostName = location.hostname;
let url = location.href;

// 改成

with (location) {
  let qs = search.substring(1);
  let hostName = hostname;
  let url = href;
}
```

⚠️ 严格模式不允许使用 `with` 语句，否则会抛出错误。由于 `with` 语句影响性能且难于调试其中的代码，通常不推荐在产品代码中使用 `with` 语句。

## 操作符

### 一元操作符

### 位操作符

### 布尔操作符

### 乘性操作符

### 指数操作符

### 加性操作符

### 关系操作符

### 相等操作符

### 条件操作符

### 赋值操作符

## 变量 & 执行上下文 & 作用域

### 原始值 & 引用值

ECMAScript 变量可以包含两种不同类型的数据：原始值和引用值。

- 原始值（primitive value）就是基本数据类型的值。
- 引用值（reference value）就是对象实例的引用。

保存原始值的变量是「 **按值访问** 」的，我们操作的就是存储在变量中的实际值。

对于引用值，JavaScript 不允许直接访问内存位置，因此也就不能直接操作对象所在的内存空间。在操作对象时，实际上操作的是对该对象的**引用**（reference）而非实际的对象本身。因此，保存引用值的变量是「 **按引用访问** 」的。

#### 栈内存 & 堆内存

在 JavaScript 中，储存数据的内存空间又被分为两种，

- **栈内存 stock**："后进先出" 的数据结构。
- **堆内存 heap**：一种特殊的树形数据结构。允许程序在运行时动态地申请某个大小的内存空间。

基本类型在内存中 "占据空间小、大小固定" ，他们的值保存在栈内存中。

引用类型 "占据空间大、大小不固定", 储存在堆内存中。

![2020-09-04-20-59-02](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-04-20-59-02.png)

#### 值的复制

把一个变量保存的原始值赋值到另一个变量时，会复制一份原始值的副本，然后储存在新变量的位置。保存在两个变量上的原始值是各自独立的。

```js
let num1 = 5;
let num2 = num1;
```

![2020-09-04-20-53-36](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-04-20-53-36.png)

在把引用值从一个变量赋给另一个变量时，存储在变量中的值也会被复制到新变量所在的位置。但是复制的值实际上是一个指针。它指向存储在堆内存中的对象。两个变量实际上指向同一个对象。

```js
let obj1 = new Object();
let obj2 = obj1;
obj1.name = "Nicholas";
console.log(obj2.name); // "Nicholas"
```

![2020-09-04-20-56-03](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-04-20-56-03.png)

#### 传递参数

ECMAScript 中所有函数的参数都是「 **按值传递** 」的。这意味着函数外的值会被复制到函数内部的参数中。

请注意区分，在「 **按引用传递** 」参数时，值在内存中的地址会被复制，作为函数内部参数的值，这意味着在函数中对参数的修改会反映到函数外部。

```js
function addTen(num) {
  num += 10;
  return num;
}

let count = 20;
let result = addTen(count);
console.log(count); // 20，没有变化，如果 num 是按引用传递的，那么count 的值也会被修改为 30
console.log(result); // 30
```

在传递保存引用类型的变量时，仍旧是「 按值传递 」。

```js
function setName(obj) {
  obj.name = "Nicholas";
  obj = new Object();
  obj.name = "Greg";
}

let person = new Object();
setName(person);
console.log(person.name); // "Nicholas"
```

很多开发者错误地认为，当在局部作用域中修改对象而变化反映到全局时，就意味着参数是「 按引用传递 」的。这是因为 JavaScript 中变量对于引用类型的值，进行「 按引用访问 」的原因。

如果 `person` 是按引用传递的，函数中参数的值改变之后，原始的引用也应该没变。 `person` 应该自动将指针改为指向 `name` 为 "Greg" 的对象。

#### 确定对象类型

前一章提到的 `typeof` 操作符最适合用来判断一个变量是否为原始类型，以及属于哪一种原始类型，但它对引用值的用处不大。

我们通常不关心一个值是不是对象，而是想知道它是什么类型的对象。为了解决这个问题，ECMAScript 提供了 `instanceof` 操作符。

```js
result = variable instanceof constructor;
```

如果变量是给定引用类型的实例，则 `instanceof` 操作符返回 `true`。

```js
console.log(person instanceof Object); // 变量persion是Object吗？
console.log(colors instanceof Array); // 变量colors是Array吗？
console.log(pattern instanceof RegExp); // 变量pattern是RegExp吗？
```

所有引用值都是 `Object` 的实例，因此通过 `instanceof` 操作符检测任何引用值和 `Object` 构造函数都会返回 `true`。

### 执行上下文 & 作用域

JavaScript 是「 解释型语言 」程序会一边编译，一边运行。JavaScript 的编译过程分为两个阶段：编译期 & 执行期。

在「 **编译期** 」阶段, 由「 **JavaScript 解释器** 」完成, 它主要分为下面几个步骤:

1. **词法分析**: 将由代码分解成（对编程语言来说）有意义的代码块，这些代码块被称为「 词法单元 」例如，`var a = 2;` 这段程序通常会被分解成为下面这些词法单元： `var`, `a`, `=`, `2`, `;`
2. **语法分析**: 将 "词法单元" 转换为一代表了程序语法结构的树结构, 被称为「 抽象语法树 」
3. **生成可执行代码**: 将抽象语法树转换成机器可以执行的代码。

在「 **执行期** 」阶段, 由 「 **JavaScript 引擎** 」完成, 主要分成以下步骤:

1. **创建执行上下文**: 执行上下文用以描述代码执行时所处的环境
2. **执行代码**: 执行上下文创建完之后, 处于内部的代码会被引擎逐句执行;

#### 作用域

『 **作用域** 』可以理解为一套规则, 它定义了变量和函数的可被访问范围，以及生命周期。

作用域可分为：

- **静态 ( 词法 ) 作用域**: 静态作用域在代码的 "词法分析" 阶段就确定了. 变量的可访问范围取决于源代码, 与程序的执行流程没关系. 作用域的确定不需要程序运行, 只通过静态分析就可以。
- **动态作用域**: 根据程序的运行动态确定的，不关心变量和函数是如何声明以及在何处声明的, 它只关心他们是在何处被调用的。

JavaScript 采用**词法作用域** ( lexical scoping ), 也就是静态作用域。

#### 执行上下文

代码语句所处的执行上下文，决定了它们可以访问哪些变量和函数。

- 每个上下文都有一个关联的「 **变量对象** Variable Object 」
- 这个上下文中定义的所有变量和函数都存在于这个对象上。
- 我们无法直接通过代码访问变量对象。

JavaScript 中有三种执行上下文:

- **全局执行上下文**: 最外层的上下文。一旦代码被载入执行，引擎最先创建的就是这个环境。根据 ECMAScript 实现的宿主环境，表示全局上下文的对象可能不一样。在浏览器中，全局上下文就是我们常说的 `window` 对象。
- **函数执行上下文**: 当函数要被执行时，JS 引擎创建函数执行上下文。函数年内的代码都处于该执行上下文中。
- **eval 执行上下文**: 作为 `eval` 函数参数的代码, 运行时处于 eval 执行上下文。这里略过不讲。

上下文在其所有代码都执行完毕后会被销毁，包括定义在它上面的所有变量和函数。全局上下文在应用程序退出前才会被销毁，比如关闭网页，或退出浏览器。

函数执行上下文中, 变量对象的创建，依次经历了以下几个过程:

1. 创建 `arguments` 对象. 检测函数调用时所处上下文传入的参数, 在该对象下创建属性, 和初始化属性值。
2. 扫描函数内的所有函数声明。
   - 为每一个函数声明,在变量对象上创建一个同名属性, 属性值为函数在内存中的引用。
   - 如果已有同名属性存在, 则属性值被重写覆盖为新函数的引用。
   - 会扫描函数表达式，或箭头函数。
3. 扫描函数内的 `var` 变量声明。
   - 为每一个变量声明, 在变量对象创建一个同名属性, 属性值初始化为 `undefined`。
   - 如果已有同名属性存在，变量声明会被跳过，原属性值不会被修改。

可以发现，函数声明和变量声明都会被提升。但是函数会首先被提升，然后才是变量。

#### 调用栈 ( 执行上下文栈 )

『 **调用栈** 』是 JS 引擎用以追踪函数执行流的一种机制。

当一个函数要被执行时，JS 引擎创建「 函数执行上下文 」被推入调用栈中。在函数执行完之后，调用栈会弹出并销毁该函数上下文，将控制权返还给之前的执行上下文。

到最后, 全部代码执行结束,「 全局执行上下文 」被弹出栈销毁。

![2020-09-05-13-20-03](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-05-13-20-03.png)

#### 作用域链

上下文中的代码在执行的时候，会创建变量对象的一个「 **作用域链** 」（scope chain）。这个作用域链决定了各级上下文中的代码在访问变量和函数时的顺序。

正在被执行的代码，所处的上下文的变量对象，始终位于作用域链的最前端。

正在被执行的函数的「 函数执行上下文 」中的「 变量对象 」，称为「 **活动对象** Activation Object 」

作用域链中的上一个变量对象来自包含上下文，再上一个变量对象来自再上一个包含上下文。以此类推直至全局上下文。全局上下文的变量对象始终是作用域链的最后一个变量对象。

在一个执行上下文访问一个标识符时，会顺着作用域链，从下向上地搜寻。

![2020-09-05-13-26-32](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-05-13-26-32.png)

作用域链会保存在函数的内部属性 `[[Scope]]` 上. 内部属性供 JavaScript 引擎使用, 开发者是访问不到这个属性的。

#### 作用域链增强

JavaScript 中有其他方式来增强作用域链。某些语句会导致在作用域链前端临时添加一个上下文，这个上下文在代码执行后会被删除。

在以下两种情况下会出现这个现象：

- `try/catch` 语句的 `catch` 块：会创建一个新的变量对象，这个变量对象会包含要抛出的错误对象。
- `with` 语句：会向作用域链前端添加指定的对象。

```js
function buildUrl() {
  let qs = "?debug=true";

  // location 会被添加到作用域链前端
  with (location) {
    let url = href + qs;
  }

  return url;
}
```

## 垃圾回收

JavaScript 是使用垃圾回收的语言，执行环境会负责在代码执行时自动管理内存 ( 内存分配 & 闲置资源回收 )

基本思路很简单：确定哪个变量不会再使用，然后释放它占用的内存。这个过程是周期性的，即垃圾回收程序每隔一定时间，或者在代码执行过程中某个特定时间点就会自动运行。

垃圾回收程序必须跟踪记录哪个变量还会使用，以及哪个变量不会再使用，以便回收内存。

用很多种标记未使用变量的实现方式，但 JavaScript 中用到过两种主要的标记策略是，「 **标记清理** 」和「 **引用计数** 」

### 标记清理

### 引用计数

### 内存管理

## 基本引用类型

## 集合引用类型

### Array

### 定型数组

## 迭代器与生成器
