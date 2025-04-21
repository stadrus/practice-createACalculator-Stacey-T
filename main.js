// Scenario One: Absolute Value//
/* Given any number, return its absolute value */
/* create a var that accepts any number */
/* Using Math.abs(x) will return the absolute value of any num */
/*Find the absolute value of -45.67.*/
let num = [];
function absoluteValue (num) {
    return Math.abs(num);
}
console.log (absoluteValue(-45.67));

//Scecnario Two: Power Calculation//
/* Calculate and return the value of a base raised to 
a specific power.*/
/* using Math.pow(x,y)*/
/*Raise 5 to the power of 3.*/
function powerCalculation (num){
    return Math.pow(num,3);
}
console.log(powerCalculation(5));

//Scenario Three: Square Root Finder//
/*Calculate the square root of a number.*/
/* using Math.sqrt(x)*/
/*Calculate the square root of 144.*/
function squareRootFinder (num){
    return Math.sqrt(num);
}
console.log(squareRootFinder(144));

//Scenario Four: Maximum and Minimum Finder//
/* Determine the largest and smallest values from [3, 78, -12, 
0.5, 27].*/
/* Using Math.max() & Math.min()*/
function maxAndMinFinder(num){
    let maxNum = Math.max(...num);
    let minNum = Math.min(...num);
        console.log(`Min = ${minNum}, Max = ${maxNum}`);     
}
console.log(maxAndMinFinder([3, 78, -12, 
    0.5, 27]));


