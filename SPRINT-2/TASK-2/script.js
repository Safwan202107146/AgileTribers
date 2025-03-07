// -----1------ //

let userName = "Safwan"
let user_age = 20

console.log(userName)
console.log(user_age)

// -----2------ //

const value = 7

console.log(value)

// -----3------ //

let arr = [10,20,30,40,50]
let newarr = arr.pop()

console.log(arr)
console.log(arr[2])
console.log(newarr)

// -----4------ //

let u = 10
let v = 5
let add = u+v

console.log("Addition : ", add)

// -----5------ //

let pi = 3.14
let r = 5
let area = pi*r*r

console.log("Area of Circle :", area)

// -----6------ //

let length = 10
let width = 5
area = length * width

console.log("Area of Rectangle : ",area)

// -----7------ //

let base = 10
let height = 20
area = (base*height)/2

console.log("Area of Triangle : ",area)

// -----8------ //


let x = 10, y = 5
console.log("Addition :", x+y)
console.log("Subtraction :", x-y)
console.log("Multiplication :", x*y)
console.log("Division :", x/y)


// -----9------ //

let X = 10
console.log("X : ", X)

X += 5
console.log("New X += ", X)

X -= 5
console.log("New X -= ", X)

X /= 5
console.log("New X /=", X)

// -----10------ //

let A = 10
A++
A--
console.log("A = ", A)
console.log("A++ = ", A)
console.log("A-- = ", A)


// -----11------ //

let m = 1 , n = "1"

console.log("m == n:",m == n)
console.log("m === n:", m === n)
console.log("m != n:", m != n )
console.log("m !== n:", m !== n)
console.log("m > n:", m> n)
console.log("m < n:", m < n)
console.log("m >= n:", m >= n)
console.log("m <= n:", m <= n)


// -----12------ //
let t = true , f = false

console.log("AND:", t && f)
console.log("OR:", t || f)
console.log("NOT:", !t)

// -----13------ //

let p = 10, q = 5 
console.log("Before Swap : p =", p , "q =", q);

[p,q] = [q,p]
console.log("After Swap : p =", p , "q =", q)


// -----14------ //

let num1 = 10, num2 = 20, num3 = 30;
let avg = (num1 + num2 + num3) / 3;
console.log("Average :", avg);

// -----15------ //

let a = 10, b = 30, c = 12, d = 3;
let result =[(a + b)* c] / d;
console.log("Result :", result);


// -----16------ //


let Tamil = 95, English = 95, Maths = 100, Science = 90, Social = 90;

let Totalmarks = Tamil + English + Maths + Science + Social;

console.log("Total Marks :", Totalmarks);
console.log("Average :", Totalmarks/5);