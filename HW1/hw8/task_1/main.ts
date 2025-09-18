// class Course1 {
//     title: string;
//     monthDuration: number;
//
//
//     constructor(title: string, monthDuration: number) {
//         this.title = title;
//         this.monthDuration = monthDuration;
//     }
// }
//
// class Course2 extends Course1 {
//     id: number;
//
//
//     constructor(title: string, monthDuration: number, id: number) {
//         super(title, monthDuration);
//         this.id = id;
//     }
// }

// interface Course1 {
//     title: string;
//     monthDuration: number;
// }
//
// interface Course2 extends Course1 {
//     id: number
// }


// type Course1 = {
//     title: string;
//     monthDuration: number
// }
//
// type Course2 = Course1 & { id: number }

interface Course12 {
    id?: number;
    title: string;
    monthDuration: number
}


// @ts-ignore
const coursesAndDurationArray: Course[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

// console.log(coursesAndDurationArray.map<Course2>((course: Course1, index: number) => ({...course, id: index + 1})));
console.log(coursesAndDurationArray.map<Course12>((course: Course12, index: number) => ({...course, id: index + 1})));
