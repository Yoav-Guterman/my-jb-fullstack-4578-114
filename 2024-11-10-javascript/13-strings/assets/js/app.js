// // string is an array of characters
// const message = 'hello world';
// console.log(message);

// // I can see the characters with offset 0
// console.log(message[0])

// // I cant modify a string
// message[0] = 'l';
// console.log(message)


// console.log(message.toUpperCase())


// message.substring

//exercise 3
let sentence = prompt('please enter a sentence');
const first = sentence.substring(0, sentence.indexOf(' '));

const lastWordStart = sentence.lastIndexOf(' ') + 1;
const last = sentence.substring(lastWordStart)

console.log(`${first} ${last}`)

// come on to jamaica man we can have a lot of fun