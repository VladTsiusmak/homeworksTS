// @ts-ignore
let createList = (text : string, counter : number) : void => {
    document.write('<ul>');
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
};
createList('Привіт!', 5);
