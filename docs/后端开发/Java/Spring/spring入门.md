# Spring 入门

## Spring 干什么用的

==test==

++test++

123

- Spring 是一个分层的，用于开发 Java EE 应用的**一站式轻量级开源框架**；
- 以 **Ioc 控制反转** (Inverse of Control) 和 **AOP 切面编程** (Aspect Oriented Programming) 为内核；
- 提供了**展示层 Spring MVC**，**持久层 Spring JDBC** 以及**业务层事务管理**，等企业级应用技术；
- Spring 还整合了众多**开源第三方框架和类库**，使之成为了使用最多的轻量级 Java EE 企业应用开源框架；

## Hello Spring

下面 👇 通过一个最简单的 Hello Spring 小项目，来展示一下 Spring 项目的运作流程；

#### 创建项目

- 在 IDEA 里用 Maven 创建我们的项目。这里就不做展示了；
- 打开 `pom.xml` 文件，添加我们所需的依赖；
- 这个项目中我们需要：
  - **spring-core**：核心工具类，其他模块大量使用它；
  - **spring-context**：Spring 容器；

![2020-3-8-18-18-40.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-8-18-18-40.png)

```xml
<properties>
    <spring.version>5.1.1.RELEASE</spring.version>
</properties>

<dependencies>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-core</artifactId>
        <version>${spring.version}</version>
    </dependency>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-context</artifactId>
        <version>${spring.version}</version>
    </dependency>
</dependencies>
```

#### 创建 Spring Bean 配置文件

- 在 `/resources` 目录下创建一个 XML 配置文件 `SpringConfig.xml`（名字无所谓）；
- 里面写入以下内容：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
    <!-- 定义一个 Bean -->
    <bean id="helloSpring" class="com.garrik.hello.HelloSpring">
        <property name="name" value="Spring"/>
    </bean>
</beans>
```

- 配置文件中写的内容被称作 『 配置元数据 』。元数据是描述数据的数据；
- 这些配置元数据，配置了一堆 Java 对象；
- 可以想象，为了让这些元数据有用，我们需要用一个东西来解析元数据；
- 在 Spring 中，通过 Spring IoC 容器来解析配置元数据，然后实例化，配置，管理 Java 对象；
- 这些被 Spring 容器管理的 Java 对象，被称作 Bean 对象；
- 上面 👆 代码中，通过 `<bean>` 标签定义了一个 Bean 实例：
  - class 属性，指定了对应的 Bean 类；
  - id 属性，指定了实例的唯一名称；
  - property 标签，用于对 Bean 实例中的属性进行复制；

#### 创建 HelloSpring 类

- 在编写 `SpringConfig.xml` 配置文件时，我们定义了一个 Bean 实例。它会对应到一个 Bean 类；
- 在 `/src/main/java` 目录下创建 `com.garrik.hello` 包，然后创建 `HelloSpring.java` 文件；

```java
package com.garrik.hello;

public class HelloSpring {
  private String name;

  public void setName(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }

  public void sayHello() {
    System.out.println("Hello " + getName());
  }
}
```

#### 创建 MainApp.java

- 前面提到，Bean 对象是由 Spring IoC 容器来进行实例化，配置，管理的；
- 那么我们需要创建 Spring 容器，并且调用由它实例化的 Bean 对象来使用功能；
- 在 `com.garrik.hello` 包下创建 `MainApp.java` 文件；

```java
package com.garrik.hello;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
  private static ApplicationContext context;

  public static void main(String[] args) {
    context = new ClassPathXmlApplicationContext("SpringConfig.xml");

    HelloSpring helloSpring = (HelloSpring) context.getBean("helloSpring");
    helloSpring.sayHello();
  }
}
```

- `ClassPathXmlApplicationContext()` 方法用来创建 Spring 容器。它会加载 Bean 配置文件，然后创建，初始化所有的 Bean 对象；
- 通过刚刚创建的 Spring 容器的 `getBean()` 方法，传入 ID 来获取我们想要的 Bean 对象；
- 然后调用 Bean 对象的方法，来实现我们想要的功能；

#### 运行程序

- 运行 MainApp 这个类，就可以看到 “Hello Spring” 这个输出了；

![2020-3-8-19-28-40.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-8-19-28-40.png)

## Spring 基础概念

#### 轻量级

- 轻量级一般就是非入侵性的、所依赖的东西非常少、资源占用非常少、部署简单等等；
- 简单来说，就是比较容易使用；

#### EJB

- EJB 是的 Enterprise Java Beans 技术的简称, 又被称为企业 Java Beans；
- 属于 Jave EE 的规范之一；
- 简单来讲，商业软件中会有很多的业务逻辑。Java EE 规定 开发者需要将业务逻辑从客户端软件中抽取出来，封装在一个组件中，然后让组件运行在一个服务器上。客户端通过网络调用组件，来使用组件提供的服务，并以此实现业务逻辑；
- 在 Java EE 中，这个封装了业务逻辑的组件就是 EJB 组件；
- 开发 EJB 组件很繁琐，使用 Spring 可以简化开发；

#### JavaBean

- JavaBean 是遵守 JavaBean API 规范开发的类；
- 特点：
  - 是一个 public 公有类；
  - 提供一个默认的无参构造函数；
  - 需要被序列化并且实现了 Serializable 接口；
  - 属性都为 private；
  - 属性需要有 getter / setter 方法；
- JavaBean 在 Java EE 开发中，通常用于 “封装数据”；
- 遵循以上写法的 JavaBean 类，其它程序可以通过反射技术（内省机制）实例化为 JavaBean 对象；
- 通过反射那些遵循命名规范的 getter / setter 方法。从而可以进行 “保存数据 / 读取数据” 操作；

#### POJO

- POJO （ Plain Ordinary Java Object ），可以称为 “普通 Java 类” 或 “简单 Java 类”；
- 主要用来指代那些没有遵从特定的 Java 对象模型、约定、或框架（例如：EJB）的 Java 对象；
- POJO 即不继承自另一个类，也不是一个接口的实现；
- POJO 类不作为任何特殊的角色被使用；
- POJO 类里面可以包含 “业务逻辑” 和 “持久化逻辑”；
- 一个 JavaBean 类可以被看作是 POJO；

#### Bean

- 被 Spring IoC 容器管理的对象，被称作 Bean；
- 在 Spring 中，可以通过 XML 配置，注解配置，Java 配置，这三种方式配置元数据，即描述数据的数据；
- Spring IoC 容器通过配置元数据，来进行实例化、配置和管理 Bean 对象；
- 我们的应用程序由 Bean 对象所构成；

#### 容器

- 从程序设计角度看就是装其他对象的的对象；
- 在 Spring 中，容器是 Spring 框架的核心，用来管理对象；
- 容器会创建对象，配置对象，管理对象间的关系，并；
- 一个 Spring 容器就是某个实现了 org.springframework.context.ApplicationContext 接口的类的实例；

#### Ioc 控制反转

- Ioc (Inversion of Control) 控制反转，也被称为『 依赖注入 』Dependency Injection；
- IoC 是 Spring 容器的核心；

**举例说明**：

- 假如我们有一个 Movie 类，它代表一个电影；
- 电影里面有男主角，它由一个男演员去扮演；
- 假如我们有一个角色 “国王 King”，他由 Tony 来扮演；
- 在拍的第 150 场戏里面，国王要说话；

**不好的写法**：

```java
public class Movie {
  public void scene150() {
    Actor king = new Tony();
    king.say("国王说了一些话....");
  }
}
```

- 我们直接在 Movie 类的 `scene150` 方法里，指定了国王就是 Tony；
- 这样写的话，Movie 类直接和 Tony 类耦合在了一起；
- 这个角色可能不一定是 Tony 来演，可能换成 Bob 来演；
- 无论怎么样，只要想换演员，就一定需要改这段代码；
- 这属于 “面向实现编程”，我们需要改成 “面向接口编程”；

**面向接口的写法**：

```java
public class Movie {
  private Actor king;

