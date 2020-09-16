# BOM

BOM ( Browser Object Model ) 是指浏览器对象模型, BOM 提供了与网页内容无关的，可以与浏览器窗口进行互动的对象结构。

## `window` 对象

- [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Window)
- [W3cubDocs 文档](https://docs.w3cub.com/dom/window/)

window 是 BOM 的核心对象, 表示浏览器的一个实例. 在浏览器中，window 对象有双重角色，它既是通过 JavaScript 访问浏览器窗口的一个接口，又是 ECMAScript 规定的 Global 对象。

在标签浏览器（比如 Firefox）中，每个标签具有自己的 window 对象, 同一个窗口的标签之间不会共享一个 window 对象. 有一些方法，如 window.resizeTo 和 window.resizeBy 之类的方法会作用于整个窗口而不是 window 对象所属的那个标签。一般而言，如果无法恰当地作用于标签，则会将其作用于窗口。

### 窗口关系

- `window.top` 对象始终指向最上层（最外层）窗口。
- `window.parent` 对象则始终指向当前窗口的父窗口。如果当前窗口是最上层窗口，则 `parent` 等于 `top`
- `window.self` 对象，始终会指向 `window`

```js
window.top === window; // true
window.parent === window.top; // true
window.self === window; // true
```

### 窗口位置 & 像素比

在 Firefox 中 `screenX` 和 `screenY` 属性分别用于表示窗口相对于屏幕左边和上边的距离。

IE、Safari、Opera 和 Chrome 也都提供了 `screenLeft` 和 `screenTop` 属性来表示相同的位置信息。

跨浏览器取得距离值：

```js
var leftPos =
  typeof window.screenLeft == "number" ? window.screenLeft : window.screenX;
var topPos =
  typeof window.screenTop == "number" ? window.screenTop : window.screenY;
```

可以使用 `moveTo()` 和 `moveBy()` 方法移动窗口 ( 依浏览器而定，以上方法可能会被部分或全部禁用 ) 这两个方法都接收两个参数：

- `moveTo()` 接收要移动到的新位置的绝对坐标 `x` 和 `y`。
- `moveBy()` 则接收相对当前位置在两个方向上移动的像素数。

```js
// 把窗口移动到左上角
window.moveTo(0, 0);

// 把窗口向下移动100像素
window.moveBy(0, 100);

// 把窗口移动到坐标位置(200, 300)
window.moveTo(200, 300);

// 把窗口向左移动50像素
window.moveBy(-50, 0);
```

---

『 **CSS 像素** 』是 Web 开发中使用的统一像素单位，是一个逻辑单位，大小固定为 1/96 英寸。这样在不同设备上，1 个 CSS 像素的大小都是一样的。

- 🌰 低分辨率平板设备上 12 CSS 像素的文字，应该与高清 4K 屏幕下 12 CSS 像素的文字具有相同大小。

但是不同设备具有不同的物理像素数量，即屏幕实际的分辨率。所以需要把物理像素数转换为转换为 CSS 像素数。不同像素密度的屏幕下就会有不同的「 **缩放系数** 」

![2020-09-16-15-03-05](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-16-15-03-05.png)

物理像素与 CSS 像素之间的转换比率由 `window.devicePixelRatio` 属性提供。

- 🌰 如果 `window.devicePixelRatio` 的值是 `3`，则 12 CSS 像素的文字，实际上就会用 36 像素的物理像素来显示。

### 窗口大小

提供了 4 个属性确定一个窗口的大小:

- `innerWidth`: 浏览器视口（ viewport ）宽度, 包括垂直滚动条
- `innerHeight`: 浏览器窗口的视口（ viewport ）高度，包括水平滚动条。
- `outerWidth`: 整个浏览器窗口的宽度。
- `outerHeight`: 整个浏览器窗口的高度。

![2020-09-16-08-11-21](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-16-08-11-21.png)

可以使用 `resizeTo()` 和 `resizeBy()` 方法调整窗口大小 ( 可能被浏览器禁用 )

- `resizeTo()` 接收新的宽度和高度值。
- `resizeBy()` 接收宽度和高度各要缩放多少。

```js
// 缩放到100×100
window.resizeTo(100, 100);

// 缩放到200×150
window.resizeBy(100, 50);

// 缩放到300×300
window.resizeTo(300, 300);
```

### 视口位置

浏览器窗口尺寸通常无法满足完整显示整个页面，为此用户可以通过滚动在有限的视口中查看文档。

- `window.scrollX` 页面水平方向滚动的像素值。等同于 `window.pageXoffset`。
- `window.scrollY` 页面垂直方向滚动的像素值。等同于 `window.pageYoffset`。

![2020-09-16-09-37-15](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-16-09-37-15.png)

可以使用 `scroll()`、`scrollTo()` 和 `scrollBy()` 方法滚动页面。这 3 个方法都接收表示相对视口距离的 `x` 和 `y` 坐标，这两个参数在前两个方法中表示要滚动到的坐标，在最后一个方法中表示滚动的距离。

```js
// 相对于当前视口向下滚动100像素
window.scrollBy(0, 100);

// 相对于当前视口向右滚动40像素
window.scrollBy(40, 0);

// 滚动到页面左上角
window.scroll(0, 0);

// 滚动到距离屏幕左边及顶边各100像素的位置
window.scrollTo(100, 100);
```

### 导航 & 打开新窗口

`window.open()` 方法可以用于导航到指定 URL，也可以用于打开新浏览器窗口。接收 4 个参数：

- **目标 URL**。
- **目标窗口名**，如果是一个已经存在的窗口或 Frame 的名字，则会在对应的窗口或 Frame 中打开 URL。否则就会打开一个新窗口并将其命名为指定值。除此之外，也可以是一个特殊的窗口名。
- **特性字符串**，用于指定新窗口的配置。是一个逗号分隔的设置字符串，用于指定新窗口包含的特性。
  - 如果打开的不是新窗口，则忽略第三个参数。
  - 如果没有传第三个参数，则新窗口会带有所有默认的浏览器特性。
- **布尔值**，表示新窗口在浏览器历史记录中，是否替代当前加载页面。

第二个参数「 目标窗口名 」的取值可以是一些特殊的窗口名：

- `_self`: 当前页面。
- `_blank`: 新窗口打开。
- `_parent`: 当前窗口的父窗口。如果没有 `parent` 窗口，此选项与 `_self` 相同。
- `_top`: 最外层窗口，如果当前窗口就是最上层，此选项与 `_self` 相同。

第三个参数「 特性字符串 」，用于指定新窗口的配置。下表列出了一些选项：

![2020-09-16-09-56-25](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-16-09-56-25.png)

![2020-09-16-09-57-06](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-16-09-57-06.png)

```js
window.open(
  "http://www.wrox.com/",
  "wroxWindow",
  "height=400,width=400,top=10,left=10,resizable=yes"
);
```

- 这行代码会打开一个可缩放的新窗口，大小为 400 像素 ×400 像素，位于离屏幕左边及顶边各 10 像素的位置。

`window.open()` 方法返回一个对新建窗口的引用。与普通 `window` 对象没有区别。

可以使用 `close()` 方法关闭新打开的窗口。

新创建窗口的 `window` 对象有一个属性 `opener`，指向打开它的窗口。

```js
let wroxWin = window.open(
  "http://www.wrox.com/",
  "wroxWindow",
  "height=400,width=400,top=10,left=10,resizable=yes"
);
wroxWin.close();

alert(wroxWin.opener === window); // true
```

#### 弹窗屏蔽程序

如果浏览器内置的弹窗屏蔽程序阻止了弹窗，那么 `window.open()` 很可能会返回 `null`。此时，只要检查这个方法的返回值就可以知道弹窗是否被屏蔽了。

除此之外，弹窗也可能被浏览器扩展或其他程序屏蔽，此时 `window.open()` 通常会抛出错误。

因此要准确检测弹窗是否被屏蔽，除了检测 `window.open()` 的返回值，还要把它用 `try/catch` 包装起来。

```js
let blocked = false;

try {
  let wroxWin = window.open("http://www.wrox.com", "_blank");
  if (wroxWin == null) {
    blocked = true;
  }
} catch (ex) {
  blocked = true;
}
if (blocked) {
  alert("The popup was blocked!");
}
```

### 定时器

- `setTimeout()` 指定在一段时间后执行某些代码。
- `setInterval()` 指定每隔一段时间执行某些代码。

`setTimeout()` 方法接收两个参数：

- 要执行的代码
- 等待的时间（毫秒）告诉 JavaScript 引擎在指定的毫秒数过后把任务添加到宏任务队列。

调用 `setTimeout()` 时，会返回一个表示该超时排期任务的数值 ID。调用 `clearTimeout()` 方法并传入超时 ID 可以取消等待中的排期任务。

- 只要是在指定时间到达之前调用 `clearTimeout()`，就可以取消超时任务。在任务执行后再调用 `clearTimeout()` 没有效果。

```js
// 设置超时任务
let timeoutId = setTimeout(() => alert("Hello world!"), 1000);

// 取消超时任务
clearTimeout(timeoutId);
```

`setInterval()` 与 `setTimeout()` 的使用方法类似。但要注意。第二个参数，指的是每隔指定时间，就会向队列再添加一次任务。不管上一个任务是否执行完毕，以及执行要花多长时间。

`setInterval()` 方法也会返回一个循环定时任务 ID，可以调用 `clearInterval()` 并传入定时 ID，来取消循环定时。如果一直不管它，那么定时任务会一直执行，直到关闭页面。

```js
let num = 0,
  intervalId = null;
let max = 10;

let incrementNumber = function() {
  num++;

  // 如果达到最大值，则取消所有未执行的任务
  if (num == max) {
    clearInterval(intervalId);
    alert("Done");
  }
};

intervalId = setInterval(incrementNumber, 500);
```

👆 上面这个模式也可以使用 `setTimeout()` 来实现：

```js
let num = 0;
let max = 10;
let incrementNumber = function() {
  num++;

  // 如果还没有达到最大值，再设置一个超时任务
  if (num < max) {
    setTimeout(incrementNumber, 500);
  } else {
    alert("Done");
  }
};

setTimeout(incrementNumber, 500);
```

上面这种写法，不需要手动取消循环定时任务。而且可以保证上一次任务执行完毕之后，才会开始执行下一次任务。

### 系统对话框

使用 `alert()`、`confirm()` 和 `promt()` 方法，可以让浏览器调用系统对话框向用户显示消息。

- 它们的外观由操作系统或者浏览器决定，无法使用 CSS 设置。
- 都是同步的模态对话框，即在它们显示的时候，代码会停止执行。

通过 `alert()` 显示「 **警示框** 」，只有一个 OK 按钮。通常用于向用户显示一些他们无法控制的消息，比如报错。

- 方法只接收一个参数。传入字符串会显示在弹框中。如果不是一个原始字符串，则会调用这个值的 `toString()` 方法将其转换为字符串。

![2020-09-16-13-46-08](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-16-13-46-08.png)

通过调用 `confirm()` 来显示「 **确认框** 」。有两个按钮：Cancel 和 OK。用户通过单击不同的按钮表明希望接下来执行什么操作。

- 方法的返回值，`true` 表示单击了 OK 按钮，`false` 表示单击了 Cancel 按钮，或者单击 X 图标关闭了确认框。

```js
if (confirm("Are you sure?")) {
  alert("I'm so glad you're sure!");
} else {
  alert("I'm sorry to hear you're not sure.");
}
```

![2020-09-16-13-47-35](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-16-13-47-35.png)

通过调用 `prompt()` 方法显示「 **提示框** 」。用途是提示用户输入消息。除了 OK 和 Cancel 按钮，提示框还会显示一个文本框，让用户输入内容。

- 方法接收两个参数：要显示给用户的文本，和文本框的默认值。
- 如果用户单击了 OK 按钮，则 `prompt()` 会返回文本框中的值。如果用户单击了 Cancel 按钮，或者对话框被关闭，则 `prompt()` 会返回 `null`。

```js
let result = prompt("What is your name? ", "");
if (result !== null) {
  alert("Welcome, " + result);
}
```

![2020-09-16-13-50-56](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-16-13-50-56.png)

## `location` 对象

- [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Location)
- [W3cubDocs 文档](https://docs.w3cub.com/dom/location/)

`location` 是最有用的 BOM 对象之一，提供了当前窗口中加载文档的信息，以及通常的导航功能。

它既是 `window` 的属性，也是 `document` 的属性。也就是说，`window.location` 和 `document.location` 指向同一个对象。

### 常用属性

location 对象上保存着当前窗口所加载的文档的 URL 地址信息：

假设浏览器当前加载的 URL 是 `http://foouser:barpassword@www.wrox.com:80/WileyCDA/?q=javascript#contents`

|        属性         |                             值                             |                               说明                                |
| :-----------------: | :--------------------------------------------------------: | :---------------------------------------------------------------: |
|   `location.hash`   |                       `"#contents"`                        |                 URL 散列值，如果没有则为空字符串                  |
|   `location.host`   |                    `"www.wrox.com:80"`                     |                         服务器名及端口号                          |
| `location.hostname` |                      `"www.wrox.com"`                      |                             服务器名                              |
|   `location.href`   | `"http://www.wrox.com:80/WileyCDA/?q=javascript#contents"` | 当前加载页面的完整 URL。`location` 的 `toString()` 方法返回这个值 |
| `location.pathname` |                       `"/WileyCDA/"`                       |                    URL 中的路径和（或）文件名                     |
|   `location.port`   |                           `"80"`                           |          请求的端口。如果 URL 中没有端口，则返回空字符串          |
| `location.protocol` |                         `"http:"`                          |            页面使用的协议。通常是 "http:" 或 "https:"             |
|  `location.search`  |                     `"?q=javascript"`                      |              URL 的查询字符串。这个字符串以问号开头               |
| `location.username` |                        `"foouser"`                         |                        域名前指定的用户名                         |
| `location.password` |                      `"barpassword"`                       |                         域名前指定的密码                          |
|  `location.origin`  |                  `"http://www.wrox.com"`                   |                        URL 的源地址。只读                         |

### 解析 URL 查询字符串

`location.search` 返回了从问号开始直到 URL 末尾的所有内容，但没有办法逐个访问每个查询参数。

下面的函数解析了查询字符串，并返回一个以每个查询参数为属性的对象。

```js
let getQueryStringArgs = function() {
  // 取得没有开头问号的查询字符串
  let qs = location.search.length > 0 ? location.search.substring(1) : "",
    // 保存数据的对象
    args = {};

  // 把每个参数添加到 args 对象
  for (let item of qs.split("&").map((kv) => kv.split("="))) {
    // 因为查询字符串通常是被编码后的格式
    // 所以需要使用 decodeURIComponent() 解码
    let name = decodeURIComponent(item[0]),
      value = decodeURIComponent(item[1]);
    if (name.length) {
      args[name] = value;
    }
  }

  return args;
};
```

### 操作地址

通过给 `location.assign()` 方法传入一个 URL 字符串，可以加载给定 URL 的内容资源到当前窗口。

执行下面这行代码，会立即导航到 URL 指定的页面上。同时在浏览器历史记录中增加一条记录。

```js
location.assign("https://www.baidu.com");
```

如果给 `location.href` 或 `window.location` 设置一个 URL，也会有同样的效果。

```js
location.assign("https://www.baidu.com");
// 等价于
window.location = "https://www.baidu.com";
location.href = "https://www.baidu.com";
```

修改 `location` 对象的属性也会修改当前加载的页面。

- 除了 `hash` 之外，只要修改 `location` 的一个属性，就会导致页面重新加载新 URL。
- 修改 `hash` 的值会在浏览器历史中增加一条新记录。可以前进后退。

```js
// 假设当前 URL 为http://www.wrox.com/WileyCDA/

// 把 URL 修改为http://www.wrox.com/WileyCDA/#section1
location.hash = "#section1";

// 把 URL 修改为http://www.wrox.com/WileyCDA/?q=javascript
location.search = "?q=javascript";

// 把 URL 修改为http://www.somewhere.com/WileyCDA/
location.hostname = "www.somewhere.com";

// 把 URL 修改为http://www.somewhere.com/mydir/
location.pathname = "mydir";

// 把 URL 修改为http://www.somewhere.com:8080/WileyCDA/
Location.port = 8080;
```

---

使用 `replace()` 方法可以让当前窗口重新加载到指定的 URL，且不会增加历史记录。也就是说，用户不能 "后退" 到前一个页面了。

```js
location.replace("https://www.baidu.com/");
```

---

`reload()` 能重新加载当前显示的页面。

- 如果不传参数，页面会以最有效的方式重新加载。会尽可能从缓存中加载页面。
- 如果想强制从服务器重新加载，则将 `true` 作为参数传入。

```js
location.reload(); // 重新加载，可能是从缓存加载
location.reload(true); // 重新加载，从服务器加载
```

## `screen` 对象

- [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Screen)
- [W3cubDocs 文档](https://docs.w3cub.com/dom/screen/)

`window.screen` 对象提供显示器相关信息。

|     属性      |                     说明                     |
| :-----------: | :------------------------------------------: |
| `availHeight` |     屏幕像素高度减去系统组件高度（只读）     |
|  `availLeft`  | 没有被系统组件占用的屏幕的最左侧像素（只读） |
|  `availTop`   | 没有被系统组件占用的屏幕的最顶端像素（只读） |
| `availWidth`  |     屏幕像素宽度减去系统组件宽度（只读）     |
| `colorDepth`  |  表示屏幕颜色的位数；多数系统是 32（只读）   |
|   `height`    |                 屏幕像素高度                 |
|    `left`     |            当前屏幕左边的像素距离            |
| `pixelDepth`  |              屏幕的位深（只读）              |
|     `top`     |            当前屏幕顶端的像素距离            |
|    `width`    |                 屏幕像素宽度                 |
| `orientation` |   返回 Screen Orientation API 中屏幕的朝向   |

![2020-09-16-14-44-43](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-16-14-44-43.png)

## `history` 对象

- [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/History)
- [W3cubDocs 文档](https://docs.w3cub.com/dom/history/)

`window.history` 对象表示当前窗口使用以来用户的导航历史记录。于安全考虑，这个对象不会暴露用户访问过的 URL，但是可以控制页面的前进和后退。

`go()` 方法可以在用户历史记录中沿任何方向导航。只接收一个参数：

- 可以是整数，表示前进或后退多少步。
- 可以是字符串，浏览器会导航到历史中包含该字符串的第一个位置。可能前进，也可能是后退。

### 前进 & 后退

```js
// 后退一页
history.go(-1);

// 前进一页
history.go(1);

// 前进两页
history.go(2);

// 导航到最近的 wrox.com 页面
history.go("wrox.com");

// 导航到最近的 nczonline.net 页面
history.go("nczonline.net");
```

`back()` 和 `forward()` 方法可以直接控制前进一步和后退一步。

```js
// 后退一页
history.back();

// 前进一页
history.forward();
```

`length` 属性反映了历史记录的数量。对于窗口中加载的第一个页面，`history.length` 等于 `1`。

```js
if (history.length == 1) {
  // 这是用户窗口中的第一个页面
}
```

### 历史状态管理

## `navigator` 对象

- [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator)
- [W3cubDocs 文档](https://docs.w3cub.com/dom/window/navigator/)
