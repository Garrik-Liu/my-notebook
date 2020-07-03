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

通过在类的上面加上 **`@Component` 注解**，Spring 就会把这个类当做一个 Bean 处理；

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

但是组件扫描默认是不启用的。我们还需要显式配置一下 Spring， 从而命令它去寻找带有 `@Component` 注解的类，并为其创建 bean。

在 XML 配置文件中，可以使用 Spring `context` 命名空间里的元素。来进行配置：

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

上面的配置表明，Spring 会扫描 `soundsystem` 包下面的所有类:

- `<context:component-scan>` 标签让 Spring 容器去自动扫描指定包及其子包下面的 Java 类文件;
- `base-package` 指明想要让 Spring 扫描的包;

---

**所有的 Bean 都会给定一个 ID**:

- **默认情况下, Spring 会将类名的第一个字母变为小写, 来将其作为 Bean 的名称**;
- **通过给 `@Component` 注解赋值, 可以设置自定义的名称**;

🌰 以前面 👆 的 SgtPeppers 类为例:

- 默认情况下, Bean 的名称为 `sgtPeppers`.
- 也可以自行设置名称:

```java
@Componet("lonelyHeartsClub")
public class SgtPeppers implements CompactDisc {
  ......
}
```

#### @Autowired 自动装配

通过使用 **`@Autowired` 注解**可以声明当前 Bean 所需要的依赖;

**Spring 在检测到 `@Autowired` 注解后, 会去 Spring 容器中寻找匹配的 Bean, 然后自动装配进其中**.

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

- 在构造器上添加了 `@Autowired` 注解;
- 这表明当 Spring 调用构造器创建 `CDPlayerbean` 的时候，会在 Spring 容器中搜寻一个类型为 `CompactDisct` 的 Bean;
- 并把它作为参数传入到构造器中;

---

**`@Autowired` 注解不仅能够用在构造器上，还能用在属性的 Setter 方法上**。

```java
@Autowired
public void setCompactDisc(CompactDisc cd){
  this.cd = cd;
}
```

Setter 方法并没有什么特殊之处。`@Autowired` 注解可以用在类的任何方法上。假设 CDPlayer 类有一个 `insertDisc()` 方法， 那么 `@Autowired` 能够像在 `setCompactDisc()` 上那样，发挥完全相同的作用：

---

假如有且只有一个 Bean 匹配依赖需求的话，那么这个 Bean 将会被装配进来。

**如果没有匹配的 Bean，那么在应用上下文创建的时候，Spring 会抛出一个异常**。

**为了避免异常的出现，你可以将 `@Autowired` 的 `required` 属性设置为 `false`**：

- 将 `required` 属性设置为 `false` 时，Spring 会尝试执行自动装配;
- 如果没有匹配的 Bean 的话，Spring 将会让这个 Bean 处于未装配的状态;
- 未装配的参数的值为 `null`;

```java
@Autowired(required=false)
public CDPlayer(CompactDisc cd) {
  this.cd = cd;
}
```

**如果有多个 Bean 都能满足依赖关系的话，Spring 将会抛出一个异常**，表明没有明确指定要选择哪个 bean 进行自动装配。在第 3 章中，会进一步讨论『 自动装配中的歧义性 』

### Java 类配置

尽管在很多场景下通过『 组件扫描 』和『 自动装配 』实现 Spring 的自动化配置，但**有时候自动化配置的方案行不通**，因此需要明确配置 Spring。

- 🌰 比如说，你想要将第三方库中的组件装配到你的应用中，但你是没有办法在第三方的类上添加 `@Component` 和 `@Autowired` 注解的，因此就不能使用自动化装配的方案了。

---

在进行显式配置的时候，有两种可选方案：Java 和 XML。在这节中，前面已经说了 XML 配置方法, 下面 👇 将如何使用 Java 配置:

#### Java 配置就是将配置规则写在一个 Java 类里:

- 在进行显式配置时，`JavaConfig` 是更好的方案， 因为它更为强大、类型安全并且对重构友好。为它就是 Java 代码， 就像应用程序中的其他 Java 代码一样;
- 但与其他的 Java 类不同的是，JavaConfig 是配置代码。这意味着它不应该包含任何业务逻辑，JavaConfig 也不应该侵入到业务逻辑代码之中;
- 尽管不是必须的，但通常会将 JavaConfig 放到单独的包中，使它与其他的应用程序逻辑分离开来;

#### @Configuration 注解 & @Bean 注解

通过 **`@Configuration` 注解**表明这个类是一个配置类。

要在 JavaConfig 中声明 Bean，我们需要编写一个方法，这个方法会创建 Bean 实例:

- 在方法上面加 **`@Bean` 注解**, 表明方法将会返回一个对象实例，该对象要注册为 Spring 容器中的 Bean;
- 方法体中包含了创建 Bean 实例的具体逻辑;

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

默认情况下，Bean 的 ID 名称与带有 `@Bean` 注解的方法名是一样的:

- 🌰 在本例中，Bean 的名字将会是 `sgtPeppers`;
- 如果你想为其设置成一个不同的名字的话，可以通过 `name` 属性指定一个不同的名字;

```java
@Bean(name="lonelyHeartsClubBand")
public CompactDisc sgtPeppers() {
  return new SgtPeppers();
}
```

---

在这个使用了 `@Bean` 的注解中方法中，你可以自由地编写创建 Bean 实例的逻辑。

🌰 比方说，在一组 CD 中随机选择一个 `CompactDisc` 来播放：

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

在 JavaConfig 中装配 Bean 的最直接方式就是**引用创建 Bean 的方法**。

🌰 例如，下面就是一种声明 CDPlayer 的可行方案：

```java
@Bean
public CDPlayer cdPlayer() {
  return new CDPlayer(sgtPeppers());
}
```

- 上面代码中，看似是调用了 `sgtPeppers()` 方法，但是并不是每次 `sgtPeppers()` 都实际被调用了，并创建一个新的实例返回;
- 因为 `sgtPeppers()` 方法上添加了 `@Bean` 注解， Spring 将会拦截所有对它的调用，并返回已经创建好的 Bean 实例;

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

- 上面两次调用 `sgtPeppers()` 返回的实例是同一个实例;
- 默认情况下，Spring 容器中的 Bean 都只有一个实例;

---

通过调用方法来引用 Bean 的方式有点令人困惑。还有一种理解起来更为简单的方式, 即**通过参数传入 Bean**:

```java
@Bean
public CDPlayer cdPlayer(CompactDisc compactDisc) {
  return new CDPlayer(compactDisc);
}
```

- 在这里，`cdPlayer()` 方法请求一个 `CompactDisc` 类型的参数;
- 当 Spring 调用 `cdPlayer()` 创建 `CDPlayerbean` 的时候，它会自动装配一个类型为 `CompactDisc` 的 Bean 到配置方法之中;

上面 👆 使用 CDPlayer 的构造器进行的依赖注入，如果你想通过 Setter 方法注入 `CompactDisc` 的话，那么代码看起来应该是这样的：

```java
@Bean
public CDPlayer cdPlayer(CompactDisc compactDisc) {
  CDPlayer cdPlayer = new CDPlayer();
  cdPlayer.setCompactDisc(compactDisc);
  return cdPlayer;
}
```

#### @ComponentScan 注解

通过在配置类之上使用 **`@ComponentScan` 注解**可以指定自动扫描包下面的 Bean:

```java
@Configuration
@ComponentScan(basePackages="soundsystem")
public class CDPlayerConfig { }
```

- 在 `@ComponentScan` 的 `basePackages` 属性中可以指明想要扫描包的名称;
- 如果没有为 `@ComponentScan` 设置任何属性。按照默认规则，它会以配置类所在的包作为基础包;
- 如果你想扫描多个包，可以将 `basePackages` 属性设置为一个数组;

```java
@Configuration
@ComponentScan(basePackages={"soundsystem", "video"})
public class CDPlayerConfig { }
```

- 也可以省略 `basePackages`，简写成：

```java
@ComponentScan("soundsystem")

// ---------------------

@ComponentScan("soundsystem", "video")
```

### 混合使用多种配置方式

#### 在配置类中引入其他配置

假设我们有两个配置类，通过 **`@import` 注解可以将一个配置类导入另一个配置类中**：

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

一个更好的方法是，创建一个更高层的 `SoundSystemConfig` 类，在这个类中使用 `@Import` 将两个配置类组合在一起：

```java
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({CDPlayerConfig.class, CDConfig.class})
public class CDPlayerConfig {
}
```

---

通过 **`@ImportResource` 注解可以引入 XML 配置文件**：

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

**使用 `<import>` 元素可以导入其他的 XML 配置文件**。

**使用 `<bean>` 元素可以将 JavaConfig 配置类导入到 XML 配置中**。

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

上面 👆 讲解了 Spring 中基础的 Bean 装配方法. 下面来进一步讲解 Bean 装配相关的高级技术:

### 环境 & profile

在开发过程中, 我们通常会定义很多个环境, 例如开发环境, 生产环境, 测试环境, 等等. 在不同的环境想要使用的 Bean 会有所不同.

最直接解决方案是, 每个环境单独创建一份配置, 然后切换环境时, 更改配置, 重新构建应用, 然后再运行. 但是这样很麻烦, 而且容易产生 BUG.

在 3.1 版本中，**Spring 引入了 Bean Profile 的功能**. 通过将不同的 Bean 定义到与环境对应的 Profile 中. 在应用部署时, 激活指定的 Profile, 只有处于激活状态的 Profile 下的 Bean 会被创建.

#### 在配置类中配置 Profile

在 Java 配置中，可以将 **`@Profile` 注解应用到类级别上**, 用来告诉 Spring 配置类中的 Bean 只有在指定的 Profile 激活时才会创建:

```java
import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;

@Configuration
@Profile("dev")
public class DataSourceConfig {

  @Bean(destroyMethod = "shutdown")
  public DataSource dataSource() {
    return new EmbeddedDatabaseBuilder()
        .setType(EmbeddedDatabaseType.H2)
        .addScript("classpath:schema.sql")
        .addScript("classpath:test-data.sql")
        .build();
  }
}
```

- 上面 👆 代码告诉 Spring 这个配置类中的 Bean 只有在 `dev` Profile 激活时才会创建;

---

从 Spring 3.2 版本开始, **`@Profile` 注解也可以应用到方法上**. 这样可以把针对不同 Profile 的 Bean 放到同一个配置类之中:

```java
import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;
import org.springframework.jndi.JndiObjectFactoryBean;

@Configuration
public class DataSourceConfig {

  @Bean(destroyMethod = "shutdown")
  @Profile("dev")
  public DataSource embeddedDataSource() {
    return new EmbeddedDatabaseBuilder()
        .setType(EmbeddedDatabaseType.H2)
        .addScript("classpath:schema.sql")
        .addScript("classpath:test-data.sql")
        .build();
  }

  @Bean
  @Profile("prod")
  public DataSource jndiDataSource() {
    JndiObjectFactoryBean jndiObjectFactoryBean = new JndiObjectFactoryBean();
    jndiObjectFactoryBean.setJndiName("jdbc/myDS");
    jndiObjectFactoryBean.setResourceRef(true);
    jndiObjectFactoryBean.setProxyInterface(javax.sql.DataSource.class);
    return (DataSource) jndiObjectFactoryBean.getObject();
  }
}
```

- 只有当规定的 Profile 激活时，相应的 Bean 才会被创建;

#### 在 XML 中配置 Profile

可以在根 `<beans>` 元素中嵌套定义 `<beans>` 元素, 通过 `profile` 属性执行它们各自对应的 Profile 环境:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:jdbc="http://www.springframework.org/schema/jdbc"
  xmlns:jee="http://www.springframework.org/schema/jee" xmlns:p="http://www.springframework.org/schema/p"
  xsi:schemaLocation="
    http://www.springframework.org/schema/jee
    http://www.springframework.org/schema/jee/spring-jee.xsd
    http://www.springframework.org/schema/jdbc
    http://www.springframework.org/schema/jdbc/spring-jdbc.xsd
    http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans.xsd">

  <beans profile="dev">
    <jdbc:embedded-database id="dataSource" type="H2">
      <jdbc:script location="classpath:schema.sql" />
      <jdbc:script location="classpath:test-data.sql" />
    </jdbc:embedded-database>
  </beans>

  <beans profile="prod">
    <jee:jndi-lookup id="dataSource"
      lazy-init="true"
      jndi-name="jdbc/myDatabase"
      resource-ref="true"
      proxy-interface="javax.sql.DataSource" />
  </beans>
