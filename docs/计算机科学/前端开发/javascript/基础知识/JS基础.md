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

ECMAScript 中的对象其实就是一组数据和功能的集合。

显式地创建 `Object` 的实例有两种方式。

**`new` 操作符调用 `Object()` 构造函数**。

```js
let person = new Object();
person.name = "Nicholas";
person.age = 29;
```

**对象字面量（object literal）表示法**。在使用对象字面量表示法定义对象时，并不会实际调用 Object 构造函数。

```js
let person = {
  name: "Nicholas",
  age: 29,
};
```

属性一般是通过「 **点语法** 」来存取的，但也可以使用「 **中括号** 」来存取属性。在使用中括号时，要在括号内使用属性名的字符串形式。

```js
console.log(person["name"]); // "Nicholas"
console.log(person.name); // "Nicholas"

// 因为"first name"中包含一个空格，所以不能使用点语法来访问。
person["first name"] = "Nicholas";
```

每个 `Object` 实例都有如下属性和方法。

- `toLocaleString()`：返回对象的字符串表示，该字符串反映对象所在的本地化执行环境。
- `toString()`：返回对象的字符串表示。
- `valueOf()`：返回对象对应的字符串、数值或布尔值表示。通常与 `toString()` 的返回值相同。

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

垃圾回收程序会周期性运行，垃圾回收有可能会明显拖慢渲染的速度和帧速率。开发者不知道什么时候运行时会收集垃圾，因此最好的办法是在写代码时就要做到：无论什么时候开始收集垃圾，都能让它尽快结束工作。

### 标记清理

JavaScript 最常用的垃圾回收策略是标记清理（mark-and-sweep）。

在上下文中的变量，逻辑上讲，永远不应该释放它们的内存，因为只要上下文中的代码在运行，就有可能用到它们。

垃圾回收程序运行的时候，会标记内存中存储的所有变量。然后，它会将所有在上下文中的变量，以及被在上下文中的变量引用的变量的标记去掉。在此之后再被加上标记的变量就是待删除的了，原因是它们不会再被访问到了。

添加标记的实现并不重要，关键是策略。

随后垃圾回收程序做一次内存清理，销毁带标记的所有值并收回它们的内存。

### 引用计数

另一种没那么常用的垃圾回收策略是引用计数（reference counting）。其思路是对每个值都记录它被引用的次数。

当一个值被创建且被赋给一个变量时，它的引用数为 1。如果同一个值又被赋给另一个变量，那么引用数加 1。类似地，如果保存对该值的变量被其他值给覆盖了，那么引用数减 1。当一个值的引用数为 0 时，就说明没办法再访问到这个值了。圾回收程序下次运行的时候就会释放引用数为 0 的值的内存。

---

当存在「 循环引用 」时，引用计数会出现问题。

```js
function problem() {
  let objectA = new Object();
  let objectB = new Object();

  objectA.someOtherObject = objectB;
  objectB.anotherObject = objectA;
}
```

在这个例子中，`objectA` 和 `objectB` 变量保存的对象实例，通过各自的属性相互引用，意味着它们的引用数都是 `2`。

在标记清理策略下，这不是问题，因为在函数结束后，这两个对象都不在作用域中。

而在引用计数策略下，`objectA` 和 `objectB` 上保存的实例在函数结束后还会存在，因为它们的引用数永远不会变成 `0`。如果函数被多次调用，则会导致大量内存永远不会被释放。

### 内存管理

在使用垃圾回收的编程环境中，开发者通常无须关心内存管理。但是，操作系统分配给浏览器的内存通常比分配给桌面软件的要少很多。这是为了避免运行大量 JavaScript 的网页耗尽系统内存而导致操作系统崩溃。

因此，我们应该尽量让网页的内存占用保持在一个较小的值上，这可以让页面性能更好。

优化内存占用的最佳手段就是，保证在执行代码时只保存必要的数据。如果一个对象实例不再需要，那么把引用它的变量的值设置为 `null`，从而释放其引用，这称作「 **解除引用** 」

这个建议最适合全局变量和全局对象的属性。因为，局部变量在超出作用域后会被自动解除引用。

```js
function createPerson(name) {
  let localPerson = new Object();
  localPerson.name = name;
  return localPerson;
}

let globalPerson = createPerson("Nicholas");

// 解除globalPerson对值的引用

globalPerson = null;
```

不过要注意，解除对一个值的引用并不会自动导致相关内存被回收。关键在于确保相关的值已经不在上下文里了，因此它在下次垃圾回收时会被回收。

## 原始值包装类型

为了方便操作原始值，ECMAScript 提供了 3 种特殊的引用类型：`Boolean`、`Number` 和 `String`。

原始值本是并不具备属性和方法，每当用到某个原始值的方法或属性时，后台都会创建一个相应原始包装类型的对象实例。

```js
let s1 = "some text";
let s2 = s1.substring(2);
```

上面 👆 代码执行时，后台执行了以下 3 步：

1. 创建一个 `String` 类型的实例；
2. 调用实例上的特定方法；
3. 销毁实例。

可以显式地使用 `Boolean`、`Number` 和 `String` 构造函数创建原始值包装对象。不过应该在确实必要时再这么做，否则容易让开发者疑惑，分不清它们到底是原始值还是引用值。

- 在原始值包装类型的实例上调用 `typeof` 会返回 `"object"`。
- 所有原始值包装对象都会转换为布尔值 `true`。

注意，使用 `new` 调用原始值包装类型的构造函数，与调用同名的转型函数并不一样。例如：

```js
let value = "25";
let number = Number(value); // 转型函数
console.log(typeof number); // "number"
let obj = new Number(value); // 构造函数
console.log(typeof obj); // "object"
```

### Boolean

创建一个 `Boolean` 对象，就使用 `Boolean` 构造函数并传入 `true` 或 `false`，如下例所示：

```js
let booleanObject = new Boolean(true);
```

- `valueOf()` 方法，返回一个原始值 `true` 或 `false`
- `toString()` 方法被调用时也会被覆盖，返回字符串 `"true"` 或 `"false"`

`Boolean` 对象在 ECMAScript 中基本上没有使用场景。请一定要记住 `Boolean` 对象实例与原始值是不一样的。

```js
let falseObject = new Boolean(false);
let result = falseObject && true;
console.log(result); // true

let falseValue = false;
result = falseValue && true;
console.log(result); // false

console.log(typeof falseObject); // object
console.log(typeof falseValue); // boolean
console.log(falseObject instanceof Boolean); // true
console.log(falseValue instanceof Boolean); // false
```

### Number

要创建一个 `Number` 对象，就使用 `Number` 构造函数并传入一个数值

```js
let numberObject = new Number(10);
```

- `valueOf()` 方法返回 Number 对象表示的原始数值，
- `toString()` 方法可选地接收一个表示基数的参数，并返回相应基数形式的数值字符串

```js
let num = 10;
console.log(num.toString()); // "10"
console.log(num.toString(2)); // "1010"
console.log(num.toString(8)); // "12"
console.log(num.toString(10)); // "10"
console.log(num.toString(16)); // "a"
```

---

ES6 新增了 `Number.isInteger()` 方法，用于辨别一个数值是否保存为整数。

```js
console.log(Number.isInteger(1)); // true
console.log(Number.isInteger(1.0)); // true
console.log(Number.isInteger(1.01)); // false
```

#### 数值格式化

`toFixed()` 方法返回包含指定小数点位数的数值字符串，可以表示有 0~20 个小数位的数值。

```js
let num = 10;
console.log(num.toFixed(2)); // "10.00"
```

如果数值本身的小数位超过了参数指定的位数，则四舍五入到最接近的小数位。

```js
let num = 10.005;
console.log(num.toFixed(2)); // "10.01"
```

---

`toPrecision()` 方法会根据情况返回最合理的输出结果，可能是固定长度，也可能是科学记数法形式。接收一个参数，表示结果中数字的总位数。

```js
let num = 99;
console.log(num.toPrecision(1)); // "1e+2"
console.log(num.toPrecision(2)); // "99"
console.log(num.toPrecision(3)); // "99.0"
```

### String

要创建一个 `String` 对象，使用 `String` 构造函数并传入一个字符串。

```js
let stringObject = new String("hello world");
```

`valueOf()` 和 `toString()` 都返回对象的原始字符串值。

- 每个 `String` 对象都有一个 `length` 属性，表示字符串中字符的数量。
- `charAt()` 方法返回给定索引位置的字符。
- `charCodeAt()` 方法可以指定索引位置的字符编码 ( 10 进制格式 )
- `fromCharCode()` 方法用于根据给定的 Unicode 编码 ( 16 进制格式 / 10 进制格式 ) 创建字符串中的字符。

```js
let stringValue = "hello world";
console.log(stringValue.length); // "11"

let message = "abcde";
console.log(message.charAt(2)); // "c"

// Unicode "Latin small letter C"的编码是U+0063
console.log(message.charCodeAt(2)); // 99

console.log(String.fromCharCode(0x61, 0x62, 0x63, 0x64, 0x65)); // "abcde"
console.log(String.fromCharCode(97, 98, 99, 100, 101)); // "abcde"
```

#### 字符串操作方法

concat()，用于将一个或多个字符串拼接成一个新字符串。可以接收任意多个参数，一次性拼接多个字符串。

```js
let stringValue = "hello ";
let result = stringValue.concat("world", "!");

console.log(result); // "hello world!"
console.log(stringValue); // "hello"
```

当然，更常用的方式是使用加号操作符 `+` 进行字符拼接。

---

ECMAScript 提供了 3 个从字符串中提取子字符串的方法：`slice()`、`substr()` 和 `substring()`。

