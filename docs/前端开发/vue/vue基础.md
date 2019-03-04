# Vue 基础知识

## Vue 介绍

### "渐进式框架" & "自底向上逐层应用"

Vue 是一套用于构建用户界面的**渐进式框架**。Vue 被设计为可以**自底向上逐层应用**。

"渐进式" 的意思就是从少到多, 从弱到强, Vue 框架并不强制开发者一下子就使用它的全部.  

![Screen Shot 2019-03-03 at 4.25.15 PM](https://i.loli.net/2019/03/03/5c7b8f77e5a45.png)

Vue 从设计角度来讲，可以分成上图的这几大部分，但是开发者并不需要把所有的东西都学会, 或者都用上.  "声明式渲染" 和 "组件系统" 是 Vue 核心库所包含内容，而 "客户端路由"、"状态管理"、"构建工具" 都有其他各自专门的解决方案。这些解决方案相互独立，**Vue 将框架做了分层设计, 你可以在 Vue 核心库的基础上灵活地在不同层上使用其他方案, 而不是说一定要用 Vue 提供的**.

### 数据驱动视图

**Vue 是数据驱动视图的框架, 采用了 MVVM 架构.  其核心库只关注视图层, 视图与数据状态保持同步**.

#### 什么是 MVC 架构?

一个清晰合理的架构是一个复杂程序所必备的.  MVVM 是一种软件的架构模式.  但在将它之前, 要先了解一下 MVC 架构.

在 MVC 架构下, 软件可以分成三个部分: 

* 视图 (View): 用户界面
* 控制器 (Controller): 业务逻辑
* 模型 (Model): 数据保存

![Screen Shot 2019-03-03 at 5.37.14 PM](https://i.loli.net/2019/03/03/5c7ba066ebff1.png)

它们各个部分之间的通信方式如上图:

* 用户在 View 上进行操作, 触发相应事件;
* Controller 接到事件, 执行相应业务逻辑, 调用 Model 的接口修改数据状态;
* Model 中新的数据发送到 View, 视图更新, 用户得到反馈;

当然上述所讲为一般而言的 MVC 模式.  在不同的项目中, MVC 的实现方法可能都不尽相同.  比如, 网页开发中, 某些项目除了允许用户在页面上触发 DOM 事件, 从而让相关事件处理函数得到执行外.  用户还可以通过在 URL 后加上不同的 # 锚点来触发 `hashChange` 事件, 从而让相关业务逻辑得到执行.

#### 什么是 MVVM 架构?

在 MVVM 架构中, Controller 被替换成了 ViewModel.  它作为 View 与 Model 沟通的桥梁, 负责监听 Model 或 View 的修改.  由此实现了 View 和 Model 的 "双向绑定".  意思就是说, 当 Model 层数据进行修改时, ViewModel 层检测到了变化, 然后通知 View 层进行相应的视图修改.  反之, 当 View 层做了修改时, Model 层的数据也会得到相应的修改.

![Screen Shot 2019-03-03 at 6.01.57 PM](https://i.loli.net/2019/03/03/5c7ba622bf02e.png)

#### 响应式的双向数据绑定

在页面中, **DOM 状态其实就是数据状态的一种映射**.  我们的业务逻辑应该关注于对于数据状态的操作.  当数据发生改变的时候, 框架应当帮助我们自动更新视图, 而不需要我们再手动获取 DOM 元素, 然后再对它进行修改了.  

**Vue 的核心是一个 "响应式的数据绑定系统"**.  数据和视图建立绑定之后, DOM 将与数据保持同步.  当数据被修改了, DOM 便相应的更新; 同样, 用户在视图上的操作也会自动更新相关的数据.  所有关于 DOM 的操作都被 Vue 在背后帮我们执行了, 我们只需关注于数据就好了.  这种思想也被称为 "数据驱动"

简化地表示 "数据" 与 "视图" 的关系就如下图:

![1](https://i.loli.net/2019/03/04/5c7bfba70d7ff.png)

#### 声明式渲染 && 虚拟 DOM

**Vue 提供一套基于 HTML 的模板语法, 允许开发者声明式地将真实 DOM 与 Vue 实例的数据绑定在一起**。

首先, "声明式" 的意思就是: 开发者告诉 Vue 框架想要什么结果, 而如何达成由 Vue 自己去做, 开发者不用管.  例如下面这段模板代码声明式地让 Vue 将 `name` 的数据和 `<p>` 标签绑定在一起:

``` js
<p>Hello {{ name }}</p>
```

Vue 会把这些模板编译成一个渲染函数。该函数被调用后会渲染并且返回一个虚拟的 DOM 树.  这个 "树" 的职责就是描述当前视图应处的状态。之后再通过一个 Patch 函数，将这些虚拟 DOM 创建成真实的 DOM 元素。在这个过程中, Vue 有一个 "依赖追踪系统" 会侦测在渲染过程中所依赖到的数据来源.  当数据源发生变动时, 就可以根据需要重新渲染虚拟 DOM 树。当一个新的虚拟树被渲染出来之后, Vue 会将其与老树进行对比，并最终得出应施加到真实 DOM 上的改动, 然后通过 Patch 函数施加改动。

![5869240-fad9642bc242ca67](https://i.loli.net/2019/03/04/5c7c0b665709d.png)

同时, Vue 也允许用户直接跳过写模板这一层去手写渲染函数.  模板和渲染函数都各有利弊, 首先模板更贴近 HTML，有着良好的可读性的同时, 可以让我们更直观地思考语义结构，更好地结合 CSS 的书写。而直接写渲染函数，因为写的是真正的 JavaScript 代码，函数内可以进行更复杂的逻辑判断，可以选择性地返回最终要返回的 DOM 结构，从而实现一些在模板的语法限制下，很难做到的一些事情。但虽然两个都是可以选择的。在绝大部分情况下还是推荐使用模板，只有在需要复杂逻辑的情况下，才使用渲染函数。

## 创建实例

这一章会讲解 Vue 的基本使用方法, 和涉及的相关概念的介绍.  

先来看一个 Vue 的使用实例:

``` js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

Vue.js 的使用都是通过构造函数 `Vue({option})` 创建一个根 Vue 实例开始的.  Vue 实例相当于 MVVM 模式中的 ViewModel 层, 用来将 DOM 元素与数据进行双向绑定.  在创建实例的时候，我们可以传入一个 "选项对象" 用来配置实例, 下面就对一些常用的选项对象属性进行具体的说明。

#### 模板 (template)

选项中主要影响模板或 DOM 的选项有 `el` 和 `template`.

『 **`el`** 』: 值的类型为字符串, 或 DOM 元素, 例如 `el:'#app'`.  其作用是将一个已存在的 DOM 元素提供给 Vue 实例作为 "挂载元素".  所有的挂载元素会被 Vue 生成的 DOM 替换.  如果 `render` 函数和 `template` 属性都不存在，挂载 DOM 元素的 HTML 会被提取出来用作模板.

『 **`template`** 』: 类型为字符串。 Vue 会将 `template` 的值作为模板生成 DOM 元素, 然后替换掉挂载元素.  

#### 数据 (data)

Vue.js 实例中可以通过 `data` 属性定义数据，这些数据可以在实例对应的模板中进行绑定并使用。需要注意的是，如果传入 `data` 的是一个在外部的对象，Vue 实例会代理起该对象里的所有的属性，而不会对传入的对象进行深拷贝。

创建了 Vue 实例之后, 可以通过引用实例的 `$data` 属性来获取实例化时声明的数据.

Vue 会将实例化时定义的数据与模板中对于的值进行双向绑定, 一方改变, 另一放也随之改变.  因此这些数据也被称为 "响应式数据".  需要注意的是，只有实例化传入的对象才是响应式的. 如果需要在实例化之后加入响应式变量，需要调用实例方法 `$set`.  例如: `vm.$set('b', 2);`, 不过 Vue.js 并不推荐这么做.  应尽量在实例化的时候，把所有的变量都设定好，如果没有值，也可以用 `undefined` 或 `null` 占位。

#### 方法 (methods)

通过选项属性 `methods` 可以定义方法.  在模板上可以使用 `v-on` 指令来监听 DOM 事件，

#### 生命周期

## 模板语法

Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 与 Vue 实例的数据绑定在一起.  下面就来讲一讲基础的 Vue 模板语法.

### 插值

Vue.js 作为数据驱动视图的框架，我们首先要知道的就是如何将数据在视图中展示出来.  前面说 Vue.js 的核心是一个 "响应式的数据绑定系统", 它会帮我们把 Vue 实例化时传入选项对象的数据与模板做双向绑定, 保持它们同步更新.  开发者不需要再手动维护 DOM.

下面我们就来讲一下, Vue 模板中的数据绑定语法.

#### 文本插值

数据绑定最基础的形式使用双大括号 {{}} 标签进行的文本插值.  标签将会被替代为对应数据对象上属性的值。无论何时，绑定的数据对象上属性发生了改变，插值处的内容都会更新。

``` html
<div id="app">
    Hello {{ name }}
</div>
```

``` js
new Vue({
    el: '#app',
    data: {
        name: 'World'
    }
});
```

上面的代码, 在当 Vue 实例化之后, `data` 中的 `name` 属性会与模板中双大括号里的 `name` 双向绑定在一起.  修改数据对象中的 `name` 属性，DOM 也会随之更新。

需要注意的是, Vue 默认将双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，你需要使用 `v-html` 指令：

``` html
<div id="app">
    <p>Using mustaches: {{ rawHtml }}</p>
    <p>Using v-html directive: 
        <span v-html="rawHtml"></span>
    </p>
<div> 
```

``` js
new Vue({
    el: '#app',
    data: {
        rawHtml: '<span style="color: red">This should be red.</span>'
    }
});
```

![Screen Shot 2019-03-04 at 9.40.41 AM](https://i.loli.net/2019/03/04/5c7c822974c0f.png)

#### HTML 属性

双大括号语法不可以用在 HTML 标签里.  通过 `v-bind` 指令, 可以将数据动态绑定到 HTML 属性上.

``` html
<div id="app">
    <p v-bind:style="redColor">看看我的颜色</p>
</div>
```

``` js
new Vue({
    el: '#app',
    data: {
        redColor: "color: red",
    }
});
```

![Screen Shot 2019-03-04 at 9.54.03 AM](https://i.loli.net/2019/03/04/5c7c854628c9a.png)

如果你觉得每次绑定时都写 `v-bind` 太长, Vue 提供一个简写形式 `:`

``` html
<!-- 完整语法 -->
<a v-bind:href="url">...</a>

<!-- 缩写 -->
<a :href="url">...</a>
```

#### 使用 JavaScript 表达式

在模板的双大括号标签内, 除了直接插入一个属性值外, 还可以写一段 JavaScript 表达式.

``` html
<div id="app">
总价为: $ {{ price * amount }} 
</div>
```

这些表达式会在所属 Vue 实例的数据作用域下作为 JavaScript 被解析。

但须注意的是, 下面例子中的情况是不允许的:

``` html
<!-- 这是语句，不是表达式 -->
{{ var a = 1 }}

<!-- 流控制也不会生效，请使用三元表达式 -->
{{ if (ok) { return message } }}
```

### 指令

指令是带有 `v-` 前缀的, 直接书写在模板的 HTML 元素中特殊属性。例如前面我们见过的 `v-bind` 就是个指令.  指令特性的值预期是单个 JavaScript 表达式.

指令特性的值预期是单个 JavaScript 表达式.  为当表达式的值发生改变时， 会有些特殊行为作用到绑定的 DOM 上。 

例如, 下面的 `<p>` 元素中使用了 `v-if` 指令.  指令根据根据表达式 `seen` 的值的真假来插入/移除 `<p>` 元素.

``` HTML
<p v-if="seen">现在你看到我了</p>
```

#### 参数

一些指令能够接收一个 "参数"，在指令名称之后以冒号表示。例如，`v-bind` 指令可以接收一个 HTML 属性作为参数, 然后再为其绑定一个值.

``` html
<a v-bind:href="url">...</a>
```

#### 动态参数

Vue 还允许用方括号括起来一个 JavaScript 表达式作为一个指令的参数：

``` html
<a v-bind:[attributeName]="url"> ... </a>
```

这里的 `attributeName` 会被作为一个 JavaScript 表达式进行动态求值，求得的值将会作为最终的参数来使用。例如，如果你的 Vue 实例有一个数据属性 `attributeName`，其值为 `"href"`，那么这个绑定将等价于 `v-bind:href`。

注意: 动态参数表达式有一些语法约束，空格和引号是不允许出现的。例如下面的代码是无效的:

``` html
<!-- 这会触发一个编译警告 -->
<a v-bind:['foo' + bar]="value"> ... </a>
```

变通的办法是使用没有空格或引号的表达式，或用计算属性替代这种复杂表达式。

#### 修饰符

修饰符是以半角句号 `.` 指明的特殊后缀，用于指定一个指令应该以特殊方式绑定。例如，`.prevent` 修饰符告诉 `v-on` 指令对于触发的事件调用 `event.preventDefault()`

## 计算属性 & 侦听器

### 计算属性

在项目开发中， 我们展示的数据往往需要经过一些处理。在模板内使用表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护。对于复杂的逻辑, Vue 提供 "计算属性" 这种方法来避免在模板中加入过重的业务逻辑，保证模板的结构清晰和可维护性。

例如, 下面模板中的表达式比较复杂, 我们可以用计算属性去进行改写:

``` html
<div id="example">
  {{ message.split('').reverse().join('') }}
</div>
```

可以看出表达式中的逻辑是想翻转 `message` 变量的字符串值.  

改写完代码如下:

``` html
<div id="example">
  {{ reversedMessage }}
</div>
```

``` js
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})
```

这里我们声明了一个计算属性 `reversedMessage`。我们提供的函数将用作属性 `vm.reversedMessage` 的 `getter` 函数.  我们声明式的让 `vm.reversedMessage` 的值依赖于 `vm.message`.

#### 计算属性缓存

要注意的是, 计算属性是基于它们的依赖进行缓存的.  上面的例子中, `message` 的值没有发生改变 `reversedMessage` 的值也不会更新.

那这就意味着, 如果计算属性的值取决于一个不是依赖的值, 即使这个值发生改变, 计算属性的值也不变. 例如:

``` js
computed: {
  now: function () {
    return Date.now()
  }
}
```

因为 `Date.now()` 不是响应式依赖, `now` 的值不会进行更新.

### 侦听器

除了计算属性, Vue 还提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动, 叫做 "侦听器".  当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。

我们在选项对象中定义 `watch` 属性来设置侦听器.  `watch` 属性的值为一个对象, 对象中的 Key 是需要观察的数据，Value 是对应回调函数。当侦听器被触发时, 会向回调函数中传递两个参数, 第一个是被观察的数据的新值, 第二个是老值.  `watch` 对象的属性值也可以是方法名，或者包含选项的对象。Vue 实例将会在实例化时调用 `$watch()`，遍历 `watch` 对象的每一个属性。

例如: 

``` html
<div id="watch-example">
  <p>
    Ask a yes/no question:
    <input v-model="question">
  </p>
  <p>{{ answer }}</p>
</div>
```

``` js
new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'

      // asyncGetAnswer 函数会去异步获取答案, 然后改变 answer 的值
      this.asyncGetAnswer(newQuestion, this.answer);
    }
  }
});
```

上面的例子中, 当 `question` 的值发生改变时, 设置来其上的侦听器就会被触发, 相应的回调函数得到执行.  在回调函数中通过一个异步函数去获取答案的值, 然后再改变 Vue 实例上 `answer` 的值.

注意: 不应该使用箭头函数来定义侦听函数.  因为箭头函数的 `this` 绑定在父级上下文, 而不是 Vue 实例.

#### 侦听器 vs 计算属性

请注意, 不要在该使用 "计算属性" 的时候, 滥用 "侦听器".  虽然他们都可以观察 Vue 实例的数据变动, 然后再做出相应的操作.  但区别是:

* "计算属性" 定义的是依赖于其他数据的数据;
* "侦听器" 用来在观察的数据发生变化时, 执行一些操作;

当想在某些数据发生变化的时候, 更新其他数据的情况下.  "侦听器" 和 "计算属性" 都可以实现这个目的.  但是使用 "计算属性" 往往更有可读性.  例如:

如果想在 `firstname` 和 `lastname` 发生改变的时候, 相应更新 `fullname`.  用 "侦听器" 代码如下:

``` html
<div id="demo">{{ fullName }}</div>
```

``` js
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})
```

上面代码是命令式且重复的。将它与 "计算属性" 的版本进行比较：

``` js
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})
```

很明显用 "计算属性" 可读性更好, 代码结构也更清晰.

而如果一个数据的改变会触发一系类异步, 或开销很大的操作的时候, 就要用 "侦听器" 了.

## 样式绑定

操作元素的 class 列表和内联样式是数据绑定的一个常见需求。因为它们定义在 HTML 元素的 `class` 和 `style` 属性里, 所以可以使用 `v-bind` 去动态将 Vue 实例的数据绑定在上面, 只需要通过表达式计算出字符串结果即可。不过，字符串拼接麻烦且易错。因此，在将 `v-bind` 用于 `class` 和 `style` 属性时，Vue.js 做了专门的增强。表达式结果的类型除了字符串之外，还可以是对象或数组。

### 绑定 class 列表

先来看一下字符串拼接的写法:

``` html
<p v-bind:class="myClass + ' ' + 'reset'">看看我的颜色</p>
```

``` js
new Vue({
    el: '#app',
    data: {
        myClass: "redColor",
    }
});
```

最后渲染出来的结果为:

``` html
<p class="redColor reset">看看我的颜色</p>
```

#### 对象语法

我们可以传给 `v-bind:class` 一个对象，以动态地切换 class：

``` html
<div v-bind:class="{ active: isActive }"></div>
```

上面的语法表示 `active` 这个 class 存在与否将取决于数据属性 `isActive` 的值, 为 `true` 则存在, 为 `false` 则没有.

`v-bind:class` 指令也可以与普通的 `class` 属性共存。例如:

``` js
<div
  class="static"
  v-bind:class="{ active: isActive, 'text-danger': hasError }"
