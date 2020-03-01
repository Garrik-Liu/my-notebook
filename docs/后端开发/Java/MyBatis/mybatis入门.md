# Mybatis 入门

- 框架是整个或部分系统的可重用设计；
- 它是我们软件开发中的一套解决方案。不同的框架解决不同的问题；
- 框架封装了很多细节，是开发者可以使用简单的方式去实现功能。提高了开发效率；

## 什么是持久层

- J2EE 是在 SUN 公司领导下，多家公司参与共同制定的企业级分布式应用程序开发规范；
- J2EE 中将整个应用分成三层架构：
  - 表现层：User Interface；
  - 业务逻辑层：Business Logic Layer；
  - 数据访问层：Data Access Layer；
- 持久层又被称为 “数据访问层”。也就是用来负责对数据库的访问和操作；
- 之前我们一直使用 JDBC 作为持久层技术解决方案，用它来访问和操作数据库；
- 我们还了解过 Apache 的 BDUtils，它是对 JDBC 的简单封装；

::: warning
注意：J2EE 的三层架构和 MVC 设计模式是有区别的：

- **相同点**：在 MVC 和三层架构中，视图层都用来展示数据给用户；
- **不同点**：
  - MVC 中，Model 层中包含了 “业务逻辑” 和 “数据库代码”；
  - 三层架构中，数据访问层只用来处理和数据库相关操作；
  - 三层架构中，业务逻辑层处理业务逻辑；
  - 三层架构的 “业务逻辑层” + “数据访问层” = MVC 的 Model 层；
- MVC 中的 Controller 主要负责，告诉 Model 处理什么数据，然后告诉 View 展示什么数据；
- 🌰 拿用户登录举例：
  - **View**：用户在网页访问到登录的 HTML 页面，输入用户名和密码，点击登录，发送给服务器一条 POST 请求；
  - **Controller**：POST 请求被服务器的 Servlet 处理，拿出请求中的用户名和密码参数，然后传递给对应的 Service 方法；
  - **Model**：Service 方法中，拿用户名和密码去数据库进行查找和比对：
    - 匹配成功：把数据库中这个用户的其他信息查询出来，然后创建 User 对象，返回给 Servlet；
    - 匹配失败：返回失败信息给 Servlet；
  - **Controller**：Servlet 拿到返回后，再对浏览器进行响应；
  - **View**：浏览器通过拿到的响应，绘制页面；

:::

## 什么是 Mybatis

- MyBatis 几乎可以代替 JDBC，是一个支持普通 SQL 查询，存储过程和高级映射的，基于 Java 的**持久层框架**；
- MyBatis 对 JDBC 进行了封装，屏蔽了 JDBC API 的底层访问细节，使程序对于数据库的访问和操作更加简便；
- MyBatis 使用了 ORM 思想实现了对结果集的封装；
  - ORM：Object Relational Mapping 对象关系映射；
  - 把数据库表和实体类，数据库表中字段和实体类的属性对应起来。让我们可以通过操作实体类就实现操作数据库表；

## 第一个 Mybatis 实例

👇下面先来看一下如何去使用 Mybatis：

#### 创建项目

- 用 IDEA 编译器；
- 使用 Maven 创建一个空的 Java 项目

![2020-3-1-16-1-29.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-1-16-1-29.png)

#### 引入依赖

- 在项目目录中的 `pom.xml` 文件中引入依赖；
  - mybatis
  - mysql

![2020-3-1-16-3-34.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-1-16-3-34.png)

#### 创建用户表

- 在数据库中创建用户表 User；

![2020-3-1-16-13-17.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-1-16-13-17.png)

- 之后填入一些数据：

![2020-3-1-16-13-56.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-1-16-13-56.png)

#### 配置 Mybatis 

- 在项目目录下的 `/src/main/resources` 目录中创建 `SqlMapConfig.xml` 文件，作为 Mybatis 的配置文件；

![2020-3-1-16-51-30.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-1-16-51-30.png)

``` xml
<?xml version="1.0" encoding="utf-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <!-- 配置连接环境，默认使用 mysql -->
    <environments default="mysql">
        <!-- 配置 mysql 数据库的连接 -->
        <environment id="mysql">
            <!-- mybatis 使用 jdbc 事务管理方式 -->
            <transactionManager type="jdbc"/>
            <!-- mybatis 使用连接池方式来获取连接 -->
            <dataSource type="pooled">
                <!-- 配置连接数据库所需属性 -->
                <property name="driver" value="com.mysql.cj.jdbc.Driver"/>
                <property name="url" value="jdbc:mysql://localhost:3306/my_test_db"/>
                <property name="username" value="root"/>
                <property name="password" value="123456789"/>
            </dataSource>
        </environment>
    </environments>
</configuration>
```

#### 创建 User 实体类