- 它们的第 1 个参数表示子字符串开始的位置下标。
- 对 `slice()` 和 `substring()` 而言，第 2 个参数是提取结束的位置，即该位置之前的字符会被提取出来。
- 对 `substr()` 而言，第 2 个参数表示返回的子字符串长度。
- 省略第 2 个参数都意味着提取到字符串末尾。

```js
let stringValue = "hello world";
console.log(stringValue.slice(3)); // "lo world"
console.log(stringValue.substring(3)); // "lo world"
console.log(stringValue.substr(3)); // "lo world"
console.log(stringValue.slice(3, 7)); // "lo w"
console.log(stringValue.substring(3, 7)); // "lo w"
console.log(stringValue.substr(3, 7)); // "lo worl"
```

当某个参数是负值时，这 3 个方法的行为又有不同。

- `slice()` 方法将所有负值参数都当成字符串长度加上负参数值。
- `substr()` 方法将第一个负参数值当成字符串长度加上该值，将第二个负参数值转换为 0。
- `substring()` 方法会将所有负参数值都转换为 0。

```js
let stringValue = "hello world";
console.log(stringValue.slice(-3)); // "rld"
console.log(stringValue.substring(-3)); // "hello world"
console.log(stringValue.substr(-3)); // "rld"
console.log(stringValue.slice(3, -4)); // "lo w"
console.log(stringValue.substring(3, -4)); // "hel"
console.log(stringValue.substr(3, -4)); // "" (empty string)
```

注意，`substring(3, 0)`，等价于 `substring(0, 3)`，这个方法会将较小的参数作为起点，将较大的参数作为终点。

#### 字符串位置方法

`indexOf()` 和 `lastIndexOf()` 用于在字符串中搜索指定的子字符串，并返回位置下标，找不到返回 `-1`。

- `indexOf()` 方法从字符串开头开始查找子字符串。
- `lastIndexOf()` 方法从字符串末尾开始查找子字符串。

这两个方法都可以接收可选的第 2 个参数，表示开始搜索的位置。

- `indexOf()` 会从这个参数指定的位置开始向字符串末尾搜索，忽略该位置之前的字符。
- `lastIndexOf()` 则会从这个参数指定的位置开始向字符串开头搜索，忽略该位置之后直到字符串末尾的字符。

```js
let stringValue = "hello world";
console.log(stringValue.indexOf("o")); // 4
console.log(stringValue.lastIndexOf("o")); // 7

console.log(stringValue.indexOf("o", 6)); // 7
console.log(stringValue.lastIndexOf("o", 6)); // 4
```

#### 字符串包含方法

ECMAScript 6 增加了 3 个用于判断字符串中是否包含另一个字符串的方法：`startsWith()`、`endsWith()` 和 `includes()`。这些方法都会从字符串中搜索传入的字符串，并返回一个表示是否包含的 "布尔值"。

```js
let message = "foobarbaz";

console.log(message.startsWith("foo")); // true
console.log(message.startsWith("bar")); // false

console.log(message.endsWith("baz")); // true
console.log(message.endsWith("bar")); // false

console.log(message.includes("bar")); // true
console.log(message.includes("qux")); // false
```

- `startsWith()` 和 `includes()` 方法接收可选的第二个参数，用于指定开始搜索的位置。
- `endsWith()` 方法接收可选的第二个参数，表示应该当作字符串末尾的位置。

```js
let message = "foobarbaz";

console.log(message.startsWith("foo")); // true
console.log(message.startsWith("foo", 1)); // false

console.log(message.includes("bar")); // true
console.log(message.includes("bar", 4)); // false

console.log(message.endsWith("bar")); // false
console.log(message.endsWith("bar", 6)); // true
```

#### 字符串格式化方法

`trim()` 方法会创建字符串的一个副本，删除前、后所有空格符。

`trimeLeft()` 和 `trimRight()` 方法分别用于从字符串开始和末尾清理空格符。

```js
let stringValue = "  hello world  ";
let trimmedStringValue = stringValue.trim();
console.log(stringValue); // "  hello world "
console.log(trimmedStringValue); // "hello world"
```

---

`repeat()` 方法接收一个整数参数，表示要将字符串复制多少次，然后返回拼接所有副本后的结果。

```js
let stringValue = "na ";
console.log(stringValue.repeat(16) + "batman");
// na na na na na na na na na na na na na na na na batman
```

---

`padStart()` 和 `padEnd()` 方法会复制字符串，如果小于指定长度，则在相应一边填充字符，直至满足长度条件。这两个方法的第 1 个参数是长度，第 2 个参数是可选的填充字符串，默认为空格。

如果第 1 个参数指定的长度小于或等于字符串长度，则会返回原始字符串。

```js
let stringValue = "foo";

console.log(stringValue.padStart(6)); // "   foo"
console.log(stringValue.padStart(9, ".")); // "......foo"

console.log(stringValue.padEnd(6)); // "foo   "
console.log(stringValue.padEnd(9, ".")); // "foo......"

console.log(stringValue.padStart(2)); // "foo"
console.log(stringValue.padEnd(2)); // "foo"
```

#### 字符串迭代与解构

#### 字符串大小写转换

包括 4 个方法：`toLowerCase()`、`toLocaleLowerCase()`、`toUpperCase()` 和 `toLocaleUpperCase()` 会复制字符串并将其转换为全部大写，或小写格式。

`toLocaleLowerCase()` 和 `toLocaleUpperCase()` 方法基于特定地区实现，在一些地区大小写转换需应用特殊规则。通常，如果不知道代码涉及什么语言，则最好使用地区特定的转换方法。

```js
let stringValue = "hello WORLD";
console.log(stringValue.toLocaleUpperCase()); // "HELLO WORLD"
console.log(stringValue.toUpperCase()); // "HELLO WORLD"
console.log(stringValue.toLocaleLowerCase()); // "hello world"
console.log(stringValue.toLowerCase()); // "hello world"
connsole.log(stringValue); // "hello WORLD"
```

#### 字符串模式匹配方法

`match()` 方法，这个方法本质上跟 `RegExp` 对象的 `exec()` 方法相同。 `match()` 方法接收一个参数，可以是一个正则表达式字符串，也可以是一个 `RegExp` 对象。

具体 `exec()` 方法的细节参照 `RegExp` 那一章，这里不展开。

```js
let text = "cat, bat, sat, fat";
let pattern = /.at/;

// 等价于pattern.exec(text)
let matches = text.match(pattern);
console.log(matches.index); // 0
console.log(matches[0]); // "cat"
console.log(pattern.lastIndex); // 0
```

---

`search()` 方法的参数与 `match()` 方法一样，正则表达式字符串或 `RegExp` 对象。这个方法返回模式第一个匹配的位置索引，如果没找到则返回 `-1`。

```js
let text = "cat, bat, sat, fat";
let pos = text.search(/at/);
console.log(pos); // 1
```

---

`replace()` 方法用于字符串替换操作。接收两个参数，第一个参数可以是一个 `RegExp` 对象或一个字符串（ 不是正则表达式字符串 ），第二个参数可以是一个字符串或一个函数。

如果第一个参数是字符串，那么只会替换第一个子字符串。要想替换所有子字符串，第一个参数必须为正则表达式并且带全局标记。

```js
let text = "cat, bat, sat, fat";
let result = text.replace("at", "ond");
console.log(result); // "cond, bat, sat, fat"

result = text.replace(/at/g, "ond");
console.log(result); // "cond, bond, sond, fond"
```

如果第二个参数是函数，这个函数会收到 3 个参数：

1. 与模式匹配的字符串
2. 匹配项在字符串中的开始位置
3. 整个字符串

这个函数应该返回一个字符串，表示应该把匹配项替换成什么。

```js
function htmlEscape(text) {
  return text.replace(/[<>"&]/g, function(match, pos, originalText) {
    switch (match) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case '"':
        return "&quot;";
    }
  });
}

console.log(htmlEscape('<p class="greeting">Hello world!</p>'));
// "&lt;p class=&quot;greeting&quot;&gt;Hello world!</p>"
```

---

`split()` 方法会根据传入的分隔符将字符串拆分成数组。作为分隔符的参数可以是字符串，也可以是 `RegExp` 对象。还可以传入第二个参数，即数组大小，确保返回的数组不会超过指定大小。

```js
let colorText = "red,blue,green,yellow";
let colors1 = colorText.split(","); // ["red", "blue", "green", "yellow"]
let colors2 = colorText.split(",", 2); // ["red", "blue"]
let colors3 = colorText.split(/[^,]+/); // ["", ",", ",", ",", ""]
```

## 单例内置对象

ECMA-262 对内置对象的定义是 “任何由 ECMAScript 实现提供、与宿主环境无关的对象”。开发者不用显式地实例化内置对象，因为它们已经实例化好了。

前面的 `Object`, `String`, `Number` 等，都是内置对象。

这里在着重介绍几个。

### Global

Global 对象很特别，代码不会显式地访问它。

它为一种兜底对象，它所针对的是不属于任何对象的属性和方法。事实上，不存在全局变量或全局函数这种东西。在全局作用域中定义的变量和函数都会变成 `Global` 对象的属性。

#### `window` 对象

虽然 ECMA-262 没有规定直接访问 `Global` 对象的方式，但浏览器将 `window` 对象实现为 `Global` 对象的代理。因此，所有全局作用域中声明的变量和函数都变成了 `window` 的属性。

#### `eval` 方法

`eval()` 方法就是一个完整的 ECMAScript 解释器，它接收一个参数，即一个要执行的 ECMAScript（JavaScript）字符串。

```js
eval("console.log('hi')");
// 等价于
console.log("hi");
```

