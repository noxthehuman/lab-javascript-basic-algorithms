// Iteration 1: Names and Input
const hacker1 = 'Noa'
const hacker2 = 'Anh AND Alex'
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's names are ${hacker2}`)


// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator2 has the longest name, it has ${hacker2.length} characters.`);
} else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`);  
}

// Iteration 3: Loops
let nameCapital = ''
for (let i=0; i< hacker1.length; i++){
    nameCapital += `${hacker1[i].toUpperCase()}`
    if (i===hacker1.length-1){
        continue
    }
    nameCapital += ' '
}
console.log(nameCapital)

let nameReversed = ''
for ( let i = hacker2.length-1; i>= 0; i--){
    nameReversed += hacker2[i]
}
console.log(nameReversed)


switch(hacker1.localeCompare(hacker2)){
    case 1:
        console.log("Yo, the navigator goes first definitely.")
        break
    case 0:
        console.log("What?! You both have the same name?")
        break
    case -1:
        console.log("The driver's name goes first.")
        break
}



