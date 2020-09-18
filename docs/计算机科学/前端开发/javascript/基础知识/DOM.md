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

## MutationObserver 接口

使用 `MutationObserver` 接口，可以观察整个文档，某个元素，元素属性、文本的变化，并在 DOM 被修改时异步执行回调。

## DOM 扩展

### Selectors API

### Traversal API

### HTML5 扩展

### 专有扩展
