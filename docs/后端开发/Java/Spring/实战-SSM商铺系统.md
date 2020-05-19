# 实战 - SSM 商铺系统

[慕课网 - Java 主流技术栈 SSM + SpringBoot 商铺系统](https://coding.imooc.com/learn/list/144.html)

💻 **项目开发环境**:

![2020-05-16-20-45-23](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-16-20-45-23.png)

## 项目功能模块划分

![2020-05-16-20-32-26](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-16-20-32-26.png)

![2020-05-16-20-32-58](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-16-20-32-58.png)

![2020-05-16-20-33-14](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-16-20-33-14.png)

## 实体类设计 & 数据表创建

![2020-05-16-20-38-39](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-16-20-38-39.png)

#### 区域

![2020-05-16-20-41-10](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-16-20-41-10.png)

```java
public class Area {
  // 主键ID
  private Integer areaId;
  // 名称
  private String areaName;
  // 权重，越大越排前显示
  private Integer priority;
  // 创建时间
  private Date createTime;
  // 更新时间
  private Date lastEditTime;

  // 省略 getter & setter
}
```

```sql
CREATE TABLE `tb_area` (
  `area_id` int(2) NOT NULL AUTO_INCREMENT,
  `area_name` varchar(200) NOT NULL,
  `priority` int(2) NOT NULL DEFAULT '0',
  `create_time` datetime DEFAULT NULL,
  `last_edit_time` datetime DEFAULT NULL,
  PRIMARY KEY (`area_id`),
  UNIQUE KEY `UK_AREA` (`area_name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
```

![2020-05-16-21-56-59](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-16-21-56-59.png)

#### 用户

![2020-05-16-21-42-12](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-16-21-42-12.png)

```java
public class PersonInfo {
  // 主键ID
  private Long userId;
  // 用户名称
  private String name;
  // 用户头像
  private String profileImg;
  // 用户邮箱
  private String email;
  // 用户性别
  private String gender;
  // 可用状态：0、被禁止 1、可用
  private Integer enableStatus;
  // 1.顾客 2.店家 3.超级管理员
  private Integer userType;
  // 创建时间
  private Date createTime;
  // 最近一次的更新时间
  private Date lastEditTime;

  // 省略 getter & setter
}
```

```sql
CREATE TABLE `tb_person_info` (
  `user_id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL,
  `profile_img` varchar(1024) DEFAULT NULL,
  `email` varchar(1024) DEFAULT NULL,
  `gender` varchar(2) DEFAULT NULL,
  `enable_status` int(2) NOT NULL DEFAULT '0' COMMENT '0:禁止使用本商城，1:允许使用本商城',
  `user_type` int(2) NOT NULL DEFAULT '1' COMMENT '1:顾客，2:店家，3:超级管理员',
  `create_time` datetime DEFAULT NULL,
  `last_edit_time` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
```

![2020-05-16-21-56-42](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-16-21-56-42.png)

#### 微信账号 & 本地账号

![2020-05-16-21-53-42](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-16-21-53-42.png)

```java
public class WechatAuth {
  // 主键ID
  private Long wechatAuthId;
  // 微信获取用户信息的凭证，对于某个公众号具有唯一性
  private String openId;
  // 创建时间
  private Date createTime;
  // 用户信息
  private PersonInfo personInfo;
}
```

```sql
CREATE TABLE `tb_wechat_auth` (
  `wechat_auth_id` int(10) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) NOT NULL,
  `open_id` varchar(80) NOT NULL DEFAULT '',
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`wechat_auth_id`),
  UNIQUE KEY `open_id` (`open_id`),
  KEY `fk_wechatauth_profile` (`user_id`),
  CONSTRAINT `fk_wechatauth_profile` FOREIGN KEY (`user_id`) REFERENCES `tb_person_info` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
```

![2020-05-16-21-56-22](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-16-21-56-22.png)

---

```java
public class LocalAuth {
  // 主键ID
  private Long localAuthId;
  // 帐号
  private String username;
  // 密码
  private String password;
  // 创建时间
  private Date createTime;
  // 最近一次的更新时间
  private Date lastEditTime;
  // 个人信息，关系为一一对应
  private PersonInfo personInfo;
}
```

```sql
CREATE TABLE `tb_local_auth` (
  `local_auth_id` int(10) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) NOT NULL,
  `username` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL,
  `create_time` datetime DEFAULT NULL,
  `last_edit_time` datetime DEFAULT NULL,
  PRIMARY KEY (`local_auth_id`),
  UNIQUE KEY `uk_local_profile` (`username`),
  KEY `fk_localauth_profile` (`user_id`),
  CONSTRAINT `fk_localauth_profile` FOREIGN KEY (`user_id`) REFERENCES `tb_person_info` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
```

![2020-05-16-21-59-14](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-16-21-59-14.png)

#### 头条

![2020-05-16-22-00-41](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-16-22-00-41.png)

```java
public class HeadLine {
  // 主键ID
  private Long lineId;
  // 头条名字
  private String lineName;
  // 头条链接，点击头条会进入相应链接中
  private String lineLink;
  // 头条图片
  private String lineImg;
  // 权重，越大越排前显示
  private Integer priority;
  // 0.不可用 1.可用
  private Integer enableStatus;
  // 创建时间
  private Date createTime;
  // 最近一次的更新时间
  private Date lastEditTime;
}
```

```sql
CREATE TABLE `tb_head_line` (
  `line_id` int(100) NOT NULL AUTO_INCREMENT,
  `line_name` varchar(1000) DEFAULT NULL,
  `line_link` varchar(2000) NOT NULL,
  `line_img` varchar(2000) NOT NULL,
  `priority` int(2) DEFAULT NULL,
  `enable_status` int(2) NOT NULL DEFAULT '0',
  `create_time` datetime DEFAULT NULL,
  `last_edit_time` datetime DEFAULT NULL,
  PRIMARY KEY (`line_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
```

![2020-05-16-22-02-00](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-16-22-02-00.png)

#### 店铺类别

![2020-05-16-22-02-42](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-16-22-02-42.png)

```java
public class ShopCategory {

  // 主键ID
  private Long shopCategoryId;
  // 类别名
  private String shopCategoryName;
  // 类别描述
  private String shopCategoryDesc;
  // 类别图片地址(针对一级类别)
  private String shopCategoryImg;
  // 权重，越大越排前显示
  private Integer priority;
  // 创建时间
  private Date createTime;
  // 最近的更新时间
  private Date lastEditTime;
  // 父类别
  private ShopCategory parent;
}
```

```sql
CREATE TABLE `tb_shop_category` (
  `shop_category_id` int(11) NOT NULL AUTO_INCREMENT,
  `shop_category_name` varchar(100) NOT NULL DEFAULT '',
  `shop_category_desc` varchar(1000) DEFAULT '',
  `shop_category_img` varchar(2000) DEFAULT NULL,
  `priority` int(2) NOT NULL DEFAULT '0',
  `create_time` datetime DEFAULT NULL,
  `last_edit_time` datetime DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`shop_category_id`),
  KEY `fk_shop_category_self` (`parent_id`),
  CONSTRAINT `fk_shop_category_self` FOREIGN KEY (`parent_id`) REFERENCES `tb_shop_category` (`shop_category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;
```

![2020-05-16-22-04-50](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-16-22-04-50.png)

#### 店铺

![2020-05-16-22-05-26](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-16-22-05-26.png)

```java
public class Shop {
  // 主键ID
  private Long shopId;
  // 店铺名称
  private String shopName;
  // 店铺简介
  private String shopDesc;
  // 店铺地址
  private String shopAddr;
  // 店铺号码
  private String phone;
  // 店铺门面图片地址
  private String shopImg;
  // 权重，越大越排前显示
  private Integer priority;
  // 创建时间
  private Date createTime;
  // 最近一次更新的时间
  private Date lastEditTime;
  // -1.不可用 0.审核中 1.可用
  private Integer enableStatus;
  // 超级管理员给店家的提醒，包括为什么审核不通过等
  private String advice;
  // 店铺所属区域
  private Area area;
  // 店铺是属于哪个店家的
  private PersonInfo owner;
  // 店铺类别
  private ShopCategory shopCategory;
}
```

```sql
CREATE TABLE `tb_shop` (
  `shop_id` int(10) NOT NULL AUTO_INCREMENT,
  `owner_id` int(10) NOT NULL COMMENT '店铺创建人',
  `area_id` int(5) DEFAULT NULL,
  `shop_category_id` int(11) DEFAULT NULL,
  `shop_name` varchar(256) NOT NULL,
  `shop_desc` varchar(1024) DEFAULT NULL,
  `shop_addr` varchar(200) DEFAULT NULL,
  `phone` varchar(128) DEFAULT NULL,
  `shop_img` varchar(1024) DEFAULT NULL,
  `priority` int(3) DEFAULT '0',
  `create_time` datetime DEFAULT NULL,
  `last_edit_time` datetime DEFAULT NULL,
  `enable_status` int(2) NOT NULL DEFAULT '0',
  `advice` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`shop_id`),
  KEY `fk_shop_area` (`area_id`),
  KEY `fk_shop_profile` (`owner_id`),
  KEY `fk_shop_shopcate` (`shop_category_id`),
  CONSTRAINT `fk_shop_area` FOREIGN KEY (`area_id`) REFERENCES `tb_area` (`area_id`),
  CONSTRAINT `fk_shop_profile` FOREIGN KEY (`owner_id`) REFERENCES `tb_person_info` (`user_id`),
  CONSTRAINT `fk_shop_shopcate` FOREIGN KEY (`shop_category_id`) REFERENCES `tb_shop_category` (`shop_category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;
```

![2020-05-16-22-07-26](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-16-22-07-26.png)

#### 商品类别

```java
public class ProductCategory {
  // 主键ID
  private Long productCategoryId;
  // 该类别是属于哪个店铺的
  private Long shopId;
  // 类别名
  private String productCategoryName;
  // 权重，越大越排前显示
  private Integer priority;
  // 创建时间
  private Date createTime;
}
```

```sql
CREATE TABLE `tb_product_category` (
  `product_category_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_category_name` varchar(100) NOT NULL,
  `priority` int(2) DEFAULT '0',
  `create_time` datetime DEFAULT NULL,
  `shop_id` int(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`product_category_id`),
  KEY `fk_procate_shop` (`shop_id`),
  CONSTRAINT `fk_procate_shop` FOREIGN KEY (`shop_id`) REFERENCES `tb_shop` (`shop_id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;
```

![2020-05-16-22-11-48](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-16-22-11-48.png)

#### 商品图片

```java
public class ProductImg {
  // 主键ID
  private Long productImgId;
  // 图片地址
  private String imgAddr;
  // 图片简介
  private String imgDesc;
  // 权重，越大越排前显示
  private Integer priority;
  // 创建时间
  private Date createTime;
  // 标明是属于哪个商品的图片
  private Long productId;
}
```

```sql
CREATE TABLE `tb_product_img` (
  `product_img_id` int(20) NOT NULL AUTO_INCREMENT,
  `img_addr` varchar(2000) NOT NULL,
  `img_desc` varchar(2000) DEFAULT NULL,
  `priority` int(2) DEFAULT '0',
  `create_time` datetime DEFAULT NULL,
  `product_id` int(20) DEFAULT NULL,
  PRIMARY KEY (`product_img_id`),
  KEY `fk_proimg_product` (`product_id`),
  CONSTRAINT `fk_proimg_product` FOREIGN KEY (`product_id`) REFERENCES `tb_product` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
```

![2020-05-16-22-12-21](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-16-22-12-21.png)

#### 商品

![2020-05-16-22-14-06](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-16-22-14-06.png)

```java
public class Product {
  // 主键ID
  private Long productId;
  // 商品名
  private String productName;
  // 商品简介
  private String productDesc;
  // 简略图
  private String imgAddr;
  // 原价
  private String normalPrice;
  // 现价(推广价格)
  private String promotionPrice;
  // 权重，越大越排前显示
  private Integer priority;
  // 商品积分
  private Integer point;
  // 创建时间
  private Date createTime;
  // 最近一次的更新时间
  private Date lastEditTime;
  // 0.下架 1.在前端展示系统展示
  private Integer enableStatus;

  // 图片详情图列表，跟商品是多对一的关系
  private List<ProductImg> productImgList;
  // 商品类别，一件商品仅属于一个商品类别
  private ProductCategory productCategory;
  // 店铺实体类，标明商品属于哪个店铺
  private Shop shop;
}
```

```sql
CREATE TABLE `tb_product` (
  `product_id` int(100) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(100) NOT NULL,
  `product_desc` varchar(2000) DEFAULT NULL,
  `img_addr` varchar(2000) DEFAULT '',
  `normal_price` varchar(100) DEFAULT NULL,
  `promotion_price` varchar(100) DEFAULT NULL,
  `priority` int(2) NOT NULL DEFAULT '0',
  `point` int(10) NOT NULL DEFAULT '0',
  `create_time` datetime DEFAULT NULL,
  `last_edit_time` datetime DEFAULT NULL,
  `enable_status` int(2) NOT NULL DEFAULT '0',
  `product_category_id` int(11) DEFAULT NULL,
  `shop_id` int(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`product_id`),
  KEY `fk_product_procate` (`product_category_id`),
  KEY `fk_product_shop` (`shop_id`),
  CONSTRAINT `fk_product_procate` FOREIGN KEY (`product_category_id`) REFERENCES `tb_product_category` (`product_category_id`),
  CONSTRAINT `fk_product_shop` FOREIGN KEY (`shop_id`) REFERENCES `tb_shop` (`shop_id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
```

![2020-05-16-22-15-27](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-16-22-15-27.png)

## 配置 Maven

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">

  <modelVersion>4.0.0</modelVersion>

  <groupId>com.garrik</groupId>
  <artifactId>mystore</artifactId>
  <packaging>jar</packaging>
  <version>1.0-SNAPSHOT</version>

  <name>Mytore</name>

  <properties>
    <spring.version>5.1.8.RELEASE</spring.version>
  </properties>

  <dependencies>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.12</version>
      <scope>test</scope>
    </dependency>
    <!-- https://mvnrepository.com/artifact/ch.qos.logback/logback-classic -->
    <dependency>
      <groupId>ch.qos.logback</groupId>
      <artifactId>logback-classic</artifactId>
      <version>1.2.3</version>
    </dependency>

    <!-- Spring -->
    <!-- 1)包含Spring 框架基本的核心工具类。Spring 其它组件要都要使用到这个包里的类，是其它组件的基本核心 -->
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-core</artifactId>
      <version>${spring.version}</version>
    </dependency>
    <!-- 2)这个jar 文件是所有应用都要用到的，它包含访问配置文件、创建和管理bean 以及进行Inversion of Control
        / Dependency Injection（IoC/DI）操作相关的所有类。如果应用只需基本的IoC/DI 支持，引入spring-core.jar
        及spring-beans.jar 文件就可以了。 -->
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-beans</artifactId>
      <version>${spring.version}</version>
    </dependency>
    <!-- 3)这个jar 文件为Spring 核心提供了大量扩展。可以找到使用Spring ApplicationContext特性时所需的全部类，JDNI
        所需的全部类，instrumentation组件以及校验Validation 方面的相关类。 -->
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-context</artifactId>
      <version>${spring.version}</version>
    </dependency>
    <!-- 4) 这个jar 文件包含对Spring 对JDBC 数据访问进行封装的所有类。 -->
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-jdbc</artifactId>
      <version>${spring.version}</version>
    </dependency>
    <!-- 5) 为JDBC、Hibernate、JDO、JPA等提供的一致的声明式和编程式事务管理。 -->
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-tx</artifactId>
      <version>${spring.version}</version>
    </dependency>
    <!-- 6)Spring web 包含Web应用开发时，用到Spring框架时所需的核心类，包括自动载入WebApplicationContext特性的类、Struts与JSF集成类、文件上传的支持类、Filter类和大量工具辅助类。 -->
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-web</artifactId>
      <version>${spring.version}</version>
    </dependency>
    <!-- 7)包含SpringMVC框架相关的所有类。 -->
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-webmvc</artifactId>
      <version>${spring.version}</version>
    </dependency>
    <!-- 8)Spring test 对JUNIT等测试框架的简单封装 -->
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-test</artifactId>
      <version>${spring.version}</version>
      <scope>test</scope>
    </dependency>
    <!-- Servlet web -->
    <dependency>
      <groupId>javax.servlet</groupId>
      <artifactId>javax.servlet-api</artifactId>
      <version>4.0.1</version>
    </dependency>
    <!-- json解析 -->
    <dependency>
      <groupId>com.fasterxml.jackson.core</groupId>
      <artifactId>jackson-databind</artifactId>
      <version>2.9.9</version>
    </dependency>
    <!-- Map工具类 对标准java Collection的扩展 spring-core.jar需commons-collections.jar -->
    <dependency>
      <groupId>commons-collections</groupId>
      <artifactId>commons-collections</artifactId>
      <version>3.2.2</version>
    </dependency>
    <!-- DAO: MyBatis -->
    <dependency>
      <groupId>org.mybatis</groupId>
      <artifactId>mybatis</artifactId>
      <version>3.5.1</version>
    </dependency>
    <dependency>
      <groupId>org.mybatis</groupId>
      <artifactId>mybatis-spring</artifactId>
      <version>2.0.1</version>
    </dependency>
    <!-- 数据库 -->
    <dependency>
      <groupId>mysql</groupId>
      <artifactId>mysql-connector-java</artifactId>
      <version>8.0.16</version>
    </dependency>
    <!--  扩展了传统的jdbc数据库连接池  -->
    <dependency>
      <groupId>com.mchange</groupId>
      <artifactId>c3p0</artifactId>
      <version>0.9.5.4</version>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.8.1</version>
        <configuration>
          <source>1.8</source>
          <target>1.8</target>
        </configuration>
      </plugin>

      <plugin>
        <groupId>org.eclipse.jetty</groupId>
        <artifactId>jetty-maven-plugin</artifactId>
        <version>9.4.12.v20180830</version>
        <configuration>
          <scanIntervalSeconds>2</scanIntervalSeconds>
          <webApp>
            <contextPath>/mystore</contextPath>
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

## 配置文件

目前的项目目录如下:

![2020-05-17-10-31-00](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-17-10-31-00.png)

#### jdbc.properties

```
jdbc.driver=com.mysql.jdbc.cj.Driver
jdbc.url=jdbc:mysql://localhost:3306/mystore?useUnicode=true&characterEncoding=utf8
jdbc.username=root
jdbc.password=123456789
```

#### Spring 配置

**spring-dao.xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/context
        http://www.springframework.org/schema/context/spring-context.xsd">
    <!-- 配置整合mybatis过程 -->
    <!-- 1.配置数据库相关参数properties的属性：${url} -->
    <context:property-placeholder location="classpath:jdbc.properties" />

    <!-- 2.数据库连接池 -->
    <bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
        <property name="driverClass" value="${jdbc.driver}" />
        <property name="jdbcUrl" value="${jdbc.url}" />
        <property name="user" value="${jdbc.username}" />
        <property name="password" value="${jdbc.password}" />

        <!-- c3p0连接池的私有属性 -->
        <property name="maxPoolSize" value="30" />
        <property name="minPoolSize" value="10" />
        <property name="initialPoolSize" value="10"/>
        <!-- 关闭连接后不自动commit -->
        <property name="autoCommitOnClose" value="false" />
        <!-- 获取连接超时时间 -->
        <property name="checkoutTimeout" value="10000" />
        <!-- 当获取连接失败重试次数 -->
        <property name="acquireRetryAttempts" value="2" />
    </bean>

    <!-- 3.配置SqlSessionFactory对象 -->
    <bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
        <!-- 注入数据库连接池 -->
        <property name="dataSource" ref="dataSource" />
        <!-- 配置MyBaties全局配置文件:mybatis-config.xml -->
        <property name="configLocation" value="classpath:mybatis-config.xml" />
        <!-- 扫描entity包 使用别名 -->
        <property name="typeAliasesPackage" value="com.garrik.mystore.entity" />
        <!-- 扫描sql配置文件:mapper需要的xml文件 -->
        <property name="mapperLocations" value="classpath:mapper/*.xml" />
    </bean>

    <!-- 4.配置扫描Dao接口包，动态实现Dao接口，注入到spring容器中 -->
    <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
        <!-- 注入sqlSessionFactory -->
        <property name="sqlSessionFactoryBeanName" value="sqlSessionFactory" />
        <!-- 给出需要扫描Dao接口包 -->
        <property name="basePackage" value="com.garrik.mystore.dao" />
    </bean>
</beans>

```

**spring-service.xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/context
        http://www.springframework.org/schema/context/spring-context.xsd
        http://www.springframework.org/schema/tx
        http://www.springframework.org/schema/tx/spring-tx.xsd">
    <!-- 扫描service包下所有使用注解的类型 -->
    <context:component-scan base-package="com.garrik.mystore.service" />

    <!-- 配置事务管理器 -->
    <bean id="transactionManager"
          class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
        <!-- 注入数据库连接池 -->
        <property name="dataSource" ref="dataSource" />
    </bean>

    <!-- 配置基于注解的声明式事务 -->
    <tx:annotation-driven transaction-manager="transactionManager" />
</beans>

```

**spring-web.xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/context
        http://www.springframework.org/schema/context/spring-context.xsd
        http://www.springframework.org/schema/mvc
        http://www.springframework.org/schema/mvc/spring-mvc-3.2.xsd">
    <!-- 配置SpringMVC -->
    <!-- 1.开启SpringMVC注解模式 -->
    <mvc:annotation-driven />

    <!-- 2.静态资源默认servlet配置 (1)加入对静态资源的处理：js,gif,png (2)允许使用"/"做整体映射 -->
    <mvc:resources mapping="/resources/**" location="/resources/" />
    <mvc:default-servlet-handler />

    <!-- 3.定义视图解析器 -->
    <bean id="viewResolver"
          class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix" value="/WEB-INF/html/"></property>
        <property name="suffix" value=".html"></property>
    </bean>

    <!-- 4.扫描web相关的bean -->
    <context:component-scan base-package="com.garrik.mystore.web" />
</beans>

```

#### mybatis-config.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <!-- 配置全局属性 -->
    <settings>
        <!-- 使用jdbc的getGeneratedKeys获取数据库自增主键值 -->
        <setting name="useGeneratedKeys" value="true" />

        <!-- 使用列标签替换列别名 默认:true -->
        <setting name="useColumnLabel" value="true" />

        <!-- 开启驼峰命名转换:Table{create_time} -> Entity{createTime} -->
        <setting name="mapUnderscoreToCamelCase" value="true" />
    </settings>
</configuration>

```

#### web.xml

```xml
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
                          http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
         version="3.1" metadata-complete="true">
    <display-name>My Store</display-name>
    <servlet>
        <servlet-name>spring-dispatcher</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>classpath:spring/spring-*.xml</param-value>
        </init-param>
    </servlet>
    <servlet-mapping>
        <servlet-name>spring-dispatcher</servlet-name>
        <!-- 默认匹配所有的请求 -->
        <url-pattern>/</url-pattern>
    </servlet-mapping>
</web-app>
```

## 编写第一个功能模块

下面 👇 以『 Area 区域模块 』做示例, 来展示如何在 Spring 项目中编写功能模块:

![2020-05-17-16-32-46](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-17-16-32-46.png)

**AreaDao 接口**:

首先编写 Area 的 DAO 接口:

```java
import com.garrik.mystore.domain.Area;

import java.util.List;


/**
 * @author xiangliu
 */
public interface AreaDao {

  /**
   * 列出区域列表
   * @return List<Area>
   */
  List<Area> queryArea();
}
```

---

**AreaDao 的 Mapper 文件**:

之后编写 DAO 接口对应的 Mybatis Mapper 文件, 定义好各个方法需要实际执行的查询语句, 以及方法返回的结果.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.garrik.mystore.dao.AreaDao">
    <select id="queryArea" resultType="com.garrik.mystore.domain.Area">
        SELECT area_id, area_name, priority, create_time, last_edit_time
        FROM tb_area
        ORDER BY priority DESC
    </select>
</mapper>
```

---

**编写 AreaDao 的测试用例**:

为了保证代码编写的正确性, 这里可以为 AreaDao 编写一个测试用例.

在 `test` 目录下按照项目的包结构创建各个 `package`.

![2020-05-17-16-37-03](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-17-16-37-03.png)

先编写一个 `BaseTest` 类, 在里面配置好 Spring 容器:

```java
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 * 配置 Spring 和 Junit 整合， Junit 启动时加载 Spring IOC 容器
 */
@RunWith(SpringJUnit4ClassRunner.class)
// 指定 Spring 配置文件
@ContextConfiguration({"classpath:spring/spring-dao.xml", "classpath:spring/spring-service.xml"})
public class BaseTest {}
```

之后在 `dao` 包下面创建 `AreaDaoTest` 测试类:

在里面使用 AreaDao 接口的实现类, 来调用对应的方法, 测试功能是否符合预期:

```java
package com.garrik.mystore.dao;

import com.garrik.mystore.BaseTest;
import com.garrik.mystore.domain.Area;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import static org.junit.Assert.assertEquals;

public class AreaDaoTest extends BaseTest {
  @Autowired
  private AreaDao areaDao;

  @Test
  public void testQueryArea() {
    List<Area> areaList = areaDao.queryArea();
    assertEquals(2, areaList.size());
  }
}
```

![2020-05-17-16-42-26](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-17-16-42-26.png)

---

**AreaService 类**:

接下来编写调用 `AreaDao` 的 Service 类 `AreaService`. 它负责执行实际的业务逻辑.

```java
import com.garrik.mystore.dao.AreaDao;
import com.garrik.mystore.domain.Area;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author xiangliu
 */
@Service
public class AreaService {
  @Autowired
  private AreaDao areaDao;

  public List<Area> getAreaList() {
    return areaDao.queryArea();
  }
}
```

同样为其编写一个测试用例:

```java
import com.garrik.mystore.BaseTest;
import com.garrik.mystore.domain.Area;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import static org.junit.Assert.assertEquals;

public class AreaServiceTest extends BaseTest {
  @Autowired
  private AreaService areaService;

  @Test
  public void testGetAreaList() {
    List<Area> areaList = areaService.getAreaList();
    assertEquals("西苑", areaList.get(0).getAreaName());
  }
}
```

---

**AreaController 类**:

编写 `AreaController` 类. 在里面配置好各个 URL 请求路径, 与对应的处理方法的映射关系. 客户端发来的请求, 会被传送到对应的方法中进行处理.

```java
import com.garrik.mystore.domain.Area;
import com.garrik.mystore.service.AreaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author xiangliu
 */

@Controller
@RequestMapping("/superadmin")
public class AreaController {
  @Autowired
  private AreaService areaService;

  /**
   * 获取区域列表
   * @return Map<String, Object>
   */
  @RequestMapping(value = "/listarea", method = RequestMethod.GET)
  @ResponseBody
  private Map<String, Object> listArea() {
    Map<String, Object> modelMap = new HashMap<String, Object>();
    List<Area> list = new ArrayList<Area>();
    try {
      list = areaService.getAreaList();
      modelMap.put("rows", list);
      modelMap.put("total", list.size());
    } catch(Exception e) {
       e.printStackTrace();
      modelMap.put("success", false);
      modelMap.put("errMsg", e.toString());
    }
    return modelMap;
  }
}
```

之后运行服务器, 用客户端发送请求:

![2020-05-17-16-47-36](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-05-17-16-47-36.png)

## 店铺注册功能

## 店铺编辑 & 列表功能
