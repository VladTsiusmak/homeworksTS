type Author = {name: string, age: number}
type Book_1 = {
    title: string,
    pageCount : number,
    genre : string,
    authors : Author[]
}
type Book_2 = {
    title: string,
    pageCount : number,
    genre : string,
    authors : Author[]
}
type Book_3 = {
    title: string,
    pageCount : number,
    genre : string,
    authors : Author[]
}
let book_1 : Book_1 = {
  title: "A",
  pageCount: 100,
  genre: "music",
  authors: [{name: "AA", age: 20}]
}
let book_2 : Book_2 = {
  title: "B",
  pageCount: 200,
  genre: "music",
  authors: [{name: "BB", age: 30}]
}
let book_3 : Book_3 = {
  title: "C",
  pageCount: 300,
  genre: "music",
  authors: [{name: "CC", age: 40}]
}
