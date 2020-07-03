
# 压缩ES6 js代码工具
- 本工具为uglifyes的简单封装,方便批量压缩,批量输出
- 需先安装uglify-es后,新建`main.js`,写入如下代码,通过`options`里的`Entrypath`和`Outpath`来配置输入输出路径,`options`的其他属性配置压缩参数.其API详见[uglifyes](https://github.com/LiPinghai/UglifyJSDocCN/blob/master/README.md)兼容ES6的代码压缩

- 需要批量压缩,批量输出文件,可在命令行中输入```node ./main.js```或者```npm run compress```,或者```yarn compress```
