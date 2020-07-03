# Servlet & Filter & Listener

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

![2020-1-26-17-4-6.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-17-4-6.png)

创建用户表：

- id；
- name；
- password；
- email；

![2020-1-26-17-11-7.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-17-11-7.png)

Java 项目中创建数据表的映射：

![2020-1-26-17-12-31.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-17-12-31.png)

创建 HTML 页面：

![2020-1-26-17-42-27.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-17-42-27.png)

创建 LoginServlet：

- 先创建一个 com.myWeb.login 包；
- 然后创建 Servlet；
- 里面只用 `service` 方法就可以了；

![2020-2-1-21-23-51.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-1-21-23-51.png)

![2020-2-1-21-27-41.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-1-21-27-41.png)

把 Servlet 对应的地址填写到 form 表单中：

![2020-2-1-22-36-0.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-1-22-36-0.png)

在编写 LoginServlet 的业务逻辑之前，先引入 JDBC 相关 jar 包：

- dbutils；
- druid；
- mysql-connector-java；

![2020-2-1-22-33-41.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-1-22-33-41.png)

把之前用过的 JdbcUtil 文件，还有数据库配置文件引入项目。用以连接数据库：

- 注意，因为 resources 目录下的 db.properties 文件，在运行时已经被编译成字节码；
- 所以我们不能按照硬盘中的路径去获取配置文件；
- 需要通过这个方法：`JDBCUtil.class.getClassLoader().getResource("db.properties").getPath()`

![2020-2-1-22-12-53.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-1-22-12-53.png)

::: details JDBCUtils 代码：

```java
package com.myWeb.utils;

import java.io.FileInputStream;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;

import javax.sql.DataSource;

import com.alibaba.druid.pool.DruidDataSourceFactory;

public class JDBCUtil {
  public static DataSource ds = null;
  static {
    try {
      // 读取配置文件
      Properties p = new Properties();
      // 获取配置文件字节码路径
      String db_properties_path = JDBCUtil.class.getClassLoader().getResource("db.properties").getPath();
      FileInputStream in = new FileInputStream(db_properties_path);
      p.load(in);
      // 创建数据源（连接池）
      // 通过配置文件创建数据源
      ds = DruidDataSourceFactory.createDataSource(p);
    } catch (Exception e) {
      e.printStackTrace();
    }
  }

  // 获取数据源
  public static DataSource getDataSource() {
    return ds;
  }

  // 获取连接对象
  public static Connection getConn() {
    try {
      return ds.getConnection();
    } catch (SQLException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }
    return null;
  }

  public static void close(Connection conn, Statement st, ResultSet rs) {
    // 释放资源
    if (rs != null) {
      try {
        rs.close();
      } catch (SQLException e) {
        e.printStackTrace();
      }
    }
    if (st != null) {
      try {
        st.close();
      } catch (SQLException e) {
        e.printStackTrace();
      }
    }
    if (conn != null) {
      try {
        conn.close();
      } catch (SQLException e) {
        e.printStackTrace();
      }
    }
  }
}
```

:::

接下来，编写 LoginServlet 的业务逻辑：

- 获取请求参数；
  - 使用 `request` 对象的 `getParamter` 方法；
- 使用 dbutils 连接到数据库；
- 检查用户名和密码是否正确；
  - 登陆成功，显示用户所有信息；
  - 登录失败，给出错误信息；

```java
@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
  protected void service(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {

    // 获取请求参数
    String name = request.getParameter("name");
    String password = request.getParameter("password");
    // 使用 dbutils 连接到数据库
    QueryRunner qr = new QueryRunner(JDBCUtil.getDataSource());
    // 去数据库进行查询
    String sql = "SELECT * FROM user WHERE name = ? AND password = ?";
    User user = null;
    try {
      user = qr.query(sql, new BeanHandler<User>(User.class), name, password);
    } catch (SQLException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }
    // 检查用户名和密码是否正确
    if (user != null) {
      response.getWriter().write("Login Success\n" + user.getEmail());
    } else {
      response.getWriter().write("Login Fail");
    }
  }
}

```

## ServletContext

#### 什么是 ServletContext

