// exercise 1
// normal function
// function printName() {
//     console.log('your name is yoav')
// }

// function executeCallback(callback) {
//     callback();
// }

// executeCallback(printName)

// inline function
// function executeCallback(callback) {
//     callback();
// }
// executeCallback(function printName() { console.log('your name is yoav') })

// anonymous function
// function executeCallback(callback) {
//     callback();
// }
// executeCallback(function () { console.log('your name is yoav') })
// arrow function
// const executeCallback = callback => {
//     callback();
// }
// executeCallback(() => console.log('your name is yoav'))


// exercise 2
// normal function
// function randomNumber() {
//     console.log(parseInt((Math.random() * 10)))
// }

// function cool(callback) {
//     callback();
// }

// cool(randomNumber)

// inline function
// function cool(callback) {
//     callback();
// }

// cool(function randomNumber() {console.log(parseInt((Math.random() * 10))) })

// anonymous function
// function cool(callback) {
//     callback();
// }

// cool(function () { console.log(parseInt(Math.random() * 10)) })

// arrow function
// const cool = callback => {
//     callback();
// }

// cool(() => console.log(parseInt(Math.random() * 10)))


// exercise 3
// normal function
// function displayNumber(num) {
//     console.log(num)
// }

// function nice(callback) {
//     callback(42);
// }

// nice(displayNumber)

// inline function
// function nice(callback) {
//     callback(42);
// }
// nice(function displayNumber(num) { console.log(num) })

// anonymous function
// function nice(callback) {
//     callback(42);
// }
// nice(function (num) { console.log(num) })

// arrow function
// const nice = callback => {
//     callback(42);
// }
// nice(num => console.log(num))


// exercise 4
// normal function
// function amazing(callback) {
//     const num = callback(42, 128, 37, 81, 66);
//     document.write("Num: " + num);
// }

// function selectRandomNumber() {
//     const numbers = Array.from(arguments);
//     const randomIndex = parseInt(Math.random() * numbers.length);
//     const selectedNumber = numbers[randomIndex];
//     console.log(selectedNumber);
//     return selectedNumber;
// }

// amazing(selectRandomNumber);

// inline function
// function amazing(callback) {
//     const num = callback(42, 128, 37, 81, 66);
//     document.write("Num: " + num);
// }

// amazing(function selectRandomNumber() {
//     const numbers = Array.from(arguments);
//     const randomIndex = parseInt(Math.random() * numbers.length);
//     const selectedNumber = numbers[randomIndex];
//     console.log(selectedNumber);
//     return selectedNumber;
// });

// anonymous function
// function amazing(callback) {
//     const num = callback(42, 128, 37, 81, 66);
//     document.write("Num: " + num);
// }

// amazing(function () {
//     const numbers = Array.from(arguments);
//     const randomIndex = parseInt(Math.random() * numbers.length);
//     const selectedNumber = numbers[randomIndex];
//     console.log(selectedNumber);
//     return selectedNumber;
// });

// arrow function
// const amazing = callback => {
//     const num = callback(42, 128, 37, 81, 66);
//     document.write("Num: " + num);
// }

// amazing((...args) => {
//     const numbers = args;
//     const randomIndex = parseInt(Math.random() * numbers.length);
//     const selectedNumber = numbers[randomIndex];
//     console.log(selectedNumber);
//     return selectedNumber;
// });


// exercise 5
// normal function
// function cool(paintCallback) {
//     paintCallback();
// }

// function randomColorScreen() {
//     const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
//     document.body.style.backgroundColor = randomColor
// }

// cool(randomColorScreen)

// inline function
// function cool(paintCallback) {
//     paintCallback();
// }

// cool(function randomColorScreen() {
//     const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
//     document.body.style.backgroundColor = randomColor
// })

// anonymous function
// function cool(paintCallback) {
//     paintCallback();
// }

// cool(function () {
//     const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
//     document.body.style.backgroundColor = randomColor
// })

// arrow function
// const cool = paintCallback => {
//     paintCallback();
// }

// cool(() => {
//     const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
//     document.body.style.backgroundColor = randomColor
// })

// exercise 6
// normal function
// function nice(paintCallback) {
//     paintCallback('brown');
// }

// function colorScreen(color) {
//     document.body.style.backgroundColor = color
// }

// nice(colorScreen)

// inline function
// function nice(paintCallback) {
//     paintCallback('green');
// }

// nice(function colorScreen(color) { document.body.style.backgroundColor = color })

// anonymous function
// function nice(paintCallback) {
//     paintCallback('green');
// }

