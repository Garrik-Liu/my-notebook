# JDBC

## JDBC 入门

### 什么是 JDBC

**JDBC 介绍**：

- 全称 Java 数据库连接 (Java Database Connectivity);
- 用于在 Java 语言编程中与数据库连接的 API；
- 由一组用 Java 语言编写的“类”和“接口”组成；
- JDBC 包含了数据库操作的规范。定义了相关的类，接口，方法， 但是并没有提供具体实现；
- 各大数据库厂商会提供对 JDBC 的实现；
- 简单说, JDBC 提供了操纵数据库的接口，但是没有具体实现。 通过引入不同的驱动包（`.jar` 文件），就可以连接到不同的数据库；

**JDBC 的 API 通常用于**：

- 连接到数据库
- 创建 SQL 或 MySQL 语句
- 在数据库中执行 SQL 或 MySQL 查询
- 查看和修改数据库中的数据记录

![2020-1-26-22-48-39.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-22-48-39.png)

### 使用 JDBC 建立数据库连接

**建立 JDBC 连接所涉及以下四个步骤**：

- 导入 JDBC 包：使用 `import` 语句在 Java 代码开头位置导入所需的类；
- 注册 JDBC 驱动程序：使 JVM 将所需的驱动程序实现加载到内存中，从而可以满足 JDBC 请求。使用 `Class.forName()` 方法，将驱动程序的类文件动态加载到内存中，并将其自动注册；
- 数据库 URL 配置：创建一个正确格式化的地址，指向要连接到的数据库；MySQL URL 格式为：`jdbc:mysql://hostname/`databaseName；
- 创建连接对象：调用 DriverManager 对象的 `getConnection()` 方法来建立实际的数据库连接。

![2020-1-26-22-49-47.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-22-49-47.png)

### 使用 JDBC 操作数据库

#### 创建数据表

- 连接上数据库；
- 创建你要执行的 SQL 语句；
- 执行 SQL；
  - 通过 `createStatement()` 创建要执行的静态 SQL 语句的 Statement 对象；
  - 通过 Statement 对象的 `executeUpdate(sql)` 方法来执行语句；
  - 返回结果：
    - DQL 操作返回查询结果集；
    - DML 返回受影响的行数；
    - DDL 返回 0；
  - 释放数据资源；
    - 通过 Statement 对象 `close()` 释放资源；
    - 通过 Connction 对象 `close()` 释放资源；

![2020-1-26-22-52-29.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-22-52-29.png)

#### 执行 DML 操作

- 执行 DML 操作的步骤和上面创建数据表相同；
- 我们拿“插入一条新数据”举例：

![2020-1-26-22-52-58.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-22-52-58.png)
![2020-1-26-22-53-10.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-22-53-10.png)

#### 执行 DQL 操作

- 通过 Statement 对象的 `executeQuery(sql)` 方法来执行语句；
- `executeQuery` 方法返回一个查询结果集 ResultSet；
- 结果集常用方法：
  - `next()`：如果当前指向的行有下一行数据，则指针指向下一行；
  - `getXxx(String columnName)` ：获取当前行中的，指定列的值。
    - "Xxx" 指的是目标列的数据类型；
    - 如果类型是 Varchar / Char / Text，则方法名为`getString`;
    - 如果类型是 Int / Integer，则方法名为 `getInt`;

![2020-1-26-22-55-0.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-22-55-0.png)

![2020-1-26-22-55-19.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-22-55-19.png)

### DAO 思想

#### DAO 什么是

- 当用上面的方法去重复地进行“增删改查”操作，重复代码会很多；所以我们需要将这些操作封装起来；
- DAO（Data Access Object）数据存取对象；
- DAO 位于“业务逻辑层”和“持久层”(数据库) 之间，从而实现对持久层数据访问；

![2020-1-26-22-56-36.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-22-56-36.png)

#### ORM 介绍

- ORM（Object Relational Mapping）对象关系映射；
- 将关系型数据库的数据映射为对象，以对象的形式展现；
- ORM 的目的是为了方便开发人员以面向对象的思想来实现对数据库的操作；

![2020-1-26-22-57-31.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-22-57-31.png)

![2020-1-26-22-57-40.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-22-57-40.png)

#### Domain 介绍

- Domain 就是一个类；
- 符合 JavaBean 规范（一个类中有字段和该字段的 Getter 和 Setter 方法）；
- 用于作为用户和数据库交互的中转站；
- 示例：下面就是一个 Domain 类：
  - ![2020-1-26-22-58-17.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-22-58-17.png)
  - **保存数据**：
    - 通过创建 `Stu` Domain 对象来进行数据中转；
    - 将 `Stu` 传入 DAO 对象的 `save` 方法来保存到数据库；
    - 如果不用 Domain 的话，我们要向 `save` 方法传入三个参数，现在一个参数就够了；
    - ![2020-1-26-23-0-40.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-23-0-40.png)
  - **读取数据**：
    - ![2020-1-26-23-1-20.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-23-1-20.png)

