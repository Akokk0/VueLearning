const arr = [
    {id: 1, name: '西瓜', state: true, price: 10, count: 1},
    {id: 2, name: '榴莲', state: true, price: 80, count: 2},
    {id: 3, name: '草莓', state: true, price: 20, count: 3}
]

//需求：把购物车数组中，已勾选的水果，总价累加起来
/*
let amt = 0  //总价
arr.filter(item => item.state).forEach(item => amt += item.price * item.count)
console.log(amt)*/

const result = arr.filter(item => item.state).reduce((amt, item) => amt += item.price * item.count, 0)
console.log(result)