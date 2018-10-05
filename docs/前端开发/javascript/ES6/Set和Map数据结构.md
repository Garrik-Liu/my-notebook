# Set 和 Map 数据结构

## Set

 Set 类似于数组，但是成员的值都是唯一的，没有重复的值。

使用 Set 构造函数, 生成 Set 数据结构.  Set 函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。

``` js
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}
// 没有重复值
// 2 3 5 4

// -----------------------

const set = new Set([1, 2, 3, 4, 4]);
[...set]
// [1, 2, 3, 4]
```

::: warning 注意
`NaN` 在 Set 中是被认为相等的.

``` js
let a = NaN, b = NaN;
let set = new Set([a, b]);
set // Set {NaN}
```
:::

## Map
