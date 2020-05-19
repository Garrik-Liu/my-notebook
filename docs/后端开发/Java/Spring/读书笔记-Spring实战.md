# Spring 实战 - 读书笔记

## Spring 介绍

Spring 框架是以简化 Java EE 应用程序的开发为目标而创建的开源框架。

为了降低 Java 开发的复杂性，Spring 采取了以下 4 种关键策略：

- **基于 POJO 的轻量级和最小侵入性编程**；
- **通过依赖注入和面向接口实现松耦合**；
- **基于切面和惯例进行声明式编程**；
- **通过切面和模板减少样板式代码**。

### POJO & Bean

Spring 是一个非侵入式的轻量级框架. Spring 不会强迫你实现 Spring 规范的接口或继承 Spring 规范的类.

在基于 Spring 构建的应用中，开发者所写的类通常没有任何痕迹表明你使用了 Spring, 最多就是使用 Spring 的注解.

✏️ **POJO** （ Plain Ordinary Java Object ），可以称为 “普通 Java 类” 或 “简单 Java 类”:

- 指那些没有遵从特定的 Java 对象模型、约定的 Java 对象;
- 它们不继承自另一个类, 也不实现任何接口;
- 就是最普通的 Java 类.

### 依赖注入

在实际开发中, 经常需要靠一堆类相互之间进行协作来完成特定的业务逻辑.

一个类中会需要依赖其他的类. 按照传统的做法，每个对象负责管理它所依赖的对象. 这会导致类与类之间的高耦合.

🌰 例如, 下面的代码中, `DamselRescuingKnight` 内部就依赖一个 `RescueDamselQuest` 类:

```java
public class DamselRescuingKnight implements Knight {

  private RescueDamselQuest quest;

  public DamselRescuingKnight() {
    this.quest = new RescueDamselQuest();
  }

  public void embarkOnQuest() {
    quest.embark();
  }
}
```

通过『 依赖注入 』，对象的依赖关系将由系统中负责协调各对象的第三方组件在创建对象的时候进行设定。对象无需自行创建或管理它们的依赖关系.

![2020-05-18-15-35-13](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-18-15-35-13.png)

依赖注入使得类与类之间变得『 松耦合 』

### 面向切面

**面向切面编程**（aspect-oriented programming，AOP）允许你把遍布应用各处的重复的功能, 抽离出来形成可重用的组件。

系统由许多不同的组件组成，每一个组件各负责一块特定功能。除了实现自身核心的功能之外，这些组件还经常承担着额外的职责。诸如日志、事务管理和安全这样的『 系统服务 』。

这些系统服务经常融入到自身具有核心业务逻辑的组件中去，这些系统服务通常被称为『 **横切关注点** 』，因为它们会跨越系统的多个组件。

这些融入在业务逻辑之中的系统服务，加重了代码的复杂性：

- 实现系统服务的代码将会重复出现在多个组件中，如果你要改变这些关注点的逻辑，必须修改各个模块中的相关实现。即使你把这些关注点抽象为一个独立的模块，其他组件只是调用它的方法，但方法的调用还是会重复出现在各个组件中。
- 各个组件, 因为这些与自身核心业务无关的系统服务而变得混乱。

下图 👇 展示这种系统功能散步在各个模块中时的情况:

![2020-05-18-18-43-34](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-18-18-43-34.png)

**AOP 能够使这些服务模块化，并以声明的方式将它们应用到它们需要影响的组件中去**。所造成的结果就是这些组件会具有更高的内聚性并且会更加关注自身的业务

我们可以把切面想象为覆盖在很多组件之上的一个外壳。应用是由那些实现各自业务功能的模块组成的。借助 AOP，可以使用各种功能层去包裹核心业务层。

![2020-05-18-18-46-04](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-18-18-46-04.png)

🌰 举例：

- 假设我们有一个吟游诗人类，和一个骑士类；
- 骑士执行任务前后，吟游诗人要进行歌颂；
- 也就是骑士执行 `embarkOnQuest` 方法前后，吟游诗人要分别执行 `singBeforeQuest` 和 `singAfterQuest`；

```java
// 吟游诗人
package sia.knights;

import java.io.PrintStream;

public class Minstrel {

  private PrintStream stream;

  public Minstrel(PrintStream stream) {
    this.stream = stream;
  }

  public void singBeforeQuest() {
    stream.println("Fa la la, the knight is so brave!");
  }

  public void singAfterQuest() {
    stream.println("Tee hee hee, the brave knight " +
    		"did embark on a quest!");
  }

}

// 骑士
package com.springinaction.knights;

public class BraveKnight implements Knight {

  private Quest quest;

  public BraveKnight(Quest quest) {
    this.quest = quest;
  }

  // 执行任务
  public void embarkOnQuest() throws QuestException {
    quest.embark();
  }

}
```

通过 Spring AOP 就可以很简单地实现这个功能：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:aop="http://www.springframework.org/schema/aop"
  xsi:schemaLocation="http://www.springframework.org/schema/aop
  http://www.springframework.org/schema/aop/spring-aop.xsd
  http://www.springframework.org/schema/beans
  http://www.springframework.org/schema/beans/spring-beans.xsd">

  <bean id="knight" class="sia.knights.BraveKnight">
    <constructor-arg ref="quest" />
  </bean>

  <bean id="quest" class="sia.knights.SlayDragonQuest">
    <constructor-arg value="#{T(System).out}" />
  </bean>

  <bean id="minstrel" class="sia.knights.Minstrel">
    <constructor-arg value="#{T(System).out}" />
  </bean>

  <aop:config>
    <aop:aspect ref="minstrel">
      <aop:pointcut id="embark"
          expression="execution(* *.embarkOnQuest(..))"/>

      <aop:before pointcut-ref="embark"
          method="singBeforeQuest"/>

      <aop:after pointcut-ref="embark"
          method="singAfterQuest"/>
    </aop:aspect>
  </aop:config>

