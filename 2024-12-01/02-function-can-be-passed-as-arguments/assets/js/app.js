const name = 'shahar'
const grade = 96
function showGrade(grade) {
    console.log(`grade is ${grade}`)
}


function showName(name) {
    console.log(`name is ${name}`)
}

function showFunction(someFunction) {
    console.log(`some function is: ${someFunction}`)
    console.log(`some type function is: ${typeof someFunction}`)
    someFunction(60)
}

showName(name)
showGrade(grade)

showFunction(showGrade)