# JSP

## JSP 介绍

**什么是 JSP**：

- JSP（Java Server Pages）- Java 服务器页面；
- 它在 HTML 文件中插入 Java 程序段和 JSP 标记；
- 后缀名为 `.jsp`；
- 可以视为一个简化的 Servlet 设计；

**为什么要有 JSP**：

- 直接使用 HTML 文件没有办法输出 Java 当中的信息；
- 使用 Servlet 来输出一个页面非常的麻烦；
- 通过 JSP，既可以写 HTML，也可以写 Java 代码；

**JSP 的工作原理**：

- JSP 的本质就是 Servlet；
- 浏览器向服务器请求一个 JSP 文件；
- 服务器收到后，会调用 JspServlet 来把 JSP 文件翻译成对应的 Servlet；
- 之后调用 Servlet，对浏览器进行响应；
- 翻译好的文件，会被放到 Tomcat 服务器下的 `work` 目录；

![2020-2-4-19-20-5.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-4-19-20-5.png)

**JSP 的组成部分**：

- 静态数据（写死的内容）；
- JSP 脚本元素 & 变量；
- JSP 指令；
- JSP 标签动作；
- 用户自定义标签；

## JSP 脚本元素 & 变量

**在 JSP 当中写 Java 代码**：

- `<% java 代码 %>`：里面的 Java 代码会被翻译到 `service` 方法内部；
- `<%= java 变量或表达式 %>`：会被翻译到 `service` 方法内部，并且用 `out.print()` 方法打印到页面中；
- `<%! java 代码 %>`：会被翻译成 Servlet 的成员内容；

![2020-2-4-19-34-20.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-4-19-34-20.png)

![2020-2-4-19-34-28.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-4-19-34-28.png)

**注释**：

- HTML 注释：`<!-- 注释内容 -->`
  - 可见范围：
    - JSP 源码；
    - 翻译后的 Servlet；
    - 响应给浏览器的 HTML 页面；
- Java 注释：`// 单行注释` `/* 多行注释 */`
  - 可见范围：
    - JSP 源码；
    - 翻译后的 Servlet；
- JSP 注释：`<%--注释内容--%>`
  - 可见范围：
    - JSP 源码；

## JSP 指令

**指令做什么用**：

- 设置整个 JSP 页面的相关信息；
- 和其他 JSP 容器之间通信；
- 指令写在 `<%@ %>` 标签之中；

**page 指令**：

- 用于设置整个 JSP 页面的属性和相关功能；
- page 指令共有 11 个属性；
  - contentType：指定响应回的 HTML 页面的 MIME 和编码格式；
  - pageEncoding：指定 JSP 文件的编码格式 （ISO-8859, UTF-8）；
  - import：在 JSP 中引入 Java 的包和类，多个包之间用逗号隔开；
  - session：指定当前页面是否能获得当前用户的 session 对象；
  - errorPage：如果页面发生异常，会重定向到 errorPage 所指向的页面；
  - isErrorPage：允许指定的 JSP 页面为错误处理页面；
  - language：指定页面中使用的编程语言类型，目前只支持 Java；
  - extends：指定 JSP 生成的 Servlet 继承哪个类；
  - buffer：设置输出流缓冲区；
  - autoFlush：当输出流缓冲区满了的时候，是否自动刷新缓冲区；
  - isThreadSafe：指定该 JSP 文件是否支持多线程访问；
  - info：设置该 JSP 文件的介绍信息；
  - isElIgnored：标识是否支持 EL 表达式；
- 多个属性之间使用空格隔开；

![2020-2-4-19-44-54.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-4-19-44-54.png)

**include 指令**：

- 在 JSP 编译时插入一个包含文件，或者代码片段；
- include 指令所包含的文件名不能是一个变量，只能是静态的文件名；
- `<%@ include file="/header.jsp"%>`
- 静态包含：通过 `<%@ include file="" %>` 标签引入；
- 动态包含：通过 `<jsp:include page=""></jsp:include>` 标签引入；

![2020-2-4-20-10-7.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-4-20-10-7.png)

**taglib 指令**：

