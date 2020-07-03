# Git 攻略

> **摘要**: 本文讲解 Git 是什么, 有什么用, 如何用 Git 进行版本控制, 以及大厂的版本管理策略.

## Git 干什么的?

[Git 官网](https://git-scm.com/)

**Git 是一个开源的分布式版本控制系统。**  

版本控制是一种用来 "记录文件内容变化，并且允许将来查阅特定版本修订情况的系统".  当编写文件时使用「版本控制系統」可以清楚的記錄每個檔案是誰在什麼時候加進來、什麼時候被修改或刪除。Git 是目前业界最流行的版本控制系統.

Git 是分布式的, 相比于集中式的最大区别在于每一个客户端都是一个独立的节点，在各自的节点上都有独立的一份完整的版本库。一个人修改了文件，这时只要把修改过的文件发送给别人，别人就也都能看的到了。这样做不但提高了效率，而且即使一个人的电脑出问题了，也可以直接从其他人那里克隆一份。分布式版本控制系统通常也有一台充当“中央服务器”的电脑，但这个服务器的作用仅仅是用来方便“交换”大家的修改，没有它大家也一样干活.

## Git 基础 

### 初始化仓库

在一个目录下使用 `git init` 指令初始化這個目錄，主要目的是要讓 Git 開始對這個目錄進行版本控制。這個指令會在這個目錄裡建立了一個 `.git` 隐藏目录.  这个目录是 Git 来跟踪管理版本库的, 它将默认记录项目目录中任何文件的改动。如果把这个子目录删除了，这里面记录的文件版本就都没有了.

### 记录每次更新到仓库

#### 检查当前文件状态

在一个空目录下执行 `git init`.  之后使用命令 `git status` 来查看这个目录的状态.

``` bash
$ git status
On branch master

Initial commit

nothing to commit (create/copy files and use "git add" to track)
```

表示目录中没有东西可以提交. 

#### 跟踪新文件

在项目下创建一个新的 README 文件。 如果之前并不存在这个文件，使用 `git status` 命令，你将看到一个新的未跟踪文件：

``` bash
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)

    readme.md

nothing added to commit but untracked files present (use "git add" to track)
```

在状态报告中可以看到新建的 README 文件出现在 Untracked files 下面。 未跟踪的文件意味着 Git 在之前的快照（提交）中没有这些文件.

现在用 `git add` 跟踪 `readme.md` 文件.

``` bash
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

	new file:   readme.md
```

只要在 Changes to be committed 这行下面的，就说明是已暂存状态。 如果此时提交，那么该文件此时此刻的版本将被留存在历史记录中。

#### 暂存已修改文件

现在修改一下之前被跟踪的 `readme.md` 文件.  然后再执行 `git status`

``` bash
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

	new file:   readme.md

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   readme.md
```

`readme.md` 出现在 Changes not staged for commit 这行下面，说明已跟踪文件的内容发生了变化，但还没有放到暂存区。要暂存这次更新，需要运行 `git add` 命令。这个命令将可以理解为 “**添加内容到下一次提交中**” 而不是 “将一个文件添加到项目中” 要更加合适。

添加完后, 在执行 `git status`

``` bash
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

	new file:   readme.md
```

表示已暂存，下次提交时就会一并记录到仓库。

#### 提交更新

使用 `git commit` 命令将已暂存的文件进行提交.  这种方式会启动文本编辑器以便输入本次提交的说明。(默认会启用 shell 的环境变量 `$EDITOR` 所指定的软件，一般都是 vim 或 emacs。)

也可以在 `commit` 命令后添加 `-m` 选项，将提交信息与命令放在同一行

``` bash
$ git commit -m "Story 182: Fix benchmarks for speed"
[master 463dc4f] Story 182: Fix benchmarks for speed
 2 files changed, 2 insertions(+)
 create mode 100644 README
```

提交后它会告诉你，当前是在哪个分支（`master`）提交的，本次提交的完整 SHA-1 校验和是什么（`463dc4f`），以及在本次提交中，有多少文件修订过，多少行添加和删改过。

`commit` 命令加上 `-a` 选项，Git 就会自动把所有**已经跟踪过**的文件暂存起来一并提交，从而跳过 `git add` 步骤

如果此次提交暂存区没有任何变动, 想要提交需要加上`--allow-empty`参数. 

``` bash
$ git commit --allow-empty -m "空的"
[master 76a5b84] 空的
```

#### 状态简览

`git status` 命令的输出十分详细，但其用语有些繁琐。 如果你使用 `git status -s` 命令或 `git status --short` 命令，你将得到一种更为紧凑的格式输出。 

``` bash
$ git status -s
 M README
MM Rakefile
A  lib/git.rb
M  lib/simplegit.rb
?? LICENSE.txt
```

* 新添加的未跟踪文件前面有 `??` 标记，
* 新添加到暂存区中的文件前面有 `A` 标记，
* 修改过的文件前面有 `M` 标记
  * 出现在右边的 `M` 表示该文件被修改了但是还没放入暂存区
  * 出现在靠左边的 `M` 表示该文件被修改了并放入了暂存区。

向 `Rakefile` 文件前面有两个 `MM`, 表示在工作区被修改并提交到暂存区后又在工作区中被修改了，所以在暂存区和工作区都有该文件被修改了的记录。

#### 移除文件

如果想**移除某个文件的已跟踪状态**（确切地说，是从暂存区域移除）.  可以使用 `git rm` 命令.  此命令还会连带从工作目录中把指定的文件删除

如果只是简单地从工作目录中手工删除文件，运行 `git status` 时就会在 “Changes not staged for commit” 部分（也就是 未暂存清单）看到

如果**文件删除之前修改过并且已经放到暂存区域**的话，则必须要用强制删除选项 `-f`. 这是一种安全特性，用于防止误删还没有添加到快照的数据.

另外一种情况是，我们想**把文件从 Git 仓库中删除（亦即从暂存区域移除），但仍然希望保留在当前工作目录中**。使用 `git rm --cached` 选项可以做到.  它会让文件从暂存区 (index) 中移除, 并且不会出现在 "未跟踪" 列表下. 

#### 忽略文件

有些文件无需纳入 Git 的管理，也不希望它们总出现在未跟踪文件列表。我们可以创建一个名为 `.gitignore` 的文件，列出要忽略的文件模式。 

比如:

``` bash
*.[oa]
*~
```

第一行告诉 Git 忽略所有以 .o 或 .a 结尾的文件。第二行告诉 Git 忽略所有以波浪符（~）结尾的文件.

要养成一开始就设置好 `.gitignore` 文件的习惯，以免将来误提交无用的文件.

`.gitignore` 的格式规范如下：

* 所有空行或者以 `＃` 开头的行都会被 Git 忽略。
* 可以使用标准的 `glob` 模式匹配。
* 匹配模式可以以（`/`）开头防止递归。
* 匹配模式可以以（`/`）结尾指定目录。
* 要忽略指定模式以外的文件或目录，可以在模式前加上惊叹号（`!`）取反。

`glob` 模式是指 shell 所使用的简化了的正则表达式:
* 星号（`*`）匹配零个或多个任意字符;
* `[abc]` 匹配任何一个列在方括号中的字符;
* 问号（`?`）只匹配一个任意字符;
* 如果在方括号中使用短划线分隔两个字符，表示所有在这两个字符范围内的都可以匹配（比如 `[0-9]` 表示匹配所有 0 到 9 的数字）;
* 使用两个星号（`*`) 表示匹配任意中间目录，比如`a/**/z` 可以匹配 a/z, a/b/z 或 `a/b/c/z`等。

