// @ts-ignore
const getMinNumber = (array : number[]) : number => {
    return Math.min(...array);
};

const numbers = [10, 5, 3, 8, 1];
console.log(getMinNumber(numbers));
