(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{385:function(t,s,a){"use strict";a.r(s);var e=a(44),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"shell-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shell-是什么"}},[t._v("#")]),t._v(" shell 是什么")]),t._v(" "),a("p",[t._v("核心功能：允许你执行程序，输入并获取某种半结构化的输出。")]),t._v(" "),a("h2",{attrs:{id:"shell-基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shell-基础"}},[t._v("#")]),t._v(" shell 基础")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("hostname:~$ "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 主机名:当前目录 $显示当前并非root用户")]),t._v("\nhostname:~$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" hello\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("shell 基于空格分割命令并进行解析，执行第一个单词代表的程序，后续单词将作为程序访问的参数")]),t._v(" "),a("h3",{attrs:{id:"环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境变量"}},[t._v("#")]),t._v(" 环境变量")]),t._v(" "),a("p",[t._v("shell去哪里找需要执行的程序呢？shell是一个编程环境，有变量，条件，循环和函数，在shell中执行命令就是在执行一段shell可以理解的代码。如果执行的命令不是shell的关键字，shell就会咨询"),a("strong",[t._v("环境变量$PATH")]),t._v('，其中，不同的路径由":"分割。')]),t._v(" "),a("p",[t._v("当然，不用$PATH，直接给出执行程序的路径也可以。")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v("\n/bin/echo "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"ls-l-chmod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ls-l-chmod"}},[t._v("#")]),t._v(" ls -l & chmod")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#权限     TODO  TODO  TODO 文件大小(B)  最后修改时间 文件名")]),t._v("\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("   user  user    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("220")]),t._v("     May "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),t._v(" 02:38 .bash_logout\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("   user  user   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3771")]),t._v("     May "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),t._v(" 02:38 .bashrc\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("权限由10个字符表示：")]),t._v(" "),a("ul",[a("li",[t._v("第一个：d 表示这是一个目录")]),t._v(" "),a("li",[t._v("后面每3个一组： 表示文件所有者(u,user)，用户组(g,group)，其他所有人(o,other)所具有的权限")]),t._v(" "),a("li",[a("ul",[a("li",[t._v("表示相应无权限")])])]),t._v(" "),a("li",[t._v("-rwx 分别表示"),a("strong",[t._v("读，写，执行")]),t._v("权限")])]),t._v(" "),a("p",[a("code",[t._v("chmod 0777 FILE")]),t._v(": 表示将FILE权限设为-rwxrwxrwx。第一个参数不知道什么意思。如果不是4个数，会在前面补0，如4实际为0004。\n"),a("code",[t._v("chmod u+x FILE")]),t._v(": 表示为用户添加FILE执行权限。[ugoa][+-=][rwx]")]),t._v(" "),a("h3",{attrs:{id:"在程序间创建连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在程序间创建连接"}},[t._v("#")]),t._v(" 在程序间创建连接")]),t._v(" "),a("p",[t._v("shell中程序有两个主要的流：")]),t._v(" "),a("ul",[a("li",[t._v("输入流：键盘")]),t._v(" "),a("li",[t._v("输出流：显示器")])]),t._v(" "),a("p",[t._v("当然，可以重定向")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" hello "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" hello.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# hello")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" hello.txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" hello2.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# hello2.txt 中内容: hello")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" world "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" hello.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# hello\\nworld")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo \\ world >> hello.txt # hello\\n world 空格需要转义")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo ' world' >> hello.txt # hello\\n world 或用引号(单，双都可)包裹")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v(">, < 用于重定向流，>>用于追加内容。")]),t._v(" "),a("p",[t._v('管道(pipes)："|" 操作符，用于将一个程序的输出和另一个程序的输入连接起来。')]),t._v(" "),a("h3",{attrs:{id:"root"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#root"}},[t._v("#")]),t._v(" root")]),t._v(" "),a("p",[t._v("sudo 可以让用户以root的身份执行紧跟着的程序。")]),t._v(" "),a("p",[t._v("只有根用户才能做的操作：向"),a("code",[t._v("sysfs")]),t._v("文件写入内容，该文件暴露了一些内核参数，所以用户可以在运行时配置系统内核。系统被挂载在"),a("code",[t._v("/sys")]),t._v("下。")]),t._v(" "),a("h2",{attrs:{id:"shell脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shell脚本"}},[t._v("#")]),t._v(" shell脚本")]),t._v(" "),a("ul",[a("li",[t._v("变量赋值："),a("code",[t._v("foo=bar")]),t._v("，不能有空格")]),t._v(" "),a("li",[t._v("访问变量："),a("code",[t._v("$foo")])]),t._v(" "),a("li",[t._v("字符串：单引号表示原义字符串，其中的变量不会被转义。而双引号中变量会被转义。")])]),t._v(" "),a("h3",{attrs:{id:"bash函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bash函数"}},[t._v("#")]),t._v(" bash函数")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("mcd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v('"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v('"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("bash使用很多特殊变量表示参数")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("符号")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("$0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("脚本名")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("$1~$9")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("第n个参数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("$@")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("所有参数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("$#")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("参数个数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("$?")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("前一个命令的返回值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("$$")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当前脚本的进程识别码")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("!!")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("完整的上一条命令，包括参数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("$_")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("上一条命令的最后一个参数")])])])]),t._v(" "),a("p",[t._v("命令通常使用"),a("code",[t._v("STDOUT")]),t._v("返回输出值，使用"),a("code",[t._v("STDERR")]),t._v("返回错误码。返回值0表示正常执行，其他都表示有错误发生。可以搭配短路运算符("),a("code",[t._v("&&")]),t._v(","),a("code",[t._v("||")]),t._v(")进行条件判断。")]),t._v(" "),a("ul",[a("li",[t._v("同一行的多个命令可以用 ; 分隔")]),t._v(" "),a("li",[t._v("命令替换 (command substitution):以变量的形式获取一个命令的输出。通过 $(CMD) 这样的方式来执行CMD这个命令时，它的输出结果会替换掉$(CMD)。例如，如果执行 for file in $(ls) ，shell首先将调用ls ，然后遍历得到的这些返回值。")])]),t._v(" "),a("p",[t._v("示例")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Starting program at '),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("date")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# date会被替换成日期和时间")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Running program '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$0")]),t._v(" with "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$#")]),t._v(" arguments with pid "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$$")]),t._v('"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[t._v("file")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$@")]),t._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" foobar "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$file")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /dev/null "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),t._v(" /dev/null\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果模式没有找到，则grep退出状态为 1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 我们将标准输出流和标准错误流重定向到Null，因为我们并不关心这些信息")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$?")]),t._v(" -ne "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [[ 中的命令必须前后空一格 ]]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"File '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$file")]),t._v(' does not have any foobar, adding one"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"# foobar"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$file")]),t._v('"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("p",[t._v("在bash中进行比较时，尽量使用双方括号 [[ ]] 而不是单方括号 [ ]，这样会降低犯错的几率，尽管这样并不能兼容 sh。")]),t._v(" "),a("p",[t._v("在shebang行(脚本第一行)中使用env命令(!/usr/bin/env bash)是一种好的实践，env会用PATH环境变量来进行定位，从而提高脚本的可移植性。")]),t._v(" "),a("ul",[a("li",[t._v("函数只能用与shell使用相同的语言，脚本可以使用任意语言。因此在脚本中包含 shebang 是很重要的。")]),t._v(" "),a("li",[t._v("函数仅在定义时被加载，脚本会在每次被执行时加载。这让函数的加载比脚本略快一些，但每次修改函数定义，都要重新加载一次。")]),t._v(" "),a("li",[t._v("函数会在当前的shell环境中执行，脚本会在单独的进程中执行。因此，函数可以对环境变量进行更改，比如改变当前工作目录，脚本则不行。脚本需要使用export将环境变量导出，并将值传递给环境变量。")])]),t._v(" "),a("h3",{attrs:{id:"文件描述符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件描述符"}},[t._v("#")]),t._v(" 文件描述符")]),t._v(" "),a("ul",[a("li",[t._v("0 STDIN  标准输入 键盘")]),t._v(" "),a("li",[t._v("1 STDOUT 标准输出 显示器")]),t._v(" "),a("li",[t._v("2 STDERR 标准错误")])]),t._v(" "),a("p",[t._v('当文件描述符(0,1,2)与重定向符号"<, >"组合之后，就可以重新定向输入，输出，及错误。')]),t._v(" "),a("ul",[a("li",[a("code",[t._v("command 2>file1")]),t._v(" 命令执行的错误信息保存到了file1文件中。显示屏只是显示正确的信息。")]),t._v(" "),a("li",[a("code",[t._v("command 1>file1 2>file2")]),t._v(" 命令执行后，没有显示。因为正确输出到file1，错误定向到file2")]),t._v(" "),a("li",[a("code",[t._v("command &>file1")]),t._v(" 命令执行后，输出和错误都定向到file1中\nPS:2>file 可以放在命令的前面，也可以放在后面。效果一样。")])]),t._v(" "),a("p",[t._v("在shell脚本中，进行流的重定向")]),t._v(" "),a("ul",[a("li",[t._v("exec 1> file1")]),t._v(" "),a("li",[t._v("exec 2> file2")]),t._v(" "),a("li",[t._v("exec 0< file0")])]),t._v(" "),a("p",[t._v("指定命令的输出传到STDERR指定的文件: "),a("code",[t._v('echo "some output" >&2')])]),t._v(" "),a("h2",{attrs:{id:"shell工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shell工具"}},[t._v("#")]),t._v(" shell工具")]),t._v(" "),a("h3",{attrs:{id:"查找文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查找文件"}},[t._v("#")]),t._v(" 查找文件")]),t._v(" "),a("p",[t._v("find命令会递归地搜索符合条件的文件或文件夹。例如")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查找所有名称为src的文件夹")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" -name src -type d\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查找所有文件夹路径中包含test的python文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" -path "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*/test/*.py'")]),t._v(" -type f\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查找前一天修改的所有文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" -mtime -1\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查找所有大小在500k至10M的tar.gz文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" -size +500k -size -10M -name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*.tar.gz'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("除了列出所寻找的文件之外，find还能对所有查找到的文件进行操作。这能极大地简化一些单调的任务。")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除全部扩展名为.tmp 的文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" -name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*.tmp'")]),t._v(" -exec "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查找全部的 PNG 文件并将其转换为 JPG")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" -name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*.png'")]),t._v(" -exec convert "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(".jpg "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"查找代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查找代码"}},[t._v("#")]),t._v(" 查找代码")]),t._v(" "),a("p",[t._v("grep 有很多选项，如 -C ：获取查找结果的上下文（Context）；-v 将对结果进行反选（Invert），也就是输出不匹配的结果。例如， grep -C 5 会输出匹配结果前后五行。当需要搜索大量文件的时候，使用 -R 会递归地进入子目录并搜索所有的文本文件。")]),t._v(" "),a("h3",{attrs:{id:"文件夹导航"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件夹导航"}},[t._v("#")]),t._v(" 文件夹导航")]),t._v(" "),a("p",[t._v("fasd和autojump这两个工具来查找最常用或最近使用的文件和目录。")]),t._v(" "),a("p",[t._v("Fasd 基于frecency对文件和文件排序，也就是说它会同时针对频率（frequency ）和时效（ recency）进行排序。默认情况下，fasd使用命令 z 帮助我们快速切换到最常访问的目录。例如， 如果您经常访问/home/user/files/cool_project 目录，那么可以直接使用 z cool 跳转到该目录。对于 autojump，则使用j cool代替即可。")]),t._v(" "),a("h2",{attrs:{id:"shell中的重要命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shell中的重要命令"}},[t._v("#")]),t._v(" shell中的重要命令")]),t._v(" "),a("h2",{attrs:{id:"cheatsheet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cheatsheet"}},[t._v("#")]),t._v(" cheatsheet")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("命令")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("man")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("用户手册")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("cd")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("切换目录")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("pwd")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当前工作目录")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("which")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("确定某个程序名代表的是哪个具体程序")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ls")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("显示目录包含的文件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("mv")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("移动或重命名文件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("cp")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("复制文件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("rm")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("删除文件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("mkdir")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("新建文件夹")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("touch")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("创建文件或修改文件时间")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("chmod [mode] FILE")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("修改文件权限")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("grep [pattern] FILE")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("打印pattern匹配成功的行")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})])])])])}),[],!1,null,null,null);s.default=n.exports}}]);