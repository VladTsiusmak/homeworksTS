function min(numbers : number[]) : number{
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
}
console.log(min([-99, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
