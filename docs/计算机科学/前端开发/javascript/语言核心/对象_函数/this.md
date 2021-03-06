# this

在 Java 等面向对象的语言中，`this` 关键字的含义是明确且具体的，即指代当前对象。一般在编译期确定下来，或称为编译期绑定。而在 JavaScript 中，`this` 指向是函数执行时所在的环境对象.   `this` 是**动态绑定**，或称为运行期绑定的.  

先来看一下 `this` 的使用例子:

``` js
function identify() { 
    return this.name.toUpperCase(); 
}

function speak() { 
    var greeting = "Hello, I'm " + identify.call( this ); 
    console.log( greeting ); 
}

var me = { 
    name: "Kyle" 
};

var you = { 
    name: "Reader" 
};

identify.call( me ); // KYLE 
identify.call( you ); // READER

speak.call( me ); // Hello, 我是 KYLE 
speak.call( you ); // Hello, 我是 READER
```

因为使用了 `this` 这段代码可以在不同的上下文对象（ `me` 和 `you` ）中重复使用函数 `identify()` 和 `speak()` 

如果不使用 `this` ，那就需要给 `identify()` 和 `speak()` 显式传入一个上下文对象。

``` js
function identify(context) { 
    return context.name.toUpperCase(); 
}

function speak(context) { 
    var greeting = "Hello, I'm " + identify( context ); 

    console.log( greeting ); 
}

identify( you ); // READER 
speak( me ); //hello, 我是 KYLE
```

`this` 提供了一种更优雅的方式来**隐式 “传递” 一个对象引用**，因此可以将 API 设计得更加简洁并且易于复用。

## 绑定规则

### 调用位置

在理解 this 的绑定过程之前，首先要理解 "调用位置" 这个概念: **"调用位置" 就是函数在代码中被调用的位置（而不是声明的位置）**。

寻到 "调用位置" 的方法就是分析 "调用栈"（就是为了到达当前执行位置所调用的所有函数）。我们关心的调用位置就在当前正在执行的函数的前一个调用中 。

``` js
// b() 函数被调用时, 
// 调用栈为 a() -> b(), 
// 调用位置在 a()
function a() {
    b();
}

function b() {
    console.log('HAHA');
}
```

**在函数的执行过程中调用位置决定了 `this` 的绑定对象。根据情况的不同, 具体可以分为下面四种规则: 默认绑定, 隐示绑定, 显示绑定, new 绑定.**

### 默认绑定

独立函数调用。可以把这条规则看作是无法应用其他规则时的默认规则。
 
``` js
var a = 123;

function foo() {
    console.log(this.a);
}

foo(); // 123
```

声明在全局作用域中的变量（比如 `var a = 123` ）就是全局对象的一个同名属性。在代码中， `foo()` 是直接使用不带任何修饰的函数引用进行调用的.  函数调用时应用了 `this` 的默认绑定 ，因此 `this` 指向全局对象。

::: warning
如果使用严格模式（ strict mode ），那么全局对象将无法使用默认绑定，因此 `this` 会绑定到 `undefined` 

对于默认绑定来说，决定 1 绑定对象的并不是调用位置是否处于严格模式，而是函数体是否处于严格模式。
:::

### 隐示绑定

调用位置是否有上下文对象，或者说函数调用时, 是否被某个对象拥有或者包含.

``` js
function foo() {
    console.log(this.a);
}

var obj = {
    a: 2,
    foo: foo
}

obj.foo(); // 2
```

`foo()` 在 `obj` 对象的上下文中被调用. 隐式绑定规则会把函数调用中的 `this` 绑定到这个上下文对象。

#### 隐式丢失

一个最常见的 `this` 绑定问题就是被隐式绑定的函数会丢失绑定对象.  也就是说它会应用默认绑定, 从而把 `this` 绑定到全局对象或者 `undefined` 上

``` js
function foo() {
    console.log(this.a);
}

var obj = {
    a: 2,
    foo: foo
}

var x = obj.foo;

var a = 1234;

x(); //1234
```

虽然 `x` 是 `obj.foo` 的一个引用， 但是实际上，它引用的是 `foo` 函数本身，因此此时的 `x()` 其实是一个不带任何修饰的函数调用，因此应用了默认绑定。

一个更容易让人注意不到的情况发生在将函数作为参数传递时.  参数传递其实就是一种隐式赋值, 传递的是引用.

