// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. 
//Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry.
// Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

let tomHeight = 9 
let tomMass= 8 

let jerryHeight =10 
let jerryMass = 45

let tomBMI = 8 / (9 * 9)
let jerryBMI = 45 / (10 * 10)

console.log(tomBMI)
console.log(jerryBMI)

higherBMI = tomBMI > jerryBMI 

console.log(`Tom has the higher BMI ${higherBMI}`)