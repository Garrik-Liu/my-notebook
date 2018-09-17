# [笔记] - 狼叔: 如何正确地学习 Node.js 

[链接](https://i5ting.github.io/How-to-learn-node-correctly/)

## Node.js 简介

Node.js 于 2009 年, 由 Joyent 的员工 Ryan Dahl 开发.  2012年, Ryan 离开社区, 随后在 2015年 由于 Node.js 的贡献者对 ES6 新特性集成问题存在分歧，导致分裂出 io.js.  随后, io.js  发布了 1.0, 2.0, 3.0 版本.  由于此次分裂, Node 基金会在 2015 年成立, 并发布了 Node.js 4.0 版本.  Node.js 基金会的创始成员包括 Google、Joyent、IBM、Paypal、微软、Fidelity 和 Linux基金会，创始成员将共同掌管过去由 Joyent 一家企业掌控的 Node.js 开源项目.

Node.js 不是一门语言也不是框架, 它只是基于 Google V8 引擎的 JavaScript 运行环境.  结合 Libuv 扩展了 JavaScript 功能，使其能够同时具有 DOM 操作(浏览器)和 I/O、文件读写、操作数据库(服务器端)等能力.

Node.js 通常被用来开发低延迟的网络 I/O 密集型应用，也就是那些需要在服务器端环境和前端实时收集和交换数据的应用. 

Node.js 同时存在很多缺点, 比如回调太多难于控制（俗称回调地狱）和 CPU 密集任务处理的不是很好.  但是，目前异步流程技术已经取得了非常不错的进步，从 Callback、Promise 到 Async 函数，可以轻松的满足所有开发需求。

### 基本原理

Node.js 早期的架构图:

![14912763353044](https://i.imgur.com/RjRZAeZ.png)

上面这张图介绍了 Node.js 基于 Chrome V8 引擎构建的，由事件循环（Event Loop）分发 I/O 任务.  最终工作线程（Work Thread）将任务丢到线程池（Thread Pool）里去执行，而事件循环只要等待执行结果就可以了。

> Chrome V8 是 Google 发布的开源 JavaScript 引擎，采用 C/C++ 编写，在 Google 的 Chrome 浏览器中被使用。Chrome V8 引擎可以独立运行，也可以用来嵌入到 C/C++ 应用程序中执行。

> Event Loop 事件循环（由 `libuv` 提供）
> Thread Pool 线程池（由 `libuv` 提供）

简单说: 
* Node.js 基于 V8 引擎, V8 引擎是 JavaScript 引擎, 所以 Node.js 使用 JavaScript 语法.  
* JavaScript 是单线程的, 一个时间点只能做一件事.  单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务.  如果前一个任务耗时很长，后一个任务就不得不一直等着.
* 处理 I/O 操作时, 线程要等结果返回, 才能往下执行. CPU 是闲着的, 很没效率 ❓❓❓ (那 I/O 是谁在执行呢 ?)
* 异步操作时, CPU 完全可以不管 I/O 设备，挂起处于等待中的任务，先运行排在后面的任务
* 将等待中的 I/O 任务放到 Event Loop 里
* 由 Event Loop 将 I/O 任务放到线程池里

之所以说 Node.js 是单线程，就是因为在接受任务的时候是单线程的，它无需进程/线程切换上下文的成本，非常高效，但它在执行具体任务的时候是多线程的.  真正执行操作的是具体的线程池里的 I/O 任务 ❓❓❓ (线程池概念我还是不懂?)

同步 和 异步 的区别就像排队和叫号:
* 排队：在排队的时候，你除了等之外什么都干不了
* 叫号机：你要做的是先取号码，等轮到你的时候，系统会通知你，这中间，你可以做任何你想做的事儿

Node.js 的 Bindings 层做的事儿就是将 Chrome V8 等暴露的 C/C++ 接口转成 JavaScript API，并且结合这些 API 编写了 Node.js 标准库，所有这些 API 统称为 Node.js SDK.

### 应用场景

![屏幕快照 2017-05-17 07.25.05](https://i.imgur.com/kiaQ4o9.png)

* 跨平台：覆盖你能想到的面向用户的所有平台
* Web应用开发：网站、API、RPC服务等
* 前端：三大框架 React \ Vue \ Angular 辅助开发，以及工程化演进过程（使用 Gulp /Webpack 构建 Web 开发工具）
* 工具：npm 上各种工具模块，包括各种前端预编译、构建工具 Grunt / Gulp、脚手架，命令行工具，各种奇技淫巧等

![Screen Shot 2018-09-17 at 9.06.13 AM](https://i.imgur.com/UYhLwxR.png)

## 如何学习 Node.js

JavaScript 语法必须会.

面向对象写好不容易:
* 基于原型的写法很基础, 可以不用, 但是不能不会.
* ES6 让定义类变得简单了.  要理解抽象，继承，封装，多态4个基本特征, 最好再看看设计模式.

### 异步流程控制

Node.js 的异步是整个学习 Node.js 过程中重中之重

从09年到现在，8年多的时间里，整个 Node.js 社区做了大量尝试

![Screen Shot 2017-04-05 at 08.43.08](https://i.imgur.com/zs9Q4ZL.png)

推荐使用 Async 函数 + Promise 组合

结论: 
* Node.js 里 callback 写法必须会的。
* Node.js 学习重点: Async 函数与 Promise
    * 中流砥柱：Promise
    * 终极解决方案：Async/Await

#### API 写法：Error-first Callback 和 EventEmitter

Error-first Callback 定义错误优先的回调写法只需要注意2条规则即可：
* 回调函数的第一个参数返回的 error 对象，如果 error 发生了，它会作为第一个 err 参数返回，如果没有，一般做法是返回 null。
* 回调函数的第二个参数返回的是任何成功响应的结果数据。如果结果正常，没有 error 发生，err 会被设置为 null, 并将返回成功结果数据赋值给第二个参数.

``` js
function(err, res) {
  // process the error and result
}
```

非空的 “err” 相当于程序异常；而空的 “err” 相当于可以正常返回结果 “res”

#### EventEmitter

事件模块是 Node.js 内置的对观察者模式 “发布/订阅”（publish/subscribe）的实现.  通过 `EventEmitter` 属性，提供了一个构造函数。该构造函数的实例具有 `on` 方法，可以用来监听指定事件，并触发回调函数。

#### Promise

Node.js 因为采用了错误优先的回调风格写法，导致 SDK 里导出都是回调函数。如果组合调用的话，就会特别痛苦，经常会出现回调里嵌套回调的问题, 称之为 Callback Hell，即回调地狱。

``` js
step1(function (value1) {
    step2(value1, function(value2) {
        step3(value2, function(value3) {
            step4(value3, function(value4) {
                // Do something with value4
            });
        });
    });
});
```

Promise (许诺) 意味着一个还没有完成的操作，但在未来会完成的。

与 Promise 最主要的交互方法是通过将 **函数** 传入它的 `then` 方法从而获取得 Promise 最终的值或 Promise 最终拒绝（reject）的原因。要点有三个：
* 递归，每个异步操作返回的都是 Promise 对象
* 状态机：三种状态转换，只在 promise 对象内部可以控制，外部不能改变状态
* 全局异常处理

定义: 

``` js
var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…

  if (/* everything turned out fine */) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});
```

`resolve` 和 `reject`, 分别代表成功和失败时候的处理。

调用:

``` js
promise.then(function(text){
    console.log(text)// Stuff worked!
    return Promise.reject(new Error('我是故意的'))
}).catch(function(err){
    console.log(err)
})
```

如果 Promise 成功执行 `resolve` 了，那么它就会将 `resolve` 的值传给最近的 `then` 函数，作为它的 `then` 函数的参数。如果出错 `reject`, 那就交给 `catch` 来捕获异常就好了。

用 Promise 封装 API 通用性强，用起来简单，学习成本低。在 async 函数普及之前，绝大部分应用都是采用 Promise 来做异步流程控制的

#### Async/Await

### WEB 编程要点

一般，后端开发指的是 Web 应用开发中和视图渲染无关的部分，主要是和数据库交互为主的重业务型逻辑处理。

但现在架构升级后，Node.js 承担了前后端分离重任之后，有了更多玩法。从带视图的传统 Web 应用和面向API 接口应用，到通过 RPC 调用封装对数据库的操作，到提供前端 API 代理和网关，服务组装等，统称为后端开发

## 如何每日精进

## 从招聘角度, Node.js 开发需要掌握什么