  public void setKing(Actor actor) {
    this.king = actor;
  }

  public void scene150() {
    king.say("国王说了一些话....");
  }
}
```

- 我们把 king 这个角色，直接抽出来作为 Movie 类的一个私有属性；
- 通过 setter 方法来设置它；
- 在 `scene150` 方法中，只需要调用 king 对象的 `say` 方法；
- 而具体这个 king 对象是谁的实例，Movie 类并不关心；

```java
public class Director {
  public void direct() {
    Moview movie = new Movie();
    Actor king = new Tony();

    movie.setKing(king);
    movie.scene150();
  }
}
```

- 然后我们创建一个导演 Director 类；
- 里面分别实例化 Movie 和 Tony 类；
- 然后导演设置它们之间的依赖关系；

**通过容器完成依赖关系的注入**：

- 上面 👆 的实现，虽然让 Movie 类和 Tony 类实现了解耦；
- 但是导演 Director 类里面依然要手动的实例化它们，并且配置它们的依赖关系；
- 现在导演希望有一个第三方代理机构，可以帮他把这些事情都处理好，它只需要排戏，而具体谁去演，他不需要管；
- Spring 容器就是这个 “第三方代理机构”；
- 它通过一堆配置元数据，来帮助完成实例化对象，配置对象，设置对象间的依赖关系，等操作；

这个配置文件如下：

- 里面定义了两个 Bean 对象，分别是 Tony 实例，和 Movie 实例；
- 然后指定了 Movie 实例的 `king` 属性的值，是 Tony 实例；

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
    <bean id="tony" class="com.myMovie.Tony" />
    <bean id="movie" class="com.myMovie.Movie">
      <property name="king" ref="tony">
    </bean>
</beans>
```

- 把这个配置文件传给 Spring 容器，它会帮你实例化 Bean，然后设置好依赖关系；
- 你直接从容器中取得准备就绪的 Bean 实例，直接使用就行了；

#### AOP 面向切面编程

- Spring AOP 即 Aspect-oriented programming，面向切面编程；
- AOP 是软件开发思想发展到了一定阶段的产物，其作为 OOP 面向对象编程的补充；
- 在开发中，我们经常需要对程序进行，诸如：性能检测，访问控制，日志记录等于具体业务逻辑无关的操作；
- 这些操作分散在各个类中，很多时候它们的代码都是重复的；
- 在面向对象编程里，如果多个类中出现了重复代码，会考虑抽象出一个父类，然后把重复代码提取到父类；
- 但是，因为上述这些代码，都是与业务无关的，但是它们又嵌入到具体的业务逻辑之中；

![2020-3-9-2-29-58.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-9-2-29-58.png)

- 上面这段代码里，红色箭头指向的都是性能检测代码；
- 它们嵌入到了具体的业务逻辑之中，不能简单的抽取出来公用；
- 但是我们可以看出来，上面性能检测代码，在具体业务代码调用前开始，在业务代码调用完毕后结束；
- 也就是性能检测的代码的执行位置，是固定的。可以把涉及到性能检测的业务方法，分成三个部分：1 - 开始检测，2 - 执行业务代码，3 - 结束检测；
- 这被结构称为具有 “**横切**” 性质的；
- 根据这种思路，我们就可以**在一个类/方法执行的各个阶段**（初始化前/后，方法调用前/后，异常抛出后，等）**插入代码**，以实现想要的功能，同时还能保持业务逻辑的清晰整洁；

## Spring 架构

![2020-3-9-23-42-53.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-9-23-42-53.png)

**核心容器**：

- Core 模块：封装了框架依赖的最底层部分，包括资源访问、类型转换及一些常用工具类；
- Beans 模块：提供了框架的基础部分，包括控制反转（ IOC ）和依赖注入（ DI ）。其中 BeanFactory 是容器核心；
- Context 模块：以 Core 和 Beans 为基础，集成 Beans 模块功能并添加资源绑定、数据验证、国际化、Java EE 支持、容器生命周期、事件传播等；核心接口是 ApplicationContext；
- EL 模块：提供强大的表达式语言支持，支持访问和修改属性值，方法调用，支持访问及修改数组、容器和索引器，命名变量，支持算数和逻辑运算，支持从 Spring 容器获取 Bean， 它也支持列表投影、选择和一般的列表聚合等；

AOP 模块： Spring AOP 模块提供了符合 AOP Alliance 规范的面向切面的编程（ aspect-oriented programming ）实现，提供比如日志记录、权限控制、性能统计等和业务逻辑分离的技术，并且能动态的把这些功能添加到需要的代码中；

**数据访问/集成模块**：

- 事务模块：该模块用于 Spring 管理事务，支持编程和声明性的事务管理；
- JDBC 模块：提供了一个 JDBC 的样例模板，使用这些模板能消除传统冗长的 JDBC 编码，并且使用事务模块来进行事务管理；
- ORM 模块：提供 “对象-关系” 的持久化框架的无缝集成，包括 Hibernate 、JPA 、 MyBatis 等。而且可以使用 Spring 事务管理，无需额外控制事务；
- OXM 模块：提供了一个对 Object / XML 映射实现，将 java 对象映射成 XML 数据，或者将 XML 数据映射成 java 对象；
- JMS 模块：用于 JMS ( Java Messaging Service )，JMS 用于在两个应用程序之间，或分布式系统中发送消息，进行异步通信。JMS 模块提供一套遵循 “发布订阅模式” 的模板用于更加简单的使用 JMS；

