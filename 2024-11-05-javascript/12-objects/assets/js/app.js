const emp = {
    firstName: 'yoav',
    familyName: 'guterman',
    salary: '12000'
}

for (const property in emp) {
    document.write(`employee ${property} is: ${emp[property]}<br>`)
}
// also a way to add things to the object:
// emp['address'] = "hayarden 5 herzeliya"
emp.address = "hayarden 5 herzeliya"
for (const property in emp) {
    document.write(`employee ${property} is: ${emp[property]}<br>`)
}

delete emp.salary
emp.address = "hayarden 5 herzeliya"
for (const property in emp) {
    document.write(`employee ${property} is: ${emp[property]}<br>`)
}