下面有些例子:

``` bash
# no .a files
*.a

# but do track lib.a, even though you're ignoring .a files above
!lib.a

# only ignore the TODO file in the current directory, not subdir/TODO
/TODO

# ignore all files in the build/ directory
build/

# ignore doc/notes.txt, but not doc/server/arch.txt
doc/*.txt

# ignore all .pdf files in the doc/ directory
doc/**/*.pdf
```

### 校验和

Git 中所有数据在存储前都计算校验和，然后以校验和来引用。 这意味着不可能在 Git 不知情时更改任何文件内容或目录内容。

Git 用以计算校验和的机制叫做 SHA-1 散列（hash，哈希）。 这是一个由 40 个十六进制字符（0-9 和 a-f）组成字符串，基于 Git 中文件的内容或目录结构计算出来。 SHA-1 哈希看起来是这样：

``` bash
24b9da6552252987aa493b52f8696cd6d3b00373
```

Git 数据库中保存的信息都是以文件内容的哈希值来索引.

### 文件状态 & 工作区域

在 Git 中文件有两种状态：**已跟踪（tracked）** 和 **未跟踪（untracked）**

**已跟踪（tracked）** 又分为：**已提交（committed）**、**已修改（modified）**和 **已暂存（staged）**

被 Git 管理的项目有三个工作区域：**版本库（Repository）**、**工作区（Working Directory）** 和 **暂存区（Staging Area）**。

* 工作区: 就是你在电脑里能看到的目录。
* 暂存区：英文叫 stage, 或 index。一般存放在`.git`目录下的 `index` 文件（`.git/index`）中，所以我们把暂存区有时也叫作索引（index）。
* 版本库：`.git` 目录不算工作区，而是 Git 的版本库。

