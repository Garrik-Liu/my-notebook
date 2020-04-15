# Spring IoC

## 控制反转

- **Ioc (Inversion of Control) 控制反转，也被称为『 依赖注入 Dependency Injection 』**；
- IoC 是 Spring 容器的核心；

### 什么是 “控制反转”

::: details-open 例子：
下面 👇 通过一个例子来解释 “控制反转”：

- 假如有个电影，男主角由刘德华饰演；
- 电影中有一场戏，刘德华要说 “对不起，我是警察”；
- 现在我们通过 Java 类，去表示这种关系：

```java
public class MovieXxx {
  public void sceneXxx() {
    Protagonist xxx = new LiuDeHua(); // LiuDeHua 实现了 Protagonist 类
    xxx.say("对不起，我是警察");
  }
}
```

- 这种写法，使得 Protagonist 类，LiuDeHua 类与 MovieXxx 类耦合在了一起；
- 也就是角色，演员，剧本全部耦合在了一起；
- 当具体饰演的演员被替换时，剧本类的代码也需要被修改；

---

- 对于这个例子，在 MovieXxx 类中，Protagonist 角色类一般是不会变动的，而具体演员类是有可能变动的；
- 所以我们把 LiuDeHua 类从中抽出来，然后从外部传入；
- 现在创造一个导演类，它负责剧本，角色，演员三者之间的协调控制；
- 它会创造一个 LiuDeHua 实例，然后再把它传入到 MovieXxx 实例中；
- 这样使得剧本和演员解耦；

- **具体的传入方式有三种：构造函数注入，属性注入，接口注入**；
- **Spring 中只支持 “构造函数注入” 和 “属性注入”**；

```java
// 构造函数注入：

public class MovieXxx {
  private Protagonist xxx;

  public MovieXxx(Protagonist xxx) {
    this.xxx = xxx;
  }

  public void sceneXxx() {
    xxx.say("对不起，我是警察");
  }
}

// 导演类
public class Director {
  public void direct() {
    Protagonist xxx = new LiuDeHua();
    // 通过构造函数注入 “刘德华” 实例
    MovieXxx movieXxx = new MovieXxx(xxx);
  }
}
```

```java
// 属性注入：

public class MovieXxx {
  private Protagonist xxx;

  public void setXxx(Protagonist xxx) {
    this.xxx = xxx;
  }

  public void sceneXxx() {
    xxx.say("对不起，我是警察");
  }
}

// 导演类
public class Director {
  public void direct() {
    Protagonist xxx = new LiuDeHua();
    // 通过 Setter 方法注入 “刘德华” 实例
    MovieXxx movieXxx = new MovieXxx();
    movieXxx.setXxx(xxx);
  }
}
```

:::

- 上面 👆 例子中的导演类就实现了 “**控制反转**”；
  - “**控制**” 指的是具体角色扮演者的控制权；
  - “**反转**” 指的是这种控制权从 MovieXxx 剧本类中移除，转交到了导演的手中；
- 概括而言，**即某一接口的具体实现类的选择权从调用类中移除，转交给一个第三方决定，以此来移除调用类对接口实现类的依赖**；
- 这种操作，用 “依赖注入” 来形容更加易于理解；

### 通过容器完成依赖注入

- 上面例子 🌰 中，导演类还是要手动进行具体演员类，剧本类的实例化，以及设置依赖关系的工作；
- 假如现在我们有一个专门负责选角的第三方机构，他们能帮导演去做选演员的工作，那么导演就可以专心去导戏了；
- **Spring 就可以帮我们去自动完成，底层实现类的实例化，依赖关系装配等工作，让我们可以专注于业务逻辑的开发**；
- 我们通过配置文件，或者注解，或者 Java 配置类，来描述类的实例的状态，以及类与类之间的依赖关系；
- Spring 会根据我们提供的配置，自动完成类的初始化，和依赖注入的工作；

## Java 反射

## Spring 资源访问

### 资源抽象接口（不重要）

- Spring 自身设计了一个 **Resource 接口**，它为应用提供了更方便的底层资源访问能力，该接口拥有应对不同资源类型的实现类；
- Spring 框架使用 Resource 装在各种资源，包括配置文件资源；
- 下面 👇 是 Resource 接口，及具体实现类的关系图：

![2020-3-15-1-0-45.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-15-1-0-45.png)

![2020-3-15-1-7-0.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-15-1-7-0.png)

🌰 示例代码：

![2020-3-15-1-9-10.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-15-1-9-10.png)

### 资源加载

- 直接使用 Resource 的各种实现类去访问资源，这种操作还是太底层，太麻烦了；
- Spring 定义了一套更高级的资源加载的接口，并提供了实现类，这被称为 “**资源加载器**”；
- 可以直接通过**代表资源地址的特殊标识**，自动去调用对应的 Resource 实现类去访问资源；

#### 资源地址表达式

- 下图是 Spring 支持的代表资源所在地址的特殊标识；

![2020-3-15-1-16-19.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-15-1-16-19.png)

