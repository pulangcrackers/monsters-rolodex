export default class Employee {
    constructor(name, id, age, address, position){
        this.name = name;
        this.id = id;
        this.age = age;
        this.address = address;
        this.position = position;
    }
}

export function printName(employee) {
    console.log(`Employee's name is ${employee.name}`)
}

export function printId(employee) {
    console.log(`Employee's id is ${employee.id}`)
}
    
export function printAge(employee) {
    console.log(`Employee's age is ${employee.age} years old`)
}

export function printAddress(employee) {
    console.log(`Employee's address is ${employee.address}`)
}

export function printPosition(employee) {
    console.log(`Employee's position is ${employee.position}`)
}