**Web / Remoting 模块**：

- Web 模块：提供了基础的 web 功能。例如多文件上传、集成 IoC 容器、远程过程访问（ RMI、Hessian、Burlap ）以及 Web Service 支持，并提供一个 RestTemplate 类来提供方便的 Restful services 访问；
- Web-Servlet 模块：提供了一个 Spring MVC Web 框架实现。Spring MVC 框架提供了基于注解的请求资源注入、更简单的数据绑定、数据验证等及一套非常易用的 JSP 标签，完全无缝与 Spring 其他技术协作；
- Web-Struts 模块：提供了与 Struts 无缝集成， Struts1.x 和 Struts2.x 都支持；

**Test 模块**： Spring 支持 Junit 和 TestNG 测试框架，而且还额外提供了一些基于 Spring 的测试功能，比如在测试 Web 框架时，模拟 Http 请求的功能；

## Spring 自动扫描 & 自动装配

- 在上面的讲解中，我们一直用 XML 文件去声明并且配置 Bean；
- 但 Spring 支持自动扫描 Bean 功能；
- Spring 会自动扫描指定包的 bean；

### 手动配置

- 先展示一下之前手动配置的实现；
- 假设一个项目里有 DAO 层，和 Service 层；
- DAO 层，创建包 com.shiyanlou.spring.dao，创建 CustomerDAO.java；

```java
package com.shiyanlou.spring.dao;

public class CustomerDAO {
  @Override
  public String toString(){
      return "Hello , This is CustomerDAO";
  }
}
```

- Service 层，创建包 com.shiyanlou.spring.services，创建 CustomerService.java；

```java
package com.shiyanlou.spring.services;

import com.shiyanlou.spring.dao.CustomerDAO;

public class CustomerService {
  private CustomerDAO customerDAO;

  public void setCustomerDAO(CustomerDAO customerDAO) {
      this.customerDAO = customerDAO;
  }

  @Override
  public String toString() {
      return "CustomerService [customerDAO=" + customerDAO + "]";
  }
}
```

- 在目录 src/main/resources 创建并配置 SpringCustomer.xml 文件；

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="customerService" class="com.shiyanlou.spring.services.CustomerService">
        <property name="customerDAO" ref="customerDAO" />
    </bean>

    <bean id="customerDAO" class="com.shiyanlou.spring.dao.CustomerDAO" />

</beans>
```

### 自动扫描

- 下面展示一下如何进行自动扫描；
- 首先，在 CustomerDAO 类和 CustomerService 类上加上注解 `@Component`

```java
package com.shiyanlou.spring.dao;

import org.springframework.stereotype.Component;

@Component
public class CustomerDAO
{
  @Override
  public String toString() {
      return "Hello , This is CustomerDAO";
  }
}
```

```java
package com.shiyanlou.spring.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.shiyanlou.spring.dao.CustomerDAO;

@Component
public class CustomerService
{
  @Autowired
  CustomerDAO customerDAO;

  @Override
  public String toString() {
      return "CustomerService [customerDAO=" + customerDAO + "]";
  }
}
```

- 配置文件里去掉刚才定义的一堆 Bean；
- 加上 `<context:component-scan base-package="com.shiyanlou.spring"/>` 这样就将 Spring 的自动扫描特性引入；
- `base-package` 属性指定 Spring 去扫描哪个包下面的 Bean；

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="
            http://www.springframework.org/schema/context
            http://www.springframework.org/schema/context/spring-context.xsd
            http://www.springframework.org/schema/beans
            http://www.springframework.org/schema/beans/spring-beans.xsd">

    <context:component-scan base-package="com.shiyanlou.spring"/>

</beans>
```

#### 定义扫描组件名称

- 默认情况下，Spring 把 Bean 类的文件名的第一个字母变成小写，来作为自动扫描组件的名称 ID；
- 例如：CustomerService 转变为 customerService；
- 之后你可以通过容器实例的 `getBean` 方法获取到 Bean 实例；

```java
CustomerService cust = (CustomerService)context.getBean("customerService");
```

- 但你也可以自定义组件的名称；
- 首先引入依赖包:

```java
import org.springframework.stereotype.Service;
```

- 然后在注解后面加括号，里面写入自定义的名字：

```java
@Component("cService")
public class CustomerService
...
```

#### 自动扫描组件的注解类型

- 有 4 种注解类型，分别是：

  - `@Component`：表示一个自动扫描 Component；
  - `@Repository`：表示**持久化层**的 DAO Component；
  - `@Service`：表示**业务逻辑层**的 Service Component；
  - `@Controller`：表示**表示层**的 Controller Component；

- 我们可以将所有自动扫描组件都用 `@Component` 注解；
- `@Repository`、 `@Service`、 `@Controller` 三种注释是为了加强代码的阅读性而创造；
- 上面例子的 CustomerDAO 就应该用 `@Repository`，CustomerService 就应该用 `@Service`；

#### 自动扫描中过滤组件

- 配置文件中的 `<context:component-scan>` 标签可以被替换成 **`<context:include-filter>`** 用以实现自动扫描过滤；
- `<context:include-filter>` 里面可以定义一个正则表达式，之后自动扫描时，只会把符合命名规则的类作为 Bean 组件；
- 这样使用的话，每个类里面也不需要写 `@Component` 注解了；
- 上面例子的配置文件可以改写成如下：

```xml
 <beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:context="http://www.springframework.org/schema/context"
    xsi:schemaLocation="
            http://www.springframework.org/schema/context
            http://www.springframework.org/schema/context/spring-context.xsd
            http://www.springframework.org/schema/beans
            http://www.springframework.org/schema/beans/spring-beans.xsd">

    <context:component-scan base-package="com.shiyanlou.spring" >
        <!-- 所有文件名字包含 DAO 和 Service的，都将作为 Bean 组件被注册到 Spring 容器中 -->
        <context:include-filter type="regex"
                       expression="com.shiyanlou.spring.dao.*DAO.*" />

        <context:include-filter type="regex"
                       expression="com.shiyanlou.spring.services.*Service.*" />

    </context:component-scan>
</beans>
```

- **`<context:exclude-filter>`** 标签可以定义哪些类，不应该被看作 Bean 组件；
- 例如：以下配置排除用 @Service 注释过的组件：

```xml
<context:component-scan base-package="com.shiyanlou.spring" >
        <context:exclude-filter type="annotation"
            expression="org.springframework.stereotype.Service" />
</context:component-scan>
```

- 例如：以下配置排除包含 DAO 关键字的组件：

```xml
<context:component-scan base-package="com.shiyanlou.spring" >
        <context:exclude-filter type="regex"
            expression="com.shiyanlou.spring.dao.*DAO.*" />
</context:component-scan>
```

### 自动装配

