
// function printPower2(num, powerFunc) {
//     console.log(powerFunc(num))
// }

// // with inline functions, most of the times we won't need the name of the function
// // so we can omit it
// printPower2(3, function (num) { return num ** 2 }) //inline function
// printPower2(3, (num) => { return num ** 2 }) //arrow function

// // arrow function styles:
// // the goal is - as less code as possible

// // the same:
// function sumExsample(a, b) {
//     const result = a + b
//     console.log(result)
//     return result
// }

// // as this
// const sum = (a, b) => {
//     const result = a + b
//     console.log(result)
//     return result
// }

// // one argument, many lines of code
// const power4 = num => {
//     const result = num ** 4
//     console.log(result)
//     return result
// }

// console.log(power4(5))

// // many arguments, one line of code
// const powerX = (num, x) => console.log(num ** x)

// // one argument, one line of code
// const printPower22 = num => console.log(num ** 2)

// // one line will return the line
// const getPower2 = num => num ** 2

// //invoke the function getPower2
// console.log(getPower2(5))



// //exercise 1- no params , single command
// function sayHello() {
//     console.log('hello')
// }


// doSomething(sayHello)

// // inline function
// doSomething(function sayHello() { console.log('hello') })

// // anonymous function
// doSomething(function () { console.log('hello') })

// // arrow function
// doSomething(() => console.log('hello'))

//exercise 2- several params , single command
function sum(a, b, c) {
    console.log(a + b + c)
}

function doSum(callback) {
    callback(10, 20, 30)
}

// inline
doSum(function sum(a, b, c) {
    console.log(a, b, c)
})
// anonymous
doSum(function (a, b, c) {
    console.log(a + b + c)
})
// arrow
doSum((a, b, c) => console.log(a + b + c))


// exercise 3 - several arguments, single command
function getPower2(num) {
    return num ** 2
}

function PrintPower2(callback) {
    console.log(callback(20))
}

PrintPower2(getPower2)

// inline
PrintPower2(function getPower2(num) {
    return num ** 2
})

// anonymous
PrintPower2(function (num) {
    return num ** 2
})

// arrow
PrintPower2(num => num ** 2)

// rewrite the following functions to arrow functions
// normal:
function divide(a, b) {
    const result = a / b
    return result
}
// arrow:
const divide = (a, b) => a / b

//normal:
function printIsEven(num) {
    if (num % 2 === 0) {
        console.log('odd')
    } else {
        console.log('even')
    }
}
// arrow:
const printIsEven = num => console.log(num % 2 === 0 ? 'even' : 'odd')

// normal:
function isNegative(num) {
    if (num < 0) {
        console.log('negative!')
        return true
    }
    return false
}

// arrow:
const isNegative = num => {
    if (num < 0) {
        console.log('negative!')
        return true
    }
    return false
}