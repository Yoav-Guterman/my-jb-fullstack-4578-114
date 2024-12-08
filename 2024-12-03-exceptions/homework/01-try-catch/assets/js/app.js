const sizeArray = event => {
    try {
        event.preventDefault()
        const numArray = []
        const size = parseInt(document.getElementById('size').value)
        if (isNaN(size) || size <= 0) throw new Error('enter valid array length')
        for (let i = 0; i < size; i++) {
            const number = +prompt(`enter number for the array .\n${i + 1} out of ${size}`)
            if (isNaN(number) || number === null || number === undefined) throw new Error('enter valid number')
            numArray.push(number)
        }
        console.log(`the average is: ${getAverage(numArray)}`)
    } catch (error) {
        console.log(error.message)
    }

}

const getAverage = numArray => {
    if (!numArray) throw new Error('please enter valid input')
    if (!Array.isArray(numArray)) throw new Error('Please enter a proper array');
    if (numArray.length === 0) throw new Error('Array cannot be empty');
    const sum = numArray.reduce((acc, num) => acc + num, 0)
    return sum / numArray.length
}