></div>
```

我们也可以在这里绑定一个返回对象的计算属性:

``` html
<div v-bind:class="classObject"></div>
```

``` js
data: {
  isActive: true,
  error: null
},
computed: {
  classObject: function () {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
```

#### 数组语法

我们可以把一个数组传给 `v-bind:class`，以应用一个 class 列表：

``` html
<div v-bind:class="[activeClass, errorClass]"></div>
```

Vue 实例的数据对象为:

``` js
data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```

最后渲染出来的真实 DOM 为:

``` html
<div class="active text-danger"></div>
```

如果你也想根据条件切换列表中的 class，可以用三元表达式：

``` html
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
```

在数组语法中也可以使用对象语法：

``` html
<div v-bind:class="[{ active: isActive }, errorClass]"></div>
```

### 绑定内联样式

#### 对象语法

`v-bind:style` 的语法看着非常像 CSS，但其实是一个 JavaScript 对象。CSS 属性名可以用 "驼峰式命名" 或 "短横线分隔" (记得用单引号括起来) 来命名：

``` html
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

``` js
data: {
  activeColor: 'red',
  fontSize: 30
}
```

当然直接绑定到一个样式对象通常更好，这会让模板更清晰：

``` html
<div v-bind:style="styleObject"></div>
```

``` js
data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
```

同上面绑定 class 列表中应用的对象语法一样, 也可以绑定一个返回对象的计算属性.

#### 数组语法

`v-bind:style` 的数组语法可以将多个样式对象应用到同一个元素上：

``` html
<div v-bind:style="[baseStyles, overridingStyles]"></div>
```

``` js
data: {
  baseStyles: {
    padding: 0,
    margin: 0
  },
  overridingStyles: {
    color: 'red',
    fontSize: '13px'
  }
}
```

## 模板渲染

Vue.js 提供 `v-if`，`v-show`，`v-else`，`v-for` 这几个指令来说明模板和数据间的逻辑关系，

### 条件渲染

#### v-if/v-else

v-if 指令的作用是根据数据值来判断是否输出该 DOM 元素。这块内容只会在指令的表达式返回真值的时候被渲染。

你可以使用 `v-else` 指令来表示 `v-if` 的 "else 块".  `v-else-if`，充当 `v-if` 的 "else-if 块" 注意, `v-else` 元素必须紧跟在带 `v-if` 或者 `v-else-if` 的元素的后面，否则它将不会被识别。`v-else-if` 也必须紧跟在带 `v-if` 或者 `v-else-if` 的元素之后。

``` html
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

如果 Vue 实例的 `type` 数据的值为 `'A'`, 则只有第一个 `v-if` 块会被渲染出来.

#### v-show

v-show 是另一个用于根据条件展示元素的指令.

``` html
<h1 v-show="ok">Hello!</h1>
```

不同与 `v-if` 的是带有 `v-show` 的元素始终会被渲染并保留在 DOM 中。`v-show` 只是简单地切换元素的 CSS 属性 `display`。

### 列表渲染

`v-for` 指令根据一个数组的数组项列表进行渲染。`v-for` 指令需要使用 `item in items` 形式的特殊语法 (分隔符也可以是 `of`) ，`items` 是数组的名称, `item` 是迭代时给数组项的别名。

``` html
<ul id="example-1">
  <li v-for="item in items">
    {{ item.message }}
  </li>
</ul>
```

``` js

var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
```

渲染出来的结果为:

``` html
<ul id="example-1">
    <li>Foo</li>
    <li>Bar</li>
</ul>
```

`v-for` 还支持一个可选的第二个参数为当前项的索引。例如:

``` html


<ul id="example-2">
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
```

#### v-for 迭代对象属性

也可以用 `v-for` 通过一个对象的属性来迭代。

``` html
<ul id="v-for-object" class="demo">
  <li v-for="value in object">
    {{ value }}
  </li>
</ul>
```

``` js
new Vue({
  el: '#v-for-object',
  data: {
    object: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30
    }
  }
})
```

你也可以提供第二个的参数为键名 (Key name), 第三个参数为索引 (Index).  注意, 如果迭代的是数组, 第二个参数是索引.

``` html
<div v-for="(value, key, index) in object">
  {{ index }}. {{ key }}: {{ value }}
</div>
```

在遍历对象时，是按 `Object.keys()` 的结果遍历, 也就是对象的 "自身的可枚举属性".

### 就地复用 & key

当 Vue.js 用 `v-for` 去更新已渲染过的列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用每个元素.  并且确保它在特定索引下显示已被渲染过的每个元素.

举例说明:

``` html
<ul id="example-1">
  <li v-for="(item, index) in items">
    {{ item.message }}
    <button v-on:click="moveDown(index)">位置向下移动</button>
  </li>
</ul>
```

``` js
var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'A' },
      { message: 'B' },
      { message: 'C' },
      { message: 'D' },
      { message: 'E' },
      { message: 'F' },
      { message: 'G' }
    ]
  },
  
  methods: {
    moveDown: function(index) {
        let target = this.items[index];
        this.items.splice(index, 1);
        this.items.splice(index + 1, 0, target);
    }
  }
})
```

渲染后结果为:

![Screen Shot 2019-03-04 at 2.53.21 PM](https://i.loli.net/2019/03/04/5c7ccb7a51997.png)

当点击按钮的时候, 这个列表是已经被渲染过的了.  依照 "就地复用" 策略, `<li>` 元素并不发生位置上的改变. 也就是 Vue 将不会移动 DOM 元素来匹配数据项的顺序.  因为 `<li>` 元素并没有与任何数据绑定, 绑定在一起的是 `<li>` 元素中的文本.  所以 Vue 默认使用已经渲染的 DOM 元素, 而重新渲染元素上的文本.

"就地复用" 的模式是高效的，但是只适用于**不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出**。

![1234人](https://i.loli.net/2019/03/04/5c7ccec6d67f8.gif)

有时候为了业务需要, 我们要让 Vue 把一些节点当做唯一, 不可复用的.  这时需要为元素绑定一个唯一 `key` 属性。`key` 属性的值需要是一个唯一, 不重复的值.

``` html
<div v-for="item in items" :key="item.id">
  <!-- 内容 -->
