
# 压缩ES6 js代码工具
- 本工具为uglifyes的简单封装,方便批量压缩,批量输出
- 通过对`main.js`中的`options`里的`Entrypath`和`Outpath`来配置输入输出路径,`options`的其他属性配置压缩参数.其API详见[uglifyes](https://github.com/LiPinghai/UglifyJSDocCN/blob/master/README.md)兼容ES6的代码压缩

- 使用:
1. ```npm install```或者```yarn```
2. 将需要被压缩的js放入`/src`路径
3. 在命令行中输入```node ./main.js```或者```npm run compress```,或者```yarn compress```
4. 成功后将在`/dist`路径生成压缩好的`*.min.js`文件
