# Servlet

## 什么是 Servlet

- Servlet 是运行在服务器的 Java 小程序，是 sun 公司提供的一套规范（接口）
- 用来处理客户端请求，和发出响应；
- 当服务器收到请求，就会按照一定的规则调用代码，然后返回给客户端响应；

## Servlet 快速入门

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

## 反射

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
- **反射**：

  - Java 反射机制是在运行状态中，对于任意的一个类，都能知道这个类的所有属性和方法；
  - 对于任意一个对象，都能够调用它的任意一个方法和属性；
  - **这种动态获取的信息以及动态调用对象的方法的功能被称为“反射机制”**；
  - 要想使用反射，必须获取字节码文件；

- 获取字节码文件：

  - Object 类的 `getClass()` 方法；
  - 静态属性 class；
  - Class 类中静态方法 `forName()`；
  - ![2020-1-22-23-19-31.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-22-23-19-31.png)
