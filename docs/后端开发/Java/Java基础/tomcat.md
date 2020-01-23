# Tomcat 服务器

## Web 服务器

- 所有的 Web 资源放到在 Web 服务器中；
- Web 服务器是可以供外界访问 Web 资源的一个软件；
- 请求 & 响应：
  - 请求：客户端向服务器请求数据；
  - 响应：服务器把对应的数据返回给客户端；
  - 客户端和服务器之间通过 HTTP 协议来约定请求和响应的格式；

## Java 服务器

- **Java 分类**：
  - Java SE：Java 的标准版，一般用来开发桌面应用程序，但是没什么优势；
  - Java EE：Java 的企业版，开发 Web 应用程序；
    - 初级用 JSP + Servlet + Javabean 来开发；
    - 大型网站用框架来开发 Spring
  - Java ME：Java 的微型版，曾用于开发诺基亚手机上的 Java 程序；
- **Java EE 规范**：
  - Java EE 有 13 个技术规范（JDBC, JSP, Servlet, XML, EJB, RMI, JMS, ......）
  - sun 公司定义了这些标准，其他公司根据这些标准来做 Java EE 程序；
- **常见 JavaWeb 服务器**：
  - WebLogic：Oracle 公司的收费服务器，支持 JavaEE 的全部规范；
  - WebSphere：IBM 公司的收费服务器，支持 JavaEE 的全部规范；
  - Tomcat：Apache 的开源免费的中小型 Web 服务器，支持 JavaEE 的部分规范（Servlet, JSP）；

### Tomcat 目录：

- bin：脚本程序
- conf：配置目录
  - 其中的 server.xml 是核心配置文件
- lib：依赖库
- logs：日志信息
- temps：临时文件
- webapps：Web 应用发布目录
  - 把开发的项目放到该目录中运行
- work：tomcat 处理 jsp 的工作目录

### 启动 Tomcat：

- 进入 bin 目录；
- 运行 startup.sh 脚本启动；
- 运行 shutdown.sh 脚本关闭；
- 相关配置，例如端口，可以在 conf/server.xml 里面去改；

### 手动创建 Web 应用：

- 在 webapps 目录下创建一个目录（例：myApp）
- myApp 目录结构：
  - html, jsp, js 文件；
  - WEB-INP 目录：
    - classes 目录：存放 Java 类字节码文件；
    - lib 目录：Java 程序需要的 jar 包；
    - web.xml 文件：Web 应用的核心配置文件；
- WEB-INP 目录下的文件都是受保护的，不能被外界直接访问；

![2020-1-22-14-40-11.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-22-14-40-11.png)

### 使用 Eclipse 创建 Web 应用：

- New -> Projects -> Web / Dynamic Web Project；
- 写工程名，选 Tomcat 服务器，选 Tomcat 存放地址；
- 部署版本选 2.5；
  - v2.5 版本会自动生成 `web.xml` 文件；
- 完成；

![2020-1-22-14-47-49.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-22-14-47-49.png)

### 项目部署

#### 创建服务器

在 Server 下，创建新的服务器：

![2020-1-22-15-8-11.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-22-15-8-11.png)

点击 next，把项目添加进去：

![2020-1-22-15-8-31.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-22-15-8-31.png)

#### 发布工程

- 将未发布的工程，发布到 webapps 下面；
- 这部操作，会在 Tomcat 的 webapps 目录下创建一个名称为 <项目名> 的目录；
- 会把 WebContent 当中的所有内容放入到 webapps 目录下的 <项目名> 目录中；
- 不会把你写的 java 源代码放到 webapps 当中，运行只需要字节码；

双击 Server，设置项目部署位置；

![2020-1-22-15-54-21.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-22-15-54-21.png)

右键 Server，点击 Start 启动 Tomcat 服务器;

- 如果端口被占了：
  - lsof -i tcp:xxxx
  - kill -9 PID

![2020-1-22-15-9-56.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-22-15-9-56.png)

之后就可以在本地的 Tomcat 服务器中的 webapps 目录下看到项目目录了。

![2020-1-22-15-55-12.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-22-15-55-12.png)

在浏览器上可以访问项目了。

![2020-1-22-15-41-21.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-22-15-41-21.png)

### Tomcat 服务器体系结构

- **Server**：整个 Servlet 容器组合，可以包含多个 Service 服务；
- **Service**：由一个或多个 Connector，以及一个 Engine 组成，负责处理所有 Connector 所获得的客户请求；
- **Connector**：负责接收请求，以及向客户端返回响应；
- **Engine**：处理连接器接收到的请求，将请求流转到对应的 Host 虚拟主机；
- **Host**：虚拟主机，下面包含多个 Context，将请求交给对应的 Context；
- **Context**：一个 Context 对应一个 Web Application 应用；

![2020-1-22-16-14-18.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-22-16-14-18.png)

Tomcat 服务器下的 `conf` 目录下的 `server.xml` 文件结构就反映出了整个 Tomcat 服务器体系结构。

下图是，本地浏览器访问 Tomcat 服务器时的请求流转。

![2020-1-22-16-16-39.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-22-16-16-39.png)

Host 虚拟主机：

- 输入网址时，会先去 host 文件中查找有没有对应的 ip 地址，如果有就直接访问；
- 如果没有，就会去外网找 DNS 服务器进行域名解析，找到对应的 IP 地址，进行访问；
- 多个域名可以访问同一个 IP；
- 一个 IP 对应一台电脑；
- 通过虚拟主机名不同，可以让用户通过对不同的域名的访问，去使用不同的 Web 应用；
