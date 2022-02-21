let bigText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis nisl diam. Ut purus nisi, porta quis feugiat vitae, ullamcorper sit amet odio. Morbi fringilla elementum risus vitae venenatis. Nam vel leo non nunc dictum auctor. Fusce vulputate mollis cursus. Duis sit amet finibus ipsum, vitae faucibus ipsum. Pellentesque ut ullamcorper turpis. Duis tincidunt tortor eu finibus aliquet. Phasellus elementum rhoncus massa, ut eleifend purus congue mattis. Fusce pellentesque orci in diam facilisis, ut dictum sapien posuere.

Nam ornare in tellus quis fringilla. Maecenas interdum enim vel felis tristique euismod. Quisque a eros at nisl tempor aliquam. Ut eu gravida sem. Donec ultrices mauris elementum leo tristique elementum ac nec magna. Curabitur vitae urna id nisi tincidunt accumsan a eget libero. Nullam dictum scelerisque elit vitae imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices ac risus a posuere. Mauris non pulvinar nunc, in feugiat justo. Fusce suscipit pretium risus non laoreet. Nunc nisi lorem, efficitur sed nisi sed, consectetur hendrerit dolor. Mauris cursus, nisi nec ultrices fringilla, mi nibh auctor dui, eu gravida elit tortor a augue.

Proin non tortor hendrerit ligula hendrerit iaculis. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque dignissim aliquam hendrerit. Nulla arcu lectus, imperdiet eget dictum sit amet, maximus sed eros. Nam varius lacinia luctus. Duis vel lorem sed nisi ultricies pharetra tincidunt eget nunc. Etiam at tristique diam, feugiat fringilla risus. Fusce id dolor pellentesque, placerat urna sit amet, lobortis felis. In ut varius ligula, in sagittis sem. Pellentesque risus tortor, hendrerit in pretium nec, laoreet sed nunc. Integer quis ex id velit ornare dapibus vel at diam. Nulla sed dapibus est.`
const smallText = `il est beau. Oui oui.
il est moche`
console.log(smallText);
bigText = bigText.replace(/\r\n/,'')

const wordList = bigText.split(/\s|\.\s|,\s|\./)
console.log(wordList)

let numberOfWord = 0
let numberOfEt = 0

for (let word of wordList){
    if (word !==''){numberOfWord++}
    if (word === 'et'){numberOfEt++}
}
console.log(numberOfWord)
console.log(numberOfEt)
