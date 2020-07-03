# Symbol

[文档 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

## 概述

ES5 的对象属性名都是字符串，这容易造成属性名的冲突。比如我想给一个别人写的对象添加新属性.  如果每个属性的名字都是独一无二的, 那么就不会有这种问题了.  Symbol 数据类型就解决了这个问题

ES6 引入了一种新的原始数据类型 Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型

Symbol 值通过 `Symbol` 函数生成。函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述, 主要是为了在控制台显示，或者转为字符串时，比较容易区分。

``` js
let s = Symbol();

typeof s
// "symbol"

let s1 = Symbol('foo');
let s2 = Symbol('bar');

s1 // Symbol(foo)
s2 // Symbol(bar)

s1.toString() // "Symbol(foo)"
s2.toString() // "Symbol(bar)"
```

::: warning 注意
注意，Symbol 函数前不能使用 `new` 命令，否则会报错。这是因为生成的 Symbol 是一个基本类型的值，不是对象。也就是说，由于 Symbol 值不是对象，所以不能添加属性。基本上，它是一种类似于字符串的数据类型。
:::

如果 Symbol 的参数是一个对象，就会调用该对象的 `toString` 方法，将其转为字符串，然后才生成一个 Symbol 值。

注意，`Symbol` 函数的参数只是表示对当前 Symbol 值的描述，因此即使相同参数的 `Symbol` 函数的返回值是不相等的。

``` js
// 没有参数的情况
let s1 = Symbol();
let s2 = Symbol();

s1 === s2 // false

// 有参数的情况
let s1 = Symbol('foo');
let s2 = Symbol('foo');

s1 === s2 // false
```

┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ 

Symbol 值不能与其他类型的值进行运算，会报错。

``` js
let sym = Symbol('My symbol');

"your symbol is " + sym
// TypeError: can't convert symbol to string
`your symbol is ${sym}`
// TypeError: can't convert symbol to string
```

但是，Symbol 值可以显式转为字符串。

``` js
let sym = Symbol('My symbol');

String(sym) // 'Symbol(My symbol)'
sym.toString() // 'Symbol(My symbol)'
```

另外，Symbol 值也可以转为布尔值，但是不能转为数值。

``` js
let sym = Symbol();
Boolean(sym) // true
!sym  // false
```

## 作为属性名的 Symbol 

使用 Symbol 作为对象的属性名可以防止命名冲突.

``` js
let mySymbol = Symbol();

// 第一种写法
let a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
let a = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
let a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
a[mySymbol] // "Hello!"
```
::: warning 注意
注意，Symbol 值作为对象属性名时，不能用点运算符
:::

## 属性名的遍历

Symbol 作为属性名，该属性不会出现在 `for...in` 、`for...of` 循环中，也不会被 `Object.keys()`、 `Object.getOwnPropertyNames()`、`JSON.stringify()`返回。但是，它也**不是私有属性**.

`Object.getOwnPropertySymbols` 方法，可以获取指定对象的所有 Symbol 属性名。返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。

``` js
const obj = {};
let a = Symbol('a');
let b = Symbol('b');

obj[a] = 'Hello';
obj[b] = 'World';

const objectSymbols = Object.getOwnPropertySymbols(obj);

objectSymbols
// [Symbol(a), Symbol(b)]
```

┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ ┅ 

`Reflect.ownKeys` 方法可以返回所有类型的键名，包括常规键名和 Symbol 键名

``` js
let obj = {
  [Symbol('my_key')]: 1,
  enum: 2,
  nonEnum: 3
};

Reflect.ownKeys(obj)
//  ["enum", "nonEnum", Symbol(my_key)]
```

## Symbol.for()，Symbol.keyFor()

有时，我们希望重新使用**同一个 Symbol 值**

`Symbol.for` 方法可以做到这一点。它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值。

``` js
let s1 = Symbol.for('foo');
let s2 = Symbol.for('foo');

s1 === s2 // true
```

`Symbol.for()` 与 `Symbol()` 这两种写法，都会生成新的 Symbol。它们的区别是，**前者会被登记在全局环境中供搜索，后者不会**。

`Symbol.keyFor` 方法返回一个已登记的 Symbol 类型值的 `key`。

``` js
let s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"

let s2 = Symbol("foo");
Symbol.keyFor(s2) // undefined
```

上面代码中，变量 `s2` 属于未登记的 Symbol 值，所以返回 `undefined`。

## 内置的 Symbol 值

除了定义自己使用的 Symbol 值以外，ES6 还提供了 11 个内置的 Symbol 值，指向语言内部使用的方法。

[参考链接](http://es6.ruanyifeng.com/#docs/symbol#%E5%86%85%E7%BD%AE%E7%9A%84-Symbol-%E5%80%BC)

## 使用案例

#### 消除魔术字符串

魔术字符串指的是，在代码之中多次出现、与代码形成**强耦合**的某一个具体的字符串或者数值。风格良好的代码，应该尽量消除魔术字符串，改由含义清晰的变量代替。

``` js
function getArea(shape, options) {
  let area = 0;

  switch (shape) {
    case 'Triangle': // 魔术字符串
      area = .5 * options.width * options.height;
      break;
    /* ... more code ... */
  }

  return area;
}

getArea('Triangle', { width: 100, height: 100 }); // 魔术字符串
```

上面代码中，字符串 `Triangle` 就是一个魔术字符串。它多次出现，与代码形成“强耦合”，不利于将来的修改和维护。

常用的消除魔术字符串的方法，就是把它写成一个变量。

``` js
const shapeType = {
  triangle: 'Triangle'
};

function getArea(shape, options) {
  let area = 0;
  switch (shape) {
    case shapeType.triangle:
      area = .5 * options.width * options.height;
      break;
  }
  return area;
}

getArea(shapeType.triangle, { width: 100, height: 100 });
```
上面代码中，我们把 `Triangle` 写成 `shapeType` 对象的 `triangle` 属性，这样就消除了强耦合。

如果仔细分析，可以发现 `shapeType.triangle` 等于哪个值并不重要，只要确保不会跟其他 `shapeType` 属性的值冲突即可。因此，这里就很适合改用 Symbol 值。

``` js
const shapeType = {
  triangle: Symbol()
};
```

#### 模块的单例模式

单例模式指的是调用一个类，任何时候返回的都是同一个实例。

对于 Node 来说，模块文件可以看成是一个类。怎么保证每次执行这个模块文件，返回的都是同一个实例呢？

很容易想到，可以把实例放到顶层对象 `global`。

``` js
// mod.js
function A() {
  this.foo = 'hello';
}

// 如果顶层对象中没有目标属性, 那么就初始化一个
if (!global._foo) {
  global._foo = new A();
}

module.exports = global._foo;
```

但是，这里有一个问题，全局变量 `global._foo` 是可写的，任何文件都可以修改。

为了防止这种情况出现，我们就可以使用 Symbol。

``` js
// mod.js
const FOO_KEY = Symbol.for('foo');

function A() {
  this.foo = 'hello';
}

if (!global[FOO_KEY]) {
  global[FOO_KEY] = new A();
}

module.exports = global[FOO_KEY];
```

上面代码中，可以保证 `global[FOO_KEY]` 不会被无意间覆盖，但还是可以被改写。

``` js
global[Symbol.for('foo')] = { foo: 'world' };

const a = require('./mod.js');
```

如果键名使用 Symbol 方法生成，那么外部将无法引用这个值，当然也就无法改写。

``` js
// mod.js
const FOO_KEY = Symbol('foo');

// 后面代码相同 ……
```

上面代码将导致其他脚本都无法引用 FOO_KEY。但这样也有一个问题，就是如果多次执行这个脚本，每次得到的 FOO_KEY 都是不一样的。