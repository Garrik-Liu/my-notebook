# Git 攻略

> **摘要**: 本文讲解 Git 是什么, 有什么用, 如何用 Git 进行版本控制, 以及大厂的版本管理策略.

## Git 干什么的?

[Git 官网](https://git-scm.com/)

**Git 是一个开源的分布式版本控制系统。**  

版本控制是一种用来 "记录文件内容变化，并且允许将来查阅特定版本修订情况的系统".  当编写文件时使用「版本控制系統」可以清楚的記錄每個檔案是誰在什麼時候加進來、什麼時候被修改或刪除。Git 是目前业界最流行的版本控制系統.

Git 是分布式的, 相比于集中式的最大区别在于每一个客户端都是一个独立的节点，在各自的节点上都有独立的一份完整的版本库。一个人修改了文件，这时只要把修改过的文件发送给别人，别人就也都能看的到了。这样做不但提高了效率，而且即使一个人的电脑出问题了，也可以直接从其他人那里克隆一份。分布式版本控制系统通常也有一台充当“中央服务器”的电脑，但这个服务器的作用仅仅是用来方便“交换”大家的修改，没有它大家也一样干活.

## 开始使用 Git 

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

