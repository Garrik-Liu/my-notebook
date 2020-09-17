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

下面 👇 我们介绍的节点类型，只是针对于 HTML 文档的。

### Node 类型

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

### Element 类型

### Text 类型

### Comment 类型

### Attr 类型

### DocumentType 类型

## DOM 编程

## MutationObserver 接口

## DOM 扩展