通过 `eval()` 定义的任何变量和函数都不会被提升，这是因为在解析代码的时候，它们是被包含在一个字符串中的。它们只是在 `eval()` 执行的时候才会被创建。

在严格模式下，在 `eval()` 内部创建的变量和函数无法被外部访问。

在使用 `eval()` 的时候必须极为慎重，特别是在解释用户输入的内容时。因为这个方法会对 XSS 利用暴露出很大的攻击面。恶意用户可能插入会导致你网站或应用崩溃的代码。

### Date

`Date` 类型将日期保存为自协调世界时（UTC，Universal Time Coordinated）时间 1970 年 1 月 1 日午夜（零时）至今所经过的毫秒数。

在不给 `Date` 构造函数传参数的情况下，创建的对象将保存当前日期和时间。要基于其他日期和时间创建日期对象，必须传入其毫秒表示。

ECMAScript 为此提供了两个辅助方法：`Date.parse()` 和 `Date.UTC()`。

`Date.parse()`：接收一个表示日期的字符串参数，尝试将这个字符串转换为表示该日期的毫秒数。支持下列日期格式：

- “月/日/年”，如 `"5/23/2019"`
- “月 日, 年”，如 `"May 23, 2019"`
- “星期 月 日 年 时:分:秒 时区”，如 `"Tue May 23 2019 00:00:00 GMT-0700"`
- ISO 8601 扩展格式 “YYYY-MM-DDTHH:mm:ss.sssZ”，如 `2019-05-23T00:00:00`

如果直接把表示日期的字符串传给 Date 构造函数，那么 `Date` 会在后台调用 `Date.parse()`。

```js
let someDate = new Date("May 23, 2019");
// 等价于
let someDate = new Date(Date.parse("May 23, 2019"));
```

---

`Date.UTC()` 方法也返回日期的毫秒表示。参数为，年、月（ 从 0 算起，1 月是 0，2 月是 1 ）、日（ 1~31 ）、时（ 0~23 ）、分、秒和毫秒。

- 这些参数中，只有 "年" 和 "月" 是必需的。
- 如果不提供 "日"，那么默认为 1。
- 其他参数的默认值都是 0。

```js
// GMT 时间 2000 年 1 月 1 日零点
let y2k = new Date(Date.UTC(2000, 0));

// GMT 时间 2005 年 5 月 5 日下午 5 点 55 分 55 秒
let allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));
```

当按照 `Date.UTC()` 函数接收参数的格式，将参数传入 `Date` 构造函数中时，`Date.UTC()` 也会被 `Date` 构造函数隐式调用，但与 `Date.parse()` 有一个区别：这种情况下创建的是 Local 本地日期 ( 由系统设置决定 )，不是 GMT 日期。

```js
// 本地时间2000年1月1日零点
let y2k = new Date(2000, 0);

// 本地时间2005年5月5日下午5点55分55秒
let allFives = new Date(2005, 4, 5, 17, 55, 55);
```

---

ECMAScript 还提供了 `Date.now()` 方法，返回方法执行时日期和时间的毫秒数。

```js
const now = Date.now();
console.log(now); // 1599345578342
```

`Date` 实例的 `valueOf()` 方法返回日期的毫秒表示。

#### 日期格式化

`Date` 类型有几个专门用于格式化日期的方法，它们都会返回字符串：

- `toString()` 方法通常返回带时区信息的日期和时间，而时间也是以 24 小时制（0~23）表示的；
- `toLocaleString()` 方法返回与浏览器运行的本地环境一致的日期和时间；
- `toDateString()` 显示日期中的星期、月、日、年；
- `toTimeString()` 显示日期中的时、分、秒和时区；
- `toLocaleDateString()` 显示日期中的星期、月、日、年（ 格式特定于地区 ）；
- `toLocaleTimeString()` 显示日期中的时、分、秒；
- `toUTCString()` 显示完整的 UTC 日期。

这些方法会因浏览器而异。因此不能用于在用户界面上一致地显示日期。

#### 其他方法

下表 👇 列出了直接取得或设置日期值的特定部分的方法。

::: details Date 对象的方法 - 点击展开：

|                方法                |                                                    说明                                                    |
| :--------------------------------: | :--------------------------------------------------------------------------------------------------------: |
|            `getTime()`             |                                  返回日期的毫秒表示；与 `valueOf()` 相同                                   |
|      `setTime(milliseconds)`       |                                    设置日期的毫秒表示，从而修改整个日期                                    |
|          `getFullYear()`           |                                     返回 4 位数年（即 2019 而不是 19）                                     |
|         `getUTCFullYear()`         |                                          返回 UTC 日期的 4 位数年                                          |
|        `setFullYear(year)`         |                                     设置日期的年（year 必须是 4 位数）                                     |
|       `setUTCFullYear(year)`       |                                  设置 UTC 日期的年（year 必须是 4 位数）                                   |
|            `getMonth()`            |                                 返回日期的月（0 表示 1 月，11 表示 12 月）                                 |
|          `getUTCMonth()`           |                              返回 UTC 日期的月（0 表示 1 月，11 表示 12 月）                               |
|         `setMonth(month)`          |                            设置日期的月（month 为大于 0 的数值，大于 11 加年）                             |
|        `setUTCMonth(month)`        |                          设置 UTC 日期的月（month 为大于 0 的数值，大于 11 加年）                          |
|            `getDate()`             |                                           返回日期中的日（1~31）                                           |
|           `getUTCDate()`           |                                        返回 UTC 日期中的日（1~31）                                         |
|          `setDate(date)`           |                              设置日期中的日（如果 date 大于该月天数，则加月）                              |
|         `setUTCDate(date)`         |                           设置 UTC 日期中的日（如果 date 大于该月天数，则加月）                            |
|             `getDay()`             |                             返回日期中表示周几的数值（0 表示周日，6 表示周六）                             |
|           `getUTCDay()`            |                          返回 UTC 日期中表示周几的数值（0 表示周日，6 表示周六）                           |
|            `getHours()`            |                                           返回日期中的时（0~23）                                           |
|          `getUTCHours()`           |                                        返回 UTC 日期中的时（0~23）                                         |
|         `setHours(hours)`          |                                设置日期中的时（如果 hours 大于 23，则加日）                                |
|        `setUTCHours(hours)`        |                             设置 UTC 日期中的时（如果 hours 大于 23，则加日）                              |
|           `getMinutes()`           |                                           返回日期中的分（0~59）                                           |
|         `getUTCMinutes()`          |                                        返回 UTC 日期中的分（0~59）                                         |
|       `setMinutes(minutes)`        |                               设置日期中的分（如果 minutes 大于 59，则加时）                               |
|      `setUTCMinutes(minutes)`      |                            设置 UTC 日期中的分（如果 minutes 大于 59，则加时）                             |
|           `getSeconds()`           |                                           返回日期中的秒（0~59）                                           |
|         `getUTCSeconds()`          |                                        返回 UTC 日期中的秒（0~59）                                         |
|       `setSeconds(seconds)`        |                               设置日期中的秒（如果 seconds 大于 59，则加分）                               |
|      `setUTCSeconds(seconds)`      |                            设置 UTC 日期中的秒（如果 seconds 大于 59，则加分）                             |
|        `getMilliseconds()`         |                                              返回日期中的毫秒                                              |
|       `getUTCMilliseconds()`       |                                           返回 UTC 日期中的毫秒                                            |
|  `setMilliseconds(milliseconds)`   |                                              设置日期中的毫秒                                              |
| `setUTCMilliseconds(milliseconds)` |                                           设置 UTC 日期中的毫秒                                            |
|       `getTimezoneOffset()`        | 返回以分钟计的 UTC 与本地时区的偏移量（如美国 EST 即“东部标准时间”返回 300，进入夏令时的地区可能有所差异） |

:::

### Math

`Math` 对象有一些属性，主要用于保存数学中的一些特殊值。

|      属性      |         说明          |
| :------------: | :-------------------: |
|    `Math.E`    | 自然对数的基数 e 的值 |
|  `Math.LN10`   |   10 为底的自然对数   |
|   `Math.LN2`   |   2 为底的自然对数    |
|  `Math.LOG2E`  |  以 2 为底 e 的对数   |
| `Math.LOG10E`  |  以 10 为底 e 的对数  |
|   `Math.PI`    |        π 的值         |
| `Math.SQRT1_2` |     1/2 的平方根      |
|  `Math.SQRT2`  |      2 的平方根       |

#### `min()` 和 `max()` 方法

用于确定一组数值中的最小值和最大值。

```js
let max = Math.max(3, 54, 32, 16);
console.log(max); // 54

let min = Math.min(3, 54, 32, 16);
console.log(min); // 3
```

要知道数组中的最大值和最小值，可以像下面这样使用扩展操作符：

```js
let values = [1, 2, 3, 4, 5, 6, 7, 8];
let max = Math.max(...values);
```

#### 舍入方法

- `Math.ceil()` 方法始终向上舍入为最接近的整数。
- `Math.floor()` 方法始终向下舍入为最接近的整数。
- `Math.round()` 方法执行四舍五入。
- `Math.fround()` 方法返回数值最接近的单精度（32 位）浮点值表示。

```js
console.log(Math.ceil(25.9)); // 26
console.log(Math.ceil(25.5)); // 26
console.log(Math.ceil(25.1)); // 26

console.log(Math.round(25.9)); // 26
console.log(Math.round(25.5)); // 26
console.log(Math.round(25.1)); // 25

console.log(Math.fround(0.4)); // 0.4000000059604645
console.log(Math.fround(0.5)); // 0.5
console.log(Math.fround(25.9)); // 25.899999618530273

console.log(Math.floor(25.9)); // 25
console.log(Math.floor(25.5)); // 25
console.log(Math.floor(25.1)); // 25
```

