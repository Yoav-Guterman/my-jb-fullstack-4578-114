// const showVat = (event) => {
//     event.preventDefault()
//     const price = document.getElementById('price').value
//     const vat = getVat(price)
//     console.log(`the vat for ${price} is ${vat}`)
// }

// const getVat = (price) => {
//     if (!price) throw new Error('price is required')
//     if (typeof price !== 'number') throw new Error('price must be a number')
//     if (price < 0) throw new Error ('price must be a positive number')
//     return price * 0.17
// }

// class exercise
const showGrade = (event) => {
    event.preventDefault()
    const grade = parseInt(document.getElementById('grade').value)
    try {
        const factorGrade = getFactorGrade(grade)
        console.log(`the grade ${grade} with factor is ${factorGrade}`)
    } catch (e) {
        console.log(e.message)
    }

}

const getFactorGrade = (grade) => {
    if (!grade) throw new Error('grade is required')
    if (typeof grade !== 'number') throw new Error('grade must be a number')
    if (grade < 0 || grade > 100) throw new Error('grade must be a between 0 and 100')
    return Math.sqrt(grade) * 10
}