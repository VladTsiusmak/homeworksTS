type Primitive = number | string | boolean;
function list(arrayOfPrimitives : Primitive[]){
    document.write(`<ul>`)
    for (const item of arrayOfPrimitives) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}

list([1, 'aboba', true])