</beans>
```

- 使用了 Spring 的 aop 配置命名空间把 Minstrel bean 声明为一个切面；
- 声明 embarkOnQuest() 方法为一个切入点，表达式的语法采用的是 AspectJ 的切点表达式语言；
- 声明在 embarkOnQuest() 方法执行前后调用 Minstrel 的 singBeforeQuest() 方法和 singAfterQuest() 方法；

通过 AOP，Minstrel 可以被应用到 BraveKnight 中，而 BraveKnight 不需要显式地调用它，BraveKnight 根本不需要知道 Minstrel 的存在；

### 使用模板消除样板代码

在开发中，为了实现通用的功能，我们经常需要一遍遍地写 “套路式的样板代码”，这些代码结构相同，甚至每行代码都一模一样。一个常见范例是使用 JDBC 访问数据库查询数据；

举例 🌰：

下面是一段用 JDBC 查询数据库去获得员工姓名和薪水的代码：

```java
public Employee getEmployeeById(long id) {

  Connection conn = null;
  PreparedStatement stmt = null;
  Result rs = null;

  try {
    // 创建数据库连接
    conn = dataSource.getConnection();
    // 创建语句对象，编写 SQL 语句
    stmt = conn.prepareStatment(
      "select id, firstname, lastname, salary from " +
      "employee where id=?");
    // 填入参数
    stmt.setLong(1, id);
    // 执行语句
    rs = stmt.executeQuery();
    Employee employee = null;
    // 处理结果
    if (rs.next()) {
      employee = new Employee();
      employee.setId(rs.getLong("id"));
      employee.setFirstName(rs.getString("firstname"));
      employee.setLastName(rs.getString("lastname"));
      employee.setSalary(rs.getBigDecimal("salary"));
    }
    return employee;
    // 捕捉异常
  } catch (SQLException e) {
  } finally {
    // 关闭连接
    if (rs != null) {
      try {
        rs.close();
      } catch (SQLException e) {
      }
    }

    if (stmt != null) {
      try {
        stmt.close();
      } catch (SQLException e) {
      }
    }

    if (conn != null) {
      try {
        conn.close();
      } catch (SQLException e) {
      }
    }
  }
  return null;
}
```

少量查询员工的代码淹没在一堆 JDBC 的样板式代码中。
上面代码中，需要经过如下流程：

- 创建数据库连接；
- 创建语句对象；
- 编写 SQL 语句；
- 填入 SQL 语句的参数；
- 执行 SQL 语句；
- 处理结果；
- 关闭连接；
- 除此之外，还需要捕获异常；

上面这堆流程，只有编写 SQL 语句和填入参数，是与业务逻辑有直接关系的，其他的都是执行 JDBC 操作时的样板代码（套路代码），和你实现其他 JDBC 操作时所写的代码几乎是相同。

除了 JDBC，使用 REST 服务通常也涉及大量的重复代码；

Spring 旨在通过模板封装来消除样板式代码。Spring 的 JdbcTemplate 使得执行数据库操作时，避免传统的 JDBC 样板代码成为了可能。

🌰 例子：

下面是使用 JdbcTemplate 来执行查询操作：

```java
public Employee getEmployeeById(long id) {
  return jdbcTemplate.queryForObject(
    "select id, firstname, lastname, salary " +
    "from employee where id=?",
    new RowMapper<Employee>() {
      public Employee mapRow(ResultSet rs, int rowNum) throws SQLException {
        Employee employee = new Employee();
        employee.setId(rs.getLong("id"));
        employee.setFirstName(rs.getString("firstname"));
        employee.setLastName(rs.getString("lastname"));
        employee.setSalary(rs.getBigDecimal("salary"));
        return employee;
      }
    },
    id);
}
```

使用 JdbcTemplate 执行查询，我们还需要提供：

- SQL 语句；
- 结果与实体类的映射关系；
- 参数；

### Spring 容器

上面展示了在基于 XML 的配置文件中如何配置 Bean 和切面，但这些文件是如何加载的呢？它们被加载到哪里去了？

在基于 Spring 的应用中，你的应用对象生存于 Spring 容器（container）中。**容器是 Spring 框架的核心, 它通过 DI 来管理构成应用的各个 Bean 对象**

Spring 容器负责创建对象，装配它们，配置它们并管理它们的整个生命周期.

Spring 容器并不是只有一个。Spring 自带了多个容器实现，可以归为两种不同的类型：

- **Bean 工厂**（由 `org.springframework.beans.factory.BeanFactory` 接口定义）是最简单的容器，提供基本的 DI 支持。
- **应用上下文**（由 `org.springframework.context.ApplicationContext` 接口定义）基于 `BeanFactory` 构建，并提供应用框架级别的服务，

我们可以在 bean 工厂和应用上下文之间任选一种，但 Bean 工厂对大多数应用来说往往太底层了，在开发中我们多数选用应用上下文；

---

Spring 自带了多种类型的应用上下文。下面罗列的几个是你最有可能遇到的：

- `AnnotationConfigApplicationContext`：从一个或多个基于 Java 的配置类中加载 Spring 应用上下文。
- `AnnotationConfigWebApplicationContext`：从一个或多个基于 Java 的配置类中加载 Spring Web 应用上下文。
- `ClassPathXmlApplicationContext`：从类路径下的一个或多个 XML 配置文件中加载上下文定义，把应用上下文的定义文件作为类资源。
- `FileSystemXmlapplicationcontext`：从文件系统下的一个或多个 XML 配置文件中加载上下文定义。
- `XmlWebApplicationContext`：从 Web 应用下的一个或多个 XML 配置文件中加载上下文定义。

🌰 示例：

下面展示了使用 `ClassPathXmlApplicationContext` 从应用的类路径下加载配置文件，然后创建应用上下文：

```java
ClassPathXmlApplicationContext.java
ApplicationContext context = new ClassPathXmlApplicationContext("knight.xml");
```

应用上下文准备就绪之后，我们就可以调用上下文的 `getBean()` 方法从 Spring 容器中获取 Bean 对象。

### Bean 的生命周期

在传统的 Java 应用中，实例的生命周期很简单。使用 Java 关键字 `new` 进行类的实例化，然后该实例就可以使用了。一旦该实例不再被使用，则由 Java 自动进行垃圾回收。

相比之下，Spring 容器中的 bean 的生命周期就显得相对复杂多了。下图展示了 Bean 装载到 Spring 应用上下文中的一个典型的生命周期过程：

![2020-3-25-15-45-21.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-25-15-45-21.png)

在 bean 准备就绪之前，bean 工厂执行了若干启动步骤：

1. Spring 对 Bean 进行实例化；
2. Spring 将值和对其他 Bean 的引用注入到 Bean 对应的属性中；
3. 如果 bean 实现了 `BeanNameAware` 接口，Spring 将 bean 的 ID 传递给 `setBeanName()` 方法；
4. 如果 bean 实现了 `BeanFactoryAware` 接口，Spring 将调用 `setBeanFactory()` 方法，将 `BeanFactory` 容器实例传入；
5. 如果 bean 实现了 `ApplicationContextAware` 接口，Spring 将调用 `setApplicationContext()` 方法，将 bean 所在的应用上下文的引用传入进来；
6. 如果 bean 实现了 `BeanPostProcessor` 接口，Spring 将调用它们的 `postProcessBefore-Initialization()` 方法；
7. 如果 bean 实现了 `InitializingBean` 接口，Spring 将调用它们的 `afterPropertiesSet()` 方法。类似地，如果 bean 使用 `initmethod` 声明了初始化方法，该方法也会被调用；
8. 如果 bean 实现了 `BeanPostProcessor` 接口，Spring 将调用它们的 `postProcessAfter-Initialization()` 方法；
9. 此时，bean 已经准备就绪，可以被应用程序使用了，它们将一直驻留在应用上下文中，直到该应用上下文被销毁；
10. 如果 bean 实现了 `DisposableBean` 接口，Spring 将调用它的 `destroy()` 接口方法。

### Spring 模块

在 Spring 4.0 中，Spring 框架的发布版本包括了 20 个不同的模块，这些模块依据其所属的功能可以划分为 6 类不同的功能。

![2020-3-25-16-21-35.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-25-16-21-35.png)

这些模块为开发企业级应用提供了所需的一切。但是你也不必将应用建立在整个 Spring 框架之上，你可以自由地选择适合自身应用需求的 Spring 模块；当 Spring 不能满足需求时，完全可以考虑其他选择。

让我们逐一浏览 Spring 的模块，看看它们是如何构建起 Spring 整体蓝图的：

**Spring 核心容器**：

容器是 Spring 框架最核心的部分，它管理着 Spring 应用中 bean 的创建、配置和管理。所有的 Spring 模块都构建于核心容器之上。

该模块也提供了许多企业服务，例如 Email、JNDI 访问、EJB 集成和调度。

**Spring 的 AOP 模块**：

在 AOP 模块中，Spring 对面向切面编程提供了丰富的支持。这个模块是 Spring 应用系统中开发切面的基础。

**数据访问与集成**：

使用 JDBC 编写代码通常会导致大量的样板式代码。Spring 的 JDBC 和 DAO（Data Access Object）模块抽象了这些样板式代码，使我们的数据库代码变得简单明了，还可以避免因为关闭数据库资源失败而引发的问题。

该模块在多种数据库服务的错误信息之上构建了一个语义丰富的通用的异常层。

Spring 的 ORM 模块建立在对 DAO 的支持之上，并为多个 ORM 框架提供了一种构建 DAO 的简便方式。

Spring 的事务管理支持所有的 ORM 框架以及 JDBC。

本模块同样包含了在 JMS（Java Message Service）之上构建的 Spring 抽象层，它会使用消息以异步的方式与其他应用集成。

**Web 与远程调用**：

MVC（Model-View-Controller）模式是一种普遍被接受的构建 Web 应用的方法，它可以帮助用户将界面逻辑与应用逻辑分离。

Spring 的 Web 和远程调用模块自带了一个强大的 MVC 框架，有助于在 Web 层提升应用的松耦合水平。

除了面向用户的 Web 应用，该模块还提供了多种构建与其他应用交互的远程调用方案。Spring 远程调用功能集成了 RMI（Remote Method Invocation）、Hessian、Burlap、JAX-WS，同时 Spring 还自带了一个 远程调用框架：HTTP invoker。Spring 还提供了暴露和使用 REST API 的良好支持。

**Instrumentation**：

Spring 的 Instrumentation 模块提供了为 JVM 添加代理（agent）的功能。 在本书中，我们不会介绍该模块。

**测试**：

Spring 提供了测试模块以致力于 Spring 应用的测试。

### Spring 生态

Spring 框架关注于通过 DI、AOP 和消除样板式代码来简化企业级 Java 开发。在 Spring 框架之外还存在一个构建在核心框架之上的庞大生态圈。它将 Spring 扩展到不同的领域，例如 Web 服务、REST、移动开发以及 NoSQL。

## 装配 Bean

创建对象实例之间依赖关系的行为称为『 **装配** wiring 』，这也是依赖注入（DI）的本质。

下面 👇 介绍使用 Spring 装配 Bean 的基础知识:

作为开发人员，你需要告诉 Spring 要创建哪些 Bean 并且如何将其装配在一起。在 Spring 中装配 bean 有多种方式。这里介绍一下配置 Spring 容器最常见的三种方法：

- **在 XML 中进行显式配置**;
- **在 Java 中进行显式配置**;
- **通过注解, 进行自动装配**;

可以多种配置方法组合使用.

> 建议: 尽可能地使用注解配置的机制。显式配置越少越好。

### XML 配置

👇 下面是一个 XML 配置示例：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.springframework.org/schema/beans
  http://www.springframework.org/schema/beans/spring-beans.xsd
  http://www.springframework.org/schema/context">
  <!-- configuration details go here />
</beans>
```

在配置文件的顶部声明多个 XML 模式（XSD）文件，这些文件定义了配置 Spring 的 XML 元素。

用来装配 Bean 的最基本的 XML 元素 `<beans>` 包含在 spring-beans 模式之中，在上面这个 XML 文件中，它被定义为根命名空间。是该模式中的一个元素，它是所有 Spring 配置文件的根元素。

要在基于 XML 的 Spring 配置中声明一个 bean，我们要使用 spring-beans 模式中的一个元素：`<bean>`