</beans>
```

- 在运行时, 只有激活的 Profile 对应的 `<beans>` 下面的 Bean 会被创建;

#### 激活 Profile

Spring 依靠 **`spring.profiles.active`** 和 **`spring.profiles.default`** 属性来判断当前哪个 Profile 是被激活的:

- 如果设置了 `spring.profiles.active` 属性，那么它的值就是激活的 Profile;
- 如果没有设置 `spring.profiles.active` 属性的话，那 Spring 将会查找 `spring.profiles.default` 的值;
- 如果 `spring.profiles.active` 和 `spring.profiles.default` 均没有设置的话，那就没有激活的 Profile，因此只会创建那些没有定义在 Profile 中的 Bean;

---

有多种方式来设置这两个属性：

- 作为 DispatcherServlet 的初始化参数；
- 作为 Web 应用的上下文参数；
- 作为 JNDI 条目；
- 作为环境变量；
- 作为 JVM 的系统属性；
- 在集成测试类上，使用 `@ActiveProfiles` 注解设置;

这里介绍如何使用 DispatcherServlet 的参数将 `spring.profiles.default` 设置为开发环境的 Profile.

🌰 例如，在 Web 应用中，设置 `spring.profiles.default` 的 `web.xml` 文件会如下所示:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app version="2.5"
         xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
           http://xmlns.jcp.org/xml/ns/javaee/web-app_2_5.xsd" >

  <context-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>/WEB-INF/spring/root-context.xml</param-value>
  </context-param>

  <context-param>
    <param-name>spring.profiles.default</param-name>
    <param-name>dev</param-name>
  </context-param>

  <listener>
    <listener-class>
      org.springframework.web.context.ContextLoaderListener
    </listener-class>
  </listener>

  <servlet>
    <servlet-name>appServlet</servlet-name>
    <servlet-class>
      org.springframework.web.servlet.DispatcherServlet
    </servlet-class>
    <init-param>
      <param-name>spring.profile.default</param-name>
      <param-value>dev</param-value>
    </init-param>
    <load-on-startup>1</load-on-startup>
  </servlet>

  <servlet-mapping>
    <servlet-name>appServlet</servlet-name>
    <url-pattern>/</url-pattern>
  </servlet-mapping>

</web-app>
```

- 直接运行代码, 默认就是开发环境;
- 当应用程序部署到 QA、生产或其他环境之中时，负责部署的人根据情况使用系统属性、环境变量或 JNDI 设置 `spring.profiles.active` 即可;

---

在 `spring.profiles.active` 和 `spring.profiles.default` 中，Profile 使用的都是复数形式。

这意味着, **可以同时激活多个 Profile**，这可以通过列出多个 Profile 名称，并以逗号分隔来实现。

#### 声明测试时的 Profile

当运行集成测试时，通常会希望采用与生产环境相同的配置进行测试。如果配置中的 bean 定义在了 profile 中，那么在运行测试时，我们就需要有一种方式来启用合适的 profile.

Spring 提供了 `@ActiveProfiles` 注解，我们可以使用它来指定运行测试时要激活哪个 profile。

```java
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes={PersistenceTestConfig.class})
@ActiveProfile("dev")
public class PersistenceTest {
  ...
}
```

### 条件化的 Bean

上面 👆 使用 Profile 机制来实现基于 Profile 激活状态来进行条件化地创建 Bean.

Spring 4.0 中提供了一种更通用, 更灵活的机制来实现条件化的 Bean 定义.

Spring 4 引入了一个新的 **`@Conditional` 注解**，它可以用到带有 `@Bean` 注解的方法上。 如果给定的条件计算结果为 `true`，就会创建这个 Bean，否则的话，这个 Bean 会被忽略。

🌰 例如，假设有一个名为 MagicBean 的类，我们希望只有设置了 `magic` 环境属性的时候，Spring 才会实例化这个类:

```java
@Bean
@Conditioal(MagicExistsCondition.class)
public MagicBean magicBean() {
  return new MagicBean();
}
```

可以看到，`@Conditional` 中给定了一个 Class，它指明了『 条件 』. 在本例中，也就是 MagicExistsCondition。

`@Conditional` 将会通过 `Condition` 接口的实现类进行条件对比:

```java
public interface Condition {
  boolean matches(ConditionContext ctxt, AnnotatedTypeMetadata metadata);
}
```

- 设置给 `@Conditional` 的类可以是任意实现了 `Condition` 接口的类型;
- 实现这个接口只需提供 `matches()` 方法的实现即可;
- 如果 `matches()` 方法返回 `true`，那么就会创建带有 `@Conditional` 注解的 Bean。如果 `matches()` 方法返回 `false`，将不会创建这些 Bean;

```java
import org.springframework.context.annotation.Condition;
import org.springframework.context.annotation.ConditionContext;
import org.springframework.core.env.Environment;
import org.springframework.core.type.AnnotatedTypeMetadata;

public class MagicExistsCondition implements Condition {

  @Override
  public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) {
    Environment env = context.getEnvironment();
    return env.containsProperty("magic");
  }
}
```

- 在 `matches` 方法汇总, 通过给定的 `ConditionContext` 对象进而得到 `Environment` 对象，并使用这个对象检查环境中是否存在名为 `magic` 的环境属性;

---

`matches` 方法的第一个参数类型为 `ConditionContext`.

**`ConditionContext` 是一个接口**, 大致如下所示：

```java
public interface ConditionContext {
  BeandefinitionRegistry getRegistry();
  ConfigurationListableBeanFactory getBeanFactory();
  Environment getEnvironment();
  ResourceLoader getResourceLoader();
  ClassLoader getClassLoader();
}
```

通过 `ConditionContext`，我们可以做到如下几点：

- 借助 `getRegistry()` 返回的 `BeanDefinitionRegistry` 检查 bean 定义；
- 借助 `getBeanFactory()` 返回的 `ConfigurableListableBeanFactory` 检查 bean 是否存在，甚至探查 bean 的属性；
- 借助 `getEnvironment()` 返回的 `Environment` 检查环境变量是否存在以及它的值是什么；
- 读取并探查 `getResourceLoader()` 返回的 `ResourceLoader` 所加载的资源；
- 借助 `getClassLoader()` 返回的 `ClassLoader` 加载并检查类是否存在。

---

`matches` 方法的第二个参数, `AnnotatedTypeMetadata` 则能够让我们检查带有 `@Bean` 注解的方法上还有什么其他的注解.

`AnnotatedTypeMetadata` 也是一个接口。它如下所示：

```java
public interface AnnotatedTypeMetadata {
  boolean isAnnotated(String annotationType);
  Map<String, Object> getAnnotationAttributes(String annotationType);
  Map<String, Object> getAnnotationAttributes(String annotationType, boolean classValuesAsString);
  MultiValueMap<String, Object> getAllAnnotationAttributes(String annotationType);
  MultiValueMap<String, Object> getAllAnnotationAttributes(String annotationType, boolean classValuesAsString);
}
```

- `isAnnotated()` 方法能够判断带有 `@Bean` 注解的方法是不是还有其他特定的注解;

### 处理自动装配的歧义性

- 在进行自动装配 Bean 时, 仅有一个 Bean 匹配所需的结果时，自动装配才是有效的;
- **如果有多个 Bean 能够匹配结果的话，这种歧义性会阻碍 Spring 自动装配**;
- Spring 会抛出 NoUniqueBeanDefinitionException 异常;

虽然在现实开发中, 基本上每个类型是会实例化一个 Bean 对象, 但当确实发生歧义性的时候，Spring 提供了多种可选方案来解决这样的问题.

#### 指明首选的 Bean

在声明 Bean 的时候，通过将其中一个可选的 Bean **设置为首选 Bean 能够避免自动装配时的歧义性**:

- 当遇到歧义性的时候，Spring 将会使用首选的 Bean.
- 但注意, 会引起歧义的 Bean 中, 只能有一个 Bean 设置为首选.

通过 **`@Primary` 注解**声明首选 Bean:

```java
// 和 @Component 注解一起使用, 用于自动扫描
@Component
@Primary
public class IceCream implements Dessert { ... }
```

```java
// 和 @Bean 注解一起使用, 用于 Java 配置类
@Bean
@Primary
public Dessert iceCream() {
  return new IceCream();
}
```

在 XML 配置中, `<bean>` 元素有一个 `primary` 属性用于设置首选 Bean:

```xml
<bean id="iceCream" class="com.desserteater.IceCream" primary="true" />
```

#### 限定自动装配的 Bean

Spring 的限定符能够在所有可选的 Bean 上进行缩小范围的操作，最终能够达到只有一个 Bean 满足所规定的限制条件.

如果将所有的限定符都用上后依然存在歧义性，那么你可以继续使用更多的限定符来缩小选择范围。

通过 **`@Qualifier` 注解**来使用限定符.

🌰 下面就是一个最简单的示例, 它表示只有带 `iceCream` 限定符的 Bean 可以注入进来:

```java
@Autowired
@Qualifier("iceCream")
public void setDessert(Dessert dessert) {
  this.dessert = dessert;
}
```

- 默认情况下, 如果没有给 Bean 指定限定符, Bean 自带一个与自己 ID 名称相同的限定符;
- 所以, Spring 会将一个类名为 `IceCream` 的实例作为参数注入进去;

**创建自定义的限定符**:

上面 👆 的 `setDessert()` 方法上所指定的限定符与要注入的 Bean 的名称是紧耦合的. 对类名称的任意改动都会导致限定符失效。

在类上添加 `@Qualifier` 注解可以为其创建自定义的限定符:

```java
@Component
@Qualifier("cold")
public class IceCream implements Dessert { ... }
```

- 在这种情况下，`cold` 限定符分配给了 IceCreambean。因为它没有耦合类名，因此你可以随意重构 IceCream 的类名，而不必担心会破坏自动装配;
- 在注入的地方，只要引用 `cold` 限定符就可以了;

```java
@Autowired
@Qualifier("cold")
public void setDessert(Dessert dessert) {
  this.dessert = dessert;
}
```

这时, 如果有其他的 Bean 也具有相同的 `@Qualifier("cold")` 限定符的话, 那么歧义性又会产生.

解决方案就是继续在 Bean 上加限定符, 直到将可选范围缩小到只有一个 Bean 满足需求.

但是, **Java 不允许在同一个条目上重复出现相同类型的多个注解**。我们这里可以通过**创建自定义的注解**来解决:

```java
@Target({ElementType.CONSTRUCTOR, ElementType.FIELD,
         ElementType.METHOD, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Qualifier
public @interface Cold { }
```

```java
@Target({ElementType.CONSTRUCTOR, ElementType.FIELD,
         ElementType.METHOD, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Qualifier
public @interface Creamy { }
```

上面 👆 分别创建了 `@Cold` 和 `@Creamy` 注解, 通过在定义时添加 `@Qualifier` 注解，它们就具有了 `@Qualifier` 注解的特性。它们本身实际上就成为了限定符注解.

下面 👇 通过给 Bean 加上自定义的注解, 就可以更进一步地对其进行限定了:

```java
@Component
@Cold
@Creamy
public class IceCream implements Dessert { ... }
```

```java
@Component
@Cold
@Fruity
public class Popsicle implements Dessert { ... }
```

```java
@Autowired
@Cold
@Creamy
public void setDessert(Dessert dessert) {
  this.dessert = dessert;
}
```

- `setDessert` 方法需要注入一个具有 `@Cold` 和 `@Creamy` 限定的 Bean 作为参数;
- IceCream 和 Popsicle 都有 `@Cold` 限定;
- 但是只有 IceCream 符合 `@Creamy` 限定;
- 通过使用必要的限定符注解进行任意组合，从而将可选范围缩小到只有一个 Bean 满足需求;
- 通过限定符, 实现了被注入的 Bean 和 Setter 方法的解耦, 任意满足限定条件的 Bean 都可以被注入, 而不是写死的;
- 在这个例子中, IceCream 是唯一能够匹配条件的 Bean, 而不是我们在代码中强制指定的;

### Bean 的作用域

在默认情况下，**Spring 应用上下文中所有 bean 都是作为以单例的形式创建的**。也就是说，不管给定的一个 bean 被注入到其他 bean 多少次，每次所注入的都是同一个实例.

但是, 如果被传入到多个 Bean 的对象是易变的, 在其他 Bean 中修改传入进来的对象, 可能造成另外一个依赖此对象的 Bean 发生错误.

在这种情况下, 重用 Bean 是不安全的. 因为对象会被污染，稍后重用的时候会出现意想不到的问题。

**Spring 允许通过定义 Bean 的作用域, 来指定 Bean 实例创建的模式**.

---

Spring 定义了多种**作用域**，可以基于这些作用域创建 Bean:

- 单例（Singleton）：在整个应用中，只创建 Bean 的一个实例。
- 原型（Prototype）：每次注入或者通过 Spring 应用上下文获取的时候，都会创建一个新的 Bean 实例。
- 会话（Session）：在 Web 应用中，为每个会话创建一个 Bean 实例。
- 请求（Rquest）：在 Web 应用中，为每个请求创建一个 Bean 实例。

使用 @Scope 注解可以设置 Bean 的作用域:

```java
@Component
@Scop(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
public class Notepad { ... }
```

- 使用 `ConfigurableBeanFactory` 类的 `SCOPE_PROTOTYPE` 常量设置了原型作用域;
- 也可以使用 `@Scope("prototype")`，但是使用 `SCOPE_PROTOTYPE` 常量更加安全并且不易出错;

---

在 JavaConfig 配置类中使用方法也是一样:

```java
@Bean
@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
public Notepad notepad() {
  return new Notepad();
}
```

---

使用 XML 来配置的话，可以使用 `<bean>` 元素的 `scope` 属性来设置作用域:

```xml
<bean id="notepad" class="com.myapp.Notepad" scope="prototype" />
```

#### 会话/请求作用域 & 作用域代理

在开发 Web 应用时, 通常会创建针对当前会话/请求的实例.

🌰 例如, 我们在购物网站中, 创建一个购物车实例. 应当是每个用户会话独享一个购物车实例. 不可能让所有的用户都共享一个购物车实例. 也不可能用原型作用域, 在每次注入购物车 Bean 时都重新创建一个实例.

```java
@Component
@Scope(value=WebApplicationContext.SCOPE_SESSION,
       proxyMode=ScopedProxyMode.INTERFACES)
public ShoppingCart cart() { ... }
```

- 将 `value` 设置成了 `WebApplicationContext 中的 SCOPE_SESSION` 常量, 这会告诉 Spring 为 Web 应用中的每个会话创建一个实例;
- `@Scope` 同时还有一个 `proxyMode` 属性，它被设置成了 `ScopedProxyMode.INTERFACES`;

---

**`proxyMode` 属性**解决了将会话或请求作用域的 Bean 注入到单例 Bean 中所遇到的问题:

假设我们要将 ShoppingCart 注入到单例 StoreService 的 Setter 方法中:

```java
@Component
public class StoreService {
  @Autowired
  public void setShoppingCart(ShoppingCart shoppingCart) {
    this.shoppingCart = shoppingCart;
  }
}
```

- 因为 `StoreService` 是一个单例的 Bean，会在 Spring 应用上下文加载的时候创建;
- 当它创建的时候，Spring 会试图将 `ShoppingCart` 注入到 `setShoppingCart()` 方法中;
- 但是 `ShoppingCart` 是会话作用域的，此时并不存在。直到某个用户进入系统，创建了会话之后，才会出现 `ShoppingCart` 实例;

- 而且, 每个用户会话都有一个 `ShoppingCart` 实例, 我们并不想让 Spring 注入某个固定的 `ShoppingCart` 实例到 `StoreService` 中;
- 我们希望的是当 `StoreService` 处理购物车功能时，它所使用的 `ShoppingCart` 实例恰好是当前会话所对应的那一个;

设置了 `proxyMode` 属性后, Spring 并不会将实际的 ShoppingCart 实例注入到 StoreService 中， 而是 **Spring 会注入一个 ShoppingCart 的代理**.

当 StoreService 调用 ShoppingCart 的方法时，代理会对其进行懒解析并将调用委托给会话作用域内真正的 ShoppingCart.

![2020-05-19-19-02-21](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-19-19-02-21.png)

**`ScopedProxyMode.INTERFACES`** 属性值, 表明这个代理要实现 ShoppingCart 接口，并将调用委托给真正的实现类对象;

如果 ShoppingCart 是一个具体的类的话, 要将 proxyMode 属性设置为 **`ScopedProxyMode.TARGET_CLASS`**，以此来表明要以生成目标类扩展的方式创建代理。

#### 在 XML 中声明作用域代理

在 XML 配置中, 要设置代理模式，我们需要使用 Spring `aop` 命名空间的 `<aop:scoped-proxy>` 元素.

在使用之前先在 XML 配置中声明 Spring 的 `aop` 命名空间：

```java
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:aop="http://www.springframework.org/schema/aop"
  xsi:schemaLocation="
    http://www.springframework.org/schema/aop
    http://www.springframework.org/schema/beans/spring-aop.xsd
    http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans.xsd" >
    ...
</beans>
```

下面展示了如何在 XML 中为会话/请求作用域的 Bean, 设置作用域代理:

```xml
<bean id="cart" class="com.myapp.ShoppingCart" scope="session">
  <aop:scoped-proxy />
</bean>
```

`<aop:scoped-proxy>` 默认创建目标类的代理. 通过将 `proxy-target-class` 属性设置为 `false`，可以要求它生成基于接口的代理:

```java
<bean id="cart" class="com.myapp.ShoppingCart" scope="session">
  <aop:scoped-proxy proxy-target-class="false" />
</bean>
```

### 运行时值注入

## 面向切面 AOP

在软件开发中，散布于应用中多处的重复的功能被称为**横切关注点**（crosscutting concern）。

- 通常来讲，这些横切关注点从概念上是与应用的业务逻辑相分离的
- 但是传统开发方式中，这些横切关注点往往直接嵌入到应用的业务逻辑之中;

把这些『 横切关注点 』与『 业务逻辑 』相分离正是**面向切面编程**（AOP）所要解决的问题。

在使用面向切面编程时，我们集中在一个地方定义通用功能，并通过声明的方式定义这个功能要以何种方式在何处应用，而无需修改受影响的类。

### AOP 术语

![2020-3-26-0-10-38.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-26-0-10-38.png)

==**通知（Advice）**==

**通知定义了切面在何时，执行什么操作**；

Spring 切面可以应用 5 种类型的通知：

- 前置通知（Before）：在目标方法被调用之前调用通知功能；
- 后置通知（After）：在目标方法完成之后调用通知，此时不会关心方法的输出是什么；
- 返回通知（After-returning）：在目标方法成功执行之后调用通知；
- 异常通知（After-throwing）：在目标方法抛出异常后调用通知；
- 环绕通知（Around）：通知包裹了被通知的方法，在被通知的方法调用之前和调用之后执行自定义的行为。

==**连接点（Join Point）**==

**连接点是在应用执行过程中能够插入通知的一个点**。

这个点可以是调用方法时、抛出异常时、甚至修改一个字段时。通知可以利用这些点插入到应用的正常流程之中，并添加新的行为。

==**切点（Poincut）**==

**如果说通知定义了切面何时做何事的话，那么切点定义了何处**；

切点的定义会匹配通知所要织入的一个或多个连接点。

==**切面（Aspect）**==

**切面是通知 & 切点的结合**。

通知和切点共同定义了切面的全部内容

==**引入（Introduction）**==

**引入允许我们向现有的类添加新方法或属性**。

可以在无需修改这些现有的类的情况下，让它们具有新的行为和状态。

==**织入（Weaving）**==

**织入是把切面应用到目标对象并创建新的代理对象的过程**。

切面在指定的连接点被织入到目标对象中。

### Spring 中的 AOP

**Spring 提供了 4 种类型的 AOP 支持**：

- 基于代理的经典 Spring AOP；
- 纯 POJO 切面；
- @AspectJ 注解驱动的切面；
- 注入式 AspectJ 切面（适用于 Spring 各版本）。

前三种都是 Spring AOP 实现的变体，**Spring AOP 构建在动态代理基础之上**，因此，Spring 对 AOP 的支持局限于方法拦截。

现在 Spring 提供了更简洁面向切面编程方式。引入了简单的声明式 AOP 和基于注解的 AOP 之后，Spring 经典的 AOP 看起来就显得非常笨重和过于复杂，后面不会再介绍经典的 Spring AOP。

借助 Spring 的 `aop` 命名空间，可以用 XML 声明式地将纯 POJO 转换为切面。实际上，这些 POJO 只是提供了满足切点条件时所要调用的方法。

Spring 借鉴了 AspectJ 的切面，以提供注解驱动的 AOP。本质上，它依然是 Spring 基于代理的 AOP，但是编程模型几乎与编写成熟的 AspectJ 注解切面完全一致。这种 AOP 风格的好处在于能够不使用 XML 来完成功能。

与 Spring AOP 相比，虽然 AspectJ 现在支持基于注解的切面，但 AspectJ 最初是以 Java 语言扩展的方式实现的。这种方式有优点也有缺点。通过特有的 AOP 语言，我们可以获得更强大和细粒度的控制，以及更丰富的 AOP 工具集，但是我们需要额外学习新的工具和语法。

---

通过代理类，Spring 在运行期把切面织入到 Spring 管理的 Bean 中。代理类封装了目标类，并拦截被外部对目标对象方法的调用，再把调用转发给真正的目标 bean。

![2020-3-26-0-36-55.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-26-0-36-55.png)

---

各种 AOP 方案可以支持的连接点模型粒度各有区别，因为 Spring 基于动态代理，所以 **Spring 只支持『 方法 』连接点**。

**AspectJ 和 JBoss，除了方法切点，它们还提供了字段和构造器接入点**。Spring 缺少对字段连接点的支持，无法让我们创建细粒度的通知，例如拦截对象字段的修改。而且它不支持构造器连接点，我们就无法在 Bean 创建时应用通知。

### 编写切点

**切点用于准确定位应该在什么地方应用通知**。通知和切点是切面的最基本元素。

在 Spring AOP 中，要**使用 AspectJ 的切点表达式语言来定义切点**。但 Spring 仅支持 AspectJ 切点指示器（pointcut designator）的一个子集。

下图是 **Spring AOP 所支持的 AspectJ 切点指示器**:

![2020-3-26-0-42-26.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-26-0-42-26.png)

- 只有 `execution` 指示器是实际执行匹配的;
- 其他的指示器都是用来限制匹配的;

**`execution` 指示器是我们在编写切点定义时最主要使用的指示器。在此基础上，使用其他指示器来限制所匹配的切点**。

---

🌰 下面举例如何去定义切点：

```java
public interface Performance {
  public void perform();
}
```

假设我们想编写 Performance 的 `perform()` 方法触发的通知。

下面这个表达式能够设置当 `perform()` 方法执行时触发通知的调用。

![2020-3-26-0-46-59.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-26-0-46-59.png)

- 上述代码, 使用 `execution()` 指示器选择 Performance 类的 `perform()` 方法。
- 返回类型是 `*` 表明了我们不关心方法返回值的类型;
- 然后，指定了全限定类名和方法名;
- 对于方法参数列表，我们使用两个点号（..）表明切点要选择任意的 `perform()` 方法，无论该方法的参数是什么;

---

🌰 现在假设我们需要配置的切点仅匹配 `concert` 包。在此场景下，可以使用 `within()` 指示器来限制匹配。

![2020-3-26-0-48-36.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-26-0-48-36.png)

- 使用了 `&&` 操作符把 `execution()` 和 `within()` 指示器连接在一起形成与（and）关系;
- 类似地，我们可以使用 `||` 操作符来标识或（or）关系;
- 使用 `!` 操作符来标识非（not）操作;
- 因为 `&` 在 XML 中有特殊含义，所以在 Spring 的 XML 配置里面描述切点时，我们可以使用 `and` 来代替 `&&`;
- 同样，`or` 和 `not` 可以分别用来代替 `||` 和 `!`;

---

Spring 还引入了一个新的 `bean()` 指示器，它允许我们在切点表达式中使用 Bean 的名称作为参数来限制切点只匹配特定的 Bean。

```java
execution(* concert.Performance.perform()) and bean('woodstock')
```

- 在这里，我们希望在执行 Performance 的 `perform()` 方法时应用通知，但限定在名称为 `woodstock` 的 Bean 中。

我们还可以使用非操作为除了特定 ID 以外的其他 Bean 应用通知:

```java
execution(* concert.Performance.perform()) and !bean('woodstock')
```

- 切面的通知会被织入到所有 ID 不为 `woodstock` 的 Bean 中.

### 使用注解声明切面

**定义切面**：

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

Audience 有四个方法，定义了一个观众在观看演出时可能会做的事情。这些方法都使用了通知注解来表明它们应该在什么时候调用:

![2020-3-26-1-14-27.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-26-1-14-27.png)

**所有的这些注解都给定了一个切点表达式作为它的值，来表示这些通知会应用到什么连接点上**。

在这个示例中，通知它会在 Performance 的 `perform()` 方法执行时的各个情况下触发。

---

相同的切点表达式我们重复了四遍，很不好维护，也不简洁。如果我们只定义这个切点一次，然后每次需要的时候引用它，那么这会是一个很好的方案。

**`@Pointcut` 注解能够定义可重用的切点**。

```java
@Aspect
public class Audience {

  @Pointcut("execution(** concert.Performance.perform(..))")
  public void performance() { }

  @Before("performance()")
  public void silenceCellPhones() {
    System.out.println("Silencing cell phones");
  }

  @Before("performance()")
  public void takeSeats() {
    System.out.println("Taking seats");
  }

  @AfterReturning("performance()")
  public void applause() {
    System.out.println("CLAP CLAP CLAP!!!");
  }

  @AfterThrowing("performance()")
  public void demandRefund() {
    System.out.println("Demanding a refund");
  }
}
```

- `@Pointcut` 注解设置的值是一个切点表达式;
- 通过在 `performance()` 方法上添加 `@Pointcut` 注解，这样就可以在任何的切点表达式中使用 `performance()` 来替代传入注解的切点表达式了。
- `performance()` 方法的实际内容并不重要，在这里它实际上应该是空的。其实该方法本身只是一个标识，供 `@Pointcut` 注解依附;

#### 开启代理

在这里再强调一次, **`Audience` 只是一个 POJO, 与其他的 Java 类并没有什么区别。只不过它通过注解表明会作为切面使用而已**.

如果你就此止步的话，`Audience` 只会是 Spring 容器中的一个 Bean。即便使用了 AspectJ 注解，但它并不会被视为切面，这些注解不会解析.