#### `random()` 方法

`Math.random()` 方法返回一个 0~1 范围内的随机数，其中包含 `0` 但不包含 `1`。

可以基于如下公式使用 `Math.random()` 从一组整数中随机选择一个数：

```js
Math.floor(Math.random() * total_number_of_choices + first_possible_value);

// 想从1~10范围内随机选择一个数
let num = Math.floor(Math.random() * 10 + 1);
```

#### 其他方法

|         方法         |               说明               |
| :------------------: | :------------------------------: |
|    `Math.abs(x)`     |         返回 x 的绝对值          |
|    `Math.exp(x)`     |     返回 `Math.E` 的 x 次幂      |
|   `Math.expm1(x)`    |      等于 `Math.exp(x) - 1`      |
|    `Math.log(x)`     |        返回 x 的自然对数         |
|   `Math.log1p(x)`    |      等于 `1 + Math.log(x)`      |
| `Math.pow(x, power)` |       返回 x 的 power 次幂       |
| `Math.pow(...nums)`  | 返回 nums 中每个数平方和的平方根 |
|   `Math.clz32(x)`    | 返回 32 位整数 x 的前置零的数量  |
|    `Math.sign(x)`    | 返回表示 x 符号的 1、0、-0 或-1  |
|   `Math.trunc(x)`    | 返回 x 的整数部分，删除所有小数  |
|    `Math.sqrt(x)`    |         返回 x 的平方根          |
|    `Math.cbrt(x)`    |         返回 x 的立方根          |
|    `Math.acos(x)`    |         返回 x 的反余弦          |
|   `Math.acosh(x)`    |       返回 x 的反双曲余弦        |
|    `Math.asin(x)`    |         返回 x 的反正弦          |
|   `Math.asinh(x)`    |       返回 x 的反双曲正弦        |
|    `Math.atan(x)`    |         返回 x 的反正切          |
|   `Math.atanh(x)`    |       返回 x 的反双曲正切        |
|  `Math.atan2(y, x)`  |        返回 y/x 的反正切         |
|    `Math.cos(x)`     |          返回 x 的余弦           |
|    `Math.sin(x)`     |          返回 x 的正弦           |
|    `Math.tan(x)`     |          返回 x 的正切           |

### RegExp

ECMAScript 通过 `RegExp` 类型支持正则表达式。

具体的内容这里不讲，单开一篇文章细讲。

## Array

ECMAScript 中，数组中每个槽位可以存储任意类型的数据。

有几种基本的方式可以创建数组。一种是使用 `Array` 构造函数

如果知道数组中元素的数量，那么可以给构造函数传入一个数值，然后 `length` 属性就会被自动创建并设置为这个值。

也可以给 `Array` 构造函数传入要保存的元素。

```js
let colors = new Array();
let colors = new Array(20);
let colors = new Array("red", "blue", "green");
```

另一种创建数组的方式是使用**数组字面量（array literal）表示法**。与对象一样，在使用数组字面量表示法创建数组不会调用 `Array` 构造函数。

```js
let colors = ["red", "blue", "green"]; // 创建一个包含3个元素的数组
let names = []; // 创建一个空数组
let values = [1, 2]; // 创建一个包含2个元素的数组
```

要取得或设置数组的值，需要使用中括号 `[]` 并提供相应值的数字索引 Index

如果把一个值设置给超过数组最大索引的索引，则数组长度会自动扩展到该索引值加 1。

```js
let colors = ["red", "blue", "green"]; // 定义一个字符串数组
colors[2] = "black"; // 修改第三项
colors[3] = "brown"; // 添加第四项
console.log(colors.length); // 4
```

通过修改 `length` 属性，可以从数组末尾删除或添加元素。

```js
let colors = ["red", "blue", "green"]; // 创建一个包含3个字符串的数组
colors.length = 2;
alert(colors[2]); // undefined

colors[colors.length] = "black"; // 添加一种颜色（位置3）
colors[colors.length] = "brown"; // 再添加一种颜色（位置4）

let colors = ["red", "blue", "green"]; // 创建一个包含3个字符串的数组
colors[99] = "black"; // 添加一种颜色（位置99）
alert(colors.length); // 100
```

#### 检测数组

在只有一个全局作用域的情况下，使用 `instanceof` 操作符就可以检测数组。

```js
if (value instanceof Array) {
  // 操作数组
}
```

如果网页里有多个框架，则可能涉及两个不同的全局执行上下文，因此就会有两个不同版本的 Array 构造函数。如果要把数组从一个框架传给另一个框架，则这个数组的构造函数将有别于在第二个框架内本地创建的数组。

ECMAScript 提供了 `Array.isArray()` 方法。用来确定一个值是否为数组，而不用管它是在哪个全局执行上下文中创建的。

```js
if (Array.isArray(value)) {
  // 操作数组
}
```

#### 数组空位

使用数组字面量初始化数组时，可以使用一串逗号来创建空位（hole），值为 `undefined`

```js
const options = [1, , , , 5];
console.log(options.length); // 5

for (const option of options) {
  console.log(option === undefined);
}
// false
// true
// true
// true
// false
```

ES6 之前的方法则会忽略这个空位，但具体的行为也会因方法而异：

```js
const options = [1, , , , 5];

// map()会跳过空位置
console.log(options.map(() => 6)); // [ 6, <3 empty slots>, 6 ]

// join()视空位置为空字符串
console.log(options.join("-")); // "1----5"
```

⚠️ 由于行为不一致和存在性能隐患，因此实践中要避免使用数组空位。如果确实需要空位，则可以显式地用 `undefined` 值代替。

#### 转换方法

`valueOf()` 返回的还是数组本身。而 `toString(`) 返回由数组中每个值的等效字符串拼接而成的一个逗号分隔的字符串。

```js
let colors = ["red", "blue", "green"]; // 创建一个包含3个字符串的数组
console.log(colors.toString()); // red,blue,green
console.log(colors.valueOf()); // [ "red", "blue", "green" ]
```

### `Array.from()` & `Array.of()`

Array 对象中还有两个 ES6 新增的用于创建数组的静态方法 `from()` 和 `of()`。

#### `Array.from()`

`from()` 将类数组结构转换为数组实例。

- 类数组结构：任何可迭代的结构，或者有一个 length 属性和可索引元素的结构。

```js
// 字符串会被拆分为单字符数组
console.log(Array.from("Matt")); // ["M", "a", "t", "t"]

// 可以使用from()将集合和映射转换为一个新数组
const m = new Map().set(1, 2).set(3, 4);
const s = new Set()
  .add(1)
  .add(2)
  .add(3)
  .add(4);

console.log(Array.from(m)); // [[1, 2], [3, 4]]
console.log(Array.from(s)); // [1, 2, 3, 4]

// Array.from()对现有数组执行浅复制
const a1 = [1, 2, 3, 4];
const a2 = Array.from(a1);

console.log(a1); // [1, 2, 3, 4]
alert(a1 === a2); // false

// 可以使用任何可迭代对象
const iter = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
  },
};
console.log(Array.from(iter)); // [1, 2, 3, 4]

// arguments对象可以被轻松地转换为数组
function getArgsArray() {
  return Array.from(arguments);
}
console.log(getArgsArray(1, 2, 3, 4)); // [1, 2, 3, 4]

// from()也能转换带有必要属性的自定义对象
const arrayLikeObject = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  length: 4,
};
console.log(Array.from(arrayLikeObject)); // [1, 2, 3, 4]
```

`Array.from()` 还接收第二个可选的映射函数参数。这个函数可以直接增强新数组的值。还可以接收第三个可选参数，用于指定映射函数中 `this` 的值。但这个重写的 `this` 值在箭头函数中不适用。

```js
const a1 = [1, 2, 3, 4];
const a2 = Array.from(a1, (x) => x ** 2);
const a3 = Array.from(
  a1,
  function(x) {
    return x ** this.exponent;
  },
  { exponent: 2 }
);
console.log(a2); // [1, 4, 9, 16]
console.log(a3); // [1, 4, 9, 16]
```

#### `Array.of()`

`of()` 将一组参数转换为数组实例。

这个方法用于替代在 ES6 之前常用的 `Array.prototype.slice.call(arguments)`，一种异常笨拙的将 `arguments` 对象转换为数组的写法：

```js
console.log(Array.of(1, 2, 3, 4)); // [1, 2, 3, 4]
console.log(Array.of(undefined)); // [undefined]
```

### 复制 & 填充方法

ES6 新增了两个方法：批量复制方法 `fill()`，以及填充数组方法 `copyWithin()`。

使用 `fill()` 方法可以向一个已有的数组中插入全部或部分相同的值。第一个参数是要填充的值，第二个参数是开始索引，第三个参数是结束索引。

```js
const zeroes = [0, 0, 0, 0, 0];

// 用5填充整个数组
zeroes.fill(5);
console.log(zeroes); // [5, 5, 5, 5, 5]
zeroes.fill(0); // 重置

zeroes.fill(6, 3);
console.log(zeroes); // [0, 0, 0, 6, 6]
zeroes.fill(0); // 重置

zeroes.fill(7, 1, 3);
console.log(zeroes); // [0, 7, 7, 0, 0];
zeroes.fill(0); // 重置
```

`copyWithin()` 会按照指定范围浅复制数组中的部分内容，然后将它们插入到指定索引开始的位置。