```xml
<bean id="compactDisc" class="soundsystem.SgtPeppers" />
```

- 这里声明了一个很简单的 Bean，创建这个 Bean 的类通过 `class` 属性来指定的，并且要使用++全限定的类名++。
- 通过 `id` 属性可以给 Bean 设置一个名字;

---

在向其他的 Bean 中注入这个 Bean 的时候，会有多种可选的配置方案和风格:

#### 构造器注入

假设有一个 CDPlayer Bean ，它有一个接受 CompactDisc 类型的构造器。

一种方法是通过 **`<constructor-arg>`** 元素进行构造器注入:

```xml
<bean id="cdPlayer" class="soundsystem.CDPlayer">
  <constructor-arg ref="compactDisc">
</bean>
```

当 Spring 遇到这个 `<bean>` 元素时，它会创建一个 CDPlayer 实例。`<constructor-arg>` 元素会告知 Spring 要将一个 ID 为 compactDisc 的 bean 引用传递到 CDPlayer 的构造器中。

---

作为替代的方案，你也可以使用 Spring 的 **`c-`** 命名空间:

- `c-` 命名空间是在 Spring 3.0 中引入的;
- 它是在 XML 中更为简洁地描述构造器参数的方式;

要使用它的话，必须要在 XML 文件的顶部声明其模式;

```java
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
  xmlns:c="http://www.springframework.org/schema/c"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.springframework.org/schema/beans
  http://www.springframework.org/schema/beans/spring-beans.xsd" >

  ...

</beans>
```

在 `c-` 命名空间和模式声明之后，我们就可以使用它来声明构造器参数了：

```java
<bean id="cdPlayer" class="soundsystem.CDPlayer" c:cd-ref="compactDisc" />
```

![2020-3-25-17-5-42.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-25-17-5-42.png)

- 属性名以 `c:` 开头，也就是命名空间的前缀;
- 接下来就是要装配的构造器参数名;
- 在此之后是 `-ref` + Bean 名字，这是一个命名的约定，它会告诉 Spring，装配进来的是一个 Bean 的引用，这个 Bean 的名字是 `compactDisc`;

---

也可以参数的名称替换成『 参数的索引 』:

```xml
<bean id="cdPlayer" class="soundsystem.CDPlayer" c:_0-ref="compactDisc" />
```

---

👆 上面展示了如何将对象的引用装配到依赖于它们的其他对象之中。

但有时候，我们需要做的只是用一个字面量值来配置对象。

```xml
<bean id="compactDisc" class="soundsystem.BlankDisc">
    <constructor-arg value="Sgt. Pepper's Lonely Hearts Club Band" />
    <constructor-arg value="The Beatles" />
</bean>
```

通过 **`value`** 属性传入一个基本类型的值到构造器中。

如果要使用 `c-` 命名空间的话，那配置代码如下；

```xml
<bean id="compactDisc" class="soundsystem.BlankDisc"
      c:_title="Sgt. Pepper's Lonely Hearts Club Band"
      c:_artist="The Beatles" />
```

装配字面量与装配引用的区别在于属性名中去掉了 `-ref` 后缀。

---

有时候我们需要给构造器传入的参数的是 **`null`**。通过以下配置来实现：

```xml
<bean id="compactDisc" class="soundsystem.BlankDisc">
    <constructor-arg value="Sgt. Pepper's Lonely Hearts Club Band" />
    <constructor-arg value="The Beatles" />
    <constructor-arg><null/></constructor-arg>
</bean>
```

#### 向构造器注入集合

假如我们的参数是集合类型的，可以采取如下的方式配置：

```xml
<bean id="compactDisc"
      class="soundsystem.BlankDisc"
      c:_0="Sgt. Pepper's Lonely Hearts Club Band"
      c:_1="The Beatles">
  <constructor-arg>
    <list>
      <value>Sgt. Pepper's Lonely Hearts Club Band</value>
      <value>With a Little Help from My Friends</value>
      <value>Lucy in the Sky with Diamonds</value>
      <value>Getting Better</value>
      <value>Fixing a Hole</value>
      <!-- ...other tracks omitted for brevity... -->
    </list>
  </constructor-arg>
</bean>
```

- `<list>` 元素是 `<constructor-arg>` 的子元素，将一个 `java.util.List` 类型的列表传入到构造器中;
- `<value>` 元素用来声明列表中的基本类型值元素;

使用 `<ref>` 元素声明值为 Bean 对象引用的元素:

- `bean` 属性指定对应的 Bean 的名字;

```xml
<bean id="beatlesDiscography"
        class="soundsystem.Discography" >
  <constructor-arg>
    <list>
      <ref bean="sgtPeppers" />
      <ref bean="whiteAlbum" />
      <ref bean="hardDaysNight" />
      <ref bean="revolver" />
      ...
    </list>
  </constructor-arg>
</bean>
```

使用 `<set>` 元素声明 `java.util.Set` 类型的集合，所有重复的值都会被忽略掉，元素之间无序:

```xml
<bean id="compactDisc" class="soundsystem.BlankDisc" >
  <constructor-arg value="Sgt. Pepper's Lonely Hearts Club Band" />
  <constructor-arg value="The Beatles" />
  <constructor-arg>
    <set>
      <value>Sgt. Pepper's Lonely Hearts Club Band</value>
      <value>With a Little Help from My Friends</value>
      <value>Lucy in the Sky with Diamonds</value>
      <value>Getting Better</value>
      <value>Fixing a Hole</value>
      <!-- ...other tracks omitted for brevity... -->
    </set>
  </constructor-arg>
</bean>
```

---

在装配集合方面，`<constructor-arg>` 比 `c-` 命名空间的属性更有优势。目前，使用 `c-` 命名空间的属性无法实现装配集合的功能。

#### 通过属性的 Setter 方法注入

下面展示一下如何使用 Spring XML 实现 Bean 对象的属性注入:

```xml
<bean id="cdPlayer" class="soundsystem.CDPlayer" >
  <property name="compactDisc" ref="compactDisc" />
</bean>
```

它引用了 ID 为 `compactDisc` 的 bean（通过 `ref` 属性），并将其注入到 `compactDisc` 属性中（通过`setCompactDisc()` 方法）

- 通过 **`<property>`** 标签进行属性注入;
- `ref` 指定注入进行的 Bean 名称;
- `name` 指定当前 Bean 对应的属性名;

---

Spring 提供了 **`p-`** 命名空间，作为 `<property>` 元素的替代方案。

为了启用 `p-` 命名空间，必须要在 XML 文件中进行声明：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:p="http://www.springframework.org/schema/p"
  xsi:schemaLocation="http://www.springframework.org/schema/beans
  http://www.springframework.org/schema/beans/spring-beans.xsd">
  ...
</beans>
```

使用 `p-` 命名空间，按照以下的方式装配 `compactDisc` 属性：

```xml
<bean id="cdPlayer" class="soundsystem.CDPlayer" p:compactDisc-ref="compactDisc" />
```

注入字面量和集合的方法，都和通过构造器注入方法差不多：

```xml
<!-- 使用 property 标签 -->
<bean id="compactDisc" class="soundsystem.BlankDisc">
  <property name="title" value="Sgt. Pepper's Lonely Hearts Club Band" />
  <property name="artist" value="The Beatles">
  <property name="tracks">
    <list>
      <value>Sgt. Pepper's Lonely Hearts Club Band</value>
      <value>With a Little Help from My Friends</value>
      <value>Lucy in the Sky with Diamonds</value>
      <value>Getting Better</value>
      <value>Fixing a Hole</value>
      <!-- ...other tracks omitted for brevity... -->
    </list>
  </property>
</bean>
```

```xml
<!-- 使用 p- 命名空间 -->
<bean id="compactDisc" class="soundsystem.BlankDisc"
      p:title="Sgt. Pepper's Lonely Hearts Club Band"
      p:artist="The Beatles" >
  <property name="tracks">
    <list>
      <value>Sgt. Pepper's Lonely Hearts Club Band</value>
      <value>With a Little Help from My Friends</value>
      <value>Lucy in the Sky with Diamonds</value>
      <value>Getting Better</value>
      <value>Fixing a Hole</value>
      <!-- ...other tracks omitted for brevity... -->
    </list>
  </property>
</bean>
```

---

无论是 `c-` 还是 `p-` 命名空间，我们都不能在后面直接定义一个集合。

但是我们可以用 Spring 提供的 **`util-`** 命名空间中的一些功能来创建一个集合 Bean，然后通过 `-ref` 后缀来用 `c-` 和 `p-` 注入集合；

例如：

```xml
<util:list id="trackList">
  <value>Sgt. Pepper's Lonely Hearts Club Band</value>
  <value>With a Little Help from My Friends</value>
  <value>Lucy in the Sky with Diamonds</value>
  <value>Getting Better</value>
  <value>Fixing a Hole</value>
  <!-- ...other tracks omitted for brevity... -->
</util:list>

<bean id="compactDisc" class="soundsystem.BlankDisc"
      p:title="Sgt. Pepper's Lonely Hearts Club Band"
      p:artist="The Beatles"
      p:tracks-ref="trackList" />
