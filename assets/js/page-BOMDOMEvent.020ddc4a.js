(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{582:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"bom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bom"}},[t._v("#")]),t._v(" BOM")]),t._v(" "),s("ul",[s("li",[t._v("window\n"),s("ul",[s("li",[t._v("window对象是JS的全局对象，所有全局作用域的变量和函数，都会变成window对象的属性和方法。")]),t._v(" "),s("li",[t._v("全局变量和定义在window对象上的属性间的唯一差别是，全局变量不能delete，而window对象上的属性可以。")]),t._v(" "),s("li",[t._v("访问未声明的全局变量会抛出错误，而访问未声明的window对象属性会返回undefined。")]),t._v(" "),s("li",[t._v("页面中每个frame都有自己的window对象，每个window对象都有一个name属性，"),s("code",[t._v("window.frames[name]")]),t._v("可以访问指定frame")]),t._v(" "),s("li",[t._v("window.top对象始终指向最外层的frame，即浏览器窗口。")]),t._v(" "),s("li",[t._v("window.parent指向外层的frame")]),t._v(" "),s("li",[t._v("window.self === window")]),t._v(" "),s("li",[t._v("window.open(url, windowOrFrameName, features, replaceInHistory) 在windowOrFrameName上打开新的url，如果windowOrFrameName不存在，用指定的features创建新窗口。被open的窗口的window.opener指向原窗口，原窗口对被open的窗口一无所知。")]),t._v(" "),s("li",[t._v("对话框：alert, confirm, prompt")])])]),t._v(" "),s("li",[t._v("location\n"),s("ul",[s("li",[t._v("window.location === document.location")]),t._v(" "),s("li",[t._v("location.href 完整的url。")]),t._v(" "),s("li",[t._v("location.host hostname:port")]),t._v(" "),s("li",[t._v("location.hostname")]),t._v(" "),s("li",[t._v("location.port")]),t._v(" "),s("li",[t._v("location.pathname")]),t._v(" "),s("li",[t._v("location.search 以?开头的查询字符串")]),t._v(" "),s("li",[t._v("location.hash url中#+后面部分。除了该属性，修改其他属性都会导致浏览器重新加载。")]),t._v(" "),s("li",[t._v("location.replace(url) 加载新url，原url不会添加到历史记录中。")]),t._v(" "),s("li",[t._v("location.reload(bImpose) 重新加载(false: 可能从缓存中加载，true: 从服务器重新加载)")])])]),t._v(" "),s("li",[t._v("navigator\n"),s("ul",[s("li",[t._v("navigator.cookieEnabled")]),t._v(" "),s("li",[t._v('navigator.userAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36 Edg/93.0.961.38"')])])]),t._v(" "),s("li",[t._v("history\n"),s("ul",[s("li",[t._v("history.back() 回退一页")]),t._v(" "),s("li",[t._v("history.forward() 前进一页")]),t._v(" "),s("li",[t._v("history.go(num) num>0时前进，反之后退。")])])])]),t._v(" "),s("h3",{attrs:{id:"间歇调用和超时调用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#间歇调用和超时调用"}},[t._v("#")]),t._v(" 间歇调用和超时调用")]),t._v(" "),s("ul",[s("li",[t._v("setTimeout(CallBackFn, time-ms) 经过time-ms后将当前任务添加到任务队列中。如果队列为空，则立即执行，否则，等待。")]),t._v(" "),s("li",[t._v("setInterval(CallBackFn, time-ms)")]),t._v(" "),s("li",[t._v("两个函数都会返回一个id标识符，可以调用相应的clearTimeout(id), clearInterval(id)取消调用。")]),t._v(" "),s("li",[t._v("两个函数都是在全局作用域中执行的。无论在哪里调用。")]),t._v(" "),s("li",[t._v("通常很少用setInterval，因为后一个间歇调用可能会在前一个间歇调用结束前启动。")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" max "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("incrementNum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    num"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" max"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("incrementNum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Done"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("incrementNum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 相当于setInterval(incrementNum, 500)")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])]),s("h2",{attrs:{id:"event"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event"}},[t._v("#")]),t._v(" Event")]),t._v(" "),s("h3",{attrs:{id:"事件流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件流"}},[t._v("#")]),t._v(" 事件流")]),t._v(" "),s("p",[t._v("事件流描述的是从页面接受事件的顺序。")]),t._v(" "),s("ul",[s("li",[t._v("事件冒泡：事件开始时由嵌套最深的元素接收，然后逐级向上传播。")]),t._v(" "),s("li",[t._v("事件捕获：事件开始时由window对象接收，然后逐级向下传播到嵌套最深的元素。")]),t._v(" "),s("li",[t._v("DOM2级事件：规定事件流包括三个阶段\n"),s("ul",[s("li",[t._v("事件捕获阶段 1")]),t._v(" "),s("li",[t._v("处于目标阶段 2")]),t._v(" "),s("li",[t._v("事件冒泡阶段 3")])])])]),t._v(" "),s("h3",{attrs:{id:"事件处理程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件处理程序"}},[t._v("#")]),t._v(" 事件处理程序")]),t._v(" "),s("p",[t._v("即响应某个事件的函数。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Button"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Click Me"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onclick")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value javascript language-javascript"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("这里showMessage为事件处理程序调用的函数。在该函数内部，this为事件的目标元素(本例中为input)。")]),t._v(" "),s("li",[t._v("在这个函数作用域内，可以像访问局部变量一样访问document和元素本身的成员。如果当前元素是一个表单元素(在form内)，则作用域中还会包含form元素。")]),t._v(" "),s("li",[t._v("在html中指定事件处理程序可能会有时差问题，即html元素渲染好了，但showMessage函数还不可用，即JS还没执行到。")]),t._v(" "),s("li",[t._v("DOM0级事件处理程序：用JS选中DOM对象中的指定元素，再将一个函数赋给事件处理程序(例如，el.onclick)。")]),t._v(" "),s("li",[t._v("DOM2级事件处理程序：使用\n"),s("ul",[s("li",[t._v("addEventListener(eventName, EventCallBackFn, isCapture)")]),t._v(" "),s("li",[t._v("removeEventListener(eventName, EventCallBackFn, isCapture)")]),t._v(" "),s("li",[t._v("isCapture为true，表示在捕获阶段处理事件，为false表示在冒泡阶段处理事件。")]),t._v(" "),s("li",[t._v("remove时的参数必须和add时的参数一模一样。如果add时使用的是匿名函数，则无法remove。")]),t._v(" "),s("li",[t._v("这种方式可以为同一个事件设置多个处理函数。按照添加顺序触发。")])])])]),t._v(" "),s("h3",{attrs:{id:"事件对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件对象"}},[t._v("#")]),t._v(" 事件对象")]),t._v(" "),s("p",[t._v("浏览器会将event对象传入事件处理程序中。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性/方法")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("只读")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("type")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Y")]),t._v(" "),s("td",[t._v("事件的类型")])]),t._v(" "),s("tr",[s("td",[t._v("target")]),t._v(" "),s("td",[t._v("Element")]),t._v(" "),s("td",[t._v("Y")]),t._v(" "),s("td",[t._v("事件的目标。(最上层元素？)")])]),t._v(" "),s("tr",[s("td",[t._v("currentTarget")]),t._v(" "),s("td",[t._v("Element")]),t._v(" "),s("td",[t._v("Y")]),t._v(" "),s("td",[t._v("当前正在处理事件的元素。事件处理程序中的this。")])]),t._v(" "),s("tr",[s("td",[t._v("eventPhase")]),t._v(" "),s("td",[t._v("Integer")]),t._v(" "),s("td",[t._v("Y")]),t._v(" "),s("td",[t._v("表明事件处理程序的阶段")])]),t._v(" "),s("tr",[s("td",[t._v("bubbles")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("Y")]),t._v(" "),s("td",[t._v("表明事件是否冒泡")])]),t._v(" "),s("tr",[s("td",[t._v("detail")]),t._v(" "),s("td",[t._v("Integer")]),t._v(" "),s("td",[t._v("Y")]),t._v(" "),s("td",[t._v("事件相关细节信息")])]),t._v(" "),s("tr",[s("td",[t._v("cancelable")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("Y")]),t._v(" "),s("td",[t._v("表明是否可以取消事件的默认行为")])]),t._v(" "),s("tr",[s("td",[t._v("preventDefault()")]),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[t._v("Y")]),t._v(" "),s("td",[t._v("如果cancelable为true，取消事件的默认行为。")])]),t._v(" "),s("tr",[s("td",[t._v("defaultPrevented")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("Y")]),t._v(" "),s("td",[t._v("为true，说明已经调用了preventDefault()")])]),t._v(" "),s("tr",[s("td",[t._v("stopImmediatePropagation()")]),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[t._v("Y")]),t._v(" "),s("td",[t._v("取消事件进一步捕获或冒泡，同时阻止任何事件被调用。")])]),t._v(" "),s("tr",[s("td",[t._v("stopPropagation()")]),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[t._v("Y")]),t._v(" "),s("td",[t._v("如果bubbles为true，取消事件进一步捕获或冒泡。")])]),t._v(" "),s("tr",[s("td",[t._v("trusted")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("Y")]),t._v(" "),s("td",[t._v("为true表明是浏览器生成的，为false表示由JS生成的")])])])]),t._v(" "),s("h3",{attrs:{id:"事件类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件类型"}},[t._v("#")]),t._v(" 事件类型")]),t._v(" "),s("h4",{attrs:{id:"ui事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ui事件"}},[t._v("#")]),t._v(" UI事件")]),t._v(" "),s("ul",[s("li",[t._v("load\n"),s("ul",[s("li",[t._v("当页面完全加载后（包括所有图像、JavaScript文件、CSS文件等外部资源），就会触发window上面的load事件。")]),t._v(" "),s("li",[t._v('EventUtil.addHandler(window, "load", function(e) {...})。建议使用。')]),t._v(" "),s("li",[t._v("或在body元素中添加onload属性。")]),t._v(" "),s("li",[t._v("img元素也有load事件，在图片加载完成时触发。")])])]),t._v(" "),s("li",[t._v("unload：在文档被完全卸载后触发。只要用户从一个页面切换到另一个页面，就会发生unload事件。而利用这个事件最多的情况是清除引用，以避免内存泄漏。")]),t._v(" "),s("li",[t._v("select：当用户选择文本框（"),s("code",[t._v("<input>")]),t._v("或"),s("code",[t._v("<texterea>")]),t._v("）中的一或多个字符时触发。")]),t._v(" "),s("li",[t._v("resize：当窗口或框架的大小变化时在window或框架上面触发。")]),t._v(" "),s("li",[t._v("scroll：当用户滚动带滚动条的元素中的内容时，在该元素上面触发。")]),t._v(" "),s("li",[t._v("resize和scroll触发频率很高。注意代码的简洁。")])]),t._v(" "),s("h4",{attrs:{id:"焦点事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#焦点事件"}},[t._v("#")]),t._v(" 焦点事件")]),t._v(" "),s("ul",[s("li",[t._v("blur：在元素失去焦点时触发。这个事件不会冒泡。")]),t._v(" "),s("li",[t._v("focus：在元素获得焦点时触发。不冒泡")]),t._v(" "),s("li",[t._v("focusin：冒泡版focus")]),t._v(" "),s("li",[t._v("focusout：冒泡版blur")])]),t._v(" "),s("h4",{attrs:{id:"鼠标和滚轮事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#鼠标和滚轮事件"}},[t._v("#")]),t._v(" 鼠标和滚轮事件")]),t._v(" "),s("ul",[s("li",[t._v("click：在用户单击主鼠标按钮或者按下回车键时触发。")]),t._v(" "),s("li",[t._v("dblclick：在用户双击主鼠标按钮时触发。")]),t._v(" "),s("li",[t._v("mousedown：在用户按下了任意鼠标按钮时触发。不能通过键盘触发这个事件。")]),t._v(" "),s("li",[t._v("mouseup：在用户释放鼠标按钮时触发。\n"),s("ul",[s("li",[t._v("event.button:0表示主鼠标按钮，1表示中间的鼠标滚轮按钮,2表示次鼠标按钮。")])])]),t._v(" "),s("li",[t._v("mousemove：当鼠标指针在元素内部移动时重复地触发。不能通过键盘触发这个事件。")]),t._v(" "),s("li",[t._v("mouseout：在鼠标指针位于一个元素上方，然后用户将其移入另一个元素时触发。从A元素移动到B元素上，会触发A的mouseout，B的mouseover，A的relatedTarget是B，B的relatedTarget是A。")]),t._v(" "),s("li",[t._v("mouseover：在鼠标指针位于一个元素外部，然后用户将其首次移入另一个元素边界之内时触发。")]),t._v(" "),s("li",[t._v("事件触发顺序：mousedown->mouseup->click->mousedown->mouseup->click->dbclick")]),t._v(" "),s("li",[t._v("mousewheel：滚动鼠标滚轮时触发。与mousewheel事件对应的event对象除包含鼠标事件的所有标准信息外，还包含一个特殊的wheelDelta属性。当用户向前滚动鼠标滚轮时，wheelDelta是120的倍数；当用户向后滚动鼠标滚轮时，wheelDelta是-120的倍数。")])]),t._v(" "),s("hr"),t._v(" "),s("ul",[s("li",[t._v("视口坐标位置：事件对象的clientX和clientY属性，表示事件发生时鼠标指针在视口中的水平和垂直坐标。")]),t._v(" "),s("li",[t._v("页面坐标位置：事件对象的pageX和pageY属性，能告诉你事件是在页面中的什么位置发生的。")]),t._v(" "),s("li",[t._v("屏幕坐标位置：事件对象的screenX和screenY属性，表示事件发生时鼠标指针相对于整个屏幕的水平和垂直坐标。")]),t._v(" "),s("li",[t._v("修饰键：事件对象的shiftKey、ctrlKey、altKey和metaKey属性，如果相应的键被按下了，则值为true。")])]),t._v(" "),s("h4",{attrs:{id:"键盘和文本事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#键盘和文本事件"}},[t._v("#")]),t._v(" 键盘和文本事件")]),t._v(" "),s("ul",[s("li",[t._v("keydown：当用户按下键盘上的任意键时触发，而且如果按住不放的话，会重复触发此事件。")]),t._v(" "),s("li",[t._v("keypress：当用户按下键盘上的字符键时触发，而且如果按住不放的话，会重复触发此事件。按下Esc键也会触发这个事件。")]),t._v(" "),s("li",[t._v("keyup：当用户释放键盘上的键时触发。")]),t._v(" "),s("li",[t._v("textInput：这个事件是对keypress的补充，用意是在将文本显示给用户之前更容易拦截文本。在文本插入文本框之前会触发textInput事件。\n"),s("ul",[s("li",[t._v("任何可以获得焦点的元素都可以触发keypress事件，但只有可编辑区域才能触发textInput事件。")]),t._v(" "),s("li",[t._v("textInput事件只会在用户按下能够输入实际字符的键时才会被触发，而keypress事件则在按下那些能够影响文本显示的键时也会触发（例如退格键）。")]),t._v(" "),s("li",[t._v("event.inputMethod\n"),s("ul",[s("li",[t._v("0，表示浏览器不确定是怎么输入的。")]),t._v(" "),s("li",[t._v("1，表示是使用键盘输入的。")]),t._v(" "),s("li",[t._v("2，表示文本是粘贴进来的。")]),t._v(" "),s("li",[t._v("3，表示文本是拖放进来的。")]),t._v(" "),s("li",[t._v("4，表示文本是使用IME输入的。")]),t._v(" "),s("li",[t._v("5，表示文本是通过在表单中选择某一项输入的。")]),t._v(" "),s("li",[t._v("6，表示文本是通过手写输入的（比如使用手写笔）。")]),t._v(" "),s("li",[t._v("7，表示文本是通过语音输入的。")]),t._v(" "),s("li",[t._v("8，表示文本是通过几种方法组合输入的。")]),t._v(" "),s("li",[t._v("9，表示文本是通过脚本输入的。")])])])])]),t._v(" "),s("li",[t._v("键盘事件与鼠标事件一样，都支持相同的修改键。而且，键盘事件的事件对象中也有shiftKey、ctrlKey、altKey和metaKey属性。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/js-keycode.png",alt:"KeyCode"}}),t._v("\nkeyCode: 即相应字符对应的ASCII码")]),t._v(" "),s("h4",{attrs:{id:"变动事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变动事件"}},[t._v("#")]),t._v(" 变动事件")]),t._v(" "),s("ul",[s("li",[t._v("DOMSubtreeModified：在DOM结构中发生任何变化时触发。这个事件在其他任何事件触发后都会触发。")]),t._v(" "),s("li",[t._v("DOMNodeInserted：在一个节点作为子节点被插入到另一个节点中时触发。")]),t._v(" "),s("li",[t._v("DOMNodeRemoved：在节点从其父节点中被移除时触发。")]),t._v(" "),s("li",[t._v("DOMNodeInsertedIntoDocument：在一个节点被直接插入文档或通过子树间接插入文档之后触发。这个事件在DOMNodeInserted之后触发。")]),t._v(" "),s("li",[t._v("DOMNodeRemovedFromDocument：在一个节点被直接从文档中移除或通过子树间接从文档中移除之前触发。这个事件在DOMNodeRemoved之后触发。")]),t._v(" "),s("li",[t._v("DOMAttrModified：在特性被修改之后触发。")]),t._v(" "),s("li",[t._v("DOMCharacterDataModified：在文本节点的值发生变化时触发。")])]),t._v(" "),s("h4",{attrs:{id:"html5事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html5事件"}},[t._v("#")]),t._v(" HTML5事件")]),t._v(" "),s("ul",[s("li",[t._v("contextmenu事件：右键单击时触发，使用event.preventDefalut()取消默认菜单。因为contextmenu事件属于鼠标事件，所以其事件对象中包含与光标位置有关的所有属性。通常使用contextmenu事件来显示自定义的上下文菜单，而使用onclick事件处理程序来隐藏该菜单。")]),t._v(" "),s("li",[t._v("DOMContentLoaded事件：在形成完整的DOM树之后就会触发，不理会图像、JavaScript文件、CSS文件或其他资源是否已经下载完毕。")]),t._v(" "),s("li",[t._v("hashchange事件：HTML5新增了hashchange事件，以便在URL的参数列表（及URL中“#”号后面的所有字符串）发生变化时通知开发人员。之所以新增这个事件，是因为在Ajax应用中，开发人员经常要利用URL参数列表来保存状态或导航信息。")])]),t._v(" "),s("h3",{attrs:{id:"内存和性能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存和性能"}},[t._v("#")]),t._v(" 内存和性能")]),t._v(" "),s("p",[t._v("在JavaScript中，添加到页面上的事件处理程序数量将直接关系到页面的整体运行性能。导致这一问题的原因是多方面的。")]),t._v(" "),s("ol",[s("li",[t._v("每个函数都是对象，都会占用内存；内存中的对象越多，性能就越差。")]),t._v(" "),s("li",[t._v("必须事先指定所有事件处理程序而导致的DOM访问次数，会延迟整个页面的交互就绪时间。")])]),t._v(" "),s("h4",{attrs:{id:"事件委托"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件委托"}},[t._v("#")]),t._v(" 事件委托")]),t._v(" "),s("p",[t._v("click、mousedown、mouseup、keydown、keyup和keypress事件适合采用事件委托技术。利用了事件冒泡，在事件冒泡到较高层次时统一处理，这样只指定一个事件处理程序，就可以管理某一类型的所有事件。")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" list "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#app"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nEventUtil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    event "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" EventUtil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" target "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" EventUtil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTarget")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aBtn"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I changed the document\'s title"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bBtn"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.baidu.com"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cBtn"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hi"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])]),s("h4",{attrs:{id:"移除事件处理程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移除事件处理程序"}},[t._v("#")]),t._v(" 移除事件处理程序")]),t._v(" "),s("p",[t._v("内存中留有那些过时不用的“空事件处理程序”（dangling event handler），也是造成Web应用程序内存与性能问题的主要原因。")]),t._v(" "),s("p",[t._v("在两种情况下，可能会造成上述问题。")]),t._v(" "),s("ol",[s("li",[t._v("从文档中移除带有事件处理程序的元素。这可能是通过纯粹的DOM操作，例如使用removeChild()和replaceChild()方法，但更多地是发生在使用innerHTML替换页面中某一部分的时候。如果带有事件处理程序的元素被innerHTML删除了，那么原来添加到元素中的事件处理程序极有可能无法被当作垃圾回收。(元素移除了，但事件处理程序还和元素保持着引用关系，浏览器很可能无法处理，而将元素和对事件处理程序的引用都保存在内存中，因而无法通过GC回收)")]),t._v(" "),s("li",[t._v("卸载页面的时候。如果在页面被卸载之前没有清理干净事件处理程序，那它们就会滞留在内存中。每次加载完页面再卸载页面时（可能是在两个页面间来回切换，也可以是单击了“刷新”按钮），内存中滞留的对象数目就会增加，因为事件处理程序占用的内存并没有被释放。一般来说，最好的做法是在页面卸载之前，先通过onunload事件处理程序移除所有事件处理程序。在此，事件委托技术再次表现出它的优势——需要跟踪的事件处理程序越少，移除它们就越容易。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);