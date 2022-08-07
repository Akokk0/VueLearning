function Person(name, age) {
    this.name = name
    this.age = age
}

// 什么都得不到  person1 为 undefined
const person1 = Person('zs', 18)

const person2 = new Person('ls', 20)

// 什么都不打印
console.log(Person('zs', 18))  // undefined
console.log(person2)
