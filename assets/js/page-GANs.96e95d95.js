(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{596:function(t,a,e){"use strict";e.r(a);var r=e(1),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"dcgan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dcgan"}},[t._v("#")]),t._v(" DCGAN")]),t._v(" "),e("h3",{attrs:{id:"approach"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#approach"}},[t._v("#")]),t._v(" Approach")]),t._v(" "),e("ul",[e("li",[t._v("all convolution net: 不使用常用的确定性池化，改用步长为2的卷积让模型学到适合自己的下采样。")]),t._v(" "),e("li",[t._v("去掉了全连接层")]),t._v(" "),e("li",[t._v("BN: 在所有层后加BN，会使模型不稳定。去掉G的输出层，和D的输入层后的BN后可以避免该问题。")]),t._v(" "),e("li",[t._v("ReLU in Generator except for the output layer which use Tanh")]),t._v(" "),e("li",[t._v("LeakyReLU in Discriminator")])])])}),[],!1,null,null,null);a.default=n.exports}}]);