- 声明 JSP 文件使用了哪些标签库；
- 有哪些标签库：
  - JSP 标准标签库；
  - 第三方标签库；
  - 自定义标签库；

## JSP 标签动作

- 动态包含：通过 `<jsp:include page=""></jsp:include>` 标签引入其他 JSP 文件；
- 请求转发：`<jsp:forward page=""></jsp:forward>` 标签将请求转发给其他 JSP，但是浏览器地址栏 URL 不变；

## 隐式对象

- JSP 被翻译成 Servlet 之后， service 方法中已经定义好了 9 个对象，并且初始化完毕，可以直接使用；
- out：写东西到 out 缓冲区，然后响应给客户端；
- request：客户端发来的请求对象；
- response：服务器向客户端的响应对象；
- config：服务器配置对象；
- session：session 会话信息；
- application：所有用户的共享信息，也就是 ServletContext；
- page：翻译成的 Servlet 的实例对象；
- pageContext：
  - 是一个域对象；
  - 可以像其他域中存取数据：
  - ![2020-2-4-20-38-49.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-4-20-38-49.png)
- exception：表示 JSP 页面所发生的的异常，在错误页面才起作用；

![2020-2-4-20-29-13.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-4-20-29-13.png)

**关于 out 对象的注意点**：

- out 写东西到 out 缓冲区；
- response 写东西到 response 缓冲区；
- 最后响应时，out 缓冲区会拼接到 response 缓冲区后面；

![2020-2-4-20-36-15.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-4-20-36-15.png)

## EL 表达式

- EL（Express Lanuage）表达式可以嵌入在 jsp 页面内部；
- 可以减少 jsp 脚本的编写量；
- 语法：`${EL表达式}`；
- 通过 EL 表达式可以获得四大域中的数据：
  - pageContext：`${pageScope.key}`；
  - request：`${requestScope.key}`；
  - session：`${sessionScope.key}`；
  - application：`${applicationScope.key}`；
- EL 有内置对象 pageContext：
  - pageContext 可以获得其他八大对象；
  - 通过 `${pageContext.request.contextPath}` 可以获得当前项目的名称；
  - 这样发送 form 表达，写 action 的路径时，就不用把项目名写死了；
- EL 执行表达式：
  - 可以在内部进行运算，然后返回结果；
  - 🌰 例如：`${1+1}`
  - `${empty xxxx}`：
    - 判断后面的 xxxx 是否为空，不为空就返回 true，否则返回 false；
    - 等价于 `${xxxx == null ? true : false}`

## JSLT

- JSTL（JSP Standard Tag Library)，JSP 标准标签库
- 可以嵌入在 jsp 页面中使用标签的形式完成业务逻辑等功能
- JSTL 出现的目的同 EL 一样也是要代替 JSP 页面中的脚本代码
- JSTL 标准标签库有 5 个子库
  - Core :核心库
    - http://java.sun.com/jsp/jstl/core
    - 前缀：c
  - I18N：国际化库
    - http://java.sun.com/jsp/jstl/fmt
    - 前缀：fmt
  - SQL
    - http://java.sun.com/jsp/jstl/sql
    - 前缀：sql
  - XML
    - http://java.sun.com/jsp/jstl/xml
    - 前缀：x
  - Functions
    - http://java.sun.com/jsp/jstl/functions
    - 前缀：fn
- 把 JSTL 标签库 jar 包引入工程当中：
  - `<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>`

**if 标签**：

```jsp
<c:if test="${ 判断表达式 }">
  满足条件时，中间的内容才会显示出来
</c:if>
```

一般结合 EL 表达式一起使用，用 EL 从域中取数据，使用 JSTL 进行判断或者遍历：

```jsp
<%
  request.setAttribute("money", 3);
  <c:if test="${money > 50}">
    余额大于 50
  </c:if>
  <c:if test="${money < 50}">
    余额小于 50
  </c:if>
%>
```

**foreach 标签**：

- 普通循环：
  ![2020-2-5-0-17-10.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-5-0-17-10.png)
- 遍历字符串集合：
  ![2020-2-5-0-17-1.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-5-0-17-1.png)
- 遍历对象集合：
  ![2020-2-5-0-17-39.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-5-0-17-39.png)
