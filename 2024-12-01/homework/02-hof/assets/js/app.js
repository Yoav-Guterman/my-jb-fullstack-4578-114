// exercise 1
// const numbers = []
// for (let i = 1; i <= 20; i++) {
//     randomNumber = Math.floor(Math.random() * 100) + 1
//     numbers.push(randomNumber)
// }
// console.log(numbers)
// // את המערך עצמו – כל פריט בשורה נפרדת.
// numbers.forEach(num => console.log(num))
// // את המספר הזוגי הראשון.
// const firstEven = numbers.find(num => num % 2 === 0)
// console.log(firstEven)
// // את המספר הראשון שגדול מ-50.
// const biggerThan50 = numbers.find(num => num > 50)
// console.log(biggerThan50)
// // את כל המספרים האי-זוגיים.
// const oddNumbersArray = numbers.filter(num => num % 2 !== 0)
// console.log(oddNumbersArray)
// // את כל המספרים הגדולים מ-50.
// const numbersBiggerThan50 = numbers.filter(num => num > 50)
// console.log(numbersBiggerThan50)
// // את האינדקס של המספר הראשון הגדול מ-50.
// const index = numbers.findIndex(num => num > 50)
// console.log(index)
// // עבור כל מספר להציג האם הוא זוגי או אי-זוגי.
// numbers.forEach(num => console.log(num % 2 === 0 ? 'even' : 'odd'))
// // את המספר המינימלי.
// const min = numbers.reduce((min, num) => num < min ? num : min, numbers[0])
// console.log(min)
// // את המספר המקסימלי.
// const max = numbers.reduce((max, num) => num > max ? num : max, numbers[0])
// console.log(max)

// exercise 2
// const pointsArray = []
// for (let i = 0; i < 20; i++) {
//     const xAxis = Math.floor((Math.random() * 100) + 1)
//     const yAxis = Math.floor((Math.random() * 100) + 1)
//     const point = {
//         xAxis,
//         yAxis
//     }
//     pointsArray.push(point)
// }
// console.log(pointsArray)
// // את המערך עצמו – הצגה של x ו-y – כל זוג בשורה משלו.
// pointsArray.forEach(point => console.log(point.xAxis, point.yAxis))

// // את האובייקט הראשון שבו x גדול מ-y.
// console.log(pointsArray.findIndex(point => point.xAxis > point.yAxis))

// // את האובייקט הראשון שעבורו y גדול מ-50.
// console.log(pointsArray.find(point => point.yAxis > 50))

// // את כל האובייקטים שעבורם x הוא אי-זוגי.
// const xAxisOddArray = pointsArray.filter(point => point.xAxis % 2 !== 0)
// console.log(xAxisOddArray)

// // את כל האובייקטים שעבורם y גדול מ-50.
// const yAxisBiggerThan50 = pointsArray.filter(point => point.yAxis > 50)
// console.log(yAxisBiggerThan50)
// // את האינדקס של האובייקט הראשון בעל x הגדול מ-50.
// const index = pointsArray.findIndex(point => point.xAxis > 50)
// console.log(index)

// עבור כל נקודה – את המרחק מראשית הצירים.
// const distances = pointsArray.map(point => Math.sqrt((point.xAxis ** 2) + (point.yAxis ** 2)));
// distances.forEach(distance => console.log(distance));
// את ה-x המינימלי.
// const min = pointsArray.reduce((min, point) => point.xAxis < min ? point.xAxis : min, pointsArray[0].xAxis)

// // את אובייקט הנקודה בעלת ה-x המינימלי.
// const min = pointsArray.reduce((min, point) => point.xAxis < min ? point.xAxis : min, pointsArray[0].xAxis)
// const minPoint = pointsArray.find(point => point.xAxis === min)
// console.log(minPoint)

//exercise 3
// const randomNumber = (max, min) => Math.floor((Math.random() * (max - min)) + min)

// const pizzaArray = []
// for (let i = 0; i < 20; i++) {
//     const diameter = randomNumber(50, 10)
//     const slices = randomNumber(8, 4)
//     const toppings = randomNumber(6, 1)
//     const price = randomNumber(100, 20)
//     const pizzaObject = {
//         diameter,
//         slices,
//         toppings,
//         price
//     }
//     pizzaArray.push(pizzaObject)
// }

// // את המערך עצמו – כל אובייקט בשורה נפרדת.
// pizzaArray.forEach(pizza => {
//     console.log(`pizza Diameter: ${pizza.diameter}\npizza slices: ${pizza.slices}\npizza toppings ${pizza.toppings}\npizza price: ${pizza.price}`)
// })
// // את הפיצה הראשונה ללא תוספות.
// console.log(`pizza Diameter: ${pizzaArray[0].diameter}\npizza slices: ${pizzaArray[0].slices}\npizza price: ${pizzaArray[0].price}`)

// // את הפיצה הראשונה בעלת מחיר זול מ-30.
// console.log(pizzaArray.find(pizza => pizza.price < 30))

// // את כל הפיצות האישיות (קוטר קטן או שווה ל-20).
// const smallPizzaArray = pizzaArray.filter(pizza => pizza.diameter <= 20)
// console.log(smallPizzaArray)
// // את כל הפיצות היקרות (מחיר גדול מ-80).
// const expensivePizzaArray = pizzaArray.filter(pizza => pizza.price > 80)
// console.log(expensivePizzaArray)
// // את כל הפיצות ללא תוספות.
// const pizzaArrayNoToppings = pizzaArray.map(pizza => {
//     return {
//         diameter: pizza.diameter,
//         slices: pizza.slices,
//         toppings: 0,  // מורידים את התוספות ל-0
//         price: pizza.price
//     }
// })
// console.log(pizzaArrayNoToppings)
// // את האינדקס של הפיצה הראשונה בעלת 6 משולשים.
// const firstSixSlicesPizza = pizzaArray.findIndex(pizza => pizza.slices === 6)
// console.log(firstSixSlicesPizza)
// // את הרדיוסים של כל הפיצות (רדיוס = קוטר חלקי 2).
// const pizzaRadius = pizzaArray.map(pizza => pizza.diameter / 2)
// console.log(pizzaRadius)
// // עבור כל פיצה – אובייקט חדש המכיל: price (מחיר מקורי) vat (ערך המע"מ של המחיר כאשר המחיר המקורי הוא מחיר כולל מע"מ).
const pizzaVat = pizzaArray.map(pizza => {
    return {
        price: pizza.price,
        vatPrice: pizza.price * 0.17
    }
})
// console.log(pizzaVat)
// // את סכום כל מחירי הפיצות.
// const sumOfAllPizzas = pizzaArray.reduce((sum, pizza) => sum + pizza.price, 0)
// console.log(sumOfAllPizzas)
// // את המחיר היקר ביותר.
// // const mostExpensivePizza = pizzaArray.reduce((max, pizza) => pizza.price > max ? pizza.price : max, pizzaArray[0].price)
// // console.log(mostExpensivePizza)
// // את אובייקט הפיצה בעלת המחיר היקר ביותר.
// const mostExpensivePizza = pizzaArray.reduce((max, pizza) => pizza.price > max ? pizza.price : max, pizzaArray[0].price)
// console.log(pizzaArray.find(pizza => pizza.price === mostExpensivePizza))