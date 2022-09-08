let num1 = 10;
let num2 = 11;

num1 = "14";

let str = "String value";
let first_name = "John";
let surname = "Doe";
// str = 10;

let is_alive = true

// Number
// String
// Boolean
// Null
// Undefined
// Object
// Symbol

let null_value = null

console.log(num1+num2);
console.log(first_name + " " + surname); // "14" + "1" = "141"

console.log(`My name ${first_name}. My surname ` + surname);

console.log(undefined + 1);
console.log(6767n + 7467327237623472347328472346328746323327488238723647823643872647382648723648723647823648236482343328372n);


let arr = [78, 90, "Oybek"];

console.log(arr[0]);

let symbol = Symbol('my_symbol')
console.log(symbol.valueOf());
let obj = {
    [symbol]: 'value'
}
console.log(obj[symbol]);