</div>
```

### template 标签

上述的例子中，`v-show` 和 `v-if` 指令都应用在一个包含其他子节点的父节点上.

例如:

``` html
<div v-if="OK">
    <p>我会被显示出来!</p>
</div>
```

当 Vue 在渲染模板时, 这个包裹其他元素的父元素也会被渲染出来.  有的时候我们并不想要渲染这个用来包裹的元素.  那我们可以用 HTML 提供的 `<template>` 元素去进行包裹.

例如: 

``` html
<ul>
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
  </template>
</ul>
```

最后渲染出来的真实 DOM 为:

``` html
<ul>
    <li>item_1</li>
    <li>item_2</li>
    <li>item_3</li>
</ul>
```

## 事件处理

### 事件监听 & 事件处理函数

#### 事件监听

Vue.js 提供了 `v-on` 指令用来监听 DOM 事件, 并在触发时运行一些 JavaScript 代码。

例如: 

``` html
<div id="example-1">
  <p>计数: {{ counter }}</p>
  <button v-on:click="counter += 1">Add 1</button>
</div>
```

``` js
var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
})
```

当 `<button>` 上的 `click` 事件触发时, 绑定在事件上的 JavaScript 表达式得到执行.  `counter` 的值加 1.

Vue 提供 `v-on` 指令一个简写形式: `@`

上面的例子可以简写成:

``` html
<div id="example-1">
  <p>计数: {{ counter }}</p>
  <button @click="counter += 1">Add 1</button>
