//@ts-ignore
    let str : string = 'Ревуть воли як ясла повні';
//@ts-ignore
let arr  = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//@ts-ignore
function stringToarray(str : string) : string[]{
    if (str){
        const split : string[] = str.split(' ');
        return split;
    }
    return [''];
}
console.log(stringToarray('Ревуть воли як ясла повні'))