## DAO 编写

### DAO 设计规范

#### 编写 DAO 组件

- 定义 DAO 接口；
  - 开发中使用“面向接口”编程；
  - 接口只给出函数声明，但是没有给出函数的具体实现；
- 编写 DAO 实现类；
  - 根据需求来编写具体的实现类；

#### 面向接口的好处

- 业务逻辑清晰；
- 增强代码的扩展性，可维护性；
- 接口和实现相分离，适合团队开发；
- 降低耦合度，便于日后迭代；

#### Package 包名规范

- 整体规范：
  - 域名.模块名称.组件名称
- DAO 包规范：
  - `com.xxx.jdbc.domain` 存储所有的 Domain
  - `com.xxx.jdbc.dao` 存储所有的 DAO 接口
  - `com.xxx.jdbc.dao.impl` 存储所有的 DAO 接口实现类
  - `com.xxx.jdbc.dao.test` 存储 DAO 组件的测试类

#### Class 类名规范

- domain 类：
  - 存储在 domain 包中。用于描述一个对象，是一个 JavaBean，用于表示某一个对象的 CRUB 声明；
  - 命名规范：接口 + DomainDao
- dao 实现类：
  - 储存在 dao.impl 包中，用于表示 DAO 接口的实现类。
  - 命名规范：DomainDao + 实现类

### DAO 开发步骤

- 创建表
- 建立 domain 包 & domain 类
- 建立 dao 包 & dao 接口
- 建立 dao.impl 包 & dao 实现类
- 根据 dao 接口创建 dao 测试类
- 编写实现类当中 dao 的声明的方法体
- 每编写一个 dao 方法，进行功能测试

### DAO 编写 - 1： 结构搭建

先创建好 domain 包，domain 类；dao 包，dao 接口；dao.impl 包，dao 实现类；测试包，测试类；

![2020-1-26-23-6-16.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-23-6-16.png)

#### domain 类：

![2020-1-26-23-7-8.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-23-7-8.png)

#### dao 接口：

![2020-1-26-23-7-19.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-23-7-19.png)

#### dao 实现类：

![2020-1-26-23-9-45.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-23-9-45.png)

#### 测试类：

![2020-1-26-23-7-37.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-23-7-37.png)

### DAO 编写 - 2：编写 DAO 实现类

#### save 方法编写

![2020-1-26-23-10-35.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-23-10-35.png)

编写 save 方法单元测试：

- 在 StudentDaoTest 类中编写它的单元测试方法；
- 使用 **@Test** 修饰符创建单元测试；
- 之后选中方法，右键 -> Run As -> JUnit Test；

![2020-1-26-23-11-26.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-23-11-26.png)

测试成功后显式如下：

![2020-1-26-23-11-41.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-23-11-41.png)

#### delete 方法编写

只要把 SQL 语句改变就好了

![2020-1-26-23-13-27.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-23-13-27.png)

#### update 方法编写

![2020-1-26-23-13-35.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-23-13-35.png)

#### get 方法编写

- 把 `executeUpdate` 改成 `executeQuery`；
- 并将返回结果赋给一个 ResultSet 对象；

![2020-1-26-23-13-52.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-23-13-52.png)

#### getAll 方法编写

创建一个数组来存放查询到的多个结果；

![2020-1-26-23-14-43.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-23-14-43.png)

### DAO 编写 - 3：代码重构

#### 抽出配置变量

- 将数据库 URL，用户名，密码，驱动地址抽出；
- 声明为“私有成员变量”；

![2020-1-26-23-15-22.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-23-15-22.png)

- 在方法中通过 `this` 去获取成员变量：

![2020-1-26-23-15-49.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-23-15-49.png)

#### 将配置变量抽出到工具类

- 由于上面的这些配置变量可能在别的 DAO 实现类中也会被使用；
- 所以可以再抽出来放到一个“工具类”中：
  - 再创建一个 util 包，并创建 JDBCUtil 类：
    ![2020-1-26-23-16-35.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-23-16-35.png)
  - 把配置变量设置为 `public static`；
  - 这样可以直接通过“工具类名”来访问变量；
    ![2020-1-26-23-17-20.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-23-17-20.png)
- 在 DAO 实现类中，可以直接通过 JDBCUtil 类来获取配置变量了：
  ![2020-1-26-23-18-3.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-23-18-3.png)

#### 把 Connection 对象创建抽出到“JDBCUtil 工具类”

- 把创建 Connection 对象的过程，封装到 JDBCUtil 里：
  ![2020-1-26-23-19-20.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-23-19-20.png)

- 在实现类中的方法里，可以直接通过 JDBCUtil 来获取连接：

  ![2020-1-26-23-19-58.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-23-19-58.png)

- 由于驱动加载只需要加载一次；
- 可以把驱动加载放到静态代码块中；

#### 把释放资源操作抽出到 JDBCUtil

![2020-1-26-23-19-3.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-1-26-23-19-3.png)

## 预编译

## 连接池

## 代码重构
