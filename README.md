#到位

 ## 项目总结

   ###项目选型
        jQuery
        bootstrap
        swiper
   ###css预编译器
       使用stylus预编译器
       安装依赖包
       npm install stylus stylus-loader --save-dev
       stylus的使用

       	1. 安装 npm  install -g stylus   //全局安装
       	2. 导入其他css    @import "reset.css"
        stylus编译
       	    新建文件夹test
       	    新建demo.styl文件
            新建test/dist文件夹
            打开命令行界面
       	    输入 stylus -w demo.styl -o dist
       	    是自动监视文件 -o 是将编译后的CSS文件输出到指定文件中
       	    在demo.styl里面写内容，保存即可


 ## 项目搭建
   ###使用express创建项目
       1、安装：npm install express-generator -g
       2、express daowei
       3、npm install    安装所有依赖

   ###完成进度
       头部导航完成
       问题：头部a标签内容溢出，解决方式给父元素设置white-space: nowrap;
       轮播图初步完成
       页面列表搭建中
