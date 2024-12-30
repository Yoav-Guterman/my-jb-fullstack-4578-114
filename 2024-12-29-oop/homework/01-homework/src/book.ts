export default class Book {
    public constructor(
        private readonly bookName: string,
        private readonly author: string,
        private readonly publish: string,
        private readonly price: number
    ) {
    }

    public display() {
        console.log(`author ${this.author}`)
        console.log(`bookName: ${this.bookName}`)
        console.log(`publish: ${this.publish}`)
        console.log(`price: ${this.price}`)
    }

    public vat() {
        return this.price * 0.17
    }
}