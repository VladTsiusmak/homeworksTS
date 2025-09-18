// @ts-ignore
type MasUser = {
    id: number,
    name: string,
    age: number,
}
// @ts-ignore
let mas = (users : MasUser[]) :void => {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}
mas([
    {id: 1, name: 'Ivan', age: 20},
    {id: 2, name: 'Vlad', age: 21},
    {id: 3, name: 'Roma', age: 26},
])
