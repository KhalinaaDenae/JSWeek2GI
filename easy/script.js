// Create an array of students holding their last name, first name, and age with 3 students. To validate, please log a greeting with the first name, last name and age of the 2nd student. The output should look like "Hello, my name is John Doe and I'm 19 years old."

let students = [
    { firstName : "Khalina" , lastName: "Boyce" , age: 23},
    {firstName : "Sam" , lastName: "Thomas" , age: 23}, 
    {firstName : "John" , lastName: "Polanco" , age: 23}
    ]
    
for ( let i = 0 ; i < students.length ; i++){
let student = students[i]
	console.log(`Hello, my name is ${student.firstName} ${student.lastName} and I am ${student.age} years old. `)
}