``` js
function foo() {
    console.log(this.a);
}

var obj = {
    a: 2,
    foo: foo
}

var a = 1234;

function doFun(fn) {
    fn();
}

doFun(obj.foo); //1234
```

### 显示绑定

使用函数的 `call(..)` 和 `apply(..)` 方法可以直接指定 `this` 的绑定对象， 因此我们称之为显式绑定。

``` js
function foo() {
    console.log(this.a);
}

var obj = {
    a: 2
}

foo.call(obj); // 2
```

### new 绑定

在 JavaScript 中， 构造函数只是一些 使用 `new` 操作符时被调用的函数。它们并不会属于某个类，也不会实例化一个类。它们只是被 `new` 操作符调用的普通函数而已。

使用 new 来调用函数，或者说发生构造函数调用时，会自动执行下面的操作:

1. 创建（或者说构造）一个全新的对象。
2. 这个新对象会被执行 [[ prototype ]] 连接。
3. 函数调用时 this 绑定到新对象上。
4. 如果函数没有返回其他对象，new 表达式中的函数调用会自动返回这个新对象

## 优先级

可以根据优先级来判断函数在某个调用位置应用的是哪条规则。可以按照下面的顺序来进行判断：

1. 函数是否在 `new` 中调用（ `new` 绑定）？如果是的话 `this` 绑定的是新创建的新对象。 
2. 函数是否通过指定的对象。`call`, `apply`（显式绑定) 如果是的话，`this` 绑定的是指定的对象. 
3. 函数是否在某个上下文对象中调用（隐式绑定）？如果是的话， `this` 绑定的是那个上下文对象。 
4. 如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到 undefined ，否则绑定到全局对象。

::: warning
如果你把 `null` 或者 `undefined` 作为 `this` 的绑定对象传入 `call`、 `apply` 或者 `bind`， 这些值在调用时会被忽略，实际应用的是默认绑定规则
:::

## 箭头函数

箭头函数不使用 this 的四种标准规则，而是根据外层（函数或者全局）作用域来决定 this 。

箭头函数可以像 `bind(..)` 一样确保函数的 `this` 被绑定到指定对象，此外，其重要性还体现在它用更常见的词法作用域取代了传统的 `this` 机制。箭头函数最常用于回调函数中

``` js
function foo() {
    return () => {
        console.log(this.a);
    }
}

var obj = {
    a: 2
}

foo.call(obj); // 2
```

`foo()` 内部创建的箭头函数会捕获调用时 `foo()` 的 `this`.  `foo` 的 `this` 绑定在 `obj`, 箭头函数的 `this` 也绑定在 `obj`

## 误解

### 指向自身 (错误)

有的人把 `this` 理解成指向函数自身. 错误的书写了类似于下面的代码:

``` js
function foo() {
    console.log(this.name); 
}

foo.name = 'FOO'

foo(); // undefined
```

如果真的想指向函数自身的话, 可以有下面几种写法:

#### 直接用函数名

``` js
function foo() {
    console.log(foo.name); 
}

foo.name = 'FOO'

foo(); // undefined
```

#### 使用 `arguments.callee`

这是一种传统的但是现在已经被弃用和批判的用法.  这是唯一一种可以从匿名函数对象 内部引用自身的方法。然而，更好的方式是避免使用匿名函数

``` js
function foo() {
    console.log(arguments.callee.name); 
}

foo.name = 'FOO'

foo(); // undefined
```

#### 使用 `call(..)` 

``` js
function foo() {
    console.log(this.name); 
}

foo.name = 'FOO'

foo.call(foo); // undefined
```

### 指向函数所属的作用域 (错误)

第二种常见的误解是， `this` 指向函数的作用域。需要明确的是，**`this` 在任何情况下都不指向函数的词法作用域。**

``` js
function foo() { 
    var a = 2; 
    this.bar(); 
}

function bar() { 
    console.log( this.a ); 
}

foo(); // ReferenceError: a is not defined
```

首先，这段代码试图通过 `this.bar()` 来引用 `bar()` 函数。这是绝对不可能成功的.  调用 `bar()` 最自然的方法是省略前面的 `this` ，直接使用词法引用标识符。此外，编写这段代码的开发者还试图使用 `this` 联通 `foo()` 和 `bar()` 的词法作用域，从而让 `bar()` 可以访问 `foo()` 作用域里的变量 `a` 。 这是不可能实现的.

