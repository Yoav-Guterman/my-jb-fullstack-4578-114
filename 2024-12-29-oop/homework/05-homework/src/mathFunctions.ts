export default class ArrayOperations {
    public constructor(
        private readonly array: number[],
    ) {
    }

    public getSum() {
        console.log(this.array.reduce((cumulative, current) => cumulative + current, 0))
    }

    public getAvg() {
        console.log(this.array.reduce((cumulative, current) => cumulative + current, 0) / this.array.length)
    }

    public getMax() {
        console.log(this.array.reduce((max, current) => current > max ? current : max, this.array[0]))
    }

    public getMin() {
        console.log(this.array.reduce((min, current) => current < min ? current : min, this.array[0]))
    }
}