type CourseListType ={
    title : string,
    monthDuration : number,
    hourDuration : number,
    modules : string[]
}
let CoursesArray : CourseListType[] = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const course of CoursesArray) {
    let courseDiv : HTMLDivElement = document.createElement('div');
    courseDiv.classList.add('course')
    document.body.appendChild(courseDiv);

    let courseTitle : HTMLHeadingElement = document.createElement('h2');
    courseTitle.innerText = course.title;
    courseDiv.appendChild(courseTitle);

    let durationP : HTMLParagraphElement = document.createElement('p');
    durationP.innerText = `Duration: ${course.monthDuration} months, ${course.hourDuration} hours`;
    courseDiv.appendChild(durationP);

    let modulesUl : HTMLUListElement = document.createElement('ul');
    modulesUl.classList.add('modules');
    courseDiv.appendChild(modulesUl);

    for (const item of course.modules) {
        let moduleLi : HTMLLIElement = document.createElement('li');
        moduleLi.innerText = item;
        modulesUl.appendChild(moduleLi);
    }
}
