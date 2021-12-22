(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{558:function(t,s,a){"use strict";a.r(s);var i=a(1),m=Object(i.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"总览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总览"}},[t._v("#")]),t._v(" 总览")]),t._v(" "),a("ul",[a("li",[t._v("提高全局对比度，在图像灰度集中于某个小区域时效果尤为明显")]),t._v(" "),a("li",[t._v("直方图均衡化将集中在一起的灰度像素值打散到全灰度级上来获得对比度的增强")]),t._v(" "),a("li",[t._v("适合处理曝光不足的照片和骨骼的x-ray图像，热力图，卫星图")]),t._v(" "),a("li",[t._v("是可逆的，需要知道直方图均衡化函数")]),t._v(" "),a("li",[t._v("一个缺点是对背景噪音和有用的信号一视同仁")]),t._v(" "),a("li",[t._v("会使图像产生不真实感")]),t._v(" "),a("li",[t._v("对低color depth的图像，会进一步降低其color depth")]),t._v(" "),a("li",[t._v("改进，在提高对比度的同时不改变灰度的均值和避免细节上的损失\n"),a("ul",[a("li",[t._v("adaptive histogram equalization")]),t._v(" "),a("li",[t._v("contrast limiting adaptive histogram equalization (CLAHE)")]),t._v(" "),a("li",[t._v("multipeak histogram equalization (MPHE)")]),t._v(" "),a("li",[t._v("multipurpose beta optimized bihistogram equalization (MBOBHE)")])])])]),t._v(" "),a("h2",{attrs:{id:"具体算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体算法"}},[t._v("#")]),t._v(" 具体算法")]),t._v(" "),a("ul",[a("li",[t._v("计算图像的hist直方图，即每个灰度有多少像素")]),t._v(" "),a("li",[t._v("计算hist的cumsum()，即cdf")]),t._v(" "),a("li",[t._v("用cdf当权值在目标RANGE内进行插值。\n"),a("ul",[a("li",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("h")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("v")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mo",[t._v("=")]),a("mi",[t._v("r")]),a("mi",[t._v("o")]),a("mi",[t._v("u")]),a("mi",[t._v("n")]),a("mi",[t._v("d")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mfrac",[a("mrow",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("cdf")]),a("mo",[t._v("⁡")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("v")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mo",[t._v("−")]),a("msub",[a("mrow",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("cdf")]),a("mo",[t._v("⁡")])],1),a("mrow",[a("mi",[t._v("m")]),a("mi",[t._v("i")]),a("mi",[t._v("n")])],1)],1)],1),a("mrow",[a("mi",[t._v("H")]),a("mo",[t._v("×")]),a("mi",[t._v("W")]),a("mo",[t._v("−")]),a("msub",[a("mrow",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("cdf")]),a("mo",[t._v("⁡")])],1),a("mrow",[a("mi",[t._v("m")]),a("mi",[t._v("i")]),a("mi",[t._v("n")])],1)],1)],1)],1),a("mo",[t._v("×")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("L")]),a("mo",[t._v("−")]),a("mn",[t._v("1")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("h ( v ) = round( \\frac { \\operatorname { cdf } ( v ) - \\operatorname { cdf } _ { min } } { H\\times W- \\operatorname { cdf } _ {min} } \\times ( L - 1 ) )")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("h")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1.4551em","vertical-align":"-0.4451em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("ro")]),a("span",{staticClass:"mord mathnormal"},[t._v("u")]),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mord mathnormal"},[t._v("d")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mopen nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.01em"}},[a("span",{staticStyle:{top:"-2.655em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.08125em"}},[t._v("H")]),a("span",{staticClass:"mbin mtight"},[t._v("×")]),a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.13889em"}},[t._v("W")]),a("span",{staticClass:"mbin mtight"},[t._v("−")]),a("span",{staticClass:"mop mtight"},[a("span",{staticClass:"mop mtight"},[a("span",{staticClass:"mord mathrm mtight",staticStyle:{"margin-right":"0.07778em"}},[t._v("cdf")])]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.3281em"}},[a("span",{staticStyle:{top:"-2.357em","margin-right":"0.0714em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.5em"}}),a("span",{staticClass:"sizing reset-size3 size1 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight"},[t._v("min")])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.143em"}},[a("span")])])])])])])])]),a("span",{staticStyle:{top:"-3.23em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),a("span",{staticStyle:{top:"-3.485em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mop mtight"},[a("span",{staticClass:"mord mathrm mtight",staticStyle:{"margin-right":"0.07778em"}},[t._v("cdf")])]),a("span",{staticClass:"mopen mtight"},[t._v("(")]),a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),a("span",{staticClass:"mclose mtight"},[t._v(")")]),a("span",{staticClass:"mbin mtight"},[t._v("−")]),a("span",{staticClass:"mop mtight"},[a("span",{staticClass:"mop mtight"},[a("span",{staticClass:"mord mathrm mtight",staticStyle:{"margin-right":"0.07778em"}},[t._v("cdf")])]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.3281em"}},[a("span",{staticStyle:{top:"-2.357em","margin-right":"0.0714em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.5em"}}),a("span",{staticClass:"sizing reset-size3 size1 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight"},[t._v("min")])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.143em"}},[a("span")])])])])])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.4451em"}},[a("span")])])])]),a("span",{staticClass:"mclose nulldelimiter"})]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),a("span",{staticClass:"mbin"},[t._v("×")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal"},[t._v("L")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mclose"},[t._v("))")])])])])]),t._v(" "),a("li",[t._v("cdf"),a("sub",[t._v("min")]),t._v("代表灰度最低像素的个数")]),t._v(" "),a("li",[t._v("HxW为图像像素总数")]),t._v(" "),a("li",[t._v("L为灰度级，通常为256")])])])]),t._v(" "),a("h2",{attrs:{id:"python实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python实现"}},[t._v("#")]),t._v(" python实现")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("TODO\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])}),[],!1,null,null,null);s.default=m.exports}}]);