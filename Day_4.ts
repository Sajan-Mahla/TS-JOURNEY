/*
🧠 Question (Day 04 Practice)
Create a TypeScript function called createProfile.
Requirements
Function 3 parameters lega:
name → string
age → number
role → string
Function string return karega.
Output format aisa hona chahiye:
Hello, my name is Sajan. I am 19 years old and I am learning TypeScript.
String interpolation (${}) use karna compulsory hai.
📥 Example Input
createProfile("Sajan", 19, "TypeScript")
📤 Expected Output
Hello, my name is Sajan. I am 19 years old and I am learning TypeScript.
*/

function day(name: string, age: number, role: string):string{
    return `Hello, my name is ${name}. I am ${age} years old and I am learning ${role}.`
}
console.log(day("Sajan",19,"TypeScript"))