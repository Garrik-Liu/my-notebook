# DOM

DOM（文档对象模型）是针对HTML和XML文档的一个API（应用程序编程接口）, 将文档描绘成一个层次化的节点树, 并且允许开发者去操纵这些节点.  各家浏览器按照 DOM 标准实现了这套 API, 允许 JavaScript 去操纵这些节点.

1998年10月 DOM 1 级规范成为 W3C 的推荐标准, 之后又有 DOM 2 级, DOM 3 级标准.

[DOM 标准](https://www.w3.org/DOM/DOMTR#dom1)

A Web page is a document.  The Document Object Model (DOM) represents that same document so it can be manipulated.  The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.

## 节点层次 

DOM 可以将任何 HTML 或 XML 文档描绘成一个由多层节点构成的结构。节点分为 12 种不同的类型，每种类型分别表示文档中不同的信息及（或）标记。节点之间的关系构成了层次, 在一个特定节点做为根节点的包含下, 所有的节点构成树形结构.

在 HTML 中, 文档节点是每个文档的根节点。`<html>`元素，我们称之为文档元素。文档元素是文档的最外层元素，文档中的其他所有元素都包含在文档元素中。每个文档只能有一个文档元素。

每一段标记都可以通过树中的一个节点来表示. 共有 12 种节点类型，这些类型都继承自一个基类型。DOM1级定义了一个 Node 接口，在 JavaScript 中作为 Node 类实现, 所有节点类型都继承自 Node 类型，因此所有节点类型都共享着相同的基本属性和方法。

每个节点都有一个 `nodeType` 属性，用于表明节点的类型。节点类型由在 Node 类中定义的数值常量来表示，具体请查阅[文档](http://www.w3school.com.cn/jsref/prop_node_nodetype.asp)

文档中所有的节点之间都存在这样或那样的关系。节点间的各种关系可以用传统的家族关系来描述，相当于把文档树比喻成家谱。每个节点都有一个 `childNodes` 属性，其中保存着一个 NodeList 对象。NodeList 是一种类数组对象，用于保存一组有序的节点, 可以通过 `[]` 语法来访问 NodeList 的值. 但注意它并不是 Array 的实例。NodeList 对象是基于 DOM 结构动态执行查询的结果，因此 DOM 结构的变化能够自动反映在 NodeList 对象中。

每个节点都有一个 `parentNode` 属性，该属性指向文档树中的父节点。包含在 `childNodes` 列表中的所有节点都具有相同的父节点，因此它们的 `parentNode` 属性都指向同一个节点。包含在 `childNodes` 列表中的每个节点相互之间都是同胞节点。通过使用列表中每个节点的 `previousSibling` 和 `nextSibling` 属性，可以访问同一列表中的其他节点。父节点的 `firstChild` 和 `lastChild` 属性分别指向其 `childNodes` 列表中的第一个和最后一个节点。所有节点都有的最后一个属性是 `ownerDocument` ，该属性指向表示整个文档的文档节点。

::: danger
并不是每种节点都有子节点。本章后面将会讨论不同节点类型之间的差异!
:::

## 节点类型

### Document 类型

[MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Document#Methods)

* `nodeType` 的值为 9；
* `nodeName` 的值为 "#document"；
* `nodeValue` 的值为 `null`；
* `parentNode` 的值为 `null`；
* `ownerDocument` 的值为 `null`；

JavaScript通过 Document 类型表示文档。在浏览器中，`document` 对象是 `HTMLDocument`（继承自`Document `类型）的一个实例.

#### 文档的子节点

DOM 标准规定 Document 节点的子节点可以是 DocumentType、Element、ProcessingInstruction 或 Comment.  其内置的 `documentElement` 属性始终指向 HTML 页面中的 `<html>` 元素。

作为 HTMLDocument 的实例，`document` 对象还有一个 `body` 属性，直接指向 `<body>` 元素

`document.doctype` 返回当前文档的文档类型定义, 通常将 `<!DOCTYPE>` 标签看成一个与文档其他部分不同的实体

#### 文档信息

作为 HTMLDocument 的一个实例，`document` 对象还有一些标准的 Document 对象所没有的属性。这些属性提供了 `document` 对象所表现的网页的一些信息:
* `title`: 包含着 `<title>` 元素中的文本
* `URL`: 包含页面完整的URL（即地址栏中显示的URL）
* `domain`: 页面的域名
* `referrer`: 保存着链接到当前页面的那个页面的 URL

所有这些上述信息都存在于请求的 HTTP 头部，只不过是通过这些属性让我们能够在 JavaScript 中访问它们而已

#### 查找元素

在网页开发中, 最常见的 DOM 操作就要数取得特定的某个或某组元素的引用，然后再执行一些操作了。
Document 类型为此提供了两个方法：
* `getElementById()`: 接收取得的元素的 ID。如果找到相应的元素则返回该元素
* `getElementsByTagName()`: 接受一要取得元素的标签名，而返回的是包含零或多个元素的 NodeList, 在HTML文档中，这个方法会返回一个 HTMLCollection 对象

HTMLCollection 对象中的项可以使用 `[]` 语法来取得, 还有一个方法，叫做 `namedItem()`，使用这个方法可以通过元素的 `name` 特性取得集合中的项。对命名的项也可以使用方括号语法来访问, 如下面代码:

``` html
<img src="myimage.gif" name="myImage">
```

``` js
var images = document.getElementsByTagName("img");

var myImage = images.namedItem("myImage");
// 或者
var myImage = images["myImage"];
```

### Element 类型

[MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Element)

* `nodeType` 的值为 1；
* `nodeName` 的值为元素的标签名；
* `nodeValue` 的值为 `null`；
* `parentNode` 的值为 Document 或 Element；

`Element` 类型用于表现XML或HTML元素，提供了对元素标签名、子节点及特性的访问。

要访问元素的标签名，可以使用 `nodeName` 属性，也可以使用 `tagName` 属性, 在HTML中，标签名始终都以全部大写表示；比如一个 `<div>` 元素的 `tagName` 为 "DIV"

#### HTML元素

所有 HTML 元素都由 HTMLElement 类型表示，不是直接通过这个类型，也是通过它的子类型来表示。 HTMLElement 类型直接继承自 Element 并添加了一些属性。添加的这些属性分别对应于每个 HTML 元素中都存在的下列标准特性:

* `id`，元素在文档中的唯一标识符。
* `title`，有关元素的附加说明信息，一般通过工具提示条显示出来。
* `classNam`e，与元素的 `class` 特性对应，即为元素指定的CSS类。没有将这个属性命名为class，是因为 class 是 ECMAScript 的保留字
* `lang`，元素内容的语言代码，很少使用。
* `dir`，语言的方向，值为"ltr"（left-to-right，从左至右）或"rtl"（right-to-left，从右至左），也很少使用。

上述这些属性都可以用来取得或修改元素对应的特性值。

#### 取得特性

每个元素都有一或多个特性，这些特性的用途是给出相应元素或其内容的附加信息。操作特性的DOM方法主要有三个，分别是
* `getAttribute()`
* `setAttribute()`: 接受两个参数：要设置的特性名 和 值
* `removeAttribute()`: 彻底删除元素的特性。调用这个方法不仅会清除特性的值，而且也会从元素中完全删除特性

传递给 `getAttribute()` 的特性名与实际的特性名相同。因此要想得到 `class` 特性值，应该传入"class"而不是"className"
通过 `getAttribute()` 方法也可以取得自定义特性, 根据HTML5规范，自定义特性应该加上 `data-` 前缀以便验证。

``` html
<div id="myDiv" my_special_attribute="hello!"></div>
```

``` js
var value = div.getAttribute("my_special_attribute");
```

任何元素的所有公认的（非自定义的）特性，也都可以通过 DOM 元素本身的属性来访问。有两类特殊的特性，它们虽然有对应的属性名，但属性的值与通过 `getAttribute()` 返回的值并不相同。
* `style`, 用于通过CSS为元素指定样式。在通过`getAttribute()`访问时，返回的`style`特性值中包含的是CSS文本，而通过属性来访问它则会返回一个对象。
* 事件处理程序, 例如`onclick`.  通过`getAttribute()`访问，则会返回相应代码的字符串。而在访问`onclick`属性时，则会返回一个JavaScript函数

由于存在这些差别，在通过 JavaScript 以编程方式操作 DOM 时，开发人员经常不使用 `getAttribute()`，而是只使用对象的属性。

#### `attributes` 属性

`attributes` 属性中包含一个 NamedNodeMap，与 NodeList 类似，也是一个“动态”的集合。元素的每一个特性都由一个 Attr 节点表示, 每个节点都保存在 NamedNodeMap 对象中。

`attributes` 属性中包含一系列节点，每个节点的 `nodeName` 就是特性的名称，而节点的 `nodeValue` 就是特性的值。

一般来说，由于前面介绍的 `attributes` 的方法不够方便，因此开发人员更多的会使用`getAttribute()`、`removeAttribute()`和`setAttribute()`方法。

#### 创建元素

使用`document.createElement()`方法可以创建新元素。这个方法只接受一个参数，即要创建元素的标签名。这个标签名在HTML文档中不区分大小写

要把新元素添加到文档树，可以使用`appendChild()`、`insertBefore()`或`replaceChild()`方法。

### Text 类型

* `nodeType` 的值为 3；
* `nodeName` 的值为"#text"；
* `nodeValue` 的值为节点所包含的文本；
* `parentNode` 是一个 Element；
* 没有子节点。

文本节点由 Text 类型表示，包含的是可以照字面解释的纯文本内容。

可以通过 `nodeValue` 属性或 `data` 属性访问Text节点中包含的文本, 使用下列方法可以操作节点中的文本。

* `appendData(text)`：将text添加到节点的末尾。
* `deleteData(offset, count)`：从offset指定的位置开始删除count个字符。
* `insertData(offset, text)`：在offset指定的位置插入text。
* `replaceData(offset, count, text)`：用text替换从offset指定的位置开始到offset+ count为止处的文本。
* `splitText(offset)`：从offset指定的位置将当前文本节点分成两个文本节点。
* `substringData(offset, count)`：提取从offset指定的位置开始到offset+count为止处的字符串。


### Commnet 类型

* `nodeType` 的值为 8；
* `nodeName` 的值为"#comment"；
* `nodeValue` 的值为注释的内容；
* `parentNode` 可能是Document或Element；
* 没有子节点。

Comment类型与Text类型继承自相同的基类

### CDATASection 类型

CDATASection类型只针对基于XML的文档，表示的是CDATA区域。

### DocumentType 类型

* `nodeType` 的值为 10；
* `nodeName` 的值为doctype的名称；
* `nodeValue` 的值 `null`
* `parentNode` 是 Document
* 没有子节点。

DocumentType包含着与文档的 `doctype` 有关的所有信息，它具有下列特征：

在DOM1级中，DocumentType 对象不能动态创建，而只能通过解析文档代码的方式来创建。支持它的浏览器会把 DocumentType 对象保存在 `document.doctype` 中

### DocumentFragment 类型

* `nodeType` 的值为 11；
* `nodeName` 的值为"#document-fragment"；
* `nodeValue` 的值 `null`
* `parentNode` 是 `null`

在所有节点类型中，只有 DocumentFragment 在文档中没有对应的标记。作为一个不存在的父节点, 用来 "包裹" 其他节点. 

使用 `document.createDocumentFragment()` 创建.  在将文档片段作为添加到文档树时，实际上只会将文档片段的所有子节点添加到相应位置上；文档片段本身永远不会成为文档树的一部分。

### Attr 类型

* `nodeType` 的值为 2；
* `nodeName` 的值是特性的名称；
* `nodeValue` 的值是特性的值；
* `parentNode` 是 `null`

元素的特性在DOM中以Attr类型来表示。尽管它们也是节点，但特性却不被认为是DOM文档树的一部分。