</div>
```



#### 事件处理函数

然而许多事件处理逻辑会更为复杂，所以直接把 JavaScript 表达式写在 `v-on` 指令中是不可行的。因此一般是用 `v-on` 指令为对于的 DOM 事件绑定事件处理函数.

例如:

``` html
<div id="example-2">
  <!-- `greet` 是在下面定义的方法名 -->
  <button v-on:click="greet">Greet</button>
</div>
```

``` js
var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // 在 `methods` 对象中定义方法
  methods: {
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})

// 也可以用 JavaScript 直接调用方法
example2.greet() // => 'Hello Vue.js!'
```

#### 函数参数

需要注意的是, 

当用 `v-on` 给事件指定一个处理函数名的时候.  例如: `<button v-on:click="greet">Greet</button>`.  函数被调用时, 会传入一个事件对象 (event) 作为参数.  

而当给事件指定一段内联 JavaScript 语句时, 要想获得事件对象, 可以用特殊变量 `$event` 把它传入方法：

``` html
<button v-on:click="greet('hello', $event)">Greet</button>
```

``` js
methods: {
  greet: function (message, event) {
    // 现在我们可以访问原生事件对象
    if (event) event.preventDefault()
    alert(message)
  }
}
```

### 修饰符

#### 事件修饰符

在事件处理程序中调用 `event.preventDefault()` 或 `event.stopPropagation()` 是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的做法是, 在方法中只写纯粹的数据逻辑，而不是去处理 DOM 事件细节。要记住, 既然使用了 Vue 框架, 就把视线从 DOM 操作中移开.

那为了解决这个问题，Vue.js 为 `v-on` 提供了事件修饰符。之前提过，修饰符是由点开头的指令后缀来表示的。

修饰符列表:

* `.stop`: 阻止事件继续传播
* `.prevent`: 阻止事件的默认的行为
* `.capture`: 捕获阶段执行事件处理函数
* `.self`: 只当在 `event.target` 是当前元素自身时触发处理函数
* `.once`: 事件将只会触发一次
* `.passive`: 不会阻止事件默认行为

修饰符之间可以串联, 但同时顺序也很重要.  例如: `v-on:click.prevent.self` 会阻止所有的点击，而 `v-on:click.self.prevent` 只会阻止对元素自身的点击。

#### 按键修饰符

在监听键盘事件时，我们经常需要检查详细的按键。Vue 允许为 `v-on` 在监听键盘事件时添加按键修饰符：

Vue 提供了绝大多数常用的按键码的别名：

* `.enter`
* `.tab`
* `.delete` (删除/退格)
* `.esc`
* `.space`
* `.up`
* `.down`
* `.left`
* `.right`

``` html
<!-- 只有在 `key` 是 `Enter` 时调用 submit 函数 -->
<input v-on:keyup.enter="submit">
```

#### 系统修饰符

可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器

* `.ctrl`
* `.alt`
* `.shift`
* `.meta`

``` html
<!-- 按住 Ctrl 键的时候点击才能触发 -->
<div @click.ctrl="doSomething">Do something</div>
```

通过 `.exact` 修饰符允许你控制由精确的系统修饰符组合触发的事件。

``` html
<!-- 有且只有 Ctrl 被按下的时候才触发 -->
<button @click.ctrl.exact="onCtrlClick">A</button>
```

#### 鼠标修饰符

下面这些修饰符会限制处理函数仅响应特定的鼠标按钮。

* `.left`
* `.right`
* `.middle`

#### 并未耦合

事件处理方法并没有耦合到 HTML 文本中.  所有的 Vue.js 事件处理方法和表达式都严格绑定在当前视图的 ViewModel 上.  当 Vue 把模板编译成真实 DOM 的时候, 事件处理方法并没有内联的写在 HTML 元素内.  它不会导致任何维护上的困难。实际上，使用 `v-on` 有几个好处：

* 通过 HTML 模板能快速定位设置在元素上的事件处理方法;
* 无须在 JavaScript 里手动绑定事件，你的 ViewModel 代码可以是非常纯粹的逻辑，和 DOM 完全解耦，更易于测试;
* 当一个 ViewModel 被销毁时，所有的事件处理器都会自动被删除。你无须担心如何清理它们;

## 表单输入绑定

### v-model 双向数据绑定

通过 `v-model` 指令可以在表单控件元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。它负责监听用户的输入事件以更新数据.

例如: 

``` html
<input v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>
```

渲染出来之后, 当我在 `<input>` 中输入一个值的时候, 其 `value` 属性改变, 同时触发 `input` 事件.  因为 `value` 与 Vue 实例的 `message` 属性动态双向绑定, `message` 的值也被更新为 `value` 的值.  同样如果修改 `message` 的值, `value` 的值也会动态更新.

### 绑定值

在单选按钮，复选框及选择框表单组件中，一般会涉及到多个选项.  例如:

``` html
<div id="app">
    <label>选项 A</label>
    <input type='radio' value="A" v-model="myChoice" />
    <br />

    <label>选项 B</label>
    <input type='radio' value="B" v-model="myChoice" />
    <br />

    <label>选项 C</label>
    <input type='radio' value="C" v-model="myChoice" />
    <br />
