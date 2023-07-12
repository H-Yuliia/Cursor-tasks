class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this._marks = [5, 4, 4, 5];
        this.dismissed = false;
    }
    getInfo() {
        return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
    }

    get marks() {
        return this.dismissed ? null : this._marks;
    }

    set marks(mark) {
        if (!this.dismissed) {
            this._marks.push(mark <= 5 ? mark : null);
        }

    }

    getAverageMark() {
        return this._marks.reduce((accumulator, value) => accumulator + value) / this._marks.length;
    }

    dismiss() {
        this.dismissed = true;
    }

    recover() {
        this.dismissed = false;
    }
}

let student = new Student("Вищої Школи Психотерапії м.Одеса", 1, "Остап Родоманський Бендер")

console.log(student.getInfo());
console.log(student.marks);
student.marks = 5;
console.log(student.marks);
console.log(`Середній бал студента: ${student.getAverageMark()}`);
student.dismiss();
console.log(student.marks);
student.recover();
console.log(student.marks);

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName)
        this.getScholarship();
    }
    getScholarship() {
        if (!this.dismissed && this.getAverageMark() >= 4.0) {
            console.log(`Ви отримали 1400 грн. стипендії`);
        }
        else {
            console.log("Ви не отримаєте стипендії")
        }
    }
}

let budgetStudents = new BudgetStudent();

