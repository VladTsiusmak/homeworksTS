// @ts-ignore
const exchange = (sumUAH : number, currencyValues : {currency : string, value : number}[], exchangeCurrency : string) : number  => {
    let chosenCurrency;
    for (const item of currencyValues){
        if(item.currency === exchangeCurrency){
            chosenCurrency = item;
        }
    }
    if (chosenCurrency){
        return sumUAH * chosenCurrency.value;
    }
    return -1;
}

console.log(exchange(10000, [{currency: 'USD', value: 42}, {currency: 'EUR', value: 25}], 'EUR'))
