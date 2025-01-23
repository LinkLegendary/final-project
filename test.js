/*

let subscribed = false
let loggedIn = true 
if (subscribed === true){
    console.log('show video')
}
else if (loggedIn === true){
    console.log('tell user to upgrade their subscription')
}
else {
    console.log('tell user to log into account')
}
*/
/*
let cash = 40
let price = 40

if (cash > price){
    console.log(`you paid extra - here's ${cash-price} dollars change`)

}
else if (cash === price){
    console.log("you paid the exact amount, hace a nice day!")
}
else if (cash < price){
    console.log(`you need to pay more ${price-cash}dollars`)
}

*/
/*
let cash = 60
let price = 40
let difference = cash - price

if (cash > price){
    console.log(`you paid extra - here's ${difference} dollars change`)

}
else if (cash === price){
    console.log("you paid the exact amount, hace a nice day!")
}
else if (cash < price){
    console.log(`you need to pay more ${difference * -1}dollars`)
}
*/
/*
let cash = 50
let price = 40
let isStoreOpen = true

let str = cash >= price && isStoreOpen ? "give receipt" : "do not give receipt"
console.log(str);

*/

// loops
// for loop, while loop, do while loop

// dry = Don't repeat yourself

//let count = 1;

//while (count <= 100){
//    console.log(count)
 //   count = count + 1;
//  }
       //            i++
/*

for (let i = 0; i<3; i=i+1){
    console.log(i);
}

*/
/*
for ( let i = 1; i <= 100; i += 2){
    console.log(i);
}

*/

/** write a for a - loop that  loops through 1 to 20
 * if thr number is divisible by 3 , print "Frontend"
 * if the number is divisible by 5, print "simplified"
 * if the number is divisible buy 3 and 5, print "frontend simplifiec"
 * if the number is not dovisible 3 and 5 , print the number 
 * 
 * 
 */
/*
for (let i = 1; i <= 20; ++i){
    


if (i % 3 === 0){
console.log(`${i}frontend`)
}

if (i % 5 === 0){
    console.log(`${i} -> simplified`)
}

if (i % 3 === 0 ){
    console.log(` ${i} -> frontend simplified`)
}


}

*/


/**
 * print out every character from the string:
 * "Frontend Simplified"
 * @example
 * 'F'
 * 'r'
 * 'o'
 * ...
 * 'e'
 * 'd'
 */
/*
const str = "abcd"
   
for (let i = 0; i < str.length; ++i){
    console.log(str[i])
}

*/
/* 
Function
*/
/*
function welcomePersonToFES(name){
    console.log(`welcome to FES, ${name}`)
}

// call the function
welcomePersonToFES('david'); 

*/ /*

function welcomePersonToFES(firstName, LastName){
    console.log(`welcome to FES, ${firstName} ${LastName}`)
}

// call the function
welcomePersonToFES('david','kim'); 

*/

/*
function fn(){
    return 6
    console.log('my function')
}
console.log(fn());

*/


/*
let name = "john";
let topic = "javaScript";
console.log(
    `${name} is learning ${topic} today`
);

*/
/*
console.log('john Doe')
console.log('Student')
console.log('19')
console.log(2+2);
console.log(2+'abc')
console.log('2abc')
let message1 = "Hello, Sunshine !"
console.log(message1);
let message = "Hello" + " and " + 'Goodbye !';
console.log(message);

let message4 = 'Hello, David!';
console.log(message4);

let name = 'John';
let topic = 'JavaScript';
*/


//console.log(name + 'is learning ' + topic + ' today');


/*
console.log(`${name} is learning ${topic}  today`);

let score = '10'+ '30';
console.log(score);

let x = 1;
let y = 2;
console.log(x+y);

let f = 1.2;
let z = 2.35;
console.log(f+z);

let k = '7';
let l = 5;

k = Number(k);
console.log(k+l);

console.log(2**4);

console.log(9 == 9);
console.log(9 != 9);
console.log(10 >  9);
console.log('ABC'== "abc");

console.log(typeof "abc");
console.log(typeof true);

console.log(19 % 3);
console.log(10 == 3);
console.log(10 !== "10");
console.log(2 < "10");
console.log((false && true)|| false);

let birds = [];

let mixedArray = [ 'Birds', true, 10, 5.17];

mixedArray[2] = 'heelo';


mixedArray.unshift('fish');

mixedArray.push('Sparrow');


console.log(mixedArray);

let Array = [ 'salmon', 'pine', '10'];

let pos Array.indexof('10');
console.log(pos);

*/
/*


let funiture = ['Salmon', 'goldfish', 'Tuna'];

let pos = funiture.indexOf('Tuna');
console.log(pos);

console.log(funiture.length);

let colors = [ 'red',  ]
colors.push('black');
colors.shift('red');
colors.unshift('green','blue');
colors.unshift('yellow');




console.log(colors);

*/

