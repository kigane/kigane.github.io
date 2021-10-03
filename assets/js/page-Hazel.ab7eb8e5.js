(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{525:function(e,v,t){"use strict";t.r(v);var l=t(1),a=Object(l.a)({},(function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"eventsystem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eventsystem"}},[e._v("#")]),e._v(" EventSystem")]),e._v(" "),t("ul",[t("li",[e._v("EntryPoint.h -- Game Main Loop\n"),t("ul",[t("li",[e._v("app = CreateApplicaiton();")]),e._v(" "),t("li",[e._v("app->run();")]),e._v(" "),t("li",[e._v("delete app;")])])]),e._v(" "),t("li",[e._v("Application.h\n"),t("ul",[t("li",[e._v("Application(name)\n"),t("ul",[t("li",[e._v("创建窗口，设置回调")]),e._v(" "),t("li",[e._v("渲染初始化")]),e._v(" "),t("li",[e._v("创建ImGui层")])])]),e._v(" "),t("li",[e._v("OnEvent(e)\n"),t("ul",[t("li",[e._v("Dispatch Event=>function")]),e._v(" "),t("li",[e._v("Layer->OnEvent(e) 传播机制")])])]),e._v(" "),t("li",[e._v("Run() 更新Layers和Window")])])]),e._v(" "),t("li",[e._v("Event.h\n"),t("ul",[t("li",[e._v("创建事件 Event")]),e._v(" "),t("li",[e._v("分发事件 EventDispatcher")]),e._v(" "),t("li",[e._v("具体事件继承Event")])])])]),e._v(" "),t("p",[e._v("一个窗口事件发生，有glfwWindow捕获，产生glfw事件。通过在创建窗口时，设置的各种事件回调函数(glfwSetWindowSizeCallback(window,callback))，将glfw事件转化为Hazel事件，并用Application::OnEvent回调函数处理。")]),e._v(" "),t("h2",{attrs:{id:"precompiled-header"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#precompiled-header"}},[e._v("#")]),e._v(" precompiled header")]),e._v(" "),t("p",[e._v("当项目中cpp文件多了以后，每个cpp文件编译时都需要解析其include的头文件，其中有些头文件可能被多个cpp文件所引用，但每个编译单元(cpp文件)都要独立解析各自的头文件，效率比较低。"),t("br"),e._v("\n因此，对于这些常用的，通常不会有修改的头文件(例如，iostream,vector,string....)，可以预先编译好，变成一个二进制文件。在后续cpp文件编译，链接时，可以直接查找这个编译好的二进制文件，效率高。")]),e._v(" "),t("p",[e._v("怎么做？")]),e._v(" "),t("ul",[t("li",[e._v("建立一个pch.h头文件，将需要预编译的头文件包含进来")]),e._v(" "),t("li",[e._v('MSVC需要建立一个pch.cpp，内容仅需include "pch.h"即可。')]),e._v(" "),t("li",[e._v("VS2019相关设置\n"),t("ul",[t("li",[e._v("C/C++->precompiled headers->Precompiled Header 设为 Use")]),e._v(" "),t("li",[e._v("C/C++->precompiled headers->Precompiled Header File 设为 pch.h")])])]),e._v(" "),t("li",[e._v("premake设置(proejct下)\n"),t("ul",[t("li",[e._v('pchheader "pch.h"')]),e._v(" "),t("li",[e._v('pchsource "src/pch.cpp"')])])])]),e._v(" "),t("p",[e._v("PS: 如果pch.h中的头文件有任何一个改动，整个pch.h都需要重新编译。所以，不要将可能经常改动的头文件放入预编译头。")]),e._v(" "),t("h2",{attrs:{id:"layers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#layers"}},[e._v("#")]),e._v(" Layers")]),e._v(" "),t("ul",[t("li",[e._v("Layer & LayerStack")]),e._v(" "),t("li",[e._v("LayerStack是Layer的wrapper(一个vector<Layer>)，主要用于设定渲染顺序，以及事件的传播顺序(和渲染顺序相反)，将不同Layer的渲染和事件处理隔离开。")]),e._v(" "),t("li",[e._v("OnUpdate() 在每一帧渲染时调用")]),e._v(" "),t("li",[e._v("OnEvent() 在反向传播事件")])]),e._v(" "),t("h2",{attrs:{id:"inputsystem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inputsystem"}},[e._v("#")]),e._v(" InputSystem")])])}),[],!1,null,null,null);v.default=a.exports}}]);