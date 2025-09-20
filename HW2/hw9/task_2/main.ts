
let array : string[] = ['Main', 'Products', 'About us', 'Contacts'];
const menu : HTMLUListElement = document.createElement('ul');
menu.classList.add('menu');
    for (const item of array) {
        const li : HTMLLIElement = document.createElement('li');
       li.innerText = item;
       menu.appendChild(li);

    }
document.body.appendChild(menu);
