export default class Backup<T> {
    private subject: string
    private value: T

    constructor(
        subject: string,
        value: T
    ) {
        this.subject = subject
        this.value = value
    }

    public display(): void {
        if (typeof this.value !== 'object') {
            console.log(`subject is: ${this.subject}, value is: ${this.value}`)
        } else {
            for (const prop in this.value) {
                console.log(`${prop}: ${this.value[prop]}`)
            }
        }

    }
}