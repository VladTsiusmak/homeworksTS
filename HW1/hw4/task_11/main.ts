function sum(arr : number[]) : number{
    let sum = 0;
    for (const item of arr){
        sum += item;
    }
    return sum;
}
console.log(sum([1,5,20]))
