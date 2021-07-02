(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{374:function(t,s,a){"use strict";a.r(s);var n=a(44),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"union和匿名结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#union和匿名结构"}},[t._v("#")]),t._v(" Union和匿名结构")]),t._v(" "),a("p",[t._v("Union: 定义类似struct，但内存分配方式不一样。struct会为所有成员分配内存空间，union是所有成员共用一个内存空间，大小以最大的成员为准。\n匿名：通常嵌套于union或strcut中，可以用外层类型的变量名直接访问匿名的结构成员。union中的匿名比较有用，因为可以将一系列成员包裹起来以获取更大的内存空间。")]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdint.h>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("union")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("union")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint32_t")]),t._v(" _32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint16_t")]),t._v(" _16"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint8_t")]),t._v(" _8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" gpr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 32B")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint32_t")]),t._v(" eax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ecx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" edx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ebx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" esp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ebp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" esi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" edi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint64_t")]),t._v(" pc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 40B")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" CPU"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" argc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    CPU cpu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    cpu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gpr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_32 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("666")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CPU size: %d\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sizeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CPU"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 40")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cpu.eax: %d\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cpu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 666")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br")])]),a("h2",{attrs:{id:"getopt-int-argc-char-const-argv-const-char-optstring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getopt-int-argc-char-const-argv-const-char-optstring"}},[t._v("#")]),t._v(" getopt(int argc, char* const argv[], const char* optstring)")]),t._v(" "),a("p",[t._v("选项处理过程")]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" optind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// argv中下一个要处理的元素的索引(初始为 1)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" opterr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否输出错误信息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" optopt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导致错误的选项字符")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" optarg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("option")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 长选项(--option)的名称")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" has_arg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0:无参数 1:有参数 2:参数可选")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("flag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// flag为NULL：getopt_long()返回val。否则getopt_long()返回0，flag指向的变量值为val(如果该option用户设置了的话)")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回值或放入flag")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 结构体数组的最后一个元素必须设为0")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("如果getopt()找到下一个选项字符，就返回那个字符，更新optind和一个static变量nextchar")]),t._v(" "),a("p",[t._v("optstring包含了所有合法的选项，如果字符后面跟着一个"),a("code",[t._v(":")]),t._v("，说明需要参数，两个说明是可选参数。"),a("br"),t._v("\n如果选项中包含文本(-oarg, o 是选项，arg是文本)，则文本会保存在optarg中其他情况下，optarg设为0.\nGNU扩展,optstring中的"),a("code",[t._v("W:")]),t._v("表示将"),a("code",[t._v("-W foo")]),t._v("看作"),a("code",[t._v("--foo")]),t._v("看待。")]),t._v(" "),a("p",[t._v("默认情况下,getopt()按输入顺序排列argv的内容。所以，所有的非选项参数放在最后。\noptstring的首字符决定使用的模式")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("+")]),t._v(" 遇到任何一个非选项参数就终止选项处理")]),t._v(" "),a("li",[a("code",[t._v("-")]),t._v(" 强制将所有非选项参数看作选项的参数\n"),a("code",[t._v("--")]),t._v(" 在任何模式下都可以强行终止选项处理过程。")])]),t._v(" "),a("p",[t._v("Errors")]),t._v(" "),a("ul",[a("li",[t._v("处理的选项不再optstring中")]),t._v(" "),a("li",[t._v("设置为有参数的选项没有检测到参数\n处理")]),t._v(" "),a("li",[t._v("默认输出错误信息，将导致错误的选项字符放在optopt中，函数返回 ?")]),t._v(" "),a("li",[t._v("如果调用者将opterr设为0，则不会输出错误信息，函数仍返回 ?")]),t._v(" "),a("li",[t._v("如果optstring的第一个字符(不包括描述模式的"),a("code",[t._v("+,-")]),t._v(")为"),a("code",[t._v(":")]),t._v("。函数同样不输出错误信息，并且在设为有参数的选项没有参数时返回值变为"),a("code",[t._v(":")]),t._v("，从而可以区别出这种情况。")])]),t._v(" "),a("p",[t._v("getopt()返回值")]),t._v(" "),a("ul",[a("li",[t._v("如果所有的命令行选项都处理完了，则返回 -1.")]),t._v(" "),a("li",[t._v("如果遇到没在optstring中指定的字符，返回 ?")]),t._v(" "),a("li",[t._v("如果遇到选项丢失参数的情况，看optstring中的第一个字符，如果是"),a("code",[t._v(":")]),t._v(" 则返回 "),a("code",[t._v(":")]),t._v("，否则返回 ?")])]),t._v(" "),a("p",[a("code",[t._v("int getopt_long(int argc, char* const argv[], const char* optstring, const struct option* longopts, int* longindex)")])]),t._v(" "),a("p",[t._v("getopt_long(),getopt_long_only()")]),t._v(" "),a("ul",[a("li",[t._v("当识别到短选项时，也返回值")]),t._v(" "),a("li",[t._v("长选项，见flag注释。")]),t._v(" "),a("li",[t._v("Error和-1和getopt()一样")]),t._v(" "),a("li",[t._v("识别到模糊匹配和冗余参数会返回 ?")]),t._v(" "),a("li",[t._v("longindex为longopts的索引，如果不为NULL的话")])]),t._v(" "),a("h2",{attrs:{id:"readline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#readline"}},[t._v("#")]),t._v(" readline")]),t._v(" "),a("p",[a("code",[t._v("char* readline(const char* prompt)")]),a("br"),t._v('\nGNU的命令行编辑接口。readline会从终端读入一行并返回，其参数prompt为命令行开头的提示符(例如gdb中的"(gdb)")。其返回值不包括换行符，仅保留输入的文本。另外返回值使用malloc分配内存的，调用者需要手动free。')]),t._v(" "),a("h2",{attrs:{id:"str系列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#str系列"}},[t._v("#")]),t._v(" str系列")]),t._v(" "),a("p",[t._v("strtok")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("char *strtok(char *str, const char *delim)")]),t._v("： 使用了static buffer，不是线程安全的。")]),t._v(" "),a("li",[a("code",[t._v("char *strtok_r(char *str, const char *delim, char **saveptr)")]),t._v(": 多线程安全")]),t._v(" "),a("li",[t._v("这个函数用于将字符串分解为一系列非空token(子串)。第一次调用strtok时str是需要被分解的字符串，之后处理相同字符串时str必须为NULL。delim参数为用于分解的分隔符，可以指定多个字符为同一级分隔符。")]),t._v(" "),a("li",[t._v("strtok内部有一个指针，该指针决定了每个token的起点。第一次调用时指向str的第一个字符，第二次调用时指向第一个分割符后第一个不是分割符的字符，如果找不到这样的字符，strtok返回NULL。")]),t._v(" "),a("li",[t._v("每个token的终点为分隔符(会被替换为'\\0')或null('\\0')。")]),t._v(" "),a("li",[t._v("strtok的返回值要么是非空字符串，要么是NULL。(例如,'aaa;bbb'分隔符为';',顺序调用strtok的返回值为 'aaa', 'bbb', NULL)")])]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdlib.h>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<string.h>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" argc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("str1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("str2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("subtoken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("savaptr1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("saveptr2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("argc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fprintf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("stderr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Usage: %s string delim subdelim\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EXIT_FAILURE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" str1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" str1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("strtok_r")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("savaptr1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"saveptr1 %d %s\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" savaptr1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 剩余未处理的部分")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d: %s\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" str2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            subtoken "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("strtok_r")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("saveptr2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("subtoken "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" --\x3e %s\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" subtoken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EXIT_SUCCESS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br")])]),a("p",[a("code",[t._v("size_t strlen(const char *s)")]),t._v(":返回字符串的长度，即string中有多少byte。不包含'\\0'。\n"),a("code",[t._v("size_t strnlen(const char *s, size_t max)")]),t._v(":返回字符串的长度，但不会超过最大值。\n"),a("code",[t._v("int strcmp(const char *s1, const char *s2)")]),t._v(": 比较两个字符串是否相等。逐字符比较，如果第一个不相等的字符s1 < s2，则返回负值，反之返回正值。都相等则返回0。\n"),a("code",[t._v("int strncmp(const char *s1, const char *s2, size_t n)")]),t._v(":比较两个字符串是否相等，但只比前n个。\n"),a("code",[t._v("int strcoll(const char *s1, const char *s2)")]),t._v(":比较两个字符串是否相等，基于程序当前的locale设置解释的字符串,locale的值为环境变量LC_COLLATE。\n"),a("code",[t._v("char *strcpy(char *dest,const char *src)")]),t._v(": 复制字符串，包含最后的'\\0'。dest需要足够大。返回dest指针。\n"),a("code",[t._v("char *strncpy(char *dest,const char *src, size_t n)")]),t._v(":将src的前n个字符复制到dest。注意如果前n个字符中没有'\\0'，则dest也不会添加，导致dest没有正常的终止符。如果n>strlen(src)+1，剩下的字符会用'\\n'补全。\n"),a("code",[t._v("char *strcat(char *dest, const char *src)")]),t._v(": 将src(不包括'\\0')连接到dest后，dest的'\\0'会被覆盖，且会在整个字符串后添加一个'\\0'。dest要足够大。\n"),a("code",[t._v("char *strncat(char *dest, const char *src, size_t n)")]),t._v(":类似strcat。但最多使用src中的n个字符。另外，src可以没有'\\0'。")]),t._v(" "),a("h2",{attrs:{id:"scanf系列-printf系列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scanf系列-printf系列"}},[t._v("#")]),t._v(" scanf系列&printf系列")]),t._v(" "),a("p",[a("code",[t._v("int scanf(const char *format, ...)")]),a("br"),t._v(" "),a("code",[t._v("int fscanf(FILE *stream, const char *format, ...)")]),a("br"),t._v(" "),a("code",[t._v("int sscanf(const char *str, const char *format, ...)")])]),t._v(" "),a("p",[a("code",[t._v("int vscanf(const char *format, va_list ap)")]),t._v(" "),a("code",[t._v("int vfscanf(FILE *stream, const char *format, va_list ap)")]),t._v(" "),a("code",[t._v("int vsscanf(const char *str, const char *format, va_list ap)")])]),t._v(" "),a("p",[t._v("format可能包含转换规约(%m.nf)，转换的结果被储存在format后的指针中，指针的类型要可format中的转换规约一致。如果format中的%数量多于指针参数的数量，则结果未定义。反之，则多余的指针参数会被忽略。")]),t._v(" "),a("ul",[a("li",[t._v("scanf从stdin读取输入。")]),t._v(" "),a("li",[t._v("fscanf从指定的文件流stream中读取输入。")]),t._v(" "),a("li",[t._v("sscanf从字符串str中读取输入。")]),t._v(" "),a("li",[t._v("加v的读取变量参数列表(a variable arguemnt list)")])]),t._v(" "),a("p",[t._v("返回值")]),t._v(" "),a("ul",[a("li",[t._v("成功：返回匹配的转换数")]),t._v(" "),a("li",[t._v("失败：EOF")])]),t._v(" "),a("h3",{attrs:{id:"转换规约"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转换规约"}},[t._v("#")]),t._v(" 转换规约")]),t._v(" "),a("p",[t._v("格式："),a("code",[t._v("%#.#char")]),t._v(" 其中第一个#为maximum field width。即最多匹配|输出的字符数。.#表示保留的小数点位数。char为转换说明符。")]),t._v(" "),a("p",[t._v("输入")]),t._v(" "),a("ul",[a("li",[t._v("%: 匹配%。")]),t._v(" "),a("li",[t._v("d: 匹配有符号十进制整数，对应的指针类型必须为int*。")]),t._v(" "),a("li",[t._v("i: 匹配有符号整数，对应的指针类型必须为int*。用于scanf，如果输入的整数以0x开头，则以16进制读，以0开头，则以8进制读，否则以十进制读。")]),t._v(" "),a("li",[t._v("o: 匹配无符号八进制整数。对应的指针类型必须为unsigned int*。")]),t._v(" "),a("li",[t._v("u: 匹配无符号十进制整数。对应的指针类型必须为unsigned int*。")]),t._v(" "),a("li",[t._v("x|X: 匹配无符号十六进制整数。对应的指针类型必须为unsigned int*。")]),t._v(" "),a("li",[t._v("f | e | E | g | a: 匹配浮点数。对应的指针类型必须为float*。")]),t._v(" "),a("li",[t._v("s: 匹配一连串字符，到空白符或字符数组满了(要留一个位置给自动加上的'\\0')为止。对应的指针类型必须为char数组。")]),t._v(" "),a("li",[t._v("c: 匹配一个字符，不会加上'\\0'。对应的指针类型必须为char*。")]),t._v(" "),a("li",[t._v("[char set]: 匹配指定字符集中的字符。对应的指针类型必须为char*。特殊字符"),a("code",[t._v("]")]),t._v("，要匹配它，必须将它放在"),a("code",[t._v("[")]),t._v("后，要排除它，则需放在"),a("code",[t._v("^")]),t._v("后。 "),a("code",[t._v("-")]),t._v("必须放在字符集的开头或结尾。")]),t._v(" "),a("li",[t._v("p: 匹配指针。对应的指针类型必须为void**。")]),t._v(" "),a("li",[t._v("n: 没看懂")])]),t._v(" "),a("p",[t._v("指针类型修改符")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("h: 针对diouxXn,将指针类型改为short int 或 unsigned short int。")])]),t._v(" "),a("li",[a("p",[t._v("hh: signed char, unsigned char")])]),t._v(" "),a("li",[a("p",[t._v("j: intmax_t,uintmax_t")])]),t._v(" "),a("li",[a("p",[t._v("t: ptrdiff_t")])]),t._v(" "),a("li",[a("p",[t._v("z: size_t")])]),t._v(" "),a("li",[a("p",[t._v("l: signed long int, unsigned long int; 针对f,则指针类型变为double; 针对c,s，相关的指针类型被认为是wide charater?")])]),t._v(" "),a("li",[a("p",[t._v("L: signed long long int, unsigned long long int; long long double")])]),t._v(" "),a("li",[a("p",[t._v("m: %ms, %#mc 为输入字符串分配一块内存，指针类型改为char**。")])])]),t._v(" "),a("p",[t._v("输出\n// FLag characters")]),t._v(" "),a("ul",[a("li",[t._v("#: #o值以八进制显示。#x，十六进制，有0x。#[aAeEfFgG]，总是会显示小数点。")]),t._v(" "),a("li",[t._v("0: 不足的位在左边用0补足。如果指定了浮点数的精度，则被忽略。")]),t._v(" "),a("li",[t._v("-: 在maximum field width的左边界对齐。")]),t._v(" "),a("li",[t._v("' ': 空格。有符号正数最前面放一个空格。")]),t._v(" "),a("li",[t._v("+: 有符号正数前面加+。")])]),t._v(" "),a("p",[t._v("// Sing Unix Specification")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("': 十进制数以千为单位加逗号。")])]),t._v(" "),a("li",[a("p",[t._v("I: idu, 使用本地对应的字符输出。")])]),t._v(" "),a("li",[a("p",[t._v("d,i:十进制有符号")])]),t._v(" "),a("li",[a("p",[t._v("o,u,x,X")])]),t._v(" "),a("li",[a("p",[t._v("e,E: [-]d.ddde[+-]dd")])]),t._v(" "),a("li",[a("p",[t._v("f,F: 常见小数形式")])]),t._v(" "),a("li",[a("p",[t._v("g,G: 看情况转换为f,e,F,G中的一种")])]),t._v(" "),a("li",[a("p",[t._v("a,A: 十六进制的小数形式0xh.hhhp[+-]")])]),t._v(" "),a("li",[a("p",[t._v("c")])]),t._v(" "),a("li",[a("p",[t._v("s")])]),t._v(" "),a("li",[a("p",[t._v("p")])]),t._v(" "),a("li",[a("p",[t._v("n")])]),t._v(" "),a("li",[a("p",[t._v("%")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);