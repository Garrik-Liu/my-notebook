# Git 攻略

> **摘要**: 本文讲解 Git 是什么, 有什么用, 如何用 Git 进行版本控制, 以及  大厂的版本管理策略.

## Git 干什么的?

[Git 官网](https://git-scm.com/)

**Git 是一个开源的分布式版本控制系统。**

版本控制是一种用来 "**记录文件内容变化的系统，允许对指定版本的修订情况进行查阅，追溯**"。Git 是目前业界最流行的版本控制系統.

Git 是分布式的, **每一个客户端都是一个独立的节点，在各自的节点上都有独立的一份完整的版本库**。

- 分布式的好处是，即使一个人的电脑出问题了，也可以直接从其他人那里克隆一份版本库。
- 分布式版本控制系统通常也有一台充当“中央服务器”的电脑，但这个服务器的作用仅仅是用来方便 “交换” 大家的修改，没有它大家也一样干活.

## Git 基础

### 初始化仓库

在一个目录下使用 `git init` 指令初始化這個目錄，讓 Git 開始對這個目錄進行版本控制。

這個指令會在這個目錄裡建立了一個 `.git` 隐藏目录. 这个目录是 Git 来管理版本库的, 它将默认记录项目目录中任何文件的改动。如果把 `.git` 目录删除了，版本记录也就都没有了.

### 文件状态 & 工作区域

在 Git 中文件有两种状态：**已跟踪（tracked）** 和 **未跟踪（untracked）**。

**已跟踪（tracked）** 又分为：

- **已修改（modified）**
- **已暂存（staged）**
- **已提交（committed）**

---

被 Git 管理的项目有三个工作区域：

- **工作区 Working Directory**: 本地的工作目录，属于本地文件系统。
- **暂存区 Staging Area**：暂存本地文件的改动，准备将来进行提交。存放在`.git`目录下的 `index` 文件（`.git/index`）中，所以我们把暂存区有时也叫作索引 Index。
- **版本库 Repository**：储存提交的版本记录。`.git` 目录就是 Git 的本地版本库，不算是工作区的文件目录。

![2020-09-19-09-28-21](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-19-09-28-21.png)

### 检查当前文件状态

在一个空目录下执行 `git init`. 之后使用命令 `git status` 来查看这个目录的状态.

```bash
$ git status
On branch master

Initial commit

nothing to commit (create/copy files and use "git add" to track)
```

表示目录中没有东西可以提交.

### 跟踪新文件

在项目下创建一个新的 README 文件。 如果之前并不存在这个文件，使用 `git status` 命令，你将看到一个新的未跟踪文件：

```bash
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)

    readme.md

nothing added to commit but untracked files present (use "git add" to track)
```

在状态报告中可以看到新建的 README 文件出现在 Untracked files 下面。 未跟踪的文件意味着 Git 在之前的快照（提交）中没有这些文件.

---

现在用 `git add` 跟踪 `readme.md` 文件.

```bash
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

	new file:   readme.md
```

只要在 Changes to be committed 这行下面的，就说明是已暂存状态。 如果此时提交，那么该文件此时此刻的版本将被留存在历史记录中。

### 暂存已修改文件

现在修改一下之前被跟踪的 `readme.md` 文件. 然后再执行 `git status`

```bash
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

`readme.md` 出现在 Changes not staged for commit 这行下面，说明已跟踪文件的内容发生了变化，但还没有放到暂存区。要暂存这个变动，需要运行 `git add` 命令。

注意，`git add` 这个命令将可以理解为 “**添加变动到下一次提交中**” 而不是 “将一个文件添加到提交中”。

---

添加完后, 在执行 `git status`

```bash
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

	new file:   readme.md
```

变动已暂存，下次提交时就会一并记录到仓库。

### 提交更新

使用 `git commit` 命令将已暂存的文件进行提交.这种方式会启动「 文本编辑器 」输入本次提交的说明。(默认会启用 shell 的环境变量 `$EDITOR` 所指定的软件，一般都是 vim 或 emacs。)

也可以在 `commit` 命令后添加 `-m` 选项，将提交信息与命令放在同一行

```bash
$ git commit -m "Story 182: Fix benchmarks for speed"
[master 463dc4f] Story 182: Fix benchmarks for speed
 2 files changed, 2 insertions(+)
 create mode 100644 README
```

提交后它会告诉你：

- 当前是在哪个分支（`master`）提交的
- 本次提交的完整 SHA-1 校验和是什么（`463dc4f`），
- 在本次提交中，有多少文件修订过，多少行添加和删改过。

`commit` 命令加上 `-a` 选项，Git 就会自动把所有**已跟踪**的文件上的所有变动，暂存起来一并提交，跳过 `git add` 步骤

---

如果此次提交暂存区没有任何变动, 但仍旧想要提交，则需要加上 `--allow-empty` 参数.

```bash
$ git commit --allow-empty -m "空的"
[master 76a5b84] 空的
```

### 校验和

改动在提交前，会基于文件的内容 & 目录结构计算出一个 SHA-1 散列值，作为当前提交的唯一索引 ID，称为「 **校验和** 」

SHA-1 散列是一个由 40 个十六进制字符（0-9 和 a-f）组成字符串。

```bash
# 一个 SHA-1 散列值：
24b9da6552252987aa493b52f8696cd6d3b00373
```

### 暂存 & 提交时发生了什么

**Git 保存的不是文件的变化或者差异，而是一系列不同时刻的文件快照**。

在进行提交操作时，Git 会保存一个提交对象（commit object）, 该提交对象会包含一个指向内容快照的指针, 还包含了作者的姓名和邮箱、提交时输入的信息以及指向它的父对象的指针。

首次提交产生的提交对象没有父对象，普通提交操作产生的提交对象有一个父对象，而由多个分支合并产生的提交对象有多个父对象。

假设现在有一个工作目录，里面包含了三个将要被暂存和提交的文件。

1. `git add` 暂存操作会为**每一个文件计算 "校验和"**，然后会把当前版本的文件快照保存到 Git 仓库中（ Git 使用 blob 对象来保存它们 ），最终将校验和加入到暂存区域等待提交.
2. 当使用 `git commit` 进行提交操作时，Git 会先计算**每一个子目录的校验和**，然后在 Git 仓库中这些校验和保存为 "树对象"。
3. 随后，Git 便会**创建一个提交对象**，它除了包含上面提到的提交信息外，还包含指向刚创建的树对象的指针。如此一来，Git 就可以在需要的时候重现此次保存的快照。

![2020-09-19-20-10-54](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-19-20-10-54.png)

整套流程下来，Git 仓库中共创建了五个对象：

- 三个 blob 对象，保存着文件快照。
- 一个树对象，记录着目录结构，和对 blob 对象的索引。
- 一个提交对象，包含着指向树对象的指针，和所有提交信息。

### 状态简览

`git status` 命令的输出十分详细，但其用语有些繁琐。 如果你使用 `git status -s` 命令或 `git status --short` 命令，你将得到一种更为紧凑的格式输出。

```bash
$ git status -s
 M README
MM Rakefile
A  lib/git.rb
M  lib/simplegit.rb
?? LICENSE.txt
```

- 新添加的未跟踪文件前面有 `??` 标记。
- 新添加到暂存区中的文件前面有 `A` 标记。
- 修改过的文件前面有 `M` 标记。
  - 出现在右边的 `M` 表示该文件被修改了但是还没放入暂存区。
  - 出现在靠左边的 `M` 表示该文件被修改了并放入了暂存区。
  - 文件前面有两个 `MM`, 表示在工作区被修改并提交到暂存区后，又在工作区中被修改了。

### 移除文件

`git rm` 命令，用以移除指定文件的「 已跟踪 」状态，将其从 Git 仓库中移除。同时，将其从工作目录中移除。

`git rm -r` 命令，用以删除目录。

`git rm --cached` 命令，把文件从 Git 仓库中移除，但仍然希望保留在当前工作目录中。

如果**已追踪文件删除之前修改过，并且已经放到暂存区**的话：

- 使用 `git rm -f` 命令，将文件强制删除。
- 使用 `git rm --cached` 命令，将其从 Git 仓库删除，但文件仍旧保存在工作目录。

这是一种安全特性，用于防止误删还没有提交的更改。

```bash
(base) bogon:test xiangliu$ git status -s
M  test1
(base) bogon:test xiangliu$ git rm test1
error: the following file has changes staged in the index:
    test1
(use --cached to keep the file, or -f to force removal)
```

如果只是简单地从工作目录中手工删除文件，删除操作被当做 Change 看待。运行 `git status` 时就会看到，删除变动出现在 “Changes not staged for commit” 部分。

### 忽略文件

有些文件无需纳入 Git 的管理，也不希望它们总出现在未跟踪文件列表。我们可以创建一个名为 `.gitignore` 的文件，列出要忽略的文件模式。

比如:

```bash
*.[oa]
*~
```

第一行告诉 Git 忽略所有以 .o 或 .a 结尾的文件。第二行告诉 Git 忽略所有以波浪符（~）结尾的文件.

要养成一开始就设置好 `.gitignore` 文件的习惯，以免将来误提交无用的文件.

`.gitignore` 的匹配模式规则如下：

- 使用标准的 `glob` 模式匹配。
- 所有空行或者以 `＃` 开头的行都会被 Git 忽略。
- 匹配模式可以以（`/`）开头，防止递归。
- 匹配模式可以以（`/`）结尾，指定目录。
- 要忽略指定模式以外的文件或目录，可以在模式前加 `!` 取反。

`glob` 模式是指 shell 所使用的简化了的正则表达式:

- 星号（`*`）匹配零个或多个任意字符;
- `[abc]` 匹配任何一个列在方括号中的字符;
- 问号（`?`）只匹配一个任意字符;
- 如果在方括号中使用短划线分隔两个字符，表示所有在这两个字符范围内的都可以匹配（比如 `[0-9]` 表示匹配所有 0 到 9 的数字）;
- 使用两个星号 (`**`) 表示匹配任意中间目录，比如`a/**/z` 可以匹配 `a/z`, `a/b/z` 或 `a/b/c/z`等。

下面有些例子:

```bash
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

### 重置 ( 撤销 ) 提交

#### reset 指令

**`reset` 指令，设置当前所在分支所指向的提交对象**。

**`^` 符號表示「 前一次 」的意思**.

```bash
# 让当前所在分支指向，当前提交对象的前一个提交对象。
$ git reset HEAD^
```

如果是 `HEAD^^` 則是往前兩次，以此類推。不過如果要倒退五次，通常不會寫 `HEAD^^^^^`，而會寫成 `HEAD~5`。

假如 `HEAD` 指向 `master` 分支的 `e12d8ef` 提交对象. 那么还可以写成:

```bash
# master 分支指向提交对象的前一个提交对象。
$ git reset master^
# 校验和 ID 为 e12d8ef 的提交对象的前一个提交对象。
$ git reset e12d8ef^
```

这个指令有三个常用参数: `--soft`, `--hard`, `--mixed`

- `--mixed` 是 `reset` 指令的默认参数. 它将重置 `HEAD` 到另外一个提交, 并且重置暂存区，但你工作区的文件不会被更改。重置前所做的更改，都变成了「 未暂存，未跟踪 」的状态。
- `--soft` 参数重置 `HEAD` 到另外一个提交，但暂存区和工作区都不会变化。
- `--hard` 参数，会让暂存区和工作区都会重置到目标提交所处的状态。所有与目标提交之间的变更，都会被丢弃。

![gif](https://mmbiz.qpic.cn/mmbiz_gif/meG6Vo0MeviaPS2ZgOV7sV3qpnhsB4LFO8dmv56PCuicTzZTVL6lVp541picccqwMAU36EhACmJCMttPvBJl8tXjQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)
![gif](https://mmbiz.qpic.cn/mmbiz_gif/meG6Vo0MeviaPS2ZgOV7sV3qpnhsB4LFOsiboiaLTHUnlyorlyicvxZtRT9tQD4fcX2VponJIcFUpZHbKKdP5p31vQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

::: details-open 🌰 例子：

假如我们在目录中添加了一个文件叫 `myFile.md`, 并且进行了提交.

```bash
bogon:git_practice xiangliu$ git log --oneline
0935e0d (HEAD -> master) add my file
2e0425c first commit
```

使用 `git reset HEAD^` 后, 执行 `git status` 看到 `myFile.md` 为未跟踪状态, 但文件仍在工作区中.

```bash
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	myFile.md

nothing added to commit but untracked files present (use "git add" to track)
```

使用 `git reset HEAD^ --soft` 后, 执行 `git status` 看到 `myFile.md` 在暂存区, 等待提交.

```bash
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	new file:   myFile.md
```

使用 `git reset HEAD^ --hard` 后, `myFile.md` 直接没了.

因为使用了 `reset` 后, 重置到的提交对象之后的提交仍然存在. 通过 `reset` 再重置回你要的提交就可以再返回去. 如果你找不到你想要的提交对象的校验和是什么了, 可以通过 `git reflog` 命令. 它可以查看所有分支的所有操作记录，包括已经被删除的提交记录

:::

#### revert 指令

假如想撤销掉最近的一次提交。可以输入下面指令：

它会保留原来的提交, 并创建一个新的提交来表示撤销操作。

```bash
$ git revert HEAD --no-edit
# --no-edit 參數，表示不编辑提交信息。

#$ git revert HEAD^  撤销最近一次，以及最近一次提交的前一次提交
#$ git revert [commit] 一直撤销到指定提交的前一次提交为止
```

![2020-09-20-13-59-34](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-20-13-59-34.png)

如果想再恢复之前的提交：

- 一种方法是，再用一次 `revert` 执行「 撤销的撤销 」
- 另一种方法，用 `reset` 指令，让分支指向想要的提价上。

### 查看提交历史

使用 `git log` 命令查看提交历史。

默认不用任何参数的话，会按提交时间，由新到旧列出所有的提交信息：

- SHA-1 校验和
- 作者的名字
- 电子邮件地址
- 提交时间
- 提交说明

```bash
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

可以加上 `-2` 参数，来仅显示最近两次提交。同理 `-3` 就是最近的三次提交。

```js
(base) bogon:test xiangliu$ git log -1
commit cb171cbaa507ba9663ce776e8fd071d48bf9e9b6 (HEAD -> master)
Author: Garrik-Liu <garrikliu@Gmail.com>
Date:   Sat Sep 19 09:41:45 2020 +0800

    add test1
```

使用 `--stat` 选项，查看每次提交的详细信息。

```bash
commit a11bef06a3f659402fe7563abf99ad00de2209e6
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Sat Mar 15 10:31:28 2008 -0700

    first commit

 README           |  6 ++++++
 Rakefile         | 23 +++++++++++++++++++++++
 lib/simplegit.rb | 25 +++++++++++++++++++++++++
 3 files changed, 54 insertions(+)
```

通过选项 `--pretty` 来使用指定的格式展示提交历史。它有一些内建的子选项供你使用：

- `oneline` 将每个提交放在一行显示。

具体使用细节，请参考[文档](https://git-scm.com/docs/pretty-formats)。

```bash
$ git log --pretty=oneline
ca82a6dff817ec66f44342007202690a93763949 changed the version number
085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7 removed unnecessary test
a11bef06a3f659402fe7563abf99ad00de2209e6 first commit
```

### 查看操作历史

使用 `git reflog` 指令，可以显示所有已执行操作的日志。

如果你不幸犯错了，你可以使用 `git reflog` 的信息通过重置 HEAD 轻松地回到想要的提交上。

![2020-09-20-14-07-43](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-20-14-07-43.gif)

假设，我们不想合并分支了。执行 `git reflog` 命令，我们看到合并之前的仓库状态位于 `HEAD@{1}` 这个地方，我们使用 `git reset` 指令将 `HEAD` 头指向 `HEAD@{1}`。

### 打标签

Git 可以给历史中的某一个提交打上标签。

常见使用场景是，使用这个功能来标记版本发布结点，例如 `v1.0`，`v2.1`，`v3.0`。

#### 列出标签

`git tag` 列出已有标签

```bash
$ git tag
v0.1
v1.3
```

`-l` 参数可以查号特定标签

```bash
$ git tag -l 'v1.8.5*'
v1.8.5
v1.8.5-rc0
v1.8.5-rc1
v1.8.5-rc2
```

#### 创建标签

Git 使用两种主要类型的标签：

- **轻量标签**（lightweight）只是对一个特定提交的引用。
- **附注标签**（annotated）是存储在 Git 仓库中的一个完整对象。其中包含：
  - 打标签者的名字
  - 电子邮件地址
  - 日期时间
  - 一个标签信息

通常建议创建「 附注标签 」，这样你可以拥有以上所有信息。

---

创建「 **轻量标签** 」只需要提供标签名字:

```bash
$ git tag v1.4-lw
$ git tag
v0.1
v1.3
v1.4
v1.4-lw
v1.5
```

在标签上运行 `git show`，你不会看到额外的标签信息。 命令只会显示出提交信息：

```bash
$ git show v1.4-lw
commit ca82a6dff817ec66f44342007202690a93763949
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Mon Mar 17 21:52:11 2008 -0700

    changed the version number
```

创建一个「 **附注标签** 」, 最简单的方式是当你在运行 `tag` 命令时指定 `-a` 选项：

```bash
$ git tag -a v1.4 -m 'my version 1.4'
$ git tag
v0.1
v1.3
v1.4
```

`-m` 选项指定了一条将会存储在标签中的信息。 如果没有为附注标签指定一条信息，Git 会运行编辑器要求你输入信息。

使用 `git show` 命令可以看到标签信息与对应的提交信息：

```bash
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

如果要给 **过去的提交** 打标签, 需要在命令的末尾指定提交的校验和

```bash
$ git tag -a v1.2 9fceb02
```

#### 删除标签

命令 `git tag -d <tagname>` 可以删除指定标签:

```bash
$ git tag -d v1.4-lw
Deleted tag 'v1.4-lw' (was e7d5add)
```

## 使用分支

### 分支简介

**Git 的分支，其实本质上仅仅是指向提交对象的指针**。

![2020-09-19-20-10-35](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-19-20-10-35.png)

由于 Git 的分支实质上仅是包含所指对象校验和的文件，所以它的创建和销毁都异常高效。 创建一个新分支就相当于往一个文件中写入 41 个字节（40 个字符和 1 个换行符）

### HEAD

HEAD 是一個指针，指向某一個分支，可以把 HEAD 當做「 **目前所在分支** 」看待。在 `.git` 目錄裡有一個檔名為 HEAD 的文件，記錄著 HEAD 所指向的分支。

```dash
$ cat .git/HEAD
ref: refs/heads/master
```

### 分支创建

使用 `git branch` 命令创建新分支, 会在当前所在的提交对象上创建一个指针.

```bash
git branch testing
```

使用 `git log` 命令的 `--decorate` 参数, 可以查看各个分支当前所指的对象。

```bash
$ git log --oneline --decorate
f30ab (HEAD, master, testing) add feature #32 - ability to add new
34ac2 fixed bug #1328 - stack overflow under certain conditions
98ca9 initial commit of my project
```

### 分支切换

要切换到一个已存在的分支，你需要使用 `git checkout` 命令。

```bash
$ git checkout testing
```

如果想新建一个分支, 同时切换到这个分支上可以使用 `git checkout` 的 `-b` 参数.

```bash
$ git checkout -b testing
```

把分支切换回 master. HEAD 指回 master 分支，同时工作目录恢复成 master 分支所指向的快照内容。然后在 master 分支上, 做一些内容修改, 并且提交, 则项目出现分支分叉情况.

![advance-master](https://i.loli.net/2019/02/19/5c6b71064e0f2.png)

使用 `git log` 命令查看分叉历史。 运行 `git log --oneline --decorate --graph --all` ，它会输出你的提交历史、各个分支的指向以及项目的分支分叉情况。

```bash
$ git log --oneline --decorate --graph --all
* c2b9e (HEAD, master) made other changes
| * 87ab2 (testing) made a change
|/
* f30ab add feature #32 - ability to add new formats to the
* 34ac2 fixed bug #1328 - stack overflow under certain conditions
* 98ca9 initial commit of my project
```

### 合并分支

使用 `git merge` 命令可以合并分支.

```bash
$ git checkout master
$ git merge hotfix
Updating f42c576..3a0874c
Fast-forward
 index.html | 2 ++
 1 file changed, 2 insertions(+)
```

上面命令里, 切换到 `master` 分支, 然后把 `hotfix` 分支合并进来.

![basic-branching-4](https://i.loli.net/2019/02/19/5c6b711339866.png)

如果顺着一个分支走下去能够到达另一个分支，那么 Git 在合并两者的时候，只会简单的将指针向前推进，这被称为「 **fast-forward 快进合并** 」这种情况下的合并操作没有需要解决的分歧。

当前 `master` 分支所指向的提交，是要合并进来的分支所指向的提交的直接上游，所以 Git 只是简单的将 `master` 分支的指针向前移动。

![2020-09-19-21-45-53](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-19-21-45-53.gif)

如果要合并两个之间存在分叉的分支。Git 就需要做「 **no-fast-forward 合并** 」了。

Git 会使用两个分支所指向的提交, 以及这两个分支上的第一个共同提交，做一个简单的三方合并。Git 会在当前分支（ active branch ）上额外创建一个新的「 **合并提交** merging commit 」这条提交记录既指向当前分支，又指向合并分支。

![2020-09-19-21-50-00](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-19-21-50-00.png)

![2020-09-19-21-50-39](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-19-21-50-39.png)

![2020-09-20-13-20-56](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-20-13-20-56.gif)

如果你在两个不同的分支中，对同一个文件的同一个部分进行了不同的修改，「 **冲突** conflict 」就会出现。

合并时 Git 会等待你去解决合并产生的冲突。 你可以使用 `git status` 命令来查看那些，包含合并冲突的，处于未合并（ unmerged ）状态的文件：

```bash
# 尝试合并
$ git merge iss53
Auto-merging iss53
CONFLICT (content): Merge conflict in iss53
Automatic merge failed; fix conflicts and then commit the result.

# 查看包含冲突的文件
$ git status
On branch master
You have unmerged paths.
  (fix conflicts and run "git commit")

Unmerged paths:
  (use "git add <file>..." to mark resolution)

    both modified:      index.html

no changes added to commit (use "git add" and/or "git commit -a")
```

在你解决了所有文件里的冲突之后，对每个文件使用 `git add` 命令来将其标记为冲突已解决，并暂存。之后输入 `git commit` 来完成合并提交。

### 删除分支

在合并完之后, 你可以用 `git branch -d` 来删除掉不需要的分支。

```js
$ git branch -d iss53
Deleted branch iss53 (was aa722a3).
```

### 查看分支列表

`git branch` 命令如果不加任何参数运行它，会得到当前所有分支的一个列表

```bash
$ git branch
  iss53
* master
  testing
```

`*` 表示当前 HEAD 指针所指向的分支. 这意味着如果在这时候提交，master 分支将会随着新的工作向前移动。

### 查看分支最后提交

如果需要查看每一个分支的最后一次提交，可以运行 `git branch -v` 命令：

```bash
$ git branch -v
  iss53   93b412c fix javascript issue
* master  7a98805 Merge branch 'iss53'
  testing 782fd34 add scott to the author list in the readmes
```

#### 查看「 已合并 / 未合并 」分支

`--merged` 与 `--no-merged` 选项可以过滤分支列表中，已合并或未合并到当前分支的分支。

在这个列表中分支名字前没有 `*` 号的分支，代表已经将它们的工作整合到了另一个分支中。通常可以使用 `git branch -d` 删除掉。

```bash
$ git branch --merged
  iss53
* master
```

### 变基

使用 `rebase` 命令，执行变基操作，将一条分支上的提交，按照原有次序依次应用到另一分支上。

![2020-09-20-13-21-54](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-20-13-21-54.gif)

```bash
$ git checkout experiment
$ git rebase master
First, rewinding head to replay your work on top of it...
Applying: added staged command
```

使用 `git rebase [basebranch] [topicbranch]` 命令可以直接将 Topic Branch 分支，即 experiment，变基到 Base Branch 分支上，即 master。

这样做能省去你先切换到 experiment 分支，再对其执行变基命令的多个步骤。

```bash
$ git rebase master experiment
```

![2020-09-20-09-05-50](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-20-09-05-50.png)

变基操作使得提交历史更加整洁。 在一条经过变基的分支上，尽管实际的开发工作是并行的，但它们看上去就像是串行的一样，提交历史是一条直线没有分叉。

#### 交互式变基

使用 `git rebase -i` 选项，进入交互式变基模式。Git 会打开文本编辑器，提交记录按照「 从旧到新 」排列。

在每一条提交上，可以应用很多种操作模式：

- `pick`，简写 `p`：留下此提交。
- `reword`，简写 `r`：留下此提交，但修改提交信息。
- `edit`，简写 `e`：修改此提交。
- `squash`，简写 `s`：将此提交合并到之前的提交中。
- `fixup`，简写 `f`：将当前提交合并到之前的提交中，不保留提交消息。
- `drop`，简写 `d`：删除提交。
- `exec`，简写 `x`：在每一个需要变基的提交上执行一条命令。

最常见的应用场景就是，合并提交记录。

![2020-09-20-13-20-00](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-20-13-20-00.gif)

#### 变基的风险

变基的准则：

- 只把变基操作当作是在推送前，清理提交的工具。
- **只对尚未推送或分享给别人的本地提交执行变基操作，从不对已推送至别处的提交执行变基操作**。

---

变基操作的实质是丢弃一些现有的提交，然后相应地新建一些内容一样但实际上不同的提交。

如果你已经将提交推送至某个仓库，而其他人也已经从该仓库拉取提交，并进行了后续工作。

此时，如果你用 `git rebase` 命令重新整理了提交并再次推送，你的同伴因此将不得不再次将他们手头的工作与你的提交进行整合，如果接下来你还要拉取并整合他们修改过的提交，事情就会变得一团糟。

🌰 看个例子:

假设你从一个中央服务器克隆然后在它的基础上进行了一些开发。 你的提交历史如图所示：

![2020-09-20-11-01-45](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-20-11-01-45.png)

然后，某人又向中央服务器提交了一些修改，其中还包括一次合并。 你抓取了这些在远程分支上的修改，并将其合并到你本地的开发分支，然后你的提交历史就会变成这样：

![2020-09-20-11-02-09](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-20-11-02-09.png)

接下来，这个人又决定把合并操作回滚，改用变基；继而又用 `git push --force` 命令覆盖了服务器上的提交历史。 之后你从服务器抓取更新，会发现多出来一些新的提交。

![2020-09-20-11-02-24](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-20-11-02-24.png)

结果就是你们两人的处境都十分尴尬。 如果你执行 `git pull` 命令，你将合并来自两条提交历史的内容，生成一个新的合并提交，最终仓库会如图所示：

![2020-09-20-11-01-32](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-20-11-01-32.png)

此时如果你执行 `git log` 命令，你会发现有两个提交的作者、日期、日志居然是一样的，这会令人感到混乱。 此外，如果你将这一堆又推送到服务器上，你实际上是将那些已经被变基抛弃的提交又找了回来，这会令人感到更加混乱。 很明显对方并不想在提交历史中看到 C4 和 C6，因为之前就是他把这两个提交通过变基丢弃的。

#### 用变基解决变基

遇到上述情况，不要执行合并，而是执行 `git rebase teamone/master`, Git 将会：

- 检查哪些提交是我们的分支上独有的（ C2，C3，C4，C6，C7 ）
- 检查其中哪些提交不是合并操作的结果（ C2，C3，C4 ）
- 检查哪些提交的内容是目标分支不具备的（ 只有 C2 和 C3，因为 C4 其实就是 C4' ）
- 把这些提交应用在 `teamone/master` 上面

![2020-09-20-11-01-12](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-20-11-01-12.png)

本例中使用 `git pull --rebase` 命令可以完成上述操作. 它的意思是先 `git fetch`，再 `git rebase teamone/master`。

## 远程仓库

远程仓库是指，托管在网络中的版本库. 与他人协作时, 可以在这个远程仓库上根据需要「 Push 推送 」或「 Fetch 拉取 」数据。

下图各指令与远端库，本地库，暂存区，工作目录之间的关系：

![2020-09-20-13-28-15](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-20-13-28-15.png)

### 添加远程仓库

#### 添加远程库

场景: 先有本地库, 后有远程库

运行 `git remote add <shortname> <url>` 添加一个新的远程仓库，同时可以为仓库指定一个名字。

```bash
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

使用 `git clone [url]` 指令把远程库克隆到本地。克隆的远程仓库默认名称 `origin`。

```bash
$ git clone git://github.com/schacon/grit.git
```

如果你想在克隆远程仓库的时候，自定义本地仓库的目录名，可以在命令末尾指定新的名字。

```bash
# git clone <版本库的网址> <本地目录名>
$ git clone git://github.com/schacon/grit.git myFolder
```

### 查看远程仓库

运行 `git remote` 命令，它会列出当前仓库配置的每一个远程仓库的名字。

```bash
$ git remote
origin
```

选项 `-v`，会显示，每个远程仓库执行 `fetch` 和 `pull` 操作时对应的 URL。

```bash
$ git remote -v
origin	https://github.com/schacon/ticgit (fetch)
origin	https://github.com/schacon/ticgit (push)
```

如果想要查看某一个远程仓库的更多信息，可以使用 `git remote show [remote-name]` 命令

```bash
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

### 拉取 fetch & 抓取 pull

`git fetch [remote-name]` 命令会访问远程仓库，从中 **拉取** 所有你还没有的数据。 执行完成后，你将会拥有那个远程仓库中所有分支的引用，可以随时合并或查看。

`git fetch` 命令并不会自动合并或修改你当前的工作。

![2020-09-20-13-26-16](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-20-13-26-16.gif)

`git pull` 命令等同于 `git fetch` + `git merge`。不但拉取，还会进行合并。

### 推送到远程仓库

使用命令 `git push [remote-name] [branch-name]` 将你本地的内容推送到远端服务器.

Push 指令其實做了幾件事：

- 把 `[branch-name]` 這個分支的內容，推向 `[remote-name]` 這個位置。
- 在 `[remote-name]` 那個远端上，如果 `[branch-name]` 不存在，就建立一個叫做 `[branch-name]` 的同名分支。
- 但如果远端上就存在 `[branch-name]` 分支，便会让 `[branch-name]` 分支指向最新的提交上。

只有当你有所克隆服务器的写入权限，并且之前没有人推送过时，这条命令才能生效。 当你和其他人在同一时间克隆，他们先推送到上游然后你再推送到上游，你的推送就会毫无疑问地被拒绝。

你必须先将他们的工作 `fetch` 抓取下来，并将其合并 `merge` 进你的工作后才能推送。`git pull` 拉取命令可以直接帮你实现这两步。

#### upstream 上游

可以给分支设定一个「 **上游 upstream** 」分支。**在分支上执行 `pull`, `fetch`, `push` 命令时，不需要额外的参数，默认将上游分支作为目标**。

- 通常 upstream 是远端服务器上的某个分支，但也可以设定为在本地端的其它分支。

通过 `git push -u [远程服务器] [本地分支:远端分支]` 指令来设定 upstream。

```bash
$ git push -u origin master:master
```

- 上面指令将远端 `origin` 上的 `master` 分支設定為本地 `master` 分支的上游 upstream。
- 当直接执行 `git push` 指令是，就会把本地 master 分支上的内容，更新到远端的 master 分支上。如果远端不存在 master 分支，则自动创建一个。

上面的指令可以简写为：

```bash
$ git push origin master
```

如果远端的分支名和本地的不同，则不能简写：

```bash
$ git push origin master:cat
```

### 远程仓库的移除与重命名

运行 `git remote rename` 去修改一个远程仓库的简写名

```bash
$ git remote rename pb paul
$ git remote
origin
paul
```

使用 `git remote rm` 移除一个远程仓库

```bash
$ git remote rm paul
$ git remote
origin
```

## 修改历史记录

### 修改提交信息

#### 修改最近一次提交

要修改最後一次的 Commit 訊息，只要直接在 Commit 指令後面加上 `--amend` 參數即可：

```bash
$ git commit --amend -m "Welcome To Facebook"
[master 614a90c] Welcome To Facebook
Date: Wed Aug 16 05:42:56 2017 +0800
1 file changed, 0 insertions(+), 0 deletions(-)
create mode 100644 config/database.yml
```

#### 修改更早的提交

可以使用 `rebase` 命令的互动模式来修改更早的提交信息.

```bash
# 查看提交记录
$ git log --oneline
27f6ed6 (HEAD -> master) add dog 2
2bab3e7 add dog 1
ca40fc9 add 2 cats
1de2076 add cat 2
cd82f29 add cat 1
382a2a5 add database settings
bb0c9c2 init commit

# 变基
$ git rebase -i bb0c9c2
```

```bash
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

将想要改信息的提交前面的 `pick` 改成 `reword`，或是 `r`, 就表示待會我要來修改這兩次提交的信息.

因为提交改变了, 提交的 SHA-1 也就改变了. 之後的 Commit 因為前面的歷史改了，所以後面整串的 Commit 全部都重新做出新的 Commit 出來替代舊的 Commit。

### 合并多个提交

`rebase` 的互动模式同样也可以合并多个提交, 以来让提交历史更简洁.

把想要合并的提交前的指令改成 `squash` 或 `s`. 也可以用 `fixup` 它与 `squash` 相同，但不会保存当前 commit 的提交信息

```bash
pick 382a2a5 add database settings
pick cd82f29 add cat 1
squash 1de2076 add cat 2
squash ca40fc9 add 2 cats
pick 2bab3e7 add dog 1
squash 27f6ed6 add dog 2
```

- 最後一行的 `27f6ed6` 會跟前一個 Commit `2bab3e7` 進行合併
- 倒數第三號的 `ca40fc9` 會跟前一個 Commit `1de2076` 合併，但因為 `1de2076` 又會再往前一個 Commit `cd82f29` 合併

存檔並離開 Vim 編輯器後，它會開始進行 Rebase，而在 Squash 的過程中，它還會跳出 Vim 編輯器讓你編輯一下訊息

![squash1](https://i.loli.net/2019/02/20/5c6cdf896c1d5.png)

把訊息改成「add all cats」：

![squash2](https://i.loli.net/2019/02/20/5c6cdf94aac1e.png)

### 将一个提交拆成多个

如果你在一个提交里做了多出改动, 你之后想把它拆成多个提交, 同樣也可使用互動模式的 Rebase 來操作.

```bash
$ git log --oneline
27f6ed6 (HEAD -> master) add dog 2
2bab3e7 add dog 1
ca40fc9 add 2 cats
1de2076 add cat 2
cd82f29 add cat 1
382a2a5 add database settings
bb0c9c2 init commit
```

假如 `ca40fc9` 這個 Commit 一口氣增加了兩個檔案，我想把它拆成兩個提交. 我们需要进入互动模式, 把要拆的那個 Commit 的 `pick` 改成 `edit`:

```bash
pick 382a2a5 add database settings
pick cd82f29 add cat 1
pick 1de2076 add cat 2
edit ca40fc9 add 2 cats
pick 2bab3e7 add dog 1
pick 27f6ed6 add dog 2
```

Rebase 在執行到 `ca40fc9` 這個 Commit 的時候就會停下來：

![split1](https://i.loli.net/2019/02/20/5c6ce0ef3d2bb.png)

`HEAD` 指向 `ca40fc9`, 我们通过 `reset` 指令到这个提交的上一个提交.

```bash
$ git reset HEAD^
```

这两个提交之间的改动都处于 『 未暂存 』状态. 根据你自己的需要通过 `add` 和 `commit` 来进行提交.

等你弄完了, 別忘了現在還是處於 Rebase 狀態，通过 `--continue` 参数来让 Rebase 执行完.

```bash
$ git rebase --continue
Successfully rebased and updated refs/heads/master.
```

## 其他

### 断头 Detached HEAD 是什么?

正常情况下，`HEAD` 會指向某一個分支，而分支會指向某一個提交。当 `HEAD` 没有指向一个分支的时候, 这个状态就被称为「 **Detached HEAD 断头** 」

可能發生這個狀態的原因有：

- 使用 `checkout` 指令直接跳到某個提交，而那個提交剛好目前沒有分支指著它。
- `rebase` 的過程其實也是處於不斷的 `detached HEAD` 狀態。
- 切換到某個遠端分支的時候。

让我们来说个更具体的例子:

![2020-09-20-14-02-31](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-20-14-02-31.png)
假如我使用 `checkout` 指令切換至 `add cat 1` 那個 `commmit`. 同时 `HEAD` 也就指向了那个提交. 因为没有分支指向这个提交, 所有处于 `detached HEAD` 状态.

![2020-09-20-14-02-45](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-20-14-02-45.png)
这个时候如果再进行一次提交.

```bash
$ touch no-head.html

$ git add no-head.html

$ git commit -m "add a no-head file"
[detached HEAD b6d204e] add no-head file
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 no-head.html
```

![2020-09-20-14-02-59](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-09-20-14-02-59.png)

因为并没有一个分支指向这个新的提交, 只是 `HEAD` 在指向它. 如果之后我让 `HEAD` 再指向其他分支. 这个提交就不容易被找到了, 除非我记住它的 SHA-1 校验和。

如果還想留下這個提交，就給它一個分支指著它就行了.

```bash
$ git branch new_branch b6d204e
$ git checkout new_branch
```

或者

```bash
$ git checkout -b new_branch b6d204e
Switched to a new branch 'new_branch'
```

### Git Flow

Git 作为一个分布式版本系统，不可避免涉及到多人协作。

协作必须有一个规范的工作流程，让大家有效地合作，使得项目井井有条地发展下去。

下面介绍的工作流程有一个共同点：都采用"**功能驱动式开发**"（Feature-driven development，简称 FDD）。

它指的是，需求是开发的起点，先有需求再有功能分支（feature branch）或者补丁分支（hotfix branch）。完成开发后，该分支就合并到主分支，然后被删除。

团队开发中，遵循一个合理、清晰的 Git 使用流程，是非常重要的。

![bg2015080501](https://i.loli.net/2019/02/20/5c6d0dba2e04c.png)

- **第一步：新建分支**

每次开发新功能，都应该新建一个单独的分支

```bash
# 获取主干最新代码
$ git checkout master
$ git pull

# 新建一个开发分支myfeature
$ git checkout -b myfeature
```

- **第二步：提交分支 commit**
- **第三步：撰写提交信息**

好的提交信息可以帮助你更好的再将来查阅你之前的代码提交. 我在下面 **知识/技巧** 章节有涉及提交信息的内容.

- **第四步：与主干同步**

```bash
$ git fetch origin
$ git rebase origin/master
```

- **第五步：合并 commit**

分支开发完成后，很可能有一堆 commit，但是合并到主干的时候，往往希望只有一个（或最多两三个）commit，这样不仅清晰，也容易管理。

前面讲过用 `rebase` 合并

另外一种合并提交的简便方法，就是先用 `reset` 撤销过去多个提交，然后再建一个新的.

- **第六步：推送到远程仓库**

合并提交后，就可以推送当前分支到远程仓库了。

```bash
$ git push --force origin myfeature
```

`git push` 命令要加上 `force` 参数，因为 `rebase` 以后，分支历史改变了，跟远程分支不一定兼容，有可能要强行推送.

- **第七步：发出 Pull Request**

提交到远程仓库以后，就可以发出 Pull Request 到 `master` 分支，然后请求别人进行代码 Review，确认可以合并到 `master`。

### Commit Messgae 模板

我使用的格式为:

```bash
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

大致分为三个部分(使用空行分割):

- 标题行: 必填, 描述主要修改类型和内容
- 主题内容: 描述为什么修改, 做了什么样的修改, 以及开发的思路等等
- 页脚注释: 放 Breaking Changes 或 Closed Issue

- `type`: 提交的类型
  - `feat`: 新特性
  - `fix`: 修改问题
  - `refactor`: 代码重构
  - `docs`: 文档修改
  - `style`: 代码格式修改, (注意不是 CSS 修改)
  - `test`: 测试用例修改
  - `chore`: 其他修改, 比如构建流程, 依赖管理.
- `scope`: commit 影响的范围, 比如: route, component, utils, build…
- `subject`: commit 的概述, 建议符合 "50/72 formatting"
- `body`: commit 具体修改内容, 可以分为多行, 建议符合 "50/72 formatting"
- `footer`: 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接.

通过修改 `~/.gitconfig` 可以添加模板, 每次提交的时候在 vim 中带出, 时刻提醒自己:

## 参考

- [图解常用的 Git 指令含义](https://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651236225&idx=1&sn=dfda35481d2cf2c3435c5e9802a1dc81&chksm=bd497e058a3ef713a8020acf25e2d159d36dfad35b04b94fcfb41158fec571e2d43c617d7f05&mpshare=1&scene=1&srcid=&sharer_sharetime=1586565597279&sharer_shareid=9fc6c269db99975622f194cd8f0eba8f%23rd)