// IF STATEMENT ***********************
/*
let balance = 4000;
if (balance>5000){
    console.log("You have the money for this trip.  let's go !");
}
else if(balance > 3000){
    console.log("You only have enough money for a staycation");
}
else {console.log("Sorry, not enough money. Save more!")

}

console.log("The end")
*/
/*
let grade = "A";
if (grade === "A"){
    console.log("You got an A, so here's a Chocolate for you !");
}
else if(grade === "B"){
    console.log("You got a B, here's a Cookie for you")
}

else if(grade === "C"){
    console.log("You got a C, there's room for improvment and here's your Candy!")

}

else{
    console.log("No reward to give.");
}

*/

/*
let grade = "A"
switch (grade){

    case "A":
        console.log("you got an A, so here's a Chocholate for you!");
        break;
    case "B":
            console.log("you got an B, so here's a Cookie for you!");
            break;
    
            case "C":
                console.log("you got an C, so here's a room for you!");
                break;
        default:
            console.log("No reward to give.");
}
*/



//for(let x = 0; x < 10; x++){
//    console.log(x);

//  }

//for (let i = 10; i >= 1; i--) {
 //   console.log(i);
//  }

// for(let x = 1; x < 20; x += 3){
//    console.log(x);
//    }


// for (let x = 1; x < 2; x++){
 //     console.log(x);
// }
//  console.log("The for loop has ended");
//  console.log("Continue code exection");



// let i = 0;
// while (i < 6){
  //  console.log(`The value of i = ${i}`);
  //  i++;
//  }

// let i = 0;
// while (i < 6){
 //    console.log(`The value of i = ${i}`);
//  }



// function greet(name) {
  //  console.log(`Hello, ${name}!`);
  //  console.log(" nice weather today, right?");
//  }
//    greet("david");


/*
function greet(name,weather){
    console.log(`Hello, ${name} !`);
    console.log(`It's ${weather} today, right ?`);

}

greet("nathan","rainy");

*/

/*

function greet(name = "Nathan"){
    console.log(`Hello, ${name}!`);
    console.log("Nice weather today, right ?");

}

greet();
greet("john")

*/

/*
function greet(name = 'Nathan', weather ){
    console.log(`Hello, ${name} !`);
    console.log(`It's ${weather} today, right ?`);
}
greet( undefined,"sunny");

*/


//     The return statement
//  A function can also have a return statement inside the code block. 
// A return statement is used to return a value back to the caller.

/*

function greet(){
    console.log("Hello");
   

}

greet();

*/
/*

let mySpring = "Morning"

function greet(){
    let mySpring = "Hello World!";
    console.log(mySpring);
}
greet();
console.log(mySpring);

*/

/*

function greetings(name){
    console.log(`Hello, ${name}!`);
}
greetings("jim");

*/
/*
const greetings = (name1) =>{
    console.log(`Hello, ${name1}!`)
} 

greetings("john");

*/

/*
function calculateSquare(side){
    console.log(`The square side is ${side}`);
    console.log(`The area of the square is ${side*side}`);
    console.log(`The perimeter of the square is ${4*side}`);
}

calculateSquare(3);

*/ /*

const person = { 
    name1: "Alex",
    age: 22,
    greet: function(){
        console.log(
            `Hello ! My name is ${this.name1} and I'm ${this.age} years old.`
        );
    },






};

person.greet();

*/

/*

function ourFunctionArgs(a,b){
    console.log(a - b);
}
ourFunctionArgs(10,5);

*/

/*

function convertCelsiudToFahrenheit(celsius){
    let fahrenheit = celsius * 1.8 + 32
    return fahrenheit

}
console.log(convertCelsiudToFahrenheit(10));

*/


/*

const convertCelsiudToFahrenheit = (celsius) => {
    return celsius * 1.8 + 32
    

}
console.log(convertCelsiudToFahrenheit(-20));

*/

/*
function fn(){
    return 8
    console.log('my function')
}

console.log(fn());

*/



/*


function sumOftwoNumbers(){
    return 10 + 8
}
console.log(sumOftwoNumbers());


*/
/*

function sumOftwoNumbers(num1, num2){
    return num1 + num2
}
console.log(sumOftwoNumbers(10,15));

*/
/*
let str = 'david'
console.log(str[0]);

*/


/*
let str = 'david'
console.log(str.length-1);
*/
/*


let cash = 50
let price = 200

if (cash > price){
    console.log(`You paid extra - Here's ${cash - price}dallars change`)
}

else if (cash === price){
    console.log("You paif exact amount money, Have a nice day !")

}

else {console.log(`not enough money, - You still owe ${(cash - price)*-1} dollars`)}

*/

/*

let cash = 50
let price = 40
let isStoreOpen = true

if (cash > price && isStoreOpen === true){
    console.log('Print receipt')
}

*/

/*

let subscribed = true
let loggedIn = false

let str = subscribed && loggedIn ? 'show the video' : 'hide the video'

console.log(str)

*/


async function main() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    console.log(response.json())
}