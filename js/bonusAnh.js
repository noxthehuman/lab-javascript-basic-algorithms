let bigText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis nisl diam. Ut purus nisi, porta quis feugiat vitae, ullamcorper sit amet odio. Morbi fringilla elementum risus vitae venenatis. Nam vel leo non nunc dictum auctor. Fusce vulputate mollis cursus. Duis sit amet finibus ipsum, vitae faucibus ipsum. Pellentesque ut ullamcorper turpis. Duis tincidunt tortor eu finibus aliquet. Phasellus elementum rhoncus massa, ut eleifend purus congue mattis. Fusce pellentesque orci in diam facilisis, ut dictum sapien posuere.

Nam ornare in tellus quis fringilla. Maecenas interdum enim vel felis tristique euismod. Quisque a eros at nisl tempor aliquam. Ut eu gravida sem. Donec ultrices mauris elementum leo tristique elementum ac nec magna. Curabitur vitae urna id nisi tincidunt accumsan a eget libero. Nullam dictum scelerisque elit vitae imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices ac risus a posuere. Mauris non pulvinar nunc, in feugiat justo. Fusce suscipit pretium risus non laoreet. Nunc nisi lorem, efficitur sed nisi sed, consectetur hendrerit dolor. Mauris cursus, nisi nec ultrices fringilla, mi nibh auctor dui, eu gravida elit tortor a augue.

Proin non tortor hendrerit ligula hendrerit iaculis. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque dignissim aliquam hendrerit. Nulla arcu lectus, imperdiet eget dictum sit amet, maximus sed eros. Nam varius lacinia luctus. Duis vel lorem sed nisi ultricies pharetra tincidunt eget nunc. Etiam at tristique diam, feugiat fringilla risus. Fusce id dolor pellentesque, placerat urna sit amet, lobortis felis. In ut varius ligula, in sagittis sem. Pellentesque risus tortor, hendrerit in pretium nec, laoreet sed nunc. Integer quis ex id velit ornare dapibus vel at diam. Nulla sed dapibus est.`
const smallText = `Lorem ipsum.

Nam ornare.

Dapibus est.`

bigText = bigText.replace(/\n/g,'') //remove linebreak

//bigText = smallText.replace(/\r\n/g,'') //notepad++ shows  CR + LF (=\r\n). But it is in fact only \n
/*
for (letter of smallText){
    console.log(letter, letter.match(/\r/),letter.match(/\n/))
}
*/
const wordList = bigText.split(/\s|\.\s|,\s|\./) //anything between a space, dot or comma is a word.

wordList.pop() //the last item is an empty string, probably due to the final '.'. So I just remove it.
let numberOfWord = wordList.length
let numberOfEt = 0
console.log(wordList)
for (let word of wordList){
    if (word === 'et'){numberOfEt++}
}
console.log(`there are ${numberOfWord} words`)
console.log(`there are ${numberOfEt} Et words`)


let phraseToCheck = "Was it a car or a cat I saw?"
phraseToCheck = phraseToCheck.replace(/\W/g,'') //remove all except letters
phraseToCheck = phraseToCheck.toLowerCase() //to lower case)
const lc = phraseToCheck.length
let isPalindrome = true


for(let i=0 ; i<lc/2 ; i++){ //start from beginning up to the middle of the word
    isPalindrome = isPalindrome && (phraseToCheck[i]===phraseToCheck[lc-i-1]?true:false) //check that the word is symmetric
}

console.log('phraseToCheck is a palindrome: ', isPalindrome)