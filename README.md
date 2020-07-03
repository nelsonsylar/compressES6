
# 压缩ES6 js代码工具
- 本工具为uglifyes的二次封装,使其有批量压缩,批量输出的功能
- 其API详见[uglifyes](https://github.com/LiPinghai/UglifyJSDocCN/blob/master/README.md)兼容ES6的代码压缩


### 使用node的方式压缩输出
- 需要批量压缩,批量输出文件,可在命令行中输入```node ./main.js```或者```npm run compress```,或者```yarn compress```
- 可在options中配置参数,其API详见[uglifyes](https://github.com/LiPinghai/UglifyJSDocCN/blob/master/README.md)

### 使用cli命令行的方式压缩输出
- 需先全局安装uglify-es后可用命令行压缩
```yarn global add uglify-es```
```uglifyjs [input files] [options]```
```
//例如压缩jquery.js到/dist目录中jquery.min.js,前提要先创建dist文件夹,命令不会自动创建文件夹
uglifyjs ./jquery.js -o ./dist/jquery.min.js
```

