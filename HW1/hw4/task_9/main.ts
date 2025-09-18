type UserType3 = {
    id: number,
    name: string,
    age: number,
}
function list(users : UserType3[] ) : void{
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}
list([
    {id: 1, name: 'Ivan', age: 20},
    {id: 2, name: 'Vlad', age: 21},
    {id: 3, name: 'Roma', age: 26},
])
