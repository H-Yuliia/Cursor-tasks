const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

//1
function getSubjects(student) {
    let subject = [];
    for (let key in student.subjects) {
        key = key.replaceAll("_", " ")
        key = key.split("")
        key[0] = key[0].toUpperCase()
        subject.push(key.join(''));
    }
    return subject;
}
console.log(getSubjects(students[0]))

//2
function getAverageMark(student) {
    let allMarks = [];
    for (let subject in student.subjects) {
        allMarks = allMarks.concat(student.subjects[subject])
    }
    let averageMark =
        allMarks.reduce((accumulator, currentValue) => accumulator + currentValue) /
        allMarks.length;

    return averageMark.toFixed(2);
}
console.log(`Середній бал студента: ${getAverageMark(students[0])}`)

// 3
function getStudentInfo(students) {
    let averageMark = getAverageMark(students);
    let student = {
        name: students.name,
        course: students.course,
        "average mark": averageMark
    }
    return { student };
}
console.log(getStudentInfo(students[0]))

// 4 
function getStudentsNames(students) {
    const studentsNames = [];
    for (let key of students) {
        studentsNames.push(key.name);
    }
    return studentsNames.sort();

}
console.log(getStudentsNames(students))

// 5

function getBestStudent(students) {
    let highestAverageMark = 0;
    let bestStudent = null
    for (const student of students) {
        let marks = getAverageMark(student)
        if (marks > highestAverageMark) {
            highestAverageMark = marks;
            bestStudent = student.name;
        }
    }
    return bestStudent;
}
console.log(`Студент з найкращими балами: ${getBestStudent(students)}`)

// 6

function calculateWordLetters(word) {
    let letters = {};
    for (let letter of word) {
        if (letters[letter]) {
            letters[letter]++
        }
        else {
            letters[letter] = 1
        }
    }
    return letters;
}
console.log(calculateWordLetters("test"));