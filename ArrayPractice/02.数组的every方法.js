const arr = [
    {id: 1, name: '西瓜', state: true},
    {id: 2, name: '榴莲', state: true},
    {id: 3, name: '草莓', state: true}
]

//需求：判断数组中，水果是否被全部选中了

const result = arr.every(item => item.state)

console.log(result)
