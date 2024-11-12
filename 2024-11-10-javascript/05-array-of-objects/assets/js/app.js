const mira = {
    name: 'Mira',
    age: 22,
    gender: 'female',
    city: 'Petch Tiqwa'
}

const yoav = {
    name: 'yoav',
    age: 22,
    gender: 'male',
    city: 'Herzeliya'
}

const beery = {
    name: 'beery',
    age: 18,
    gender: 'male',
    city: 'Holon'
}

const osher = {
    name: 'Osher',
    age: 22,
    gender: 'male',
    city: 'Petch Tiqwa'
}

const grades = [100, 96, 77];
const animals = ['dog', 'cat', 'wolf'];
const friends = [mira, yoav, beery, osher]

for (const friend of friends) {
    console.log(`properties of ${friend.name}:`)
    for (const property in friend) {
        console.log(`${property} value is: ${friend[property]}`)
    }
}

friends.splice(1, 1)

for (const friend of friends) {
    console.log(`${friend.name} is my friend:`)
}

const musicBands = [
    {
        name: 'nirvana',
        style: 'rock'
    },
    {
        name: 'beetles',
        style: 'rock'
    },
    {
        name: 'mashina',
        style: 'israeli'
    }
]

console.log(`there are ${musicBands.length} bands number`)