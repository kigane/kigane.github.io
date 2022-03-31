(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{566:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"qtdesigner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qtdesigner"}},[t._v("#")]),t._v(" QtDesigner")]),t._v(" "),a("ul",[a("li",[t._v("设计界面，产生一个xxx.ui文件")]),t._v(" "),a("li",[a("code",[t._v("pyuic5 -x -o yyy.py xxx.ui")]),t._v(" "),a("ul",[a("li",[t._v("-o后面为输出文件名")]),t._v(" "),a("li",[t._v("-x表示在py文件中生成测试代码")])])])]),t._v(" "),a("h2",{attrs:{id:"正确使用ui文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正确使用ui文件"}},[t._v("#")]),t._v(" 正确使用ui文件")]),t._v(" "),a("ul",[a("li",[t._v("使用类继承，而非直接在生成的py文件上修改。")]),t._v(" "),a("li",[t._v("或直接用uic模块得到需要的类")])]),t._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"编译后导入"}},[a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 引入生成的类")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" ui"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("login "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Ui_Form\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" PyQt5 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" QtWidgets "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" qtw\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 通过继承取得类属性")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoginWindow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("qtw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("QWidget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Ui_Form"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LoginWindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__init__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 调用类中定义的方法，准备好 ui")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setupUi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])])]),t._v(" "),a("CodeGroupItem",{attrs:{title:"使用uic模块"}},[a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" PyQt5 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" uic\nUi_Form"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" BaseClass "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" uic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loadUiType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'login.ui'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 通过继承取得类属性")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoginWindow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BaseClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Ui_Form"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LoginWindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__init__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 调用类中定义的方法，准备好 ui")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setupUi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])])])],1),t._v(" "),a("p",[t._v("注意到，生成的py文件中，UI类是object的子类，而非QWiget的子类。这是出于在大型项目中，经常会修改界面的考虑，通过提供setupUi方法实现界面外观，易于修改(Mixin)。但缺点是继承后，不能直观地看到有哪些属性，属性的类型也被隐藏了，编程会变得不方便。")]),t._v(" "),a("h2",{attrs:{id:"基本的qt程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本的qt程序"}},[t._v("#")]),t._v(" 基本的Qt程序")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sys\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" PyQt5 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" QtWidgets "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" qtw\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" PyQt5 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" QtCore "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" qtc\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" PyQt5 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" QtGui "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" qtg\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MainWindow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("qtw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("QWidget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__init__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Your code will go here")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Your code ends here")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("show"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__main__'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 接受命令行参数")]),t._v("\n    app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" qtw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("QApplication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    w "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MainWindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 给程序一个退出状态")]),t._v("\n    sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exec_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br")])]),a("h2",{attrs:{id:"基本布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本布局"}},[t._v("#")]),t._v(" 基本布局")]),t._v(" "),a("ul",[a("li",[t._v("qtw.QHBoxLayout()\n"),a("ul",[a("li",[t._v("layout.addWidget(widget)")]),t._v(" "),a("li",[t._v("所有组件横着放")])])]),t._v(" "),a("li",[t._v("qtw.VHBoxLayout()\n"),a("ul",[a("li",[t._v("layout.addWidget(widget)")]),t._v(" "),a("li",[t._v("所有组件竖着放")])])]),t._v(" "),a("li",[t._v("qtw.GridLayout()\n"),a("ul",[a("li",[t._v("layout.addWidget(widget, row, col)")]),t._v(" "),a("li",[t._v("把组件放入相应网格中")])])]),t._v(" "),a("li",[t._v("qtw.FormLayout()\n"),a("ul",[a("li",[t._v("layout.addRow('widget_label', widget)")]),t._v(" "),a("li",[t._v("会产生适合不同平台的表格")]),t._v(" "),a("li",[t._v("要构造表格组件时，推荐用该布局")])])]),t._v(" "),a("li",[t._v("布局可以嵌套，即上面的widget也可以是layout。")]),t._v(" "),a("li",[t._v("也可以用一个QWidget作为布局组件\n"),a("ul",[a("li",[t._v("w.setLayout(qtw.QHBoxLayout())")]),t._v(" "),a("li",[t._v("w.layout().addWidget(widget)")])])])]),t._v(" "),a("h2",{attrs:{id:"signal-slot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signal-slot"}},[t._v("#")]),t._v(" Signal & Slot")]),t._v(" "),a("h3",{attrs:{id:"基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),a("p",[t._v("signal是Qt组件的属性，可以和slot连接，当signal触发时，执行slot。slot可以是任何python callable。")]),t._v(" "),a("p",[t._v("Qt组件有一些定义好的signal和slot。具体看文档。定义好的信号，可以在组件的构造函数中用关键词参数指定，效果和手动连接相同，写法更简单。")]),t._v(" "),a("h3",{attrs:{id:"signal可以携带数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signal可以携带数据"}},[t._v("#")]),t._v(" signal可以携带数据")]),t._v(" "),a("ul",[a("li",[t._v("例如textChanged signal连接的slot的第一个参数是当前文本。")]),t._v(" "),a("li",[t._v("如果信号携带了数据，可用装饰器"),a("code",[t._v("@qtc.pyqtSlot(str)")]),t._v("声明，这会提升一点速度，用于多线程时更安全，此外可以让你确定参数类型，如果在装饰器中声明的参数类型和信号实际携带的类型不符，则会报错。")])]),t._v(" "),a("h3",{attrs:{id:"自定义signal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义signal"}},[t._v("#")]),t._v(" 自定义signal")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("my_signal "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" qtc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pyqtSignal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 携带一个字符串参数的信号")]),t._v("\nmy_signal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("emit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'some content'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在某个地方触发信号，并传入数据")]),t._v("\nmy_signal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("some_callable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 连接信号与槽")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("some_callable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("自定义信号+携带数据=不同窗口之间传递数据")]),t._v(" "),a("h2",{attrs:{id:"qwidget"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qwidget"}},[t._v("#")]),t._v(" QWidget")]),t._v(" "),a("h3",{attrs:{id:"signals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signals"}},[t._v("#")]),t._v(" signals")]),t._v(" "),a("ul",[a("li",[t._v("customContextMenuRequested(QPoint)")]),t._v(" "),a("li",[t._v("windowIconChanged(QIcon)")]),t._v(" "),a("li",[t._v("windowTitleChanged(QString)")])]),t._v(" "),a("h3",{attrs:{id:"slots"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slots"}},[t._v("#")]),t._v(" slots")]),t._v(" "),a("ul",[a("li",[t._v("close()")]),t._v(" "),a("li",[t._v("hide() == setVisible(false)")]),t._v(" "),a("li",[t._v("lower() 将Widget放到父Widget堆栈的底部")]),t._v(" "),a("li",[t._v("raise() 将Widget放到父Widget堆栈的顶部")]),t._v(" "),a("li",[t._v("repaint() 可能会导致无限递归。除了做动画，其他情况update()更好。")]),t._v(" "),a("li",[t._v("setDisabled(bool) 禁止输入")]),t._v(" "),a("li",[t._v("setEnabled(bool)")]),t._v(" "),a("li",[t._v("setFocus() 获得焦点")]),t._v(" "),a("li",[t._v("setHidden(bool) =  setVisible(!bool).")]),t._v(" "),a("li",[t._v("setStyleSheet(QString)")]),t._v(" "),a("li",[t._v("setVisible(bool)")]),t._v(" "),a("li",[t._v("setWindowModified(bool) 设置窗口有没有未保存的变化")]),t._v(" "),a("li",[t._v("setWindowTitle(QString)")]),t._v(" "),a("li",[t._v("show()")]),t._v(" "),a("li",[t._v("showFullScreen()")]),t._v(" "),a("li",[t._v("showMaximized()")]),t._v(" "),a("li",[t._v("showMinimized()")]),t._v(" "),a("li",[t._v("showNormal()")]),t._v(" "),a("li",[t._v("update()")]),t._v(" "),a("li",[t._v("adjustSize() 调整到初始设定的大小")])]),t._v(" "),a("h2",{attrs:{id:"qmainwindow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qmainwindow"}},[t._v("#")]),t._v(" QMainWindow")]),t._v(" "),a("ul",[a("li",[t._v("Central Widget\n"),a("ul",[a("li",[t._v("选择一个组件")])])]),t._v(" "),a("li",[t._v("MenuBar\n"),a("ul",[a("li",[t._v("QMenuBar(): menu = self.menuBar()")]),t._v(" "),a("li",[t._v("QMenu('name'): file_menu = menu.addMenu('File')")]),t._v(" "),a("li",[t._v("QAction('name', callable, shortcut): save_act = file_menu.addAction('Save', self.save)\n"),a("ul",[a("li",[t._v("第二个参数triggered=xx,设置和triggered信号绑定的槽")]),t._v(" "),a("li",[t._v("第三个参数shortcut=xx,设置快捷键，预定义在qtg.QKeySequence中，或直接用字符串'Ctrl+t'")]),t._v(" "),a("li",[t._v("enabled=bool 初始是否可用")]),t._v(" "),a("li",[t._v("checkable=bool 是否可打√")]),t._v(" "),a("li",[t._v("act.setEnabled()")]),t._v(" "),a("li",[t._v("act.isChecked()")])])])])]),t._v(" "),a("li",[t._v("StatusBar\n"),a("ul",[a("li",[t._v("self.statusBar().showMessage(msg, last_time)")]),t._v(" "),a("li",[t._v("last_time单位ms")])])]),t._v(" "),a("li",[t._v("ToolBar\n"),a("ul",[a("li",[t._v("edit_toolbar = self.addToolBar('Edit') 增加一个工具栏")]),t._v(" "),a("li",[t._v("edit_toolbar.addAction(qtg.QIcon(qtg.QPixmap('action.svg')), 'action_name', callable)")]),t._v(" "),a("li",[t._v("edit_toolbar.addAction('copy', self.textedit.copy)")]),t._v(" "),a("li",[t._v("有图标的时候不显示文字，只有未设置图标或图标缺失时显示文字")])])]),t._v(" "),a("li",[t._v("Dockable widget\n"),a("ul",[a("li",[t._v("search_dock = qtw.QDockWidget('Search')")]),t._v(" "),a("li",[t._v("self.addDockWidget(qtc.Qt.RightDockWidgetArea,search_dock) 添加到主窗口并设置停靠位置")]),t._v(" "),a("li",[t._v("search_dock.setFeatures(\nqtw.QDockWidget.DockWidgetClosable |\nqtw.QDockWidget.DockWidgetMovable |\nqtw.QDockWidget.DockWidgetFloatable\n) 设置特性")]),t._v(" "),a("li",[t._v("search_dock.setWidget(widget) 在停靠窗口中添加自定义组件")])])])]),t._v(" "),a("h2",{attrs:{id:"图片和图标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片和图标"}},[t._v("#")]),t._v(" 图片和图标")]),t._v(" "),a("h3",{attrs:{id:"qpixmap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qpixmap"}},[t._v("#")]),t._v(" QPixmap")]),t._v(" "),a("p",[t._v("用于在屏幕上展示图像")]),t._v(" "),a("ul",[a("li",[t._v("size()-> QSize, width(), height(), rect()->QRect(x,y,w,h):左上+宽高")]),t._v(" "),a("li",[t._v("hasAlphaChannel()")]),t._v(" "),a("li",[t._v("depth()->bits per pixel,bpp")]),t._v(" "),a("li",[t._v("toImage() -> QImage")]),t._v(" "),a("li",[t._v("fromImage()")]),t._v(" "),a("li",[t._v("copy(), scaled(size, aspect_ratio_mode), scaledToWidth(), scaledToHeight()")]),t._v(" "),a("li",[t._v("transformed(QTransform, mode)\n"),a("ul",[a("li",[t._v("Qtransfrom(m11, m12, m21, m22, dx=0, dy=0)")]),t._v(" "),a("li",[t._v("mode有两个，默认的0是快速变换，1是使用了双线性插值的变换")])])]),t._v(" "),a("li",[t._v("scroll(dx,dy,(x,y,w,h)) 复制图像的部分并移动dx,dy。原图仍在，并会被遮挡。")])]),t._v(" "),a("h3",{attrs:{id:"qbitmap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qbitmap"}},[t._v("#")]),t._v(" QBitmap")]),t._v(" "),a("p",[t._v("单bit特化的QPixmap")]),t._v(" "),a("h3",{attrs:{id:"qimage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qimage"}},[t._v("#")]),t._v(" QImage")]),t._v(" "),a("p",[t._v("对I/O有和像素级处理有优化。")]),t._v(" "),a("ul",[a("li",[t._v("读写\n"),a("ul",[a("li",[t._v("构造函数")]),t._v(" "),a("li",[t._v("load()")]),t._v(" "),a("li",[t._v("loadFromData()")]),t._v(" "),a("li",[t._v("static fromData()")]),t._v(" "),a("li",[t._v("save()")])])]),t._v(" "),a("li",[t._v("几何信息\n"),a("ul",[a("li",[t._v("size(), width(), height(), dotsPerMeterX(), dotsPerMeterY(), rect()")]),t._v(" "),a("li",[t._v("valid() 判断给定坐标是否在图像rect范围内")]),t._v(" "),a("li",[t._v("offset(), setOffset() 通过相对于其他图像定位时，设置图像相对于其他图像偏移的像素数。")])])]),t._v(" "),a("li",[t._v("颜色\n"),a("ul",[a("li",[t._v("pixel(pos) 返回某像素点的QRgb值")]),t._v(" "),a("li",[t._v("pixelIndex(pos) + color() = pixel(pos)")]),t._v(" "),a("li",[t._v("colorCount(), colorTable() 图像用到的颜色列表")]),t._v(" "),a("li",[t._v("isGrayscale()")])])]),t._v(" "),a("li",[t._v("文本\n"),a("ul",[a("li",[t._v("text(key)")]),t._v(" "),a("li",[t._v("setText(key, text)")]),t._v(" "),a("li",[t._v("textKeys() 获取图像的text key")])])]),t._v(" "),a("li",[t._v("低级信息\n"),a("ul",[a("li",[t._v("depth() 每像素占用比特数")]),t._v(" "),a("li",[t._v("bitPlaneCount() 每像素实际使用的比特数")]),t._v(" "),a("li",[t._v("format()")]),t._v(" "),a("li",[t._v("bytesPerLine()")]),t._v(" "),a("li",[t._v("sizeInBytes()")])])])]),t._v(" "),a("p",[t._v("用numpy的2d数组构造QImage")]),t._v(" "),a("ul",[a("li",[t._v("numpy数组必须是np.uint8类型")]),t._v(" "),a("li",[t._v("QImage构造时需要指定为相应类型如QImage.Format_RGB888")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("img "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zeros"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dtype"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uint8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nimg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("233")]),t._v("\nw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" h "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nimage "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" QImage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" QImage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Format_RGB888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"qpicture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qpicture"}},[t._v("#")]),t._v(" QPicture")]),t._v(" "),a("p",[t._v("一种绘制设备，可记录和重放QPainter命令")]),t._v(" "),a("h3",{attrs:{id:"qicon-qpixmap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qicon-qpixmap"}},[t._v("#")]),t._v(" QIcon(QPixmap)")]),t._v(" "),a("p",[t._v("图标")]),t._v(" "),a("h2",{attrs:{id:"文件位置处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件位置处理"}},[t._v("#")]),t._v(" 文件位置处理")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\nBASE_DIR "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__file__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nimg_path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BASE_DIR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"qss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qss"}},[t._v("#")]),t._v(" QSS")])],1)}),[],!1,null,null,null);s.default=e.exports}}]);