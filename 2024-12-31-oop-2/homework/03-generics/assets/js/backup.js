export default class Backup {
    constructor(subject, value) {
        this.subject = subject;
        this.value = value;
    }
    display() {
        if (typeof this.value !== 'object') {
            console.log(`subject is: ${this.subject}, value is: ${this.value}`);
        }
        else {
            for (const prop in this.value) {
                console.log(`${prop}: ${this.value[prop]}`);
            }
        }
    }
}