```

`<util:list>` 只是 `util-` 命名空间中的多个元素之一：

![2020-3-25-17-38-7.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-25-17-38-7.png)

### 注解配置

#### @Component 注解 & 自动扫描

通过注解我们可以省去写一堆显示的配置，Spring 可以自动去发现 Bean；

通过在类的上面加上 `@Component` 注解，Spring 就会把这个类当做一个 Bean 处理；

```java
package soundsystem;

import org.springframework.stereotype.Component;

@Component
public class SgtPeppers implements CompactDisc {

  private String title = "Sgt. Pepper's Lonely Hearts Club Band";
  private String artist = "The Beatles";

  public void play() {
    System.out.println("Playing " + title + " by " + artist);
  }
}
```

但是组件扫描默认是不启用的。我们还需要显式配置一下 Spring， 从而命令它去寻找带有 @Component 注解的类，并为其创建 bean。

在 XML 配置文件中，可以使用 Spring context 命名空间的元素。来进行配置：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:context="http://www.springframework.org/schema/context"
  xmlns:c="http://www.springframework.org/schema/c"
  xmlns:p="http://www.springframework.org/schema/p"
  xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
		http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">

  <context:component-scan base-package="soundsystem" />

</beans>
```

上面的配置表明，Spring 会扫描 soundsystem 包下面的所有类；

---

Spring 应用上下文中所有的 bean 都会给定一个 ID。在前面的例子中，尽管我们没有明确地为 SgtPeppersbean 设置 ID，但 Spring 会根据类名为其指定一个 ID。

具体来讲，这个 bean 所给定的 ID 为 sgtPeppers，也就是将类名的第一个字母变为小写。

如果想为这个 bean 设置不同的 ID，你所要做的就是将期望的 ID 作为值传递给 @Component 注解。

```java
@Componet("lonelyHeartsClub")
public class SgtPeppers implements CompactDisc {
  ......
}
```

#### @Autowired 自动装配

自动装配就是让 Spring 自动满足 bean 依赖的一种方法，在满足依赖的过程中，会在 Spring 应用上下文中寻找匹配某个 bean 需求的其他 bean。

为了声明要进行自动装配，我们可以借助 Spring 的 @Autowired 注解。

```java
package soundsystem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CDPlayer implements MediaPlayer {
  private CompactDisc cd;

  @Autowired
  public CDPlayer(CompactDisc cd) {
    this.cd = cd;
  }

  public void play() {
    cd.play();
  }

}
```

它的构造器上添加了 @Autowired 注解，这表明当 Spring 创建 CDPlayerbean 的时候，会通过这个构造器来进行实例化并且会传入一个可设置给 CompactDisc 类型的 bean，将一个 CompactDisc 注入到 CDPlayer 之中。

@Autowired 注解不仅能够用在构造器上，还能用在属性的 Setter 方法上。

```java
@Autowired
public void setCompactDisc(CompactDisc cd){
  this.cd = cd;
}
```

Setter 方法并没有什么特殊之处。@Autowired 注解可以用在类的任何方法上。假设 CDPlayer 类有一个 insertDisc() 方法， 那么 @Autowired 能够像在 setCompactDisc() 上那样，发挥完全相同的作用：

假如有且只有一个 bean 匹配依赖需求的话，那么这个 bean 将会被装配进来。如果没有匹配的 bean，那么在应用上下文创建的时候，Spring 会抛出 一个异常。为了避免异常的出现，你可以将 @Autowired 的 required 属性设置为 false：

将 required 属性设置为 false 时，Spring 会尝试执行自动装配，但是如果没有匹配的 bean 的话，Spring 将会让这个 bean 处于未装配的状态。未装配的参数的值为 null。

```java
@Autowired(required=false)
public CDPlayer(CompactDisc cd) {
  this.cd = cd;
}
```

如果有多个 bean 都能满足依赖关系的话，Spring 将会抛出一个异常，表明没有明确指定要选择哪个 bean 进行自动装配。

### Java 类配置

尽管在很多场景下通过组件扫描和自动装配实现 Spring 的自动化配置，但有时候自动化配置的方案行不通，因此需要明确配置 Spring。

比如说，你想要将第三方库中的组件装配到你的应用中，在这种情况下，是没有办法在它的类上添加 @Component 和 @Autowired 注解的，因此就不能使用自动化装配的方案了。

在进行显式配置的时候，有两种可选方案：Java 和 XML。在这节中，我们将会学习如何使用 Java 配置。

在进行显式配置时，JavaConfig 是更好的方案， 因为它更为强大、类型安全并且对重构友好。为它就是 Java 代码， 就像应用程序中的其他 Java 代码一样。

但与其他的 Java 类不同的是，JavaConfig 是配置代码。这意味着它不应该包含任何业务逻辑，JavaConfig 也不应该侵入到业务逻辑代码之中。

尽管不是必须的，但通常会将 JavaConfig 放到单独的包中，使它与其他的应用程序逻辑分离开来。

#### @Configuration 注解 & @Bean 注解

通过 `@Configuration` 注解表明这个类是一个配置类。

要在 JavaConfig 中声明 bean，我们需要编写一个方法，这个方法会创建所需类型的实例，然后给这个方法添加 `@Bean` 注解。

@Bean 注解会告诉 Spring 这个方法将会返回一个对象，该对象要注册为 Spring 应用上下文中的 bean。方法体中包含了最终产生 bean 实例的逻辑。

```java
import org.spingframework.context.annotation.Configuration;

@Configuration
public class CDPlayerConfig {
  @Bean
  public CompactDisc sgtPeppers() {
    return new SgtPeppers();
  }
}
```

默认情况下，bean 的 ID 与带有 @Bean 注解的方法名是一样的。在本例中，bean 的名字将会是 sgtPeppers。如果你想为其设置成一个不同的名字的话，可以通过 name 属性指定一个不同的名字。

```java
@Bean(name="lonelyHeartsClubBand")
public CompactDisc sgtPeppers() {
  return new SgtPeppers();
}
```

在这个使用了 @Bean 的注解中方法中，你可以自由地编写创建 Bean 实例的逻辑。比方说，在一组 CD 中随机选择一个 CompactDisc 来播放：

```java
@Bean
public CompactDisc randomBeatlesCD() {
  int choice = (int) Math.floor(Math.random() * 4);
  if (choice == 0) {
    return new SgtPeppers();
  } else if (choice == 1) {
    return new WhiteAlbum();
  } else if (choice == 2) {
    return new HardDaysNight();
  } else {
    return new Revolver();
  }
}
```

#### 在 JavaConfig 中装配 Bean

在 JavaConfig 中装配 bean 的最简单方式就是引用创建 bean 的方法。例如，下面就是一种声明 CDPlayer 的可行方案：

```java
@Bean
public CDPlayer cdPlayer() {
  return new CDPlayer(sgtPeppers());
}
```

上面代码中，看似是调用了 `sgtPeppers()` 方法，但是并不是每次 `sgtPeppers()` 都实际被调用了，并创建一个新的实例返回。因为 `sgtPeppers()` 方法上添加了 `@Bean` 注解， Spring 将会拦截所有对它的调用，并返回已经创建好的 Bean 实例。

```java
@Bean
public CDPlayer cdPlayer() {
  return new CDPlayer(sgtPeppers());
}

@Bean
public CDPlayer anotherCDPlayer() {
  return new CDPlayer(sgtPeppers());
}
```

上面两次调用 `sgtPeppers()` 返回的实例是同一个实例。默认情况下，Spring 中的 bean 都是单例的。

可以看到，通过调用方法来引用 bean 的方式有点令人困惑。其实还有一种理解起来更为简单的方式：

```java
@Bean
public CDPlayer cdPlayer(CompactDisc compactDisc) {
  return new CDPlayer(compactDisc);
}
```

在这里，cdPlayer() 方法请求一个 CompactDisc 作为参数。当 Spring 调用 cdPlayer() 创建 CDPlayerbean 的时候，它会自动装配一个 CompactDisc 到配置方法之中。

我们在这里使用 CDPlayer 的构造器实现了 DI 功能，如果你想通过 Setter 方法注入 CompactDisc 的话，那么代码看起来应该是这样的：

```java
@Bean
public CDPlayer cdPlayer(CompactDisc compactDisc) {
  CDPlayer cdPlayer = new CDPlayer();
  cdPlayer.setCompactDisc(compactDisc);
  return cdPlayer;
}
```

#### @ComponentScan 注解

通过在配置类之上使用 @ComponentScan 注解可以指定自动扫描包下面的 Bean。

```java
@Configuration
@ComponentScan(basePackages="soundsystem")
public class CDPlayerConfig { }
```

在 @ComponentScan 的 basePackages 属性中可以指明想要扫描包的名称。

如果没有为 @ComponentScan 设置任何属性。这意味着，按照默认规则，它会以配置类所在的包作为基础包。

如果你想扫描多个包，可以将 basePackages 属性设置为一个数组：

```java
@Configuration
@ComponentScan(basePackages={"soundsystem", "video"})
public class CDPlayerConfig { }
```

也可以省略 basePackages，简写成：

```java
@ComponentScan("soundsystem")

// ---------------------

@ComponentScan("soundsystem", "video")
```

