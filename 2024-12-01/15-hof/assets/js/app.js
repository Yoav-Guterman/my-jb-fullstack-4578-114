const students = [
    {
        name: 'Yoav',
        grade: 95,
        age: 22
    },
    {
        name: 'Beery',
        grade: 96,
        age: 18
    },
    {
        name: 'Itay',
        grade: 65,
        age: 25
    },
]

// find item
// loop version
for (const student of students) {
    if (student.grade === 65) {
        console.log(student)
        break
    }
}

// hof version
const student = students.find((student) => student.grade === 65)
console.log(student)

// filter items
// loop version
const studentWith90Plus = []
for (const student of students) {
    if (student.grade > 90 && student.name.startsWith('B')) {
        studentWith90Plus.push(student)
    }
}
console.log(studentWith90Plus)

// hof version
const filteredStudents = students.filter(student => student.grade > 90 && student.name.startsWith('B'))
console.log(filteredStudents)


// find index
// loop version
for (let i = 0; i < students.length; i++) {
    if (students[i].age === 25) {
        console.log(i)
        break
    }
}

// hof version
const index = students.findIndex(student => student.age === 25)
console.log(index)

// some logic per item
// loop version

for (const student of students) {
    console.log(student)
}

// hof
students.forEach(student => console.log(student))


// convert array

// loop version
const newArray = []
for (const student of students) {
    newArray.push(`
        <tr>
            <td>${student.name}</td>
            <td>${student.grade}</td>
            <td>${student.age}</td>
        <tr>`)
}
document.getElementById('table').innerHTML = newArray.join('')

// hof version
const anotherNewArray = students.map(student =>
    `
        <tr>
            <td>${student.name}</td>
            <td>${student.grade}</td>
            <td>${student.age}</td>
        <tr>`
)
document.getElementById('table2').innerHTML = newArray.join('')

// how to give each student 3 bonus points 
const studentsAfterBonus = students.map(student => ({

    name: student.name,
    age: student.age,
    grade: student.grade + 3

}))
console.log(studentsAfterBonus)

// extract a single value out of an array
let sum = 0;
let avg = 0;
for (const student of students) {
    sum += student.grade
}
avg = sum / students.length
console.log(avg)

// the hof way 
const sum2 = students.reduce((cumulativeValue, student) => cumulativeValue + student.grade, 0)
const avg2 = sum2 / students.length
console.log(avg2)

const max = students.reduce((currentMax, student) => currentMax > student.grade ? currentMax : student.grade, 0)
console.log(max)