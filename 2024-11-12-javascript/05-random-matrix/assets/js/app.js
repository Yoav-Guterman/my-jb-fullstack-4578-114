const matrix = [];

for (let rowCount = 0; rowCount < 5; rowCount++) {
    const row = [];
    for (let colCount = 0; colCount < 5; colCount++) {
        const randomNumber = parseInt(Math.random() * 100);
        row.push(randomNumber);
    }
    matrix.push(row);
}

console.log(matrix);


let max = 0;
for (const row of matrix) {
    for (const cell of row) {
        max = cell > max ? cell : max;
    }
}

console.log(`max value is: ${max}`)
const maxi = {
    row: 0,
    col: 0,
    value: 0
}

for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        if (matrix[row][col] > maxi.value) {
            maxi.value = matrix[row][col];
            maxi.row = row;
            maxi.col = col;
        }
    }
}

console.log(`max value is: ${maxi.value} located in: [${maxi.row}][${maxi.col}]`)