### 混合使用多种配置方式

#### 在配置类中引入其他配置

假设我们有两个配置类，通过 @import 注解可以将一个配置类导入另一个配置类中：

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@Import(CDConfig.class)
public class CDPlayerConfig {

  @Bean
  public CompactDisc compactDisc() {
    return new SgtPeppers();
  }

}
```

一个更好的方法是，创建一个更高级别的 SoundSystemConfig，在这个类中使用 @Import 将两个配置类组合在一起：

```java
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({CDPlayerConfig.class, CDConfig.class})
public class CDPlayerConfig {
}
```

通过 @ImportResource 注解可以引入 XML 配置文件：

```java
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.ImportResource;

@Configuration
@Import(CDPlayerConfig.class)
@ImportResource("classpath:cdconfig.xml")
public class SoundSystemConfig {

}
```

#### 在 XML 中引入其他配置

使用 `<import>` 元素可以导入其他的 XML 配置文件。

使用 `<bean>` 元素将配置类导入到 XML 配置中。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:c="http://www.springframework.org/schema/c"
  xsi:schemaLocation="http://www.springframework.org/schema/beans
  http://www.springframework.org/schema/beans/spring-beans.xsd">

  <bean class="soundsystem.CDConfig" />

  <import resource="cdplayer-config.xml" />

</beans>
```

## 高级装配

## 面向切面 AOP

在软件开发中，散布于应用中多处的功能被称为横切关注点（crosscutting concern）。通常来讲，这些横切关注点从概念上是与应用的业务逻辑相分离的，但是传统开发方式中，这些横切关注点往往直接嵌入到应用的业务逻辑之中。

把这些横切关注点与业务逻辑相分离正是面向切面编程（AOP）所要解决的问题。

### AOP 术语

![2020-3-26-0-10-38.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-26-0-10-38.png)

**通知（Advice）**

在 AOP 术语中，通知定义了切面在何时，执行什么操作；

Spring 切面可以应用 5 种类型的通知：

- 前置通知（Before）：在目标方法被调用之前调用通知功能；
- 后置通知（After）：在目标方法完成之后调用通知，此时不会关心方法的输出是什么；
- 返回通知（After-returning）：在目标方法成功执行之后调用通知；
- 异常通知（After-throwing）：在目标方法抛出异常后调用通知；
- 环绕通知（Around）：通知包裹了被通知的方法，在被通知的方法调用之前和调用之后执行自定义的行为。

**连接点（Join Point）**

连接点是在应用执行过程中能够插入通知的一个点。这个点可以是调用方法时、抛出异常时、甚至修改一个字段时。通知可以利用这些点插入到应用的正常流程之中，并添加新的行为。

**切点（Poincut）**

如果说通知定义了切面何时做何事的话，那么切点定义了何处；

切点的定义会匹配通知所要织入的一个或多个连接点。

**切面（Aspect）**

切面是通知和切点的结合。通知和切点共同定义了切面的全部内容

**引入（Introduction）**

引入允许我们向现有的类添加新方法或属性。可以在无需修改这些现有的类的情况下，让它们具有新的行为和状态。

**织入（Weaving）**

织入是把切面应用到目标对象并创建新的代理对象的过程。切面在指定的连接点被织入到目标对象中。

### Spring 中的 AOP

Spring 提供了 4 种类型的 AOP 支持：

- 基于代理的经典 Spring AOP；
- 纯 POJO 切面；
- @AspectJ 注解驱动的切面；
- 注入式 AspectJ 切面（适用于 Spring 各版本）。

前三种都是 Spring AOP 实现的变体，Spring AOP 构建在动态代理基础之上，因此，Spring 对 AOP 的支持局限于方法拦截。

现在 Spring 提供了更简洁和干净的面向切面编程方式。引入了简单的声明式 AOP 和基于注解的 AOP 之后，Spring 经典的 AOP 看起来就显得非常笨重和过于复杂，后面不会再介绍经典的 Spring AOP。

借助 Spring 的 aop 命名空间，我们可以将纯 POJO 转换为切面。实际上，这些 POJO 只是提供了满足切点条件时所要调用的方法。虽然这种技术需要 XML 配置，但这的确是声明式地将对象转换为切面的简便方式。

Spring 借鉴了 AspectJ 的切面，以提供注解驱动的 AOP。本质上，它依然是 Spring 基于代理的 AOP，但是编程模型几乎与编写成熟的 AspectJ 注解切面完全一致。这种 AOP 风格的好处在于能够不使用 XML 来完成功能。

与 Spring AOP 相比，虽然 AspectJ 现在支持基于注解的切面，但 AspectJ 最初是以 Java 语言扩展的方式实现的。这种方式有优点也有缺点。通过特有的 AOP 语言，我们可以获得更强大和细粒度的控制，以及更丰富的 AOP 工具集，但是我们需要额外学习新的工具和语法。

通过代理类，Spring 在运行期把切面织入到 Spring 管理的 bean 中。代理类封装了目标类，并拦截被通知方法的调用，再把调用转发给真正的目标 bean。

![2020-3-26-0-36-55.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-26-0-36-55.png)

各种 AOP 方案可以支持的连接点模型粒度各有区别，因为 Spring 基于动态代理，所以 Spring 只支持方法连接点。

AspectJ 和 JBoss，除了方法切点，它们还提供了字段和构造器接入点。Spring 缺少对字段连接点的支持，无法让我们创建细粒度的通知，例如拦截对象字段的修改。而且它不支持构造器连接点，我们就无法在 bean 创建时应用通知。

### 编写切点

切点用于准确定位应该在什么地方应用切面的通知。通知和切点是切面的最基本元素。

在 Spring AOP 中，要使用 AspectJ 的切点表达式语言来定义切点。但 Spring 仅支持 AspectJ 切点指示器（pointcut designator）的一个子集。

下图是 Spring AOP 所支持的 AspectJ 切点指示器。

![2020-3-26-0-42-26.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-26-0-42-26.png)

如上所展示的这些 Spring 支持的指示器时，注意只有 execution 指示器是实际执行匹配的，而其他的指示器都是用来限制匹配的。

这说明 execution 指示器是我们在编写切点定义时最主要使用的指示器。在此基础上，我们使用其他指示器来限制所匹配的切点。

🌰 下面举例如何去定义切点：

```java
public interface Performance {
  public void perform();
}
```

假设我们想编写 Performance 的 perform() 方法触发的通知。

下面这个表达式能够设置当 perform() 方法执行时触发通知的调用。

![2020-3-26-0-46-59.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-26-0-46-59.png)

使用 execution() 指示器选择 Performance 的 perform() 方法。方法表达式以 "\*" 号开始，表明了我们不关心方法返回值的类型。然后，我们指定了全限定类名和方法名。对于方法参数列表，我们使用两个点号（..）表明切点要选择任意的 perform() 方法，无论该方法的入参是什么。

---

现在假设我们需要配置的切点仅匹配 concert 包。在此场景下，可以使用 within() 指示器来限制匹配。

![2020-3-26-0-48-36.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-26-0-48-36.png)

---

Spring 还引入了一个新的 bean() 指示器，它允许我们在切点表达式中使用 bean 的 ID 来标识 bean。bean() 使用 bean ID 或 bean 名称作为参数来限制切点只匹配特定的 bean。

```java
execution(* concert.Performance.perform()) and bean('woodstock')
```

在这里，我们希望在执行 Performance 的 perform() 方法时应用通知，但限定 bean 的 ID 为 woodstock。

### 使用注解声明切面

通过 @Aspect 注解定义一个切面：

```java
import org.aspect.lang.annotation.AfterReturning;
import org.aspect.lang.annotation.AfterThrowing;
import org.aspect.lang.annotation.Aspect;
import org.aspect.lang.annotation.Before;

@Aspect
public class Audience {

  @Before("execution(** concert.Performance.perform(..))")
  public void silenceCellPhones() {
    System.out.println("Silencing cell phones");
  }

  @Before("execution(** concert.Performance.perform(..))")
  public void takeSeats() {
    System.out.println("Taking seats");
  }

  @AfterReturning("execution(** concert.Performance.perform(..))")
  public void applause() {
    System.out.println("CLAP CLAP CLAP!!!");
  }

  @AfterThrowing("execution(** concert.Performance.perform(..))")
  public void demandRefund() {
    System.out.println("Demanding a refund");
  }
}
```

Audience 有四个方法，定义了一个观众在观看演出时可能会做的事情。这些方法都使用了通知注解来表明它们应该在什么时候调用。

![2020-3-26-1-14-27.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-26-1-14-27.png)

所有的这些注解都给定了一个切点表达式作为它的值，来表示这些通知会应用到什么连接点上。在这个示例中，通知它会在 Performance 的 perform() 方法执行时的各个情况下触发。

相同的切点表达式我们重复了四遍，很不好维护，也不简洁。如果我们只定义这个切点一次，然后每次需要的时候引用它，那么这会是一个很好的方案。

@Pointcut 注解能够定义可重用的切点。