**定义好一个切面后，还需要在 Spring 配置中开启自动代理**.

AspectJ 自动代理都会为所有使用 `@Aspect` 注解声明的切面内的切点所匹配的 Bean 创建一个代理。

---

如果你使用 JavaConfig 的话，可以在配置类的类级别上通过**使用 `@EnableAspectJAutoProxy` 注解启用自动代理功能**:

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

---

假如你在 Spring 中要使用 XML 来装配 Bean 的话，那么需要**使用 Spring `aop` 命名空间中的 `<aop:aspectj-autoproxy>` 元素**:

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

#### 创建环绕通知

**使用 `@Around` 注解声明『 环绕通知 』, 它能够让你所编写的逻辑将被通知的目标方法完全包装起来**。实际上就像在一个通知方法中同时编写前置通知和后置通知。

🌰 我们使用一个环绕通知来代替之前多个不同的前置通知和后置通知:

```java
import org.aspect.lang.annotation.ProceedingJoinPoint;
import org.aspect.lang.annotation.Around;
import org.aspect.lang.annotation.Aspect;
import org.aspect.lang.annotation.Pointcut;

@Aspect
public class Audience {

  @Pointcut("execution(** concert.Performance.perform(..))")
  public void performce() { }

  @Around("performce()")
  public void watchPerformance(ProceedingJoinPoint jp) {
    try {
      System.out.println("Silencing cell phones");
      System.out.println("Taking seats");
      jp.procee();
      System.out.println("CLAP CLAP CLAP!!!");
    } catch (Throwable e) {
      System.out.println("Demanding a refund");
    }
  }
}
```

- `@Around` 注解表明 `watchPerformance()` 方法会作为 `performance()` 切点的环绕通知;

环绕通知方法接受 **`ProceedingJoinPoint` 对象**作为参数:

- 这个参数是必须要有的，因为你要在通知中通过它来调用被通知的方法;
- 在通知方法中, 当要将控制权交给被通知的方法时，需要调用 `ProceedingJoinPoint` 的 `proceed()` 方法;
- 如果不调这个方法的话，那么你的通知实际上会阻塞对被通知方法的调用;

但是根据业务需求的不同, 你可以不调用 `proceed()` 方法，从而阻塞对被通知方法的访问. 或者, 你也可以在通知中对它进行多次调用。要这样做的一个场景就是实现重试逻辑，也就是在被通知方法失败后，进行重复尝试.

#### 处理通知中的参数

到目前为止，我们的切面都很简单，没有任何参数。

**在切点表达式中使用 `args()` 限定符可以把传入连接点方法的参数，也传递到通知中去**；

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

- **它表明传递给 `playTrack()` 方法的 `int` 类型参数也会传递到通知中去**;
- **参数的名称 `trackNumber` 也与切点方法签名中的参数相匹配**;

#### 通过注解引入新功能

切面不但能为 Bean 中现有的方法添加额外的功能, 还能利用被称为『 **引入的 AOP 概念** 』，为 Spring Bean 添加新方法:

- 在 Spring 中，切面只是实现了它们所包装 Bean 相同接口的代理;
- 可以通过引入新的接口, 并且提供实现类, 让代理同时持有对新接口实现类实例的依赖, 来为代理添加新方法;
- 通过判断用户调用的方法属于谁, 代理分别把调用委托给被通知的 Bean, 或者新引入的接口实现类实例;

![2020-05-20-08-40-42](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-20-08-40-42.png)

🌰 假设, 我们现在想为所有的 `Performance` 实现引入下面的 `Encoreable` 接口：

```java
package concert;

public interface Encoreable {
  void performEncore();
}
```

下面 👇 代码展示, 如何通过 **`@DeclareParents` 注解**，将 `Encoreable` 接口引入到 `Performance` Bean 中:

```java
package concert;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.DeclareParents;

@Aspect
public class EncodeableIntroducer {

  @DeclareParents(value="concert.Performce+",
                  defaultImpl=DefaultEncoreable.class)
  public static Encoreable encoreable;
}
```

@DeclareParents 注解由三部分组成：

- **`@DeclareParents` 注解所标注的静态属性指明了要引入了接口**。在这里，我们所引入的是 Encoreable 接口;
- **`value` 属性指定了哪种类型的 Bean 要引入该接口**。在本例中，也就是所有实现 Performance 的类型。（标记符后面的加号表示是 Performance 的所有子类型）;
- **`defaultImpl` 属性指定了为引入功能提供实现的类**。在这里，我们指定的是 DefaultEncoreable 提供实现;

当 Spring 发现一个 bean 使用了 @Aspect 注解时，Spring 就会创建一个代理，然后将调用委托给被代理的 bean 或被引入的新接口的实现，这取决于调用的方法属于被代理的 bean 还是属于被引入的接口。

### 使用 XML 声明切面

『 **面向注解的切面声明** 』有一个明显的**劣势**：你必须要有通知类的源代码, 你才能给它添加注解.

如果你没有源码的话，或者不想将 AspectJ 注解放到你的代码之中，Spring 为切面提供了 XML 配置方案。

在 Spring 的 `aop` 命名空间中，提供了多个元素用来在 XML 中声明切面:

![2020-05-20-09-42-02](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-20-09-42-02.png)

---

下面 👇 展示如何将一个普通的 POJO 类通过 XML 配置成切面:

现在我们有一个普通的 POJO 类 `Audience`, 它里面就简单的包含几个方法:

```java
public class Audience {

  public void silenceCellPhones() {
    System.out.println("Silencing cell phones");
  }

  public void takeSeats() {
    System.out.println("Taking seats");
  }

  public void applause() {
    System.out.println("CLAP CLAP CLAP!!!");
  }

  public void demandRefund() {
    System.out.println("Demanding a refund");
  }
}
```

在 XML 中把 bean 声明为一个切面时，我们总是从 **`<aop:config>` 元素**开始配置的。

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

- 使用 `<aop:aspect>` 元素声明了一个简单的切面;
- `ref` 元素引用了一个 POJO Bean，该 Bean 提供了在切面中通知所调用的方法;
- 在所有的『 通知元素 』中，`pointcut` 属性定义了通知所应用的切点，它的值是使用 AspectJ 切点表达式语法所定义的切点;
- `method` 属性指定每个通知所调用的方法;

![2020-05-20-10-12-54](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-20-10-12-54.png)

---

使用 **`<aop:pointcut>`** 将通用的切点表达式抽取到一个切点声明中，这样这个声明就能在所有的通知元素中使用了。

在通知元素中，用 **`pointcut-ref` 属性**来引用这个命名切点。

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

#### 声明环绕通知

声明环绕通知与声明其他类型的通知并没有太大区别。我们所需要做的仅仅是使用 **`<aop:around>` 元素**:

```xml
<aop:config>
  <aop:aspect ref="audience">
    <aop:pointcut
      id="performance"
      expression="execution(** concert.Performance.perform(..))" />

    <aop:around
      pointcut-ref="performance"
      method="watchPerformance" />

  </aop:aspect>
</aop:config>
```

#### 为通知传递参数

和在使用注解声明切面时一样，在切点表达式中包含一个参数，这个参数会传递到通知方法中去:

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

#### 通过切面引入新的功能

使用 Spring `aop` 命名空间中的 **`<aop:declare-parents>` 元素**，我们可以在 XML 配置中为被通知的 Bean 添加新的方法:

```xml
<aop:aspect>
  <aop:delate-parents
    types-matching="concert.Performance+"
    implement-interface="concert.Encoreable"
    default-impl="concert.DefaultEncoreable" />
</aop:aspect>
```

- `types-matching` 属性指定了要被扩展的类型;
- `implement-interface` 属性指定了新添加的接口;
- `default-impl` 属性指定了新接口的实现类;

上面 👆 使用 `default-impl` 属性用全限定类名来显式指定 `Encoreable` 的实现。或者，还可以使用 `delegate-ref` 属性引用了一个 Spring Bean 作为引入的实现类实例.

这需要在 Spring 上下文中存在一个 ID 为 `encoreableDelegate` 的 Bean。

```xml
<bean id="encoreableDelegate" class="concert.DefaultEncoreable" />
```

## Spring MVC

在 Web 开发中，状态管理、工作流以及验证都是需要解决的重要特性。HTTP 协议的无状态性决定了这些问题都不那么容易解决。

Spring 的 Web 框架就是为了帮你解决这些关注点而设计的。Spring MVC 基于模型-视图-控制器（Model-View-Controller，MVC）模式实现，它能够帮你构建像 Spring 框架那样灵活和松耦合的 Web 应用程序。

### Spring MVC 处理请求的过程

下图展示了浏览器发送的 HTTP 请求所经历的过程：

![2020-3-26-12-2-51.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-26-12-2-51.png)

1. 第一站是 Spring 的 **`DispatcherServlet`**。这是一个单实例的 Servlet 将请求委托给其他的 Spring MVC 控制器来执行实际的处理;
2. 『 **控制器** 』（controller）是一个用于处理请求的 Spring 组件。在典型的应用程序中可能会有多个控制器，`DispatcherServlet` 需要知道应该将请求发送给哪个控制器。所以 `DispatcherServlet` 以会查询一个或多个『 **处理器映射** 』（handler mapping） 来确定请求的下一站在哪里。处理器映射会根据请求所携带的 URL 信息来进行决策;
3. 找到了目标控制器，DispatcherServlet 会将请求发送给选中的控制器。控制器会处理请求携带的信息。在完成逻辑处理后，通常会产生一些结果信息，这些信息需要返回给客户端。这些信息被称为『 **模型** 』（model）。
4. 仅仅给用户返回原始的信息是不够的，这些信息需要以用户友好的方式进行格式化，一般会是 HTML。这叫做『 **视图** 』 （view）。
5. 控制器所做的最后一件事就是将模型数据打包，并且标示出用于渲染输出的视图名。它接下来会将请求连同模型和视图名发送回 DispatcherServlet 。
6. 传递给 DispatcherServlet 的视图名并不直接表示某个特定的视图文件。它仅仅传递了一个逻辑名称，这个名字将会用来查找产生结果的真正视图。DispatcherServlet 将会使用『 **视图解析器** 』（view resolver） 来将逻辑视图名匹配为一个特定的视图实现。
7. 最后，视图将使用模型数据渲染输出，这个输出会通过响应对象传递给客户端;

### 搭建 Spring MVC

#### 使用 Servlet 容器配置

按照传统的方式，像 `DispatcherServlet` 这样的 Servlet 会配置在 `web.xml` 文件中，这个文件会放到应用的 WAR 包里面。

而这里，我们展示使用 Java 来配置 `DispatcherServlet`.

🌰 下面展示了一个名为 Spittr 的应用的 `DispatcherServlet` 配置:

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

**扩展 `AbstractAnnotationConfigDispatcherServletInitializer` 的任意类都会自动地配置 `DispatcherServlet` 和 Spring 应用上下文**.

这个类就继承了 Servlet 规范的 `ServletContainerInitializer`，按照 Servlet 的规范，Java Web 容器启动的时候，就会加载实现这个类.

Spring 的应用上下文会位于应用程序的 Servlet 上下文之中。

这里重写了三个方法：

- **`getServletMappings()`，它会将一个或多个路径映射到 Dispatcher-Servlet 上**。在本例中，它映射的是 `/`，这表示它会处理进入应用的所有请求;
- 为了理解其他的两个方法，我们首先要理解 `DispatcherServlet` 和一个 Servlet 监听器（也就是 ContextLoaderListener）的关系:
  - `AbstractAnnotationConfigDispatcherServletInitializer` 会同时创建 `DispatcherServlet` 和 `ContextLoaderListener`;
  - `DispatcherServlet` 加载包含 Web 组件的 Bean，如控制器、视图解析器以及处理器映射;
  - 而 `ContextLoaderListener` 要加载应用中的其他 Bean。这些 bean 通常是驱动应用后端的中间层和数据层组件;
- **`getServletConfigClasses()` 方法返回的配置类将会用来定义 `DispatcherServlet` 应用上下文中的 Bean**;
- **`getRootConfigClasses()` 方法返回配置类将会用来配置 `ContextLoaderListener` 创建的应用上下文中的 Bean**;

#### 启用 Spring MVC

为了使用 Spring MVC 组件，用来配置 `DispatcherServlet` 的 `WebConfig` 配置类上需要加一个 **`@EnableWebMvc` 注解**:

```java
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc
public class WebConfig {
}
```

现在的配置中，我们还没有配置视图解析器，没有启动组件扫描:

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

- 现在添加了 **`@ComponentScan` 注解**，因此将会扫描 `spitter.web` 包来查找组件。包下面所有带 **`@Controller` 注解**的类，都会被当做控制器引入；
- 接下来声明了一个 `InternalResourceViewResolver` 视图解析器。它会查找 JSP 文件，在查找的时候，它会在视图名称上加一个特定的『 前缀 』和『 后缀 』:
  - 🌰 例如，名为 `home` 的视图将会解析为 `/WEB-INF/views/home.jsp`;
