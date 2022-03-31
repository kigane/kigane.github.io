(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{560:function(a,t,s){"use strict";s.r(t);var n=s(1),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"import"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import"}},[a._v("#")]),a._v(" import")]),a._v(" "),s("h3",{attrs:{id:"module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#module"}},[a._v("#")]),a._v(" module")]),a._v(" "),s("ul",[s("li",[a._v("dir(): 无参数，查看全局命名空间的变量")]),a._v(" "),s("li",[a._v("dir(module): 查看指定模块的变量")]),a._v(" "),s("li",[a._v("一个.py文件可看作一个模块\n"),s("ul",[s("li",[a._v("import module (as alias) 引入module，可使用module命名空间及其内的变量")]),a._v(" "),s("li",[a._v("from module import var 将var从module中导入全局命名空间")])])])]),a._v(" "),s("h3",{attrs:{id:"package"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package"}},[a._v("#")]),a._v(" package")]),a._v(" "),s("ul",[s("li",[a._v("一个目录，包含目录和子模块。")]),a._v(" "),s("li",[a._v("创建一个package需要在目录下创建一个"),s("code",[a._v("__init__.py")])]),a._v(" "),s("li",[a._v("需要在"),s("code",[a._v("__init__.py")]),a._v("中引入子模块，否则import package时空有命名空间，而无内容")])]),a._v(" "),s("h3",{attrs:{id:"模块查找顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块查找顺序"}},[a._v("#")]),a._v(" 模块查找顺序")]),a._v(" "),s("ul",[s("li",[a._v("sys.module")]),a._v(" "),s("li",[a._v("python标准库")]),a._v(" "),s("li",[a._v("sys.path")])]),a._v(" "),s("h3",{attrs:{id:"相对导入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相对导入"}},[a._v("#")]),a._v(" 相对导入")]),a._v(" "),s("ul",[s("li",[s("code",[a._v(".")]),a._v("，当前目录, "),s("code",[a._v("..")]),a._v("上一级目录, "),s("code",[a._v("...")]),a._v("上上一级目录。")])]),a._v(" "),s("h3",{attrs:{id:"importlib-模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#importlib-模块"}},[a._v("#")]),a._v(" importlib 模块")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("import_module('module_name', package=__name__)")]),a._v(" 返回值即模块")]),a._v(" "),s("li",[a._v("package用于考虑相对导入")])]),a._v(" "),s("h2",{attrs:{id:"解包-自动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解包-自动"}},[a._v("#")]),a._v(" 解包(自动)")]),a._v(" "),s("ul",[s("li",[a._v("等号右边的序列可以直接解包为单个元素，只要在左边分配同样数量的变量。")]),a._v(" "),s("li",[a._v("数量必须相同，否则会报错")]),a._v(" "),s("li",[a._v("可以部分解包，即在等号左边某个变量前加"),s("code",[a._v("*")]),a._v("号，则其会接受所有为未分配的值，并形成一个数组。(序列元素数量必须多于分配的变量数)。例如 "),s("code",[a._v("a, *b, c = [1, 2, 3, 4, 5]")]),a._v("，则有"),s("code",[a._v("b=[2,3,4]")])])]),a._v(" "),s("h2",{attrs:{id:"函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[a._v("#")]),a._v(" 函数")]),a._v(" "),s("h3",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("def add(*args)")]),a._v(": 这里"),s("code",[a._v("*")]),a._v("作用是将所有剩下的未解析参数打包到一个元组中，赋给args。调用时可以用"),s("code",[a._v("*args")]),a._v("的到解包后的值。")]),a._v(" "),s("li",[s("code",[a._v("def init(**kwargs)")]),a._v(": 这里"),s("code",[a._v("**")]),a._v("作用是将所有剩下未解析的关键字参数打包成字典，赋给kwargs。")]),a._v(" "),s("li",[s("code",[a._v("def say(a, b, *, key=val...)")]),a._v(": 这里"),s("code",[a._v("*")]),a._v("是标识符，左边是位置参数，右边是关键字参数。")]),a._v(" "),s("li",[a._v("参数类型的声明顺序\n"),s("ul",[s("li",[a._v("必须参数")]),a._v(" "),s("li",[a._v("可选参数(提供默认值的参数)")]),a._v(" "),s("li",[s("code",[a._v("*args")])]),a._v(" "),s("li",[s("code",[a._v("**kwargs")])])])])]),a._v(" "),s("h3",{attrs:{id:"函数注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数注解"}},[a._v("#")]),a._v(" 函数注解")]),a._v(" "),s("ul",[s("li",[a._v("python中对参数类型(参数后的冒号部分)和返回值类型(函数括号后，行尾冒号前的"),s("code",[a._v("->xx")]),a._v("部分)的描述方法")]),a._v(" "),s("li",[s("code",[a._v("def prepend_rows(row:list, prefix:str) -> list:")])]),a._v(" "),s("li",[a._v("这些部分属于注解而非表达式，所以内容是无限制的。")])]),a._v(" "),s("h3",{attrs:{id:"lambda"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lambda"}},[a._v("#")]),a._v(" lambda")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("f = lambda x: x*x")])]),a._v(" "),s("li",[a._v("语法: "),s("code",[a._v("lambda params:body")]),a._v(", "),s("code",[a._v("lambda: body")])]),a._v(" "),s("li",[a._v("body必须是返回一个值的单个表达式")])]),a._v(" "),s("h2",{attrs:{id:"类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类"}},[a._v("#")]),a._v(" 类")]),a._v(" "),s("h3",{attrs:{id:"基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[a._v("#")]),a._v(" 基础")]),a._v(" "),s("ul",[s("li",[a._v("python类声明的主体是一个代码块，可以包含任何有效的python代码")]),a._v(" "),s("li",[a._v("在类声明中声明的变量会成为类对象的一个属性(即，类会创建一个新的命名空间记录这些变量)")]),a._v(" "),s("li",[a._v("super(Class, instance, ...) 使用instance的MRO，从Class位置开始向上找。")])]),a._v(" "),s("h3",{attrs:{id:"动态加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态加载"}},[a._v("#")]),a._v(" 动态加载")]),a._v(" "),s("ul",[s("li",[a._v("python所有的类都是type()的子类")]),a._v(" "),s("li",[a._v("type()用于实例化类的三部分信息:\n"),s("ul",[s("li",[a._v("类名称")]),a._v(" "),s("li",[a._v("基类")]),a._v(" "),s("li",[a._v("命名空间字典，在执行类的主体时被填充")])])]),a._v(" "),s("li",[a._v("type()称为元类")])]),a._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    spam "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'eggs'")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 等价于")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 第一个A是为了创建类， 第二个A是用于将类名绑定到命名空间，两者可以不同(实际用时也确实是不同的)")]),a._v("\nA "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'A'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'spam'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'eggs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("h4",{attrs:{id:"自定义元类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义元类"}},[a._v("#")]),a._v(" 自定义元类")]),a._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 通过继承type自定义元类")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SimpleMeta")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("def")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("__init__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("cls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" bases"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" attrs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("SimpleMeta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" cls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("__init__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" bases"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" attrs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 使用元类，效果是：python会自动将类定义传递给元类进行处理")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Example")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("metaclass"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("SimpleMeta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("pass")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 效果和标准类型一样")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("h3",{attrs:{id:"成员变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#成员变量"}},[a._v("#")]),a._v(" 成员变量")]),a._v(" "),s("ul",[s("li",[a._v("getattr() 用名称检索成员变量 访问类中不存在的成员变量时会触发"),s("code",[a._v("__getattr__")]),a._v("(d['attr'])")]),a._v(" "),s("li",[a._v("setattr() 用名称设置成员变量 设置类成员时触发"),s("code",[a._v("__setattr__")]),a._v("(d.attr = 'attr')")]),a._v(" "),s("li",[a._v("delattr() 用名称删除成员变量 删除类成员时触发"),s("code",[a._v("__delattr__")]),a._v("(del d.attr)")]),a._v(" "),s("li",[s("code",[a._v("__str__")]),a._v(" toString方法")]),a._v(" "),s("li",[s("code",[a._v("__repr__")]),a._v(" 在解释器中单独引用对象时触发")])]),a._v(" "),s("h2",{attrs:{id:"打包到pip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包到pip"}},[a._v("#")]),a._v(" 打包到pip")]),a._v(" "),s("ul",[s("li",[a._v("新建文件夹")]),a._v(" "),s("li",[a._v("将package放进去(包含__init__.py)")]),a._v(" "),s("li",[a._v("在根目录新建setup.py")]),a._v(" "),s("li",[a._v("在根目录执行\n"),s("ul",[s("li",[a._v("python setup.py bdist_wheel 打包成wheel")]),a._v(" "),s("li",[a._v("python setup.py sdist 打包成tar")])])]),a._v(" "),s("li",[a._v("在打包好的文件目录下pip install 打包好的文件名")]),a._v(" "),s("li",[a._v("pip uninstall setup.name 即可卸载")])]),a._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" setuptools "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" setup\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" setuptools "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" find_packages\n\nsetup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'MySheet'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      version"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'0.1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      author"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'hwk'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      author_email"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'abc@fg.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      url"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'https://hello.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      packages"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("find_packages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      zip_safe"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("h2",{attrs:{id:"anaconda"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#anaconda"}},[a._v("#")]),a._v(" anaconda")]),a._v(" "),s("h3",{attrs:{id:"常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[a._v("#")]),a._v(" 常用命令")]),a._v(" "),s("ul",[s("li",[a._v("conda list: 查看安装了哪些包。")]),a._v(" "),s("li",[a._v("conda env list: 查看当前存在哪些虚拟环境")]),a._v(" "),s("li",[a._v("conda create -n your_env_name python=X.X: 创建python版本为X.X、名字为your_env_name的虚拟环境。your_env_name文件可以在Anaconda安装目录envs文件夹下找到。")]),a._v(" "),s("li",[a._v("activate your_env_name: Windows下激活虚拟环境")]),a._v(" "),s("li",[a._v("deactivate 退出")]),a._v(" "),s("li",[a._v("Linux下，激活，退出都在开头加一个source")]),a._v(" "),s("li",[a._v("conda remove -n your_env_name --all: 移除虚拟环境")]),a._v(" "),s("li",[a._v("conda install package_name: 在当前环境中安装包")]),a._v(" "),s("li",[a._v("conda install -n your_env_name package_name: 在指定环境中安装包")]),a._v(" "),s("li",[a._v("update, remove语法和install相同")]),a._v(" "),s("li",[a._v("conda search pname: 模糊搜索package")]),a._v(" "),s("li",[a._v("conda search --full-name pname: 全名查找")]),a._v(" "),s("li",[a._v("conda env export > environment.yml: 导出环境配置")]),a._v(" "),s("li",[a._v("conda env create -f environment.yml: 导入环境配置")])]),a._v(" "),s("h2",{attrs:{id:"tqdm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tqdm"}},[a._v("#")]),a._v(" tqdm")]),a._v(" "),s("p",[a._v("用在被遍历的可迭代对象上，自动产生进度条。")]),a._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" tqdm "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" tqdm\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" tqdm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("notebook "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" tqdm_notebook\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" time\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" tqdm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" desc"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Process Bar'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" postfix"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Postfix loss=xx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sleep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);