```java
@Aspect
public class Audience {

  @Pointcut("execution(** concert.Performance.perform(..))")
  public void performce() { }

  @Before("performce()")
  public void silenceCellPhones() {
    System.out.println("Silencing cell phones");
  }

  @Before("performce()")
  public void takeSeats() {
    System.out.println("Taking seats");
  }

  @AfterReturning("performce()")
  public void applause() {
    System.out.println("CLAP CLAP CLAP!!!");
  }

  @AfterThrowing("performce()")
  public void demandRefund() {
    System.out.println("Demanding a refund");
  }
}
```

@Pointcut 注解设置的值是一个切点表达式，就像之前在通知注解上所设置的那样。通过在 performance() 方法上添加 @Pointcut 注解，这样就可以在任何的切点表达式中使用 performance() 来替代传入注解的切点表达式了。

performance() 方法的实际内容并不重要，在这里它实际上应该是空的。其实该方法本身只是一个标识，供 @Pointcut 注解依附。

#### 开启代理

定义好一个切面后，还需要在 Spring 配置中开启对于切面类的代理；

如果你使用 JavaConfig 的话，可以在配置类的类级别上通过使用 @EnableAspectJAutoProxy 注解启用自动代理功能。

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Component;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@Configuration
@EnableAspectJAutoProxy
@Component
public class ConcertConfig {

  @Bean
  public Audience audience() {
    return new Audience();
  }
}
```

假如你在 Spring 中要使用 XML 来装配 bean 的话，那么需要使用 Spring aop 命名空间中的 `<aop:aspectj-autoproxy>` 元素。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:context="http://www.springframework.org/schema/context"
  xmlns:context="http://www.springframework.org/schema/aop"
  xsi:schemaLocation="
    http://www.springframework.org/schema/aop
    http://www.springframework.org/schema/aop/spring-aop.xsd
    http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans.xsd
    http://www.springframework.org/schema/context
    http://www.springframework.org/schema/context/spring-context.xsd" >

  <context:component-scan base-package="context" />

  <aop:aspectj-autoproxy />

  <bean class="concert.Audience" />

</beans>
```

AspectJ 自动代理都会为所有使用 @Aspect 注解声明的切面内的切点所匹配的 Bean 创建一个代理。

#### 处理通知中的参数

到目前为止，我们的切面都很简单，没有任何参数。

在切点表达式中使用 args() 限定符可以把传入连接点方法的参数，也传递到通知中去；

```java
@Aspect
public class TrackCounter {

  private Map<Integer, Integer> trackCounts = new HashMap<>();

  @Pointcut("execution(* soundsystem.CompactDisc.playTrack(int) " +
            "&& args(trackNumber)")
  public void trackPlayed(int trackNumber) { }

  @Before("trackPlayed(trackNumber)")
  public void countTrack(int trackNumber) {
    int currentCount = getPlayCount(trackNumber);
    trackCounts.put(trackNumber, currentCount + 1);
  }

  public int getPlayCount(int trackNumber) {
    return trackCounts.containsKey(trackNumber) ? trackCounts.get(trackNumber) : 0;
  }
}
```

![2020-3-26-1-34-23.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-26-1-34-23.png)

它表明传递给 playTrack() 方法的 int 类型参数也会传递到通知中去。参数的名称 trackNumber 也与切点方法签名中的参数相匹配。

### 使用 XML 声明切面

在 XML 中把 bean 声明为一个切面时，我们总是从 `<aop:config>` 元素开始配置的。

```xml
<aop:config>
  <aop:aspect ref="audience">

    <aop:before
      pointcut="execution(** concert.Performance.perform(..))"
      method="silenceCellPhones" />

    <aop:before
      pointcut="execution(** concert.Performance.perform(..))"
      method="takeSeats" />

    <aop:after-returning
      pointcut="execution(** concert.Performance.perform(..))"
      method="applause" />

    <aop:after-throwing
      pointcut="execution(** concert.Performance.perform(..))"
      method="demandRefund" />

  </aop:aspect>
</aop:config>
```

使用 `<aop:aspect>` 元素声明了一个简单的切面。`ref` 元素引用了一个 POJO bean，该 bean 提供了在切面中通知所调用的方法。

在所有的通知元素中，`pointcut` 属性定义了通知所应用的切点，它的值是使用 AspectJ 切点表达式语法所定义的切点。

使用 `<aop:pointcut>` 将通用的切点表达式抽取到一个切点声明中，这样这个声明就能在所有的通知元素中使用了。在通知元素中，用 `pointcut-ref` 属性来引用这个命名切点。

```xml
<aop:config>
  <aop:aspect ref="audience">
    <aop:pointcut
      id="performance"
      expressions="execution(** concert.Performance.perform(..))" />

    <aop:before
      pointcut-ref="performance"
      method="silenceCellPhones" />

    <aop:before
      pointcut-ref="performance"
      method="takeSeats" />

    <aop:after-returning
      pointcut-ref="performance"
      method="applause" />

    <aop:after-throwing
      pointcut-ref="performance"
      method="demandRefund" />

  </aop:aspect>
</aop:config>
```

#### 为通知传递参数

和在使用注解声明切面时一样，在切点表达式中包含一个参数，这个参数会传递到通知方法中去。

```xml
<aop:config>
  <aop:aspect ref="trackCounter">
    <aop:pointcut
      id="trackPlayed"
      expression="execution(* soundsystem.CompactDisc.playTrack(int)) and args(trackNumber)" />

    <aop:before pointcut-ref="trackPlayed" method="countTrack" />
  </aop:aspect>
</aop:config>
```

## Spring MVC

在 Web 开发中，状态管理、工作流以及验证都是需要解决的重要特性。HTTP 协议的无状态性决定了这些问题都不那么容易解决。

Spring 的 Web 框架就是为了帮你解决这些关注点而设计的。Spring MVC 基于模型-视图-控制器（Model-View-Controller，MVC）模式实现，它能够帮你构建像 Spring 框架那样灵活和松耦合的 Web 应用程序。

### Spring MVC 处理请求的过程

下图展示了浏览器发送的 HTTP 请求所经历的过程：

![2020-3-26-12-2-51.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-26-12-2-51.png)

第一站是 Spring 的 DispatcherServlet。这是一个单实例的 Servlet 将请求委托给其他的 Spring MVC 控制器来执行实际的处理。

Spring MVC 控制器（controller）。控制器是一个用于处理请求的 Spring 组件。在典型的应用程序中可能会有多个控制器，DispatcherServlet 需要知道应该将请求发送给哪个控制器。所以 DispatcherServlet 以会查询一个或多个处理器映射（handler mapping） 来确定请求的下一站在哪里。处理器映射会根据请求所携带的 URL 信息来进行决策。

找到了目标控制器，DispatcherServlet 会将请求发送给选中的控制器。到了控制器，控制器会处理请求携带的信息。控制器在完成逻辑处理后，通常会产生一些信息，这些信息需要返回给用户并在浏览器上显示。这些信息被称为模型（model）。

不过仅仅给用户返回原始的信息是不够的，这些信息需要以用户友好的方式进行格式化，一般会是 HTML。这叫做视图 （view）。

控制器所做的最后一件事就是将模型数据打包，并且标示出用于渲染输出的视图名。它接下来会将请求连同模型和视图名发送回 DispatcherServlet 。

传递给 DispatcherServlet 的视图名并不直接表示某个特定的视图文件。它仅仅传递了一个逻辑名称，这个名字将会用来查找产生结果的真正视图。DispatcherServlet 将会使用视图解析器（view resolver） 来将逻辑视图名匹配为一个特定的视图实现。

最后，视图将使用模型数据渲染输出，这个输出会通过响应对象传递给客户端。

### 搭建 Spring MVC

#### 使用 Servlet 容器配置

按照传统的方式，像 DispatcherServlet 这样的 Servlet 会配置在 web.xml 文件中，这个文件会放到应用的 WAR 包里面。

而这里，我们会使用 Java 将 DispatcherServlet 配置在 Servlet 容器中，而不会再使用 web.xml 文件。

```java
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

public class SpitterWebInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {

  @Override
  protected String[] getServletMappings() {
    return new String[] { "/" };
  }

  @Override
  protected Class<?>[] getRootConfigClasses() {
    return new Class<?>[] { RootConfig.class };
  }

  @Override
  protected Class<?>[] getServletConfigClasses() {
    return new Class<?>[] { WebConfig.class };
  }
}
```

扩展 AbstractAnnotationConfigDispatcherServletInitializer 的任意类都会自动地配置 DispatcherServlet 和 Spring 应用上下文，Spring 的应用上下文会位于应用程序的 Servlet 上下文之中。

这里重写了三个方法：

第一个方法是 getServletMappings()，它会将一个或多个路径映射到 Dispatcher-Servlet 上。在本例中，它映射的是 "/"，这表示它会是应用的默认 Servlet。它会处理进入应用的所有请求。

为了理解其他的两个方法，我们首先要理解 DispatcherServlet 和一个 Servlet 监听器（也就是 ContextLoaderListener）的关系。

AbstractAnnotationConfigDispatcherServletInitializer 会同时创建 DispatcherServlet 和 ContextLoaderListener。