- 最后，`WebConfig` 类还扩展了 `WebMvcConfigurerAdapter` 并重写了其 `configureDefaultServletHandling()` 方法。通过调用 `DefaultServletHandlerConfigurer` 的 `enable()` 方法，我们要求 `DispatcherServlet` 将对静态资源的请求转发到 Servlet 容器中默认的 Servlet 上，而不是使用 `DispatcherServlet` 本身来处理此类请求;

### 编写控制器

#### Spittr 应用举例

为了更好的理解代码示例, 下面 👇 要使用 Spring 技术来构建一个简单的微博（microblogging）应用。

Spittr 应用有两个基本的实体类：

- Spitter（应用的用户）
- Spittle（用户发布的简短状态更新）

在本章中，我们会构建应用的 Web 层，创建展现 Spittle 的控制器, 以及处理用户注册成为 Spitter 的表单。

#### 编写基本的控制器

在 Spring MVC 中，控制器只是在类名上有 **`@Controller` 注解**，并且方法上添加了 **`@RequestMapping` 注解**的类，这个注解声明了方法所要处理的请求。

🌰 例如，下面代码中，控制器类要处理对 `/` 的请求， 并渲染应用的首页:

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

- `home()` 方法，带有 `@Request-Mapping` 注解。它的 `value` 属性指定了这个方法所要处理的请求路径;
- `method` 属性细化了它所处理的 HTTP 方法;
- 在本例中，当收到对 `/` 的 HTTP `GET` 请求时，就会调用 `home()` 方法;
- `home()` 方法返回了一个 String 类型的 `home` 字符串;
- 这个 String 字符串将会被 Spring MVC 解读为要渲染的『 视图名称 』
- `DispatcherServlet` 会要求视图解析器将这个逻辑名称解析为实际的视图;

鉴于我们配置 `InternalResourceViewResolver` 的方式，视图名 `home` 将会解析为 `/WEB-INF/views/home.jsp` 路径的 JSP 文件.

```jsp
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
  <head>
    <title>Spitter</title>
    <link rel="stylesheet"
          type="text/css"
          href="<c:url value="/resources/style.css" />" >
  </head>
  <body>
    <h1>Welcome to Spitter</h1>

    <a href="<c:url value="/spittles" />">Spittles</a> |
    <a href="<c:url value="/spitter/register" />">Register</a>
  </body>
</html>
```

#### 定义类级别的请求处理

我们可以**在类名上使用 `@RequestMapping` 注解来定义类级别的请求处理**。

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

- 当控制器在类级别上添加 `@RequestMapping` 注解时，这个注解会应用到控制器的所有处理器方法上;
- 处理器方法上的 `@RequestMapping` 注解会对类级别上的 `@RequestMapping` 的声明进行补充;

---

`@RequestMapping` 的 `value` 属性能够接受一个 String 类型的数组。

```java
@Controller
@RequesiMapping({"/", "/homepage"})
public class HomeController {
}
```

- 上面的控制器可以同时处理 `/` 和 `/homepage` 的请求;

#### 传递模型属性到视图中

上面 👆 我们展示了最简单的控制器编写方法. 在 Spittr 应用中，我们需要有一个页面展现最近提交的 Spittle 列表。因此，我们需要一个新的方法来处理这个页面。

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

- 可以看到 `SpittleController` 有一个构造器，这个构造器使用了 `@Autowired` 注解，用来注入 `SpittleRepository`, 它是用来访问数据库的 Bean, 这里省略了具体实现;
- 这个 `SpittleRepository` 随后又用在 `spittles()` 方法中，用来获取最新的 spittle 列表;
- 在 `spittles()` 方法中给定了一个 `Model` 作为参数。这样，`spittles()` 方法就能将 Repository 中获取到的 Spittle 列表填充到模型中;
- `Model` 实际上就是一个 Map（也就是 key-value 对的集合），它会传递给视图，这样数据就能渲染到客户端了;

如果你希望使用非 Spring 类型的话，那么可以用 `java.util.Map` 来代替 `Model`。

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

### 接受请求中的数据

Spring MVC 允许以多种方式将客户端中的数据传送到控制器的处理器方法中，包括：

- **查询参数**（Query Parameter）。
- **表单参数**（Form Parameter）。
- **路径变量**（Path Variable）。

#### 接收查询参数

```java
@RequestMapping(method=RequestMethod.GET)
public List<Spittle> spittles(
  @RequestParam(value="max", defaultValue=MAX_LONG_AS_STRING) long max,
  @RequestParam(value="count", defaultValue="20") int count) {
    return spittleRepository.findSpittles(max, count);
}
```

- 使用 **`@RequestParam` 注解**声明从请求中获取的参数;
- `value` 属性表示从请求中获取两个参数 `max` 和 `count`;
- `defaultValue` 参数表示如果请求中不存在目标参数, 使用默认值;
  - 因为从请求带过来的查询参数都是 String 类型的, 所以 `defaultValue` 属性需要 String 类型的值;
  - 在这里 `MAX_LONG_AS_STRING` 表示 Long 类型的最大值, 我们定义了一个 String 常量保存了 Long 最大值的字符串形式;
  - `private static final String MAX_LONG_AS_STRING = Long.toString(Long.MAX_VALUE);`
- 后面的 `long max` 和 `int count` 表示他们会分别被转换成 `long` 类型 和 `int` 类型，然后用 `max` 和 `count` 作为参数的名字传入 `spittles` 方法;

当服务器接收到 `/spittles?max=238900&count=50` 这样的请求, 就会调用 `spittles` 方法, 并且把查询参数传入进去;

#### 接收路径参数

通过使用 **`{}` 占位符**，也可以把路径的一部分作为参数。

```java
@RequestMapping(value="/{spittleId}", method=RequestMethod.GET)
public String spittle(
    @PathVariable("spittleId") long spittleId,
    Model model) {
  model.addAttribute(spittleRepository.findOne(spittleId));
  return "spittle";
}
```

它就能够处理针对 `/spittles/54321` 的请求，会把 `54321` 传递进来，作为 `spittleId` 的值。

如果 `@PathVariable` 中没有 `value` 属性的话，它会假设占位符的名称与方法的参数名相同。这能够让代码稍微简洁一些。

```java
@RequestMapping(value="/{spittleId}", method=RequestMethod.GET)
public String spittle(@PathVariable long spittleId, Model model) {
  model.addAttribute("spittle", spittleRepository.findOne(spittleId));
  return "spittle";
}
```

### 处理表单

Web 应用中经常需要处理从客户端发送过来的表单提交.

🌰 在 Spittr 应用中, 需要有一个页面用于注册账户, 它里面包含一个表单, 在用户点击提交时, 会发送 POST 请求到 `/register` 路径下:

```jsp
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
  <head>
    <title>Spitter</title>
    <link rel="stylesheet" type="text/css"
          href="<c:url value="/resources/style.css" />" >
  </head>
  <body>
    <h1>Register</h1>

    <form method="POST">
      First Name: <input type="text" name="firstName" /><br/>
      Last Name: <input type="text" name="lastName" /><br/>
      Email: <input type="email" name="email" /><br/>
      Username: <input type="text" name="username" /><br/>
      Password: <input type="password" name="password" /><br/>
      <input type="submit" value="Register" />
    </form>
  </body>
</html>
```

下面 👇 让我们来编写处理表单的控制器 SpitterController.

#### 编写处理表单的控制器

我们希望, 当处理注册表单的 POST 请求时，控制器需要接受表单数据并将表单数据保存为 `Spitter` 对象。为了防止重复提交（用户点击浏览器的刷新按钮有可能会发生这种情况），应该将浏览器重定向到新创建用户的基本信息页面。

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

  // 接收表单提交
  @RequestMapping(value="/register", method=POST)
  public String processRegistration(Spitter spitter) {
    spitterRepository.save(spitter);
    return "redirect:/spitter/" + spitter.getUsername();
  }

}
```

- 用于处理表单提交的 `processRegistration()` 方法，它接受一个 `Spitter` 对象作为参数。这个对象的各个属性将会使用请求中同名的参数进行填充;
- 方法返回一个 String 类型，用来指定视图。但是这个视图格式和以前我们所看到的视图有所不同。这里不仅返回了视图的名称供视图解析器查找目标视图，而且返回的值还带有重定向的格式;
- 当 InternalResourceViewResolver 看到视图格式中的 `redirect:` 前缀时，它就知道要将其解析为重定向的规则，而不是视图的名称:
  - 在本例中，它将会重定向到用户基本信息的页面;
  - 例如，如果 `Spitter.username` 属性的值为 `jbauer`，那么视图将会重定向到 `/spitter/jbauer`;
- 除了 `redirect:` InternalResourceViewResolver 还能识别 `forward:` 前缀。当它发现视图格式中以 `forward:` 作为前缀时，请求将会前往（forward）指定的 URL 路径;

#### 检验表单

在上面 👆 的代码中, 处理表单提交的 `processRegistration()` 方法, 接收的 Spitter 对象的属性是用请求中同名的参数的值填充的.

如果用户在提交表单的时候，`username` 或 `password` 文本域为空的话，那么将会导致在新建 Spitter 对象中，`username` 或 `password` 是空的 String。这可能会导致程序运行异常。

从 Spring 3.0 开始，在 Spring MVC 中提供了对 Java 校验 API 的支持。Java 校验 API 定义了多个注解，这些注解可以放到属性上，从而限制这些属性的值。

![2020-3-26-13-53-54.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-26-13-53-54.png)

我们所要做的事情就是将这些**检验注解添加到 `Spitter` 实体类的属性上**。如下的程序清单展现了 `Spitter` 类，它的属性已经添加了校验注解:

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

接下来需要修改 `processRegistration()` 方法来应用校验功能。

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

`Spitter` 参数添加了 **`@Valid` 注解**，这会告知 Spring，需要确保这个对象满足校验限制。在 Spitter 属性上添加校验限制并不能阻止表单提交。即便用户没有填写某个域或者某个域所给定的值超出了最大长度，`processRegistration()` 方法依然会被调用。

如果有校验出现错误的话，那么这些错误可以通过 `Errors` 对象进行访问，现在这个对象已作为 `processRegistration()` 方法的参数:

- ⚠️ 很重要一点需要注意，`Errors` 参数要紧跟在带有 `@Valid` 注解的参数后面;

`processRegistration()` 方法所做的第一件事就是调用 `Errors.hasErrors()` 来检查是否有错误:

- 如果有错误的话，将会返回到 `registerForm`, 也就是注册表单的视图;
- 但是现在，浏览器只会重新显示一个空的表单，在下一章中，我们将在表单中显示最初提交的值并将校验错误反馈给用户;
- 如果没有错误的话，`Spitter` 对象将会通过 `Repository` 进行保存，控制器会像之前那样重定向到用户基本信息页面;

## 渲染 Web 视图

上面我们编写的控制器只是返回一个视图逻辑名和相关的数据模型. Spring 通过『 视图解析器 』来找到真正的视图实现.

在之前, 我们使用名为 InternalResourceViewResolver 的视图解析器。在它的配置中，为了得到视图的名字，会使用 `/WEBINF/views/` 前缀和 `.jsp` 后缀，从而确定来渲染模型的 JSP 文件的物理位置.

下面 👇 我们来看看视图解析的基础知识以及 Spring 提供的其他视图解析器:

#### 理解视图解析

Spring MVC 定义了一个名为 **`ViewResolver`** 的接口，它大致如下所示：

```java
public interface ViewResolver {
  View resolverViewName(String viewName, Locale locale) throws Exception;
}
```

当给 `resolveViewName()` 方法传入一个视图名和 `Locale` 对象时，它会返回一个 `View` 实例。**`View`** 是另外一个接口，如下所示：

```java
public interface View {

  String getContentType();

  void render(Map<String, ?> model, HttpServletRequest request, HttpServlectResponse response) throws Exception;
}
```

**View 接口的任务就是接受模型以及 Servlet 的 `request` 和 `response` 对象，并将输出结果渲染到 `response` 中**.

---

对于这些接口, Spring 提供了多个内置的实现:

![2020-05-20-14-01-23](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-20-14-01-23.png)

在大多数应用中，我们只会用到其中很少的一部分。这些视图解析器中, 每一项都对应 Java Web 应用中特定的某种视图技术:

- InternalResourceViewResolver 一般会用于 JSP;
- TilesView-Resolver 用于 Apache Tiles 视图;
- FreeMarkerViewResolver 用于 FreeMarker 模板视图;
- Velocity-ViewResolver 用于 Velocity 模板视图;
- 等等;

#### 创建 JSP 视图

因为大多数 Java Web 应用都会用到 JSP，我们首先将会介绍 InternalResourceViewResolver，这个视图解析器一般会用来解析 JSP 视图.

InternalResourceViewResolver 遵循一种约定，会在视图名上添加前缀和后缀，进而确定一个 Web 应用中视图资源的物理路径。

🌰 假设逻辑视图名为 `home`:

- 通用的实践是将 JSP 文件放到 Web 应用的 `WEB-INF` 目录下，防止对它的直接访问;
- 如果我们将所有的 JSP 文件都放在 `/WEB-INF/views/` 目录下， 并且 `home` 页的 JSP 名为 `home.jsp`;
- 那么我们可以确定物理视图的路径就是逻辑视图名 `home` 再加上 `/WEB-INF/views/` 前缀和 `.jsp` 后缀:

![2020-05-20-15-56-57](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-20-15-56-57.png)

当使用 `@Bean` 注解的时候，我们可以按照如下的方式配置 InternalResource-ViewResolver，使其在解析视图时，遵循上述的约定:

```java
@Bean
public ViewResolver viewResolver() {
  InternalResourceViewResolver resolver = new InternalResourceViewResolver();
  resolver.setPrefix("/WEB-INF/views");
  resolver.setSuffix(".jsp");
  return resolver;
}
```

XML 配置方式如下:

```xml
<bean id="viewResolver" class="org.springframework.web.servlet.view.InternalResourceViewResolver"
      p:prefix="/WEB-INF/views"
      p:suffix=".jsp" />
