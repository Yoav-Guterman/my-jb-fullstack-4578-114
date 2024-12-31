export default class ArrayOperations {
    constructor(array) {
        this.array = array;
    }
    getSum() {
        console.log(this.array.reduce((cumulative, current) => cumulative + current, 0));
    }
    getAvg() {
        console.log(this.array.reduce((cumulative, current) => cumulative + current, 0) / this.array.length);
    }
    getMax() {
        console.log(this.array.reduce((max, current) => current > max ? current : max, this.array[0]));
    }
    getMin() {
        console.log(this.array.reduce((min, current) => current < min ? current : min, this.array[0]));
    }
}
