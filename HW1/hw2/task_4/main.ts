type User ={
    name : string,
    username : string,
    password : string
}
let users : User[] = [
    {name: "a", username: "n", password: "11"},
    {name: "b", username: "m", password: "22"},
    {name: "c", username: "l", password: "33"},
    {name: "d", username: "g", password: "44"},
    {name: "e", username: "f", password: "55"},
    {name: "f", username: "e", password: "66"},
    {name: "g", username: "d", password: "77"},
    {name: "l", username: "c", password: "88"},
    {name: "m", username: "b", password: "99"},
    {name: "n", username: "a", password: "00"}
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)