![1352126739_7909](https://i.imgur.com/qmzpPGu.jpg)

当对工作区修改（或新增）的文件执行 "`git add`" 命令时，暂存区的目录树被更新，同时工作区修改（或新增）的文件内容被写入到对象库中的一个新的对象中，而该对象的 ID 被记录在暂存区的文件索引中。

当执行提交操作（`git commit`）时，暂存区的目录树写到版本库（对象库）中，master 分支会做相应的更新。即 master 指向的目录树就是提交时暂存区的目录树。 

### 重置(撤销)提交

使用 `git reset` 指令可以将当前分支所指向的提交对象重置到另外一个提交对象上去.

``` bash
$ git reset HEAD^
```

每一個 `^` 符號表示「前一次」的意思.  所以 `HEAD^` 是指在 `HEAD` 這個 Commit 的「前一次」，如果是 `HEAD^^ `則是往前兩次，以此類推。不過如果要倒退五次，通常不會寫 `HEAD^^^^^`，而會寫成 `HEAD~5`。

假如 `HEAD` 指向 `master` 分支的 `e12d8ef` 提交对象.  那么还可以写成:

``` bash
$ git reset master^
$ git reset e12d8ef^
```

**`reset` 指令改变一个分支所指向的提交对象 (分支只是指向提交对象的指针) , 同时 `HEAD` 也随之移动**.

![182229495415187](https://i.loli.net/2019/02/19/5c6bd8c8d4331.png)

这个指令有三个常用参数: `--soft`, `--hard`, `--mixed`

* `--mixed` 是 `reset` 指令的默认参数. 它将重置 `HEAD` 到另外一个提交, 并且重置暂存区以便和 `HEAD` 相匹配，但是也到此为止。工作区的文件不会被更改。所有该分支上从重置前的提交到你重置到的那个提交之间的所有变更将作为本地修改保存在工作区中 (被标示为 `local modification or untracked via git status`) 但是并未 `staged` 的状态

* `--soft` 参数告诉 Git 重置 `HEAD` 到另外一个提交，但也到此为止。暂存区和工作区都不会变化.  所有该分支上从重置前的提交到你重置到的那个提交之间的所有变更都被放在暂存区.

* `--hard` 参数是一个比较危险的动作，具有破坏性.  暂存区和工作区都会重置到目标提交所处的状态.  所有该分支上从重置前的提交到你重置到的那个提交之间的所有变更都被丢掉.  

假如我们在目录中添加了一个文件叫 `myFile.md`, 并且进行了提交.

``` bash
bogon:git_practice xiangliu$ git log --oneline
0935e0d (HEAD -> master) add my file
2e0425c first commit
```

使用 `git reset HEAD^` 后, 执行 `git status` 看到 `myFile.md` 为未跟踪状态, 但文件仍在工作区中.

``` bash
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	myFile.md

nothing added to commit but untracked files present (use "git add" to track)
```

使用 `git reset HEAD^ --soft` 后, 执行 `git status` 看到 `myFile.md` 在暂存区, 等待提交.

``` bash
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	new file:   myFile.md
```

使用 `git reset HEAD^ --hard` 后, `myFile.md` 直接没了.

因为使用了 `reset` 后, 重置到的提交对象之后的提交仍然存在.  通过 `reset` 再重置回你要的提交就可以再返回去.  如果你找不到你想要的提交对象的校验和是什么了, 可以通过 `git reflog` 命令.  它可以查看所有分支的所有操作记录，包括已经被删除的提交记录

### 查看提交历史

想回顾提交历史需要使用 `git log` 命令

``` bash
garrikliu:a xiangliu$ git log
commit fb3afcd7ad8151207cec0ace9a6550c3e1589f81 (HEAD)
Author: Garrik-Liu <garrikliu@Gmail.com>
Date:   Mon Feb 4 16:55:48 2019 +0800

    deleted readme

commit 022abc8b56edac279d3aa28981913e378bca136b
Author: Garrik-Liu <garrikliu@Gmail.com>
Date:   Sun Feb 3 09:56:44 2019 +0800

    add readme.md
```

默认不用任何参数的话，`git log` 会按提交时间列出所有的更新，最近的更新排在最上面。这个命令会列出每个提交的 SHA-1 校验和、作者的名字和电子邮件地址、提交时间以及提交说明。

通过使用不同的选项参数可以帮助我们找到要找的提交.

一个常用的选项是 `-p`，用来显示每次提交的内容差异。 你也可以加上 `-2` 来仅显示最近两次提交(同理 `-3` 就是最近的三次提交)

如果你想看到每次提交的简略的统计信息，你可以使用 `--stat` 选项.  `--stat` 选项在每次提交的下面列出所有被修改过的文件、有多少文件被修改了以及被修改过的文件的哪些行被移除或是添加了。 在每次提交的最后还有一个总结。

``` bash
commit a11bef06a3f659402fe7563abf99ad00de2209e6
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Sat Mar 15 10:31:28 2008 -0700

    first commit

 README           |  6 ++++++
 Rakefile         | 23 +++++++++++++++++++++++
 lib/simplegit.rb | 25 +++++++++++++++++++++++++
 3 files changed, 54 insertions(+)
```

另外一个常用的选项是 `--pretty`。 这个选项可以指定使用不同于默认格式的方式展示提交历史。这个选项有一些内建的子选项供你使用。 比如用 `oneline` 将每个提交放在一行显示，查看的提交数很大时非常有用。 另外还有 `short`，`full` 和 `fuller` 可以用.  `format` 选项可以定制要显示的记录格式。 这样的输出对后期提取分析格外有用.  具体文档参考-[链接](https://git-scm.com/docs/pretty-formats)

``` bash
$ git log --pretty=oneline
ca82a6dff817ec66f44342007202690a93763949 changed the version number
085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7 removed unnecessary test
a11bef06a3f659402fe7563abf99ad00de2209e6 first commit
```

### 打标签

Git 可以给历史中的某一个提交打上标签，以示重要。 比较有代表性的是人们会使用这个功能来标记发布结点（v1.0 等等）。

#### 列出标签

`git tag` 列出已有标签

``` bash
$ git tag
v0.1
v1.3
```

`-l` 参数可以查号特定标签

``` bash
$ git tag -l 'v1.8.5*'
v1.8.5
v1.8.5-rc0
v1.8.5-rc1
v1.8.5-rc2
```

#### 创建标签

Git 使用两种主要类型的标签：**轻量标签**（lightweight）与**附注标签**（annotated）

一个轻量标签很像一个不会改变的分支 - 它只是一个特定提交的引用。

然而，附注标签是存储在 Git 数据库中的一个完整对象。 它们是可以被校验的；其中包含打标签者的名字、电子邮件地址、日期时间；还有一个标签信息；并且可以使用 GNU Privacy Guard （GPG）签名与验证。 通常建议创建附注标签，这样你可以拥有以上所有信息

创建**轻量标签**只需要提供标签名字:

``` bash
$ git tag v1.4-lw
$ git tag
v0.1
v1.3
v1.4
v1.4-lw
v1.5
```

在标签上运行 `git show`，你不会看到额外的标签信息。 命令只会显示出提交信息：

``` bash
$ git show v1.4-lw
commit ca82a6dff817ec66f44342007202690a93763949
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Mon Mar 17 21:52:11 2008 -0700

    changed the version number
```

创建一个**附注标签**, 最简单的方式是当你在运行 `tag` 命令时指定 `-a` 选项：

``` bash
$ git tag -a v1.4 -m 'my version 1.4'
$ git tag
v0.1
v1.3
v1.4
```

`-m` 选项指定了一条将会存储在标签中的信息。 如果没有为附注标签指定一条信息，Git 会运行编辑器要求你输入信息。

使用 `git show` 命令可以看到标签信息与对应的提交信息：

``` bash
$ git show v1.4
tag v1.4
Tagger: Ben Straub <ben@straub.cc>
Date:   Sat May 3 20:19:12 2014 -0700

my version 1.4

commit ca82a6dff817ec66f44342007202690a93763949
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Mon Mar 17 21:52:11 2008 -0700

    changed the version number
```

如果要给**过去的提交**打标签, 需要在命令的末尾指定提交的校验和

``` bash
$ git tag -a v1.2 9fceb02
```

#### 删除标签

命令 `git tag -d <tagname>` 可以删除指定标签:

``` bash
$ git tag -d v1.4-lw
Deleted tag 'v1.4-lw' (was e7d5add)
```

## 使用分支

### 分支简介

分支意味着你可以把你的工作从开发主线上分离开来，以免影响开发主线。

再强调, **Git 保存的不是文件的变化或者差异，而是一系列不同时刻的文件快照**. 在进行提交操作时，Git 会保存一个提交对象（commit object）, 该提交对象会包含一个指向暂存内容快照的指针, 还包含了作者的姓名和邮箱、提交时输入的信息以及指向它的父对象的指针。首次提交产生的提交对象没有父对象，普通提交操作产生的提交对象有一个父对象，而由多个分支合并产生的提交对象有多个父对象.

假设现在有一个工作目录，里面包含了三个将要被暂存和提交的文件。 
1. 暂存操作会为**每一个文件计算 "校验和"**，然后会把当前版本的文件快照保存到 Git 仓库中（Git 使用 blob 对象来保存它们），最终将校验和加入到暂存区域等待提交.  
2. 当使用 `git commit` 进行提交操作时，Git 会先计算**每一个子目录（本例中只有项目根目录）的校验和**，然后在 Git 仓库中这些校验和保存为 "树对象"。
3. 随后，Git 便会**创建一个提交对象**，它除了包含上面提到的那些信息外，还包含指向那个树对象（项目根目录）的指针。如此一来，Git 就可以在需要的时候重现此次保存的快照。

![commit-and-tree](https://i.loli.net/2019/02/19/5c6b70bd48685.png)

Git 仓库中有五个对象：三个 blob 对象（保存着文件快照）、一个树对象（记录着目录结构和 blob 对象索引）以及一个提交对象（包含着指向前述树对象的指针和所有提交信息）。

**Git 的分支，其实本质上仅仅是指向提交对象的可变指针。** 

![branch-and-history](https://i.loli.net/2019/02/19/5c6b70d3a8a9e.png)

由于 Git 的分支实质上仅是包含所指对象校验和（长度为 40 的 SHA-1 值字符串）的文件，所以它的创建和销毁都异常高效。 创建一个新分支就相当于往一个文件中写入 41 个字节（40 个字符和 1 个换行符）

### HEAD

HEAD 是一個指標，指向某一個分支，通常你可以把 HEAD 當做「目前所在分支」看待。在 .git 目錄裡有一個檔名為 HEAD 的檔案，就是記錄著 HEAD 的內容，來看一下這東西長什麼樣子：

``` dash
$ cat .git/HEAD
ref: refs/heads/master
```

### 新建分支

#### 分支创建

使用 `git branch` 命令创建新分支, 会在当前所在的提交对象上创建一个指针.

``` bash
git branch testing
```

当有两个指向相同提交对象的分支存在时, Git 又是怎么知道当前在哪一个分支上呢？ 也很简单，它有一个名为 HEAD 的特殊指针。在 Git 中，它是一个指针，指向当前所在的本地分支（译注：将 HEAD 想象为当前分支的别名）。

![head-to-master](https://i.loli.net/2019/02/19/5c6b70e4e0668.png)

使用 `git log` 命令的 `--decorate` 参数, 可以查看各个分支当前所指的对象。

``` bash
$ git log --oneline --decorate
f30ab (HEAD, master, testing) add feature #32 - ability to add new
34ac2 fixed bug #1328 - stack overflow under certain conditions
98ca9 initial commit of my project
```

#### 分支切换

要切换到一个已存在的分支，你需要使用 `git checkout` 命令。

``` bash
$ git checkout testing
```

如果想新建一个分支, 同时切换到这个分支上可以使用 `git checkout` 的 `-b` 参数.

``` bash
$ git checkout -b testing
```

这样 HEAD 就指向 testing 分支了。HEAD 分支随着提交操作自动向前移动.

在刚刚的例子中, 把分支切换回 master.  HEAD 指回 master 分支，同时工作目录恢复成 master 分支所指向的快照内容。 也就是说，你现在做修改的话，项目将始于一个较旧的版本。 本质上来讲，这就是忽略 testing 分支所做的修改，以便于向另一个方向进行开发。

![checkout-master](https://i.loli.net/2019/02/19/5c6b70fa72e92.png)

如果在 master 分支上, 做一些内容修改, 并且提交, 则项目出现分支分叉情况.

![advance-master](https://i.loli.net/2019/02/19/5c6b71064e0f2.png)

使用 `git log` 命令查看分叉历史。 运行 `git log --oneline --decorate --graph --all` ，它会输出你的提交历史、各个分支的指向以及项目的分支分叉情况。

``` bash
$ git log --oneline --decorate --graph --all
* c2b9e (HEAD, master) made other changes
| * 87ab2 (testing) made a change
|/
* f30ab add feature #32 - ability to add new formats to the
* 34ac2 fixed bug #1328 - stack overflow under certain conditions
* 98ca9 initial commit of my project
```

#### 合并分支

使用 `git merge` 命令可以合并分支.

``` bash
$ git checkout master
$ git merge hotfix
Updating f42c576..3a0874c
Fast-forward
 index.html | 2 ++
 1 file changed, 2 insertions(+)
```

上面命令里, 切换到 master 分支, 然后把 hotfix 分支合并进来.

![basic-branching-4](https://i.loli.net/2019/02/19/5c6b711339866.png)

你应该注意到了 "快进"（fast-forward）这个词。 在这个例子中, 由于当前 master 分支所指向的提交是你要合并进来的分支所指向的提交（有关 hotfix 的提交）的直接上游，所以 Git 只是简单的将指针向前移动。 

换句话说，当你试图合并两个分支时，**如果顺着一个分支走下去能够到达另一个分支，那么 Git 在合并两者的时候，只会简单的将指针向前推进（指针右移），因为这种情况下的合并操作没有需要解决的分歧——这就叫做 “快进（fast-forward）”**。

在合并完之后, 你可以用 `git branch -d` 来删除掉分支.

如果要合并两个之间存在分叉的分支.  Git 会使用两个分支的末端所指的快照, 以及这两个分支的工作祖先，做一个简单的三方合并。

![basic-merging-1](https://i.loli.net/2019/02/19/5c6b711f2541b.png)

和之前将分支指针向前推进所不同的是，Git 将此次三方合并的结果做了一个新的快照并且自动创建一个新的提交指向它。这个被称作一次 "合并提交"，它的特别之处在于他有不止一个父提交。

![basic-merging-2](https://i.loli.net/2019/02/19/5c6b71269b25b.png)

如果你在两个不同的分支中，对同一个文件的同一个部分进行了不同的修改，冲突就会出现.  合并时 Git 会等待你去解决合并产生的冲突。 你可以在合并冲突后的任意时刻使用 git status 命令来查看那些因包含合并冲突而处于未合并（unmerged）状态的文件：

``` bash
$ git status
On branch master
You have unmerged paths.
  (fix conflicts and run "git commit")

Unmerged paths:
  (use "git add <file>..." to mark resolution)

    both modified:      index.html

no changes added to commit (use "git add" and/or "git commit -a")
```

在你解决了所有文件里的冲突之后，对每个文件使用 `git add` 命令来将其标记为冲突已解决。 一旦暂存这些原本有冲突的文件，Git 就会将它们标记为冲突已解决。之后输入 `git commit` 来完成合并提交

### 分支管理

#### 查看分支列表

`git branch` 命令如果不加任何参数运行它，会得到当前所有分支的一个列表

``` bash
$ git branch
  iss53
* master
  testing
```

`*` 表示当前 HEAD 指针所指向的分支.  这意味着如果在这时候提交，master 分支将会随着新的工作向前移动。 

#### 查看分支最后提交

如果需要查看每一个分支的最后一次提交，可以运行 `git branch -v` 命令：

``` bash
$ git branch -v
  iss53   93b412c fix javascript issue
* master  7a98805 Merge branch 'iss53'
  testing 782fd34 add scott to the author list in the readmes
```

#### 查看 已合并/未合并 分支

`--merged` 与 `--no-merged` 这两个有用的选项可以过滤这个列表中已经合并或尚未合并到当前分支的分支。 在这个列表中分支名字前没有 `*` 号的分支通常可以使用 `git branch -d` 删除掉；你已经将它们的工作整合到了另一个分支，所以并不会失去任何东西。

``` bash
$ git branch --merged
  iss53
* master
```

### 变基

之前介绍过，整合分支最容易的方法是 `merge` 命令。 它会把两个分支的最新快照, 以及二者最近的共同祖先进行三方合并，合并的结果是生成一个新的快照, 并提交。

另一种方法是, 你可以使用 `rebase` 命令将提交到某一分支上的所有修改都移至另一分支上，就好像“重新播放”一样。 变基是将一系列提交按照原有次序依次应用到另一分支上，而合并是把最终结果合在一起。

![basic-rebase-3](https://i.loli.net/2019/02/19/5c6b71337c5c3.png)

``` bash
$ git checkout experiment
$ git rebase master
First, rewinding head to replay your work on top of it...
Applying: added staged command
```

它的原理是首先找到这两个分支（即当前分支 experiment、变基操作的目标基底分支 master）的最近共同祖先 C2，然后对比当前分支相对于该祖先的历次提交，提取相应的修改并存为临时文件，然后将当前分支指向目标基底 C3, 最后以此将之前另存为临时文件的修改依序应用。

但是变基使得提交历史更加整洁。 你在查看一个经过变基的分支的历史记录时会发现，尽管实际的开发工作是并行的，但它们看上去就像是串行的一样，提交历史是一条直线没有分叉。

一般我们这样做的目的是为了确保在向远程分支推送时能保持提交历史的整洁——例如向某个其他人维护的项目贡献代码时。 在这种情况下，你首先在自己的分支里进行开发，当开发完成时你需要先将你的代码变基到 origin/master 上，然后再向主项目提交修改。 这样的话，该项目的维护者就不再需要进行整合工作，只需要快进合并便可。

#### 截取分支上的另一个分支，再变基到其他分支

在对两个分支进行变基时，所生成的“重放”并不一定要在目标分支上应用，你也可以指定另外的一个分支进行应用。 

![interesting-rebase-2](https://i.loli.net/2019/02/19/5c6b713f4bb09.png)

上图中, 假设你希望将 client 中的修改合并到主分支并发布，但暂时并不想合并 server 中的修改，因为它们还需要经过更全面的测试。 这时，你就可以使用 `git rebase` 命令的 `--onto` 选项，选中在 client 分支里但不在 server 分支里的修改（即 C8 和 C9），将它们在 master 分支上重放

``` bash
$ git rebase --onto master server client
```

以上命令的意思是：“取出 client 分支，找出处于 client 分支和 server 分支的共同祖先之后的修改，然后把它们在 master 分支上重放一遍”。

之后你可以快进合并 master 分支了.  如果你决定将 server 分支中的修改也整合进来。 使用 `git rebase [basebranch] [topicbranch]` 命令可以直接将特性分支（即本例中的 server）变基到目标分支（即 master）上。这样做能省去你先切换到 server 分支，再对其执行变基命令的多个步骤。

#### 变基的风险

变基有一条准则：

**不要对在你的仓库外有副本的分支执行变基。**

变基操作的实质是丢弃一些现有的提交，然后相应地新建一些内容一样但实际上不同的提交。 如果你已经将提交推送至某个仓库，而其他人也已经从该仓库拉取提交并进行了后续工作，此时，如果你用 `git rebase` 命令重新整理了提交并再次推送，你的同伴因此将不得不再次将他们手头的工作与你的提交进行整合，如果接下来你还要拉取并整合他们修改过的提交，事情就会变得一团糟。

看个例子:

假设你从一个中央服务器克隆然后在它的基础上进行了一些开发。 你的提交历史如图所示：

![perils-of-rebasing-1](https://i.loli.net/2019/02/19/5c6b71535bd24.png)

然后，某人又向中央服务器提交了一些修改，其中还包括一次合并。 你抓取了这些在远程分支上的修改，并将其合并到你本地的开发分支，然后你的提交历史就会变成这样：

![perils-of-rebasing-2](https://i.loli.net/2019/02/19/5c6b717f7240b.png)

接下来，这个人又决定把合并操作回滚，改用变基；继而又用 `git push --force` 命令覆盖了服务器上的提交历史。 之后你从服务器抓取更新，会发现多出来一些新的提交。

![perils-of-rebasing-3](https://i.loli.net/2019/02/19/5c6b716430fce.png)

结果就是你们两人的处境都十分尴尬。 如果你执行 `git pull` 命令，你将合并来自两条提交历史的内容，生成一个新的合并提交，最终仓库会如图所示：

![perils-of-rebasing-4](https://i.loli.net/2019/02/19/5c6b716dc19c5.png)

此时如果你执行 `git log` 命令，你会发现有两个提交的作者、日期、日志居然是一样的，这会令人感到混乱。 此外，如果你将这一堆又推送到服务器上，你实际上是将那些已经被变基抛弃的提交又找了回来，这会令人感到更加混乱。 很明显对方并不想在提交历史中看到 C4 和 C6，因为之前就是他把这两个提交通过变基丢弃的。

#### 用变基解决变基

如果遇到前面提到的 有人推送了经过变基的提交，并丢弃了你的本地开发所基于的一些提交 那种情境，如果我们不是执行合并，而是执行 `git rebase teamone/master`, Git 将会：

* 检查哪些提交是我们的分支上独有的（C2，C3，C4，C6，C7）

* 检查其中哪些提交不是合并操作的结果（C2，C3，C4）

* 检查哪些提交在对方覆盖更新时并没有被纳入目标分支（只有 C2 和 C3，因为 C4 其实就是 C4'）

* 把查到的这些提交应用在 teamone/master 上面

![perils-of-rebasing-5](https://i.loli.net/2019/02/19/5c6b7190693fe.png)

本例中使用 `git pull --rebase` 命令可以完成上述操作. 它的意思是先 `git fetch`，再 `git rebase teamone/master`。

最好做法是把变基命令当作是在推送前清理提交使之整洁的工具，并且**只在从未推送至共用仓库的提交上执行变基命令**，就不会有事。 假如在那些已经被推送至共用仓库的提交上执行变基命令，并因此丢弃了一些别人的开发所基于的提交，那你就有大麻烦了

#### 变基 vs 合并

如果想问哪个更好, 先思考提交历史到底意味着什么?

有一种观点认为，仓库的提交历史即是 **记录实际发生过什么**。 它是针对历史的文档，本身就有价值，不能乱改。 哪怕提交历史是一团糟, 那么这些痕迹也应该被保留下来，让后人能够查阅。

另一种观点则正好相反，他们认为提交历史是 **项目过程中发生的事**。无意义的修改, 和被舍弃的内容不需要被后来人看到.

到底合并还是变基好？这并没有一个简单的答案。 Git 是一个非常强大的工具，它允许你对提交历史做许多事情，但每个团队、每个项目对此的需求并不相同。 既然你已经分别学习了两者的用法，相信你能够根据实际情况作出明智的选择。

**总的原则是，只对尚未推送或分享给别人的本地修改执行变基操作清理历史**，**从不对已推送至别处的提交执行变基操作**，这样，你才能享受到两种方式带来的便利。


## 远程仓库 

远程仓库是指托管在因特网或其他网络中的你的项目的版本库.  与他人协作时, 可以在这个远程仓库上根据需要 "推送" 或 "拉取" 数据。

### 查看远程仓库

如果想查看你已经配置的远程仓库服务器，可以运行 `git remote` 命令。 它会列出你指定的每一个远程服务器的简写。

如果你已经克隆了自己的仓库，那么至少应该能看到 `origin`. 这是 Git 给你克隆的仓库服务器的默认名字

``` bash
$ git clone https://github.com/schacon/ticgit
Cloning into 'ticgit'...
remote: Reusing existing pack: 1857, done.
remote: Total 1857 (delta 0), reused 0 (delta 0)
Receiving objects: 100% (1857/1857), 374.35 KiB | 268.00 KiB/s, done.
Resolving deltas: 100% (772/772), done.
Checking connectivity... done.
$ cd ticgit
$ git remote
origin
```

指定选项 `-v`，会显示需要读写远程仓库使用的 Git 保存的仓库服务器的名字, 以及其对应的 URL。

``` bash
$ git remote -v
origin	https://github.com/schacon/ticgit (fetch)
origin	https://github.com/schacon/ticgit (push)
```

### 添加远程仓库

#### 添加远程库

应用场景: 先有本地库, 后有远程库

运行 `git remote add <shortname> <url>` 添加一个新的远程 Git 仓库, 同时可以为仓库指定一个名字.

``` bash
$ git remote
origin
$ git remote add pb https://github.com/paulboone/ticgit
$ git remote -v
origin	https://github.com/schacon/ticgit (fetch)
origin	https://github.com/schacon/ticgit (push)
pb	https://github.com/paulboone/ticgit (fetch)
pb	https://github.com/paulboone/ticgit (push)
```

#### 从现有仓库克隆

应用场景: 先有远程库, 后有本地库

假设我们从零开发，那么最好的方式是先创建远程库，然后，从远程库克隆。

克隆仓库的命令格式为 `git clone [url]`

``` bash
$ git clone git://github.com/schacon/grit.git
```

使用 `clone` 命令克隆了一个仓库，命令会自动将其添加为远程仓库并默认以 “origin” 为名称简写。如果希望在克隆的时候，自己定义要新建的项目目录名称，可以在上面的命令末尾指定新的名字

### 抓取(pull) & 拉取(fetch)

#### 拉取(fetch)

从远程仓库中获得数据，可以执行 `git fetch [remote-name]`.  这个命令会访问远程仓库，从中**拉取**所有你还没有的数据。 执行完成后，你将会拥有那个远程仓库中所有分支的引用，可以随时合并或查看。

必须注意 `git fetch` 命令会将数据**拉取**到你的本地仓库 - 它并不会自动合并或修改你当前的工作。 当准备好时你必须手动将其合并入你的工作。

#### 抓取(pull)

> git pull = git fetch + git merge

### 推送到远程仓库

使用命令 `git push [remote-name] [branch-name]` 将你本地的内容推送到远端服务器.

這個簡單的 Push 指令其實做了幾件事：

* 把 `master` 這個分支的內容，推向 `origin` 這個位置。
* 在 `origin` 那個遠端 Server 上，如果 `master` 不存在，就建立一個叫做 `master` 的同名分支。
* 但如果本來 Server 上就存在 `master` 分支，便會移動 Server 上 `master` 分支的位置，使它指到目前最新的進度上。

只有当你有所克隆服务器的写入权限，并且之前没有人推送过时，这条命令才能生效。 当你和其他人在同一时间克隆，他们先推送到上游然后你再推送到上游，你的推送就会毫无疑问地被拒绝。

你必须先将他们的工作拉取下来并将其合并进你的工作后才能推送。

#### 设定 upstream (上游)

upstream，中文翻譯成「上游」.  在 Git 裡，每個分支可以設定一個「上游」（但每個分支最多只能設定一個 upstream）.  它會指向並追蹤（track）某個分支。通常 upstream 會是远端 Server 上的某個分支，但其實要設定在本地端的其它分支也可以。

如果有設定，當下次執行 `git push` 指令的時候，它就會用來當預設值。

``` bash
$ git push -u origin master
```

就會把 `origin/master` 設定為本地 `master` 分支的 upstream，當下回執行 `git push` 指令而不加任何參數的時候，它就會猜你是要推往 `origin` 這個遠端節點，並且把 `master` 這個分支推上去。

#### 不想要同名的分支

``` bash
$ git push origin master
```

其實上面這個指令跟下面這個指令是一樣的效果：

``` bash
$ git push origin master:master
```

意思是「把本地的 master 分支推上去後，在 Server 上更新 master 分支的進度，或是如果不存在該分支的話，就建立一個 master 分支」。

但如果你想推上去之後不要叫這個名字的話，可以把後面的那個名字改掉：

``` bash
$ git push origin master:cat
```

這樣當把本地端的 master 分支推上去之後，就不會在線上建立 master 分支，而是建立（或更新進度）一個叫做 cat 的分支了。


### 查看远程仓库

如果想要查看某一个远程仓库的更多信息，可以使用 `git remote show [remote-name]` 命令

``` bash
$ git remote show origin
* remote origin
  Fetch URL: https://github.com/schacon/ticgit
  Push  URL: https://github.com/schacon/ticgit
  HEAD branch: master
  Remote branches:
    master                               tracked
    dev-branch                           tracked
  Local branch configured for 'git pull':
    master merges with remote master
  Local ref configured for 'git push':
    master pushes to master (up to date)
```

它同样会列出远程仓库的 URL 与跟踪分支的信息。 这些信息非常有用，它告诉你正处于 master 分支，并且如果运行 `git pull`，就会抓取所有的远程引用，然后将远程 master 分支合并到本地 master 分支。 它也会列出拉取到的所有远程引用。

### 远程仓库的移除与重命名

运行 `git remote rename` 去修改一个远程仓库的简写名

``` bash
$ git remote rename pb paul
$ git remote
origin
paul
```

使用 `git remote rm` 移除一个远程仓库 

``` bash
$ git remote rm paul
$ git remote
origin
```

## 修改历史记录

### 修改提交信息

#### 修改最近一次提交

要修改最後一次的 Commit 訊息，只要直接在 Commit 指令後面加上 `--amend` 參數即可：

``` bash
$ git commit --amend -m "Welcome To Facebook"
[master 614a90c] Welcome To Facebook
Date: Wed Aug 16 05:42:56 2017 +0800
1 file changed, 0 insertions(+), 0 deletions(-)
create mode 100644 config/database.yml
```

#### 修改更早的提交

可以使用 `rebase` 命令的互动模式来修改更早的提交信息.

假如我们有如下的提交:

``` bash
$ git log --oneline
27f6ed6 (HEAD -> master) add dog 2
2bab3e7 add dog 1
ca40fc9 add 2 cats
1de2076 add cat 2
cd82f29 add cat 1
382a2a5 add database settings
bb0c9c2 init commit
```
使用 `rebase` 指令的 `-i` 參數进入 『 互动模式 』, 後面的 `bb0c9c2` 是指這次的指令的應用範圍會從最近的提交到 `bb0c9c2` 這個提交, 但是不包括 `bb0c9c2`. 

``` bash
$ git rebase -i bb0c9c2
```

這個指令會跳出一個 Vim 編輯器：

::: warning
注意, `rebase` 的互动模式展示的提交记录排序是 『 从最旧到最新 』, 与 `git log` 的正好相反.
:::

``` bash
pick 382a2a5 add database settings
pick cd82f29 add cat 1
pick 1de2076 add cat 2
pick ca40fc9 add 2 cats
pick 2bab3e7 add dog 1
pick 27f6ed6 add dog 2

# Rebase bb0c9c2..27f6ed6 onto bb0c9c2 (6 commands)
#
# Commands:
# p, pick = use commit
# r, reword = use commit, but edit the commit message
# e, edit = use commit, but stop for amending
# s, squash = use commit, but meld into previous commit
# f, fixup = like "squash", but discard this commit's log message
# x, exec = run command (the rest of the line) using shell
# d, drop = remove commit
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
```

将想要改信息的提交前面的 `pick` 改成 `reword`，或是 `r`, 就表示待會我要來修改這兩次提交的信息.  存檔並離開之後，立馬就會再跳另一個 Vim 編輯器畫面, 让我们改信息.

因为提交改变了, 提交的 SHA-1 也就改变了.  之後的 Commit 因為前面的歷史改了，所以後面整串的 Commit 全部都重新做出新的 Commit 出來替代舊的 Commit。

### 合并多个提交

`rebase` 的互动模式同样也可以合并多个提交, 以来让提交历史更简洁.

把想要合并的提交前的指令改成 `squash` 或 `s`.  也可以用 `fixup` 它与 `squash` 相同，但不会保存当前 commit 的提交信息

``` bash
pick 382a2a5 add database settings
pick cd82f29 add cat 1
squash 1de2076 add cat 2
squash ca40fc9 add 2 cats
pick 2bab3e7 add dog 1
squash 27f6ed6 add dog 2
```
* 最後一行的 `27f6ed6` 會跟前一個 Commit `2bab3e7` 進行合併
* 倒數第三號的 `ca40fc9` 會跟前一個 Commit `1de2076` 合併，但因為 `1de2076` 又會再往前一個 Commit `cd82f29` 合併

存檔並離開 Vim 編輯器後，它會開始進行 Rebase，而在 Squash 的過程中，它還會跳出 Vim 編輯器讓你編輯一下訊息

![squash1](https://i.loli.net/2019/02/20/5c6cdf896c1d5.png)

把訊息改成「add all cats」：

![squash2](https://i.loli.net/2019/02/20/5c6cdf94aac1e.png)

### 将一个提交拆成多个

如果你在一个提交里做了多出改动, 你之后想把它拆成多个提交, 同樣也可使用互動模式的 Rebase 來操作.

``` bash
$ git log --oneline
27f6ed6 (HEAD -> master) add dog 2
2bab3e7 add dog 1
ca40fc9 add 2 cats
1de2076 add cat 2
cd82f29 add cat 1
382a2a5 add database settings
bb0c9c2 init commit
```

假如 `ca40fc9` 這個 Commit 一口氣增加了兩個檔案，我想把它拆成兩個提交. 我们需要进入互动模式, 把要拆的那個 Commit 的 `pick` 改成 `edit`: 

``` bash
pick 382a2a5 add database settings
pick cd82f29 add cat 1
pick 1de2076 add cat 2
edit ca40fc9 add 2 cats
pick 2bab3e7 add dog 1
pick 27f6ed6 add dog 2
```

Rebase 在執行到 `ca40fc9` 這個 Commit 的時候就會停下來：

![split1](https://i.loli.net/2019/02/20/5c6ce0ef3d2bb.png)

`HEAD` 指向 `ca40fc9`, 我们通过 `reset` 指令到这个提交的上一个提交.

``` bash
$ git reset HEAD^
```

这两个提交之间的改动都处于 『 未暂存 』状态.  根据你自己的需要通过 `add` 和 `commit` 来进行提交.  

等你弄完了, 別忘了現在還是處於 Rebase 狀態，通过 `--continue` 参数来让 Rebase 执行完.

``` bash
$ git rebase --continue
Successfully rebased and updated refs/heads/master.
```

### Reset、Revert 跟 Rebase 的区别?

`revert` 指令同样可以用来后悔

假如想撤销掉最近的一次提交可以输入下面指令, 加上後面的 `--no-edit` 參數，表示不編輯 Commit 訊息。

``` bash
$ git revert HEAD --no-edit
```

![revert2](https://i.loli.net/2019/02/20/5c6ce5acd37ff.png)

但会发现原来的提交还在, 而且多了一个新的提交来表示撤销.  

如果想再恢复之前的提交, 一种方法是再用一次 `revert` 那么就是等于执行了 『 撤销的撤销 』, 之前被撤销的提交就被恢复了

#### 所以，這三個指令有什麼差別？

指令 	| 改變歷史紀錄 |	說明
--- | --- | ---
Reset |是 |把目前的狀態設定成某個指定的 Commit 的狀態，通常適用於尚未推出去的 Commit。
Rebase |是 |不管是新增、修改、刪除 Commit 都相當方便，用來整理、編輯還沒有推出去的 Commit 相當方便，但通常也只適用於尚未推出去的 Commit。
Revert |否 |新增一個 Commit 來反轉（或說取消）另一個 Commit 的內容，原本的 Commit 依舊還是會保留在歷史紀錄中。雖然會因此而增加 Commit 數，但通常比較適用於已經推出去的 Commit，或是不允許使用 Reset 或 Rebase 之修改歷史紀錄的指令的場合。


## 工作流程 Workflow

Git 作为一个分布式版本系统，不可避免涉及到多人协作。

协作必须有一个规范的工作流程，让大家有效地合作，使得项目井井有条地发展下去。

下面介绍的工作流程有一个共同点：都采用"**功能驱动式开发**"（Feature-driven development，简称FDD）。

它指的是，需求是开发的起点，先有需求再有功能分支（feature branch）或者补丁分支（hotfix branch）。完成开发后，该分支就合并到主分支，然后被删除。

团队开发中，遵循一个合理、清晰的 Git 使用流程，是非常重要的。

![bg2015080501](https://i.loli.net/2019/02/20/5c6d0dba2e04c.png)

* **第一步：新建分支**

每次开发新功能，都应该新建一个单独的分支

``` bash
# 获取主干最新代码
$ git checkout master
$ git pull

# 新建一个开发分支myfeature
$ git checkout -b myfeature
```

* **第二步：提交分支 commit**
* **第三步：撰写提交信息**

好的提交信息可以帮助你更好的再将来查阅你之前的代码提交.  我在下面 **知识/技巧** 章节有涉及提交信息的内容.

* **第四步：与主干同步**

``` bash
$ git fetch origin
$ git rebase origin/master
```

* **第五步：合并commit**

分支开发完成后，很可能有一堆 commit，但是合并到主干的时候，往往希望只有一个（或最多两三个）commit，这样不仅清晰，也容易管理。

前面讲过用 `rebase` 合并

另外一种合并提交的简便方法，就是先用 `reset` 撤销过去多个提交，然后再建一个新的.

* **第六步：推送到远程仓库**

合并提交后，就可以推送当前分支到远程仓库了。

``` bash
$ git push --force origin myfeature
```

`git push` 命令要加上 `force` 参数，因为 `rebase` 以后，分支历史改变了，跟远程分支不一定兼容，有可能要强行推送.

* **第七步：发出Pull Request**

提交到远程仓库以后，就可以发出 Pull Request 到 `master` 分支，然后请求别人进行代码 Review，确认可以合并到 `master`。

## 知识/技巧解析

### 断头 (detached HEAD) 是什么?

正常情况下，`HEAD` 會指向某一個分支，而分支會指向某一個提交。当 `HEAD` 没有指向一个分支的时候, 这个状态就被称为 `detached HEAD`

可能發生這個狀態的原因有：
* 使用 `checkout` 指令直接跳到某個提交，而那個提交剛好目前沒有分支指著它。
* `rebase` 的過程其實也是處於不斷的 `detached HEAD` 狀態。
* 切換到某個遠端分支的時候。

让我们来说个更具体的例子: 

![detached-head0](https://i.loli.net/2019/02/20/5c6cc5701a4d8.png)

假如w我使用 `checkout` 指令切換至 `add cat 1` 那個 `commmit`.  同时 `HEAD` 也就指向了那个提交.  因为没有分支指向这个提交, 所有处于 `detached HEAD` 状态.

![detached-head1](https://i.loli.net/2019/02/20/5c6cc6a57e5e0.png)

这个时候如果再进行一次提交.

``` bash
$ touch no-head.html

$ git add no-head.html

$ git commit -m "add a no-head file"
[detached HEAD b6d204e] add no-head file
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 no-head.html
```

![detached-head2](https://i.loli.net/2019/02/20/5c6cc6dd145be.png)

因为并没有一个分支指向这个新的提交, 只是 `HEAD` 在指向它.  如果之后我让 `HEAD` 再指向其他分支.  这个提交就不容易被找到了, 除非我记住它的 SHA-1 校验和.

如果還想留下這個提交，就給它一個分支指著它就行了.

``` bash
$ git branch new_branch b6d204e
$ git checkout new_branch
```

或者

``` bash
$ git checkout -b new_branch b6d204e
Switched to a new branch 'new_branch'
```

### SHA-1 字符串是怎么算的?

SHA-1 是「Secure Hash Algorithm 1」的缩写, 計算之後的結果通常會以 40 個十六進位的字符呈現.  這個演算法的特點之一，就是只要輸入一樣的值，就會有一樣的輸出值，反之，如果是不同的輸入值，就會有不同的輸出值。

#### SHA-1 值會有「重複」的狀況發生嗎？

首先，前面提到 SHA-1 演算法的特性之一，就是相同的輸入值就會得到相同的結果.  而當輸入兩個不同的值，卻得到相同的結果，也就是說，兩個內容不同的檔案，卻得到一樣的 SHA-1 值，這種情況稱之為**碰撞**（collision）。

这个几率十分小, 小到不用考虑.

### commit messgae 格式

我使用的格式为: 

``` bash
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

大致分为三个部分(使用空行分割):

* 标题行: 必填, 描述主要修改类型和内容
* 主题内容: 描述为什么修改, 做了什么样的修改, 以及开发的思路等等
* 页脚注释: 放 Breaking Changes 或 Closed Issue

* `type`: 提交的类型
  * `feat`: 新特性
  * `fix`: 修改问题
  * `refactor`: 代码重构
  * `docs`: 文档修改
  * `style`: 代码格式修改, (注意不是 CSS 修改)
  * `test`: 测试用例修改
  * `chore`: 其他修改, 比如构建流程, 依赖管理.
* `scope`: commit 影响的范围, 比如: route, component, utils, build…
* `subject`: commit 的概述, 建议符合 "50/72 formatting"
* `body`: commit 具体修改内容, 可以分为多行, 建议符合 "50/72 formatting"
* `footer`: 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接.

通过修改 `~/.gitconfig` 可以添加模板, 每次提交的时候在 vim 中带出, 时刻提醒自己: