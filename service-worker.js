if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let f={};const r=e=>a(e,c),n={module:{uri:c},exports:f,require:r};s[c]=Promise.all(i.map((e=>n[e]||r(e)))).then((e=>(d(...e),f)))}}define(["./workbox-0dfb1c68"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.fec63dd8.css",revision:"fb522126cfea075eee598cf5ca3f2dd4"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/76.2e9907f4.js",revision:"86e8d4895ab1ec99fde0158283eefb68"},{url:"assets/js/77.0f8f692c.js",revision:"847a731cda2e7c5fddbccfbd3f00f487"},{url:"assets/js/78.4b003b6d.js",revision:"2d843463339d2dc073bfbdd6f459281c"},{url:"assets/js/79.2fcd8948.js",revision:"1ed105a4ccd90f13ccd44c1bf6166ffb"},{url:"assets/js/app.2bdc4ba3.js",revision:"d8dee1fb99ba6b351dc4e09ad2db413c"},{url:"assets/js/layout-Blog.0fb9cc2a.js",revision:"74ed22041881bf765ae1244db5eda0f8"},{url:"assets/js/layout-Layout.60f5be12.js",revision:"e52e8629ac678533a5adf79f80fa6479"},{url:"assets/js/layout-NotFound.a56ee07b.js",revision:"a0a8cf2288ab49b72b395a586ec6bf21"},{url:"assets/js/layout-Slide.4c560ea5.js",revision:"c1482efdaee7b10df9af9f730b212ea2"},{url:"assets/js/page-Attentionisallyouneed.baa5963e.js",revision:"3ed7d38e0aee6c307c7a841fd66c0c8a"},{url:"assets/js/page-BlogHome.b0c49415.js",revision:"a18e576d71cdb77a74994ee3433dde2a"},{url:"assets/js/page-BOMDOMEvent.42a17791.js",revision:"e5bf3afff05c8a3260da766ccf71ea2e"},{url:"assets/js/page-C++小知识.ab61db13.js",revision:"012abcb6b4bb98b3d31858c73eda66db"},{url:"assets/js/page-CC++文件IO.c9e1b3e0.js",revision:"90ac3cd62ca9892347f1e3eddb2db655"},{url:"assets/js/page-CSS基础.875f318d.js",revision:"3ee565a4f1bb1a45e8c208ae0c5eb243"},{url:"assets/js/page-css小技巧.b0e419f2.js",revision:"67c51d6d7c986cafcc2727565bb73328"},{url:"assets/js/page-CSS布局.6e36f66c.js",revision:"294879449c8cafd8d9e54e5b2b88ce95"},{url:"assets/js/page-CSS模块化.adf5bd8c.js",revision:"02f2f3e1f78a4d2b282c61260e4dae9f"},{url:"assets/js/page-CSS预处理器.ec6c1fd6.js",revision:"5397ea33f4a977eea9845c8be8acbd00"},{url:"assets/js/page-CSS高级话题.904d39ee.js",revision:"f179958fd3db3d2748187d9fa9209ec0"},{url:"assets/js/page-CustomLayout.4d0a55dd.js",revision:"3231d8d1ac4de7fb8e5f4cb3134af167"},{url:"assets/js/page-C语言.49bb651f.js",revision:"0eb83efe4ac2060a9256794eaeeeef87"},{url:"assets/js/page-EffectivePython.e274b7a6.js",revision:"b80b1adb31bc553d2ab83aba1bb0d849"},{url:"assets/js/page-eigen库.7ab2a712.js",revision:"5ac1790a55c86040e75d7517ee66b3b5"},{url:"assets/js/page-gdb.806261b3.js",revision:"b095c6277a3e3012510abe60b1ef668e"},{url:"assets/js/page-git.7d9e8090.js",revision:"44811f7f8e4891a82f335d531b0bcbe2"},{url:"assets/js/page-Hazel.af5584f2.js",revision:"4c60d40ad2b5552ddf70b7bdb4036133"},{url:"assets/js/page-HelloVuepress.30647ccf.js",revision:"af4bbdd42df9755a6bfdb2e23f73c2c4"},{url:"assets/js/page-i386.2e02844f.js",revision:"112bed49a9a37034b8e5a4f920d1d5d7"},{url:"assets/js/page-ICS-PA心得.d9bf93dd.js",revision:"2e1d7ac729900a35059eb6e819220008"},{url:"assets/js/page-IntroPage.862e0917.js",revision:"ec649b0c8dd0bf9f693828154eb815e9"},{url:"assets/js/page-JS基础.f3a15d39.js",revision:"7a7d34976d5b84affefd24a6f8dc03da"},{url:"assets/js/page-JS对象.48cd7566.js",revision:"b23f854f84a1f057082797ebec1720b7"},{url:"assets/js/page-JS小知识.d9882c95.js",revision:"e9becb8f883d932190459a4255a4fa60"},{url:"assets/js/page-katex常用写法.00b16ed6.js",revision:"8d41bc8944db70041bb49030a40890d4"},{url:"assets/js/page-Linux-Ubantu.c905e07b.js",revision:"9f379746df5947c7402bd45715abc245"},{url:"assets/js/page-Markdown增强.b432ebc3.js",revision:"70dfc723cac6cf10d699270309d325af"},{url:"assets/js/page-numpy用法.caec794c.js",revision:"1f14d368714cc60b7b766d74921e28ff"},{url:"assets/js/page-OpenCV.e7ef2d0b.js",revision:"56baa4c4b4cc2d87452223979d18c893"},{url:"assets/js/page-OpenGL基础.87a0cf63.js",revision:"f3ff6bcacdb814117fa28fa27866a0dc"},{url:"assets/js/page-PyQt5ImageViewer示例.057cc036.js",revision:"db585e550d37f96afcafd5186e8be5a7"},{url:"assets/js/page-PyQt5的ModelView组件.76bcc9c8.js",revision:"70dff126a52232bdd63ed07aba67be73"},{url:"assets/js/page-PyQt5记录.139206e4.js",revision:"2ea1f14ef7d2c3a517953807870e0376"},{url:"assets/js/page-python.a9989672.js",revision:"588bb19a625108b38e07b1eba1ca7547"},{url:"assets/js/page-riscv.2ae55748.js",revision:"8c0ca9be5555ef929cab0bdd6a23e5da"},{url:"assets/js/page-shell.d7a80a52.js",revision:"c11ce4a1b6b88fd48dcd325bd8b65301"},{url:"assets/js/page-vim.05ab8ac1.js",revision:"5c2d5e1889bdca67978672039995926d"},{url:"assets/js/page-Vuejs.8dc2671e.js",revision:"f29a07aa111655570c38897b1c2e974d"},{url:"assets/js/page-VuePress默认主题设置.5a43c2cb.js",revision:"49240825bd877ac4ff1fd293a0613581"},{url:"assets/js/page-分水岭算法.7648f429.js",revision:"906533f9584035b3661cad235a4d58d7"},{url:"assets/js/page-名词解释.ec15b3da.js",revision:"f9715dead861f7fbbebbeb4f18da6d40"},{url:"assets/js/page-宏.77761aa1.js",revision:"596fbcff6dbf9854e9901a810b135e0a"},{url:"assets/js/page-密码加密的文章.b011ebe6.js",revision:"127cbefa067730bccb4d1dc319308617"},{url:"assets/js/page-导言.c3fe641f.js",revision:"c511005fda39193c85bea7b86d502065"},{url:"assets/js/page-帧缓冲(FrameBuffer).04229970.js",revision:"0961026ac54f3196fecb044495297d8a"},{url:"assets/js/page-异常控制流.f13df06b.js",revision:"a5934c7043c579540b7d85e3c5bec722"},{url:"assets/js/page-我的博客.50351d2e.js",revision:"e2a8a03e32ff301756e20b29ab23991f"},{url:"assets/js/page-数字图像处理.b714481c.js",revision:"076c95e1b317f5408345c1eb9215f97f"},{url:"assets/js/page-正则表达式.a8cbed57.js",revision:"88f1e069893b677a60ea05238c2b1767"},{url:"assets/js/page-游戏引擎总览.d89a6f58.js",revision:"af94468f78209611e9d55ef0538ec7d3"},{url:"assets/js/page-直方图均衡化.e2d7060a.js",revision:"48dcf29e78638a8597dbff4b90e40d76"},{url:"assets/js/page-算法.644c71dd.js",revision:"849d8b14a6a575d5ba159629fb5b2ce5"},{url:"assets/js/page-组件禁用.7cf26010.js",revision:"c520b6eac62cd163238ea276f2954691"},{url:"assets/js/page-编译器相关.84111f7e.js",revision:"66ebe4201092f77d005562301a9040ee"},{url:"assets/js/page-虚拟内存.9ee58237.js",revision:"7830cb01744a6ece905f4fb034b6ba7c"},{url:"assets/js/page-计算机概述.31109813.js",revision:"70668a429be0d4c65a49ae1ddfbc277c"},{url:"assets/js/page-论文十问.ebb0d06e.js",revision:"2d6cc731785b908d4131534cce557d9f"},{url:"assets/js/page-资源与工具.a83b2f73.js",revision:"b5e50bed81228d3f5aebbea1a2b587bc"},{url:"assets/js/page-软件渲染器.496def59.js",revision:"94d48ed37ed95cc960d0ce60d511e51e"},{url:"assets/js/page-这主题废弃了标题？.04f1da66.js",revision:"bb2abba055a6def50bbb823339a9f9ee"},{url:"assets/js/page-随机数.c8af81c5.js",revision:"993a832bd924458e6e51e565a609b86b"},{url:"assets/js/page-页面配置.a1f657e0.js",revision:"be84390bcd07a795a0389a7fd5bbc961"},{url:"assets/js/vendors~flowchart.bd023134.js",revision:"293d14ecfc9bf2d38fe35e706591aa65"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.a42f9c7b.js",revision:"1e711eeae3aa6d955a9e14f22de24f50"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.d0bef86f.js",revision:"2a2c9ce222b7b38fa33f231f2b7be624"},{url:"assets/js/vendors~layout-Layout.6d9d91f8.js",revision:"2a2d86af77d0d43019c2f0c7e5cc13b2"},{url:"assets/js/vendors~mermaid.d6f630f5.js",revision:"aa9558760eb4862925a8234af0c47301"},{url:"assets/js/vendors~photo-swipe.308088a1.js",revision:"2262d311c1ddc8b7092ca903e4d4b9f7"},{url:"assets/js/vendors~reveal.76234f09.js",revision:"70eb77861789acced1b20a6ddef0e6f5"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.10824af7.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/fonts/KaTeX_AMS-Regular.56573229.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/fonts/KaTeX_AMS-Regular.66c67820.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.497bf407.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.e6fb499f.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/fonts/KaTeX_Fraktur-Bold.40934fc0.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/fonts/KaTeX_Fraktur-Bold.796f3797.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/fonts/KaTeX_Fraktur-Bold.b9d7c449.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/fonts/KaTeX_Fraktur-Regular.97a699d8.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/fonts/KaTeX_Fraktur-Regular.e435cda5.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/fonts/KaTeX_Fraktur-Regular.f9e6a99f.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/fonts/KaTeX_Main-Bold.4cdba646.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/fonts/KaTeX_Main-Bold.8e431f7e.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/fonts/KaTeX_Main-Bold.a9382e25.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/fonts/KaTeX_Main-BoldItalic.52fb39b0.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/fonts/KaTeX_Main-BoldItalic.5f875f98.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/fonts/KaTeX_Main-BoldItalic.d8737343.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/fonts/KaTeX_Main-Italic.39349e0a.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/fonts/KaTeX_Main-Italic.65297062.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/fonts/KaTeX_Main-Italic.8ffd28f6.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/fonts/KaTeX_Main-Regular.818582da.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/fonts/KaTeX_Main-Regular.f1cdb692.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/fonts/KaTeX_Main-Regular.f8a7f19f.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/fonts/KaTeX_Math-BoldItalic.1320454d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/fonts/KaTeX_Math-BoldItalic.48155e43.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.6589c4f1.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/fonts/KaTeX_Math-Italic.d8b7a801.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/fonts/KaTeX_Math-Italic.ed7aea12.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/fonts/KaTeX_Math-Italic.fe5ed587.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/fonts/KaTeX_SansSerif-Bold.0e897d27.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/fonts/KaTeX_SansSerif-Bold.ad546b47.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f2ac7312.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/fonts/KaTeX_SansSerif-Italic.e934cbc8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/fonts/KaTeX_SansSerif-Italic.ef725de5.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/fonts/KaTeX_SansSerif-Italic.f60b4a34.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/fonts/KaTeX_SansSerif-Regular.1ac3ed6e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/fonts/KaTeX_SansSerif-Regular.3243452e.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5f8637ee.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/fonts/KaTeX_Script-Regular.a189c37d.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/fonts/KaTeX_Script-Regular.a82fa2a7.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/fonts/KaTeX_Size1-Regular.0d8d9204.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/fonts/KaTeX_Size2-Regular.1fdda0e5.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/fonts/KaTeX_Size4-Regular.27a23ee6.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/fonts/KaTeX_Typewriter-Regular.0e046058.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6bf42875.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/fonts/KaTeX_Typewriter-Regular.b8b8393d.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"404.html",revision:"6cef1135656a3191717b194c2a975e59"},{url:"article/index.html",revision:"ab3c23907f6f5b03a91bf0898f7e17a8"},{url:"blog/effective_python/index.html",revision:"3d00a50e1c518eec85c08d9625339d8c"},{url:"blog/game-engine-overview/index.html",revision:"a979197bbbfde2d5f478f574f37235b7"},{url:"blog/hazel/index.html",revision:"d56dc803987bba98a5d1c5984b6b13f0"},{url:"blog/image_viewer/index.html",revision:"ccd3c6c93ccb902ea9119da5793f5bd7"},{url:"blog/index.html",revision:"d5828293d58f951eca79ff52b50d665b"},{url:"blog/katex-cheatsheet/index.html",revision:"0f55e01d6284e4b5d02371b5ad4b9360"},{url:"blog/numpy/index.html",revision:"41fd94fd26f3ce8c3024f16561c1cfaf"},{url:"blog/pyqt_model_view/index.html",revision:"6da21c303742f23e6d809e77523deb5a"},{url:"blog/pyqt5/index.html",revision:"7543ce43aec1b1155f31c445e63e8a5c"},{url:"blog/python/index.html",revision:"595f97df58e215c1f0033a11ce946203"},{url:"blog/random/index.html",revision:"1e72b8116a8d8f3a5753ed90419c4962"},{url:"category/blog/index.html",revision:"5775a4be39f98980ec4765c2460af727"},{url:"category/C/C++/index.html",revision:"71d69bb551fb7bcc8e43a8c7a7b9848d"},{url:"category/CV/index.html",revision:"30c73c0c428a8a0ff4661d815148f783"},{url:"category/guide/index.html",revision:"ed0889ace05b19db0b21857806e19cd4"},{url:"category/index.html",revision:"1cf1610248634db1eb45814d568aee41"},{url:"category/Python/index.html",revision:"b6cd9b9077ab437325b67ef2b692561d"},{url:"category/Thesis/index.html",revision:"1cabc175e3c8b8486ddf369e810f6134"},{url:"category/使用指南/index.html",revision:"326c1357b5f4d0e556f0c34e610953a4"},{url:"encrypt/index.html",revision:"a5b567ea2df99cfd4d27e1220f26e483"},{url:"guide/configuration/index.html",revision:"16d9feee3c62870a50a39a683ca7d91e"},{url:"guide/disable/index.html",revision:"4b8e0147a2decf61000eafcd6a2c3932"},{url:"guide/encrypt/index.html",revision:"61df976bd9a46c67a56ba4fab4ce56d3"},{url:"guide/index.html",revision:"cc88ecc5cd3a55f03157beff43719085"},{url:"guide/markdown/index.html",revision:"44c7e46abe8b3200d8f1cb166d3db2e5"},{url:"guide/page/index.html",revision:"db3f2e6e9edaffa8e73d0f2dd0a78042"},{url:"home/index.html",revision:"f8e2444ebb77cd6d6d34ba31ace392fb"},{url:"index.html",revision:"05ed9e7d83d2988954f3c7833ee3af7f"},{url:"intro/index.html",revision:"e0bd6e0e081664b331f9e4be9be6746c"},{url:"layout/index.html",revision:"71b0e5817f1a34a94fc47beeaf395695"},{url:"note/algorithm/index.html",revision:"a60b11d270a32c656e83e864d6b310c2"},{url:"note/cpp/c/index.html",revision:"283ee759c7d59df21519840b9efb1552"},{url:"note/cpp/cpp-random/index.html",revision:"169b6501836febb9a112640fdbe5725e"},{url:"note/cpp/file-io/index.html",revision:"a60db5b3be94c6012e7e5ddeb6f9443e"},{url:"note/cpp/index.html",revision:"7850949632b3df3bf110daa50a152edd"},{url:"note/cpp/macro/index.html",revision:"22d8efadd9c6b88aa36b8f6a7a77b571"},{url:"note/cs/compiler/index.html",revision:"89762433c437072f217dc74ae5bed957"},{url:"note/cs/ECF/index.html",revision:"ac486b0ff2e0db46cb483cdc84d4237d"},{url:"note/cs/gdb-cheatsheet/index.html",revision:"8c88f3a685c91151f572cb8a78dae3ae"},{url:"note/cs/git/index.html",revision:"a20a497c185f6ffad1e45eabfc91c829"},{url:"note/cs/ics-pa/index.html",revision:"d40a87686c377770b39c9a15b1db308d"},{url:"note/cs/index.html",revision:"eac38e026527d11f0e89c2d3d27a136c"},{url:"note/cs/isa-i386/index.html",revision:"d71479be401a66c953f0df5e4dd978e7"},{url:"note/cs/isa-riscv/index.html",revision:"07e803f6dfad350b76ae7de4bc4a106d"},{url:"note/cs/linux/index.html",revision:"050e262dfe9f142c8afc37f9cb6cdc4d"},{url:"note/cs/regex/index.html",revision:"2126fd8db1c672c8d2b78d616554f1b2"},{url:"note/cs/shell-cheatsheet/index.html",revision:"e3f5440284d4181ddcbe8828e80fc8cd"},{url:"note/cs/vim/index.html",revision:"46c3f9ed3f145f669cbb378d686ce18d"},{url:"note/cs/VM/index.html",revision:"a8dddae64561dd036cfb3830ec8136f8"},{url:"note/cv/dip/index.html",revision:"81e973a3123ea7d0a35fc42638942fb6"},{url:"note/cv/equalize_histogram/index.html",revision:"1bf69e508ac0d8d2f5871b24a2b5bfbd"},{url:"note/cv/index.html",revision:"7d4d99d104c95241d6c1b4e6407dd7f0"},{url:"note/cv/nouns/index.html",revision:"ab4a45acab8ec3d1dc5bd13dd1e24086"},{url:"note/cv/transformer/index.html",revision:"0cd8957da9056a55bb4ba79d65a25938"},{url:"note/cv/watershed/index.html",revision:"4dfd6c52561845c5d8916b3eda396434"},{url:"note/js/css-advance/index.html",revision:"69bc219aed4715a3ff4ce426d1ebecc1"},{url:"note/js/css-basic/index.html",revision:"b080a44ced05c37435b8b04913d04eae"},{url:"note/js/css-layout/index.html",revision:"f7806effe80979824863ee38299b3b04"},{url:"note/js/css-modular/index.html",revision:"ec55abdeec96229e188eb64b346bc8fb"},{url:"note/js/css-sass/index.html",revision:"065683134e2bcc514c983c1d13e7ce58"},{url:"note/js/css-tricks/index.html",revision:"ea3ea31bebadb6af9bc86cbe8a5be0ba"},{url:"note/js/index.html",revision:"27a66b37366373063e165c6058c635d7"},{url:"note/js/js-base/index.html",revision:"0f92a3a006ae7197b04e44c723b34ac6"},{url:"note/js/js-bom-dom/index.html",revision:"de05216d74298810dbaeeb0bfde149d6"},{url:"note/js/js-object/index.html",revision:"15830e513286db4113415871675b9031"},{url:"note/js/resources/index.html",revision:"3357fe32f5fbc698402e039afca15815"},{url:"note/js/vue/index.html",revision:"1dc1b58d6620dcdb74523435dc6c6b35"},{url:"note/opengl/eigen/index.html",revision:"50264c659f4ffa4c68ff32f930886f23"},{url:"note/opengl/gl-framebuffer/index.html",revision:"be3f69e6346f8ac396cb4c998023b82d"},{url:"note/opengl/index.html",revision:"4593d56a6693a398feb8740a9658c0a3"},{url:"note/opengl/opencv/index.html",revision:"7154351f58e363060ec6541b4b0c1149"},{url:"note/opengl/software-renderer/index.html",revision:"faaf23d78c7128ea4328f018f006f829"},{url:"slide/index.html",revision:"32147623507f8322bba4f33ad3cc8674"},{url:"star/index.html",revision:"e1d450b75c2cc3528a19c775faf714a5"},{url:"tag/config/index.html",revision:"acf901c6adabbbf8cc6f4e0196263d7f"},{url:"tag/DIP/index.html",revision:"74de8ea560fa4bdd9efe062cb3b11778"},{url:"tag/Games/index.html",revision:"e035de084064e1cb50ee8836d854bbb1"},{url:"tag/guide/index.html",revision:"9847aae5c5e2c131e23dbc4b0902b3ae"},{url:"tag/index.html",revision:"c5e54081871cf02fbfca595132befdeb"},{url:"tag/markdown/index.html",revision:"93dfab9f1a88ff12f7e884562b1869d5"},{url:"tag/numpy/index.html",revision:"a24a2e4eb3dc29679284ef6fced300c0"},{url:"tag/PyQt5/index.html",revision:"95c2136bdb4a1221c31fea0d6b0060cc"},{url:"tag/python/index.html",revision:"5e191a3b8f02b1eb2b2619d2f78e4104"},{url:"tag/random/index.html",revision:"9851df5eb1dd50daf0b5553998be0e0f"},{url:"tag/thesis note/index.html",revision:"c1aec110b834439c44902525eeb433c5"},{url:"tag/thesis/index.html",revision:"e2b5755cd32d0e30e1eeee741346ba9d"},{url:"tag/使用指南/index.html",revision:"e4f453f5bd26b7781b4f6d05bdae3d29"},{url:"tag/文章加密/index.html",revision:"c0e870a603894450e53d42e7489e1594"},{url:"tag/页面配置/index.html",revision:"05c3fa853341f6ef7871d46e5cd91bf6"},{url:"thesis/index.html",revision:"1f91a025ad5dfc996ecf54fabec389ba"},{url:"timeline/index.html",revision:"d81e957a0921098d1e0c5cfecc2c1833"},{url:"assets/cg/ch8-0.png",revision:"94e88bcc6974e3891cdc1f680b1746e1"},{url:"assets/cg/ch8-1.png",revision:"0ea836061e9f77996514bc5f73ca4fa3"},{url:"assets/cg/ch8-10.png",revision:"d0f3e0cec941c016490c08df9002d901"},{url:"assets/cg/ch8-2.png",revision:"d4e7e80bcfd217fc9a2d079a1e6db46d"},{url:"assets/cg/ch8-3.png",revision:"999bab4748b4cf7c4c0c18fc9dcfa88f"},{url:"assets/cg/ch8-4.png",revision:"e81c46ad276cc41415314e6d9a679b68"},{url:"assets/cg/ch8-5.png",revision:"7861608849675652e91164a9afa1d0ce"},{url:"assets/cg/ch8-6.png",revision:"6c9fe7a59a355c8c9bea3294ff3edc38"},{url:"assets/cg/ch8-7.png",revision:"0bc998db96a289d6a37c287b57ca0455"},{url:"assets/cg/ch8-8.png",revision:"6fb53a778ef1ecea0c47ef7bd5aa5c22"},{url:"assets/cg/ch8-9.png",revision:"f82e8d75cdaceafc40b3834aa2dbf87e"},{url:"assets/csapp/AddrTranslate.png",revision:"cd834b1b41fefd0fa445f50e5ec7cc4b"},{url:"assets/csapp/BoundaryTag.png",revision:"8d6ad2403bd3de304ca00fe3db096816"},{url:"assets/csapp/ExecveLoad.png",revision:"21133486ba26f3e51c70b3019a7a8802"},{url:"assets/csapp/ExplicitList.png",revision:"6bd73f35310791651d523b92aee1f17c"},{url:"assets/csapp/FindAddr.png",revision:"f65fac633abbc987a60b80304562cdc3"},{url:"assets/csapp/FindAddrTlb.png",revision:"16406702886b9c19331bc457f5469992"},{url:"assets/csapp/GarbageCollection.png",revision:"c394ace35306adb831401f738b85644a"},{url:"assets/csapp/GCBST.png",revision:"27d60aa8f20aeb340ab2ba45d4a45a3a"},{url:"assets/csapp/gsxd1.png",revision:"1f4c0e8ce871c84344069c39323980db"},{url:"assets/csapp/gsxd2.png",revision:"68c9f66ceb306f95188e2e808eb8e5a3"},{url:"assets/csapp/ImplicitList.png",revision:"fc1cbcf515e1773445f38470fdc6ffae"},{url:"assets/csapp/LinuxSegment.png",revision:"138970f830c65616d8c8160ef0cf2a83"},{url:"assets/csapp/LinuxVMSystem.png",revision:"82945b8131808f23681a1322c69131d7"},{url:"assets/csapp/mmap.png",revision:"97a074bdd532bdaea397b21cf827b281"},{url:"assets/csapp/MultiLayerPT.png",revision:"d1be0f3dc30181a490ca698d12a90aa2"},{url:"assets/csapp/MultiPageTable.png",revision:"88cfc98c9f88b42dfba9f279cef9066d"},{url:"assets/csapp/PageTable.png",revision:"90333474af8dd65632842bc30b78fe73"},{url:"assets/csapp/StackBlock.png",revision:"cdf9712451be989fcde9f5659722df45"},{url:"assets/csapp/tlbpte.png",revision:"cb27529bc6c7e6866ac8269d40713a48"},{url:"assets/csapp/VP-PP.png",revision:"e22fe863b754b5a3c2ef3b51aae29068"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/80386-instruction-format.png",revision:"ce8b910747220f7d3d9bf19650e171f3"},{url:"assets/img/blend-mode.png",revision:"681b3f49eb09e560bb28a24cdcf4efce"},{url:"assets/img/box-model.png",revision:"b343cc1de6ab960ae542b87e8d4be707"},{url:"assets/img/ChernoLogo.png",revision:"854d1bf58ef57a6f050704d9a62ca4b6"},{url:"assets/img/csapp-ecf-01.png",revision:"49fb53bf5481e6db4ced6a22e6202036"},{url:"assets/img/csapp-ecf-02.png",revision:"0a636a96604025b2dee2e37f3f35aac0"},{url:"assets/img/effective-address.png",revision:"54b8f525bc5805a853c31c482bd4709c"},{url:"assets/img/EFLAGS.png",revision:"c5b09a0ccbfa91f15f31a8d882d6e310"},{url:"assets/img/flex-more1.png",revision:"7676c4aadfdff7b9ed8a1362cead07a5"},{url:"assets/img/flex-more2.png",revision:"1d6ca8d4751ed35d5ef80a9ad7255e73"},{url:"assets/img/float-trap.png",revision:"57d214b264d3c98dce07b0c690038e70"},{url:"assets/img/flux-layout-example.png",revision:"70de6634a4bc53b9009babca19691f51"},{url:"assets/img/game-controller.png",revision:"19c705d6586ffbe06c9babef633af19c"},{url:"assets/img/game-engine-archtecture.png",revision:"c43cc47dc74e3334bc1ef21d86ddfc3e"},{url:"assets/img/game-engine-reusability-gamut.png",revision:"ccbfd59e8f3552b84c8d0fe942f6f4a6"},{url:"assets/img/general-registers.png",revision:"2c4e231638e196e6b41059699c5cbd2e"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"assets/img/img-object-fit.png",revision:"8650acb87b32231fd791f9f32b9b74a5"},{url:"assets/img/js-keycode.png",revision:"5c9baf7c22fce7acc1c81d85643d3187"},{url:"assets/img/katex-environments.png",revision:"aa19213adc0ee405db2155d5b8d25aa6"},{url:"assets/img/line-height.png",revision:"1537d8460304adf323e62659982054a1"},{url:"assets/img/minus-margin.png",revision:"ec10ffbc799889217071836240d46db3"},{url:"assets/img/modrm-sib.png",revision:"ba4b8e22ffb9f2cb88f91e20749222ff"},{url:"assets/img/other-registers.png",revision:"23f3ed5665a2d6c6811f43644807a055"},{url:"assets/img/Pixel_beauty.png",revision:"b865f165cabd3d9eff64af0d017daecc"},{url:"assets/img/Pixel_Orc.png",revision:"3a470c783d56a2da409ecf73fee46c1e"},{url:"assets/img/pyqt_find_flag.png",revision:"faec9101d72af3c175a8122f9163e2ff"},{url:"assets/img/pyqt_model_view.png",revision:"f7bf6af7db25461de89187456924ed72"},{url:"assets/img/pyqt_view_index.png",revision:"e1cc84a1cb981fdb5e640942dfd8cfec"},{url:"assets/img/Qmodel_index.png",revision:"93780fad32e0b4d0c04e22dac5ddc59a"},{url:"assets/img/qt_item_roles.png",revision:"11a1aef1f387f608cdf951e7b8612fe7"},{url:"assets/img/radial-gradient.png",revision:"c7ff67245e1ebb162bb9ed2c0c9daa75"},{url:"assets/img/step-func.png",revision:"82feee7a3dc7291e1662127d51c80584"},{url:"assets/img/transformation.png",revision:"ac16867f09056651a3d6bb1eb90321ba"},{url:"assets/img/transition-timing-func.png",revision:"c0a2375224334273218fcde47cb24991"},{url:"assets/img/vim-keyboard.png",revision:"57139d59fad537eb8790720064081927"},{url:"assets/thesis/Inception.png",revision:"b0d489f6112f86b706ba8a84f16d424b"},{url:"link.png",revision:"56c0ed714e6e862272083c43e597cf04"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
