(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{547:function(t,i,v){"use strict";v.r(i);var a=v(1),_=Object(a.a)({},(function(){var t=this,i=t.$createElement,v=t._self._c||i;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"gdb-cheatsheet"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#gdb-cheatsheet"}},[t._v("#")]),t._v(" gdb cheatsheet")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://sourceware.org/gdb/onlinedocs/gdb/index.html#SEC_Contents",target:"_blank",rel:"noopener noreferrer"}},[t._v("gdb 文档"),v("OutboundLink")],1)]),t._v(" "),v("ul",[v("li",[t._v("-g: 生成debugging symbols，使得调试更高效。-ggdb，包含gdb规定的符号。")])]),t._v(" "),v("p",[t._v("gdb [--args] program [args]进入debug模式")]),t._v(" "),v("ul",[v("li",[t._v("set args <args>")]),t._v(" "),v("li",[t._v("run: 执行程序")]),t._v(" "),v("li",[t._v("kill: 关闭执行的程序")]),t._v(" "),v("li",[t._v("help")])]),t._v(" "),v("p",[t._v("检查栈")]),t._v(" "),v("ul",[v("li",[t._v("backtrace/where | bt: 查看调用栈")]),t._v(" "),v("li",[t._v("backtrace/where full: 查看调用栈，也打印栈帧中的变量")]),t._v(" "),v("li",[t._v("frame frame#: 查看指定帧(backtrace列出的信息开头的数字)")])]),t._v(" "),v("p",[t._v("变量和内存")]),t._v(" "),v("ul",[v("li",[t._v("x/nfu addr: examine addr。查看指定地址的值\n"),v("ul",[v("li",[t._v("n: 要打印的unit数量")]),t._v(" "),v("li",[t._v("f: format")]),t._v(" "),v("li",[t._v("u: unit (b:Byte 1B, h:Half-word 2B, w:Word 4B, g:Giant word 8B)")])])]),t._v(" "),v("li",[t._v("p <what>: 查看变量的值")]),t._v(" "),v("li",[t._v("p arr[n]@m: 查看数组arr从n开始数，共m个元素")]),t._v(" "),v("li",[t._v("print/format <what>: 查看变量的值")]),t._v(" "),v("li",[t._v("display/format <what>: 在每个step指令后打印变量的值")]),t._v(" "),v("li",[t._v("undisplay display#: 不再监视")]),t._v(" "),v("li",[t._v("enable/disable display#")]),t._v(" "),v("li",[t._v("<what>\n"),v("ul",[v("li",[t._v("expressions")]),t._v(" "),v("li",[t._v("filename::variable_name")]),t._v(" "),v("li",[t._v("function::variable_name")]),t._v(" "),v("li",[t._v("{type}address : 在address处的内容，解释为C的type类型。")]),t._v(" "),v("li",[v("span",{staticClass:"katex"},[v("span",{staticClass:"katex-mathml"},[v("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[v("semantics",[v("mrow",[v("mi",[t._v("r")]),v("mi",[t._v("e")]),v("mi",[t._v("g")]),v("mi",[t._v("i")]),v("mi",[t._v("s")]),v("mi",[t._v("t")]),v("mi",[t._v("e")]),v("mi",[t._v("r")]),v("mo",[t._v(":")]),v("mtext",[t._v("有名字的寄存器，如")])],1),v("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("register: 有名字的寄存器，如")])],1)],1)],1),v("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[v("span",{staticClass:"base"},[v("span",{staticClass:"strut",staticStyle:{height:"0.854em","vertical-align":"-0.1944em"}}),v("span",{staticClass:"mord mathnormal"},[t._v("re")]),v("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),v("span",{staticClass:"mord mathnormal"},[t._v("i")]),v("span",{staticClass:"mord mathnormal"},[t._v("s")]),v("span",{staticClass:"mord mathnormal"},[t._v("t")]),v("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("er")]),v("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),v("span",{staticClass:"mrel"},[t._v(":")]),v("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),v("span",{staticClass:"base"},[v("span",{staticClass:"strut",staticStyle:{height:"0.6833em"}}),v("span",{staticClass:"mord cjk_fallback"},[t._v("有名字的寄存器，如")])])])]),t._v("esp--栈指针，"),v("span",{staticClass:"katex"},[v("span",{staticClass:"katex-mathml"},[v("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[v("semantics",[v("mrow",[v("mi",[t._v("e")]),v("mi",[t._v("b")]),v("mi",[t._v("p")]),v("mo",[t._v("−")]),v("mo",[t._v("−")]),v("mtext",[t._v("帧基址，")])],1),v("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("ebp--帧基址，")])],1)],1)],1),v("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[v("span",{staticClass:"base"},[v("span",{staticClass:"strut",staticStyle:{height:"0.8889em","vertical-align":"-0.1944em"}}),v("span",{staticClass:"mord mathnormal"},[t._v("e")]),v("span",{staticClass:"mord mathnormal"},[t._v("b")]),v("span",{staticClass:"mord mathnormal"},[t._v("p")]),v("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),v("span",{staticClass:"mbin"},[t._v("−")]),v("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),v("span",{staticClass:"base"},[v("span",{staticClass:"strut",staticStyle:{height:"0.7667em","vertical-align":"-0.0833em"}}),v("span",{staticClass:"mord"},[t._v("−")]),v("span",{staticClass:"mord cjk_fallback"},[t._v("帧基址，")])])])]),t._v("eip--指令指针")])])]),t._v(" "),v("li",[t._v("format\n"),v("ul",[v("li",[t._v("a: 指针")]),t._v(" "),v("li",[t._v("c: 读为int，打印为char")]),t._v(" "),v("li",[t._v("d: 有符号int")]),t._v(" "),v("li",[t._v("f: 浮点数")]),t._v(" "),v("li",[t._v("o: 八进制int")]),t._v(" "),v("li",[t._v("s: Try to treat as C string")]),t._v(" "),v("li",[t._v("t: 二进制int")]),t._v(" "),v("li",[t._v("u: 无符号int")]),t._v(" "),v("li",[t._v("x: 十六进制int")])])])]),t._v(" "),v("p",[t._v("查看源码")]),t._v(" "),v("ul",[v("li",[t._v("list line_number: 查看101行附件10行")]),t._v(" "),v("li",[t._v("list from,to: 查看从from到to行")]),t._v(" "),v("li",[t._v("list -: 查看前10行")]),t._v(" "),v("li",[t._v("list <where>")])]),t._v(" "),v("p",[t._v("断点")]),t._v(" "),v("ul",[v("li",[t._v("break where: 在指定位置设置一个断点(会输出断点所在具体位置，注意到断点有序号，Breakpoint 1 at 0x29fa0: file main.cc, line 52.)")]),t._v(" "),v("li",[t._v("where\n"),v("ul",[v("li",[t._v("function_name")]),t._v(" "),v("li",[t._v("line_number: 当前文件的某行")]),t._v(" "),v("li",[t._v("file:line_number")])])]),t._v(" "),v("li",[t._v("delete breakpoint#: 删除指定断点")]),t._v(" "),v("li",[t._v("enable breakpoint")]),t._v(" "),v("li",[t._v("disable breakpoint")]),t._v(" "),v("li",[t._v("clear: 删除所有断点")]),t._v(" "),v("li",[t._v("condition 1 var==666: 仅当变量var的值为666时，才触发断点1。")]),t._v(" "),v("li",[t._v("break/watch <where> if <condition>")]),t._v(" "),v("li",[t._v("watch where // breakpoint 和 watchpoint 共用编号。")]),t._v(" "),v("li",[t._v("watchpoint 有两种实现方式，具体取决于你的系统。软件实现方式为在每一步执行后都测试一次expr的值，会很慢。硬件方式更快。")]),t._v(" "),v("li",[t._v("watch [-l|-location] expr [thread thread-id] [mask maskvalue]  为expr设置一个监视点。如果expr的值改变了，则停止执行。\n"),v("ul",[v("li",[t._v("thread thread-id 指定某个线程，只有该线程修改expr的值时才停止执行。(仅限硬件实现)")]),t._v(" "),v("li",[t._v("-l 告诉gdb，如果expr的结果是个地址，则查看该地址的内容。如果结果不是地址，则输出一个错误。")]),t._v(" "),v("li",[t._v("mask maskvalue 默认开启-l。maskvalue用于同时查看多数地址。 watch foo mask 0xffffff00？")])])]),t._v(" "),v("li",[t._v("rwatch expr 在expr被程序读取时break")]),t._v(" "),v("li",[t._v("awatch expr 在expr被读取或被修改时都break")]),t._v(" "),v("li",[t._v("delete/enable/disable watchpoint#")])]),t._v(" "),v("p",[t._v("步进")]),t._v(" "),v("ul",[v("li",[t._v("gdb的一个有用的特性：如果直接按回车，会重复执行上一个命令")]),t._v(" "),v("li",[t._v("step: 到下一行。如果有函数会进入函数")]),t._v(" "),v("li",[t._v("next: 到下一行。不会进入函数")]),t._v(" "),v("li",[t._v("finish: 将当前函数执行完")]),t._v(" "),v("li",[t._v("continue | cont: 继续正常执行")]),t._v(" "),v("li",[t._v("quit: 退出")])]),t._v(" "),v("p",[t._v("反向执行")]),t._v(" "),v("ul",[v("li",[t._v("record 反向执行的前置条件")]),t._v(" "),v("li",[t._v("reverse-step")]),t._v(" "),v("li",[t._v("reverse-next")]),t._v(" "),v("li",[t._v("reverse-continue")]),t._v(" "),v("li",[t._v("reverse-finish 回到函数执行前")]),t._v(" "),v("li",[t._v("set exec-direction reverse 所有next,step...全变为逆向操作")]),t._v(" "),v("li",[t._v("set exec-direction forward 恢复正常")])]),t._v(" "),v("p",[t._v("信息")]),t._v(" "),v("ul",[v("li",[t._v("info args: 当前栈帧的函数参数")]),t._v(" "),v("li",[t._v("info breakpoints/watchpoints")]),t._v(" "),v("li",[t._v("info locals: 当前栈帧的本地变量")]),t._v(" "),v("li",[t._v("info sharedlibrary: 列出已加载的动态库")]),t._v(" "),v("li",[t._v("info signals: 列出所有信号和他们当前是如何处理的")]),t._v(" "),v("li",[t._v("info threads")]),t._v(" "),v("li",[t._v("show directories: 列出GDB搜索涉及到的源文件")]),t._v(" "),v("li",[t._v("show listsize")]),t._v(" "),v("li",[t._v("whatis variable_name: 输出变量的类型")])]),t._v(" "),v("h2",{attrs:{id:"gdb-tui"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#gdb-tui"}},[t._v("#")]),t._v(" gdb-tui")]),t._v(" "),v("p",[t._v("标志")]),t._v(" "),v("ul",[v("li",[v("p",[v("code",[t._v(">")]),t._v(" 当前执行的行")])]),t._v(" "),v("li",[v("p",[t._v("断点表示 [b|B][+|-]")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("b")]),t._v(" 表示还没到的断点")]),t._v(" "),v("li",[v("code",[t._v("B")]),t._v(" 表示至少到过一次的断点")]),t._v(" "),v("li",[v("code",[t._v("+")]),t._v(" 表示 enabled")]),t._v(" "),v("li",[v("code",[t._v("-")]),t._v(" 表示 disabled")])])]),t._v(" "),v("li",[v("p",[t._v("C-x a/A/C-a: 进入或离开TUI模式")])]),t._v(" "),v("li",[v("p",[t._v("C-x 1: 保留一个窗口")])]),t._v(" "),v("li",[v("p",[t._v("C-x 2: 保留两个窗口")])]),t._v(" "),v("li",[v("p",[t._v("C-x o: 切换当前活动的窗口")])]),t._v(" "),v("li",[v("p",[t._v("C-x s: 切换到TUI的单键模式")])]),t._v(" "),v("li",[v("p",[t._v("PgUp,PgDn,上下左右可用于操作活动窗口。")])]),t._v(" "),v("li",[v("p",[t._v("当焦点不在cmd窗口时，C-p相当于Up,C-b相当于Left,C-f相当于Right,C-n相当于Down")])]),t._v(" "),v("li",[v("p",[t._v("C-l: 刷新窗口")])])]),t._v(" "),v("p",[t._v("单键模式")]),t._v(" "),v("ul",[v("li",[t._v("s: step")]),t._v(" "),v("li",[t._v("i: step Into")]),t._v(" "),v("li",[t._v("n: next")]),t._v(" "),v("li",[t._v("o: step Over")]),t._v(" "),v("li",[t._v("r: run")]),t._v(" "),v("li",[t._v("c: continue")]),t._v(" "),v("li",[t._v("f: finish")]),t._v(" "),v("li",[t._v("d: down 在frame stack中向下一层")]),t._v(" "),v("li",[t._v("u: up 在frame stack中向上一层")]),t._v(" "),v("li",[t._v("q: 退出单键模式")]),t._v(" "),v("li",[t._v("v: info local")]),t._v(" "),v("li",[t._v("w: where")])]),t._v(" "),v("p",[t._v("TUI命令")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("tui enable: 进入上次使用的tui窗口模式，或默认窗口模式。")])]),t._v(" "),v("li",[v("p",[t._v("tui disable")])]),t._v(" "),v("li",[v("p",[t._v("tui new-layout name window weight [window weight ...]: 新建一个名为name的TUI窗口布局。")]),t._v(" "),v("ul",[v("li",[t._v("可以使用layout name使用该布局")]),t._v(" "),v("li",[t._v("window 有四种 src,asm,regs,cmd")]),t._v(" "),v("li",[t._v("weight 是权重，用于确定每个窗口占屏幕的比例。status的权重应总是设为0")]),t._v(" "),v("li",[t._v("默认是从上到下分割。加-horizontal可改为从左到右分割。")]),t._v(" "),v("li",[t._v("示例1：(gdb) tui new-layout example src 1 regs 1 status 0 cmd 1")]),t._v(" "),v("li",[t._v("示例2：(gdb) tui new-layout example {-horizontal src 1 asm 1} 2 status 0 cmd 1")]),t._v(" "),v("li",[t._v("9.2版本还没有实装")])])]),t._v(" "),v("li",[v("p",[t._v("layout name：使用内置布局或新建的布局")]),t._v(" "),v("ul",[v("li",[t._v("prev: 前一个")]),t._v(" "),v("li",[t._v("next: 后一个")]),t._v(" "),v("li",[t._v("src: 显示源码和命令窗口")]),t._v(" "),v("li",[t._v("asm：显示汇编和命令窗口")]),t._v(" "),v("li",[t._v("split：显示源码，汇编和命令窗口")]),t._v(" "),v("li",[t._v("regs：显示寄存器窗口。如果在src模式则上为寄存器，中为源码。如果在split和asm模式，则上为寄存器，中为汇编。")])])]),t._v(" "),v("li",[v("p",[t._v("focus name: 改变当前活动窗口。")])]),t._v(" "),v("li",[v("p",[t._v("refresh: 刷新窗口")])]),t._v(" "),v("li",[v("p",[t._v("winheight name +count： 改变窗口大小")])]),t._v(" "),v("li",[v("p",[t._v("winheight name -count： 改变窗口大小")])]),t._v(" "),v("li",[v("p",[t._v("tui reg group：显示不同的寄存器分组")]),t._v(" "),v("ul",[v("li",[t._v("general: 通用寄存器")]),t._v(" "),v("li",[t._v("float: 浮点数寄存器")]),t._v(" "),v("li",[t._v("system: 系统寄存器")]),t._v(" "),v("li",[t._v("vector: 向量寄存器")]),t._v(" "),v("li",[t._v("all")])])]),t._v(" "),v("li",[v("p",[t._v("set tui compact-source [on|off]：设置源码的行号和代码间的距离。on-仅一个空格，off-一个tab。")])])]),t._v(" "),v("h2",{attrs:{id:"小技巧"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小技巧"}},[t._v("#")]),t._v(" 小技巧")]),t._v(" "),v("ul",[v("li",[t._v("对一个大数组，p arr[n]@m，查看数组arr从n开始数，共m个元素")]),t._v(" "),v("li",[t._v("gdb 命令输出在src模式下可见部分太小了。可以使用\n"),v("ul",[v("li",[t._v("set trace-commands on")]),t._v(" "),v("li",[t._v("set logging on")]),t._v(" "),v("li",[t._v("cd where/gdb/is/running")]),t._v(" "),v("li",[t._v("tail -f -n 30 gdb.txt")]),t._v(" "),v("li",[t._v("less +F gdb.txt 可以代替tail。 ctrl+c，退出等待输入模式，进入普通less模式，shift+f进入。")]),t._v(" "),v("li",[t._v("进入TUI模式后，日志会停止，这是个gdb bug。先set logging off，再set logging on即可正常显示。")])])])])])}),[],!1,null,null,null);i.default=_.exports}}]);