- ServletContext 代表一个 web 应用的上下文对象；
- 里面封装的都是 web 应用相关信息；
- 一个 ServletContext 对应一个应用；
- 在服务器一启动的时候就会创建；
- 在服务器关闭的时候销毁；

#### 获取上下文

- 通过 `init` 方法当中的一个参数 `ServletConfig` 来获取；

![2020-2-2-14-39-11.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-2-14-39-11.png)

#### 获取 Web 应用中某一个资源的绝对路径

- 通过 `context.getRealPath("文件名")` 方法去获取路径;
- 它会将 Web 应用的根目录的绝对路径，和上面的文件名进行拼接；

![2020-2-2-14-43-1.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-2-14-43-1.png)

- 因为写在 `src` 目录下的文件会被编译成字节码，所以文件的路径也会改变；
- 需要使用类加载器，获取字节码文件目录的路径；
- 然后去字节码文件目录中获取资源的路径；

* 下面 👇 项目中，在 `src` 目录下，和 `com.myWeb.login` 包下分别放了一个 `abc.html` 文件；
* 代码中，各自展示了两个文件的路径的获取方法；

![2020-2-2-16-40-12.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-2-16-40-12.png)

#### ServletContext 是一个域对象

- 什么是域对象：能够存取数据的对象；
- ServletContext 域对象的作用范围：
  - 整个 Web 应用；
  - 所有的 Servlet 都可以用它存取数据；
  - 数据是可以共享的；
- 写数据：`setAttribute(String name, Object value)`；
- 取数据：`getAttribute(String name)`；
- 删数据：`removeAttribute(String name)`；

```java
public void init(ServletConfig config) throws ServletException {
  ServletContext context = config.getServletContext();

  context.setAttribute("name", "Garrik");
  String name = (String) context.getAttribute("name");
}
```

## Response 对象 & Request 对象

![2020-2-2-17-8-55.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-2-17-8-55.png)

- 浏览器发送一个请求到 Tomcat 引擎；
- 引擎找到对应的 Web 应用，并创建 request 对象和 response 对象；
- 找到应用后，根据应用的 Web.xml 的 url-pattern 的内容创建 Servlet 对象；
- 之后调用 Servlet 对象的 service 方法，并且把 request 对象和 response 对象传入到方法中；
- 拿到 response 对象后，根据业务逻辑的需求，可以向其中写一些内容；
- 写完后，响应被存放到一个 response 缓冲区中；
- 当方法执行完之后，缓冲区中的数据就会被 Tomcat 取出；
- 然后 Tomcat 再向其中添加一些服务器相关信息；
- 之后把所有东西作为响应，返回给浏览器；

### Response 对象

#### 设置响应

![2020-2-2-17-22-45.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-2-17-22-45.png)

**设置响应行**：

`response.setState(int code)`

**设置响应头**：

- 添加响应头：
  - 字符串类型：`addHeader(String name, String value)`
  - 数值类型：`addIntHeader(String name, Int value)`
  - 日期类型：`addDateHeader(String name, Date value)`
- 修改响应头：
  - 字符串类型：`setHeader(String name, String value)`
  - 数值类型：`setIntHeader(String name, Int value)`
  - 日期类型：`setDateHeader(String name, Date value)`

![2020-2-2-17-26-49.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-2-17-26-49.png)

**设置响应体**：

- 设置编码格式：
  - 默认编码格式：
  - 通过 `setCharacterEncoding("UTF-8")` 方法，来设置编码格式为 “UTF-8”；
  - 通过 `setHeader("Content-Type", "text/html;charset=UTF-8")` 来告诉浏览器用 UTF-8 编码解析响应；
  - 上面 👆 两个操作可以简写为：`setContentType("text/html;charset=UTF-8")`
- 通过 `write` 方法来写：
  - `response.getWrite().write("要写的内容")`；
    ![2020-2-2-18-25-31.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-2-18-25-31.png)