```js
let ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// 从ints中复制索引0开始的内容，插入到索引5开始的位置
// 在源索引或目标索引到达数组边界时停止
ints.copyWithin(5);
console.log(ints); // [0, 1, 2, 3, 4, 0, 1, 2, 3, 4]

ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// 从ints中复制索引5开始的内容，插入到索引0开始的位置
ints.copyWithin(0, 5);
console.log(ints); // [5, 6, 7, 8, 9, 5, 6, 7, 8, 9]

ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// 从ints中复制索引0开始到索引3结束的内容
// 插入到索引4开始的位置
ints.copyWithin(4, 0, 3);
alert(ints); // [0, 1, 2, 3, 0, 1, 2, 7, 8, 9]
reset();
```

### 栈方法

ECMAScript 给数组提供 `push()` 和 `pop()` 方法，以实现类似栈的行为。

- `push()` 方法接收任意数量的参数，并将它们添加到数组末尾，返回数组的最新长度。
- `pop()` 方法则用于删除数组的最后一项，返回被删除的项。

```js
let colors = new Array(); // 创建一个数组
let count = colors.push("red", "green"); // 推入两项
alert(count); // 2

count = colors.push("black"); // 再推入一项
alert(count); // 3

let item = colors.pop(); // 取得最后一项
alert(item); // black
alert(colors.length); // 2
```

### 队列方法

使用 `shift()` 和 `push()`，可以把数组当成队列来使用：

```js
let colors = new Array(); // 创建一个数组
colors.push("red", "green"); // 推入两项
colors.push("black"); // 再推入一项
let item = colors.shift(); // 取得第一项
```

ECMAScript 也为数组提供了 `unshift()` 方法。就是执行跟 `shift()` 相反的操作：在数组开头添加任意多个值，然后返回新的数组长度。

通过使用 `unshift()` 和 `pop()`，可以在相反方向上模拟队列。在数组开头添加新数据，在数组末尾取得数据。

### 排序方法

reverse()方法就是将数组元素反向排列。比如：

```js
let values = [1, 2, 3, 4, 5];
values.reverse();
alert(values); // 5,4,3,2,1
```

`sort()` 会按照升序重新排列数组元素，即最小的值在前面，最大的值在后面。但 `sort()` 会在每一项上调用 `String()` 转型函数，然后比较字符串来决定顺序。

```js
let values = [0, 1, 5, 10, 15];
values.sort();
alert(values); // 0,1,10,15,5
```

这样进行数值排列，结果不是符合期望的。`sort()` 方法可以接收一个比较函数，用于判断哪个值应该排在前面。

比较函数接收两个参数，如果第一个参数应该排在第二个参数前面，就返回负值；如果两个参数相等，就返回 `0`；如果第一个参数应该排在第二个参数后面，就返回正值。

```js
function compare(value1, value2) {
  if (value1 < value2) {
    return -1;
  } else if (value1 > value2) {
    return 1;
  } else {
    return 0;
  }
}

let values = [0, 1, 5, 10, 15];
values.sort(compare);
alert(values); // 0,1,5,10,15
```

`reverse()` 和 `sort()` 都返回调用它们的数组的引用。

### 操作方法

`concat()` 方法可以在现有数组全部元素基础上创建一个新数组。

```js
let colors = ["red", "green", "blue"];
let colors2 = colors.concat("yellow", ["black", "brown"]);

console.log(colors); // ["red", "green","blue"]
console.log(colors2); // ["red", "green", "blue", "yellow", "black", "brown"]
```

---

`slice()` 用于创建一个包含原有数组中一个或多个元素的新数组。接收一个或两个参数：返回元素的开始索引和结束索引。如果只有一个参数，则 `slice()` 会返回该索引到数组末尾的所有元素。

- 如果 `slice()` 的参数有负值，那么就以数值长度加上这个负值的结果确定位置。比如，在包含 `5` 个元素的数组上调用 `slice(-2,-1)`，就相当于调用 `slice(3,4)`。
- 如果结束位置小于开始位置，则返回空数组。

```js
let colors = ["red", "green", "blue", "yellow", "purple"];
let colors2 = colors.slice(1);
let colors3 = colors.slice(1, 4);

alert(colors2); // green,blue,yellow,purple
alert(colors3); // green,blue,yellow
```

---

`splice()` 有 3 种不同的方式使用这个方法。

- **删除**。传 2 个参数：要删除的第一个元素的位置，和要删除的元素数量。比如 `splice(0, 2)` 会删除前两个元素。
- **插入**。传 3 个参数：开始位置、0（ 不删除元素 ），之后的传入的参数都是要插入的元素。比如，`splice(2, 0, "red", "green")` 会从数组位置 2 开始插入字符串 `"red"` 和 `"green"`。
- **替换**。传入 3 个参数：开始位置、要删除元素的数量，和要插入的任意多个元素。比如，`splice(2, 1, "red", "green")` 会在位置 `2` 删除一个元素，然后从该位置开始向数组中插入 `"red"` 和 `"green"`。

`splice()` 方法始终返回这样一个数组，它包含从数组中被删除的元素，如果没有删除元素，则返回空数组。

```js
let colors = ["red", "green", "blue"];
let removed = colors.splice(0, 1); // 删除第一项
alert(colors); // green,blue
alert(removed); // red，只有一个元素的数组

removed = colors.splice(1, 0, "yellow", "orange"); // 在位置1插入两个元素
alert(colors); // green,yellow,orange,blue
alert(removed); // 空数组

removed = colors.splice(1, 1, "red", "purple"); // 插入两个值，删除一个元素
alert(colors); // green,red,purple,orange,blue
alert(removed); // yellow，只有一个元素的数组
```

### 搜索 & 位置方法

ECMAScript 提供两类搜索数组的方法：按严格相等搜索 & 按断言函数搜索。

#### 严格相等搜索

ECMAScript 提供了 3 个严格相等的搜索方法：`indexOf()`、`lastIndexOf()`和 `includes()`。

- 都接收两个参数：要查找的元素，和一个可选的起始搜索位置。
- 会使用全等 `===` 比较，也就是说两项必须严格相等。
- `indexOf()` 和 `includes()` 方法从数组前头（第一项）开始向后搜索，而 `lastIndexOf()` 从数组末尾（最后一项）开始向前搜索。
- `indexOf()` 和 `lastIndexOf()` 都返回要查找的元素在数组中的位置，如果没找到则返回 `-1`。`includes()` 返回布尔值，表示是否至少找到一个与指定元素匹配的项。

```js
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

alert(numbers.indexOf(4)); // 3
alert(numbers.lastIndexOf(4)); // 5
alert(numbers.includes(4)); // true

alert(numbers.indexOf(4, 4)); // 5
alert(numbers.lastIndexOf(4, 4)); // 3
alert(numbers.includes(4, 7)); // false

let person = { name: "Nicholas" };
let people = [{ name: "Nicholas" }];
let morePeople = [person];

alert(people.indexOf(person)); // -1
alert(morePeople.indexOf(person)); // 0
alert(people.includes(person)); // false
alert(morePeople.includes(person)); // true
```

#### 断言函数搜索

按照定义的断言函数搜索数组，在数组的每一个元素上都调用这个函数。断言函数的返回值决定了相应索引的元素是否被认为匹配。

接收 3 个参数：当前元素，索引，和数组本身。

`find()` 和 `findIndex()` 方法使用了断言函数。这两个方法都从数组的最小索引开始。

- `find()` 返回第一个匹配的元素。
- `findIndex()` 返回第一个匹配元素的索引。

这两个方法也都接收第二个可选的参数，用于指定断言函数内部 `this` 的值。

找到匹配项后，这两个方法都不再继续搜索。

```js
const people = [
  {
    name: "Matt",
    age: 27,
  },
  {
    name: "Nicholas",
    age: 29,
  },
];

alert(people.find((element, index, array) => element.age < 28));
// {name: "Matt", age: 27}

alert(people.findIndex((element, index, array) => element.age < 28));
// 0
```

### 归并方法

ECMAScript 为数组提供了两个归并方法：`reduce()` 和 `reduceRight()`。这两个方法都会迭代数组的所有项，并在此基础上构建一个最终返回值。

- `reduce()` 方法从数组第一项开始遍历到最后一项。
- `reduceRight()` 从最后一项开始遍历至第一项。

这两个方法都接收两个参数：

- 对每一项都会运行的归并函数。函数接收 4 个参数：
  - 上一个归并值
  - 当前项
  - 当前项的索引
  - 数组本身
- 可选的，用作归并起点的初始值。

```js
let values = [1, 2, 3, 4, 5];
let sum = values.reduce((prev, cur, index, array) => prev + cur);

alert(sum); // 15
```

### 迭代方法

ECMAScript 为数组定义了 5 个迭代方法。

- `every()`：对数组每一项都运行传入的函数，如果对每一项函数都返回 `true`，则这个方法返回 `true`。
- `some()`：对数组每一项都运行传入的函数，如果有一项函数返回 `true`，则这个方法返回 `true`。
- `filter()`：对数组每一项都运行传入的函数，函数返回 `true` 的项会组成数组之后返回。
- `forEach()`：对数组每一项都运行传入的函数，没有返回值。
- `map()`：对数组每一项都运行传入的函数，返回由每次函数调用的结果构成的数组。

每个方法接收两个参数：以每一项为参数运行的函数，以及可选的作为函数运行上下文的作用域对象（ `this` 的值 ）

传给每个方法的函数接收 3 个参数：当前元素，元素索引，和数组本身。

```js
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

let everyResult = numbers.every((item, index, array) => item > 2);
alert(everyResult); // false

let someResult = numbers.some((item, index, array) => item > 2);
alert(someResult); // true

let filterResult = numbers.filter((item, index, array) => item > 2);
alert(filterResult); // 3,4,5,4,3

let mapResult = numbers.map((item, index, array) => item * 2);
alert(mapResult); // 2,4,6,8,10,8,6,4,2

numbers.forEach((item, index, array) => {
  // 执行某些操作
});
```

