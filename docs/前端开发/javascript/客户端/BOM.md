# BOM

BOM(Browser Object Model) 是指浏览器对象模型, BOM 提供了独立于内容的、可以与浏览器窗口进行互动的对象结构。

## window 对象
[文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Window)

`window` 是 BOM 的核心对象, 表示浏览器的一个实例. 在浏览器中，`window` 对象有双重角色，它既是通过 JavaScript 访问浏览器窗口的一个接口，又是 ECMAScript 规定的 `Global` 对象。

在标签浏览器（比如Firefox）中，每个标签具有自己的 `window` 对象, 同一个窗口的标签之间不会共享一个 `window` 对象. 有一些方法，如 `window.resizeTo` 和 `window.resizeBy` 之类的方法会作用于整个窗口而不是 `window` 对象所属的那个标签。一般而言，如果无法恰当地作用于标签，则会将其作用于窗口。

### 窗口位置

在 Firefox 中 `screenX` 和 `screenY` 属性分别用于表示窗口相对于屏幕左边和上边的距离。IE、Safari、Opera 和Chrome 也都提供了 `screenLeft` 和 `screenTop` 属性来表示相同的位置信息.  

跨浏览器取得距离值:

``` js
var leftPos = (typeof window.screenLeft == "number") ? 
    window.screenLeft : window.screenX;
var topPos = (typeof window.screenTop == "number") ?
    window.screenTop : window.screenY;
```

### 窗口大小

提供了4个属性确定一个窗口的大小:
`innerWidth`: 浏览器视口（viewport）宽度, 如果存在垂直滚动条则包括它
`innerHeight`: 浏览器窗口的视口（viewport）高度，如果存在水平滚动条，则包括它
`outerWidth`: 获取浏览器窗口外部的宽度。表示整个浏览器窗口的宽度
`outerHeight`: 整个浏览器窗口的高度

![Javascript-window-innerWidth](https://i.imgur.com/EiQ5mCk.png)

### 导航和打开窗口

`window.open()` 方法既可以导航到一个特定的URL，也可以打开一个新的浏览器窗口。

### 间歇调用和超时调用

### 系统对话框

## location 对象
[文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Location)

## navigator 对象
[文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator)

## screen 对象
[文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Screen)

# history 对象
[文档](https://developer.mozilla.org/zh-CN/docs/Web/API/History)