```

::: warning

这部分并不重要, 所以就到此为止!

:::

## Spring MVC 的高级技术

### Spring MVC 配置的替代方案

在前面, 通过扩展 `AbstractAnnotationConfigDispatcherServletInitializer` 类, 我们快速搭建了 Spring MVC 环境, 里面提供了基本的 `DispatcherServlet` 和 `ContextLoaderListener` 环境:

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

除了 `DispatcherServlet` 以外，我们可能还需要额外的 Servlet 和 Filter；我们可能还需要对 `DispatcherServlet` 本身做一些额外的配置；或者，如果我们需要将应用部署到 Servlet 3.0 之前的容器中，那么还需要将 `DispatcherServlet` 配置到传统的 `web.xml` 中。

#### 自定义 DispatcherServlet 配置

在上面 👆 代码中, 我们扩展 `AbstractAnnotation-ConfigDispatcherServletInitializer` 类时重载的三个方法仅仅是必须要重载的 `abstract` 方法. 实际上还有更多的方法可以进行重载，从而实现额外的配置。

#### 添加其他的 Servlet 和 Filter

基于 Java 的初始化器（initializer）的一个好处就在于我们可以定义任意数量的初始化器类。因此，如果我们想往 Web 容器中注册其他组件的话，只需创建一个新的初始化器就可以了。

最简单的方式就是实现 Spring 的 `WebApplicationInitializer` 接口.

```java
package com.myapp.config;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration.Dynamic;
import org.springframework.web.WebApplicationInitializer;
import com.myapp.MyServlet;

public class MyServletInitializer extends WebApplicationInitializer {

  @Override
  public void onStartup(ServletContext servletContext) throws ServletException {
    Dynamic myServlet = servlectContext.addServlet("myServlet", MyServlet.class);

    myServlect.addMapping("/custom/**");
  }

}
```

- 它注册了一个 Servlet 并将其映射到一个路径上;
- 我们也可以通过这种方式来手动注册 Dispatcher-Servlet, 但这并没有必要, 因为 AbstractAnnotationConfigDispatcher-ServletInitializer 没用太多代码就将这项任务完成得很漂亮;

类似地，我们还可以创建新的 `WebApplicationInitializer` 实现来注册 Listener 和 Filter:

```java
@Override
public void onStartup(ServlectContext servletContext) throws ServletException {

  Dynamic filter = servletContext.addFilter("myFilter", MyFilter.class);

  filter.addMappingForUrlPatterns(null, false, "/custom/**");
}
```

---

如果你只是注册 Filter， 并且该 Filter 只会映射到 `DispatcherServlet` 上的话，那么在 `AbstractAnnotationConfigDispatcherServletInitializer` 中还有一种快捷方式:

```java
@Override
protected Filter() getServletFilters() {
  return new Filter[] { new MyFilter() };
}
```

- 重载 `getServletFilters()` 方法, 然后返回一个 `Filter` 数组;

#### 在 `web.xml` 中声明 DispatcherServlet

下面展示如何在 `web.xml` 中配置 DispatcherServlet 和 ContextLoader-Listener:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app version="2.5"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns="http://java.sun.com/xml/ns/javaee"
  xsi:schemaLocation="http://java.sun.com/xml/ns/javaee
      http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd" >

  <context-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>/WEB-INF/spring/root-context.xml</param-value>
  </context-param>

  <!-- ContextLoader Listener -->
  <listener>
    <listener-class>
      org.springframework.web.context.ContextLoaderListener
    </listener-class>
  </listener>

  <!-- Dispatcher Servlet -->
  <servlet>
    <servlet-name>appServlet</servlet-name>
    <servlet-class>
      org.springframework.web.servlet.DispatcherServlet
    </servlet-class>
    <param-name>contextConfigLocation</param-name>
    <param-value>
      /WEB-INF/spring/appServlet/servlet-context.xml
    </param-value>
    <load-on-startup>1</load-on-startup>
  </servlet>

  <servlet-mapping>
    <servlet-name>appServlet</servlet-name>
    <url-pattern>/</url-pattern>
  </servlet-mapping>
</web-app>
```

`ContextLoaderListener` 和 `DispatcherServlet` 各自都会加载一个 Spring 应用上下文:

- `ContextLoaderListener` 的参数 `contextConfigLocation` 指定了一个 XML 文件的地址，是 Spring 应用上下文的配置文件;
- 在这里例子中, `ContextLoaderListener` 所需的根上下文会从 `/WEB-INF/spring/rootcontext.xml` 中加载 Bean 定义;
- DispatcherServlet 所需的上下文配置文件在 `/WEB-INF/spring/appServlet/servlet-context.xml` 中;

上面 👆 都是让 `DispatcherServlet` 和 `ContextLoaderListener` 从 XML 中加载各自的应用上下文, 下面展示如何加载 JavaConfig 配置类:

需要先指定 DispatcherServlet 和 ContextLoaderListener 使用 **`AnnotationConfigWebApplicationContext`**，这是一个 WebApplicationContext 的实现类, **它会加载 Java 配置类**.

通过设置 **`contextClass`** 来进行 `AnnotationConfigWebApplicationContext` 的引入.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app version="2.5"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns="http://java.sun.com/xml/ns/javaee"
  xsi:schemaLocation="http://java.sun.com/xml/ns/javaee
      http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd" >

  <!-- 使用 AnnotationConfigWebApplicationContext -->
  <context-param>
    <param-name>contextClass</param-name>
    <param-value>
      org.springframework.web.context.support.AnnotationConfigWebApplicationContext
    </param-value>
  </context-param>

  <context-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>
      com.habuma.spitter.config.RootConfig
    </param-value>
  </context-param>

  <listener>
    <listener-class>
      org.springframework.web.context.ContextLoaderListener
    </listener-class>
  </listener>

  <servlet>
    <servlet-name>appServlet</servlet-name>
    <servlet-class>
      org.springframework.web.servlet.DispatcherServlet
    </servlet-class>
    <!-- 设置初始化参数 -->
    <!-- 使用 AnnotationConfigWebApplicationContext -->
    <init-param>
      <param-name>contextClass</param-name>
      <param-value>
        org.springframework.web.context.support.AnnotationConfigWebApplicationContext
      </param-value>
    </init-param>
    <context-param>
      <param-name>contextConfigLocation</param-name>
      <param-value>
        com.habuma.spitter.config.WebConfigConfig
      </param-value>
    </context-param>
    <load-on-startup>1</load-on-startup>
  </servlet>

  <servlet-mapping>
    <servlet-name>appServlet</servlet-name>
    <url-pattern>/</url-pattern>
  </servlet-mapping>
</web-app>
```

### 处理 multipart 形式的数据

在 Web 应用中, 经常需要处理 multipart 格式的二进制数据, 例如上传图片, 上传文件, 等等.

#### 配置 multipart 解析器

`DispatcherServlet` 并没有实现任何解析 multipart 请求数据的功能。**multipart 请求的处理交给 Spring 中 `MultipartResolver` 策略接口的实现类来处理**.

从 Spring 3.1 开 始，Spring 内置了两个 `MultipartResolver` 的实现供我们选择：

- `CommonsMultipartResolver`：使用 Jakarta Commons FileUpload 解析 multipart 请求；
- `StandardServletMultipartResolver`：依赖于 Servlet 3.0 对 multipart 请求的支持（始于 Spring 3.1）

在这两者之间，**`StandardServletMultipartResolver` 可能会是优选的方案**。因为它使用 Servlet 所提供的功能支持，并不需要依赖任何其他的项目。

```java
@Bean
public MultipartResolver multipartResolver() throws IOException {
  return new StandardServletMultipartResolver();
}
```

在使用 `StandardServletMultipartResolver` Bean 之前, 还要在 `web.xml` 或 `Servlet` 初始化类中，将 multipart 的具体细节作为 `DispatcherServlet` 配置的一部分.

例如, 假如我们采用 Servlet 初始化类的方式来配置 `DispatcherServlet` 的话，这个初始化类应该已经实现了 `WebApplicationInitializer`，那我们可以在 Servlet `registration` 上调用 `setMultipartConfig()` 方法，传入一个 `MultipartConfigElement` 实例:

```java
DispatcherServlet ds = new DispatchServlet();
Dynamic registration = context.addServlet("appServlet", ds);
registration.addMapping("/");
registration.setMultipartConfig(new MultipartConfigElement("/tmp/spittr/uploads"));
```

如果我们配置 `DispatcherServlet` 的 Servlet 初始化类继承了 `AbstractAnnotationConfigDispatcherServletInitializer` 或 `AbstractDispatcher-ServletInitializer` 的话，那么我们不会直接创建 `DispatcherServlet` 实例并将其注册到 Servlet 上下文中。

这样的话，将不会有对 Dynamic Servlet `registration` 的引用供我们使用了。但是，可以通过重载`customizeRegistration()` 方法来配置 multipart 的具体细节, 它会得到一个 Dynamic 类型对象作为参数:

```java
@Override
protected void customizeRegistration(Dynamic registration) {
  registration.setMultipartConfig(
    new MultipartConfigElement("/tmp/spittr/uploads");
  );
}
```

上面 👆 我们向 `setMultipartConfig` 方法中传入了一个 **`MultipartConfigElement` 对象**, 并且传入了一个字符串参数, 这个参数指定的是文件系统中的一个绝对目录，上传文件将会临时写入该目录中。

除了这个临时目录参数外, 还有很多其他的参数可以用来限制 multipart:

- 上传文件的最大容量（以字节为单位）。默认是没有限制的;
- 整个 multipart 请求的最大容量（以字节为单位），不会关心有多少个 part 以及每个 part 的大小。默认是没有限制的;
- 在上传的过程中，如果文件大小达到了一个指定最大容量（以字节为单位），将会写入到临时文件路径中。默认值为 0，也就是所有上传的文件都会写入到磁盘上;

🌰 例如，假设我们想限制文件的大小不超过 2MB，整个请求不超过 4MB，而且所有的文件都要写到磁盘中:

```java
@Override
protected void customizeRegistration(Dynamic registration) {
  registration.setMultipartConfig(
    new MultipartConfigElement("/tmp/spittr/uploads",
      2097152, 4194304, 0);
  );
}
```

---

在 XML 配置文件中, 可以使用 `<servlet>` 中的 `<multipart-config>` 元素来配置 `MultipartConfigElement`:

```xml
<servlet>
  <servlet-name>appServlet</servlet-name>
  <servlet-class>
    org.springframework.web.servlet.DispatchServlet
  </servlet-class>
  <load-on-startup>1</load-on-startup>
  <multipart-config>
    <location>/tmp/spittr/upload</location>
    <max-file-size>2097152</max-file-size>
    <max-request-size>4194304</max-request-size>
  </multipart-config>
</servlet>
```

#### 处理 multipart 请求

现在已经配置好了对 mutipart 请求的处理器，接下来就可以编写控制器方法来接收上传的文件. 要实现这一点，最常见的方式就是在某个控制器方法参数上添加 **`@RequestPart` 注解**:

```java
@RequestMapping(value="/register", method=POST)
public String processRegistration(
    @RequestPart("profilePicture") byte[]  profilePicture,
    @Valid Spittr spittr,
    Errors errors) {
  ...
}
```

- 我们想让这个方法能处理前端表单提交的图片数据;
- 方法中添加 `byte` 类型数组参数，并为其添加 `@RequestPart` 注解, 并且指定请求中对应的参数名;
- 当注册表单提交的时候，`profilePicture` 属性将会给定一个 byte 数组，这个数组中包含了请求中对应部分的数据;
- 如果用户提交表单的时候没有选择文件，那么这个数组会是空, 而不是 `null`;

现在我们仅仅是获得了上传文件的原始 `byte` 序列数据, 为了做更复杂的操作. Spring 提供了 `MultipartFile` 接口，它为处理 multipart 数据提供了内容更为丰富的支持:

```java
import java.io.File;
import java.io.IOException;
import java.io.InputStream;