- 通过 `OutPutStream` 方法来写：
  - 通过二进制流的形式来输入，输出文件；
  - FileInputStream：
    - `read` 方法读取一个字节；
    - `read(byte[] b)` 一次读取多个字节，并存到数组 b 中；
    - `close` 方法停止读取；
    - 读取全部数据代码：
    - ![2020-2-2-18-36-51.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-2-18-36-51.png)
  - FileOutputStream：
    - 通过 Response 对象的 `getOutputStream()` 方法获取输出流；
    - 通过输出流的 `write` 方法来把内容写到缓冲区；
- 注意，`getWrite()` 和 `getOutputStream()` 不能同时使用；

#### 响应图片

用 OutPutStream 方法来响应一个图片给浏览器。

- 获取资源路径；
- 创建输入流，读取资源；
- 通过输出流，把资源写到响应缓冲区；

![2020-2-2-19-51-10.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-2-19-51-10.png)

#### 文件下载

需求：把服务器当中的文件下载到电脑中；

- 通过 `<a>` 标签来发送一个 Servlet 请求，把文件名发给服务器；
- 设置 `Content-Type` 为文件对应的 MIME 类型：
  - `response.setContentType("MIME 类型")`
- 设置 `Content-Disposition` 响应头，告诉浏览器以附件的形式去下载文件，而不是自动解析：
  - `response.setHeader("Content-Disposition", "attachment;filename=文件名")`
- 通过二进制流的形式，读取文件，然后再写入到缓存区；
- 之后响应给浏览器；

![2020-2-2-20-16-31.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-2-20-16-31.png)

![2020-2-2-20-15-53.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-2-20-15-53.png)

#### 重定向

- 什么是重定向：
  - 去服务器中找 Servlet_1；
  - Servlet_1 让我去找 Servlet_2；
  - 于是我再发一个请求到 Servlet_2；
- 状态码：302；
- 特点：
  - 要访问两次服务器；
  - 浏览器地址栏发生变化；
- 设置重定向：
  - 设置状态码：302
  - 设置响应头：`location: 新地址`
    ![2020-2-2-17-31-38.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-2-17-31-38.png)
- 封装好的重定向方法：
  - 通过 `sendRedirect` 方法可以直接设置重定向；
  - 上面 👆 的代码可以写成：
  - `response.sendRedirect("/bei/servlet2")`
- 定时刷新重定向：
  - 通过响应头 `refresh: 时间;url=新地址` 可以设置多少秒之后，重定向到新地址；
  - 例如: `response.setHeader("refresh", "3;url=http://www.baidu.com")`

### Request 对象

#### 设置请求

![2020-2-2-20-30-25.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-2-20-30-25.png)

**获取请求行**：

- 获取请求方法：`String getMethod()`：
  - ![2020-2-2-20-37-51.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-2-20-37-51.png)
- 获取请求资源：
  - `String getRequestURL()`：
  - `String getRequestURI()`：
  - ![2020-2-2-20-36-20.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-2-20-36-20.png)
- 获取应用名称：`String getContextPath()`：
  - ![2020-2-2-20-36-34.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-2-20-36-34.png)
- 获取 GET 请求查询参数：`String getQueryString()`：
  - ![2020-2-2-20-36-50.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-2-20-36-50.png)

**获取请求头**：

- 获取所有的请求头名称：
  - 获取所有 “请求头名称” 组成的迭代器：
  - `Enumeration<String> headerNames = request.getHeaderNames()`
  - 通过 `headerNames.hasMoreElements()` 判断是否指针后面还有元素；
  - 通过 `headerNames.nextElement()` 将指针移到后一个元素上；
- 获取指定的请求头内容： - `request.getHeader("请求头名称")`

![2020-2-2-20-47-55.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-2-20-47-55.png)

**获取请求体**：

- 获取一个值：`request.getParameter("参数名称")`
- 获取多个值：`request.getParameterValues("参数名称")`
- 获取所有请求参数名称：
  - `Enumeration<String> parameterNames = request.getParameterNames()`
- 获取所有请求参数：
  - `Map<String, String[]> parameterMap = request.getParameterMap()`

![2020-2-2-21-7-34.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-2-21-7-34.png)

![2020-2-2-21-6-48.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-2-21-6-48.png)

**中文请求乱码**：

- 可以通过 `request.setCharacterEncoding("UTF-8")` 来设置请求体的编码格式；
- 但是这个方法只适用于 POST 请求；

