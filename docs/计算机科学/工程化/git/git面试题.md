# Git 面试题

## 概念题

### `git push` 解析

这条指令完整状态为:

``` bash
$ git push origin master:master
```

意思就是「把本地的 master 分支的內容，推一份到 origin 上，並且在 origin 上建立一個 master 分支」

``` bash
$ git push origin master:cat
```

意思为「把本地的 master 分支的內容，推一份到 origin 上，並且在 origin 上建立一個 cat 分支」。

### git clone, git fetch, git pull 三个指令区别?

### HEAD 是什么?


在 Git 中，一般来说它是一个**指向你 "正在工作中的" 本地分支的指针**.

正常情况下，HEAD 會指向某一個分支，而分支會指向某一個 Commit。但 HEAD 偶爾會發生「沒有指到某個分支」的情況，這個狀態的 HEAD 便稱之「detached HEAD」。

在项目的 `.git` 目錄裡有一個檔名為 HEAD 的檔案，就是記錄著 HEAD 的內容

``` bash
$ cat .git/HEAD
ref: refs/heads/master
```

内容表明 HEAD 目前正指向著 master 分支.  再深入看一下的话, 会发现内容为 40 个字符的 SHA-1 值.  这个值和 master 分支所指向的提交的校验和是一样的.  也就是说, **HEAD -> master 分支 -> commit**

``` bash
garrikliu:git_practice xiangliu$ cat .git/refs/heads/master 
25cf61ede66d7ea772c3ace2c63f4342b0370b00
```

``` bash
garrikliu:git_practice xiangliu$ git log --oneline
25cf61e (HEAD -> master, test_branch) new commit
```

当使用 `checkout` 命令切换分支时, HEAD 会指向新的分支.

#### detached HEAD 状态

所謂的 detached HEAD 狀態只是 **HEAD 沒有指向任何分支**造成的

可能發生這個狀態的原因有：

* 使用 Checkout 指令直接跳到某個 Commit，而那個 Commit 剛好目前沒有分支指著它。
* Rebase 的過程其實也是處於不斷的 detached HEAD 狀態。
* 切換到某個遠端分支的時候。

当 HEAD 指向一个没有分支指向的 commit 的时候, 我只需要让一个分支指向这个 commit 就行了 .

``` bash
$ git branch new_branch
```

或者明確的跟 Git 說幫你建立一個分支指向某個 Commit：

``` bash
$ git branch new_branch b6d204e
```

雖然剛建完分支，當下的狀態還是處於 detached HEAD，不過不用太擔心，這個 Commit 以後就可以透過 new_branch 這個分支來找到它了。你也可以使用 Checkout 指令配合 `-b` 參數，建立分支後直接切換：

``` bash
$ git checkout -b new_branch b6d204e
Switched to a new branch 'new_branch'
```

如果切到某个在本地没有追踪分支的远端分支的时候也会出现 detached HEAD 状态.

``` bash
$ git branch --remote
  origin/HEAD -> origin/master
  origin/master
  origin/refactoring
```

假如 `origin/refactoring` 在本地没有追踪分支, 那么 HEAD 没办法指到一个具体的分支, 所有就出现了 detached HEAD.

解决办法一种是使用 `checkout` 的 `-t` 參數, 它会在本地创建一个同名的追踪分支.

``` bash
$ git checkout -t origin/refactoring
Branch refactoring set up to track remote branch refactoring from origin.
Switched to a new branch 'refactoring'
```

如果想自定义分支名还可以像下面这样:

``` bash
$ git checkout -b ref origin/refactoring
```

简而言之, 就是**让 HEAD 指向一个本地分支就不会出现 detached HEAD 了**.

### 合併過的分支你通常會怎麼處理？為什麼？

要根据实际情况来分析.  

❗️❗️❗️ 结合 git flow 来回答.

因为分支就是一个指向提交的指针. 删掉分支也不会影响提交.  

## 操作题

