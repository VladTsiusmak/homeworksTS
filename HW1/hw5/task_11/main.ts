// @ts-ignore
const sum = (arr : number[]) : number => {
    return arr.reduce((total, current) => total + current, 0);
};

console.log(sum([1, 2, 10])); // -> 13
