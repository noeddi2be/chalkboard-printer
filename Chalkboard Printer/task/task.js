// Welcome to the Chalkboard Printer!
const input = require('sync-input');

let name = input("Please enter your name: ");
let surname = input("Please enter your surname: ");
let message = input("Please enter a message: ");
let repeater = input("Please enter the number of repeats: ");

for (let i = 0; i < repeater; i++) {
    console.log("This is " + name + " " + surname + " and " + message);
}