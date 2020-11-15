// Adding the numbers

const a = (a, b) => a+b;
document.getElementById("plus").innerHTML = "The answer is: " + a(25, 25);

// Subtracting one number from another

const z = (x, y) => x-y;
document.getElementById("minus").innerHTML = "The answer is: " + z(75, 25);

// Multiplying the numbers

const c = (a,b) => a*b;
document.getElementById("multiply").innerHTML = "The given result is " + c(5,15);

// Dividing one number by another.

const q = (w,e) => w/e;
document.getElementById("divide").innerHTML = "The result will be " + q(100, 25);

// Using the keyword 'return' 

const f = (g,h) => {return g * h};
document.getElementById("demo").innerHTML = "Here is the reuslt: " + f(10,10);