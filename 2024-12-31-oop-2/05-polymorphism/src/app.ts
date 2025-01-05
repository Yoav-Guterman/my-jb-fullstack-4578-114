import Client from "./client.js";
import Employee from "./employee.js";
import Supplier from "./supplier.js";


const freddy = new Client('freddy', new Date(), [90, 30, 20])
freddy.printName()
const George = new Employee('George', new Date(), [6000, 6200, 6000])
George.printName()
const Jessica = new Supplier('Jessica', new Date(), [400, 500])
Jessica.printName()

const totalRevenue = freddy.calcRevenue() + George.calcRevenue() + Jessica.calcRevenue()
console.log(`totalRevenue: ${totalRevenue}`)
// const person = new Person('Anna', new Date())
// person.printName()

function sendNewYearGreetingClient(client: Client) {
    console.log(`happy new year ${client.name}`)
}

function sendNewYearGreetingEmployee(employee: Employee) {
    console.log(`happy new year ${employee.name}`)
}

function sendNewYearGreetingSupplier(supplier: Supplier) {
    console.log(`happy new year ${supplier.name}`)
}

sendNewYearGreetingClient(freddy)
sendNewYearGreetingEmployee(George)
sendNewYearGreetingSupplier(Jessica)