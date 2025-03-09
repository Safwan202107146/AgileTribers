// 1.Filter negative Numbers from an Array //

let arr = [5, 2, -7, 3, -2, -1];
console.log("Input Array : ",arr) 

let new_arr = arr.filter(n => n < 0);
console.log("Output Array : ",new_arr);

// 2.Replace Odd Numbers with Zero //

let Arr = [5,10,15,20,22,23]
console.log("Input Array : ",Arr);

let new_Arr = Arr.map(n => n % 2 != 0 ? 0 : n);
console.log("Output Array : ",new_Arr);


// 3.Sum of User-Entered Integers(Loop Until Zero) //


const readline = require("readline-sync");
let num;
let sum = 0;

while (true) {
    num = parseInt(readline.question("Enter a number :"), 10);
    if (num === 0) break;
    sum += num;
}
console.log("Sum :", sum);


// 4.Sum of Current and Previous Number in Iteration //


let Array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
let prev = 0;
for (let i = 0; i < 10; i++) {
    let sum = prev + Array[i];
    console.log(`Current Number : ${Array[i]}, Sum : ${sum}`);
    prev = Array[i];
}


//5.Count Even and Odd Numbers Between 10 to 55 //


let even = 0, odd = 0;

for (let i = 10; i <= 55; i++) {
    if (i % 2 === 0) {
        even++
    }
    else {
        odd++
    }
}
console.log("Even Numbers :", even);
console.log("Odd Numbers :", odd);