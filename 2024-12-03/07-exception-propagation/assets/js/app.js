const fixNum = (num, numberOfDigits) => num.toFixed(numberOfDigits)

const work = () => {
    const numberOfDigits = +prompt('enter number of digits')

    console.log('hello1')

    const pi = Math.PI.toFixed(numberOfDigits)
    console.log(pi)
}

work()