### 迭代器方法

- `keys()` 返回「 数组索引 」的迭代器。
- `values()` 返回「 数组元素 」的迭代器。
- `entries()` 返回「 键 / 值对 」的迭代器。

```js
const a = ["foo", "bar", "baz", "qux"];

// 因为这些方法都返回迭代器，所以可以将它们的内容
// 通过Array.from()直接转换为数组实例
const aKeys = Array.from(a.keys());
const aValues = Array.from(a.values());
const aEntries = Array.from(a.entries());

console.log(aKeys); // [0, 1, 2, 3]
console.log(aValues); // ["foo", "bar", "baz", "qux"]
console.log(aEntries); // [[0, "foo"], [1, "bar"], [2, "baz"], [3, "qux"]]

for (const [idx, element] of a.entries()) {
  alert(idx);
  alert(element);
}
// 0
// foo
// 1
// bar
// 2
// baz
// 3
// qux
```

## 定型数组 Typed Array

设计定型数组的目的就是提高与 WebGL 等原生库交换二进制数据的效率。

由于定型数组的二进制表示对操作系统而言是一种容易使用的格式，JavaScript 引擎可以重度优化算术运算、按位运算和其他对定型数组的常见操作，因此使用它们速度极快。

::: warning

🚧 建设中…

:::

## Map

ES6 新增了 `Map` 类型进行 “键/值对” 存储。

### 基本 API

- 使用 `new` 关键字和 `Map` 构造函数可以创建一个空映射。
- 如果想在创建的同时初始化实例，可以给 `Map` 构造函数传入一个可迭代对象
- `size` 属性返回 Map 的大小。

```js
const m = new Map();

// 使用嵌套数组初始化映射
const m1 = new Map([
  ["key1", "val1"],
  ["key2", "val2"],
  ["key3", "val3"],
]);
alert(m1.size); // 3

// 使用自定义迭代器初始化映射
const m2 = new Map({
  [Symbol.iterator]: function*() {
    yield ["key1", "val1"];
    yield ["key2", "val2"];
    yield ["key3", "val3"];
  },
});
alert(m2.size); // 3
```

- 使用 `set()` 方法再添加键/值对。另外，可以使用 `get()` 和 `has()` 进行查询。
- `set()` 方法返回映射实例，因此可以把多个操作连缀起来。
- 使用 `delete()` 和 `clear()` 删除值。

```js
const m = new Map();

alert(m.has("firstName")); // false
alert(m.get("firstName")); // undefined
alert(m.size); // 0

m.set("firstName", "Matt").set("lastName", "Frisbie");

alert(m.has("firstName")); // true
alert(m.get("firstName")); // Matt
alert(m.size); // 2

m.delete("firstName"); // 只删除这一个键/值对

alert(m.has("firstName")); // false
alert(m.has("lastName")); // true
alert(m.size); // 1

m.clear(); // 清除这个映射实例中的所有键/值对

alert(m.has("firstName")); // false
alert(m.has("lastName")); // false
alert(m.size); // 0
```

---

`Object` 只能使用数值、字符串或符号作为键不同。`Map` 可以使用任何 JavaScript 数据类型作为键。与 `Object` 类似，映射的值是没有限制的。

```js
const m = new Map();

const functionKey = function() {};
const symbolKey = Symbol();
const objectKey = new Object();

m.set(functionKey, "functionValue");
m.set(symbolKey, "symbolValue");
m.set(objectKey, "objectValue");

alert(m.get(functionKey)); // functionValue
alert(m.get(symbolKey)); // symbolValue
alert(m.get(objectKey)); // objectValue
```

### 顺序 & 迭代

`Map` 实例会维护键值对的插入顺序，因此可以根据插入顺序执行迭代操作。

映射实例可以提供一个迭代器（ Iterator ），能以插入顺序生成 `[key, value]` 形式的数组。可以通过 `entries()` 方法取得这个迭代器，也可以使用 `Symbol.iterator` 属性，它引用 `entries()`。

```js
const m = new Map([
  ["key1", "val1"],
  ["key2", "val2"],
  ["key3", "val3"],
]);

alert(m.entries === m[Symbol.iterator]); // true

for (let pair of m.entries()) {
  alert(pair);
}
// [key1,val1]
// [key2,val2]
// [key3,val3]

for (let pair of m[Symbol.iterator]()) {
  alert(pair);
}
// [key1,val1]
// [key2,val2]
// [key3,val3]
```

可以直接对 `Map` 实例使用扩展操作，把映射转换为数组：

```js
const m = new Map([
  ["key1", "val1"],
  ["key2", "val2"],
  ["key3", "val3"],
]);

console.log([...m]); // [[key1,val1],[key2,val2],[key3,val3]]
```

`keys()` 和 `values()` 分别返回以插入顺序生成键和值的迭代器：

```js
const m = new Map([
  ["key1", "val1"],
  ["key2", "val2"],
  ["key3", "val3"],
]);

for (let key of m.keys()) {
  alert(key);
}
// key1
// key2
// key3

for (let key of m.values()) {
  alert(key);
}
// value1
// value2
// value3
```

### Object vs Map

**内存占用**

- 给定固定大小的内存，`Map` 大约可以比 `Object` 多存储 `50%` 的键/值对。

**插入性能**

- 如果代码涉及大量插入操作，那么显然 `Map` 的性能更佳。

**查找速度**

- 对这两个类型而言，查找速度不会随着键/值对数量增加而线性增加。如果代码涉及大量查找操作，那么某些情况下可能选择 `Object` 更好一些。

**删除性能**

- `Map` 的 `delete()` 操作都比插入和查找更快。如果代码涉及大量删除操作，那么毫无疑问应该选择 `Map`。

## WeakMap

`WeakMap` 弱映射是 `Map` 的 “兄弟” 类型。`WeakMap` 中的 “weak”（弱），描述的是 JavaScript 垃圾回收程序对待 “弱映射” 中键的方式。

弱映射中的键只能是 `Object` 或者继承自 `Object` 的类型，尝试使用非对象设置键会抛出 `TypeError`。值的类型没有限制。

```js
const key1 = { id: 1 },
  key2 = { id: 2 },
  key3 = { id: 3 };
// 使用嵌套数组初始化弱映射
const wm1 = new WeakMap([
  [key1, "val1"],
  [key2, "val2"],
  [key3, "val3"],
]);

alert(wm.get(key1)); // val2
alert(wm.get(key2)); // val2
alert(wm.get(key3)); // val3
```

之后可以使用 `set()` 再添加键/值对，可以使用 `get()` 和 `has()` 查询，还可以使用 `delete()` 删除。

---

表示弱映射的键不属于正式的引用，不会阻止垃圾回收。

```js
const wm = new WeakMap();

wm.set({}, "val");
```

`set()` 方法初始化了一个新对象并将它用作一个字符串的键。因为没有指向这个对象的其他引用，所以当这行代码执行完成后，这个对象键就会被当作垃圾回收。

之后，因为值也没有被引用，所以值本身也会成为垃圾回收的目标。

因为 `WeakMap` 中的键/值对任何时候都可能被销毁，所以没必要提供迭代其键/值对的能力。

```js
const wm = new WeakMap();

const container = {
  key: {},
};

wm.set(container.key, "val");

function removeReference() {
  container.key = null;
}
```

`container` 对象维护着一个对弱映射键的引用，因此这个对象键不会成为垃圾回收的目标。不过，如果调用了 `removeReference()`，就会摧毁键对象的最后一个引用，垃圾回收程序就可以把这个键/值对清理掉。

## Set

`Set` 用来表示一个集合，其中的元素是唯一的，不重复的。可以包含任何 JavaScript 数据类型作为值。

### 基本 API

在初始化时，可以给 `Set` 构造函数传入一个可迭代对象。

```js
// 使用数组初始化集合
const s1 = new Set(["val1", "val2", "val3"]);

// 使用自定义迭代器初始化集合
const s2 = new Set({
  [Symbol.iterator]: function*() {
    yield "val1";
    yield "val2";
    yield "val3";
  },
});
```

使用 `add()` 增加值，使用 `has()` 查询，通过 `size` 取得元素数量，以及使用 `delete()` 和 `clear()` 删除元素：

```js
const s = new Set();

alert(s.has("Matt")); // false
alert(s.size); // 0

s.add("Matt").add("Frisbie");

alert(s.has("Matt")); // true
alert(s.size); // 2

alert(s.delete("Matt")); // true

alert(s.has("Matt")); // false
alert(s.has("Frisbie")); // true
alert(s.size); // 1

s.clear(); // 销毁集合实例中的所有值

alert(s.has("Matt")); // false
alert(s.has("Frisbie")); // false
alert(s.size); // 0
```

如果向 `Set` 中 `add` 已有元素，该元素不会被添加，即不会出现重复的元素。

`add()` 和 `delete()` 操作是幂等的，也就是执行多次和执行一次结果相同。`delete()`返回一个布尔值，表示集合中是否存在要删除的值：

```js
const s = new Set();

s.add("foo");
alert(s.size); // 1
s.add("foo");
alert(s.size); // 1

// 集合里有这个值
alert(s.delete("foo")); // true

// 集合里没有这个值
alert(s.delete("foo")); // false
```

### 顺序 & 迭代

Set 会维护值插入时的顺序，因此支持按顺序迭代。

集合实例可以提供一个迭代器（Iterator），能以插入顺序生成集合内容。

可以通过 `values()` 方法及其别名方法 `keys()`（或者 `Symbol.iterator` 属性，它引用 `values()`）取得这个迭代器：