// nice(function (color) { document.body.style.backgroundColor = color })


// arrow function
// const nice = paintCallback => {
//     paintCallback('red');
// }

// nice(color => document.body.style.backgroundColor = color)


//exercise 7
// normal function
// function amazing(paintCallback) {
//     const paintedColor = paintCallback('Red', 'Green', 'Blue');
//     console.log('Painted Color: ' + paintedColor);
// }

// function randomColorFromArray(color1, color2, color3) {
//     const colors = [color1, color2, color3]
//     const randomIndex = parseInt(Math.random() * colors.length)
//     const randomColor = colors[randomIndex]
//     document.body.style.backgroundColor = randomColor
//     return randomColor
// }

// amazing(randomColorFromArray)

// inline function
// function amazing(paintCallback) {
//     const paintedColor = paintCallback('Red', 'Green', 'Blue');
//     console.log('Painted Color: ' + paintedColor);
// }

// amazing(function randomColorFromArray(color1, color2, color3) {
//     const colors = [color1, color2, color3]
//     const randomIndex = parseInt(Math.random() * colors.length)
//     const randomColor = colors[randomIndex]
//     document.body.style.backgroundColor = randomColor
//     return randomColor
// })

// anonymous function
// function amazing(paintCallback) {
//     const paintedColor = paintCallback('Red', 'Green', 'Blue');
//     console.log('Painted Color: ' + paintedColor);
// }

// amazing(function (color1, color2, color3) {
//     const colors = [color1, color2, color3]
//     const randomIndex = parseInt(Math.random() * colors.length)
//     const randomColor = colors[randomIndex]
//     document.body.style.backgroundColor = randomColor
//     return randomColor
// })

// arrow function
// const amazing = paintCallback => {
//     const paintedColor = paintCallback('Red', 'Green', 'Blue');
//     console.log('Painted Color: ' + paintedColor);
// }

// amazing((color1, color2, color3) => {
//     const colors = [color1, color2, color3]
//     const randomIndex = parseInt(Math.random() * colors.length)
//     const randomColor = colors[randomIndex]
//     document.body.style.backgroundColor = randomColor
//     return randomColor
// })


// exercise 8
// normal function
// function randomNumberEachSecond() {
//     const randomNumber = (Math.floor(Math.random() * 99) + 1)
//     console.log(randomNumber)
// }

// setInterval(randomNumberEachSecond, 1000)

// inline function
// setInterval(function randomNumberEachSecond() {
//     const randomNumber = (Math.floor(Math.random() * 99) + 1)
//     console.log(randomNumber)
// }, 1000)

// anonymous function
// setInterval(function () {
//     const randomNumber = (Math.floor(Math.random() * 99) + 1)
//     console.log(randomNumber)
// }, 1000)

// arrow function
// setInterval(() => console.log((Math.floor(Math.random() * 99) + 1)), 1000)


// exercise 9
// normal function
// function randomColorScreen() {
//     const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
//     document.body.style.backgroundColor = randomColor
// }

// setInterval(randomColorScreen, 1000)

// inline function
// setInterval(function randomColorScreen() {
//     const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
//     document.body.style.backgroundColor = randomColor
// }, 1000)

// anonymous function
// setInterval(function () {
//     const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
//     document.body.style.backgroundColor = randomColor
// }, 1000)

// arrow function
// setInterval(() => document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`, 1000)


// exercise 10
// normal function
// function randomArray() {
//     const randomNumberArray = []
//     for (i = 0; i < 100; i++) {
//         const randomNumber = Math.floor(Math.random() * 100)
//         randomNumberArray.push(randomNumber)
//     }
//     console.log(randomNumberArray)
// }

// setInterval(randomArray, 1000)

// inline function
// setInterval(function randomArray() {
//     const randomNumberArray = []
//     for (i = 0; i < 100; i++) {
//         const randomNumber = Math.floor(Math.random() * 100)
//         randomNumberArray.push(randomNumber)
//     }
//     console.log(randomNumberArray)
// }, 1000)

// anonymous function
// setInterval(function () {
//     const randomNumberArray = []
//     for (i = 0; i < 100; i++) {
//         const randomNumber = Math.floor(Math.random() * 100)
//         randomNumberArray.push(randomNumber)
//     }
//     console.log(randomNumberArray)
// }, 1000)

// arrow function
// setInterval(() => {
//     const randomNumberArray = []
//     for (i = 0; i < 100; i++) {
//         const randomNumber = Math.floor(Math.random() * 100)
//         randomNumberArray.push(randomNumber)
//     }
//     console.log(randomNumberArray)
// }, 1000)
