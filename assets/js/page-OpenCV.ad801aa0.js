(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{563:function(t,e,a){"use strict";a.r(e);var _=a(1),v=Object(_.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[t._v("OpenCV是一个图像处理库。图像矩阵类Mat主要有两个部分,header部分记录图像矩阵的描述性信息，如大小，元素储存方式等等，另外一部分是一个指针，指向矩阵存储的内存。有自动内存管理，且使用了引用计数系统，Mat的赋值，复制构造函数只会复制header部分，指针部分指向同一块内存，最后一个指向该内存的指针负责回收内存。其指定存储方式的格式为:"),a("code",[t._v("CV_[The number of bits per item][Signed or Unsigned][Type Prefix]C[The channel number]")]),t._v("。Mat的输出格式可以用"),a("code",[t._v("format(mat, Formatter::FMT_PYTHON)")]),t._v("指定("),a("code",[t._v("cout<<format(mat,...)")]),t._v(")。"),a("br"),t._v("\nPS：OpenCV按BGR顺序存储RGB颜色。")]),t._v(" "),a("h2",{attrs:{id:"遍历图像矩阵"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遍历图像矩阵"}},[t._v("#")]),t._v(" 遍历图像矩阵")]),t._v(" "),a("ul",[a("li",[t._v("cv::Mat::isContinuous() 检查内存是否在同一行")]),t._v(" "),a("li",[t._v("检查图像是否加载成功可以看I.data是否为NULL，为NULL则加载失败。")]),t._v(" "),a("li",[t._v("遍历矩阵元素的方式\n"),a("ul",[a("li",[t._v("mat.depth()查看item的类型，mat.channels()查看元素的通道数。")]),t._v(" "),a("li",[t._v("mat.rows查看元素行数,mat.cols查看元素列数，mat.cols*mat.channels()是item总数。")]),t._v(" "),a("li",[a("code",[t._v("mat.ptr<typename>(i)")]),t._v(" 取得指向矩阵第i行行首的指针。")]),t._v(" "),a("li",[a("code",[t._v("MatIterator_<typename> it")]),t._v(" 不同类型的迭代器，推荐使用，在内存换行时有点优化。\n"),a("ul",[a("li",[a("code",[t._v("mat.begin<typename>()")]),t._v(" 取得位于矩阵开头的迭代器。常用的RGB3通道对应typename为Vec3b")]),t._v(" "),a("li",[a("code",[t._v("mat.end<typename>()")])])])])])]),t._v(" "),a("li",[t._v("cv::Mat::at(row,col) 取得第row行，第col列的元素的地址，并返回引用。")]),t._v(" "),a("li",[t._v("cv::LUT(src,lut,dest) "),a("code",[t._v("dest[i]=lut[src[i]+d]")]),t._v("。如果src是无符号类型，则d=0，有符号类型则d=128。最快。")])]),t._v(" "),a("h2",{attrs:{id:"图像操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图像操作"}},[t._v("#")]),t._v(" 图像操作")]),t._v(" "),a("ul",[a("li",[t._v("Mat img = imread(filename); 默认为3通道")]),t._v(" "),a("li",[t._v("Mat img = imread(filename, IMREAD_GRAYSCALE); 单通道")]),t._v(" "),a("li",[t._v("imwrite(filename, img); 保存到文件")]),t._v(" "),a("li",[t._v('imshow("image", img); 显示图像')]),t._v(" "),a("li",[t._v("cvtColor(img, grey, COLOR_BGR2GRAY);  改变颜色空间。")]),t._v(" "),a("li",[t._v("src.convertTo(dst, CV_32F); 改变图像类型")]),t._v(" "),a("li",[t._v("Rect r(10, 10, 100, 100); Mat smallImg = img(r); 将Rect指定的区域储存为另一个图像")])])])}),[],!1,null,null,null);e.default=v.exports}}]);