- 所谓自动装配，就是将一个 Bean 注入到其他 Bean 的 Property 中；
- 之前手动配置时，我们通过 `wo` 和 `ref` 属性来实现注入：

```xml
<bean id="customerService" class="com.shiyanlou.spring.services.CustomerService">
  <property name="customerDAO" ref="customerDAO" />
</bean>
<bean id="customerDAO" class="com.shiyanlou.spring.dao.CustomerDAO" />
```

#### 5 种自动装配模式

Spring 支持 5 种自动装配模式，如下：

- `no`：默认情况下，不自动装配，通过 `ref` 属性手动设定；
- `byName`：根据属性的 name 自动装配。如果一个 Bean 组件的名称 ，和另一个 Bean 中的属性的 name 相同，则自动装配这个 Bean 到此属性中；
- `byType`：根据属性的数据类型（ Type ）自动装配。如果一个 Bean 组件的类型，和另一个 Bean 中属性的数据类型兼容，则自动装配；
- `constructor`：根据构造函数参数的数据类型，进行 `byType` 模式的自动装配；
- `autodetect`：如果发现默认的构造函数，用 `constructor` 模式，否则，用 `byType` 模式；

#### byName 示例

- 上面例子中，如果想用 `byName` 方式自动装配，配置文件如下：

```xml
<bean id="customerService" class="com.shiyanlou.spring.services.CustomerService" autowire="byName">
</bean>
<bean id="customerDAO" class="com.shiyanlou.spring.dao.CustomerDAO" />
```

- 在 customerService 实例中有名称为 “customerDAO” 的属性，那么同名的 customerDAO 实例就会被装配这个属性上；
- 根据属性名找不到对应的 Bean，那么属性值为 `null`；

#### byType 示例

- 如果用 `byType` 方式装配，Spring 会自动寻找与属性类型相同的 Bean 实例，找到后通过调用属性的 setter 方法将其注入；
- 但要注意，如果配置文件中有两个类型相同的 Bean 实例，将抛出 `UnsatisfiedDependencyException` 异常；

```xml
<bean id="customerService" class="com.shiyanlou.spring.services.CustomerService" autowire="byType"></bean>
<bean id="customerDAO" class="com.shiyanlou.spring.dao.CustomerDAO" />
<bean id="customerDAO_another" class="com.shiyanlou.spring.dao.CustomerDAO" />
```

- 所以，一旦选择了 `byType` 类型的自动装配，请确认你的配置文件中每个数据类型定义一个唯一的 Bean；

#### @Autowired 注解

- 也可以通过 `@Autowired` 注解来设置自动装配；
- `@Autowired` 注解可以写在字段上，或者方法上；
- `@Autowired` 默认**按类型装配**，默认情况下要求依赖对象必须存在，如果要允许 `null` 值，可以设置它的 `required` 属性为 `false`；

---

- 🌰 例如：上面的 CustomerService 类里面就使用了 `@Autowired` 注解在 `customerDAO` 属性上；
- 这样 Spring 会自动把另一个类型为 CustomerDAO 的 Bean 实例注入到这个属性中；

```java
package com.shiyanlou.spring.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.shiyanlou.spring.dao.CustomerDAO;

@Component
public class CustomerService
{
  @Autowired
  CustomerDAO customerDAO;

  @Override
  public String toString() {
      return "CustomerService [customerDAO=" + customerDAO + "]";
  }
}
```

## Spring JDBC Template

### 什么是传统 JDBC

- JDBC，全称 Java 数据库连接 (Java Database Connectivity)；
- JDBC 包含了数据库操作的规范。定义了相关的类，接口，方法， 但是并没有提供具体实现；
- 各大数据库厂商会提供对 JDBC 的实现；
- 之前使用传统的 JDBC 访问操作数据库时步骤很繁琐，会出现很多重复的代码；
- 往往需要经过：『 注册驱动程序 -> 配置数据库信息 -> 创建连接对象 -> 编写 SQL 语句 -> 执行 SQL 语句 -> 断开连接，释放资源 』 等几个步骤；

![2020-3-9-14-59-38.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-9-14-59-38.png)

### 什么是 JDBC Template

- Spring Jdbc Template 正是为了减少上述的麻烦而设计出来；
- 它是对 JDBC 的一种封装，抽象我们常用的一些方法；

JdbcTemplate 主要提供以下五类方法：

- execute 方法用于执行任何 SQL 语句，一般用于执行 DDL 语句；
- update 方法用于执行新增、修改、删除等语句；
- batchUpdate 方法用于执行批处理相关语句；
- query 方法 & queryForXXX 方法：用于执行查询相关语句；
- call 方法：用于执行存储过程、函数相关语句；

### JDBC Template 增操作

- 在 Spring 配置文件中内容如下：
  - 下面 👇 分别定义了两个 Bean 组件：dataSource 和 jdbcTemplate；
  - dataSource 实例是数据源，里面定义了与数据库相关的属性的值；
  - jdbcTemplate 实例内 dataSource 属性的值为这个 dataSource 实例；

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
                           http://www.springframework.org/schema/context
                           http://www.springframework.org/schema/context/spring-context.xsd">


    <context:annotation-config/>

    <bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
        <property name="driverClassName" value="com.mysql.jdbc.Driver"/>
        <property name="url" value="jdbc:mysql://localhost/jdbc"/>
        <property name="username" value="root"/>
        <property name="password" value=""/>
    </bean>

    <bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate">
        <property name="dataSource" ref="dataSource"/>
    </bean>
</beans>
```

- 之后通过 Spring 容器的 `getBean("jdbcTemplate")` 方法获取到 jdbcTemplate 实例；
- 然后就可以用 `UPDATE` 方法执行 SQL 语句了；
- 第一个参数是 SQL 语句， 第二个参数要传入到 SQL 语句中对应的参数；

```java
package com.shiyanlou.jdbc;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;

public class App {
  private static ApplicationContext context;

