const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id mattis leo. Mauris id fermentum lectus. Etiam interdum rhoncus justo non elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec at urna sodales elit dapibus sollicitudin. Nullam faucibus dui vitae finibus iaculis. Mauris porta tempor molestie. Praesent felis risus, luctus faucibus bibendum a, suscipit nec justo.

Duis eget ligula ut nulla lobortis auctor gravida sed mi. Vivamus laoreet nibh sed convallis cursus. Morbi sed risus lorem. Nunc volutpat eu sapien non semper. Nam vel magna vitae risus convallis luctus. Curabitur ullamcorper mi justo, vel porta neque egestas ut. Vestibulum in justo rhoncus, accumsan dui in, tristique tellus. Quisque fermentum in massa quis condimentum. Praesent facilisis dolor et quam tincidunt dignissim. Nulla vestibulum elit quam, nec accumsan magna dignissim quis. Integer sed eros porta, lacinia nibh non, faucibus orci. Morbi consequat id dui vitae cursus. Nulla convallis metus nec augue ornare molestie. Quisque pellentesque erat vitae lorem faucibus, nec maximus felis gravida.

Fusce a diam id libero fermentum auctor. Duis posuere turpis sollicitudin orci venenatis convallis. Duis enim augue, blandit ac nunc vel, finibus aliquam neque. Donec ac velit posuere, consequat erat at, commodo ex. Etiam nec ex a tortor luctus dignissim. Sed condimentum sem sit amet elementum laoreet. Curabitur maximus sapien sed nunc tincidunt rutrum. Maecenas sit amet nibh eget eros tempor dignissim. Proin sodales diam vitae mauris sodales, porta viverra nunc congue. In eu venenatis orci. Nunc ex nisl, porttitor ac enim a, tempus venenatis ex. Cras massa odio, dictum a pharetra ac, ullamcorper a odio.`

// Counting the number of et present in the paragraphs

let etCount = 0;

for (i = 0; i < lorem.length; i++)
{
    if (( lorem[i - 1] === ' ' && lorem[i] === 'e' && lorem[i + 1] === 't') && lorem[i+2] === ' '|| lorem[i + 1] === ' ' && lorem[i] === 'e' && lorem[i - 1] === 't' && lorem[i - 2] === ' ')
    {
        etCount += 1;
    }
}

console.log(etCount);

