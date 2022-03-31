(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{558:function(v,_,t){"use strict";t.r(_);var a=t(1),e=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"vim基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vim基础"}},[v._v("#")]),v._v(" Vim基础")]),v._v(" "),t("h3",{attrs:{id:"资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#资料"}},[v._v("#")]),v._v(" 资料")]),v._v(" "),t("p",[t("a",{attrs:{href:"https://missing-semester-cn.github.io/2020/editors/",target:"_blank",rel:"noopener noreferrer"}},[v._v("学习Vim"),t("OutboundLink")],1),t("br"),v._v("\nvimtutor : Vim安装时自带的教程"),t("br"),v._v(" "),t("a",{attrs:{href:"https://vim-adventures.com/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Vim Adventures"),t("OutboundLink")],1),t("br"),v._v(" "),t("a",{attrs:{href:"https://vimways.org/2019/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Vim 小技巧"),t("OutboundLink")],1)]),v._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/vim-keyboard.png",alt:"Vim 键盘图"}})]),v._v(" "),t("h3",{attrs:{id:"改键"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#改键"}},[v._v("#")]),v._v(" 改键")]),v._v(" "),t("p",[v._v("ubantu")]),v._v(" "),t("ul",[t("li",[v._v("setxkbmap -option caps:escape capslock映射为esc")]),v._v(" "),t("li",[v._v("setxkbmap -option ctrl:nocaps capslock映射为ctrl")])]),v._v(" "),t("h3",{attrs:{id:"模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模式"}},[v._v("#")]),v._v(" 模式")]),v._v(" "),t("p",[v._v("Vim的设计以大多数时间都花在阅读、浏览和进行少量编辑改动为基础，因此它具有多种操作模式：")]),v._v(" "),t("ul",[t("li",[v._v("正常模式：在文件中四处移动光标进行修改")]),v._v(" "),t("li",[v._v("插入模式：插入文本")]),v._v(" "),t("li",[v._v("替换模式：替换文本")]),v._v(" "),t("li",[v._v("可视化(一般，行，块)模式：选中文本块")]),v._v(" "),t("li",[v._v("命令模式：用于执行命令")])]),v._v(" "),t("p",[v._v("在不同的操作模式下，键盘敲击的含义也不同。")]),v._v(" "),t("p",[v._v("按下 "),t("code",[v._v("ESC")]),v._v(" 从任何其他模式返回正常模式。 在正常模式，键入 "),t("code",[v._v("i")]),v._v(" 进入插入 模式， "),t("code",[v._v("R")]),v._v(" 进入替换模式， "),t("code",[v._v("v")]),v._v(" 进入可视(一般)模式， "),t("code",[v._v("V")]),v._v(" 进入可视(行)模式， "),t("code",[v._v("Ctrl-V")]),v._v(", 有时也写作 "),t("code",[v._v("^V")]),v._v("进入可视(块)模式， "),t("code",[v._v(":")]),v._v(" 进入命令模式。")]),v._v(" "),t("p",[v._v("Vim 最重要的设计思想是 Vim 的界面本身是一个程序语言。键入操作本身是命令， 这些命令可以组合使用。这使得移动和编辑更加高效，特别是一旦形成肌肉记忆。")]),v._v(" "),t("h3",{attrs:{id:"缓存-标签页-窗口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存-标签页-窗口"}},[v._v("#")]),v._v(" 缓存，标签页，窗口")]),v._v(" "),t("p",[v._v("Vim 会维护一系列打开的文件，称为“缓存”。一个 Vim 会话包含一系列标签页，每个标签页包含一系列窗口(分隔面板)。每个窗口显示一个缓存(可以是同一个缓存)。")]),v._v(" "),t("p",[v._v("Vim 默认打开一个标签页，这个标签也包含一个窗口。")]),v._v(" "),t("h3",{attrs:{id:"基操"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基操"}},[v._v("#")]),v._v(" 基操")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("vim $(fzf)")])]),v._v(" "),t("li",[t("code",[v._v(":q")]),v._v("退出(关闭窗口)")]),v._v(" "),t("li",[t("code",[v._v(":w")]),v._v("保存当前文件(写)")]),v._v(" "),t("li",[t("code",[v._v(":w FILE")]),v._v(" 另存为")]),v._v(" "),t("li",[t("code",[v._v(":wq")]),v._v("保存然后退出")]),v._v(" "),t("li",[t("code",[v._v(":e {文件名}")]),v._v(" 打开要编辑的文件")]),v._v(" "),t("li",[t("code",[v._v(":ls")]),v._v("显示打开的缓存")]),v._v(" "),t("li",[t("code",[v._v(":help {标题}")]),v._v(" 打开帮助文档\n"),t("ul",[t("li",[t("code",[v._v(":help :w")]),v._v("打开 "),t("code",[v._v(":w")]),v._v("命令的帮助文档")]),v._v(" "),t("li",[t("code",[v._v(":help w")]),v._v("打开 "),t("code",[v._v("w")]),v._v(" 移动的帮助文档")])])])]),v._v(" "),t("h3",{attrs:{id:"移动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移动"}},[v._v("#")]),v._v(" 移动")]),v._v(" "),t("p",[v._v("正常模式下\n在 Vim 里面移动也被称为 “名词”， 因为它们指向文字块。")]),v._v(" "),t("ul",[t("li",[v._v("基本移动: hjkl (左， 下， 上， 右)")]),v._v(" "),t("li",[v._v("单词word： w (下一个词的首字母)， b (当前词首)， e (当前词尾) ge(上一个单词词尾)")]),v._v(" "),t("li",[v._v("广义单词WORD： W, B, E, gE (广义单词为空格之间的所有字符，单词为数字字母下划线的序列)")]),v._v(" "),t("li",[v._v("段落： "),t("code",[v._v("{")]),v._v(", "),t("code",[v._v("}")]),v._v("。段落是由空行隔开的代码段。")]),v._v(" "),t("li",[v._v("行： 0 (行初)， ^ | _ (第一个非空格字符)， $ (行尾)")]),v._v(" "),t("li",[v._v("屏幕： H (屏幕首行)， M (屏幕中间)， L (屏幕底部)")]),v._v(" "),t("li",[v._v("文件： gg (文件头)， G (文件尾)")]),v._v(" "),t("li",[v._v("行数： "),t("code",[v._v(":{num}<CR>")]),v._v(" 或者 "),t("code",[v._v("{num}G")]),v._v(" 转到第num行")]),v._v(" "),t("li",[v._v("ctrl+f 向下翻页")]),v._v(" "),t("li",[v._v("ctrl+b 向上翻页")]),v._v(" "),t("li",[v._v("ctrl+d 向下翻半页")]),v._v(" "),t("li",[v._v("ctrl+u 向上翻半页")]),v._v(" "),t("li",[t("strong",[v._v("杂项： % (找到配对，比如各种括号)")])]),v._v(" "),t("li",[v._v("查找： f{字符}， t{字符}， F{字符}， T{字符}\n"),t("ul",[t("li",[v._v("查找(find)/到(until) 向前/向后 在本行的{字符}")]),v._v(" "),t("li",[t("code",[v._v(",")]),v._v(" / "),t("code",[v._v(";")]),v._v(" 用于导航匹配")])])])]),v._v(" "),t("h3",{attrs:{id:"编辑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编辑"}},[v._v("#")]),v._v(" 编辑")]),v._v(" "),t("p",[v._v("Vim 的编辑命令也被称为 “动词”， 因为动词可以施动于名词。")]),v._v(" "),t("ul",[t("li",[v._v("O / o 在之上/之下插入行，并进入编辑模式")]),v._v(" "),t("li",[v._v("r{char}: 替换一个字符")]),v._v(" "),t("li",[v._v("R: 进入替换模式")]),v._v(" "),t("li",[v._v("d{移动命令} 删除 {移动命令}\n"),t("ul",[t("li",[v._v("例如， dw 删除词, d$ 删除到行尾, d0 删除到行头。")])])]),v._v(" "),t("li",[v._v("c{移动命令} 改变 {移动命令}\n"),t("ul",[t("li",[v._v("例如， cw 改变词 相当于 d{移动命令} 再 i")])])]),v._v(" "),t("li",[v._v("cc 删除该行并在该行进入插入模式")]),v._v(" "),t("li",[v._v("x 删除字符（等同于 dl）")]),v._v(" "),t("li",[v._v("s 替换字符（等同于 xi）")]),v._v(" "),t("li",[v._v("可视化模式 + 操作\n"),t("ul",[t("li",[v._v("选中文字, d 删除 或者 c 改变")])])]),v._v(" "),t("li",[v._v("u 撤销, Ctrl-r 重做")]),v._v(" "),t("li",[v._v("y 复制 (复制大段需要进入VISUAL模式)")]),v._v(" "),t("li",[v._v("yy 复制一行")]),v._v(" "),t("li",[v._v("p 粘贴 (也可将刚刚删除的内容(储存在Vim寄存器中)粘贴到光标后)")])]),v._v(" "),t("h3",{attrs:{id:"计数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计数"}},[v._v("#")]),v._v(" 计数")]),v._v(" "),t("p",[v._v("你可以用一个计数来结合“名词”和“动词”，这会执行指定操作若干次。")]),v._v(" "),t("ul",[t("li",[v._v("3w 向前移动三个词")]),v._v(" "),t("li",[v._v("5j 向下移动5行")]),v._v(" "),t("li",[v._v("7dw 删除7个词")])]),v._v(" "),t("h3",{attrs:{id:"搜索"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搜索"}},[v._v("#")]),v._v(" 搜索")]),v._v(" "),t("ul",[t("li",[v._v("搜索: "),t("code",[v._v("/{正则表达式}")]),v._v(", "),t("code",[v._v("n")]),v._v(" / "),t("code",[v._v("N")]),v._v(" 用于导航匹配，向后/向前\n"),t("ul",[t("li",[v._v("set hls(earch) 设置搜索高亮")]),v._v(" "),t("li",[v._v(":noh 清楚高亮显示")])])]),v._v(" "),t("li",[v._v(":grep 系统的grep")]),v._v(" "),t("li",[v._v(":vimgrep pattern path 在目录中搜索pattern。"),t("code",[v._v("**")]),v._v("表示递归搜索。 "),t("code",[v._v("**/*.c")]),v._v("搜索具体文件类型。\n"),t("ul",[t("li",[v._v("执行后，vim会跳转到第一个匹配项处")]),v._v(" "),t("li",[v._v(":cn, :cp 逐个浏览匹配项")]),v._v(" "),t("li",[v._v(":copen 显示匹配列表")])])])]),v._v(" "),t("h3",{attrs:{id:"修饰语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修饰语"}},[v._v("#")]),v._v(" 修饰语")]),v._v(" "),t("p",[v._v("你可以用修饰语改变“名词”的意义。修饰语有 i，表示“内部”或者“在内“，和 a， 表示”周围“。")]),v._v(" "),t("ul",[t("li",[v._v("ci( 改变当前括号内的内容")]),v._v(" "),t("li",[v._v("ci[ 改变当前方括号内的内容")]),v._v(" "),t("li",[v._v("da' 删除一个单引号字符串， 包括周围的单引号")])]),v._v(" "),t("h3",{attrs:{id:"扩展vim"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#扩展vim"}},[v._v("#")]),v._v(" 扩展Vim")]),v._v(" "),t("p",[v._v("Vim 有很多扩展插件。从 Vim 8.0 开始，你可以使用内置的插件管理系统。只需要创建一个 ~/.vim/pack/vendor/start/ 的文件夹，然后把插件放到这里。")]),v._v(" "),t("p",[t("a",{attrs:{href:"https://vimawesome.com/",target:"_blank",rel:"noopener noreferrer"}},[v._v("vimawesome"),t("OutboundLink")],1)]),v._v(" "),t("h2",{attrs:{id:"practice-vim"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#practice-vim"}},[v._v("#")]),v._v(" practice vim")]),v._v(" "),t("ul",[t("li",[t("p",[t("code",[v._v(".")]),v._v(" 用于重复一次修改。(从进入插入模式开始到按ESC退出为止的所有操作)。")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("u")]),v._v(" 撤销一次修改。输入间隔的停顿时间较长时，就退出吧。可以控制撤销粒度。")])]),v._v(" "),t("li",[t("p",[v._v("在插入模式中使用Up,Down等光标键，将会产生一个新的撤销块。可以认为是先退回普通模式，在执行jklh。也会影响"),t("code",[v._v(".")]),v._v("命令。")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("f{char}")]),v._v(" 用于在一行内查找下一个指定字符，并立即将光标移动到那里。")])]),v._v(" "),t("li",[t("p",[t("code",[v._v(";")]),v._v(" 会重复向后查找上次f命令查找的字符")])]),v._v(" "),t("li",[t("p",[t("code",[v._v(",")]),v._v(" 和"),t("code",[v._v(";")]),v._v("方向相反")])]),v._v(" "),t("li",[t("p",[v._v("j,k,0,$用于操作实际行，但加上g前缀后操作屏幕行。")])]),v._v(" "),t("li",[t("p",[t("code",[v._v(":s/target/replacement")]),v._v(" 使用"),t("code",[v._v("&")]),v._v("重复。")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("*")]),v._v(" 查找当前光标下的单词。光标会跳到下一个匹配项。")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("<C-h>")]),v._v(" 删除前一个字符，同BS")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("<C-w>")]),v._v(" 删除前一个单词")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("<C-u>")]),v._v(" 删除至行首。这三个命令比较通用。")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("<C-o>")]),v._v(" 进入插入-普通模式，执行一个命令后返回插入模式。")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("<C-r>=")]),v._v(" 使用表达式寄存器计算一个表达式，并插入结果。")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("<C-v>{123}")]),v._v(" 插入三位数ASCII码对应的字符")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("<C-v>u{1234}")]),v._v(" 插入Unicode码对应的字符")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("<C-k>{char1}{char2}")]),v._v(" 插入组合字符表示的单个字符")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("ga")]),v._v(" 查看光标所在字符的 ASCII码，Unicode码，字符组合(digr)")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("<C-g>")]),v._v(" 在可视模式和选择模式中切换")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("o")]),v._v(" 在可视模式中可以切换固定的端点。")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("gv")]),v._v(" 重新选择上次的高亮选区")])]),v._v(" "),t("li",[t("p",[t("code",[v._v(":xx")]),v._v(" 由于历史原因，被称为Ex命令")])]),v._v(" "),t("li",[t("p",[v._v("[range]格式为{start},{end}。")]),v._v(" "),t("ul",[t("li",[t("code",[v._v(".")]),v._v("表示当前行")]),v._v(" "),t("li",[t("code",[v._v("%")]),v._v("表示所有行")]),v._v(" "),t("li",[t("code",[v._v("'<,'>")]),v._v("表示当前高亮选区")]),v._v(" "),t("li",[v._v("start，end也可以是模式。如"),t("code",[v._v(":/<html>/,/<\\/html>/p")]),v._v("打印html标签所在行及之间的所有行。")]),v._v(" "),t("li",[v._v("start,end也可以加上偏移。如"),t("code",[v._v(":/<html>/+1,/<\\/html>/-1p")]),v._v("打印html标签之间的所有行(不包括所在行)。")]),v._v(" "),t("li",[v._v("0 表示文件第一行上方的虚拟行")])])]),v._v(" "),t("li",[t("p",[v._v(":{num} num被解析为地址，会跳转到指定行。")])]),v._v(" "),t("li",[t("p",[v._v(":[range]normal {commands} 对指定范围内的所有行执行相同的命令")])]),v._v(" "),t("li",[t("p",[v._v(":copy | :co | :t 复制指定行并粘贴到当前行下方。不会使用寄存器。")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("@:")]),v._v(" 重复上次Ex命令")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("q:")]),v._v(" 打开命令行窗口，记录了Ex命令历史，可以轻松重复以前的Ex命令")])]),v._v(" "),t("li",[t("p",[v._v(":shell 打开shell。exit回到vim。")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("z<CR>")]),v._v(" 将光标行放到屏幕顶端")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("zz")]),v._v(" 将光标行放到屏幕中间")])])]),v._v(" "),t("h3",{attrs:{id:"text-object"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#text-object"}},[v._v("#")]),v._v(" Text Object")]),v._v(" "),t("ul",[t("li",[v._v("aw: a word")]),v._v(" "),t("li",[v._v("iw: inner word")]),v._v(" "),t("li",[v._v("aW: a WORD")]),v._v(" "),t("li",[v._v("as: a setence")]),v._v(" "),t("li",[v._v("is")]),v._v(" "),t("li",[v._v("ap: a paragraph")]),v._v(" "),t("li",[v._v("ip")]),v._v(" "),t("li",[t("code",[v._v("a[ | a]")]),v._v(" a [] block, "),t("code",[v._v('"[content]"->"[content]"')])]),v._v(" "),t("li",[t("code",[v._v("i[ | i]")]),v._v(" inner [] block, "),t("code",[v._v('"[content]"->"content"')])]),v._v(" "),t("li",[v._v("a,i作为前缀省略")]),v._v(" "),t("li",[t("code",[v._v("(,),b")])]),v._v(" "),t("li",[t("code",[v._v("<,>")])]),v._v(" "),t("li",[t("code",[v._v("t")]),v._v(" tag block "),t("code",[v._v("<a>content</a>")])]),v._v(" "),t("li",[t("code",[v._v("{,},B")])]),v._v(" "),t("li",[v._v('"')]),v._v(" "),t("li",[v._v("'")]),v._v(" "),t("li",[v._v("`")])]),v._v(" "),t("h2",{attrs:{id:"vim进阶"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vim进阶"}},[v._v("#")]),v._v(" Vim进阶")]),v._v(" "),t("h3",{attrs:{id:"vim生成的文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vim生成的文件"}},[v._v("#")]),v._v(" vim生成的文件")]),v._v(" "),t("ul",[t("li",[v._v("backup 是普通的加~备份.")]),v._v(" "),t("li",[v._v("undofile 加后缀un~。用于在下次打开文件时也可以执行撤销命令撤销上次的修改。")]),v._v(" "),t("li",[v._v("writebackup 是防止灾难时的加~备份, 特点是文件正常写入之后就会自动删除. 也就是说如果你的文件有正常写入(不正常情况通常发生在磁盘快要满的时候), 你是很难见到这个文件出现的.")]),v._v(" "),t("li",[v._v("swapfile 也是防止灾难, 不过是缓冲区的备份, 也就是你正在编辑的内容. 如果你在编辑的时候电脑断电或者Vim发生异常退出, 而你没有保存, 你可以从.file.txt.swp里恢复这个文件.")])]),v._v(" "),t("p",[v._v("禁止备份功能"),t("br"),v._v("\n在~/.vimrc中添加")]),v._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[v._v('set nobackup\nset noundofile\nset nowritebackup\nset noswapfile\n" 备份到某个目录  // 表示会保存目录信息到文件名中\nset directory=$HOME/.vim/tmp//\nset backupdir=$HOME/.vim/tmp//\nset undodir=$HOME/.vim/tmp//\n')])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br"),t("span",{staticClass:"line-number"},[v._v("2")]),t("br"),t("span",{staticClass:"line-number"},[v._v("3")]),t("br"),t("span",{staticClass:"line-number"},[v._v("4")]),t("br"),t("span",{staticClass:"line-number"},[v._v("5")]),t("br"),t("span",{staticClass:"line-number"},[v._v("6")]),t("br"),t("span",{staticClass:"line-number"},[v._v("7")]),t("br"),t("span",{staticClass:"line-number"},[v._v("8")]),t("br")])]),t("h3",{attrs:{id:"搜索和替换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搜索和替换"}},[v._v("#")]),v._v(" 搜索和替换")]),v._v(" "),t("ul",[t("li",[t("code",[v._v(":s/foo/bar/g")]),v._v(" 当前行的foo替换成bar")]),v._v(" "),t("li",[t("code",[v._v(":%s/foo/bar/gc")]),v._v(" 所有行的foo替换成bar，且需要一个个确认("),t("code",[v._v("c")]),v._v(")")]),v._v(" "),t("li",[t("code",[v._v(":5,12s/foo/bar/g")]),v._v(" 5-12行的foo替换成bar")])]),v._v(" "),t("h3",{attrs:{id:"宏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#宏"}},[v._v("#")]),v._v(" 宏")]),v._v(" "),t("ul",[t("li",[v._v("q{字符} 来开始在寄存器{字符}中录制宏")]),v._v(" "),t("li",[v._v("q停止录制")]),v._v(" "),t("li",[v._v("@{字符} 重放宏")]),v._v(" "),t("li",[v._v("宏的执行遇错误会停止")]),v._v(" "),t("li",[v._v("{计数}@{字符}执行一个宏{计数}次")])]),v._v(" "),t("h3",{attrs:{id:"在vim中执行外部命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在vim中执行外部命令"}},[v._v("#")]),v._v(" 在Vim中执行外部命令")]),v._v(" "),t("p",[t("code",[v._v(":!external command<CR>")]),v._v(": "),t("code",[v._v("!")]),v._v("和回车之间的都是被当做外部命令执行。")]),v._v(" "),t("h3",{attrs:{id:"保存选中部分-取回内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#保存选中部分-取回内容"}},[v._v("#")]),v._v(" 保存选中部分，取回内容")]),v._v(" "),t("p",[v._v("按v进入可视化模式，移动以选择内容。然后"),t("code",[v._v(":w FILE")]),v._v("即可。"),t("br"),v._v("\n注意按"),t("code",[v._v(":")]),v._v("后底部出现了"),t("code",[v._v(":'<,'>")]),v._v("。")]),v._v(" "),t("p",[t("code",[v._v(":r FILE")]),v._v(" 将FILE内容放入光标下一行"),t("br"),v._v(" "),t("code",[v._v(":r !cmd")]),v._v(" 将cmd的输出放入光标下一行")]),v._v(" "),t("h3",{attrs:{id:"设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置"}},[v._v("#")]),v._v(" 设置")]),v._v(" "),t("p",[t("code",[v._v(":set xxx")])]),v._v(" "),t("ul",[t("li",[v._v("ic : 搜索时忽略大小写")]),v._v(" "),t("li",[v._v("hls : 高亮匹配的字符")]),v._v(" "),t("li",[v._v("noxxx : 取消xxx设置")])]),v._v(" "),t("h3",{attrs:{id:"自动补全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动补全"}},[v._v("#")]),v._v(" 自动补全")]),v._v(" "),t("p",[v._v("Vim命令也有自动补全，"),t("code",[v._v("tab")]),v._v("补全唯一的一个,"),t("code",[v._v("ctrl-d")]),v._v("显示所有候选。")]),v._v(" "),t("h3",{attrs:{id:"代码折叠"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码折叠"}},[v._v("#")]),v._v(" 代码折叠")]),v._v(" "),t("ul",[t("li",[v._v("在.vimrc中设置 set foldmethod=syntax|indent")]),v._v(" "),t("li",[v._v("zc 折叠")]),v._v(" "),t("li",[v._v("zo 展开")]),v._v(" "),t("li",[v._v("za 折叠展开切换")]),v._v(" "),t("li",[v._v("zR 打开所有折叠")]),v._v(" "),t("li",[v._v("zM 关闭所有折叠")])]),v._v(" "),t("h3",{attrs:{id:"命令重映射"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令重映射"}},[v._v("#")]),v._v(" 命令重映射")]),v._v(" "),t("ul",[t("li",[v._v(":map 递归映射")]),v._v(" "),t("li",[v._v(":unmap 取消映射")]),v._v(" "),t("li",[v._v(":mapclear 清除所有映射")]),v._v(" "),t("li",[v._v(":noremap 非递归映射")]),v._v(" "),t("li",[v._v("前缀\n"),t("ul",[t("li",[v._v("nore: 非递归")]),v._v(" "),t("li",[v._v("n: 在普通模式下生效")]),v._v(" "),t("li",[v._v("v | x: VISUAL模式")]),v._v(" "),t("li",[v._v("i: INSERT模式")]),v._v(" "),t("li",[v._v("c: 命令模式")])])]),v._v(" "),t("li",[v._v("键表\n"),t("ul",[t("li",[t("code",[v._v("<k0>")]),v._v(" - "),t("code",[v._v("<k9>")]),v._v(" 小键盘 0 到 9")]),v._v(" "),t("li",[t("code",[v._v("<S-...>")]),v._v(" Shift＋键")]),v._v(" "),t("li",[t("code",[v._v("<C-...>")]),v._v(" Control＋键")]),v._v(" "),t("li",[t("code",[v._v("<M-...>")]),v._v(" Alt＋键 或 meta＋键")]),v._v(" "),t("li",[t("code",[v._v("<A-...>")]),v._v(" 同 "),t("code",[v._v("<M-...>")])]),v._v(" "),t("li",[t("code",[v._v("<Esc>")]),v._v(" Escape")]),v._v(" "),t("li",[t("code",[v._v("<Up>")]),v._v(" 光标上移键")]),v._v(" "),t("li",[t("code",[v._v("<Space>")]),v._v(" 空格")]),v._v(" "),t("li",[t("code",[v._v("<Tab>")]),v._v(" Tab")]),v._v(" "),t("li",[t("code",[v._v("<CR>")]),v._v(" 等于"),t("code",[v._v("<Enter>")])]),v._v(" "),t("li",[t("code",[v._v("<f1>~<f12>")])]),v._v(" "),t("li",[t("code",[v._v("<home> <insert> <del> <end>")])]),v._v(" "),t("li",[t("code",[v._v("<nop>")]),v._v(" 无操作")])])])]),v._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[v._v("\" 在插入模式下加入一对引号或括号\ninoremap ' ''"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("<")]),v._v("esc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(">")])]),v._v('i\ninoremap " ""'),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("<")]),v._v("esc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(">")])]),v._v("i\ninoremap ( ()"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("<")]),v._v("esc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(">")])]),v._v("i\ninoremap [ []"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("<")]),v._v("esc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(">")])]),v._v("i\ninoremap { {}"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("<")]),v._v("esc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(">")])]),v._v("i\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br"),t("span",{staticClass:"line-number"},[v._v("2")]),t("br"),t("span",{staticClass:"line-number"},[v._v("3")]),t("br"),t("span",{staticClass:"line-number"},[v._v("4")]),t("br"),t("span",{staticClass:"line-number"},[v._v("5")]),t("br"),t("span",{staticClass:"line-number"},[v._v("6")]),t("br")])]),t("h3",{attrs:{id:"先导键-leader-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#先导键-leader-key"}},[v._v("#")]),v._v(" 先导键(leader key)")]),v._v(" "),t("p",[v._v("本质是用户或插件自定义的快捷键的命令空间。默认的先导键为"),t("code",[v._v("\\")]),v._v("。")]),v._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[v._v('" 需要放在.vimrc的顶部\n" let mapleader = \',\'\nlet mapleader = "\\'),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("<")]),v._v("space")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(">")])]),v._v('" " mapleader变量中不含特殊字符，所以转义字符是必要的\n" 使用先导键\nnnoremap '),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("<")]),v._v("leader")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(">")])]),v._v("w :w"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("<")]),v._v("cr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(">")])]),v._v(' " 用leader-w保存文件 \n')])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br"),t("span",{staticClass:"line-number"},[v._v("2")]),t("br"),t("span",{staticClass:"line-number"},[v._v("3")]),t("br"),t("span",{staticClass:"line-number"},[v._v("4")]),t("br"),t("span",{staticClass:"line-number"},[v._v("5")]),t("br")])]),t("h3",{attrs:{id:"vim寄存器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vim寄存器"}},[v._v("#")]),v._v(" vim寄存器")]),v._v(" "),t("p",[v._v("使用"),t("code",[v._v('"')]),v._v("访问寄存器")]),v._v(" "),t("ul",[t("li",[v._v("无名寄存器 复制粘贴默认使用的寄存器。可用"),t("code",[v._v('"')]),v._v("访问")]),v._v(" "),t("li",[v._v("a~z寄存器 用于手动复制数据。例如，将一个单词复制到a寄存器,"),t("code",[v._v('"ayw')]),v._v(",粘贴"),t("code",[v._v('"ap')])]),v._v(" "),t("li",[v._v("0~9寄存器 最近10次删除的历史记录")]),v._v(" "),t("li",[v._v("只读寄存器\n"),t("ul",[t("li",[t("code",[v._v("%")]),v._v(" 当前文件名")]),v._v(" "),t("li",[t("code",[v._v("#")]),v._v(" 文件所在目录")]),v._v(" "),t("li",[t("code",[v._v(".")]),v._v(" 最后插入的文本")]),v._v(" "),t("li",[t("code",[v._v(":")]),v._v(" 最后执行的命令")])])]),v._v(" "),t("li",[t("code",[v._v("*")]),v._v(" 系统的主粘贴板")]),v._v(" "),t("li",[t("code",[v._v("+")]),v._v(" Linux中"),t("code",[v._v("<C-c|v>")]),v._v("使用的粘贴板")]),v._v(" "),t("li",[v._v("使用:reg rid 访问寄存器内容")])]),v._v(" "),t("h2",{attrs:{id:"多文件-多窗口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多文件-多窗口"}},[v._v("#")]),v._v(" 多文件，多窗口")]),v._v(" "),t("ul",[t("li",[v._v(":help window-moving")]),v._v(" "),t("li",[v._v(":help window-resize")]),v._v(" "),t("li",[v._v(":ls 显示所有buffer。 %当前焦点所在的文件。#轮换文件，按"),t("code",[v._v("C-^")]),v._v("可以切换到该文件。a活动窗口。")]),v._v(" "),t("li",[v._v(":w! 将磁盘中的文件读入缓冲区。即回滚所有修改。")]),v._v(" "),t("li",[v._v(":q! 不修改，关闭所有窗口。")]),v._v(" "),t("li",[t("code",[v._v("<C-w><C-w>")]),v._v(" 按住ctrl，连续按ww可以循环切换窗口。")]),v._v(" "),t("li",[v._v(":pwd 查看vim当前工作目录。默认是在shell中打开vim时，shell的工作目录。")]),v._v(" "),t("li",[v._v(":lcd {path} 设置当前窗口的本地工作目录")]),v._v(" "),t("li",[v._v(":windo lcd {path} 为所有窗口设置本地工作目录")]),v._v(" "),t("li",[v._v("% 在文件路径中表示当前缓冲区的完整文件路径。按tab展开。")]),v._v(" "),t("li",[v._v("%:h 当前缓冲区的完整文件路径，去除了文件名。")]),v._v(" "),t("li",[v._v("重映射 "),t("code",[v._v("cnoremap <expr>%% getcmdtype() == ':' ? expand('%:h').'/' : '%%'")])])]),v._v(" "),t("p",[v._v("在不同文件buffer间切换")]),v._v(" "),t("ul",[t("li",[v._v(":bn 下一个文件buffer")]),v._v(" "),t("li",[v._v(":bp 上一个文件buffer")]),v._v(" "),t("li",[v._v(":ls 输出buffer列表 %表示当前窗口的缓冲区，a表示活动的缓冲区(可见)。")]),v._v(" "),t("li",[v._v(":b[num] 切换到第num个buffer")]),v._v(" "),t("li",[v._v(":b{bufname} 使用文件名切换")]),v._v(" "),t("li",[v._v(":bd 删除缓冲区")]),v._v(" "),t("li",[v._v(":e file 打开文件")]),v._v(" "),t("li",[v._v(":jumps 显示vim的跳转列表。\n"),t("ul",[t("li",[t("code",[v._v("<C-o>")]),v._v(" 在跳转列表中后退")]),v._v(" "),t("li",[t("code",[v._v("<C-i>")]),v._v(" 前进")])])]),v._v(" "),t("li",[v._v(":changes 显示vim的修改记录表。\n"),t("ul",[t("li",[v._v("g; 跳转到上一次修改的地方")]),v._v(" "),t("li",[v._v("g, 下")])])]),v._v(" "),t("li",[v._v(":find 在当前path下查找文件或文件夹。不支持模糊。不加**则不会进入子文件夹")]),v._v(" "),t("li",[v._v("set path+=...")]),v._v(" "),t("li",[v._v(":set path? 查看path的值")]),v._v(" "),t("li",[v._v("gf 跳转到光标下的文件")])]),v._v(" "),t("p",[v._v("用 "),t("code",[v._v(":sp")]),v._v(" / "),t("code",[v._v(":vsp | :vs")]),v._v(" 来分割窗口"),t("br"),v._v("\n同一个缓存可以在多个窗口中显示。")]),v._v(" "),t("p",[v._v("切换")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("<C-W> j")]),v._v(" 下一个")]),v._v(" "),t("li",[t("code",[v._v("<C-W> k")]),v._v(" 上一个")]),v._v(" "),t("li",[t("code",[v._v("<C-W> h")]),v._v(" 左边一个")]),v._v(" "),t("li",[t("code",[v._v("<C-W> l")]),v._v(" 右边一个")]),v._v(" "),t("li",[t("code",[v._v("<C-W> w")]),v._v(" | "),t("code",[v._v("<C-W> <C-w>")]),v._v(" 一个一个遍历窗口")]),v._v(" "),t("li",[t("code",[v._v("<C-W> o")]),v._v(" 只保留当前窗口")]),v._v(" "),t("li",[t("code",[v._v(":close")]),v._v(" 关闭当前窗口，不会退出Vim")])]),v._v(" "),t("p",[v._v("标签页")]),v._v(" "),t("ul",[t("li",[v._v(":tabnew [file] 打开新标签页")]),v._v(" "),t("li",[v._v(":tabedit [file] 打开新标签页")]),v._v(" "),t("li",[v._v("gt | :tabnext")]),v._v(" "),t("li",[v._v("gT | :tabprevious")]),v._v(" "),t("li",[v._v("Ngt 跳转到标签页N")]),v._v(" "),t("li",[v._v(":tabclose")]),v._v(" "),t("li",[v._v(":tabmove N 将当前标签页移动到第N个标签页之后")]),v._v(" "),t("li",[v._v(":tabonly")]),v._v(" "),t("li",[t("code",[v._v("<C-w> T")]),v._v(" 将当前窗口移动到一个新标签页")])]),v._v(" "),t("p",[v._v("调整窗口大小")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("[num]<C-W> +")]),v._v(" 当前窗口增加一行")]),v._v(" "),t("li",[t("code",[v._v("[num]<C-W> -")]),v._v(" 当前窗口减少一行")]),v._v(" "),t("li",[v._v(":resize +n|-n 简写:res。垂直。")]),v._v(" "),t("li",[v._v(":vertical resize +n|-n 简写:vert res。水平")]),v._v(" "),t("li",[t("code",[v._v("<C-W> =")]),v._v(" 将所有窗口宽高恢复一致。")])]),v._v(" "),t("h2",{attrs:{id:"会话-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#会话-session"}},[v._v("#")]),v._v(" 会话(session)")]),v._v(" "),t("ul",[t("li",[v._v("保存 "),t("code",[v._v(":mksession ~/.vim/sessions/xxx.vim")]),v._v(" | "),t("code",[v._v(":mks ~/.vim/sessions/xxx.vim")])]),v._v(" "),t("li",[v._v("恢复 "),t("code",[v._v("vim -S ~/.vim/sessions/xxx.vim")])])]),v._v(" "),t("h2",{attrs:{id:"插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[v._v("#")]),v._v(" 插件")]),v._v(" "),t("p",[v._v(":so % 在vim中直接source当前文件")]),v._v(" "),t("h3",{attrs:{id:"vim-plug"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vim-plug"}},[v._v("#")]),v._v(" vim-plug")]),v._v(" "),t("ul",[t("li",[v._v("下载文件 "),t("code",[v._v("curl -fLo ~/.vim/autoload/plug.vim --create-dirs https://raw.github.com/junegunn/vim-plug/master/plug.vim")])]),v._v(" "),t("li",[v._v("vim-plug初始化 在.vimrc中添加两个call。")]),v._v(" "),t("li",[v._v("插件管理\n"),t("ul",[t("li",[v._v("添加插件 "),t("code",[v._v("Plug <username>/<repo>")])]),v._v(" "),t("li",[v._v(":PlugInstall 安装添加的插件")]),v._v(" "),t("li",[v._v(":PlugUpdate 更新插件")]),v._v(" "),t("li",[v._v(":PlugUpgrade 更新vim-plug。需要source一下。")]),v._v(" "),t("li",[v._v(":PlugClean 移除不用的插件")])])]),v._v(" "),t("li",[v._v("插件延迟加载\n"),t("ul",[t("li",[v._v("Plug 'scrooloose/nerdtree', {'on', : 'NERDTreeToggle'} 在执行'NERDTreeToggle'命令时再加载")]),v._v(" "),t("li",[v._v("Plug 'junegunn/goyo.vim', {'for', : 'markdown'} 按文件类型加载")])])])]),v._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[v._v("call plug"),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("#begin()")]),v._v("\nPlug "),t("span",{pre:!0,attrs:{class:"token string"}},[v._v("'mileszs/ack.vim'")]),v._v("\nPlug "),t("span",{pre:!0,attrs:{class:"token string"}},[v._v("'easymotion/vim-easymotion.vim'")]),v._v("\ncall plug"),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("#end()")]),v._v("\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br"),t("span",{staticClass:"line-number"},[v._v("2")]),t("br"),t("span",{staticClass:"line-number"},[v._v("3")]),t("br"),t("span",{staticClass:"line-number"},[v._v("4")]),t("br")])]),t("h3",{attrs:{id:"ctags"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ctags"}},[v._v("#")]),v._v(" ctags")]),v._v(" "),t("p",[t("code",[v._v("sudo apt-get install ctags")])]),v._v(" "),t("h4",{attrs:{id:"生成tags文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成tags文件"}},[v._v("#")]),v._v(" 生成tags文件")]),v._v(" "),t("p",[v._v("在源码根目录下")]),v._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[v._v("ctags -R --exclude"),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(".git --exclude"),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v("vendor/* --"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("..")]),v._v(".\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br")])]),t("p",[v._v("这样就会生成一个tags文件，ctags需要这个文件实现跳转。"),t("br"),v._v("\n常用的选项可以写在 ~/.ctags 文件中")]),v._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[v._v("-R\n--exclude"),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(".git\n--exclude"),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v("vendor/*\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("..")]),v._v(".\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br"),t("span",{staticClass:"line-number"},[v._v("2")]),t("br"),t("span",{staticClass:"line-number"},[v._v("3")]),t("br"),t("span",{staticClass:"line-number"},[v._v("4")]),t("br")])]),t("p",[v._v("自动生成ctags")]),v._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[v._v("autocmd BufWritePost *.c *.h *.cpp silent! !ctags -R &\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br")])]),t("h4",{attrs:{id:"how-to-use"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use"}},[v._v("#")]),v._v(" How to use")]),v._v(" "),t("ul",[t("li",[v._v("找一个指定的tag，并用Vim打开其定义位置，在shell中使用 "),t("code",[v._v("vim -t <tag>")]),v._v("，也可以使用正则")]),v._v(" "),t("li",[v._v("在Vim中\n"),t("ul",[t("li",[t("code",[v._v("ctrl+]")]),v._v("(有多个tag时，会选一个直接进入) 或 "),t("code",[v._v("g]")]),v._v("(有多个会显示一个列表) 或 "),t("code",[v._v(":ta[g] ctrl+rw")]),v._v(" 跳转到tag")]),v._v(" "),t("li",[t("code",[v._v(":ts tag_name")]),v._v(" 列出所有tag_name匹配的tag")]),v._v(" "),t("li",[t("code",[v._v(":pts tag_name")]),v._v(" "),t("code",[v._v(":ts")]),v._v("功能，但有预览")]),v._v(" "),t("li",[t("code",[v._v("ctrl+w}")]),v._v(" 或 "),t("code",[v._v(":ptag ctrl+rw")]),v._v(" 预览tag")]),v._v(" "),t("li",[t("code",[v._v("ctrl+wz")]),v._v(" 或 "),t("code",[v._v(":pc")]),v._v(" 关闭上面打开的预览")]),v._v(" "),t("li",[t("code",[v._v(":tn")]),v._v(" 或 "),t("code",[v._v(":tp")]),v._v(" 在多个匹配的tag上跳转")]),v._v(" "),t("li",[t("code",[v._v("ctrl+t")]),v._v(" 向tag栈底跳一格(相当于返回上一个tag)")]),v._v(" "),t("li",[t("code",[v._v(":tags")]),v._v(" 显示tag栈，当前活动的有 "),t("code",[v._v(">")]),v._v(" 标记")])])]),v._v(" "),t("li",[v._v("使用正则\n"),t("ul",[t("li",[t("code",[v._v(":tag main")]),v._v(' 直接跳转到 tag "main"')]),v._v(" "),t("li",[t("code",[v._v(":tag /^get")]),v._v(' 直接跳转到以"get"开头的 tag')]),v._v(" "),t("li",[t("code",[v._v(":tag /Final$")]),v._v(' 直接跳转到以"Final"结尾的 tag')]),v._v(" "),t("li",[t("code",[v._v(":tag /norm")]),v._v(' 列出包含"norm"的 tag')]),v._v(" "),t("li",[t("code",[v._v(":tag /Final$\\C")]),v._v(' 列出以"Final"结尾的 tag\nPS：记得要保持tags索引文件最新')])])])]),v._v(" "),t("h3",{attrs:{id:"youcompleteme"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#youcompleteme"}},[v._v("#")]),v._v(" YouCompleteMe")]),v._v(" "),t("p",[v._v("需要安装cmake和llvm。因为该插件需要编译代码。 "),t("code",[v._v("sudo apt-get install cmake llvm")])]),v._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[v._v("\" .vimrc中配置vim-plug\nlet g:plug_timeout = 300 \" 为插件增加超时时间\nPlug 'Valloric/YouCompleteMe', {'do': './install.py'}\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br"),t("span",{staticClass:"line-number"},[v._v("2")]),t("br"),t("span",{staticClass:"line-number"},[v._v("3")]),t("br")])]),t("p",[v._v(":source ~/.vimrc | PlugInstall")]),v._v(" "),t("h3",{attrs:{id:"ack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ack"}},[v._v("#")]),v._v(" ack")]),v._v(" "),t("p",[v._v("mileszs/ack.vim")]),v._v(" "),t("ul",[t("li",[v._v(":Ack [opts] {pattern} [{dirs}]")]),v._v(" "),t("li",[v._v("--cc为c，--rr为r。ack规定语言必须大于一个字符。")]),v._v(" "),t("li",[v._v("在搜索结果中\n"),t("ul",[t("li",[v._v("? 命令帮助")]),v._v(" "),t("li",[v._v("o 同 enter")]),v._v(" "),t("li",[v._v("O 打开文件并关闭搜索窗口")]),v._v(" "),t("li",[v._v("go 打开文件但焦点保持在搜索结果窗口")]),v._v(" "),t("li",[v._v("q 退出")]),v._v(" "),t("li",[v._v("v,h,t,V,H,T 小写打开并切换到，大写打开但焦点保持在搜索结果窗口")]),v._v(" "),t("li",[v._v("gv 在右边打开一个窗口，焦点保持在搜索结果窗口")])])])]),v._v(" "),t("h3",{attrs:{id:"ctrlp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ctrlp"}},[v._v("#")]),v._v(" ctrlp")]),v._v(" "),t("p",[v._v("完整路径模糊查找。可查文件，buffer，最近使用文件(MRU)， tag等等。")]),v._v(" "),t("ul",[t("li",[v._v("c-p 打开查找面板")]),v._v(" "),t("li",[v._v("c-d 选择文件查找|路径查找")]),v._v(" "),t("li",[v._v("c-r 开关正则匹配")]),v._v(" "),t("li",[v._v("c-f, c-b 在file查找 ,buffer查找 ,mru查找中切换。")]),v._v(" "),t("li",[v._v("c-j, c-k 在查找结果中上下移动")]),v._v(" "),t("li",[v._v("c-t 在新tab页中打开")]),v._v(" "),t("li",[v._v("c-x,c-v 在新窗口中打开。(x-上下， v-左右)")]),v._v(" "),t("li",[v._v("c-z 标记多个文件，c-o打开这些文件")]),v._v(" "),t("li",[v._v("c-y 新建文件如果目录不存在，则创建")])]),v._v(" "),t("h3",{attrs:{id:"easy-motion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#easy-motion"}},[v._v("#")]),v._v(" easy-motion")]),v._v(" "),t("p",[v._v("easymotion/vim-easymotion")]),v._v(" "),t("ul",[t("li",[v._v("\\w 向后跳转到单词头")]),v._v(" "),t("li",[v._v("\\b 向前跳转到单词头")]),v._v(" "),t("li",[v._v("\\s 双向跳转到指定字符")]),v._v(" "),t("li",[v._v("\\j 向下跳转到行首")]),v._v(" "),t("li",[v._v("\\k 向上跳转到行首")])]),v._v(" "),t("h3",{attrs:{id:"vim-bookmark"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vim-bookmark"}},[v._v("#")]),v._v(" vim-bookmark")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("Action")]),v._v(" "),t("th",[v._v("Shortcut")]),v._v(" "),t("th",[v._v("Command")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("在当前行添加/删除书签")]),v._v(" "),t("td",[v._v("mm")]),v._v(" "),t("td",[v._v(":BookmarkToggle")])]),v._v(" "),t("tr",[t("td",[v._v("Add/edit/remove当前行的书签名")]),v._v(" "),t("td",[v._v("mi")]),v._v(" "),t("td",[v._v(":BookmarkAnnotate name")])]),v._v(" "),t("tr",[t("td",[v._v("显示所有书签")]),v._v(" "),t("td",[v._v("ma")]),v._v(" "),t("td",[v._v(":BookmarkShowAll")])]),v._v(" "),t("tr",[t("td",[v._v("清除当前buffer的所有书签")]),v._v(" "),t("td",[v._v("mc")]),v._v(" "),t("td",[v._v(":BookmarkClear")])]),v._v(" "),t("tr",[t("td",[v._v("清除所有buffer的所有书签")]),v._v(" "),t("td",[v._v("mx")]),v._v(" "),t("td",[v._v(":BookmarkClearAll")])]),v._v(" "),t("tr",[t("td",[v._v("下一个书签")]),v._v(" "),t("td",[v._v("mn")]),v._v(" "),t("td",[v._v(":BookmarkNext")])]),v._v(" "),t("tr",[t("td",[v._v("上一个书签")]),v._v(" "),t("td",[v._v("mp")]),v._v(" "),t("td",[v._v(":BookmarkPrev")])]),v._v(" "),t("tr",[t("td",[v._v("将当前行的书签向上移动n行")]),v._v(" "),t("td",[v._v("nmkk")]),v._v(" "),t("td",[v._v(":BookmarkMoveUp n")])]),v._v(" "),t("tr",[t("td",[v._v("将当前行的书签向下移动n行")]),v._v(" "),t("td",[v._v("nmjj")]),v._v(" "),t("td",[v._v(":BookmarkMoveDown n")])]),v._v(" "),t("tr",[t("td",[v._v("将当前行的书签移动到第n行")]),v._v(" "),t("td",[v._v("nmg")]),v._v(" "),t("td",[v._v(":BookmarkMoveToLine n")])]),v._v(" "),t("tr",[t("td",[v._v("将书签保存到文件中")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v(":BookmarkSave FILE")])]),v._v(" "),t("tr",[t("td",[v._v("从文件中加载书签")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v(":BookmarkLoad FILE")])])])]),v._v(" "),t("h3",{attrs:{id:"snippet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#snippet"}},[v._v("#")]),v._v(" snippet")]),v._v(" "),t("ul",[t("li",[v._v(":UltiSnippetsEdit 编辑当前类型文件的snippets")]),v._v(" "),t("li",[v._v("格式")])]),v._v(" "),t("h2",{attrs:{id:"vim-script"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vim-script"}},[v._v("#")]),v._v(" vim-script")]),v._v(" "),t("h3",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[v._v("#")]),v._v(" 语法")]),v._v(" "),t("ul",[t("li",[v._v("set 为Vim内部选项赋值")]),v._v(" "),t("li",[v._v("let 对非Vim内部变量")]),v._v(" "),t("li",[v._v("没有bool类型，1为真，0为假")]),v._v(" "),t("li",[v._v("作用域前缀\n"),t("ul",[t("li",[v._v("g: 全局作用域。默认")]),v._v(" "),t("li",[v._v("v: Vim所定义的全局作用域")]),v._v(" "),t("li",[v._v("I: 局部作用域")]),v._v(" "),t("li",[v._v("b,w,t: 当前缓冲区，窗口，标签页")]),v._v(" "),t("li",[v._v("s: :source'd执行的Vim脚本中的局部文件作用域")]),v._v(" "),t("li",[v._v("a: 函数的参数")])])]),v._v(" "),t("li",[v._v("echom 输出，可以用:message查看输出历史")]),v._v(" "),t("li",[v._v("条件表达式\n"),t("ul",[t("li",[v._v("if expr")]),v._v(" "),t("li",[v._v("else if expr")]),v._v(" "),t("li",[v._v("else")]),v._v(" "),t("li",[v._v("endif")]),v._v(" "),t("li",[v._v("(expr ? true : false)")])])]),v._v(" "),t("li",[v._v("文本比较\n"),t("ul",[t("li",[v._v("== 文本比较")]),v._v(" "),t("li",[v._v("=~ 正则匹配")]),v._v(" "),t("li",[v._v("!~ 正则不匹配")]),v._v(" "),t("li",[v._v("后缀?|#表示忽略|考虑大小写")]),v._v(" "),t("li",[v._v("无后缀是否忽略取决于Vim的内置选项ignorecase")])])]),v._v(" "),t("li",[v._v("函数调用：如果是单独调用，必须在前面加个call。在表达式中，则不必。")]),v._v(" "),t("li",[v._v("list：类似python的list。add,insert,remove,sort,extend,index,empty,len,count")]),v._v(" "),t("li",[v._v("dict: 代码跨多行时，要在行尾加"),t("code",[v._v("\\")]),v._v(". :help dict")]),v._v(" "),t("li",[v._v("循环\n"),t("ul",[t("li",[v._v("for expr in exprs")]),v._v(" "),t("li",[v._v("endfor")]),v._v(" "),t("li",[v._v("while expr")]),v._v(" "),t("li",[v._v("endwhile")])])]),v._v(" "),t("li",[v._v("函数\n"),t("ul",[t("li",[v._v("function! Funcname() 函数名首字母必须大写。!防止多次定义")]),v._v(" "),t("li",[v._v("endfunction")])])]),v._v(" "),t("li",[v._v("和Vim交互\n"),t("ul",[t("li",[v._v("execute 将参数解析为Vim命令并执行")]),v._v(" "),t("li",[v._v("normal 执行按键序列")]),v._v(" "),t("li",[v._v("silent 隐藏其他命令的输出")]),v._v(" "),t("li",[v._v("has 检查Vim是否支持某个功能 :help feature-list")]),v._v(" "),t("li",[v._v("confirm")]),v._v(" "),t("li",[v._v("input")])])]),v._v(" "),t("li",[v._v(":help eval")])])])}),[],!1,null,null,null);_.default=e.exports}}]);