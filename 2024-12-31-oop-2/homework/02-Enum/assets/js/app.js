import Color from "./color.js";
function getColorItem(color) {
    let item;
    switch (color) {
        case 'green':
            item = 'grass';
            break;
        case 'blue':
            item = 'sky';
            break;
        case 'yellow':
            item = 'sun';
            break;
        case 'red':
            item = 'heart';
            break;
        case 'white':
            item = 'snow';
            break;
    }
    return item;
}
console.log(getColorItem(Color.WHITE));
