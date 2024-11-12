const firstName = prompt('enter your first name');
const age = +prompt('enter your age');

// validate the input
// make sure the user entered input that we expect them to

if (!firstName) {
    alert('you didnt enter anything!');
} else {
    alert(`your first name is ${firstName}`);
}

if (!age) {
    alert('you didnt enter a valid age');
} else {
    alert(`your age is ${age}`)
}