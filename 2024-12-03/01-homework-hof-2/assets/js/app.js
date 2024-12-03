const getRandomBetween0And100 = () => Math.floor(Math.random() * 101)

const getRandomPoint = () =>
({
    x: getRandomBetween0And100(),
    y: getRandomBetween0And100()
})

const points = []
for (let i = 0; i < 20; i++) {
    points.push(getRandomPoint())
}


points.forEach(point => console.log(point))

console.log('first point where y > 50')


console.log('all points where y is even')
console.log(points.filter(point => point.y % 2 === 0))

console.log('all points where x is odd')
console.log(points.filter(point => point.x % 2 !== 0))
