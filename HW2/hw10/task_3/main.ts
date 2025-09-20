type UserInfo = {
    Name: string,
    Surname: string,
    Age: number,
}
let button3 : HTMLButtonElement | null = document.querySelector('#button');
if (button3 !== null) {
    button3.addEventListener('click', function (event) {
        event.preventDefault();
        const wrapper : HTMLDivElement = document.createElement('div');
        const nameInput : HTMLInputElement | null = document.querySelector('#userName');
        const surnameInput : HTMLInputElement | null = document.querySelector('#userSurname');
        const ageInput : HTMLInputElement | null = document.querySelector('#userAge');
        if (!nameInput || !surnameInput || !ageInput) {
            console.log('Одне з полів не знайдено');
            return;
        }
        const userName : string = nameInput.value;
        const userSurname : string = surnameInput.value;
        const userAge : number = Number(ageInput.value);
        let user : UserInfo = { Name: userName, Surname: userSurname, Age: userAge };
        wrapper.innerText = `${user.Name} ${user.Surname}, ${user.Age} років`;
        document.body.appendChild(wrapper);
    });
}
