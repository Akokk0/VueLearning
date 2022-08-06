const arr = ['小红', '你大红', '苏大强', '宝']

//foreach循环一旦开始就无法停止
/*
arr.forEach((item , index) => {
    if (item === '苏大强') console.log(index)
})
*/

arr.some((item, index) => {

    console.log('ok')

    if (item === '苏大强') {
        console.log(index)
        //在找到对应的项时通过return true结束循环
        return true
    }
})