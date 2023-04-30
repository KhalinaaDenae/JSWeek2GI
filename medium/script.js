// Create a program that accepts a number (1-12) as input and 
//logs to the console that number and its corresponding month. 
//For example: if the user enters the number 3, then it should return the month “March.”
// Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).


let num  = parseInt(prompt('please enter a number between 1 and 12 '))
console.log(num)

if(num > 12 || num < 1 ){
    alert("please enter a valid number")
} if ( num === 1 ){
    console.log("Jan")
} else if (num === 2){
    console.log("Feb")
} else if (num===3){
    console.log("March")
} else if(num===4){
    console.log("April")
} else if (num===5){
    console.log("May")
} else if (num===6){
    console.log("june")
} else if (num===7){
    console.log("July")
} else if(num===8){
    console.log("august")
} else if (num===9){
    console.log("sept")
} else if (num===10){
    console.log("oct")
} else if (num===11){
    console.log("nov")
} else if (num === 12){
    console.log("dec")
}