// @ts-ignore
const swap = (arr : number[], index1 : number, index2 : number) : number[] => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
};

console.log(swap([11, 22, 33, 44], 0, 1)); // => [22, 11, 33, 44]
