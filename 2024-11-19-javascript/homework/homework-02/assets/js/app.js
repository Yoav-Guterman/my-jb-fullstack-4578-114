function collectData() {
    const firstName = document.getElementById('firstName').value
    const familyName = document.getElementById('familyName').value
    const grade = Number(document.getElementById('grade').value)
    count += 1
    sum += grade
    return {
        firstName: firstName,
        familyName: familyName,
        grade: grade,
        count: count,
        sum: sum
    }
}

function generateHTML(data) {
    const newHTML = {
        addGrade:
            `<tr>
        <th scope="row">${data.count}</th>
        <td>${data.firstName}</td>
        <td>${data.familyName}</td>
        <td>${data.grade}</td>
    </tr>`,
        average: `average of the class is: ${data.sum / data.count}`
    }
    return newHTML
}

function renderHTML(newHTML) {
    const grades = document.getElementById("grades")
    grades.innerHTML += newHTML.addGrade
    const averageClass = document.getElementById('averageClass')
    averageClass.innerHTML = newHTML.average
}

function addStudentGrade(event) {
    event.preventDefault()
    const data = collectData()
    const newHTML = generateHTML(data)
    // saveSingleCarToStorage(data)
    renderHTML(newHTML)
    // clearForm()
}

let count = 0;
let sum = 0;