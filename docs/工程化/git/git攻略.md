# Git 攻略

> **摘要**: 本文讲解 Git 是什么, 有什么用, 如何用 Git 进行版本控制, 以及大厂的版本管理策略.

## Git 干什么的?

[Git 官网](https://git-scm.com/)

**Git 是一个开源的分布式版本控制系统。**  

版本控制是一种用来 "记录文件内容变化，并且允许将来查阅特定版本修订情况的系统".  当编写文件时使用「版本控制系統」可以清楚的記錄每個檔案是誰在什麼時候加進來、什麼時候被修改或刪除。Git 是目前业界最流行的版本控制系統.

Git 是分布式的, 相比于集中式的最大区别在于每一个客户端都是一个独立的节点，在各自的节点上都有独立的一份完整的版本库。一个人修改了文件，这时只要把修改过的文件发送给别人，别人就也都能看的到了。这样做不但提高了效率，而且即使一个人的电脑出问题了，也可以直接从其他人那里克隆一份。分布式版本控制系统通常也有一台充当“中央服务器”的电脑，但这个服务器的作用仅仅是用来方便“交换”大家的修改，没有它大家也一样干活.

## Git 基础 

### 初始化仓库

在一个目录下使用 `git init` 指令初始化這個目錄，主要目的是要讓 Git 開始對這個目錄進行版本控制。這個指令會在這個目錄裡建立了一個 `.git` 隐藏目录.  目录是 Git 来跟踪管理版本库的, 它将默认记录项目目录中任何文件的改动。如果把这个子目录删除了，这里面记录的文件版本就都没有了.

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

另外一种情况是，我们想**把文件从 Git 仓库中删除（亦即从暂存区域移除），但仍然希望保留在当前工作目录中**。换句话说，你想让文件保留在磁盘，但是并不想让 Git 继续跟踪。 当你忘记添加 .gitignore 文件，不小心把一大堆文件添加到暂存区时，这一做法尤其有用。使用 `--cached` 选项可以做到.

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

### 文件状态 & 工作区域

在 Git 中文件有两种状态：**已跟踪（tracked）** 和 **未跟踪（untracked）**

**已跟踪（tracked）**又分为：**已提交（committed）**、**已修改（modified）**和 **已暂存（staged）**

被 Git 管理的项目有三个工作区域：**版本库（Repository）**、**工作区（Working Directory）** 和 **暂存区（Staging Area）**。

* 工作区: 就是你在电脑里能看到的目录。
* 暂存区：英文叫 stage, 或 index。一般存放在`.git`目录下的 `index` 文件（`.git/index`）中，所以我们把暂存区有时也叫作索引（index）。
* 版本库：`.git` 目录不算工作区，而是 Git 的版本库。

![1352126739_7909](https://i.imgur.com/qmzpPGu.jpg)

当对工作区修改（或新增）的文件执行 "`git add`" 命令时，暂存区的目录树被更新，同时工作区修改（或新增）的文件内容被写入到对象库中的一个新的对象中，而该对象的 ID 被记录在暂存区的文件索引中。

当执行提交操作（`git commit`）时，暂存区的目录树写到版本库（对象库）中，master 分支会做相应的更新。即 master 指向的目录树就是提交时暂存区的目录树。 

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

如果你使用 `clone` 命令克隆了一个仓库，命令会自动将其添加为远程仓库并默认以 “origin” 为名称简写。

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

## 使用分支