- Mybatis 使用 ORM 对象关系映射的思想，实现了对查询结果集的封装；
- 数据表会对应一个**实体类**；
- 将数据表中的列名，和实体类的属性是一一对应的；
- 在 `com.garrik.Domain` 包下，创建实体类 User；
- 类里面按照数据表的列名，创建私有属性；
- 并且为所有属性创建 Getter / Setter 方法；

![2020-3-1-17-2-46.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-1-17-2-46.png)

#### 创建 User 类相关操作的接口类

- 在实际项目中，针对用户数据表我们会有很多 CRUD 操作；
  - 在之前使用 JDBC 时，我们会先创建 DAO 接口类，在里面定义好所有需要的方法接口；
  - 然后再去实现 DAO 接口；
  - 在开发业务逻辑时，只需要使用 DAO 实现类，就可以完成增删改查的操作；
- 在 MyBatis 中，我们也用类似的思想；
- 但我们只需要定义好接口，接口的实现类 Mybatis 会帮我去做；

- 在 `com.garrik.Mapper` 包下，创建 `UserMapper` 类；
- 在里面定义一个接口 `selectUser`。我们希望它可以查询所有的用户，然后放到一个集合里面返回；

![2020-3-1-17-17-4.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-1-17-17-4.png)

- 在 Mybatis 中，一种习惯是用 Mapper 作为接口类，和接口类对应的 XML 映射文件的后缀；
- 但是用别的后缀名称也无所谓，例如 DAO 也是可以的；

#### 创建接口类对应的 Mapper 映射文件

- 在 Mybatis 中，接口类需要有一个对应的映射文件；
- 里面定义了每个接口应该执行什么样的 SQL 语句；
- 以及定义返回的结果集的类型；

- 在 `src/main/resources` 目录下创建 `com/garrik/Mapper` 目录；
- 然后再在目录下创建 `UserMapper.xml` 文件；

![2020-3-1-17-26-42.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-1-17-26-42.png)

``` xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<!-- namespace 属性填写对应的接口类的全限定类名。也就是包路径 + 类名 -->
<mapper namespace="com.garrik.Mapper.UserMapper">
    <!--  查询所有用户  -->
    <select id="selectAll" resultType="com.garrik.Domain.User">
        SELECT * FROM user
    </select>
</mapper>
```

- `<mapper>` 元素内的 `namespace` 内填写所对应接口类的 “全限定名称”。也就是接口类的 “包路径” + “类名”；
- `<select>` 元素里定义了一个 SQL 的 SELECT 查询；
- `<select>` 元素的 id 属性是值为，接口类的对应的方法名；
- `resultType` 属性定义返回值的类型。此处就是实体类 User 的全限定名称；

#### 在 Mybatis 配置文件中，配置映射文件

- 在写完了 `UserMapper.xml` 映射文件后；
- 我们还要把新加的映射，配置到之前写的 Mybatis 配置文件中；
- 在 `SqlMapConfig.xml` 文件中加上如下标签；

![2020-3-1-17-45-14.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-1-17-45-14.png)

- 注意 `<mapper>` 的 `resource` 属性后写的是 “目录路径” 不是 “包路径”。需要用 `/` 表示目录层级关系；

#### 编写测试类，来执行查询

- 接下来就可以进行测试刚刚配置好的方法了；

``` java
// 读取配置文件
InputStream in = Resources.getResourceAsStream("SqlMapConfig.xml");
SqlSessionFactoryBuilder builder = new SqlSessionFactoryBuilder();

// 创建一个 SqlSession 对象
SqlSessionFactory factory = builder.build(in);
SqlSession session = factory.openSession();

// 获取 Mybatis 帮你创建的接口实现类
UserMapper userMapper = session.getMapper(UserMapper.class);

// 调用方法，获取结果
List<User> users = userMapper.selectAll();

for (User user : users) {
  System.out.println(user.getUid() + " " + user.getUsername() + " " + user.getEmail());
}

// 关闭 sqlsession，关闭 InputStream
session.close();
in.close();
```

- 通过 Resources 实例类，来读取 Mybatis 配置文件；
- 然后使用 SqlSessionFactoryBuilder 来用刚刚读取的配置文件，创建 SqlSessionFactory 工厂对象，创建时它会在内部对配置进行解析；
- 之后通过工厂对象创建一个 SqlSession 实例；
- 将接口类的字节码，传入到实例的 `getMapper` 方法，可以获取到接口的实现类；
- 之后就能使用刚刚定义的 `selectAll` 方法了；
- 下面👇是调用结果；


![2020-3-1-17-49-57.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-1-17-49-57.png)

## MyBatis XML 方式的基本用法

## MyBatis 注解方式的基本用法

## MyBatis 动态 SQL 

## MyBatis 代码生成器