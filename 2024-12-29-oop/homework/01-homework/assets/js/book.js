export default class Book {
    constructor(bookName, author, publish, price) {
        this.bookName = bookName;
        this.author = author;
        this.publish = publish;
        this.price = price;
    }
    display() {
        console.log(`author ${this.author}`);
        console.log(`bookName: ${this.bookName}`);
        console.log(`publish: ${this.publish}`);
        console.log(`price: ${this.price}`);
    }
    vat() {
        return this.price * 0.17;
    }
}
