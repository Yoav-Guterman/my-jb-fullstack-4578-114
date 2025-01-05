export default class Animal {


    public constructor(
        public numberOfLungs: number
    ) { }
    breath() {
        console.log(`breathing with my ${this.numberOfLungs}`)
    }
}