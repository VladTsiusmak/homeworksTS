var CoursesArray = [
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
for (var _i = 0, CoursesArray_1 = CoursesArray; _i < CoursesArray_1.length; _i++) {
    var course = CoursesArray_1[_i];
    var courseDiv = document.createElement('div');
    courseDiv.classList.add('course');
    document.body.appendChild(courseDiv);
    var courseTitle = document.createElement('h2');
    courseTitle.innerText = course.title;
    courseDiv.appendChild(courseTitle);
    var durationP = document.createElement('p');
    durationP.innerText = "Duration: ".concat(course.monthDuration, " months, ").concat(course.hourDuration, " hours");
    courseDiv.appendChild(durationP);
    var modulesUl = document.createElement('ul');
    modulesUl.classList.add('modules');
    courseDiv.appendChild(modulesUl);
    for (var _a = 0, _b = course.modules; _a < _b.length; _a++) {
        var item = _b[_a];
        var moduleLi = document.createElement('li');
        moduleLi.innerText = item;
        modulesUl.appendChild(moduleLi);
    }
}