```js
const s = new Set(["val1", "val2", "val3"]);

alert(s.values === s[Symbol.iterator]); // true
alert(s.keys === s[Symbol.iterator]); // true

for (let value of s.values()) {
  alert(value);
}
// val1
// val2
// val3

for (let value of s[Symbol.iterator]()) {
  alert(value);
}
// val1
// val2
// val3
```

因为 `values()` 是默认迭代器，所以可以直接对集合实例使用扩展操作，把集合转换为数组：

```js
const s = new Set(["val1", "val2", "val3"]);

console.log([...s]); // ["val1", "val2", "val3"]
```

## WeakSet

和 WeakMap 一样，弱集合中的值不属于正式的引用，不会阻止垃圾回收。

```js
const ws = new WeakSet();

ws.add({});
```

`add()` 方法初始化了一个新对象，并将它用作一个值。因为没有指向这个对象的其他引用，所以当这行代码执行完成后，这个对象值就会被当作垃圾回收。

## 迭代器

在软件开发领域，“迭代” 的意思是按照顺序反复多次执行一段程序，通常会有明确的终止条件。

循环是迭代机制的基础，这是因为它可以指定迭代的次数，以及每次迭代要执行什么操作。每次循环都会在下一次迭代开始之前完成，而每次迭代的顺序都是事先定义好的。

下面 👇 是 `fo-loop` 迭代一个数组的方式，是最简单的一种迭代：

```js
let collection = ["foo", "bar", "baz"];

for (let index = 0; index < collection.length; ++index) {
  console.log(collection[index]);
}
```

但是，这种迭代只特定于数组数据结构：

1. 数组中的每一项都只能先通过引用取得数组对象，然后再通过 `[]` 操作符取得特定索引位置上的项。
2. 通过递增索引来访问数据是特定于数组类型的方式，并不适用于其他具有隐式顺序的数据结构。

ES5 新增了 `Array.prototype.forEach()` 方法，向通用迭代需求迈进了一步，但仍然不够理想。

- 这个方法解决了单独记录索引和通过数组对象取得值的问题。
- 不过，没有办法标识迭代何时终止。

### 迭代器模式

我们希望开发者无须事先知道一种数据类型如何迭代，就能实现迭代操作。

ECMAScript 采用的解决方案就是『 **迭代器模式** 』

迭代器模式描述了一个方案，即可以把有些结构称为 “可迭代对象 Iterable”，因为它们实现了 `Iterable` 接口，而且可以通过迭代器 `Iterator` 进行迭代。

可迭代对象是一种抽象的说法。基本上，可以把可迭代对象理解成数组或集合这样的「 集合类型 」的对象。

- 包含的元素都是有限的。
- 可以定义一种遍历顺序。

```js
// 数组的元素是有限的
// 递增索引可以按序访问每个元素
let arr = [3, 1, 4];

// 集合的元素是有限的
// 可以按插入顺序访问每个元素
let set = new Set()
  .add(3)
  .add(1)
  .add(4);
```

**迭代器**（ Iterator ）是按需创建的一次性对象。每个迭代器都会关联一个可迭代对象。

- 迭代器会暴露迭代其关联可迭代对象的 API。
- 迭代器无须了解与其关联的可迭代对象的结构，只需要知道如何取得连续的值。

### 可迭代协议

实现了 `Iterable` 接口的对象，必须暴露一个属性作为「 默认迭代器 」，且这个必须使用 `Symbol.iterator` 作为键。这个默认迭代器属性必须引用一个「 迭代器工厂函数 」，调用这个工厂函数必须返回一个新迭代器。

ECMAScript 中那个很多内置类型都实现了 `Iterable` 接口：

- `String` 字符串
- `Array` 数组
- `Map` 映射
- `Set` 集合
- `arguments`对象
- `NodeList` 等 DOM 集合类型

通过检查 `Symbol.iterator` 属性值，可以知道一个对象是否是可迭代的 `Iterable`。

```js
let num = 1;
let obj = {};

// 这两种类型没有实现迭代器工厂函数
console.log(num[Symbol.iterator]); // undefined
console.log(obj[Symbol.iterator]); // undefined

let str = "abc";
let arr = ["a", "b", "c"];
let map = new Map()
  .set("a", 1)
  .set("b", 2)
  .set("c", 3);
let set = new Set()
  .add("a")
  .add("b")
  .add("c");
let els = document.querySelectorAll("div");

// 这些类型都实现了迭代器工厂函数
console.log(str[Symbol.iterator]); // f values() { [native code] }
console.log(arr[Symbol.iterator]); // f values() { [native code] }
console.log(map[Symbol.iterator]); // f values() { [native code] }
console.log(set[Symbol.iterator]); // f values() { [native code] }
console.log(els[Symbol.iterator]); // f values() { [native code] }

// 调用这个工厂函数会生成一个迭代器
console.log(str[Symbol.iterator]()); // StringIterator {}
console.log(arr[Symbol.iterator]()); // ArrayIterator {}
console.log(map[Symbol.iterator]()); // MapIterator {}
console.log(set[Symbol.iterator]()); // SetIterator {}
console.log(els[Symbol.iterator]()); // ArrayIterator {}
```

实际写代码过程中，不需要显式调用这个工厂函数来生成迭代器。ECAMScript 中的原生语言，自动兼容接收可迭代对象。

- 这些原生语言会在后台调用提供的可迭代对象的这个工厂函数，从而创建一个迭代器。
- `for-of` 循环
- 数组解构
- 扩展操作符
- `Array.from()`
- 创建集合
- 创建映射
- `Promise.all()` 接收由期约组成的可迭代对象
- `Promise.race()` 接收由期约组成的可迭代对象
- `yield*` 操作符，在生成器中使用

```js
let arr = ["foo", "bar", "baz"];

// for-of循环
for (let el of arr) {
  console.log(el);
}
// foo
// bar
// baz

// 数组解构
let [a, b, c] = arr;
console.log(a, b, c); // foo, bar, baz

// 扩展操作符
let arr2 = [...arr];
console.log(arr2); // ['foo', 'bar', 'baz']

// Array.from()
let arr3 = Array.from(arr);
console.log(arr3); // ['foo', 'bar', 'baz']

// Set构造函数
let set = new Set(arr);
console.log(set); // Set(3) {'foo', 'bar', 'baz'}

// Map构造函数
let pairs = arr.map((x, i) => [x, i]);
console.log(pairs); // [['foo', 0], ['bar', 1], ['baz', 2]]
let map = new Map(pairs);
console.log(map); // Map(3) { 'foo'=>0, 'bar'=>1, 'baz'=>2 }
```

如果对象原型链上的父类实现了 `Iterable` 接口，那该子类对象也是可迭代的 `Iterable`：

```js
class FooArray extends Array {}
let fooArr = new FooArray("foo", "bar", "baz");

for (let el of fooArr) {
  console.log(el);
}
// foo
// bar
// baz
```

### 迭代器协议

迭代器提供 `next()` API，该方法在可迭代对象中遍历数据。每次成功调用 `next()`，都会返回一个 `IteratorResult` 对象。

`IteratorResult` 包含两个属性：

- `done` 是一个布尔值，表示迭代是否结束。
- `value` 包含可迭代对象的下一个值。

```js
// 可迭代对象
let arr = ["foo", "bar"];

// 迭代器
let iter = arr[Symbol.iterator]();
console.log(iter); // ArrayIterator {}

// 执行迭代
console.log(iter.next()); // { done: false, value: 'foo' }
console.log(iter.next()); // { done: false, value: 'bar' }
console.log(iter.next()); // { done: true, value: undefined }
```

每个迭代器都表示对可迭代对象的一次性有序遍历。不同迭代器的实例相互之间没有联系，只会独立地遍历可迭代对象。

```js
let arr = ["foo", "bar"];
let iter1 = arr[Symbol.iterator]();
let iter2 = arr[Symbol.iterator]();

console.log(iter1.next()); // { done: false, value: 'foo' }
console.log(iter2.next()); // { done: false, value: 'foo' }
console.log(iter2.next()); // { done: false, value: 'bar' }
console.log(iter1.next()); // { done: false, value: 'bar' }
```

如果可迭代对象在迭代期间被修改了，那么迭代器也会反映相应的变化。

```js
let arr = ["foo", "baz"];
let iter = arr[Symbol.iterator]();

console.log(iter.next()); // { done: false, value: 'foo' }

// 在数组中间插入值
arr.splice(1, 0, "bar");

console.log(iter.next()); // { done: false, value: 'bar' }
console.log(iter.next()); // { done: false, value: 'baz' }
console.log(iter.next()); // { done: true, value: undefined }
```

### 自定义迭代器

任何实现 `Iterator` 接口的对象都可以作为迭代器使用。也就的需要具有 `next` 方法，并且该方法返回一个 `IteratorResult` 对象。

下面 👇 的 `Counter` 类里有 `Symbol.iterator` 属性，值为一个方法，调用时会返回一个具备 `next` 方法的迭代器，而且每次调用时返回的迭代器都是一个独立的实例。

```js
class Counter {
  constructor(limit) {
    this.limit = limit;
  }

  [Symbol.iterator]() {
    let count = 1,
      limit = this.limit;
    return {
      next() {
        if (count <= limit) {
          return { done: false, value: count++ };
        } else {
          return { done: true, value: undefined };
        }
      },
    };
  }
}

let counter = new Counter(3);

for (let i of counter) {
  console.log(i);
}
// 1
// 2
// 3

for (let i of counter) {
  console.log(i);
}
// 1
// 2
// 3
```

### 提前终止迭代器

可选的 `return()` 方法用于指定在迭代器提前关闭时执行的逻辑。会触发提前关闭的 ECMAScript 内置语言特性有：