- 一个需要注意的点是：**`classpath:` 和 `classpath*:` 前缀的区别**：
  - 假如有多个 Jar 包或文件系统类路径都拥有一个相同的包名，例如 `com.garrik`；
  - `classpath:` 只会在**第一个**加载的包的类路径下查找目标资源；
  - `classpath*:` 会在**所有的** Jar 包及类路径下查找目标资源；
- `classpath*:` 对于**分模块打包**的应用非常有用；
  - 假如一个名为 `garrik` 的应用分成三个模块，一个模块对应一个配置文件；
  - 分别是 `config1.xml`，`config2.xml`，`config3.xml`。并且都放到 `com.garrik` 目录下；
  - 现在把每个模块都单独打成 Jar 包；
  - `classpath*:com.garrik.config*.xml` 可以成功加载这三个模块的配置文件；
- 资源地址中可以使用**三种通配符**：
  - `？`：皮遏制文件名中的一个字符；
  - `*`：匹配文件名中的任意个字符；
  - `**`：匹配多层路径；

#### 资源加载器

- 下图是 Spring 定义的资源加载器接口，及其实现类；

![2020-3-15-1-32-1.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-15-1-32-1.png)

- ResoureLoader 接口的 `getResource` 方法可以根据一个资源地址加载目标资源，但是它只支持带资源地址前端的表达式，不支持通配符；
- ResourePatternLoader 的 `getResource` 方法支持通配符；
- PathMatchingResourcePatternResolver 是实现类；

🌰 示例代码：

![2020-3-15-1-36-44.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-15-1-36-44.png)

## BeanFactory & ApplicationContext

- Spring 通过一个配置文件描述 Bean 及 Bean 之间的依赖关系；
- 利用 Java 语言的反射功能实例化 Bean 并建立 Bean 之间的依赖关系；

### BeanFactory 介绍

- BeanFactory 被称作 “**Bean 工厂**”：
- BeanFactory 实例一般被称作 “**IoC 容器**”；
- BeanFactory 是一个类工厂，它可以创造并管理各种类的实例；
- 这些可被创建及管理的类，被称作 **POJO**（ Plain Ordinary Java Object ），可以称为 “普通 Java 类” 或 “简单 Java 类”；
- Spring 称那些被创建和管理的对象，也就是 POJO 的实例为 **Bean**；
- BeanFactory 接口中最重要的方法是 **`getBean(String beanName)`**，用于从容器中返回指定名称的 Bean 对象；

#### BeanFactory 的类体系结构

- Spring 为 BeanFactory 提供了多种实现；

![2020-3-15-2-14-42.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-15-2-14-42.png)

- 上图中的 XmlBeanFactory 已经被废弃，建议改成组合使用 XmlBeanDefinitionReader 和 DefaultListableBeanFactory 替代；
- XmlBeanDefinitionReader 类是对 ResoureLoader 实现类的高级封装，用以读取 XML 格式的 Bean 配置文件；

#### BeanFactory 使用示例

![2020-3-15-2-21-51.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-15-2-21-51.png)
![2020-3-15-2-23-20.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-15-2-23-20.png)

### ApplicationContext 介绍

- ApplicationContext 被称作 “**应用上下文**”；
- 建立在 BeanFactory 的基础之上，提供了更多面向应用的功能，更易于开发实际应用；
- ApplicationContext 实例一般被称作 “**Spring 容器**”；
- 在我们开发时，直接使用 ApplicationContext，不要用 BeanFactory。BeanFactory 过于底层了，没必要用；

#### ApplicationContext 类体系结构

![2020-3-15-2-27-26.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-15-2-27-26.png)

- ApplicationContext 接口的主要实现类是：
  - ClassPathXmlApplicationContext：从类路径加载配置文件；
    - 对于它来说，`com.garrik.xxx` 等同于 `classpath:com.garrik.xxx`；
  - FileSystemXmlApplicationContext：从文件系统中加载配置文件；
    - - 对于它来说，`com.garrik.xxx` 等同于 `file:com.garrik.xxx`；
- 创建 Spring 容器时，可以传入一个包含多个配置文件的数组，Spring 会自动将它们整合在一起：
- ![2020-3-15-2-33-15.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-3-15-2-33-15.png)
- 在获取到 Application 实例后，就可以像 BeanFactory 一样，调用 getBean 返回 Bean 对象；
- 注意一个区别是：
  - BeanFactory 在初始化容器时，并未实例化 Bean 对象，直到第一次访问某个 Bean 时，才会实例化它；
  - ApplicationContext 在初始化容器时，就会实例化所有的 Bean 对象，这也让它的资源消耗更多一些；

## Bean 生命周期

- Bean 生命周期由多个特定的生命阶段组成；
- 在 Spring 中，可以从两个层面定义 Bean 的生命周期：
  - Bean 的作用范围；
  - 实例化 Bean 时所经历的一系类阶段；

## Bean 配置

## 基于注解的配置

## 基于 Java 类的配置