</div>
```

每个选项都有一个自己的 `value` 值.  `v-model` 只将被选中的那个选项的 `value` 值绑定到 Vue 实例相应的属性上.  但在业务中, 很多时候每个选项的 `value` 也都需要动态绑定一个 Vue 实例的数据.  那这时就可以用 `v-bind` 实现, 并且这个属性的值可以不是字符串.

上面的代码可以改写成:

``` html
<div id="app">
    <label>选项 A</label>
    <input type='radio' :value="value_A" v-model="myChoice" />
    <br />

    <label>选项 B</label>
    <input type='radio' :value="value_B" v-model="myChoice" />
    <br />

    <label>选项 C</label>
    <input type='radio' :value="value_C" v-model="myChoice" />
    <br />

    我的选择为: {{ myChoice }}
</div>
```

``` js
var example1 = new Vue({
  el: '#app',
  data: {
    value_A: 'A',
    value_B: 'B',
    value_C: 'C',
    myChoice: '未选择'
  }
})
```

这样的话, 每个选项的 `value` 值与 Vue 实例的数据动态绑定.  被选中的选项的 `value` 值又通过 `v-model` 绑定到 Vue 实例的 `myChoice` 上.  

效果为:

![mychice](https://i.loli.net/2019/03/04/5c7d3badc40c0.gif)

这个时候很多人会有一个疑问: "如果在别处修改了 `myChoice` 的值, 会不会动态修改了被选中选项上的 `value` 值?"  这个疑问在下面会解答.

### 修饰符

`v-model` 指令同样有几个修饰符:

* `.lazy`: 在默认情况下，`v-model` 在每次 `input` 事件触发后将输入框的值与 Vue 实例数据进行同步.  `.lazy` 修饰符可以使其在 `change` 事件触发时进行同步.  也就是输入完时不同步, 按回车后才同步.
* `.number`: 自动将用户的输入值转为数值类型
* `.trim`: 自动过滤用户输入的首尾空白字符

### v-model & v-bind

很多人会搞不清 `v-model` 和 `v-bind` 的区别.  比如下面情况中, `name_A` 和 `name_B` 到底谁跟着谁变呢? 会不会有冲突呢?

``` html
<input :value="name_A" v-model="name_B">
```

首先, `v-bind` 产生的效果不含有双向绑定，`:value` 的效果就是让 `<input>` 的 `value` 属性值等于 Vue 实例的 `name_A` 的值.  `v-model` 的效果是使 `input` 和  Vue 实例的 `name_B` 建立双向绑定.  

因为 `v-model` 的优先级比 `v-bind` 高. 在上面情况中, `v-bind` 会无效.  当 `<input>` 中输入的值发生变化的时候，`name_B` 会跟着更新, 反之亦然.