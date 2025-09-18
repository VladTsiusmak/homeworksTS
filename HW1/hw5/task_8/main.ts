// @ts-ignore
type Primitive = number | string | boolean;
// @ts-ignore
let list = (arrayOfPrimitives : Primitive[]) : void => {
    document.write(`<ul>`)
    for (const item of arrayOfPrimitives) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
list([1, 'aboba', true])
