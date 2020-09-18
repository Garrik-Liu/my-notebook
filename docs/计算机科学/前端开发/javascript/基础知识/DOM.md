# DOM

DOM（文档对象模型）是针对 HTML 和 XML 文档的一个 API（应用程序编程接口）, 将文档表示成一个层次化的节点树, 并且允许开发者去操纵这些节点。各家浏览器按照 DOM 标准实现了这套 API，使其成为跨平台、语言无关的表示和操作网页的方式。

1998 年 10 月 DOM 1 级规范成为 W3C 的推荐标准, 之后又有 DOM 2 级, DOM 3 级标准。

## 节点层级

在 DOM 中 HTML 文档被表示为一个由节点构成的层级结构。节点分很多类型，每种类型对应着文档中不同的信息或标记。

- `document` 节点表示每个文档的根节点。
- 在 HTML 中根节点的唯一子结点是 `<html>` 元素，称之为文档元素 `documentElement`。所有其他元素都存在于这个元素之内，每个文档只能有一个文档元素。
- HTML 中的每段标记都可以表示为这个树形结构中的一个节点。

🌰 例如：

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

![2020-09-16-21-45-36](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-16-21-45-36.png)

## 节点类型

DOM 中总共有 12 种节点类型。但是其中有一些已经被弃用，有一些是只针对 XML 的。

下面 👇 我们针对于 HTML 文档，介绍一些开发中常用的节点类型。

### Node 类型

