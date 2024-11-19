function getNumbers() {
    const arr = []
    for (let i = 1; i <= 3; i++) {
        const num = +(document.getElementById(`number${i}`).value)
        arr.push(num)
    }
    return arr
}

function sum() {
    let sum = 0;
    for (let i = 0; i < 3; i++) {
        sum += getNumbers()[i]
    }
    return sum
}

function alertSum() {
    alert(sum())
}

function alertAverage() {
    alert(sum() / 3)
}