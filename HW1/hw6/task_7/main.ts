//@ts-ignore
function sortNums(array : number[],direction : string) : number[] {
    if(direction === 'ascending') return array.sort((a,b) => a - b);
    if (direction === 'descending') return array.sort((a,b) => b - a);
    return array;
}

