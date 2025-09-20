const savedValue : string | null = localStorage.getItem('number');
let num : number = savedValue !== null ? Number(savedValue) : 0;
//Збільшує змінну num на 1.
num += 1;
//Зберігає оновлене число назад у localStorage під тим самим ключем 'number'.
localStorage.setItem('number', num.toString());
// Знаходить елемент з id="number" в HTML та вставляє туди нове значення num.
const numberElement : HTMLElement | null = document.getElementById('number');
if (numberElement) {
    numberElement.innerText = num.toString();
}