public interface MultipartFile {
  String getName();
  String getOriginalFilename();
  String getContentType();
  boolean isEmpty();
  long getSize();
  byte[] getBytes() throws IOException;
  InputStream getInputStream() throws IOException;
  void transferTo(File dest) throws IOException;
}
```

---

**下面 👇 展示一下如何将文件保存到 Amazon S3 中**:

```java
private void saveImage(MultipartFile image) throws ImageUploadException {
  try {
    AWSCredentials awsCredentials = new AWSCredentials(s3AccessKey, s2SecretKey);
    S3Service s3 = new ResetS3Service(awsCredentials);

    S3Bucket bucket = s3.getBucket("spittrImages");
    S3Object imageObject = new S3Object(image.getOriginalFilename);

    imageObject.setDataInputStream(image.getInputStream());
    imageObject.setContentLength(image.getSize());
    imageObject.setContentType(image.getContentType());

    AccessControlList acl = new AccessControlList();
    acl.setOwner(bucket.getOwner());
    acl.grantPermission(GroupGrants.ALL_USERS, Permission.PERMISSION_READ);
    imageObject.setAcl(acl);

    s3.putObject(bucket, imageObject);
  } catch (Exception e) {
    throw new ImageUploadException("Unable to save image", e);
  }
}
```

我们在 `processRegistration()` 中可以调用 `saveImage()` 方法:

```java
@RequestMapping(value="/register", method=POST)
public String processRegistration(
    @RequestPart("profilePicture") MultipartFile  profilePicture,
    @Valid Spittr spittr,
    Errors errors) {
  ...
  saveImages(profilePicture);
  ...
}
```

- multipart 数据被转换成 `MultipartFile` 接口实现类实例, 然后作参数传入 `processRegistration` 方法;
- 之后调用 `saveImages` 方法将图片存入 Amazon S3;

### 处理异常

Servlet 请求的输出都是一个 Servlet 响应。如果在请求处理的时候，出现了异常，那它的输出依然会是 Servlet 响应。异常必须要以某种方式转换为响应。

Spring 提供了多种方式将异常转换为响应：

- 特定的 Spring 异常将会自动映射为指定的 HTTP 状态码；
- 异常上可以添加 `@ResponseStatus` 注解，从而将其映射为某一个 HTTP 状态码；
- 在方法上可以添加 `@ExceptionHandler` 注解，使其用来处理异常。

#### 将异常映射为 HTTP 状态码

不同的 HTTP 状态码有对应的 Spring 异常:

![2020-05-21-08-05-11](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-21-08-05-11.png)

异常一般会由 Spring 自身抛出，作为 DispatcherServlet 处理过程中或执行校验时出现问题的结果.

- 🌰 例如，如果 DispatcherServlet 无法找到适合处理请求的控制器方法，那么将会抛出 NoSuchRequestHandlingMethod-Exception 异常，最终的结果就是产生 404 状态码的响应（Not Found）

但是对于控制器执行时所抛出的异常就不能给出准确的状态码了, 默认都是 500 (服务器内部错误), 因为请求与控制器的映射没有问题, 出问题的是控制器内部的执行.

Spring 提供了一种机制，能够通过 `@ResponseStatus` 注解将异常映射为 HTTP 状态码。

```java
@RequestMapping(value="/{spittleId}", method=RequestMethod.GET)
public String spittle(
    @PathVariable("spittleId") long spittleId,
    Model model) {
  Spittle spittle = spittleRepository.findOne(spittleId);
  if (spittle == null) {
    throw new SpittleNotFoundException();
  }
  model.addAttribute(spittle);
  return "spittle";
}
```

- 在这里，会从 `SpittleRepository` 中，通过 ID 检索 Spittle 对象, 如果 `findOne()` 方法返回 `null` 的话，那么将会抛出 `SpittleNotFoundException` 异常;

`SpittleNotFoundException` 是一个继承自 `RuntimeException` 的非检查型异常. 默认情况下, 如果请求 URL 与控制器映射上没有问题, 任何异常都会产生 500 状态码 Internal Server Error 的响应.

单独创建 `SpittleNotFoundException` 异常类的原因就是希望能够用 `@ResponseStatus 注解` 自定义 HTTP 状态码, 以及错误信息:

```java
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND, reason="Spittle Not Found")
public class SpittleNotFoundException extends RuntimeException {
}
```

#### 编写异常处理的方法

有时候我们并不只是希望控制器简单的抛出异常, 然后响应给客户端一个 HTTP 状态码, 我们希望能够在控制器中处理异常, 并根据异常给出不同的响应内容:

🌰 假设, `SpittleRepository` 的 `save()` 方法将会抛出 `DuplicateSpittleException` 异常, `saveSpittle()` 方法可能需要处理这个异常:

```java
@RequestMapping(method=RequestMethod.POST)
public String saveSpittle(SpittleForm form, Model model) {
  try {
    spittleRepository.save(new Spittle(null, form.getMessage(), new Date(),
        form.getLongitude(), form.getLatitude()));
    return "redirect:/spittles";
  } catch (DuplicateSpittleException e) {
    return "error/duplicate";
  }
}
```

在这个控制器类中, 可能会在很多个方法中都使用 `spittleRepository` 去访问数据库, 对于抛出的相同的异常, 我们不希望在每个方法中都重新写一遍.

可以通过 **`@ExceptionHandler 注解`** 在控制器中定义通用的错误处理方法.

**用这个注解修饰的方法能处理同一个控制器中所有处理器方法所抛出的异常**.

```java
@ExceptionHandler(DuplicateSpittleException.class)
public String handleDuplicateSpittle() {
  return "error/duplicate";
}
```

- `handleDuplicateSpittle()` 方法上添加了 `@ExceptionHandler` 注解，当抛出 `DuplicateSpittleException` 异常的时候，将会委托该方法来处理;

这时之前的 `saveSpittle` 方法就可以简化成:

```java
@RequestMapping(method=RequestMethod.POST)
public String saveSpittle(SpittleForm form, Model model) {
  spittleRepository.save(new Spittle(null, form.getMessage(), new Date(),
    form.getLongitude(), form.getLatitude()));
  return "redirect:/spittles";
}
```

### 为控制器添加通知

上面 👆 我们将了如何在控制器中定义所有方法通用的异常处理器, 那么我们该如何去定义一个所有控制器都能通用的异常处理器呢?

为了避免在所有的控制器中都重新编写一遍相同的异常处理方法, 最简单的解决方案是创建一个控制器基类, 里面定义好异常处理方法, 然后让所有其他的控制器都扩展自这个基类;

但从 Spring 3.2 开始，这类问题有了一个新的解决方案：**控制器通知**。

控制器通知是任意带有 **`@ControllerAdvice` 注解**的类，这个类会包含一个或多个如下类型的方法：

- `@ExceptionHandler` 注解标注的方法；
- `@InitBinder` 注解标注的方法；
- `@ModelAttribute` 注解标注的方法;

在带有 `@ControllerAdvice` 注解的类中，以上所述的这些方法会运用到整个应用程序所有控制器中带有 `@RequestMapping` 注解的方法上.

在这里, 我们需要的是用 `@ExceptionHandler` 注解定义全部控制器通用的异常处理方法:

```java
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class AppWideExceptionHandler {

  @ExceptionHandler(DuplicateSpittleException.class)
  public String handleNotFound() {
    return "error/duplicate";
  }

}
```

- 现在，如果任意的控制器方法抛出了 `DuplicateSpittleException`，不管这个方法位于哪个控制器中，都会调用这个 `duplicateSpittleHandler()` 方法来处理异常;

### 跨重定向请求传递数据

## JDBC

几乎所有企业级应用都有数据持久化需求. Spring 自带了一组数据访问框架，集成了多种数据访问技术。Spring 都能够帮你消除持久化代码中那些重复单调的数据访问逻辑, 可以让我们专注以数据处理逻辑;

### Spring 的数据访问哲学

为了避免持久化的逻辑分散到应用的各个组件中，数据访问的功能都放到一个或多个专注于此项任务的组件中。这样的组件通常称为『 **数据访问对象** 』（Data Access Object，DAO）或 Repository。

为了避免应用与特定的数据访问策略耦合在一起，编写良好的 DAO 应该以接口的方式暴露功能:

![2020-05-21-10-08-21](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-21-10-08-21.png)

这样做的好处有:

- **易于测试**, 服务对象不关心具体的数据访问实现, 你可以为这些数据访问接口创建 mock 实现，这样无需连接数据库就能测试服务对象;
- **低耦合**, 应用程序与数据访问实现分离, 具体采用了什么持久化技术, 应用程序并不需要知道. 数据访问层可以灵活切换各种实现方式, 而不影响它的使用者;

#### Spring 的数据访问异常体系

JDBC 定义的异常太简单了. Spring JDBC 提供的了与具体持久化实现无关的数据访问异常体系. 为各种不同的数据访问问题定义异常.

Spring JDBC 提供的异常都继承自 `DataAccessException`。这是一个非首查异常. 也就是说我们并不被强制捕获 Spirng 抛出的数据访问异常.

Spirng 把是否要捕获异常的权力留给了开发人员。

为了利用 Spring 的数据访问异常，我们必须使用 Spring 所支持的『 数据访问模板 』。

#### 数据访问模板

在数据访问过程中, 会涉及到很多重复的操作, 只有很少的一部分是每次都会变化的. Spring 帮我们把重复的操作封装起来, 让我们只需要关心可变的部分.

Spring 将数据访问过程中固定的和可变的部分明确划分为两个不同的类：模板（template）和回调（callback）。模板管理过程中固定的部分，而回调处理自定义的数据访问代码。

![2020-05-21-10-28-27](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-21-10-28-27.png)

我们只需要在回调中关心应用程序相关的数据访问, 语句、绑定参数, 整理结果集.

针对不同的持久化平台，Spring 提供了多个可选的模板。

![2020-05-21-10-30-36](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-21-10-30-36.png)

在本章中，我们将会从基础的 JDBC 访问开始，因为这是从数据库中读取和写入数据的最基本方式。

### 基于 JDBC 驱动的数据源

无论选择 Spring 的哪种数据访问方式，你都需要配置一个数据源的引用。

Spring 提供了在 Spring 上下文中配置数据源 Bean 的多种方式. 这里我们只讲通过 JDBC 驱动程序定义的数据源.

Spring 提供了三个数据源类（均位于 `org.springframework.jdbc.datasource` 包中）供选择：

- `DriverManagerDataSource`：在每个连接请求时都会返回一个新建的连接;；
- `SimpleDriverDataSource`：与 `DriverManagerDataSource` 的工作方式类似，但是它直接使用 JDBC 驱动，来解决在特定环境下的类加载问题;
- `SingleConnectionDataSource`：在每个连接请求时都会返回同一个的连接。尽管它不是严格意义上的连接池数据源，但是你可以将其视为只有一个连接的池;

---

如下就是配置 `DriverManagerDataSource` 的方法：

```java
@Bean
public DataSource dataSource() {
  DriverManagerDataSource ds = new DriverManagerDataSource();
  ds.setDriverClassName("org.h2.Driver");
  ds.setUrl("jdbc:h2:tcp://localhost/~/spitter");
  ds.setUsername("sa");
  ds.setPassword("");
  return ds;
}
```

如果使用 XML 的话，`DriverManagerDataSource` 可以按照如下的方式配置:

```java
<bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource"
      p:driverClassName="org.h2.Driver"
      p:url="jdbc:h2:tcp://localhost/~/spitter"
      p:username="sa"
      p:password="" />
```

这些数据源 Bean 都不具备连接池功能, 每次连接数据库都重新建立连接, 这会导致性能问题.

### 使用 JDBC 模板

Spring 的 JDBC 框架承担了资源管理和异常处理的工作，从而简化了 JDBC 代码，让我们只需编写从数据库读写数据的必需代码。

Spring 为 JDBC 提供了三个模板类供选择：

- JdbcTemplate：最基本的 Spring JDBC 模板，这个模板支持简单的 JDBC 数据库访问功能以及基于索引参数的查询；
- NamedParameterJdbcTemplate：使用该模板类执行查询时可以将值以命名参数的形式绑定到 SQL 中，而不是使用简单的索引参数；
- SimpleJdbcTemplate：该模板类利用 Java 5 的一些特性如自动装箱、泛型以及可变参数列表来简化 JDBC 模板的使用。

**对于大多数的 JDBC 任务来说，JdbcTemplate 是最好方案**.

为了让 JdbcTemplate 正常工作，只需要为其设置 DataSource 就可以了:

```java
@Bean
public JdbcTemplate jdbcTemplate(DataSource dataSource) {
  return new JdbcTemplate(dataSource);
}
```

我们可以将 jdbcTemplate 装配到 DAO 中并使用它来访问数据库:

```java
@Repository
public class JdbcSpitterRepository implements SpitterRepository {

  private JdbcOperations jdbcOperations;

