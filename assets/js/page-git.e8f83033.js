(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{553:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#资源"}},[t._v("#")]),t._v(" 资源")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://learngitbranching.js.org/?locale=zh_CN",target:"_blank",rel:"noopener noreferrer"}},[t._v("交互式Git入门网站 强烈推荐!!!"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://git-scm.com/book/zh/v2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pro Git 中文版"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://ohshitgit.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Oh Shit, Git!?! 简短的介绍了如何从Git错误中恢复"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://eagain.net/articles/git-for-computer-scientists/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 的数据模型"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://jwiegley.github.io/git-from-the-bottom-up/1-Repository/1-directory-content-tracking.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git from the Bottom Up"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"git-的数据模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-的数据模型"}},[t._v("#")]),t._v(" Git 的数据模型")]),t._v(" "),a("h3",{attrs:{id:"快照"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快照"}},[t._v("#")]),t._v(" 快照")]),t._v(" "),a("p",[t._v("在Git的术语里，文件被称作Blob对象，也就是一组数据。目录则被称之为“树”，它将名字与 Blob 对象或树对象进行映射（使得目录中可以包含其他目录）。快照则是被追踪的最顶层的树。")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('&lt;root> (tree)\n|\n+- foo (tree)\n|  |\n|  + bar.txt (blob, contents = "hello world")\n|\n+- baz.txt (blob, contents = "git is wonderful")\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("这个顶层的树包含了两个元素，一个名为 “foo” 的树，以及一个 blob 对象 “baz.txt”。")]),t._v(" "),a("h3",{attrs:{id:"历史记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#历史记录"}},[t._v("#")]),t._v(" 历史记录")]),t._v(" "),a("p",[t._v("在 Git 中，历史记录是一个由快照组成的有向无环图。这代表 Git 中的每个快照都有一系列的“父辈”，也就是其之前的一系列快照。注意，快照具有多个“父辈”而非一个，因为某个快照可能由多个父辈而来。例如，经过合并后的两条分支。")]),t._v(" "),a("p",[t._v("在 Git 中，这些快照被称为“提交”。")]),t._v(" "),a("h3",{attrs:{id:"数据模型的伪码表示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据模型的伪码表示"}},[t._v("#")]),t._v(" 数据模型的伪码表示")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" 文件就是一组数据\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),t._v(" blob "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("byte"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" 一个包含文件和目录的目录\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),t._v(" tree "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tree "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" blob"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" 每个提交都包含一个父辈，元数据和顶层树\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),t._v(" commit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" struct "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    author"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string\n    message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string\n    snapshot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tree\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("h3",{attrs:{id:"对象和内存寻址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象和内存寻址"}},[t._v("#")]),t._v(" 对象和内存寻址")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" git中的对象类型\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" blob "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" tree "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" commit\n\nobjects "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("object")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" Git 在储存数据时，所有的对象都会基于它们的 SHA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" 哈希 进行寻址\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("store")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sha1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("object")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("h3",{attrs:{id:"引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引用"}},[t._v("#")]),t._v(" 引用")]),t._v(" "),a("p",[t._v("现在，所有的快照都可以通过它们的 SHA-1 哈希值来标记了。但这也太不方便了，谁也记不住一串 40 位的十六进制字符。(Git对哈希的处理很智能。你只需要提供能够唯一标识提交记录的前几个字符即可。但还是很不方便)")]),t._v(" "),a("p",[t._v("针对这一问题，Git 的解决方法是给这些哈希值赋予人类可读的名字，也就是引用（references）。"),a("strong",[t._v("引用是指向提交的指针")]),t._v("。与对象不同的是，它是可变的（引用可以被更新，指向新的提交）。例如，master 引用通常会指向主分支的最新一次提交。")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("references "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update_reference")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    references"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("read_reference")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" references"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("load_reference")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name_or_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" name_or_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" references"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" load"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("references"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name_or_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" load"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name_or_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("p",[t._v("通常情况下，我们会想要知道“我们当前所在位置”，并将其标记下来。这样当我们创建新的快照的时候，我们就可以知道它的相对位置（如何设置它的“父辈”）。在 Git 中，我们当前的位置有一个特殊的索引，它就是 “HEAD”。")]),t._v(" "),a("p",[t._v("如果想看 HEAD 指向，可以通过 cat .git/HEAD 查看， 如果 HEAD 指向的是一个引用，还可以用 git symbolic-ref HEAD 查看它的指向。")]),t._v(" "),a("h3",{attrs:{id:"仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#仓库"}},[t._v("#")]),t._v(" 仓库")]),t._v(" "),a("p",[t._v("Git仓库就是对象(文件，目录，提交)和引用(分支，HEAD, hash, tag)。")]),t._v(" "),a("p",[t._v("在硬盘上，Git仅存储对象和引用：因为其数据模型仅包含这些东西。所有的 git 命令都对应着对提交树的操作，例如增加对象，增加或删除引用。")]),t._v(" "),a("h2",{attrs:{id:"相对引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相对引用"}},[t._v("#")]),t._v(" 相对引用")]),t._v(" "),a("ul",[a("li",[t._v("使用 ref^ 向上移动1个提交记录(ref^^,2个)")]),t._v(" "),a("li",[t._v("使用 ref~<num> 向上移动多个提交记录，如 ~3(1也可以省略)")]),t._v(" "),a("li",[t._v("应用：移动分支，使用-f选项让分支指向另一个提交。例如:"),a("code",[t._v("git branch -f main HEAD~3")])]),t._v(" "),a("li",[t._v("^<num>: 如果父节点不止一个，ref"),a("sup",[t._v("就指向产生该节点(在这里merge的)的父节点，ref")]),t._v("2就指向另一个节点")]),t._v(" "),a("li",[t._v("链式移动: "),a("code",[t._v("git checkout ~^2~3")])])]),t._v(" "),a("h2",{attrs:{id:"暂存区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#暂存区"}},[t._v("#")]),t._v(" 暂存区")]),t._v(" "),a("p",[t._v("Git 中还包括一个和数据模型完全不相关的概念，但它确是创建提交的接口的一部分。允许您指定下次快照中要包括那些改动。")]),t._v(" "),a("p",[t._v("使用场景：您开发了两个独立的特性，然后希望创建两个独立的提交，其中第一个提交仅包含第一个特性，而第二个提交仅包含第二个特性。")]),t._v(" "),a("h2",{attrs:{id:"tag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tag"}},[t._v("#")]),t._v(" tag")]),t._v(" "),a("p",[a("strong",[t._v("永远指向某个提交记录的标识")]),t._v("。通常软件发布新的大版本，或者是修正一些重要的Bug或是增加了某些新特性这种重要的修改可以添加一个tag。")]),t._v(" "),a("p",[t._v("tag可以(在某种程度上 —— 因为标签可以被删除后重新在另外一个位置创建同名的标签)永久地将某个特定的提交命名为里程碑，然后就可以像分支一样引用了。")]),t._v(" "),a("p",[t._v("更难得的是，它们并不会随着新的提交而移动。你也不能检出到某个标签上面进行修改提交，它就像是提交树上的一个锚点，标识了某个特定的位置。")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag tagName refspec "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在refspec提交上建立一个标签tagName")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag tagName "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在HEAD指向的提交上建立一个标签")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" describe refspec "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 结果格式为tagName_distance_ghash，tagName是离refspec最近的tag的名称，distance是refspec离tag的距离，hash是refspec hash值的前几位。")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"cheatsheet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cheatsheet"}},[t._v("#")]),t._v(" cheatsheet")]),t._v(" "),a("p",[t._v("Git中“refspec” 是一个自造的词，意思是Git能识别的位置(比如分支foo或者HEAD~1)。如果需要refspec参数缺省为HEAD。")]),t._v(" "),a("p",[t._v("基础")]),t._v(" "),a("ul",[a("li",[t._v("git help <command>: 获取 git 命令的帮助信息")]),t._v(" "),a("li",[t._v("git init: 创建一个新的 git 仓库，其数据会存放在一个名为 .git 的目录下")]),t._v(" "),a("li",[t._v("git status: 显示当前的仓库状态")]),t._v(" "),a("li",[t._v("git add <filename>: 添加文件到暂存区")]),t._v(" "),a("li",[t._v("git commit: 创建一个新的提交")]),t._v(" "),a("li",[t._v("git commit --allow-empty: 创建一个新的提交，允许没有修改")]),t._v(" "),a("li",[t._v("git log: 显示历史日志")]),t._v(" "),a("li",[t._v("git log --author who: 显示who提交的历史日志")]),t._v(" "),a("li",[t._v("git log --all --graph --decorate: 可视化历史记录（有向无环图）")]),t._v(" "),a("li",[t._v("git diff <filename>: 显示与暂存区文件的差异")]),t._v(" "),a("li",[t._v("git diff <revision> <filename>: 显示某个文件两个版本之间的差异")]),t._v(" "),a("li",[t._v("git checkout <revision>: 更新 HEAD 和目前的分支")])]),t._v(" "),a("p",[t._v("分支和合并")]),t._v(" "),a("ul",[a("li",[t._v("git branch: 显示分支")]),t._v(" "),a("li",[t._v("git branch <name>: 创建分支")]),t._v(" "),a("li",[t._v("git checkout -b <name>: 创建分支并切换到该分支")]),t._v(" "),a("li",[t._v("git merge refspec: 合并到当前分支")]),t._v(" "),a("li",[t._v("git mergetool: 使用工具来处理合并冲突")]),t._v(" "),a("li",[t._v("git rebase: 将一系列补丁变基（rebase）为新的基线")])]),t._v(" "),a("p",[t._v("远端操作")]),t._v(" "),a("ul",[a("li",[t._v("git remote: 列出远端")]),t._v(" "),a("li",[t._v("git remote add <name> <url>: 添加一个远端")]),t._v(" "),a("li",[t._v("git push <remote> <local branch>:<remote branch>: 将对象传送至远端并更新远端引用")]),t._v(" "),a("li",[t._v("git branch --set-upstream-to=<remote>/<remote branch>: 创建本地和远端分支的关联关系")]),t._v(" "),a("li",[t._v("git fetch: 从远端获取对象/索引")]),t._v(" "),a("li",[t._v("git pull: 相当于 git fetch; git merge")]),t._v(" "),a("li",[t._v("git clone: 从远端下载仓库")])]),t._v(" "),a("p",[t._v("撤销")]),t._v(" "),a("ul",[a("li",[t._v("git commit --amend: 编辑提交的内容或信息。在提交树中HEAD所指节点的父节点下生成一个新的commit节点，并指向新的commit节点，原节点的子节点不会保留。所以最好只对叶节点使用 --amend.")]),t._v(" "),a("li",[t._v("git reset HEAD~1: 撤销最近一次commit，在reset后所做的变更还在，但是处于未加入暂存区状态。适合在本地修改。")]),t._v(" "),a("li",[t._v("git revert refspec: 会commit一次，将最近一次commit的修改撤销。适合多人协作时，撤销已push的修改。")]),t._v(" "),a("li",[t._v("git checkout -- <file>: 丢弃修改")])]),t._v(" "),a("p",[t._v("Git 高级操作")]),t._v(" "),a("ul",[a("li",[t._v("git config: Git 是一个 高度可定制的 工具")]),t._v(" "),a("li",[t._v("git clone --depth=1: 浅克隆（shallow clone），不包括完整的版本历史信息")]),t._v(" "),a("li",[t._v("git add -p: 交互式暂存")]),t._v(" "),a("li",[t._v("git rebase to [from]: from不写默认为HEAD所指节点。将从from节点和to节点的最近公共父节点(不包括该父节点)到from结点本身的所有节点按顺序复制到to节点下，HEAD将指向被复制的from节点，另外from节点(路径上的其他节点的引用不会动)上的引用(分支，tag等)也会指向新的from节点。用于将from分支上的工作转移到to分支上。PS：如果from为to的祖先节点，则rebase只是将from的引用移动到to上。")]),t._v(" "),a("li",[t._v("git rebase -i ref~n: 交互式变基(经典左闭右开/下闭上开)")]),t._v(" "),a("li",[t._v("git cherry-pick refspec1 refspec2 ...:可以将提交树上任何其他地方的提交记录取过来追加到HEAD上（不能是HEAD上游的提交）")]),t._v(" "),a("li",[t._v("git blame: 查看最后修改某行的人")]),t._v(" "),a("li",[t._v("git stash: 暂时移除工作目录下的修改内容")]),t._v(" "),a("li",[t._v("git bisect: 通过二分查找搜索历史记录")]),t._v(" "),a("li",[t._v("git describe refspec: 结果格式为tagName_distance_ghash，tagName是离refspec最近的tag的名称，distance是refspec离tag的距离，hash是refspec hash值的前几位。")]),t._v(" "),a("li",[t._v(".gitignore: 指定 故意不追踪的文件")])]),t._v(" "),a("h3",{attrs:{id:"git-stash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-stash"}},[t._v("#")]),t._v(" git stash")]),t._v(" "),a("p",[a("code",[t._v("git stash")]),t._v("命令会暂时缓存任何你未提交的修改，包括暂存区的和未暂存的(没有通过"),a("code",[t._v("git add")]),t._v("命令添加到暂存区的，包括新add的增删文件，修改add过的文件)，不包括未追踪的文件。stash就相当于将之前的修改都隐藏了起来，之后的操作不会受到之前修改的限制。\n注意：stash只保留在本地库中，不会被推送到远程库。")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 做一些修改1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 再做一些修改2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 再再做一些修改3，并提交 假设三次修改的是不同的文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# some changes")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不想要修改2了")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash pop\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 继续从修改1开始")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash apply\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("注意：git stash apply会将修改应用到所有分支。比如，在test分支修改了一个文件，stash以后再apply回来，这样master分支中也会有一个未提交的修改。")]),t._v(" "),a("h2",{attrs:{id:"远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库"}},[t._v("#")]),t._v(" 远程仓库")]),t._v(" "),a("h3",{attrs:{id:"git-clone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-clone"}},[t._v("#")]),t._v(" git clone")]),t._v(" "),a("p",[t._v("git clone somerepo后，本地就有了somerepo的完整提交树，并且多了origin/master,origin/dev....等多了origin/前缀的远程分支(另有origin/HEAD->origin/main说明远程分支的HEAD指向哪里)。")]),t._v(" "),a("p",[t._v("远程分支反映了远程仓库(在你上次和它通信时)的状态。")]),t._v(" "),a("p",[t._v("远程分支有一个特别的属性，在你检出时自动进入分离HEAD状态(不是HEAD指向的分支上有*，而是HEAD独立显示出来)。Git这么做是因为不能直接在这些分支上进行操作, 你必须在本地完成你的工作, （更新了远程分支之后）再用远程分享你的工作成果。")]),t._v(" "),a("h3",{attrs:{id:"git-fetch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-fetch"}},[t._v("#")]),t._v(" git fetch")]),t._v(" "),a("p",[t._v("完成了仅有的但是很重要的两步:")]),t._v(" "),a("ol",[a("li",[t._v("从远程仓库下载本地仓库中缺失的提交记录")]),t._v(" "),a("li",[t._v("更新远程分支指针(如 o/main)")])]),t._v(" "),a("p",[t._v("实际上将本地仓库中的远程分支更新成了远程仓库相应分支最新的状态。但并不会改变你本地仓库的状态。它不会更新你的 main 分支，也不会修改你磁盘上的文件。")]),t._v(" "),a("p",[t._v("要实际更新，需要使用git merge将远程和本地分支合并。(git cherry-pick, git rebase也可以)")]),t._v(" "),a("h3",{attrs:{id:"git-pull"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-pull"}},[t._v("#")]),t._v(" git pull")]),t._v(" "),a("p",[t._v("实际等同于 git fetch + git merge。\n用法参考"),a("code",[t._v("git push")]),t._v("/"),a("code",[t._v("git fetch")])]),t._v(" "),a("h3",{attrs:{id:"git-push"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-push"}},[t._v("#")]),t._v(" git push")]),t._v(" "),a("p",[a("code",[t._v("git push remoteRepo place")]),t._v(" (remoteRepo 通常为 origin)"),a("br"),t._v(" "),a("code",[t._v("git push remoteRepo <source>:<remote branch>")]),t._v("  (source是refspec，如果remote branch是远程仓库中的分支名(没有origin/前缀)且不存在会自动创建新的)\n"),a("code",[t._v("git push remoteRepo :foo")]),t._v(" (会删除远程的foo分支)\n将本地提交同步到远程，并将本地仓库的远程分支也更新好。")]),t._v(" "),a("p",[t._v("PS：git fetch 语法类似，只是方向相反罢了。")]),t._v(" "),a("h3",{attrs:{id:"最常见团队合作工作流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最常见团队合作工作流"}},[t._v("#")]),t._v(" 最常见团队合作工作流")]),t._v(" "),a("p",[t._v("从某个commit之后，你和同事分别修改各自的代码，现在你的同事已经将他的代码同步到远程库了，你的代码该如何提交。(假设没有冲突)。")]),t._v(" "),a("p",[t._v("方案一：git fetch; git rebase origin/main; git push\n方案二: git fetch; git merge origin/main; git push\n方案一简化版：git pull --rebase; git push\n方案二简化版: git pull; git push")]),t._v(" "),a("h3",{attrs:{id:"远程服务器拒绝-remote-rejected"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程服务器拒绝-remote-rejected"}},[t._v("#")]),t._v(" 远程服务器拒绝!(Remote Rejected)")]),t._v(" "),a("p",[t._v("如果你是在一个大的合作团队中工作, 很可能是main被锁定了, 需要一些Pull Request流程来合并修改。如果你直接提交(commit)到本地main, 然后试图推送(push)修改, 你将会收到这样类似的信息:")]),t._v(" "),a("blockquote",[a("p",[t._v("! [远程服务器拒绝] main -> main (TF402455: 不允许推送(push)这个分支; 你必须使用pull request来更新这个分支.)")])]),t._v(" "),a("p",[t._v("远程服务器拒绝直接推送(push)提交到main, 因为策略配置要求 pull requests 来提交更新.")]),t._v(" "),a("p",[t._v("你应该按照流程,新建一个分支, 推送(push)这个分支并申请pull request,但是你忘记并直接提交给了main.现在你卡住并且无法推送你的更新.")]),t._v(" "),a("p",[t._v("解决办法\n新建一个分支feature, 推送到远程服务器. 然后reset你的main分支和远程服务器保持一致, 否则下次你pull并且他人的提交和你冲突的时候就会有问题.")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard o/main "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重置索引和工作树。 自o/main以来的工作树中跟踪文件的任何更改都被丢弃。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b feature rawmainSHA "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# reset不会删除已有的commit。所以仍能checkout到你修改过commit，同时新建分支。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin feature "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将你的修改(现在在feature中)同步到远端的feature分支")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 我认为更好的方法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch feature\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin feature\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard origin/main\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout feature\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("然后再申请pull request。")]),t._v(" "),a("h3",{attrs:{id:"合并特性分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合并特性分支"}},[t._v("#")]),t._v(" 合并特性分支")]),t._v(" "),a("p",[t._v("有些开发人员只在 main 上做 push、pull —— 这样的话 main 总是最新的，始终与远程分支 (o/main) 保持一致。")]),t._v(" "),a("p",[t._v("这个工作流，分两个步骤：")]),t._v(" "),a("ol",[a("li",[t._v("将特性分支集成到 main 上")]),t._v(" "),a("li",[t._v("推送并更新远程分支 git pull --rebase; git push")])]),t._v(" "),a("h3",{attrs:{id:"rebase-和-merge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rebase-和-merge"}},[t._v("#")]),t._v(" rebase 和 merge")]),t._v(" "),a("p",[t._v("在开发社区里，有许多关于 merge 与 rebase 的讨论。以下是关于 rebase 的优缺点：")]),t._v(" "),a("ul",[a("li",[t._v("优点: Rebase 使你的提交树变得很干净, 所有的提交都在一条线上")]),t._v(" "),a("li",[t._v("缺点: Rebase 修改了提交树的历史。比如, 提交 C1 可以被 rebase 到 C3 之后。这看起来 C1 中的工作是在 C3 之后进行的，但实际上是在 C3 之前。")])]),t._v(" "),a("p",[t._v("一些开发人员喜欢保留提交历史，因此更偏爱 merge。而其他人可能更喜欢干净的提交树，于是偏爱 rebase。")]),t._v(" "),a("h3",{attrs:{id:"远程跟踪"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程跟踪"}},[t._v("#")]),t._v(" 远程跟踪")]),t._v(" "),a("p",[t._v("直接了当地讲，main 和 o/main 的关联关系就是由分支的“remote tracking”属性决定的。main 被设定为跟踪 o/main —— 这意味着为 main 分支指定了推送的目的地以及拉取后合并的目标。")]),t._v(" "),a("p",[t._v("当你克隆时, Git 会为远程仓库中的每个分支在本地仓库中创建一个远程分支（比如 o/main）。然后再创建一个跟踪远程仓库中活动分支的本地分支，默认情况下这个本地分支会被命名为 main。\n这也解释了为什么会在克隆的时候会看到下面的输出：")]),t._v(" "),a("blockquote",[a("p",[t._v('local branch "main" set to track remote branch "o/main"')])]),t._v(" "),a("p",[t._v("自己指定本地分支和远程分支的映射")]),t._v(" "),a("ol",[a("li",[t._v("git checkout -b notmain origin/main")]),t._v(" "),a("li",[t._v("git branch -u origin/main foo # foo不写就默认使用当前分支")])]),t._v(" "),a("p",[t._v("之后commit,push这个notmain分支到远程库，实际就会更新远程库的main分支。")])])}),[],!1,null,null,null);s.default=n.exports}}]);