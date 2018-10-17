# BEM 

BEM - Block Element Modifier, 是一种 CSS 的 Class 命名规范

## Block, Element, Modifier

『 **Block** 』指的是一个有独立意义的实体.  "Block" 之间可以互相嵌套

『 **Element** 』指的是一个 "Block" 中的一个组成部分, 没有独立存在的意义, 和所属的 "Block" 紧密相连.  命名为其所属的 "Block" 的 Class 名 后面加两个下划线 `__` 然后加 "Element" 的名字. 例如: `.block__elem`

『 **Modifier** 』用以指示一个 "Block" 或 "Element" 的不同状态, 以此来改变对应元素的样式.  命名为在 "Block" 或 "Element" 后加两个破折号 `--` 然后加 "Modifier" 的名字. 例如: `.block--color-red`

下面例子展示了一个 BEM 在按钮组中的应用:

![github_buttons](https://i.imgur.com/BEQWUkP.jpg)

HTML 代码:

``` html
<button class="button">
	Normal button
</button>
<button class="button button--state-success">
	Success button
</button>
<button class="button button--state-danger">
	Danger button
</button>
```

CSS 代码:

``` css
.button {
	display: inline-block;
	border-radius: 3px;
	padding: 7px 12px;
	border: 1px solid #D5D5D5;
	background-image: linear-gradient(#EEE, #DDD);
	font: 700 13px/18px Helvetica, arial;
}
.button--state-success {
	color: #FFF;
	background: #569E3D linear-gradient(#79D858, #569E3D) repeat-x;
	border-color: #4A993E;
}
.button--state-danger {
	color: #900;
}
```

## 注意事项

要知道不是一个东西位于一个 "Block" 的内部, 就代表它是属于这个块的 "Element".

在使用 BEM 的时候, 你要知道什么时候哪些东西是应该写成 BEM 格式的, 那些是不应该的.

比如下面你这个例子:

``` html
<div class="content">
  <h1 class="content__headline">Lorem ipsum dolor...</h1>
</div>
```

在这个例子里，我们也许仅仅只需要另一个 class，可以叫它 `.headline`；它的样式取决于它是如何被层叠的，因为它在 `.content` 的内部；或者它只是恰巧在 `.content` 的内部。如果它是后者（即恰巧在 `.content` 的内部，而不总是在）我们就不需要使用 BEM。