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


// Bonus

bigText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam, elit ac maximus varius, orci tellus auctor dolor, quis scelerisque dui neque at enim. Praesent velit lectus, congue eget elit eu, rhoncus bibendum risus. Sed imperdiet eleifend imperdiet. Fusce eget felis ligula. Cras viverra a arcu id finibus. Cras sem felis, pharetra sit amet porttitor pretium, convallis at metus. Sed eu vulputate quam. Sed eleifend maximus augue, ut tincidunt sem consectetur nec. Nullam ut nulla mollis, lacinia arcu eget, porta magna. Fusce sollicitudin eget nunc sit amet sodales. Maecenas vel lobortis lacus. Sed ac bibendum metus, sit amet lacinia mi.

Donec sit amet justo a purus tempor sollicitudin sit amet quis augue. Morbi commodo tellus magna. Etiam vel suscipit dolor. Aliquam erat volutpat. Sed a mauris ac velit scelerisque aliquet ut vitae libero. Sed a risus in dui imperdiet faucibus quis vitae massa. Curabitur id neque dapibus lectus blandit blandit et non ex. Maecenas bibendum erat in molestie gravida. Phasellus rutrum mi purus. Nunc sit amet dignissim justo. Sed quis molestie enim. Aliquam erat volutpat.

Vestibulum ac mollis nulla. Integer et enim pulvinar, finibus sem in, euismod magna. Vivamus accumsan elit id molestie blandit. Sed congue faucibus quam et aliquam. In nulla velit, mattis at ornare a, sollicitudin eu tellus. Fusce nec aliquam nisl. Vivamus nisi mi, venenatis sed nunc eu, auctor sodales libero. Aenean vehicula tristique rhoncus. Duis placerat bibendum eros, vitae consequat urna iaculis id. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus blandit efficitur orci, id volutpat augue euismod a. Sed laoreet lorem tempor velit cursus, eget finibus nisi iaculis. Aenean in fermentum nisi.`


let wordCount = 0
let eTCount = 0
for (let i = 0 ; i<= bigText.length-1;i++){
    if (bigText[i] === " "){
        wordCount++
    }
    if ()
}
console.log(wordCount)