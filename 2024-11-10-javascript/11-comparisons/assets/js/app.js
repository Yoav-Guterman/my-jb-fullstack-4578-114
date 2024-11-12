const myAge = 22;
const yourAge = "22";

// ALWAYS use strict comparison
if (myAge === yourAge) {
    console.log('my Age and yourAge are equal')
} else {
    console.log('my Age and yourAge are not equal')
}

// don't ever use weak comparison
if (myAge == yourAge) {
    console.log('my Age and yourAge are equal')
} else {
    console.log('my Age and yourAge are not equal')
}

isTrue = false;
num = 0;
// weak comparison example
if (num === isTrue) {
    console.log("equal")
} else {
    console.log("not equal")
}

if (num == isTrue) {
    console.log("equal")
} else {
    console.log("not equal")
}