  public static void main(String[] args) {
    context = new ClassPathXmlApplicationContext("SpringBeans.xml");

    // 获取 jdbcTemplate 实例
    JdbcTemplate jdbcTemplate = (JdbcTemplate) context.getBean("jdbcTemplate");
    // sql 语句
    String sql = "insert into student values(?, ?, ?)";
    // 执行 UPDATE 操作
    int count = jdbcTemplate.update(sql, new Object[]{ 2, "shiyanlou2", 18 });
    // 返回结果为影响到的数据行数
    System.out.println(count);
  }
}
```

## Spring MVC

#### 什么是 Spring MVC

- Spring 为展现层提供了一个基于 MVC 设计理念的 Web 框架 -- Spring MVC；
- Spring MVC 通过一套 MVC 注解，让 POJO 类成为处理请求的控制器；
- Spring MVC 还支持 REST 风格的 URL 请求；
- Spring MVC 框架围绕 DispatcherServlet 为核心，它负责截获网络请求，并将其分派给对应的处理器进行处理；

### Hello World 示例

下面 👇 来实现一个 Hello World 实例；

#### 项目目录

- 项目目录如下：

![2020-3-9-23-0-26.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-9-23-0-26.png)

#### 编写 pom.xml

- 首先在 `pom.xml` 文件里，引入依赖；
- 并且配置 Jetty 插件；

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.garrik</groupId>
    <artifactId>HelloSpring</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>war</packaging>

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <spring.version>5.1.1.RELEASE</spring.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-core</artifactId>
            <version>${spring.version}</version>
        </dependency>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-beans</artifactId>
            <version>${spring.version}</version>
        </dependency>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-context-support</artifactId>
            <version>${spring.version}</version>
        </dependency>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-webmvc</artifactId>
            <version>${spring.version}</version>
        </dependency>
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>javax.servlet-api</artifactId>
            <version>3.1.0</version>
        </dependency>
        <dependency>
            <groupId>javax.servlet.jsp</groupId>
            <artifactId>jsp-api</artifactId>
            <version>2.2</version>
        </dependency>
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>jstl</artifactId>
            <version>1.2</version>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.eclipse.jetty</groupId>
                <artifactId>jetty-maven-plugin</artifactId>
                <version>9.4.12.v20180830</version>
                <configuration>
                    <scanIntervalSeconds>2</scanIntervalSeconds>
                    <!-- 定义访问路径，localhost:8080/myHello/ -->
                    <webApp>
                        <contextPath>/myHello</contextPath>
                    </webApp>
                    <httpConnector>
                        <port>8080</port>
                    </httpConnector>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
```

#### 编写 hello.jsp 和 index.jsp

- `index.jsp` 作为主页

```html
<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>HAHA</title>
  </head>
  <body>
    <h1>主页</h1>
  </body>
</html>
```

- `hello.jsp` 显示出一条 Hello World 标题；

```html
<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Hello</title>
  </head>
  <body>
    <h2>Hello World!</h2>
  </body>
</html>
```

#### 编写 web.xml

- 在 web.xml 文件中我们要配置 DispatcherServlet 为一个 Servlet；
- 它会拦截所有的请求，并给它们分配给对应的处理器；
- 它有一个参数 `contextConfigLocation`；
- 我们要给这个参数的值，指定为一个 Spring MVC 配置文件；
  - 默认会去 WEB-INF 下查找对应的 `[servlet-name]-servlet.xml` 文件，如本例中默认查找的是 `springmvc-servlet.xml`；
  - 但是我们指定它去找 `/WEB-INF/springmvc-config.xml`；

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xmlns="http://java.sun.com/xml/ns/javaee" xmlns:web="http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd"
         xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd"
         id="WebApp_ID" version="3.0">

    <display-name>SpringMVCTest</display-name>

    <!-- 配置 Spring MVC DispatchcerServlet 前端控制器 -->
    <servlet>
        <servlet-name>springmvc</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <init-param>
            <!-- contextConfigLocation 是参数名称，该参数的值包含 Spring MVC 的配置文件路径 -->
            <param-name>contextConfigLocation</param-name>
            <param-value>/WEB-INF/springmvc-config.xml</param-value>
        </init-param>
        <!-- 在 Web 应用启动时立即加载 Servlet -->
        <load-on-startup>1</load-on-startup>
    </servlet>
    <!-- Servlet 映射声明 -->
    <servlet-mapping>
        <servlet-name>springmvc</servlet-name>
        <!-- 监听当前域的所有请求 -->
        <url-pattern>/</url-pattern>
    </servlet-mapping>
    <!-- 添加 index.jsp 为首页 -->
    <welcome-file-list>
        <welcome-file>/WEB-INF/views/index.jsp</welcome-file>
    </welcome-file-list>
</web-app>
```

#### 编写 Spring MVC 配置文件；

- 下面编写 Spring MVC 的配置文件 `WEB-INF/springmvc-config.xml`；
- 首先我们要配置请求处理器 Controller，它们负责进一步处理请求；
- 处理器完成业务逻辑的处理后，返回一个 ModelAndView 给 DispatcherServlet，里面包含了 “视图逻辑名” 和 “模型数据信息”；
- ModelAndView 本是并不是真正的视图对象，我们还需要配置一个 “视图解析器” ViewResolver，去完成视图逻辑名到真正视图对象的解析工作；
- 得到真实的视图对象 View 后，DispatcherServlet 就用这个 View 对象对 ModelAndView 中的是模型数据进行视图渲染；
- 然后把结果返回给客户端；

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-4.2.xsd
        http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-4.2.xsd
        http://www.springframework.org/schema/mvc http://www.springframework.org/schema/mvc/spring-mvc-4.2.xsd">

    <!-- 开启注解 -->
    <mvc:annotation-driven />
    <!-- 配置自动扫描的包，完成 Bean 的创建和自动依赖注入的功能 -->
    <context:component-scan base-package="com.garrik.controller" />
    <!-- 默认静态资源处理 -->
    <mvc:default-servlet-handler/>
    <!-- 配置视图解析器 -->
    <bean id="viewResolver" class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix" value="/WEB-INF/views/" />
        <property name="suffix" value=".jsp" />
    </bean>
</beans>
```

#### 编写 Controller

- 在 `com.garrik.controller` 包下面创建 HelloController 类；
- `@Controller` 注解声明一个类是请求处理器；
- 在类中的方法上用 `@RequestMapping` 注解来声明 “请求” 和 “处理方法“ 的映射关系；

```java
package com.garrik.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Controller 是一个基于注解的控制器
 * 可以同时处理多个请求动作
 */
@Controller
public class HelloController {
  /**
   * RequestMapping 用来映射一个请求和请求的方法
   * value="/hello" 表示请求由 hello 方法进行处理
   */
  @RequestMapping(value="/hello")
  public String hello() {
    // 返回一个字符串 " success" 作为视图名称
    return "hello";
  }
}
```

#### 运行服务器

- 通过 Jetty 插件的 `jetty:run` 指令就可以运行服务器了；

![2020-3-9-23-29-53.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-9-23-29-53.png)

- 访问 `http://localhost:8080/myHello/hello` 就可以看到 Hello World 了；

![2020-3-9-23-30-18.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-9-23-30-18.png)

## 登录模块实例

下面 👇 通过一个简单的 “论坛登录模块” 项目实例来展现开发 Spring 应用的整体过程：

- 登陆模块，涵盖了持久层数据访问操作，业务层事务管理，和展现层 MVC 等企业应用常见的功能；
- Spring 提供原生提供『 展示层 Spring MVC 』，『 持久层 Spring JDBC 』 以及『 业务层事务管理 』，等企业级应用开发所需技术；
- 通过此例，可以迅速了解 Spring 开发应用的整体流程；

