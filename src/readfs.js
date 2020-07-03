var fs = require('fs')
const { resolve } = require('path')
const options = {
    Entrypath: '/src',
    Outpath: '/dist'
}
let array = []
fs.readdir(resolve('./') + options.Entrypath, function (err, files) {
    if (err) {
        console.log(err);
    }
    console.log(files);
    files.forEach(item => {
        let list = item.split('.')
        let tempLength = list.length
        if (list[tempLength - 1] == 'js') {
            array.push(resolve('./') + options.Entrypath + item)
        }
    })
    console.log(array)
})


