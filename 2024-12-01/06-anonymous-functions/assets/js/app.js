
function printPower2(num, powerFunc) {
    console.log(powerFunc(num))
}

// with inline functions, most of the times we won't need the name of the function
// so we can omit it
printPower2(3, function (num) { return num ** 2 }) //inline function