### 项目介绍

- 项目主题：论坛登录模块；
- 项目介绍：
  - 登录页面提供一个用以输入 “用户名/密码” 的表单；
  - 用户填写并提交表单后，服务器向数据库查询是否有用户名和密码相匹配的记录；
  - 如果匹配成功：
    - 记录用户的成功登陆日志；
    - 更新用户的最后登录时间和 IP 地址；
    - 并给用户增加五个登陆积分；
    - 然后重定向到用户信息页面；
  - 如果匹配失败：
    - 返回登录界面，并给出提示；

### 创建数据表

- 本项目有两个数据表；
- 用户表 t_user；
- 用户登录日志表 t_login_log；

```sql
# 用户表
CREATE TABLE `t_user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `credits` int DEFAULT NULL,
  `user_password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `last_visit` datetime DEFAULT NULL,
  `last_ip` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB;

# 插入一个用户
INSERT INTO t_user (user_name, user_password) VALUES ('admin', 'admin');

# 用户登录日志表
CREATE TABLE `t_login_log` (
  `login_log_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `ip` varchar(255) DEFAULT NULL,
  `login_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`login_log_id`)
) ENGINE=InnoDB;
```

### 建立工程

- 用 IDEA 的 Maven 创建项目；
- 项目目录结构如下：

![2020-3-10-8-27-38.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-10-8-27-38.png)

- 下面是 `pom.xml` 的配置文件：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.garrik</groupId>
    <artifactId>spring_learn</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>springboot_learn</name>
    <description>Demo project for Spring Boot</description>

    <properties>
        <file.encodeing>UTF-8</file.encodeing>
        <spring.version>4.3.18.RELEASE</spring.version>
        <mysql.version>8.0.13</mysql.version>
        <servlet.version>2.5</servlet.version>
        <servlet-api.version>3.1.0</servlet-api.version>
        <dbcp.version>2.1.1</dbcp.version>
        <jstl.version>1.2</jstl.version>
        <aspectj.version>1.8.1</aspectj.version>
        <groovy.version>3.0.0-alpha-3</groovy.version>
    </properties>

    <dependencies>
        <!--spring 核心-->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-core</artifactId>
            <version>${spring.version}</version>
        </dependency>
        <!--spring-bean-->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-beans</artifactId>
            <version>${spring.version}</version>
        </dependency>
        <!--spring-context-->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-context</artifactId>
            <version>${spring.version}</version>
        </dependency>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-context-support</artifactId>
            <version>${spring.version}</version>
        </dependency>
        <!--JDBC Template-->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-jdbc</artifactId>
            <version>${spring.version}</version>
        </dependency>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-test</artifactId>
            <version>${spring.version}</version>
        </dependency>
        <!--spring-mvc-->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-webmvc</artifactId>
            <version>${spring.version}</version>
        </dependency>
        <!--aspectJ-->
        <dependency>
            <groupId>org.aspectj</groupId>
            <artifactId>aspectjweaver</artifactId>
            <version>${aspectj.version}</version>
        </dependency>
        <!--mysql-->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>${mysql.version}</version>
        </dependency>
        <!--连接池-->
        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-dbcp2</artifactId>
            <version>${dbcp.version}</version>
        </dependency>
        <!--web-->
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>javax.servlet-api</artifactId>
            <version>${servlet-api.version}</version>
        </dependency>
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>jstl</artifactId>
            <version>${jstl.version}</version>
        </dependency>
        <!--test-->
        <dependency>
            <groupId>org.testng</groupId>
            <artifactId>testng</artifactId>
            <version>6.11</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
    <build>
        <plugins>
            <plugin>
                <groupId>org.eclipse.jetty</groupId>
                <artifactId>jetty-maven-plugin</artifactId>
                <version>9.4.12.v20180830</version>
                <configuration>
                    <scanIntervalSeconds>2</scanIntervalSeconds>
                    <webApp>
                        <contextPath>/mySpring</contextPath>
                    </webApp>
                    <httpConnector>
                        <port>8080</port>
                    </httpConnector>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
```

### 创建实体类

- 实体类也被称作领域对象（Domain Object）；
- 它代表了业务的状态，贯穿展现层，业务层，持久层，并最终被持久化到数据库中；
- 一般来说，数据表和实体类呈一一对应的关系；
- 下面 👇 我们分别来建立 t_user 和 t_login_log 的实体类；

```java
package com.garrik.domain;

import java.io.Serializable;
import java.util.Date;

public class User implements Serializable {
  private int userId;
  private String userName;
  private String password;
  private int credits;
  private String lastIp;
  private Date lastVisit;

  public String getUserName() {
    return userName;
  }

  public void setUserName(String userName) {
    this.userName = userName;
  }

  public int getUserId() {
    return userId;
  }

  public void setUserId(int userId) {
    this.userId = userId;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public int getCredits() {
    return credits;
  }

  public void setCredits(int credits) {
    this.credits = credits;
  }

  public String getLastIp() {
    return lastIp;
  }

  public void setLastIp(String lastIp) {
    this.lastIp = lastIp;
  }

  public Date getLastVisit() {
    return lastVisit;
  }

  public void setLastVisit(Date lastVisit) {
    this.lastVisit = lastVisit;
  }
}
```

```java
package com.garrik.domain;

import java.io.Serializable;
import java.util.Date;

public class LoginLog implements Serializable {
  private int loginLogId;
  private int userId;
  private String ip;
  private Date loginDate;

  public int getLoginLogId() {
    return loginLogId;
  }

  public void setLoginLogId(int loginLogId) {
    this.loginLogId = loginLogId;
  }

  public int getUserId() {
    return userId;
  }

  public void setUserId(int userId) {
    this.userId = userId;
  }

  public String getIp() {
    return ip;
  }

  public void setIp(String ip) {
    this.ip = ip;
  }

  public Date getLoginDate() {
    return loginDate;
  }

  public void setLoginDate(Date loginDate) {
    this.loginDate = loginDate;
  }
}
```

### 持久层

- 持久层的主要工作就是从数据库表中加载数据并实例化实体类，或者将实体类对象持久化到数据库表中；

#### UserDao

- 下面 👇 我们先来定义 User 类的 DAO，它包含三个方法：
  - `getMatchCount()`：根据用户名和密码获取匹配的用户数；
  - `findUserByUserName()`：根据用户名获取 User 对象；
  - `updateLoginInfo()`：更新用户积分，最后登录 IP 地址，最后登录时间；

```java
package com.garrik.dao;

import com.garrik.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;

@Repository // 注解定义一个 Bean
public class UserDao {
  private JdbcTemplate jdbcTemplate;

