(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{327:function(a,t,s){"use strict";s.r(t);var e=s(0),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"git-面试题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-面试题"}},[a._v("#")]),a._v(" Git 面试题")]),a._v(" "),s("h2",{attrs:{id:"概念题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概念题"}},[a._v("#")]),a._v(" 概念题")]),a._v(" "),s("h3",{attrs:{id:"git-push-解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-push-解析"}},[a._v("#")]),a._v(" "),s("code",[a._v("git push")]),a._v(" 解析")]),a._v(" "),s("p",[a._v("这条指令完整状态为:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push origin master:master\n")])])]),s("p",[a._v("意思就是「把本地的 master 分支的內容，推一份到 origin 上，並且在 origin 上建立一個 master 分支」")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push origin master:cat\n")])])]),s("p",[a._v("意思为「把本地的 master 分支的內容，推一份到 origin 上，並且在 origin 上建立一個 cat 分支」。")]),a._v(" "),s("h3",{attrs:{id:"git-clone-git-fetch-git-pull-三个指令区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-clone-git-fetch-git-pull-三个指令区别"}},[a._v("#")]),a._v(" git clone, git fetch, git pull 三个指令区别?")]),a._v(" "),s("h3",{attrs:{id:"head-是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#head-是什么"}},[a._v("#")]),a._v(" HEAD 是什么?")]),a._v(" "),s("p",[a._v("在 Git 中，一般来说它是一个"),s("strong",[a._v('指向你 "正在工作中的" 本地分支的指针')]),a._v(".")]),a._v(" "),s("p",[a._v("正常情况下，HEAD 會指向某一個分支，而分支會指向某一個 Commit。但 HEAD 偶爾會發生「沒有指到某個分支」的情況，這個狀態的 HEAD 便稱之「detached HEAD」。")]),a._v(" "),s("p",[a._v("在项目的 "),s("code",[a._v(".git")]),a._v(" 目錄裡有一個檔名為 HEAD 的檔案，就是記錄著 HEAD 的內容")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" .git/HEAD\nref: refs/heads/master\n")])])]),s("p",[a._v("内容表明 HEAD 目前正指向著 master 分支.  再深入看一下的话, 会发现内容为 40 个字符的 SHA-1 值.  这个值和 master 分支所指向的提交的校验和是一样的.  也就是说, "),s("strong",[a._v("HEAD -> master 分支 -> commit")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("garrikliu:git_practice xiangliu$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" .git/refs/heads/master \n25cf61ede66d7ea772c3ace2c63f4342b0370b00\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("garrikliu:git_practice xiangliu$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" log --oneline\n25cf61e "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("HEAD -"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" master, test_branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" new commit\n")])])]),s("p",[a._v("当使用 "),s("code",[a._v("checkout")]),a._v(" 命令切换分支时, HEAD 会指向新的分支.")]),a._v(" "),s("h4",{attrs:{id:"detached-head-状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#detached-head-状态"}},[a._v("#")]),a._v(" detached HEAD 状态")]),a._v(" "),s("p",[a._v("所謂的 detached HEAD 狀態只是 "),s("strong",[a._v("HEAD 沒有指向任何分支")]),a._v("造成的")]),a._v(" "),s("p",[a._v("可能發生這個狀態的原因有：")]),a._v(" "),s("ul",[s("li",[a._v("使用 Checkout 指令直接跳到某個 Commit，而那個 Commit 剛好目前沒有分支指著它。")]),a._v(" "),s("li",[a._v("Rebase 的過程其實也是處於不斷的 detached HEAD 狀態。")]),a._v(" "),s("li",[a._v("切換到某個遠端分支的時候。")])]),a._v(" "),s("p",[a._v("当 HEAD 指向一个没有分支指向的 commit 的时候, 我只需要让一个分支指向这个 commit 就行了 .")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" branch new_branch\n")])])]),s("p",[a._v("或者明確的跟 Git 說幫你建立一個分支指向某個 Commit：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" branch new_branch b6d204e\n")])])]),s("p",[a._v("雖然剛建完分支，當下的狀態還是處於 detached HEAD，不過不用太擔心，這個 Commit 以後就可以透過 new_branch 這個分支來找到它了。你也可以使用 Checkout 指令配合 "),s("code",[a._v("-b")]),a._v(" 參數，建立分支後直接切換：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout -b new_branch b6d204e\nSwitched to a new branch "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'new_branch'")]),a._v("\n")])])]),s("p",[a._v("如果切到某个在本地没有追踪分支的远端分支的时候也会出现 detached HEAD 状态.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" branch --remote\n  origin/HEAD -"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" origin/master\n  origin/master\n  origin/refactoring\n")])])]),s("p",[a._v("假如 "),s("code",[a._v("origin/refactoring")]),a._v(" 在本地没有追踪分支, 那么 HEAD 没办法指到一个具体的分支, 所有就出现了 detached HEAD.")]),a._v(" "),s("p",[a._v("解决办法一种是使用 "),s("code",[a._v("checkout")]),a._v(" 的 "),s("code",[a._v("-t")]),a._v(" 參數, 它会在本地创建一个同名的追踪分支.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout -t origin/refactoring\nBranch refactoring "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" up to track remote branch refactoring from origin.\nSwitched to a new branch "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'refactoring'")]),a._v("\n")])])]),s("p",[a._v("如果想自定义分支名还可以像下面这样:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout -b ref origin/refactoring\n")])])]),s("p",[a._v("简而言之, 就是"),s("strong",[a._v("让 HEAD 指向一个本地分支就不会出现 detached HEAD 了")]),a._v(".")]),a._v(" "),s("h3",{attrs:{id:"合併過的分支你通常會怎麼處理？為什麼？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合併過的分支你通常會怎麼處理？為什麼？"}},[a._v("#")]),a._v(" 合併過的分支你通常會怎麼處理？為什麼？")]),a._v(" "),s("p",[a._v("要根据实际情况来分析.")]),a._v(" "),s("p",[a._v("❗️❗️❗️ 结合 git flow 来回答.")]),a._v(" "),s("p",[a._v("因为分支就是一个指向提交的指针. 删掉分支也不会影响提交.")]),a._v(" "),s("h2",{attrs:{id:"操作题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作题"}},[a._v("#")]),a._v(" 操作题")])])}),[],!1,null,null,null);t.default=r.exports}}]);