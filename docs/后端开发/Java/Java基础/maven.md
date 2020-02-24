# Maven

[C 语言中文网 Maven](http://c.biancheng.net/view/4715.html)
[一点教程 Maven](http://www.yiidian.com/maven/what-is-maven.html)

## 什么是 Maven

- Maven 是 Apache 开源组织奉献的一个开源项目；
- Maven 的本质是一个**项目管理工具**，将项目开发和管理过程抽象成一个**项目对象模型**（POM）；
- 开发人员只需做一些简单的配置，就可以批量完成项目的构建、报告和文档的生成工作；
- Maven 可以统一管理所有的依赖 jar 包；
- Maven 作为一个开放的架构，提供了公共接口，方便同第三方插件集成。程序员可以将自己需要的插件，动态地集成到 Maven，从而扩展新的管理功能；

## Maven 安装

- 前往 http://maven.apache.org/download.cgi 下载 Binary 文件；
- 下载完，解压后，放到自己想放的目录下。我放在了 `/Library` 目录下；
- 之后修改 `~/.bash_profile` 文件配置路径；

```bash
export M2_HOME=/Library/apache-maven-3.3.3
export PATH=$PATH:$M2_HOME/bin
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.7.0_11.jdk/Contents/Home
```

- 修改完，执行 `source ~/.bash_profile`；
- 然后执行 `mvn -v` 查看是否安装成功；

![2020-2-24-11-25-22.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-24-11-25-22.png)

## 命令行创建 Maven 项目

#### 直接输入 mvn archetype:generate

- 输入命令 `mvn archetype:generate`，按回车，根据提示输入参数；
- 会先让你选骨架，默认使用 `maven-archetype-quickstart`；
- 然后一步步提示输入 groupId、artifactId、version、packageName 等信息；
- 上面输入的这些信息，在后面有讲解；
- ![2020-2-24-13-12-31.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-24-13-12-31.png)
- 之后项目就创建好了；

#### 在命令中使用参数

- 也可以在命令行中，直接把各种参数都填进去；

```bash
mvn archetype:generate \
    -DgroupId=com.garrik \
    -DartifactId=HelloWorld \
    -DarchetypeArtifactId=maven-archetype-quickstart \
    -Dversion=1.0-SNAPSHOT
```

## Maven 基础概念

![2020-2-24-14-12-11.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-24-14-12-11.png)

### POM

- POM (Project Object Model) 项目对象模型；
- 是一个 XML 文件，包含了项目的基本信息，用于描述项目如何构建，声明项目依赖，等等；
- 执行任务或目标时，Maven 会在当前目录中查找 POM。它读取 POM，获取所需的配置信息，然后执行目标；

```xml

<project xmlns = "http://maven.apache.org/POM/4.0.0"
    xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation = "http://maven.apache.org/POM/4.0.0
    http://maven.apache.org/xsd/maven-4.0.0.xsd">

    <!-- 模型版本 -->
    <modelVersion>4.0.0</modelVersion>
    <!-- 公司或者组织的唯一标志，并且配置时生成的路径也是由此生成， 如com.companyname.project-group，maven会将该项目打成的jar包放本地路径：/com/companyname/project-group -->
    <groupId>com.companyname.project-group</groupId>

    <!-- 项目的唯一ID，一个groupId下面可能多个项目，就是靠artifactId来区分的 -->
    <artifactId>project</artifactId>

    <!-- 版本号 -->
    <version>1.0</version>
</project>
```

### 坐标

- groupId：定义当前项目隶属项目、组织，公司
- artifactId：定义实际项目中的一个模块
- version：定义当前项目的当前版本
- groupId , artifactId , version 三个元素是项目的坐标，是这个项目的唯一标识；
- groupId 建议具体到项目名，因为公司或者组织下有多个项目，而 artifactId 只能代表模块名；

### Maven 仓库

- 在 Maven 的术语中，仓库是一个位置（place）；
- Maven 仓库是项目中依赖的第三方库，这个库所在的位置叫做仓库；
- 在 Maven 中，任何一个依赖、插件或者项目打包之后的输出，都可以称之为构件 （一般这个构件是 jar 包）；
- Maven 仓库能帮助我们管理构件。它就是放置所有 JAR 文件（WAR，ZIP，POM 等等）的地方；
- Maven 仓库有三种类型：
  - 本地（local）
  - 中央（central）
  - 远程（remote）

**本地仓库**：

- 运行 Maven 的时候，Maven 所需要的任何构件都是直接从本地仓库获取的；
- 如果本地仓库没有，它会首先尝试从远程仓库下载构件至本地仓库，然后再使用本地仓库的构件；
- 默认情况下，每个用户在自己的用户目录下都有一个路径名为 `.m2/respository/` 的仓库目录；
- 可以在 Maven 所在根目录的 `\conf` 目录中的 `settings.xml` 文件中定义另一个路径；

**中央仓库**：

- Maven 中央仓库是由 Maven 社区提供的仓库，其中包含了大量常用的库；
- 一般来说，简单的 Java 项目依赖的构件都可以在这里下载到；
- 要浏览中央仓库的内容，maven 社区提供了一个 URL：http://search.maven.org/#browse；

**远程仓库**：

- 远程仓库是开发人员自己定制仓库，包含了所需要的代码库或者其他工程中用到的 jar 文件；
- 下面的 pom.xml，Maven 将从远程仓库中下载该 pom.xml 中声明的所依赖的（在中央仓库中获取不到的）文件
- ![2020-2-24-13-52-29.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-24-13-52-29.png)

**依赖搜索顺序**：
当我们执行 Maven 构建命令时，Maven 开始按照以下顺序查找依赖的库：

- 步骤 1：在**本地仓库**中搜索，如果找不到，执行步骤 2，如果找到了则执行其他操作。
- 步骤 2：在**中央仓库**中搜索，如果找不到，并且有一个或多个远程仓库已经设置，则执行步骤 4，如果找到了则下载到本地仓库中以备将来引用。
- 步骤 3：如果远程仓库没有被设置，Maven 将简单的停滞处理并抛出错误（无法找到依赖的文件）。
- 步骤 4：在一个或多个**远程仓库**中搜索依赖的文件，如果找到则下载到本地仓库以备将来引用，否则 Maven 将停止处理并抛出错误（无法找到依赖的文件）。

### 工程结构

Maven 的标准工程结构如下：

![2020-2-24-13-55-36.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-24-13-55-36.png)

- 如果是 Web 项目，`src/main/` 目录下，还应该有 `webapp` 目录。用来存放 web 项目资源；

### 项目骨架 Archetype

- 骨架是一个 Maven 项目的基础模板；
- 利用这个模板我们就可快速的建立一个新的该类型项目；
- Maven 所提供的 archetype 功能都是由插件 Maven Archetype Plugin 完成的；
- 主要命令：
  - `archetype:generate` 从项目骨架创建一个 maven 项目；
  - `archetype:create-from-project` 根据一个项目创建项目骨架；

### 生命周期

- Maven 生命周期就是为了对所有的构建过程进行抽象和统一；
- Maven 有三套相互独立的生命周期：
  - **Clean Lifecycle** 在进行真正的构建之前进行一些清理工作；
  - **Default Lifecycle** 构建的核心部分，编译，测试，打包，部署等等；
  - **Site Lifecycle** 生成项目报告，站点，发布站点；
- 它们是相互独立的，可以分别被调用；
- 管理项目生命周期过程都是基于**插件**完成的；

下面 👇 列出了一些关键节点：

![2020-2-24-14-8-37.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-24-14-8-37.png)

![2020-2-24-14-10-32.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-24-14-10-32.png)

## idea 集成 Maven 插件

- 打开 IDEA，点开 Preference，然后设置 Maven 的路径；

![2020-2-24-11-58-3.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-24-11-58-3.png)

- 但是这里 IDEA 已经提供了一个自带的 Maven，就可以直接用；

#### 在 IDEA 中使用骨架创建 Java 项目

- 想在 idea 中使用骨架，在创建项目时，选择 Maven；
- 然后点击 Create from archetype；
- 然后选择想要的骨架就可以了；
- 之后整个项目的结构，都会被搭建好；

![2020-2-24-12-8-49.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-24-12-8-49.png)

#### 在 IDEA 中使用骨架创建 Web 项目

- 选择 `maven-archetype-webapp` 骨架；

![2020-2-24-14-23-26.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-24-14-23-26.png)

- 然后点击 App Configuration，配置 Tomcat；

![2020-2-24-14-24-18.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-24-14-24-18.png)

- 然后选择 Tomcat Server

![2020-2-24-14-20-2.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-24-14-20-2.png)

- 直接可以直接击 fix，就可以自动配置了；
- 选择 war explored；
  - war 模式这种可以称之为是发布模式，这是先打成 war 包，再发布；
  - war exploded 模式是直接把文件夹、jsp 页面 、classes 等等移到 Tomcat 部署文件夹里面，进行加载部署。因此这种方式**支持热部署**，一般在开发的时候也是用这种方式；

![2020-2-24-14-22-41.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-24-14-22-41.png)

- 配置完毕，点击运行按钮，就可以了；

![2020-2-24-14-26-45.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-24-14-26-45.png)

## Maven 使用实例