#### 请求转发

**重定向和请求转发的区别**：

- 重定向：
  - 找到 Servlet_1，通过设置响应，告诉浏览器再次发请求到 Servlet_2；
  - 总共发送两次请求；
  - 地址栏会发生变化；
- 请求转发：
  - 找到 Servlet_1，之后在 Servlet_1 当中直接转发给 Servlet_2；
  - 只需要发送一次请求；
  - 浏览器地址栏不会发生变化；

**实现转发**：

- 通过请求对象获取一个转发器：
  - `RequestDispatcher disp = request.getRequestDispatcher("/Servlet_2")`
- 通过转发器进行转发：
  - `disp.forward(request, response)`

**Request 域对象**：

- 在一次请求过程当中，request 是共享的；
- 在一个 Servlet 当中设置的参数，转发给另外一个 Servlet 也可以获取到；

下图 👇 中，Servlet_1 中设置的参数，在 Servlet_2 中也可以获取：

![2020-2-2-21-28-9.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-2-21-28-9.png)

![2020-2-2-21-28-24.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-2-21-28-24.png)

## Filter 过滤器

#### 过滤器介绍

- filter 是对客户端访问资源的过滤，符合条件放行，不符合条件不放行；
- 并且可以对目标资源，访问前后进行逻辑处理；
- 过滤器的访问流程：
  - 在发送一个请求时， web 容器会先到 filter 当中，创建三个参数，res，req，chain；
  - 请求在过滤器当中，被放行之后，才能够访问到对应的资源；
  - 中间的过滤器可能有多个，在一个过滤器当中，可以调用另外一个过滤器；

![2020-2-7-23-20-35.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-7-23-20-35.png)

#### 过滤器编写步骤

- 编写一个过滤器类去实现 Filter 接口；
  - ![2020-2-7-23-23-13.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-7-23-23-13.png)
- 在 web.xml 中进行配置：
  - 配置 filter-class，给声明过滤器；
  - 配置 filter-mapping，指明对哪些资源进行过滤；
  - ![2020-2-7-23-24-51.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-7-23-24-51.png)

#### 过滤器方法

- init 方法：
  - 当 filter 对象创建时调用；
    - 服务器启动时创建 filter 对象；
  - 参数：filterconfig
    - 当前 filter 对象的配置信息；
- dofitter 方法：
  - 当匹配到 mapping 时调用 dofilter；
  - 参数：res，req，FilterChain：
    - FilterChain：
      - 过滤器链对象；
      - 内部维护着各个 filter 的索引，并且知道所有 filter 的顺序；
      - 是根据 mapping 的顺序来执行的；
- destroy 方法：
  - 当 filter 对象销毁时调用；
  - 关闭服务器时销毁对象；

## Listner 监听器

#### 代理设计模式

- 什么是代理模式：当某一个对象发生某一个事件时，通知另一个对象，让另一个对象做某事
- 代理设计模式步骤：
  - 定义协议；
  - 遵守协议；
  - 成为代理；
  - 调用代理方法；
- 监听器的内部使用的就是代理模式；

#### 监听器

- 什么是监听器：

  - 能监听某个对象的状态变化的组件；
  - 在 Java Web，中用来监听 “域对象“ 的变化；
    - request 域;
    - session 域;
    - servletContext 域;

- 监听器相关的概念：

  - 事件源：被监听的对象；
  - 监听器：监听事件源的对象；
  - 注册监听器：监听器与事件源相绑定；
  - 响应行为：监听到事件源变化时，去做什么事情；

- 监听器划分：
  - 三个监听域对象的创建与销毁：
    - ServletContextListener
    - HttpSessionListener
    - ServletRequestListener
  - 三个监听域对象当中属性变化：
    - ServletContextAttributeListener
    - HttpSessionAttributeListener
    - ServletRequestAttributeListener

#### 监听器编写步骤

- 编写一个监听器类去实现监听器接口：
  - ![2020-2-7-23-17-4.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-7-23-17-4.png)
- web.xml 中进行配置：
  - ![2020-2-7-23-17-18.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-7-23-17-18.png)
