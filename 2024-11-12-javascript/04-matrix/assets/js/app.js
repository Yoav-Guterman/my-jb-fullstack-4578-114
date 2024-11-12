const matrix = [
    [1, 2, 3],
    [15, 25, 35],
    [13, 23, 33]
]

//print 35
document.write(matrix[1][2]);
document.write("<hr>");

// print 23
document.write(matrix[2][1])
document.write("<hr>");

// display entire matrix in the for of way
for (const row of matrix) {
    for (const cell of row) {
        document.write(`${cell} | `);
    }
    document.write("<br>");
}

document.write("<hr>");


// display entire matrix in the for of way
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        document.write(`${matrix[i][j]} | `);
    }
    document.write("<br>");
}