[W3cubDocs 文档](https://docs.w3cub.com/dom/node/)

在 DOM 中，所有节点类型都继承 Node 类型。因此，所有类型都共享相同的基本属性和方法。

#### `nodeType` 属性

每个节点都有 `nodeType` 属性，表示该节点的类型。节点类型由定义在 `Node` 对象上的 12 个数值常量表示：

- `Node.ELEMENT_NODE` = 1
- `Node.ATTRIBUTE_NODE` = 2
- `Node.TEXT_NODE` = 3
- `Node.CDATA_SECTION_NODE` = 4
- `Node.ENTITY_REFERENCE_NODE` = 5
- `Node.ENTITY_NODE` = 6
- `Node.PROCESSING_INSTRUCTION_NODE` = 7
- `Node.COMMENT_NODE` = 8
- `Node.DOCUMENT_NODE` = 9
- `Node.DOCUMENT_TYPE_NODE` = 10
- `Node.DOCUMENT_FRAGMENT_NODE` = 11
- `Node.NOTATION_NODE` = 12

可通过与这些常量比较，来确定节点类型：

```js
if (someNode.nodeType == Node.ELEMENT_NODE) {
  alert("Node is an element.");
}
```

#### 节点关系

文档中的所有节点都与其他节点有关系。这些关系可以形容为家族关系。

- 🌰 例如，在 HTML 中，`<body>` 元素是 `<html>` 元素的子元素，而 `<html>` 元素则是 `<body>` 元素的父元素。`<head>` 元素是 `<body>` 元素的同胞元素，因为它们有共同的父元素 `<html>`。

每个节点都有一个 `childNodes` 属性，其中包含一个 `NodeList` 的实例，是一个类数组对象。该对象保存的是一个节点列表。

- 可以使用中括号 `[]`，或使用 `item()` 方法访问 `NodeList` 中的元素。
- `NodeList` 对象中保存的并不是 DOM 结构的快照，实际 DOM 结构的变化会自动地在 `NodeList` 中反映出来。

```js
let firstChild = someNode.childNodes[0];
let secondChild = someNode.childNodes.item(1);
let count = someNode.childNodes.length;
```

`hasChildNodes()` 方法来查询节点是否有子节点，方法返回一个布尔值。相比查询 childNodes 的 length 属性，这个方法更方便。

```js
var foo = document.getElementById("foo");

if (foo.hasChildNodes()) {
  console.log("该节点有子节点");
}
```

每个节点都有一个 `parentNode` 属性，指向其 DOM 树中的父元素。`childNodes` 中的所有节点都有同一个父元素，因此它们的 `parentNode` 属性都指向同一个节点。

`childNodes` 列表中的每个节点都是同一列表中其他节点的同胞节点。使用 `previousSibling` 和 `nextSibling` 可以获取一个节点的同胞节点。

`NodeList` 中第一个节点的 `previousSibling` 属性是 `null`，最后一个节点的 `nextSibling` 属性也是 `null`。

`firstChild` 和 `lastChild` 分别指向 `childNodes` 中的第一个和最后一个子节点。

- `someNode.firstChild` 的值始终等于 `someNode.childNodes[0]`，而 `someNode.lastChild` 的值始终等于 `someNode.childNodes[someNode.childNodes.length-1]`。
- 如果只有一个子节点，则 `firstChild` 和 `lastChild` 指向同一个节点。
- 如果没有子节点，则 `firstChild` 和 `lastChild` 都是 `null`。

![2020-09-17-09-06-36](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-17-09-06-36.png)

#### 操纵节点

`appendChild()` 方法用于在 `childNodes` 列表末尾添加节点。方法返回新添加的节点。

```js
let returnedNode = someNode.appendChild(newNode);
alert(returnedNode == newNode); // true
alert(someNode.lastChild == newNode); // true
```

如果把文档中已经存在的节点传给 `appendChild()`，则这个节点会从之前的位置被转移到新位置。

```js
// 假设someNode有多个子节点
let returnedNode = someNode.appendChild(someNode.firstChild);
alert(returnedNode == someNode.firstChild); // false
alert(returnedNode == someNode.lastChild); // true
```

使用 `insertBefore()` 方法把节点放到 `childNodes` 中的特定位置。接收两个参数：

- 要插入的节点
- 参照节点

调用方法后，要插入的节点会变成参照节点的前一个同胞节点，并被返回。如果参照节点是 `null`，则 `insertBefore()` 与 `appendChild()` 效果相同。

```js
// 作为最后一个子节点插入
returnedNode = someNode.insertBefore(newNode, null);
alert(newNode == someNode.lastChild); // true

// 作为新的第一个子节点插入
returnedNode = someNode.insertBefore(newNode, someNode.firstChild);
alert(returnedNode == newNode); // true
alert(newNode == someNode.firstChild); // true

// 插入最后一个子节点前面
returnedNode = someNode.insertBefore(newNode, someNode.lastChild);
alert(newNode == someNode.childNodes[someNode.childNodes.length - 2]); // true
```

使用 `replaceChild()` 方法将一个节点替换成另一个节点。要替换的节点会被返回并从文档树中完全移除。接收两个参数：

- 要插入的节点
- 要替换的节点

```js
// 替换第一个子节点
let returnedNode = someNode.replaceChild(newNode, someNode.firstChild);

// 替换最后一个子节点
returnedNode = someNode.replaceChild(newNode, someNode.lastChild);
```

```js
// 替换第一个子节点
let returnedNode = someNode.replaceChild(newNode, someNode.firstChild);

// 替换最后一个子节点
returnedNode = someNode.replaceChild(newNode, someNode.lastChild);
```

使用 `removeChild()` 方法删除一个节点，被移除的节点会被返回。接收一个参数，即要移除的节点。

```js
// 删除第一个子节点
let formerFirstChild = someNode.removeChild(someNode.firstChild);

// 删除最后一个子节点
let formerLastChild = someNode.removeChild(someNode.lastChild);
```

`cloneNode()` 方法会返回与调用它的节点一模一样的节点。接收一个布尔值参数，表示是否深复制。

- 传入 `true` 参数，会进行深复制，即复制节点及其整个子 DOM 树。
- 传入 `false`，则只会复制调用该方法的节点。

注意，`cloneNode()` 方法不会复制添加到 DOM 节点的 JavaScript 属性，比如事件处理程序。这个方法只复制 HTML 属性。

```html
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
```

```js
let deepList = myList.cloneNode(true);
alert(deepList.childNodes.length); // 3

let shallowList = myList.cloneNode(false);
alert(shallowList.childNodes.length); // 0
```

### Document 类型

[W3cubDocs 文档](https://docs.w3cub.com/dom/document/adoptnode/)

`Document` 类型是 JavaScript 中表示文档节点的类型。`HTMLDocument` 继承自 `Document`，表示 HTML 文档。Document 类型的节点有以下特征：

- `nodeType` 等于 `9`；
- `nodeName` 值为 `"#document"`；
- `nodeValue` 值为 `null`；
- `parentNode` 值为 `null`；
- `ownerDocument` 值为 `null`；
- 子节点可以是 `DocumentType（` 最多一个 ）、`Element`（ 最多一个 ）、`ProcessingInstruction` 或 `Comment` 类型；

文档对象 `document` 是 `HTMLDocument` 的实例。`document` 是 `window` 对象的属性，可以作为全局变量访问。

#### 文档子节点

- `document.documentElement` 属性，始终指向 HTML 页面中的 `<html>` 元素。
- `document.body` 属性，直接指向 `<body>` 元素。
- `document.doctype` 属性，直接指向 HTML 文档的 `<!doctype>` 标签。

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body></body>
</html>
```

```js
let html = document.documentElement; // 取得对 <html> 的引用
let body = document.body; // 取得对 <body> 的引用
let doctype = document.doctype; // 取得对 <!DOCTYPE html> 的引用

alert(html === document.childNodes[1]); // true
alert(body === document.childNodes[1].childNodes[1]); // true
alert(doctype === document.childNodes[0]); // true
alert(doctype === document.firstChild); // true
```

#### 文档信息

- `title` 属性包含 `<title>` 元素中的文本。不过，修改 `title` 属性并不会改变 `<title>` 元素。
- `URL` 属性包含当前页面的完整 URL。
- `domain` 属性包含页面的域名。
- `referrer` 属性包含链接到当前页面的那个页面的 URL。如果当前页面没有来源，则 `referrer` 属性包含空字符串。

```js
console.log(document.title); // 第 14 章　DOM-图灵社区
console.log(document.URL); // https://www.ituring.com.cn/book/tupubarticle/32500
console.log(document.domain); // www.ituring.com.cn
console.log(document.referrer); // https://www.ituring.com.cn/book/tupubarticle/32498
```

#### 元素获取

使用 DOM 最常见的情形可能就是获取某个或某组元素的引用，然后对它们执行某些操作。

`getElementById()` 方法接收一个参数，即要获取元素的 ID，如果找到了则返回这个元素，如果没找到则返回 `null`。

```html
<div id="myDiv">Some text</div>
```

```js
let div = document.getElementById("myDiv"); // 取得对这个<div>元素的引用
```

`getElementsByTagName()` 方法接收一个参数，即要获取元素的标签名 ( 不区分大小写 )，返回包含零个或多个匹配元素的 `HTMLCollection` 对象。

```js
let images = document.getElementsByTagName("img");
alert(images.length); // 图片数量
alert(images[0].src); // 第一张图片的 src 属性
```

`HTMLCollection` 对象提供 `namedItem()` 方法。可以获得列表中，具有指定 `name` 属性节点。这提供了除索引之外的另一种获取列表项的方式。为了使用便利，`HTMLCollection` 对象还支持直接使用中括号 `["name"]` 来获取。

```html
<div name="a"></div>
<div name="b"></div>
<div name="c"></div>
```

```js
let divList = document.getElementsByTagName("div");
divList.namedItem("a") === divList["a"]; // true
```

`getElementsByName()` 方法会返回包含具有给定 `name` 属性的所有元素的 `NodeList` 对象。

```js
<ul>
    <li>
      <input type="radio" value="red" name="color" id="colorRed">
      <label for="colorRed">Red</label>
    </li>
    <li>
      <input type="radio" value="green" name="color" id="colorGreen">
      <label for="colorGreen">Green</label>
    </li>
    <li>
      <input type="radio" value="blue" name="color" id="colorBlue">
      <label for="colorBlue">Blue</label>
    </li>
</ul>
```

```js
let inputList = document.getElementsByName("color");
console.log(inputList);
// NodeList(3) [ input#colorRed, input#colorGreen, input#colorBlue ]
```

### Element 类型

[W3cubDocs 文档](https://docs.w3cub.com/dom/element/)

`Element` 类型描述了所有元素所普遍具有的方法和属性。

`Element` 类型的节点具有以下特征：

- `nodeType` 等于 `1`；
- `nodeName` 值为元素的标签名；
- `nodeValue` 值为 `null`；
- `parentNode` 值为 `Document` 或 `Element` 对象；
- 子节点可以是 `Element`、`Text`、`Comment`、`ProcessingInstruction`、`CDATASection`、`EntityReference` 类型；

`Element` 类型本身提供 `nodeName` 或 `tagName` 属性来获取元素的标签名 ( 全大写 )

```js
// <div id="myDiv"></div>
let div = document.getElementById("myDiv");
alert(div.tagName); // "DIV"
alert(div.tagName == div.nodeName); // true
```

#### HTMLElement 类型

`HTMLElement` 类型继承自 `Element` 类型，用以表示 HTML 元素。所有 HTML 元素都是 `HTMLElement` 或其子类型的实例。

提供如下属性，用来获取 HTML 元素上对应的属性值，也可以用来修改属性值。

- `id` 属性
- `title` 属性
- `className` 属性，相当于 `class` 属性（ 因为 `class` 是 ECMAScript 关键字，所以不能直接用这个名字 ）
- `style` 属性，返回一个 `CSSStyleDeclaration` 对象，包含该元素的所有 `style` 属性及其属性值。

```html
<div
  id="myDiv"
  style="height: 300px; width: 200px;"
  class="div_1 div_2 div_3"
  title="hahaha"
></div>
```

```js
let div = document.getElementById("myDiv");
console.log(div.id); // "myDiv"
console.log(div.className); // "div_1, div_2, div_3"
console.log(div.title); // "hahaha"
console.log(div.style); // CSS2Properties { height → "300px", width → "200px" }

// 可以使用下列代码修改元素的属性：
div.id = "someOtherId";
div.className = "div_4, div_5, div_6";
div.title = "lalala";
```

#### 操控属性

`getAttribute()` 方法用以取得 HTML 元素的上的指定属性值。

也能取得不是 HTML 语言正式属性的自定义属性的值。根据 HTML5 规范的要求，自定义属性名应该前缀 `data-` 以方便验证。

```html
<div id="myDiv" class="div_1 div_2 div_3" data-my-attribute="hello!"></div>
```

```js
let div = document.getElementById("myDiv");
console.log(div.getAttribute("id")); // "myDiv"
console.log(div.getAttribute("class")); // "div_1, div_2, div_3"
console.log(div.getAttribute("data-my-attribute")); // "hello!"
```

`getAttribute()` 方法的返回值都是字符串形式。

- 访问 `style` 属性时，返回的是 CSS 字符串。`HTMLElement` 实例的 `style` 属性返回的是一个 `CSSStyleDeclaration` 对象。
- 访问事件属性时，返回的是字符串形式的，事件处理回调函数的源代码。

---

`setAttribute()` 方法用以给指定的属性设置属性值。适用于 HTML 属性，也适用于自定义属性。接收两个参数：

- 要设置的属性名
- 属性值

如果属性已经存在，则 `setAttribute()` 会以指定的值替换原来的值；如果属性不存在，则 `setAttribute()` 会以指定的值创建该属性。

```js
div.setAttribute("id", "someOtherId");
div.setAttribute("class", "ft");
div.setAttribute("title", "Some other text");
```

---

`removeAttribute()` 用于从元素中删除属性。

```js
div.removeAttribute("class");
```

#### `attributes` 属性

`Element` 类型的 `attributes` 属性包含一个 `NamedNodeMap` 对象。元素的每个属性都表示为一个 `Attr` 类型节点，并保存在这个 `NamedNodeMap` 对象中。

`Attr` 类型节点的 `nodeName` 属性是对应属性的名字，`nodeValue` 是属性的值。

`NamedNodeMap` 对象包含下列方法：

- `getNamedItem(name)`，返回 `nodeName` 属性等于 `name` 的节点。提供中括号 `[]` 访问属性的简写形式；
- `removeNamedItem(name)`，删除 `nodeName` 属性等于 `name` 的节点；
- `setNamedItem(node)`，向对象中添加 `node` 节点。以此方式，给元素添加一个新属性。
- `item(pos)`，返回索引位置 `pos` 处的节点；

```js
// 取得元素 id 属性的值
let id = element.attributes.getNamedItem("id").nodeValue;
// 使用中括号访问属性的简写形式：
id = element.attributes["id"].nodeValue;
// 通过将 nodeValue 设置为新值，来设置属性值
element.attributes["id"].nodeValue = "someOtherId";
```

通常开发者更喜欢使用 `getAttribute()`、`removeAttribute()` 和`setAttribute()` 方法。

`attributes` 属性最有用的场景是需要迭代元素上所有属性。

- `attributes.length` 属性的值表示元素具有的属性数量。

```js
// 以下代码能够迭代一个元素上的所有属性，
// 并以 attribute1="value1" attribute2="value2" 的形式生成格式化字符串：
function outputAttributes(element) {
  let pairs = [];

  for (let i = 0, len = element.attributes.length; i < len; ++i) {
    const attribute = element.attributes[i];
    pairs.push(`${attribute.nodeName}="${attribute.nodeValue}"`);
  }

  return pairs.join(" ");
}
```

#### 创建元素

使用 `document.createElement()` 方法创建新元素。接收一个参数，即要创建元素的标签名 ( 不区分大小 )

新创建的元素还没有添加到文档树，可以使用 `appendChild()`、`insertBefore()` 或 `replaceChild()` 将其插入文档树。

```js
let div = document.createElement("div");

div.id = "myNewDiv";
div.className = "box";

document.body.appendChild(div);
```

#### 元素后代

前面提过，`childNodes` 属性包含元素所有的子节点，

要取得某个元素的子节点和其他后代节点，可以使用元素的 `getElementsByTagName()` 方法。元素上调用这个方法与在文档上调用是一样的，只不过搜索范围限制在当前元素之内。

```js
let ul = document.getElementById("myList");
let items = ul.getElementsByTagName("li");
```

### Text 类型

### Comment 类型

## DOM 编程

### 动态加载脚本

动态脚本就是在页面初始加载时不存在，之后又通过 DOM 包含的脚本。有两种方式通过 `<script>` 动态为网页添加脚本：

- 引入外部文件
- 直接插入源代码。 `<script>` 元素上有一个 `text` 属性，可以用来添加 JavaScript 代码。

```js
// 引入外部文件
let script = document.createElement("script");
script.src = "foo.js";
document.body.appendChild(script);

// 直接插入源代码
let script = document.createElement("script");
script.text = "function sayHi(){alert('hi');}";
document.body.appendChild(script);
```

这个过程可以抽象为一个函数：

```js
function loadScript(url) {
  let script = document.createElement("script");
  script.src = url;
  document.body.appendChild(script);
}

loadScript("client.js");
```

⚠️ 注意，通过 `innerHTML` 属性创建的 `<script>` 元素永远不会执行。浏览器会创建 `<script>` 元素，以及其中的脚本文本，但解析器会给这个 `<script>` 元素打上永不执行的标签。

### 动态加载样式

CSS 样式在 HTML 页面中可以通过两个元素加载。

- `<link>` 元素包含 CSS 外部文件。
- `<style>` 元素添加嵌入样式。提供 `styleSheet.cssText` 用于添加 CSS 规则。

```js
// <link> 元素包含 CSS 外部文件
let link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "styles.css";
let head = document.getElementsByTagName("head")[0];
head.appendChild(link);

// <style> 元素添加嵌入样式
let style = document.createElement("style");
style.type = "text/css";
style.styleSheet.cssText = "body{background-color:red}";
let head = document.getElementsByTagName("head")[0];
head.appendChild(style);
```

### 实时的 NodeList

在使用 `NodeList` 对象，以及它的子类，例如 `HTMLCollection` 对象时，要注意它们都是「 实时的 」，文档结构的变化会实时地在它们身上反映出来。

🌰 例如，下面的代码会导致无穷循环：

```js
let divs = document.getElementsByTagName("div");

for (let i = 0; i < divs.length; i++) {
  let div = document.createElement("div");
  document.body.appendChild(div);
}
```

任何时候要迭代 `NodeList`，最好初始化一个变量保存当时查询时的长度：

```js
let divs = document.getElementsByTagName("div");

for (let i = 0, len = divs.length; i < len; ++i) {
  let div = document.createElement("div");
  document.body.appendChild(div);
}
```

最好限制操作 `NodeList` 的次数。因为每次查询都会搜索整个文档，所以最好把查询到的 `NodeList` 缓存起来。

## MutationObserver 接口

使用 `MutationObserver` 接口，可以观察整个文档，某个元素，元素属性、文本的变化，并在 DOM 被修改时异步执行回调。

## DOM 扩展

2008 年以前，大部分浏览器对 DOM 的扩展是专有的。此后，W3C 开始着手将这些已成为事实标准的专有扩展编制成正式规范。

但是，这些扩展并不属于 DOM 的标准，不属于 DOM Level 中的任何一级。它们只是作为功能扩展的非核心 API。

### Selectors API

Selectors API 规定了，浏览器原生支持根据 CSS 选择符匹配查询 DOM 元素。

#### `querySelector()` 方法

`querySelector()` 方法接收 CSS 选择符参数，返回匹配该模式的第一个后代元素，如果没有匹配项则返回 `null`。

在 `Document` 上使用 `querySelector()` 方法时，会从文档元素开始搜索；在 `Element` 上使用 `querySelector()` 方法时，则只会从当前元素的后代中查询。

```js
// 取得<body>元素
let body = document.querySelector("body");

// 取得ID为"myDiv"的元素
let myDiv = document.querySelector("#myDiv");

// 取得类名为"selected"的第一个元素
let selected = document.querySelector(".selected");

// 取得类名为"button"的图片
let img = document.body.querySelector("img.button");
```

#### `querySelectorAll()` 方法

`querySelectorAll()` 方法，也接收一个用于查询的参数，返回包含所有匹配的节点的 `NodeList` 静态实例，也就是它是文档结构的「 快照 」而非「 实时 」的查询。避免了使用 `NodeList` 对象可能造成的性能问题。

- 如果没有匹配项，则返回空的 `NodeList` 实例。

```js
// 取得ID为"myDiv"的<div>元素中的所有<em>元素
let ems = document.getElementById("myDiv").querySelectorAll("em");

// 取得所有类名中包含"selected"的元素
let selecteds = document.querySelectorAll(".selected");

// 取得所有是<p>元素子元素的<strong>元素
let strongs = document.querySelectorAll("p strong");
```

#### `matches()`

`matches()` 方法接收一个 CSS 选择符参数，如果元素匹配则该选择符返回 `true`，否则返回 `false`。

这个方法可以方便地检测某个元素会不会被 `querySelector()` 或 `querySelectorAll()` 方法返回

目前，所有主流浏览器都支持 `matches()`。

```html
<div id="haha" class="a b c"></div>
```

```js
document.getElementById("haha").matches(".a"); // true
document.getElementById("haha").matches(".b"); // true
document.getElementById("haha").matches(".a,.b"); // true
document.getElementById("haha").matches(".d"); // false
```

### Traversal API

IE9 之前的版本不会把元素间的空格当成空白节点，而其他浏览器则会。这样就导致了 `childNodes` 属性上的差异。为了弥补这个差异，同时不影响 DOM 规范，W3C 通过新的 Element Traversal 规范。

大多数时候，开发者想遍历的是 `Element` 类型节点。Element Traversal API 为 DOM 元素添加了 `5` 个属性，为遍历 `Element` 类型节点提供便利。开发者不用担心空白文本节点的问题了。

- `childElementCount`，返回 `Element` 类型的子元素数量；
- `firstElementChild`，指向第一个 `Element` 类型的子元素；
- `lastElementChild`，指向最后一个 `Element` 类型的子元素；
- `previousElementSibling`，指向前一个 `Element` 类型的同胞元素；
- `nextElementSibling`，指向后一个 `Element` 类型的同胞元素；

过去要以跨浏览器方式遍历特定元素的所有子元素，代码大致是这样写的：

```js
let parentElement = document.getElementById("parent");
let currentChildNode = parentElement.firstChild;

while (currentChildNode) {
  // 判断是不是 Element 类型节点。
  if (currentChildNode.nodeType === 1) {
    processChild(currentChildNode);
  }

  currentChildNode = currentChildNode.nextSibling;
}
```

使用 Element Traversal 属性之后，以上代码可以简化如下：

```js
let parentElement = document.getElementById("parent");
let currentChildElement = parentElement.firstElementChild;

while (currentChildElement) {
  processChild(currentChildElement);
  currentChildElement = currentChildElement.nextElementSibling;
}
```

### HTML5 扩展

在所有以前的 HTML 规范中，从未出现过描述 JavaScript 接口的情形，HTML 就是一个纯标记语言。

然而，HTML5 规范却包含了与标记相关的大量 JavaScript API 定义。浏览器如果支持 HTML5 就必须提供这些 JavaScript API。

HTML5 覆盖的范围极其广泛，其中一部分 API 是和 DOM 相关的扩展，这一节只介绍这一部分。

#### CSS 类扩展

`getElementsByClassName()` 方法接收一个参数，即包含一个或多个 `class` 名的字符串 ( 空格隔开 )，返回类名中包含相应 `class` 名的元素的 `NodeList`。

在 `document` 上调用 `getElementsByClassName()` 返回文档中所有匹配的元素，而在特定元素上调用 `getElementsByClassName()` 则返回该元素后代中匹配的元素。

```js
// 取得所有类名中包含 "username" 和 "current" 元素
// 这两个类名的顺序无关紧要
let allCurrentUsernames = document.getElementsByClassName("username current");

// 取得ID为 "myDiv" 的元素子树中所有包含 "selected" 类的元素
let selected = document
  .getElementById("myDiv")
  .getElementsByClassName("selected");
```

---

前面提到过，可以通过 `className` 属性实现添加、删除和替换 `class` 名。但 `className` 是一个字符串，所以每次操作之后都需要重新设置这个值才能生效。

```js
// 要删除"user"类
let targetClass = "user";

// 把类名拆成数组
let classNames = div.className.split(/\s+/);

// 找到要删除类名的索引
let idx = classNames.indexOf(targetClass);

// 如果有则删除
if (idx > -1) {
  classNames.splice(i, 1);
}

// 重新设置类名
div.className = classNames.join(" ");
```

HTML5 给所有元素增加 `classList` 属性。保存的是一个 `DOMTokenList` 实例。与其他 DOM 集合类型一样，`DOMTokenList` 也有 `length` 属性表示自己包含多少项，也可以通过 `item()` 或中括号 `[]` 取得个别的元素。

此外，`DOMTokenList` 还增加了以下方法。

- `add(name)`，向类名列表中添加指定的字符串值 `name`。如果这个值已经存在，则什么也不做。
- `contains(name)`，返回布尔值，表示给定的 `name` 是否存在。
- `remove(name)`，从类名列表中删除指定的字符串值 `name`。
- `toggle(name)`，如果类名列表中已经存在指定的 `name`，则删除；如果不存在，则添加。

```js
// 删除"disabled"类
div.classList.remove("disabled");

// 添加"current"类
div.classList.add("current");

// 切换"user"类
div.classList.toggle("user");

// 检测类名
if (div.classList.contains("bd")) {
  // 执行操作
}

// 迭代类名
for (let class of div.classList) {
  doStuff(class);
}
```

#### HTMLDocument 扩展

HTML5 扩展了 `HTMLDocument` 类型，增加了更多功能。

`readyState` 是 IE4 最早添加到 `document` 对象上的属性 HTML5 将这个属性写进了标准。

`document.readyState` 属性用以判断文档是否加载完毕。有两个可能的值：

- `loading`，表示文档正在加载；
- `complete`，表示文档加载完成；

「 加载完成 」的意思是，浏览器已完全加载 HTML，并构建了 DOM 树。并且加载完成了所有外部资源，图片，样式等。

```js
if (document.readyState == "complete") {
  // 执行操作
}
```

---

`document.compatMode` 属性指示浏览器当前处于什么渲染模式。

- 标准模式：`"CSS1Compat"`
- 混杂模式：`"BackCompat"`

```js
if (document.compatMode == "CSS1Compat") {
  console.log("Standards mode");
} else {
  console.log("Quirks mode");
}
```

---

HTML5 增加了 `document.head` 属性，指向文档的 `<head>` 元素。

#### 自定义属性

HTML5 允许用户给元素指定自定义的属性。需要以 `data-` 为前缀。

```html
<div id="myDiv" data-appId="12345" data-myname="Nicholas"></div>
```

通过元素的 `dataset` 属性可以访问自定义元素，属性值是一个 `DOMStringMap` 的实例，是一个键值对映射。

- 通过 `data-` 后面的字符串作为键来访问属性值。
- 属性 `data-myname`、`data-myName` 可以通过 `myname` 访问，但要注意 `data-my-name`、`data-My-Name` 要通过 `myName` 来访问。

```js
// 本例中使用的方法仅用于示范

let div = document.getElementById("myDiv");

// 取得自定义数据属性的值
let appId = div.dataset.appId;
let myName = div.dataset.myname;

// 设置自定义数据属性的值
div.dataset.appId = 23456;
div.dataset.myname = "Michael";

// 有"myname"吗？
if (div.dataset.myname) {
  console.log("Hello, ${div.dataset.myname}");
}
```

#### 插入标记

读取 `innerHTML` 属性时，会返回元素所有后代的 HTML 字符串。

在写入 `innerHTML` 时，则会将提供的字符串解析为 DOM 树，并替代元素中原来包含的所有节点。

注意，通过 `innerHTML` 插入的 `<script>` 标签是不会执行的。

```js
div.innerHTML = "<p>Hello World!</p>";
```

---

读取 `outerHTML` 属性时，会返回调用它的元素（及所有后代元素）的 HTML 字符串。

在写入 `outerHTML` 属性时，调用它的元素会被传入的 HTML 字符串经解释之后生成的 DOM 树取代。

```js
// 新的 <p> 元素会取代DOM树中原来的 <div> 元素。
div.outerHTML = "<p>This is a paragraph.</p>";
```

---

使用本节介绍的方法可能会导致内存问题。比如，如果被移除的子树元素中之前有关联的事件处理程序，那它们之间的绑定关系会滞留在内存中。如果这种替换操作频繁发生，页面的内存占用就会持续攀升。

同时，HTML 解析器的构建与解构也比较消耗性能。因此最好限制使用 `innerHTML` 和 `outerHTML` 的次数。

```js
for (let value of values) {
  ul.innerHTML += "<li>${value}</li>"; // 别这样做！
}
// 这段代码，每次循环都要先读取 innerHTML，然后再写入。要访问两次 innerHTML。非常消耗性能。
// 最好通过循环先构建一个独立的字符串，最后再一次性把生成的字符串赋值给 innerHTML
let itemsHtml = "";
for (let value of values) {
  itemsHtml += "<li>${value}</li>";
}
ul.innerHTML = itemsHtml;
```

#### `scrollIntoView()`

`scrollIntoView()` 方法存在于所有 HTML 元素上，可以滚动浏览器窗口，或容器元素，使调用这个方法的元素进入视口 Viewport。

参数如下：

- `alignToTop` 是一个布尔值，默认为 `true`：
  - `true`：窗口滚动后元素的顶部与视口顶部对齐。
  - `false`：窗口滚动后元素的底部与视口底部对齐。
- `scrollIntoViewOptions` 是一个选项对象：
  - `behavior`：定义过渡动画，可取的值为 `"smooth"` 和 `"auto"`，默认为 `"auto"`。
  - `block`：定义垂直方向的对齐，可取的值为 `"start"`、`"center"`、`"end"` 和 `"nearest"`，默认为 `"start"`。
  - `inline`：定义水平方向的对齐，可取的值为 `"start"`、`"center"`、`"end"` 和 `"nearest"`，默认为 `"nearest"`。

```js
// 让页面滚动，使得元素进入视口
document.forms[0].scrollIntoView();
document.forms[0].scrollIntoView(true);

// 将元素平滑地滚入视口
document.forms[0].scrollIntoView({ behavior: "smooth", block: "start" });
```

### 专有扩展

除了已经标准化的，各家浏览器还有很多未被标准化的专有扩展。这些扩展有可能未来会被纳入到标准之中。

#### `children` 属性

children 属性是一个 HTMLCollection，只包含元素的 `Element` 类型的子节点。

```js
let childCount = element.children.length;
let firstChild = element.children[0];
```

#### `contains()` 方法

`contains()` 方法用以确定一个元素是不是包含另一个元素。

- 在祖先元素上调用，参数是待确定的目标节点。
- 返回布尔值。

```js
document.documentElement.contains(document.body);
```

#### 插入标记

HTML5 将 IE 发明的 `innerHTML` 和 `outerHTML` 纳入了标准，但还有两个属性没有入选。这两个剩下的属性是 `innerText` 和 `outerText`。

`innerText` 属性对应元素中包含的所有文本内容，无论文本在子树中哪个层级。

- 读取值时，`innerText` 会按照深度优先的顺序。将子树中所有文本节点的值拼接起来。
- 写入值时，`innerText` 会移除元素的所有后代并插入一个包含该值的文本节点。

```html
<div id="content">
  <p>This is a <strong>paragraph</strong> with a list following it.</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</div>
```

```js
console.log(document.getElementById("content").innerText);
// This is a paragraph with a list following it.
// Item 1
// Item 2
// Item 3
// 注意：不同浏览器对待空格的方式不同
```

---

`outerText` 与 `innerText` 是类似的，只不过作用范围还包含调用它的节点。

- 读取文本值时，`outerText` 与 `innerText` 实际上会返回同样的内容。
- 写入文本值时，`outerText` 不止会移除所有后代节点，而是会替换整个元素。

```js
div.outerText = "Hello world!";
// 等价于
let text = document.createTextNode("Hello world!");
div.parentNode.replaceChild(text, div);
```

## DOM2 & DOM3
