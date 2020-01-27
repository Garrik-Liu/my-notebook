# Servlet

## 什么是 Servlet

- Servlet 是运行在服务器的 Java 小程序，是 sun 公司提供的一套规范（接口）
- 用来处理客户端请求，和发出响应；
- 当服务器收到请求，就会按照一定的规则调用代码，然后返回给客户端响应；

## Servlet 快速入门

### 创建 service

- 在项目目录中 `JavaResource/src` 下，创建一个包名称为 `com.xxxx.servlet`；
- 在包中创建一个 class 文件，名为 `FirstServlet.java`；
- 在该 class 中实现 Servlet 接口，也就是实现它没有完成的方法：
  - 主要是 `service` 方法，该方法用于处理请求和返回；

![2020-1-22-16-28-57.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-22-16-28-57.png)

- 在 `web.xml` 中进行 Servlet 配置：
  - `<servlet>` 里面定义 servlet 的名字，和类实现的位置；
  - `<servlet-mapping>` 里面做一个映射，对应的 api 访问对应的服务；

![2020-1-22-16-30-55.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-22-16-30-55.png)

- 在 `service` 方法中，通过 `HttpServiceResponse` 对象来进行响应：

![2020-1-22-16-31-20.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-22-16-31-20.png)

之后访问对应的 URL 就可以对 Servlet 发起请求，并获得响应了。

![2020-1-22-22-36-7.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-22-22-36-7.png)

### 生命周期

- **init**：
  - 默认，第一次接收到请求访问的时候创建对象，调用此方法；
  - 对象被创建完后，会被缓存。之后接收请求，就不调用此方法了；
  - 通过配置可以设置在服务器启动时创建对象，调用此方法：
    - 通过 `<load-on-startup>` 来让服务器启动时创建 servlet 对象；
    - 中间的数字，是创建的优先级；
    - ![2020-1-24-13-16-31.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-24-13-16-31.png)
- **service**：
  - 每次接收到请求的时候被调用；
- **destory**：
  - 当 servel 销毁前被调用；
  - 服务器关系，servlet 销毁；

### Servlet 配置信息

#### config 参数

- `init` 方法里的 ServletConfig 类型参数可以用来：
  - 获取 servlet 的配置信息；
  - 获取 web.xml 中的初始化参数；
  - 获取 servletContext 上下文对象；

在 xml 里定义初始化参数：

![2020-1-24-14-44-18.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-24-14-44-18.png)

![2020-1-24-14-42-0.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-24-14-42-0.png)

#### url-patten

web.xml 中 Servlet 对应的 url 匹配方式有三种：

- 完全匹配：
  - 必须 url 和定义的路径完全一样，才可以匹配；
  - `<url-pattern>/FirstServlet</url-pattern>`
  - 示例 URL：`http://localhost:8080/myWeb/FirstServlet`
- 目录匹配：
  - 只要 url 中包括了定义的路径，就可以匹配；
  - `<url-pattern>/FirstServlet/*</url-pattern>`
  - 示例 URL：`http://localhost:8080/myWeb/FirstServlet/123`
- 扩展名匹配：
  - 只有 url 最后以定义的后缀结尾，就可以匹配；
  - `<url-pattern>*.FirstServlet</url-pattern>`
  - 示例 URL：`http://localhost:8080/myWeb/123.FirstServlet`

#### 缺省 Servlet

- 访问的 Servlet 不存在时，就会找缺省的路径对应的 Servlet；
- `<url-patternn>/</url-patternn>`

#### 全局 web.xml

![2020-1-24-15-24-14.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-24-15-24-14.png)

- 应用所部署到的服务器也有一个 web.xml 文件；
- 它对于所有部署到服务器上的应用都有效；
- 之前没在应用里设置缺省 Servlet 的时候，就是应用的全局 web.xml 里的缺省 Servlet；
- 当在做路径匹配的时候，先去应用自己的 web.xml 查找，找不到再去全局的里面找；

#### 静态资源加载过程

- 在 `http://域名:端口/应用名/` 后面写的静态资源，在被请求时，依旧去找有没有匹配的 Servlet。服务器会拿 `<url-pattern>` 进行匹配；
- 如果有，则加载对应的 Servlet；
- 如果没有就去在应用目录下找缺省 Servlet；
- 如果应用自己没有缺省 Servlet，就去找全局的缺省 Servlet；
- 全局缺省 Servlet 对应是名为 default 的 Servlet；
- default Servlet 会到当前应用的 WebContent 目录中去找对应名称的静态资源；
- `http://域名:端口/应用名/` 后面什么都不写，则默认去找 WebContent 目录中的 index.html 文件；
- 如果找到了，就响应给服务器；
- 如果没有，就报 404；

::: details-open 例子：

在项目 WebContent 下创建一个 haha.html 文件；

然后访问这个文件，服务器就会返回它；

![2020-1-24-15-44-57.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-24-15-44-57.png)

![2020-1-24-15-44-29.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-24-15-44-29.png)
:::

## 反射机制

### 类的加载

- 当程序要使用某个类时，如果类还没有加载到内存中。系统会通过**加载，连接，初始化**三步来实现呢对类的初始化：

  - 加载：将 class 文件读入内存，并为之创建一个 Class 对象（字节码对象）；
  - 连接：
    - 验证：是否有正确的内部结构，并与其他类协调一致；
    - 准备：负责为类的静态成员分配内存，并设置默认初始化值；
  - 初始化：初始化成员变量；

- **加载时机**：（执行以下操作时，会进行类的加载）
  - 创建类的实例；
  - 访问类的静态变量，为静态变量赋值；
  - 调用类的静态方法；
  - 初始化某个类的子类；
  - 使用反射方式来强制创建某个类或者接口对应的 java.lang.Class 对象；

