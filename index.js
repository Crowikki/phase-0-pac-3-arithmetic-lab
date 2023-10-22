function add(){

}
    //we will fill shortly

function subtract(){
}

function multiply(){

}

function divide(){

}

function add(a, b) {
    return a + b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b) {
    return a * b;
}
function divide(a,b){
    return a / b;
}

number = 10

function add5(){
    return (number +=5);
}

function divideBy3(){
    return (number/=3);
}

divideBy3();
add5();

number = 10
add5();
divideBy3();

// start with increments and the other one tomorrow
function increment(n) {
    return n + 1
}
 function decrement(n) {
    return n - 1
 }
   
// function parseInt("2",10); // = 2

// function parseInt("nonsense", 10)
 // will return NaN or not a number
    // always put a radix that is the second number the 10 not the string

// function parseInt("2.2222" ,10);
// this would make it just say 2 and take off everything after the decimal point

// Start with parseFloat() after you complete the tests about parseInt()

function makeInt(n) {
   return parseInt(n,10)
   
}


function preserveDecimal(n) {
    return parseFloat(n, n)
}