DispatcherServlet 加载包含 Web 组件的 bean，如控制器、视图解析器以及处理器映射，而 ContextLoaderListener 要加载应用中的其他 bean。这些 bean 通常是驱动应用后端的中间层和数据层组件。

- getServletConfigClasses() 方法返回的配置类将会用来定义 DispatcherServlet 应用上下文中的 bean。
- getRootConfigClasses() 方法返回配置类将会用来配置 ContextLoaderListener 创建的应用上下文中的 bean。

#### 启用 Spring MVC

为了使用 Spring MVC，用来配置 DispatcherServlet 的配置类上需要加一个 @EnableWebMvc 注解。

```java
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc
public class WebConfig {
}
```

现在的配置中，我们还没有配置视图解析器，没有启动组件扫描，DispatcherServlet 会映射为应用的默认 Servlet，所以它会处理所有的请求，包括对静态资源的请求，如图片和样式表。

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
@EnableWebMvc
@ComponentScan("spittr.web")
public class WebConfig extends WebMvcConfigurerAdapter {

  @Bean
  public ViewResolver viewResolver() {
    InternalResourceViewResolver resolver = new InternalResourceViewResolver();
    resolver.setPrefix("/WEB-INF/views/");
    resolver.setSuffix(".jsp");
    return resolver;
  }

  @Override
  public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
    configurer.enable();
  }
}
```

现在添加了 @ComponentScan 注解，因此将会扫描 spitter.web 包来查找组件。包下面所有带 @Controller 注解的类，都会被当做控制器引入；

接下来声明了一个 InternalResourceViewResolver 视图解析器。它会查找 JSP 文件，在查找的时候，它会在视图名称上加一个特定的前缀和后缀（例如，名为 home 的视图将会解析为 /WEB-INF/views/home.jsp）。

最后，新的 WebConfig 类还扩展了 WebMvcConfigurerAdapter 并重写了其 configureDefaultServletHandling() 方法。通过调用 DefaultServletHandlerConfigurer 的 enable() 方法，我们要求 DispatcherServlet 将对静态资源的请求转发到 Servlet 容器中默认的 Servlet 上，而不是使用 DispatcherServlet 本身来处理此类请求。

### 编写控制器

在 Spring MVC 中，控制器只是在类名上有 @Controller 注解，并且方法上添加了 @RequestMapping 注解的类，这个注解声明了它们所要处理的请求。

例如，下面代码中，控制器类要处理对 / 的请求， 并渲染应用的首页。

```java

import static org.springframework.web.bind.annotation.RequestMethod.*;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

  @RequestMapping(value="/", method = GET)
  public String home(Model model) {
    return "home";
  }

}
```

home() 方法其实并没有做太多的事情：它返回了一个 String 类型的 home 。这个 String 将会被 Spring MVC 解读为要渲染的视图名称。DispatcherServlet 会要求视图解析器将这个逻辑名称解析为实际的视图。

#### 定义类级别的请求处理

我们可以在类名上使用 @RequestMapping 注解来定义类级别的请求处理。

```java
import static org.springframework.web.bind.annotation.RequestMethod.*;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class HomeController {

  @RequestMapping(method = GET)
  public String home(Model model) {
    return "home";
  }

}
```

当控制器在类级别上添加 @RequestMapping 注解时，这个注解会应用到控制器的所有处理器方法上。处理器方法上的 @RequestMapping 注解会对类级别上的 @RequestMapping 的声明进行补充。

@RequestMapping 的 value 属性能够接受一个 String 类型的数组。到目前为止，我们给它设置的都是一个 String 类型的 /。但是，我们还可以将它映射到对 /homepage 的请求。

```java
@Controller
@RequesiMapping({"/", "/homepage"})
public class HomeController {
}
```

#### 传递模型属性到视图中

```java

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import spittr.Spittle;
import spittr.data.SpittleRepository;

@Controller
@RequestMapping("/spittles")
public class SpittleController {

  private SpittleRepository spittleRepository;

  @Autowired
  public SpittleController(SpittleRepository spittleRepository) {
    this.spittleRepository = spittleRepository;
  }

  @RequestMapping(method=RequestMethod.GET)
  public String spittles(Model model) {
    model.addAttribute("splittleList",
      spittleRepository.findSpittles(Long.MAX_VALUE, 20)
    );
    return "spittles"
  }

}
```

在 spittles() 方法中给定了一个 Model 作为参数。这样，spittles() 方法就能将 Repository 中获取到的 Spittle 列表填充到模型中。

Model 实际上就是一个 Map（也就是 key-value 对的集合），它会传递给视图，这样数据就能渲染到客户端了。

如果你希望使用非 Spring 类型的话，那么可以用 java.util.Map 来代替 Model。

```java
@RequestMapping(method=RequestMethod.GET)
public String spittles(Map model) {
  model.put("splittleList",
    spittleRepository.findSpittles(Long.MAX_VALUE, 20)
  );
  return "spittles"
}
```

现在，数据已经放到了模型中，在 JSP 中该如何访问它呢？实际上，当视图是 JSP 的时候，模型数据会作为请求属性放到请求（request）之中。

```xml
<c:forEach items="${spittleList}" var="spittle" >
  <li id="spittle_<c:out value="spittle.id"/>">
    <div class="spittleMessage">
      <c:out value="${spittle.message}" />
    </div>
    <div>
      <span class="spittleTime">
        <c:out value="${spittle.time}" />
      </span>
      <span class="spittleLocation">(
        <c:out value="${spittle.latitude}" />,
        <c:out value="${spittle.longitude}" />)
      </span>
    </div>
  </li>
</c:forEach>
```

#### 接受请求中的数据

Spring MVC 允许以多种方式将客户端中的数据传送到控制器的处理器方法中，包括：

- 查询参数（Query Parameter）。
- 表单参数（Form Parameter）。
- 路径变量（Path Variable）。

```java
@RequestMapping(method=RequestMethod.GET)
public List<Spittle> spittles(
  @RequestParam(value="max", defaultValue=MAX_LONG_AS_STRING) long max,
  @RequestParam(value="count", defaultValue="20") int count) {
    return spittleRepository.findSpittles(max, count);
}
```

上面代码表示，会从请求中获取两个参数 max 和 count，如果不存在使用默认值，后面的 long max 和 int count 表示，他们会分别被转换成 long 类型 和 int 类型，然后用 max 和 count 作为参数的名字，传入 spittles 方法。

```java
@RequestMapping(value="/show", method=RequestMethod.GET)
public String showSpittles(
    @RequestParam("spittle_id") long spittleId,
    Model model) {
  model.addAttribute(spittleRepository.findOne(spittleId));
  return "spittle";
}
```

对于上面的代码，`/spittles/show?spittle_id=12345` 这样的路径下，spittle_id 就会被作为参数。

通过使用 `{}` 占位符，也可以把路径的一部分作为参数。

```java
@RequestMapping(value="/{spittleId}", method=RequestMethod.GET)
public String spittle(
    @PathVariable("spittleId") long spittleId,
    Model model) {
  model.addAttribute(spittleRepository.findOne(spittleId));
  return "spittle";
}
```

它就能够处理针对 /spittles/54321 的请求，会把 54321 传递进来，作为 spittleId 的值。

如果 @PathVariable 中没有 value 属性的话，它会假设占位符的名称与方法的参数名相同。这能够让代码稍微简洁一些。

```java
@RequestMapping(value="/{spittleId}", method=RequestMethod.GET)
public String spittle(@PathVariable long spittleId, Model model) {
  model.addAttribute(spittleRepository.findOne(spittleId));
  return "spittle";
}
```

### 处理表单

当处理注册表单的 POST 请求时，控制器需要接受表单数据并将表单数据保存为 Spitter 对象。

```java
import static org.springframework.web.bind.annotation.RequestMethod.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import spittr.Spitter;
import spittr.data.SpitterRepository;

@Controller
@RequestMapping("/spitter")
public class SpitterController {

  private SpitterRepository spitterRepository;

  @Autowired
  public SpitterController(SpitterRepository spitterRepository) {
    this.spitterRepository = spitterRepository;
  }

  @RequestMapping(value="/register", method=GET)
  public String showRegistrationForm() {
    return "registerForm";
  }

  @RequestMapping(value="/register", method=POST)
  public String processRegistration(Spitter spitter) {
    spitterRepository.save(spitter);
    return "redirect:/spitter/" + spitter.getUsername();
  }

}
```

如果用户在提交表单的时候，username 或 password 文本域为空的话，那么将会导致在新建 Spitter 对象中，username 或 password 是空的 String。至少这是一种怪异的行为。如果这种现象不处理的话，这将会出现安全问题。

从 Spring 3.0 开始，在 Spring MVC 中提供了对 Java 校验 API 的支持。Java 校验 API 定义了多个注解，这些注解可以放到属性上，从而限制这些属性的值。

![2020-3-26-13-53-54.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-26-13-53-54.png)

我们所要做的事情就是将这些注解添加到 Spitter 的属性上。如下的程序清单展现了 Spitter 类，它的属性已经添加了校验注解。

```java
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;

public class Spitter {

  private Long id;

  @NotNull
  @Size(min=5, max=16)
  private String username;