  @Autowired // 注入 JdbcTemplate 的 Bean 对象
  public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
    this.jdbcTemplate = jdbcTemplate;
  }

  public int getMatchCount(String username, String password) {
    String sqlStr = "SELECT count(*) FROM t_user " + "WHERE user_name = ? AND user_password = ?";

    // 直接使用 JdbcTemplate 进行查询；
    return jdbcTemplate.queryForObject(sqlStr, new Object[] {username, password}, Integer.class);
  }

  public User findUserByUserName(String userName) {
    final User user = new User();

    String sqlStr =
        "SELECT user_id, user_name, credits, last_visit, last_ip FROM t_user "
            + "WHERE user_name = ?";

    jdbcTemplate.query(
        sqlStr,
        new Object[] {userName},
        // 匿名类方式实现的回调函数，
        // 该类里面有一个方法 processRow，负责处理结果集
        new RowCallbackHandler() {
          public void processRow(ResultSet resultSet) throws SQLException {
            user.setUserId(resultSet.getInt("user_id"));
            user.setUserName(resultSet.getString("user_name"));
            user.setLastVisit(resultSet.getDate("last_visit"));
            user.setCredits(resultSet.getInt("credits"));
          }
        });

    return user;
  }

  public void updateLoginInfo(User user) {
    String sqlStr = "UPDATE t_user SET last_visit = ?, last_ip = ?, credits = ? WHERE user_id = ?";

    Object[] args = {user.getLastVisit(), user.getLastIp(), user.getCredits(), user.getUserId()};
    jdbcTemplate.update(sqlStr, args);
  }
}
```

#### LoginLogDao

- 下面是 LoginLog 类的 DAO，它仅有一个 `insertLoginLog` 方法，用以将用户的登录日志插入到数据库；

```java
package com.garrik.dao;

import com.garrik.domain.LoginLog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class LoginLogDao {
  private JdbcTemplate jdbcTemplate;

  @Autowired
  public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
    this.jdbcTemplate = jdbcTemplate;
  }

  public void insertLoginLog(LoginLog loginLog) {
    String sqlStr = "INSERT INTO t_login_log (user_id, ip, login_datetime) VALUES (?, ?, ?)";
    Object[] args = {loginLog.getUserId(), loginLog.getIp(), loginLog.getLoginDate()};

    jdbcTemplate.update(sqlStr, args);
  }
}
```

#### 编写 Spring 配置文件

- 我们刚刚使用到了 Jdbc Template；
- 并且定义了两个持久层 Bean；
- 现在就让我们开始编写 Spring 配置文件；

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:p="http://www.springframework.org/schema/p"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans-4.0.xsd
        http://www.springframework.org/schema/context
        http://www.springframework.org/schema/context/spring-context-4.0.xsd>

    <!-- 自动扫描 dao 下面的所有类，将有注解的转化成 Bean -->
    <context:component-scan base-package="com.garrik.dao"/>

    <!-- 定义数据源 -->
    <bean id="dataSource" class="org.apache.commons.dbcp2.BasicDataSource"
          destroy-method="close"
          p:driverClassName="com.mysql.cj.jdbc.Driver"
          p:url="jdbc:mysql://localhost:3306/my_test_db"
          p:username="root"
          p:password="123456789"/>

    <!-- 定义 Jdbc Template Bean -->
    <bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate" p:dataSource-ref="dataSource"/>
</beans>
```

### 业务层

- 在这个项目中，只用一个业务类，即 UserService；
- UserService 负责将持久层的 UserDao 和 LoginLogDao 组织起来，完成用户名/密码认证，登录日志记录等操作；
- 其中包含三个方法：
  - `hasMatchUser()`：检查用户名/密码的正确性；
  - `findUserByUserName()`：以用户名为条件加载 User 对象；
  - `loginSuccess()`：在用户登录成功后调用，更新用户最后的登录时间和 IP 信息，同时记录登录日志；

```java
package com.garrik.service;

import com.garrik.dao.LoginLogDao;
import com.garrik.dao.UserDao;
import com.garrik.domain.LoginLog;
import com.garrik.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service // 标记为一个业务层 Bean
public class UserService {
  private UserDao userDao;
  private LoginLogDao loginLogDao;

  @Autowired
  public void setUserDao(UserDao userDao) {
    this.userDao = userDao;
  }

  @Autowired
  public void setLoginLogDao(LoginLogDao loginLogDao) {
    this.loginLogDao = loginLogDao;
  }

  public boolean hasMatchUser(String userName, String password) {
    int matchCount = userDao.getMatchCount(userName, password);
    return matchCount > 0;
  }

  public User findUserByUserName(String userName) {
    return userDao.findUserByUserName(userName);
  }

  @Transactional // 标记为一个 “事务”
  public LoginLog loginSuccess(User user) {
    user.setCredits(5 + user.getCredits());

    LoginLog loginLog = new LoginLog();
    loginLog.setUserId(user.getUserId());

    userDao.updateLoginInfo(user);
    loginLogDao.insertLoginLog(loginLog);

    return loginLog;
  }
}
```

- 上面 👆 代码中，我们在 `loginSuccess` 方法上注明，这个方法内会进行一个事务性的数据操作；
- 我们需要告诉 Spring 那些业务类需要工作在事务环境中，以及事务的规则和内容；
- Spring 会根据这些信息自动为目标业务类添加事务管理的功能；
- 打开原来的 smart-context.xml 文件，添加如下内容：

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:p="http://www.springframework.org/schema/p"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans-4.0.xsd
        http://www.springframework.org/schema/context
        http://www.springframework.org/schema/context/spring-context-4.0.xsd
        http://www.springframework.org/schema/aop
        http://www.springframework.org/schema/aop/spring-aop-4.0.xsd
        http://www.springframework.org/schema/tx
        http://www.springframework.org/schema/tx/spring-tx-4.0.xsd">
    ...
    <!-- 扫描 service 包下的类 -->
    <context:component-scan base-package="com.garrik.service"/>
    ...
    ...
    <!-- 配置事务管理器 -->
    <bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager"
          p:dataSource-ref="dataSource"/>

    <!-- 通过 AOP 提供事务增强，让 service 包下面的所有 Bean 的所有方法拥有事务 -->
    <aop:config proxy-target-class="true">
        <!--切点-->
        <aop:pointcut id="serviceMethod"
                      expression="(execution(* com.garrik.service..*(..))) and
                      (@annotation(org.springframework.transaction.annotation.Transactional)) "/>
        <!--织入，把通知织入到切点-->
        <aop:advisor pointcut-ref="serviceMethod" advice-ref="txAdvice"/>
    </aop:config>
    <!--通知-->
    <tx:advice id="txAdvice" transaction-manager="transactionManager">
        <tx:attributes>
            <tx:method name="*"/>
        </tx:attributes>
    </tx:advice>
    ...
