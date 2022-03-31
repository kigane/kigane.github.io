(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{522:function(t,v,_){"use strict";_.r(v);var d=_(1),s=Object(d.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"os"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#os"}},[t._v("#")]),t._v(" os")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("方法")]),t._v(" "),_("th",[t._v("作用")]),t._v(" "),_("th",[t._v("补充说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("os.chdir(path)")]),t._v(" "),_("td",[t._v("修改当前工作目录")]),t._v(" "),_("td",[t._v("会改变getcwd()的结果")])]),t._v(" "),_("tr",[_("td",[t._v("os.getcwd()")]),t._v(" "),_("td",[t._v("获取当前工作目录")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("os.mkdirs(path)")]),t._v(" "),_("td",[t._v("创建目录，可以直接创建不存在的父目录再创建子目录，如果目录已存在则抛出错误")]),t._v(" "),_("td",[t._v("可以使用exist_ok=True参数，使在创建已存在的目录时不抛出错误。")])]),t._v(" "),_("tr",[_("td",[t._v("os.removedirs(path)")]),t._v(" "),_("td",[t._v("删除指定目录，可以是子目录，如果不存在也不会出现错误")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("os.rename(old, new)")]),t._v(" "),_("td",[t._v("重命名文件")]),t._v(" "),_("td",[t._v("可以是文件或目录。对于目录，如果old不存在，也会创建一个new。对于文件，如果old不存则抛出错误")])]),t._v(" "),_("tr",[_("td",[t._v("os.stat(path)")]),t._v(" "),_("td",[t._v("查询文件meta数据")]),t._v(" "),_("td",[t._v("st_size(Byte), 时间都是秒数，需要用datatime转换为可读的形式")])]),t._v(" "),_("tr",[_("td",[t._v("os.walk(path)")]),t._v(" "),_("td",[t._v("递归遍历指定路径的所有子文件和目录")]),t._v(" "),_("td",[t._v("返回一个三元组的Iterator，(dirpath:str, dirnames:list, filenames:list)分别代表(正在遍历的目录，该目录下的子目录，该目录下的文件)。DFS先序遍历。")])]),t._v(" "),_("tr",[_("td",[t._v("os.environ")]),t._v(" "),_("td",[t._v("返回一个环境变量字典")]),t._v(" "),_("td",[t._v("os.environ.get(env_name)获取指定环境变量")])]),t._v(" "),_("tr",[_("td",[t._v("os.path.join(patha, pathb)")]),t._v(" "),_("td",[t._v("拼接路径")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("os.path.basename(path)")]),t._v(" "),_("td",[t._v("文件名")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("os.path.dirname(path)")]),t._v(" "),_("td",[t._v("文件所在的目录名")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("os.path.split(path)")]),t._v(" "),_("td",[t._v("返回(文件所在的目录名, 文件名)")]),t._v(" "),_("td",[t._v("实际是找到最后一个分割符，将path分为两部分放入元组")])]),t._v(" "),_("tr",[_("td",[t._v("os.path.splitext(path)")]),t._v(" "),_("td",[t._v("返回(文件名, 扩展名)")]),t._v(" "),_("td",[t._v('实际是找到最后一个"."，将path分为两部分,扩展名包含"."')])]),t._v(" "),_("tr",[_("td",[t._v("os.path.exists(path)")]),t._v(" "),_("td",[t._v("确认文件或目录是否存在")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("os.path.isdir(path)")]),t._v(" "),_("td",[t._v("确认path是否为目录")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("os.path.isfile(path)")]),t._v(" "),_("td",[t._v("确认path是否为文件")]),t._v(" "),_("td")])])]),t._v(" "),_("h2",{attrs:{id:"shutil"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#shutil"}},[t._v("#")]),t._v(" shutil")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("方法")]),t._v(" "),_("th",[t._v("作用")]),t._v(" "),_("th",[t._v("补充说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("shutil.copyfile(src, dst)")]),t._v(" "),_("td",[t._v("复制文件")]),t._v(" "),_("td",[t._v("dst不能是目录")])]),t._v(" "),_("tr",[_("td",[t._v("shutil.copy(src, dst)")]),t._v(" "),_("td",[t._v("复制文件")]),t._v(" "),_("td",[t._v("dst可以是目录，此时会将src文件放在dst目录下。dst不存在会创建一个文件")])]),t._v(" "),_("tr",[_("td",[t._v("shutil.move(src, dst)")]),t._v(" "),_("td",[t._v("递归地移动文件或目录")]),t._v(" "),_("td",[t._v("dst不存在会创建一个文件")])]),t._v(" "),_("tr",[_("td",[t._v("shutil.copytree(src, dst)")]),t._v(" "),_("td",[t._v("复制目录中的所有内容到目标目录中")]),t._v(" "),_("td",[t._v("src/xx -> dst/xx，dst不存在会创建")])]),t._v(" "),_("tr",[_("td",[t._v("shutil.make_archive(basename, format, root)")]),t._v(" "),_("td",[t._v("将root目录中的所有内容添加到压缩文件中")]),t._v(" "),_("td",[t._v('format通常设为"zip"')])]),t._v(" "),_("tr",[_("td",[t._v("shutil.unpack_archive(archive_file)")]),t._v(" "),_("td",[t._v("解压")]),t._v(" "),_("td")])])])])}),[],!1,null,null,null);v.default=s.exports}}]);