### 类加载器 Class Loader

- 负责将 .class 文件加载到内存中，并为之生成对应的 Class 对象（字节码对象）；
- 我们并不需要掌握加载机制，但通过了解类加载机制，可以更好的了解程序运行；
- 类加载器分类：
  - 根类加载器：负责 Java 核心类加载；
  - 扩展类加载器：负责 jar 包的加载；
  - 系统类加载器：负责 JVM 启动时，加载来自 java 命令的 class 文件；

### 什么是反射

- 创建对象的三个阶段：

  - 源文件阶段 “.java 文件”；
  - 编译成字节码阶段 “.class 文件”；
  - 创建对象阶段 “new 对象名称”；

- 内省：在运行时能够获取 JavaBean 当中的属性名称和 get 和 set 方法；
- **反射**

  - Java 反射机制是在运行状态中，对于任意的一个类，拿到字节码之后，都能访问这个类的所有属性和方法；
  - 通过字节码还能创建对象；
  - **这种动态获取信息以及动态调用对象的方法的功能被称为“反射机制”**；
  - 要想使用反射，必须获取字节码文件；

- 获取字节码文件：
  - Object 类的 `getClass()` 方法；
  - 静态属性 class；
  - Class 类中静态方法 `forName()`；
  - ![2020-1-22-23-19-31.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-22-23-19-31.png)

### “反射机制” 实践

#### 通过字节码创建对象

先创建一个类：

![2020-1-23-0-15-32.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-23-0-15-32.png)

然后用字节码去创建对象：

![2020-1-23-0-11-52.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-23-0-11-52.png)

#### 获取字段，设置字段

**获取公共字段**：

- `getField()` 方法返回一个 Field 对象，该对象反射类中指定的 public 字段；
- `set()` 方法来为指定的对象，设置对应字段的值；

![2020-1-23-0-17-5.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-23-0-17-5.png)

**获取私有字段**：

- `getDeclaredField()` 方法返回一个 Field 对象，该对象反射类中指定的已声明字段；
- `setAccessible()` 方法让私有字段变得允许访问；

![2020-1-23-0-28-2.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-23-0-28-2.png)

#### 获取方法，执行方法

![2020-1-23-0-38-7.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-23-0-38-7.png)

### Tomcat 反射加载 Servlet

## 使用注解创建 Servlet

- 之前创建 Servlet 时，每次都要去 `web.xml` 下添加 `<servlet>` 和 `<servlet-mapping>`；
- 从 Servlet 3.0 开始，可以直接使用 “注解” 的形式去使用 Servlet；
- 创建过程：
  - ![2020-1-26-0-40-4.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-0-40-4.png)
  - ![2020-1-26-0-40-54.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-0-40-54.png)
  - ![2020-1-26-0-41-53.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-0-41-53.png)
  - ![2020-1-26-0-42-29.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-0-42-29.png)
- 创建好的 Servlet 上会有一个 `@WebServlet("/myServlet")` ：
  - ![2020-1-26-0-54-20.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-0-54-20.png)
  - 这个就是一个注解；
  - 贴上注解之后，就不用去 web.xml 中手动配置了；
  - 注解中括号内的内容，就是 url-pattern 的内容；
- 注意，为了让注解生效。`web.xml` 当中的 `metadata-complete` 要设置为 `false`。它表示，是否扫描类当中定义的注解；
  - ![2020-1-26-0-58-7.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-0-58-7.png)

## HttpServlet

- 用上面 👆 方法，直接 new 的 Servlet 就是一个 HttpServlet；
- HttpServlet 专门用来负责处理 http 请求与响应；
- HttpServlet 是 GenericServlet 的子类；
  - `class HttpServlet extends GenericServlet`；
- GenericServlet 实现了 Servlet 接口；
  - `class GenericServlet implements Servlet`；
- HttpServlet 方法：
  - ![2020-1-26-1-14-15.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-1-14-15.png)
  - **service 方法**：无论接收 get 或 post 请求，都执行；
    - 一旦写了 service 方法，就并不会再执行 doGet 或 doPost 方法；
  - **doGet 方法**：接收到 get 方法时执行；
  - **doPost 方法**：接收到 post 方法时执行；
- HttpServlet 内部方法调用过程：
  - 当接收到一个请求，Tomcat 会先找对应的 Servlet 的 service 方法；
  - 如果 Servlet 没有 service 方法，就去它的父类 HttpServlet 中找；
    - ![2020-1-26-16-56-41.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-16-56-41.png)
  - 父类当中找到 service 是参数为 ServletRequest，它会在内部把参数转化为 HttpServletRequest；
  - 转换完毕后，会继续调用参数为 HttpServletRequest 的 service 方法；
    - ![2020-1-26-16-57-35.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-16-57-35.png)
    - 如果在自己实现的 HttpServlet 中，定义了 service 方法，那么就会覆盖上面这个方法。自己定义的 service 会被调用；
    - 自己没有定义 service 方法的话，就会根据请求方法（get，post，put，delete）来调用对应的方法；

## 案例：用户登录功能

- 需求： 用户输入用户名和密码，程序需要去数据库验证登录是否正确；
- 步骤：
  - 到数据库创建一个 “用户表”:
  - 编写 html 登录页面；
  - 创建 LoginServlet；
  -

![2020-1-26-17-4-6.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-17-4-6.png)

创建用户表：

- id；
- name；
- password；
- email；

![2020-1-26-17-11-7.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-17-11-7.png)

Java 项目中创建数据表的映射：

![2020-1-26-17-12-31.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-17-12-31.png)