</bean>
```

### 单元测试

- 在 test 目录下，创建 UserService 一致的包结构，即 `com.garrik.service`，并创建 UserService 对应的测试类 UserServiceTest；

```java
package com.garrik.service;

import com.garrik.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.testng.AbstractTransactionalTestNGSpringContextTests;
import org.testng.Assert;
import org.testng.annotations.Test;

// 指定 Spring 的配置文件
// classpath 指的是所有的类被编译成 class 后所存放在的 classes 目录
@ContextConfiguration("classpath:/smart-context.xml")
// 通过扩展 Spring 测试框架提供的测试基类 AbstractTransactionalTestNGSpringContextTests 来启动测试运行器
public class UserServiceTest extends AbstractTransactionalTestNGSpringContextTests {
  private UserService userService;

  @Autowired
  public void setUserService(UserService userService) {
    this.userService = userService;
  }

  @Test
  public void hasMatchUser() {
    boolean b1 = userService.hasMatchUser("admin", "admin");
    Assert.assertTrue(b1);
  }

  @Test
  public void findUserByUserName() {
    User user = userService.findUserByUserName("admin");
    Assert.assertEquals(user.getUserName(), "admin");
  }
}
```

### 展示层

#### 配置 web.xml

- 需要先把之前的 `smart-context.xml` 配置文件引入进来；
- 然后设置 Spring 容器监听器，以在 Web 容器启动时，一并启动 Spring 容器；
- 然后设置 Spring MVC 截获器 Servlet；
- 设置所有 URL 以 `.html` 为后缀的请求，都会被截获，得到进一步的处理；

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">
    <!-- 加载 smart-context.xml 配置文件 -->
    <context-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>classpath:smart-context.xml</param-value>
    </context-param>
    <!-- 启动 Spring 容器的监听器 -->
    <!-- 该监听器在 Web 容器启动时自动运行，它会根据 contextConfigLocation 参数获取到 Spring 配置文件 -->
    <!-- 并且启动 Spring 容器 -->
    <listener>
        <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
    </listener>

    <!-- Spring MVC 的截获 Servlet -->
    <servlet>
        <servlet-name>smart</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <load-on-startup>2</load-on-startup>
    </servlet>
    <!-- 所有路径以 .html 结尾的请求都会被截获 -->
    <servlet-mapping>
        <servlet-name>smart</servlet-name>
        <url-pattern>*.html</url-pattern>
    </servlet-mapping>
</web-app>
```

#### 编写请求处理器

- 下面编写一个 LoginController，它负责处理登录请求；
- 根据登陆成功与否，转向欢迎页面，或者失败页面；

```java
package com.garrik.web;

import com.garrik.domain.User;
import com.garrik.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;

// 标注为一个请求处理器
@Controller
public class LoginController {
  private UserService userService;

  @Autowired
  public void setUserService(UserService userService) {
    this.userService = userService;
  }

  // 处理 /index.html 请求
  @RequestMapping(value = "/index.html")
  public String loginPage() {
    return "login"; // 重定向到 login 页面
  }

  // 处理 /loginCheck.html 请求
  @RequestMapping(value = "/loginCheck.html")
  // 前端页面登录表单里面对应的参数，会自动绑定到 LoginCommand 实例上，然后作为参数传入方法
  public ModelAndView loginCheck(HttpServletRequest request, LoginCommand loginCommand) {
    boolean isValidUser =
        userService.hasMatchUser(loginCommand.getUserName(), loginCommand.getPassword());
    if (!isValidUser) {
      return new ModelAndView("login", "error", "用户名或密码错误");
    } else {
      User user = userService.findUserByUserName(loginCommand.getUserName());

      user.setLastIp(request.getLocalAddr());
      user.setLastVisit(new Date());
      userService.loginSuccess(user);

      request.getSession().setAttribute("user", user);

      // 因为 main 视图的渲染需要这里获取到的模型数据信息，
      // 所以需要返回 ModelAndView，而不能仅是一个字符串
      return new ModelAndView("main");
    }
  }
}
```

- LoginCommand 类：

```java
package com.garrik.web;

public class LoginCommand {
  private String userName;
  private String password;

  public String getUserName() {
    return userName;
  }

  public void setUserName(String userName) {
    this.userName = userName;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }
}
```

#### JSP 视图

- 包括两个页面：
  - 登录页面 login.jsp；
  - 欢迎页面 main.jsp；

login.jsp：

```html
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>X X 论坛登陆</title>
</head>
<body>
<c:if test="${!empty error}">
    <p style="color: red"><c:out value="${error}"/></p>
</c:if>
<form action="<c:url value="/loginCheck.html"/>" method="POST">
    用户名：<input type="text" name="userName">
    密码：<input type="password" name="password">
    <br>
    <input type="submit" value="登陆">
    <input type="reset" value="重置">
</form>
</body>
</html>
```

main.jsp

```html
<%@ page contentType="text/html;charset=UTF-8" %> <%@ taglib
uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> <%@ taglib
uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<html>
  <head>
    <title>X X 论坛</title>
  </head>
  <body>
    <h1>X X 论坛</h1>
    <div>
      <h2>${user.userName}，欢迎您进入论坛！！！</h2>
      <p>当前积分：${user.credits}</p>
      <p>登陆地址：${user.lastIp}</p>
      <p>
        登陆时间：<fmt:formatDate
          value="${user.lastVisit}"
          pattern="yyyy-MM-ss HH:mm:ss"
        />
      </p>
    </div>
  </body>
</html>
```

#### 编写 Spring MVC 配置文件

- 下面编写 Spring MVC 的配置文件；
- Spring MVC 为视图名到具体视图的映射，提供了许多种方法；
- 这里我们选择 InternalResourceViewResolver，它通过在视图逻辑名左右添加前，后缀的方式进行解析；
- 例子，视图逻辑名为 `"login"`，将解析为 `"/WEB-INF/jsp/login.jsp"`；

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:p="http://www.springframework.org/schema/p"
       xsi:schemaLocation="
       http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">

    <!-- 扫描 web 包下的所有类 -->
    <context:component-scan base-package="com.garrik.web"/>
    <!-- 配置视图解析器 -->
    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver"
          p:viewClass="org.springframework.web.servlet.view.JstlView"
          p:prefix="/WEB-INF/jsp/"
          p:suffix=".jsp"/>
</beans>
```

### 运行服务器

- 直接执行 `jetty:run` 运行就好了；

![2020-3-10-10-11-14.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-10-10-11-14.png)

![2020-3-10-10-11-30.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-10-10-11-30.png)
