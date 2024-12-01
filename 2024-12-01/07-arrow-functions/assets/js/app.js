
function printPower2(num, powerFunc) {
    console.log(powerFunc(num))
}

// with inline functions, most of the times we won't need the name of the function
// so we can omit it
printPower2(3, function (num) { return num ** 2 }) //inline function
printPower2(3, (num) => { return num ** 2 }) //arrow function

// arrow function styles:
// the goal is - as less code as possible

// the same:
function sumExsample(a, b) {
    const result = a + b
    console.log(result)
    return result
}

// as this
const sum = (a, b) => {
    const result = a + b
    console.log(result)
    return result
}

// one argument, many lines of code
const power4 = num => {
    const result = num ** 4
    console.log(result)
    return result
}

console.log(power4(5))

// many arguments, one line of code
const powerX = (num, x) => console.log(num ** x)

// one argument, one line of code
const printPower22 = num => console.log(num ** 2)

// one line will return the line
const getPower2 = num => num ** 2

//invoke the function getPower2
console.log(getPower2(5))