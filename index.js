function add(a,b) {
    console.log(`First Number: ${a}\nSecond Number: ${b}`);
    return a+b; 
}
    console.log(`Sum: ${add(1,2)}`);

function subtract(a,b) {
    console.log(`First Number: ${a}\nSecond Number: ${b}`);
    return a-b; 
}
    console.log(`Result: ${subtract(2,1)}`);

function multiply(a,b) {
    console.log(`First Number: ${a}\nSecond Number: ${b}`);
    return a*b; 
}
    console.log(`Result: ${multiply(6,2)}`); 

function divide(a,b) {
    console.log(`First Number: ${a}\nSecond Number: ${b}`);
    return a/b; 
}
    console.log(`Result: ${divide(6,2)}`);
    
function increment(n) {
    return n+=1;
}  
    console.log(increment(1));

function decrement(n) {
        return n-=1;
}  
    console.log(decrement(1));

function makeInt(string) {
    return parseInt(string,10);
}
    console.log(makeInt("7.8"));

function preserveDecimal(string) {
    return parseFloat(string);
}
    console.log(preserveDecimal("35.72"));