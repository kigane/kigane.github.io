(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{401:function(t,_,v){"use strict";v.r(_);var e=v(44),s=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"c"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#c"}},[t._v("#")]),t._v(" C")]),t._v(" "),v("h3",{attrs:{id:"读写"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#读写"}},[t._v("#")]),t._v(" 读写")]),t._v(" "),v("p",[t._v("C提供两种访问文件的途径：二进制模式和文本模式。二进制模式中打开的文件一个字节都不会变，而文本模式中打开的文件中的行末尾和文件末尾会被映射为C模式(行尾:\\n, 文件末尾: EOF)。")]),t._v(" "),v("p",[t._v("模式串")]),t._v(" "),v("ul",[v("li",[t._v("r 读")]),t._v(" "),v("li",[t._v("w 写。如果文件不存在，会创建新文件。如果文件存在，会先删除文件内容。")]),t._v(" "),v("li",[t._v("a 写，添加。如果文件不存在，会创建新文件。")]),t._v(" "),v("li",[v("code",[t._v("+")]),t._v(" 后缀，表示以更新模式打开，可读可写。但有一些规则\n"),v("ul",[v("li",[t._v("从读模式转换到写模式前，需要先调用一个文件定位函数，或遇到EOF")]),t._v(" "),v("li",[t._v("从写模式转换到读模式前，必须先调用fflush函数")])])]),t._v(" "),v("li",[t._v("b 后缀，表示以二进制模式打开")]),t._v(" "),v("li",[t._v("x 后缀，C11")])]),t._v(" "),v("p",[t._v("stdio.h头文件中包含stdin,stdout,stderr三个标准流文件的文件指针。")]),t._v(" "),v("ul",[v("li",[t._v("FILE *fopen(const char *filename, const char *mode);")]),t._v(" "),v("li",[t._v("int fclose(FILE *stream);")]),t._v(" "),v("li",[t._v('FILE *freopen(const char *filename, const char *mode, FILE *stream); // 将stream流重定向到文件。常用：freopen("foo", "w", stdout);')])]),t._v(" "),v("hr"),t._v(" "),v("ul",[v("li",[t._v("int putc(int c, FILE *stream); // 向stream写入一个字符c，用int而非char是因为EOF是一个负的整数常量。")]),t._v(" "),v("li",[t._v("int fputc(int c, FILE *stream); // 功能同putc。但putc是宏，fputc是函数。通常putc更快。")]),t._v(" "),v("li",[t._v("int putchar(int c); // 将一个字符放入stdout")]),t._v(" "),v("li",[t._v("int fputs(const char *s, FILE *stream); // 向stream写入一行字符c。不会自动加换行符")]),t._v(" "),v("li",[t._v("int puts(const char *s); // 将一行字符放入stdout。会自动加换行符。")])]),t._v(" "),v("hr"),t._v(" "),v("ul",[v("li",[t._v("int getc(FILE *stream); // 从stream读入一个字符。宏")]),t._v(" "),v("li",[t._v("int fgetc(FILE *stream); // 从stream读入一个字符。函数")]),t._v(" "),v("li",[t._v("int getchar(void) // 从stdin读入一个字符")]),t._v(" "),v("li",[t._v("int ungetc(int c, FILE *stream); // 将一个字符放回stream。只有第一次调用保证会成功。")]),t._v(" "),v("li",[t._v("char *fgets(char *s, int n, FILE *stream); // 从stream读入一行字符c。最多读取n-1个。不会丢弃换行符，但可能没读到。")]),t._v(" "),v("li",[t._v("char *gets(char *s); // 从stdin读入一行字符。自动丢弃换行符。\n注意：以上get函数在遇到问题时行为一样。遇到文件末尾，返回EOF，并设置流的文件末尾指示器。遇到读错误，返回EOF，并设置流的错误指示器。可用"),v("code",[t._v("int feof(FILE *fp),int ferror(FILE *fp)")]),t._v("函数区分这两种情况。")])]),t._v(" "),v("hr"),t._v(" "),v("p",[t._v("主要用于二进制流")]),t._v(" "),v("ul",[v("li",[t._v("size_t fwrite(const void *ptr, size_t size, size_t elnum, FILE *stream); // 把内存中的数组复制给流。ptr为数组地址，size为数组元素的大小(B)，elnum为数组元素数量。stream为写入的流。返回实际写入的"),v("strong",[t._v("元素")]),t._v("数量")]),t._v(" "),v("li",[t._v("size_t fread(void *ptr, size_t size, size_t elnum, FILE *stream); // 读入。返回值为实际读入的元素数量，应等于elnum")]),t._v(" "),v("li",[t._v("不一定非得是数组，结构体也行。")]),t._v(" "),v("li",[t._v("示例1: fwrite(arr, sizeof(a[0]), sizeof(a)/sizeof(a[0]), fp); // 写数组")]),t._v(" "),v("li",[t._v("示例2: fwrite(&s, sizeof(s), 1, fp); // 写结构体")])]),t._v(" "),v("hr"),t._v(" "),v("p",[t._v("文件定位(适合二进制流)")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("int fseek(FILE *stream, long int offset, int whence);")]),t._v(" "),v("ul",[v("li",[t._v("whence SEEK_SET, SEEK_CUR, SEEK_END 代表新位置的计算起点。")]),t._v(" "),v("li",[t._v("offset 可以为负。和whence共同确定pos。")]),t._v(" "),v("li",[t._v("移动到文件开头 fseek(fp, 0L, SEEK_SET)")]),t._v(" "),v("li",[t._v("移动到文件末尾 fseek(fp, 0L, SEEK_END)")]),t._v(" "),v("li",[t._v("往回移动10个字节 fseek(fp, -10L, SEEK_CUR)")])])]),t._v(" "),v("li",[v("p",[t._v("long int ftell(FILE *stream); // 返回当前pos。错误时，返回-1L，错误码在errno中。0表示文件起始，其他整数表示当前pos所在的字节数。")])]),t._v(" "),v("li",[v("p",[t._v("void rewind(FILE *stream); // 把pos设为0，且会清除fp的错误指示器。 类似fseek(fp, 0L, SEEK_SET)")])]),t._v(" "),v("li",[v("p",[t._v("int fgetpos(FILE *stream, fpos_t *pos); // 用于超大文件。fpos_t是一个结构，可储存超过long int可表示的数的位置。")])]),t._v(" "),v("li",[v("p",[t._v("int fsetpos(FILE *stream, const fpos_t *pos);")])])]),t._v(" "),v("h3",{attrs:{id:"临时文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#临时文件"}},[t._v("#")]),t._v(" 临时文件")]),t._v(" "),v("ul",[v("li",[t._v('FILE *tmpfile(void); // "wb+"')]),t._v(" "),v("li",[t._v("char *tmpnam(char *s); // 写入内容后才生成\n"),v("ul",[v("li",[t._v("参数为NULL时，会自动生成一个文件名，将文件名存储在静态变量中，并返回其指针。")]),t._v(" "),v("li",[t._v("否则，会把文件名复制到程序员提供的字符数组中。L_tmpnam宏为临时文件名的字符数组长度。")])])])]),t._v(" "),v("h3",{attrs:{id:"文件缓冲"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#文件缓冲"}},[t._v("#")]),t._v(" 文件缓冲")]),t._v(" "),v("ul",[v("li",[t._v("int fflush(FILE *stream); // 强制刷新")]),t._v(" "),v("li",[t._v("void setbuf(FILE *stream, char *buf); // 等价于(void) setvbuf(stream, NULL, _IONBF, 0) 或 (void) setvbuf(stream, buf, _IOFBF, BUFSIZ)")]),t._v(" "),v("li",[t._v("int setvbuf(FILE *stream, char *buf, int mode, size_t size);\n"),v("ul",[v("li",[t._v("缓冲mode有三种\n"),v("ul",[v("li",[t._v("_IOFBF 满缓冲 缓冲区满时刷新。默认设置")]),t._v(" "),v("li",[t._v("_IOLBF 行缓冲 没读/写一行就刷新")]),t._v(" "),v("li",[t._v("_IONBF 无缓冲 没有缓冲区")])])]),t._v(" "),v("li",[t._v("buf 是缓冲区。为NULL时，setvbuf会创建一个size大小的缓冲区。")]),t._v(" "),v("li",[t._v("size 是缓冲区的大小(Byte)")])])])]),t._v(" "),v("p",[t._v("通常，缓冲是后台发生的，向文件写数据时，数据先放入缓冲区。当缓冲区满或关闭文件时，缓冲区会自动flush(即将数据写入磁盘)。")]),t._v(" "),v("h3",{attrs:{id:"其他文件操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其他文件操作"}},[t._v("#")]),t._v(" 其他文件操作")]),t._v(" "),v("ul",[v("li",[t._v("int remove(const char *filename);")]),t._v(" "),v("li",[t._v("int rename(const char *old, const char *new);")])])])}),[],!1,null,null,null);_.default=s.exports}}]);