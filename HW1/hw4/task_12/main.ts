function swap(arr : number[], index1 : number, index2 : number) : number[] {
   let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
    return arr
}

console.log(swap([11, 22, 33, 44], 0, 1));