  @NotNull
  @Size(min=5, max=25)
  private String password;

  @NotNull
  @Size(min=2, max=30)
  private String firstName;

  @NotNull
  @Size(min=2, max=30)
  private String lastName;

  ...
}
```

接下来需要修改 processRegistration() 方法来应用校验功能。

```java
@RequestMapping(value="/register", method=POST)
public String processRegistration(
    @Valid Spitter spitter,
    Errors errors) {
  if (errors.hasErrors()) {
    return "registerForm";
  }

  spitterRepository.save(spitter);
  return "redirect:/spitter/" + spitter.getUsername();
}
```

Spitter 参数添加了 @Valid 注解，这会告知 Spring，需要确保这个对象满足校验限制。在 Spitter 属性上添加校验限制并不能阻止表单提交。即便用户没有填写某个域或者某个域所给定的值超出了最大长度，processRegistration() 方法依然会被调用。

如果有校验出现错误的话，那么这些错误可以通过 Errors 对象进行访问，现在这个对象已作为 processRegistration() 方法的参数。

## 渲染 Web 视图

## Spring MVC 进阶

## Spring Security

Spring Security 是为基于 Spring 的应用程序提供声明式安全保护的安全性框架。Spring Security 提供了完整的安全性解决方案，它能够在 Web 请求级别和方法调用级别处理身份认证和授权。

Spring Security 借助一系列 Servlet Filter 来提供各种安全性功能。借助于 Spring 的小技巧，我们只需配置一个 Filter 就可以了。

DelegatingFilterProxy 是一个特殊的 Servlet Filter，它本身所做的工作并不多。只是将工作委托给一个 javax.servlet.Filter 实现类，这个实现类作为一个 Bean 注册在 Spring 应用的上下文中。

![2020-3-26-19-27-27.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-26-19-27-27.png)

如果你喜欢在传统的 web.xml 中配置 Servlet 和 Filter 的话，可以使用 `<filter>` 元素，如下所示：

```xml
<filter>
  <filter-name>springSecurityFilterChain</filter-name>
  <filter-class>
    org.springframework.web.filter.DelegatingFilteProxy
  </filter-class>
</filter>
```

Spring 3.2 引入了新的 Java 配置方案，完全不再需要通过 XML 来配置安全性功能了。如下的程序清单展现了 Spring Security 最简单的 Java 配置。

```java
package spitter.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.servlet.configuration.EnableWebSecurity;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
}
```

@EnableWebSecurity 注解将会启用 Web 安全功能。但它本身并没有什么用处，Spring Security 必须配置在一个实现了 WebSecurityConfigurer 的 bean 中，最为简单的方式就是扩展 WebSecurityConfigurerAdapter 类。

@EnableWebSecurity 可以启用任意 Web 应用的安全性功能。如果你的应用碰巧是使用 Spring MVC 开发的，那么就应该考虑使用 @EnableWeb-MvcSecurity 替代它。

```java
package spitter.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.servlet.configuration.EnableWebMvcSecurity;

@Configuration
@EnableWebMvcSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
}
```

## JDBC

## 对象-关系映射持久化

## 使用 NoSQL 数据库

## 缓存数据

## 保护方法应用

## 使用远程服务

## 使用 Spring MVC 创建 REST API

为了理解 REST 是什么，我们将它的首字母缩写拆分为不同的构成部分：

- 表述性（Representational）：REST 资源实际上可以用各种形式来进行表述，包括 XML、JSON（JavaScript Object Notation）甚至 HTML —— 最适合资源使用者的任意形式；
- 状态（State）：当使用 REST 的时候，我们更关注资源的状态而不是对资源采取的行为；
- 转移（Transfer）：REST 涉及到转移资源，它以某种表述性形式从一个应用转移到另一个应用。

更简洁地讲，REST 就是将资源的状态以最适合客户端或服务端的形式从服务器端转移到客户端（或者反过来）。

在 REST 中，资源通过 URL 进行识别和定位。

REST 中会有行为，它们是通过 HTTP 方法来定义的。具体来讲，也就是 GET、POST、PUT、DELETE、PATCH 以及其他的 HTTP 方法构成了 REST 中的动作。这些 HTTP 方法通常会匹配为如下的 CRUD 动作：

- Create：POST
- Read：GET
- Update：PUT 或 PATCH
- Delete：DELETE

尽管通常来讲，HTTP 方法会映射为 CRUD 动作，但这并不是严格的限制。有时候，PUT 可以用来创建新资源，POST 可以用来更新资源。

### 创建第一个 REST 端点

表述是 REST 中很重要的一个方面。它是关于客户端和服务器端针对某一资源是如何通信的。任何给定的资源都几乎可以用任意的形式来进行表述。如果资源的使用者愿意使用 JSON，那么资源就可以用 JSON 格式来表述。如果使用者喜欢尖括号，那相同的资源可以用 XML 来进行表述。甚至 txt 格式。资源的本质没有变化，只是它的表述方式变化了。

需要了解的是控制器本身通常并不关心资源如何表述。控制器以 Java 对象的方式来处理资源。控制器完成了它的工作之后，资源才会被转化成最适合客户端的形式。

Spring 提供了两种方法将资源的 Java 表述形式转换为发送给客户端的表述形式：

- 内容协商（Content negotiation）：选择一个视图，它能够将模型渲染为呈现给客户端的表述形式；
- 消息转换器（Message conversion）：通过一个消息转换器将控制器所返回的对象转换为呈现给客户端的表述形式。

在这里直接将如何使用消息转换器。消息转换（message conversion）提供了一种更为直接的方式，它能够将控制器产生的数据转换为服务于客户端的表述形式。

Spring 自带了各种各样的转换器。

为了支持消息转换，我们需要对 Spring MVC 的编程模型进行一些小调整。

如果想使用消息转换功能的话，我们需要告诉 Spring 跳过正常的模型/视图流程，并使用消息转换器。有不少方式都能做到这一点，但是最简单的方法是为控制器方法添加 @ResponseBody 注解。

```java
@RequestMapping(method=RequestMethod.GET, produces="application/json")
public @ResponseBody List<Spittle> spittles(
    @RequestParam(value="max", defaultValue=MAX_LONG_AS_STRING) long max,
    @RequestParam(value="count", defaultValue="20") int count) {
  return spittleRepository.findSpittles(max, count);
}
```

@ResponseBody 注解会告知 Spring，我们要将返回的对象作为资源发送给客户端，并将其转换为客户端可接受的表述形式。更具体地讲，DispatcherServlet 将会考虑到请求中 Accept 头部信息，并查找能够为客户端提供所需表述形式的消息转换器。

举例来讲，假设客户端的 Accept 头部信息表明它接受 “application/json”，并且 Jackson JSON 库位于应用的类路径下，那么将会选择 MappingJacksonHttpMessageConverter。消息转换器会将控制器返回的 Spittle 列表转换为 JSON 文档，并将其写入到响应体中。

```json
[
  {
    "id": 42,
    "latitude": 28.419489,
    "longitude": -81.581184,
    "message": "Hello World",
    "time": 140038920000
  },
  {
    "id": 43,
    "latitude": 28.419136,
    "longitude": -81.577225,
    "message": "Blast off!",
    "time": 140047560000
  }
]
```

#### 在请求体中接收资源状态

到目前为止，我们只关注了 REST 端点如何为客户端提供资源。但是 REST 并不是只读的，REST API 也可以接受来自客户端的资源表述。

@RequestBody 也能告诉 Spring 查找一个消息转换器，将来自客户端的资源表述转换为对象。

```java
@RequestMapping(method=RequestMethod.POST, consumes="application/json")
public @ResponseBody Spittle saveSpittle(@RequestBody Spittle spittle) {
  return spittleRepository.save(spittle);
}
```

@RequestMapping 表明它只能处理 “/spittles”（在类级别的 @RequestMapping 中进行了声明）的 POST 请求。POST 请求体中预期要包含一个 Spittle 的资源表述。

因为 Spittle 参数上使用了 @RequestBody，所以 Spring 将会查看请求中的 Content-Type 头部信息，并查找能够将请求体转换为 Spittle 的消息转换器。

如果客户端发送的 Spittle 数据是 JSON 表述形式，那么 Content-Type 头部信息可能就会是 “application/json”。在这种情况下，DispatcherServlet 会查找能够将 JSON 转换为 Java 对象的消息转换器。

@RequestMapping 有一个 consumes 属性，我们将其设置为 “application/json”。它会告诉 Spring 这个方法只会处理对 “/spittles” 的 POST 请求，并且要求请求的 Content-Type 头部信息为 “application/json”。如果无法满足这些条件的话，会由其他方法（如果存在合适的方法的话）来处理请求。

### 发送错误信息到客户端

作为 @ResponseBody 的替代方案，控制器方法可以返回一个 ResponseEntity 对象。ResponseEntity 中可以包含响应相关的元数据（如头部信息和状态码）以及要转换成资源表述的对象。

因为 ResponseEntity 允许我们指定响应的状态码，所以当无法找到 Spittle 的时候，我们可以返回 HTTP 404 错误。

### 在响应中设置头部信息

## Spring 消息
