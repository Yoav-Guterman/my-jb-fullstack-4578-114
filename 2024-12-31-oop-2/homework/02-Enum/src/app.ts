import Color from "./color.js";

function getColorItem(color: Color): string {
    let item: string;
    switch (color) {
        case 'green':
            item = 'grass'
            break;
        case 'blue':
            item = 'sky'
            break;
        case 'yellow':
            item = 'sun'
            break;
        case 'red':
            item = 'heart'
            break;
        case 'white':
            item = 'snow'
            break;
    }
    return item
}

console.log(getColorItem(Color.WHITE))