  @Autowired
  public JdbcSpitterRepository(JdbcOperations jdbcOperations) {
    this.jdbcOperations = jdbcOperations;
  }
  ...
}
```

## 使用 Spring MVC 创建 REST API

为了理解 REST 是什么，我们将它的首字母缩写拆分为不同的构成部分：

- **表述性**（Representational）：REST 资源实际上可以用各种形式来进行表述，包括 XML、JSON（JavaScript Object Notation）甚至 HTML —— 最适合资源使用者的任意形式；
- **状态**（State）：当使用 REST 的时候，我们更关注资源的状态而不是对资源采取的行为；
- **转移**（Transfer）：REST 涉及到转移资源，它以某种表述性形式从一个应用转移到另一个应用。

更简洁地讲，REST 就是将资源的状态以最适合客户端或服务端的形式从服务器端转移到客户端（或者反过来）。

在 REST 中，资源通过 **URL** 进行识别和定位。

REST 中会有行为，它们是通过 HTTP 方法来定义的。具体来讲，也就是 **GET、POST、PUT、DELETE、PATCH** 以及其他的 HTTP 方法构成了 REST 中的动作。这些 HTTP 方法通常会匹配为如下的 CRUD 动作：

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

如果想使用消息转换功能的话，我们需要告诉 Spring 跳过正常的模型/视图流程，并使用消息转换器。有不少方式都能做到这一点，但是最简单的方法是为控制器方法添加 `@ResponseBody` 注解。

```java
@RequestMapping(method=RequestMethod.GET, produces="application/json")
public @ResponseBody List<Spittle> spittles(
    @RequestParam(value="max", defaultValue=MAX_LONG_AS_STRING) long max,
    @RequestParam(value="count", defaultValue="20") int count) {
  return spittleRepository.findSpittles(max, count);
}
```

`@ResponseBody` 注解会告知 Spring，我们要将返回的对象作为资源发送给客户端，并将其转换为客户端可接受的表述形式。更具体地讲，DispatcherServlet 将会考虑到请求中 Accept 头部信息，并查找能够为客户端提供所需表述形式的消息转换器。

举例来讲，假设客户端的 Accept 头部信息表明它接受 `application/json`，并且 Jackson JSON 库位于应用的类路径下，那么将会选择 `MappingJacksonHttpMessageConverter`。消息转换器会将控制器返回的 Spittle 列表转换为 JSON 文档，并将其写入到响应体中。

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

`@RequestBody` 也能告诉 Spring 查找一个消息转换器，将来自客户端的资源表述转换为对象。

```java
@RequestMapping(method=RequestMethod.POST, consumes="application/json")
public @ResponseBody Spittle saveSpittle(@RequestBody Spittle spittle) {
  return spittleRepository.save(spittle);
}
```

@RequestMapping 表明它只能处理 `/spittles`（在类级别的 `@RequestMapping` 中进行了声明）的 POST 请求。POST 请求体中预期要包含一个 Spittle 的资源表述。

因为 Spittle 参数上使用了 `@RequestBody`，所以 Spring 将会查看请求中的 `Content-Type` 头部信息，并查找能够将请求体转换为 Spittle 的消息转换器。

如果客户端发送的 Spittle 数据是 JSON 表述形式，那么 `Content-Type` 头部信息可能就会是 `application/json`。在这种情况下，DispatcherServlet 会查找能够将 JSON 转换为 Java 对象的消息转换器。

`@RequestMapping` 有一个 `consumes` 属性，我们将其设置为 `application/json`。它会告诉 Spring 这个方法只会处理对 `/spittles` 的 POST 请求，并且要求请求的 `Content-Type` 头部信息为 `application/json`。如果无法满足这些条件的话，会由其他方法（如果存在合适的方法的话）来处理请求。

### 发送错误信息到客户端

作为 `@ResponseBody` 的替代方案，控制器方法可以返回一个 `ResponseEntity` 对象。`ResponseEntity` 中可以包含响应相关的元数据（如头部信息和状态码）以及要转换成资源表述的对象。

因为 `ResponseEntity` 允许我们指定响应的状态码，所以当无法找到 Spittle 的时候，我们可以返回 HTTP 404 错误。

### 在响应中设置头部信息

### RestTemplate

## 使用 MyBatis

在 MyBatis 时期， Spring 3.0 在 MyBatis 3.0 官方发布前就已经结束了，因为 Spring 开发团队不想发布一个基于非发布版 MyBatis 的整合支持. 于是 MyBatis 社区自己创建了一个 MyBatis-Spring 项目。MyBatis-Spring 可以帮助我们将 MyBatis 代码无缝整合到 Spring 中.

## 使用 NoSQL 数据库

### 使用 MongoDB 持久化文档数据

有一些数据的最佳表现形式是『 文档 document 』MongoDB 就是一个非关系型的文档数据库.

Spring Data MongoDB 提供了三种方式在 Spring 应用中使用 MongoDB：

- 通过注解实现『 对象-文档 』映射；
- 使用 MongoTemplate 实现基于模板的数据库访问；
- 自动化的运行时 Repository 生成功能。

在本章中，我们将会在一个购物订单系统中学习 MongoDB。

#### 启动 MongoDB

为了使用 MongoDB, 需要在 Spring 中配置如下的几个 Bean:

- MongoClient: 以便于访问 MongoDB 数据库。
- MongoTemplate: 实现基于模板的数据库访问;

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoFactoryBean;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.mongodb.Mongo;

@Configuration
@EnableMongoRepositories(basePackages = "orders.db")
public class MongoConfig {

  @Bean
  public MongoFactoryBean mongo() {
    MongoFactoryBean mongo = new MongoFactoryBean();
    mongo.setHost("localhost");
    return mongo;
  }

  @Bean
  public MongoOperations mongoTemplate(Mongo mongo) {
    return new MongoTemplate(mongo, "OrderDB");
  }
}
```

通过 `@EnableMongoRepositories` 启用 Spring Data MongoDB 的自动化 Repository 生成功能.

- 这个不是必须的, 但是十分建议使用;

在 `mongo` 方法中, 使用 MongoFactoryBean 类创建了一个 MongoClient 实例。创建的 `mongo` Bean 用于将 Spring Data MongoDB 与数据库本身连接起来（与使用关系型数据时 DataSource 所做的事情并没有什么区别）

在 `mongoTemplate` 方法中, 使用 MongoTemplate 类构造一个用以操作数据库的 Bean，用刚刚创建的 `mongo` Bean 作为参数传入, 并且填入数据库的名称.

---

除了直接声明这些 bean，我们还可以让配置类扩展 AbstractMongo-Configuration 并重载 `getDatabaseName()` 和`mongo()` 方法

```java
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;

@Configuration
@EnableMongoRepositories(basePackages = "orders.db")
public class MongoConfig extends AbstractMongoConfiguration {

	@Override
	protected String getDatabaseName() {
		return "OrdersDB";
	}

	@Override
	public Mongo mongo() throws Exception {
		return new MongoClient();
	}

}
```

这种配置方法更简洁, 这个配置中没有直接声明 MongoTemplate Bean，当然它还是会被隐式地创建.

这里重载了 `getDatabaseName()` 方法来提供数据库的名称。`mongo()` 方法依然会创建一个 MongoClient 的实例

---

假如 MongoDB 服务器不是运行在本地, 或者不是使用的默认 `27017` 端口, 可以在创建 MongoClient 的时候指定:

```java
public Mongo mongo() throws Exception {
  return new MongoClient("127.0.0.1", 37017);
}
```

---

Spring Data MongoDB 提供了 XML 配置的方案:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:mongo="http://www.springframework.org/schema/data/mongo"
  xsi:schemaLocation="
    http://www.springframework.org/schema/data/mongo
    http://www.springframework.org/schema/data/mongo/spring-mongo.xsd
    http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans.xsd" >

  <mongo:repositories base-package="order.db" />

  <mongo:mongo />

  <bean id="mongoTemplate" class="org.springframework.mongodb.core.MongoTemplate">
    <constructor-arg ref="mongo">
    <constructor-arg value="OrderDB">
  </bean>
</beans>
```

#### 为模型添加注解, 实现 MongoDB 持久化

Spring Data MongoDB 提供了一些将 Java 类型映射为 MongoDB 文档的注解, 以来实现『 **对象-文档映射** 』

![2020-06-17-21-35-29](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-06-17-21-35-29.png)

例如，如下的程序清单展现了如何为 Order 类添加注解，它会被持久化到 MongoDB 中。

```java
import java.util.Collection;
import java.util.LinkedHashSet;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document
public class Order {

	@Id
	private String id;

	@Field("client")
	private String customer;

	private String type;

	private Collection<Item> items = new LinkedHashSet<Item>();

	public String getCustomer() {
		return customer;
	}

	public void setCustomer(String customer) {
		this.customer = customer;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Collection<Item> getItems() {
		return items;
	}

	public void setItems(Collection<Item> items) {
		this.items = items;
	}

	public String getId() {
		return id;
	}

}
```

- `Order` 类添加了 `@Document` 注解，这样它就能够借助 MongoTemplate 或自动生成的 Repository 进行持久化
- `id` 属性上使用了 `@Id` 注解，用来指定它作为文档的 ID
- `customer` 属性上使用了 `@Field` 注解，这样的话，当文档持久化的时候 `customer` 属性将会映射为名为 `client` 的域
- 其他的属性并没有添加注解。除非将属性设置为瞬时态（transient）的，否则 Java 对象中所有的域都会持久化为文档中的域
- 如果我们不使用 `@Field` 注解进行设置的话，那么文档域中的名字将会与对应的 Java 属性相同

#### 使用 MongoTemplate 访问 MongoDB

接下来就要去使用 MongoTemplate 了. 在这里我们将 MongoTemplate 注入到一个类型为 MongoOperations 的属性中。

```java
@Autowired
MongoOperations mongo;
```

MongoOperations 是 MongoTemplate 所实现的接口.

下面看一下最为常用的几个操作:

```java
// 计算文档集合中有多少条文档。
long orderCount = mongo.getCollection("order").count();

// 保存一个新的 Order
// save() 方法的第一个参数是新创建的 Order，第二个参数是要保存的文档存储的名称。
Order order = new Order();
... // set properties and add line item
mongo.save(order, "order");

// 调用 findById() 方法来根据 ID 查找订单：
String orderId = ...;
Order order = mongo.findById(orderId, Order.class);


// 对于更高级的查询，我们需要构造 Query 对象并将其传递给 find() 方法
// 例如，要查找所有 client 域等于 “Chuck Wagon” 的订单:
List<Order> chucksOrders = mongo.find(
  Query.query(Criteria.where("client").is("Chuck Wagon")), Order.class);

// 例如, 想要查询 Chuck 所有通过 Web 创建的订单：
List<Order> chucksWebOrders = mongo.find(Query.query(
  Criteria.where("customer").is("Chuck Wagon")
    .and("type").is("WEB")), Order.class);

// 想移除某一个文档的话，那么就应该使用 remove() 方法：
mongo.remove(order);
```

#### 编写 MongoDB Repository

前面已经通过 @EnableMongoRepositories 注解启用了 Spring Data MongoDB 的 Repository 功能，接下来需要做的就是创建一个接口，Repository 实现要基于这个接口来生成.

接口要扩展 MongoRepository。下面 👇 OrderRepository 扩展了 MongoRepository 为 Order 文档提供了基本的 CRUD 操作。

```java
import orders.Order;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrderRepository extends MongoRepository<Order, String> {
}
```

MongoRepository 接口有两个参数，第一个是带有 @Document 注解的对象类型，也就是该 Repository 要处理的类型。第二个参数是带有 @Id 注解的属性类型。

尽管 OrderRepository 本身并没有定义任何方法，但是它会继承多个方法:

![2020-06-17-21-51-38](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-06-17-21-51-38.png)

上表 👆 中, T 映射为 Order，ID 映射为 String，而 S 映射为所有扩展 Order 的类型。

---

有时候可能希望 Repository 提供除内置方法以外的其他方法。通过给自定义方法, 按照遵循约定的方式命名, Spring Data MongoDB 可以自动为方法生成实现

```java
public interface OrderReporitory extends MongoRepository<Order, String> {
  List<Order> findByCustomer(String c);
  List<Order> findByCustomerLike(String c);
  List<Order> findByCustomerAndType(String c, String t);
  List<Order> findByCustomerLikeAndType(String c, String t);
}
```

这里我们有四个新的方法，每一个都是查找满足特定条件的 Order 对象。

- 其中第一个用来获取 customer 属性等于传入值的 Order 列表；
- 第二个方法获取 customer 属性 like 传入值的 Order 列表；
- 接下来方法会返回 customer 和 type 属性等于传入值的 Order 对象；
- 最后一个方法与前一个类似，只不过 customer 在对比的时候使用的是 like 而不是 equals。

find 这个查询动词并不是固定的。如果喜欢的话，我们还可以使用 get 作为查询动词, 如果 read 更适合的话，你还可以使用这个动词：

```java
List<Order> getByCustomer(String c);
List<Order> readByCustomer(String c);
```

在查询动词与 By 之前，我们有很大的灵活性。例如，我们可以标示要查找什么内容：

```java
List<Order> findOrdersByCustomer(String c);
```

如果只想要一个 Order 对象的话，我们可以只需简单地返回 Order.

这里，所返回的就是原本 List 中的第一个 Order 对象。如果没有匹配元素的话，方法将会返回 null。

```java
Order findASingleOrderByCustomer(String c);
```

@Query 注解可以用 JSON 为 Repository 方法指定自定义的查询。

```java
@Query("{'customer': 'Chuck Wagon', 'type': ?0}")
List<Order> findChucksOrders(String t);
```

### 使用 Redis 操作 key-value 数据

## 缓存数据

## Spring Security
