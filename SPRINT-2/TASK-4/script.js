// 1.Identify is a Number is Positive or Negative //

console.log("Ex-1")

const readline = require("readline-sync");
n = parseInt(readline.question(" Enter a number : "));

if (n > 0) {
    console.log("The Number is Positive");
}

else {
    console.log(" The Number is Negative")
}


// 2.Identify if a Number is Even or Odd //

console.log("Ex-2")

let x = parseInt(readline.question("Enter a Number : "));

if (x % 2 == 0) {
    console.log("The Number is Even")
}

else {
    console.log("The Number is Odd")
}


// 3.Calculate the Power of a Number //

console.log("Ex-3")

let a = parseInt(readline.question(" Enter the Base : "));
let b = parseInt(readline.question(" Enter the Exponent : "));

function power(a,b) {
    return a**b
}
console.log("Power of the Number :",power(5,2))


// 4.Compare Two Numbers //

console.log("Ex-4")

let c = parseInt(readline.question("Enter the First Number : "))
let d = parseInt(readline.question("Enter the Second Number : "))

function compare(c,d) {
    if (c > d) {
        console.log(c,"greater than",d)
    }
    else if (c==d) {
        console.log(c,"equal to",d)
    }
    else {
        console.log(c,"less than",d)
    }
}

compare(c,d)


// 5.Determine if a Year is a Leap Year //

console.log("Ex-5")

x = parseInt(readline.question(" Enter year : "));
if (x % 4 == 0) {
    console.log(x, "is a Leap year");
}
else {
    console.log(x, "is not a Leap year");
}


// 6.Grade Calculator //

console.log("Ex-6")

x = parseInt(readline.question("Enter the Score : "))

if (x >= 90 && x <= 100) {
    console.log("Grade A")
}
else if (x >= 80 && x <= 89) {
    console.log("Grade B")
}
else if (x >= 70 && x <= 79) {
    console.log("Grade C")
}
else if (x >= 60 && x <= 69) {
    console.log("Grade D")
}
else {
    console.log("Grade F")
}


// 7.How Old Are You //


console.log("Ex-7")

x = parseInt(readline.question("Enter the Age : "))

if (x < 16) {
    console.log("You can't drive")
}
else if (x >= 16 && x <= 17) {
    console.log("You can drive but not vote")
}
else if (x >= 18 && x <= 24) {
    console.log("You can vote but not rent a car")
}
else  {
    console.log("You can do pretty much anything")
}


// 8.FizzBuzz Challenge //


console.log("Ex-8")

for (let m = 1; m <= 100; m++) {

    if (m % 3 == 0 && m % 5 ==0) {
        console.log("FizzBuzz");
    }
    else if (m % 3 === 0) {
        console.log("Fizz");
    }
    else if (m % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(m);
    }
}

// 9.Leap Year Checker //


console.log("Ex-9");

x = parseInt(readline.question(" Enter the Year : "));
if ((x % 4 == 0 && x % 100 != 0) || (x % 400 == 0)) {
    console.log(x, "is a Leap year.");
}
else {
    console.log(x, "is not a Leap year.");
}





