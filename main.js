var UglifyJS = require("uglify-es");
var fs = require('fs')
const { resolve } = require('path')
let array = []//src文件夹内的js目录集合
let codeArray = []//压缩后的代码集合
let jsname = []//src文件夹的js名集合
const options = {
    //*******配置输入输出口*********/
    Entrypath: '/src',//需要批量压缩js的文件夹入口
    Outpath: '/out',//批量压缩后js的文件夹
    //*******配置输入输出口*********/

    //*******配置uglifyjs其他参数*********/
    //详见https://github.com/LiPinghai/UglifyJSDocCN/blob/master/README.md
    warnings: false,
    parse: {
        // parse options
    },
    compress: {
        // compress options
    },
    mangle: {
        // mangle options

        properties: {
            // mangle property options
        }
    },
    output: {
        // output options
    },
    sourceMap: {
        // source map options
    },
    nameCache: null, // or specify a name cache object
    toplevel: false,
    ie8: false,
}

init()//开始

//**********函数部分***************
//判断输出路径是否存在
function judgeDir() {
    fs.exists(options.Outpath.split('/')[1], function (exists) {
        if (exists) {
            console.log(`${options.Outpath}目录已存在,进入下一步`)
        } else {
            console.log('指定目录不存在,进入下一步')
            creatFolder(options.Outpath)
        }
        //执行创建完文件夹,执行压缩代码
        for (let i = 0; i < array.length; i++) {
            let patharray = jsname[i]
            let item = codeArray[i]
            startCompress(options.Outpath, patharray, item, i + 1)
        }
    })
}

//创建文件夹,默认dist
function creatFolder(dirName = '/dist') {
    fs.mkdir(resolve('./') + dirName, function (err) { })
    console.log(`创建${options.Outpath}成功`)
}
//执行写入压缩后的代码
function startCompress(dirName = '/dist', array, item, n = 0) {
    console.log(`开始写入第${n}条压缩后代码`)
    let length = array.lastIndexOf('.')
    fs.writeFileSync(`${resolve('./')}${dirName}/${array.slice(0, length)}.min.js`, item);
    console.log('写入代码成功')
}
//遍历入口文件夹
function startLoop(dirName = '/src') {
    fs.readdir(resolve('./') + dirName, function (err, files) {
        if (err) {
            console.log(err);
        }
        // console.log(files);
        files.forEach(item => {
            let list = item.split('.')
            let tempLength = list.length
            if (list[tempLength - 1] == 'js') {
                array.push(resolve('./') + options.Entrypath + '/' + item)
                jsname.push(item)
            }
        })
        console.log(`遍历${options.Entrypath}目录成功,共有${array.length}个js文件`)
        // console.log(array)
        console.log('执行uglify,压缩代码')
        toUglify()
    })
}
//导入uglifyCode
function toUglify() {
    // console.log(array)
    array.forEach((item) => {
        let code = fs.readFileSync(item, "utf8");
        let uglifyCode = UglifyJS.minify(code).code;
        codeArray.push(uglifyCode)
    })
}
//初始化
function init() {
    console.log('初始化开始')
    startLoop(options.Entrypath)
    console.log('判断输出路径是否存在')
    judgeDir()
}