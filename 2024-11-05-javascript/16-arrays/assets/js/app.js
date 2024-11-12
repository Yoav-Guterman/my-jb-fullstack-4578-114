// const grades = [97, 66, 73, 88, 55, 78]
// document.write(`the grades array is: ${grades}<br>`)

// grades.push(90)

// document.write(`the array length is: ${grades.length}`)

// document.write('<br>')

// grades.splice(3, 1)

// document.write(grades)

// document.write('<br>')

// grades.splice(2, 2)

// const grades = [97, 66, 73, 88, 55]
// for (i = 0; i <= grades.length - 1; i++) {
//     document.write(`grade is: ${grades[i]}<br>`)
// }


// const grades = [97, 66, 73, 88, 55]
// for (i = 0; i <= grades.length - 1; i++) {
//     document.write(`grade is: ${grades[i]}<br>`)
// }


// // for in - on object
// // for of - on array
// for (const item of grades) {
//     document.write(`${item}<br>`)
// }


const grades = [];
let num;
let sum = 0;
let max = 0;

for (let i = 1; i <= 12; i++) {
    const randomNumber = parseInt(Math.random() * ((100 + 1) - 0))
    grades.push(randomNumber)
}

document.write(`first grade is: ${grades[0]}<br>`)

for (const grade of grades) {
    document.write(`grade is: ${grade} <br>`)
    sum = sum + grade
    max = grade > max ? grade : max
}

document.write(`sum is: ${sum}<br> the avg is: ${sum / 12}<br> the max grade is: ${max}`)