- `for-of` 循环通过 `break、continue、return` 或 `throw` 提前退出。
- 解构操作并未消费所有值。

`return()` 方法必须返回一个有效的 `IteratorResult` 对象。简单情况下，可以只返回 `{ done: true }`。

```js
class Counter {
  constructor(limit) {
    this.limit = limit;
  }

  [Symbol.iterator]() {
    let count = 1,
      limit = this.limit;
    return {
      next() {
        if (count <= limit) {
          return { done: false, value: count++ };
        } else {
          return { done: true };
        }
      },
      return() {
        console.log("Exiting early");
        return { done: true };
      },
    };
  }
}

let counter1 = new Counter(5);

for (let i of counter1) {
  if (i > 2) {
    break;
  }
  console.log(i);
}
// 1
// 2
// Exiting early
```

要知道某个迭代器是否可关闭，可以测试这个迭代器实例的 `return` 属性是不是函数对象。

不是所有的可迭代对象都是可关闭的。比如，数组的迭代器就是不能关闭的。

如果迭代器没有关闭，则还可以继续从上次离开的地方继续迭代。

```js
let a = [1, 2, 3, 4, 5];
let iter = a[Symbol.iterator]();

for (let i of iter) {
  console.log(i);
  if (i > 2) {
    break;
  }
}
// 1
// 2
// 3

for (let i of iter) {
  console.log(i);
}
// 4
// 5
```

### 扩展操作符

`...` 扩展操作符可以将一个可迭代对象展开，将其中包含的元素转化为一个参数序列。

具体使用场景如下：

**可变参数个数的函数调用 & 将数组每一项作为参数传入函数**：

```js
function add(...vals) {
  let sum = 0;

  for (let i = 0; i < vals.length; i++) {
    sum += vals[i];
  }

  return sum;
}

let arr = [1, 2, 3, 4, 5, 6];
let sum = add(...arr);

console.log(sum); // 21
```

**数组的浅拷贝 & 拼接**：

```js
let arr1 = [1, 2];
let arr2 = [5, 6];
let newArr = [20, ...arr1, ...arr2];
console.log(newArr); // [20,1,2,5,6]
```

**将字符串转为真正的数组**：

```js
[..."hello"];
// [ "h", "e", "l", "l", "o" ]
```

**类数组转换为数组**：

```js
var nodeList = document.querySelectorAll("div");
var array = [...nodeList];
```

**对象的浅拷贝 & 合并**：

```js
var obj1 = { foo: "bar", x: 42 };
var obj2 = { foo: "baz", y: 13 };

var clonedObj = { ...obj1 };
// 克隆后的对象: { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// 合并后的对象: { foo: "baz", x: 42, y: 13 }
```

## 生成器

`Generator` 生成器是 ECMAScript 6 新增的一个极为灵活的结构，拥有**在一个函数块内暂停和恢复代码执行的能力**。

生成器的形式是一个函数，函数名称前面加一个星号 `*` 表示它是一个生成器。

- 标识生成器函数的星号不受两侧空格的影响。
- 箭头函数不能用来定义生成器函数。

```js
// 生成器函数声明
function* generatorFn() {}

// 生成器函数表达式
let generatorFn = function*() {};

// 作为对象字面量方法的生成器函数
let foo = {
  *generatorFn() {},
};

// 作为类实例方法的生成器函数
class Foo {
  *generatorFn() {}
}

// 作为类静态方法的生成器函数
class Bar {
  static *generatorFn() {}
}
```

调用生成器函数会产生一个「 生成器对象 」。生成器对象一开始处于暂停执行（ suspended ）的状态。与迭代器相似，生成器对象也实现了 `Iterator` 接口，因此具有 `next()` 方法。调用这个方法会让生成器开始或恢复执行。

同时生成器对象还实现了 `Iterable` 接口，它自身即是可迭代对象，也是迭代器。

```js
function* generatorFn() {}

const g = generatorFn();

console.log(g === g[Symbol.iterator]());
// true
```

`next()` 方法的返回值类似于迭代器，有一个 `done` 属性和一个 `value` 属性。

- 函数体为空的生成器函数中间不会停留，调用一次 `next()` 就会让生成器到达 `done: true` 状态。
- `value` 属性默认值为 `undefined` ，可以通过生成器函数的返回值指定。

生成器函数只会在初次调用 `next()`方法后开始执行，如下所示：

```js
function* generatorFn() {
  console.log("foobar");
  return "foo";
}

// 初次调用生成器函数并不会打印日志
let generatorObject = generatorFn();

let result = generatorObject.next(); // foobar
console.log(result); // { done: true, value: 'foo' }
```

### `yield` 关键字

`yield` 关键字可以让生成器暂停执行。生成器函数遇到这个关键字后，执行会停止，函数作用域的状态会被保留。

停止执行的生成器函数只能通过在生成器对象上调用 `next()` 方法来恢复执行。

`next` 方法的运行逻辑如下:

1. 遇到 `yield` 表达式，就暂停执行后面的操作，并将紧跟在 `yield` 后面的那个表达式的值，作为返回的对象的 `value` 属性值。如果是遇到 `return` 语句, 将 `return` 语句后面的表达式的值，作为返回的对象的 `value` 属性值。
2. 下一次调用 `next` 方法时，再继续往下执行，直到遇到下一个 `yield` 表达式, 或者 `return` 语句.
3. 如果到最后, 该函数没有 `return` 语句，则返回的对象的 `value` 属性值为 `undefined`

```js
function* generatorFn() {
  yield "foo";
  yield "bar";
  return "baz";
}

let generatorObject = generatorFn();

console.log(generatorObject.next()); // { done: false, value: 'foo' }
console.log(generatorObject.next()); // { done: false, value: 'bar' }
console.log(generatorObject.next()); // { done: true, value: 'baz' }
```

对于两个生成器对象，在一个生成器对象上调用 `next()` 不会影响其他生成器：

```js
let generatorObject1 = generatorFn();
let generatorObject2 = generatorFn();

console.log(generatorObject1.next()); // { done: false, value: 'foo' }
console.log(generatorObject2.next()); // { done: false, value: 'foo' }
console.log(generatorObject2.next()); // { done: false, value: 'bar' }
console.log(generatorObject1.next()); // { done: false, value: 'bar' }
```

#### 生成器对象作为可迭代对象

```js
function* generatorFn() {
  yield 1;
  yield 2;
  yield 3;
}

for (const x of generatorFn()) {
  console.log(x);
}
// 1
// 2
// 3
```

#### 使用 `yield` 实现输入和输出

**`yield` 表达式本身总是返回 `undefined`**。`next` 方法可以带一个参数，该参数就会被当作上一个 `yield` 表达式的返回值。

⚠️ 第一次调用 `next()` 传入的值不会被使用，因为这一次调用是为了开始执行生成器函数。

```js
function* generatorFn(initial) {
  console.log(initial);
  console.log(yield);
  console.log(yield);
}

let generatorObject = generatorFn("foo");

generatorObject.next("bar"); // foo
generatorObject.next("baz"); // baz
generatorObject.next("qux"); // qux
```

```js
function* foo(x) {
  var y = 2 * (yield x + 1);
  var z = yield y / 3;
  return x + y + z;
}

var a = foo(5);
a.next(); // Object{value:6, done:false}
a.next(); // Object{value:NaN, done:false}
a.next(); // Object{value:NaN, done:true}

var b = foo(5);
b.next(); // { value:6, done:false }
b.next(12); // { value:8, done:false }
b.next(13); // { value:42, done:true }
```

#### 使用 `*` 增强 `yield` 的行为

可以使用星号 `*` 增强 `yield` 的行为，让它能够迭代一个可迭代对象，从而一次产出一个值。

与生成器函数的星号类似，`yield` 星号两侧的空格不影响其行为。

```js
function* generatorFn() {
  yield* [1, 2, 3];
}

let generatorObject = generatorFn();

for (const x of generatorFn()) {
  console.log(x);
}
// 1
// 2
// 3

// 等价的generatorFn：
function* generatorFn() {
  for (const x of [1, 2, 3]) {
    yield x;
  }
}
```

### 提前终止生成器

与迭代器类似，生成器也支持“可关闭”的概念。所有的生成器对象都具备 `return()` 方法和 `throw()` 方法用于提前终止迭代器。

`return()`方法会强制生成器进入关闭状态。提供给 `return()` 方法的值，就是终止迭代器对象的值。

```js
function* generatorFn() {
  for (const x of [1, 2, 3]) {
    yield x;
  }
}

const g = generatorFn();

console.log(g); // generatorFn {<suspended>}
console.log(g.return(4)); // { done: true, value: 4 }
console.log(g); // generatorFn {<closed>}
```

`throw()` 方法会在暂停的时候将一个提供的错误注入到生成器对象中。如果错误未被处理，生成器就会关闭。

```js
function* generatorFn() {
  for (const x of [1, 2, 3]) {
    yield x;
  }
}

const g = generatorFn();

console.log(g); // generatorFn {<suspended>}

try {
  g.throw("foo");
} catch (e) {
  console.log(e); // foo
}

console.log(g); // generatorFn {<closed>}
```

假如生成器函数内部处理了这个错误，那么生成器就不会关闭，而且还可以恢复执行。错误处理会跳过对应的 `yield`。

```js
function* generatorFn() {
  for (const x of [1, 2, 3]) {
    try {
      yield x;
    } catch (e) {
      console.log("Error: " + e);
    }
  }
}

const g = generatorFn();

console.log(g.next()); // { done: false, value: 1}
g.throw("foo"); // Error: foo
console.log(g.next()); // { done: false, value: 3}
```
