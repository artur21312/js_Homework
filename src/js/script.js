'use strict';

function Student(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.age =  Date().getFullYear() - birthYear;

    this.lessonCount = 0; // Переименовано для большей ясности
    this.grades =  Array(10);
    this.attendanceRecord =  Array(10);
}

Student.prototype._recordAttendance = function(isPresent) {
    if (typeof isPresent !== 'boolean') throw new Error('Значение attendance должно быть булевым');
    if (this.lessonCount >= 10) throw new Error('Достигнут лимит занятий');

    this.attendanceRecord[this.lessonCount] = isPresent;
    this.lessonCount += 1;
};

Student.prototype.markPresent = function() {
    this._recordAttendance(true);
};

Student.prototype.markAbsent = function() {
    this._recordAttendance(false);
};

Student.prototype.setGrade = function(grade) {
    const minGrade = 0;
    const maxGrade = 10;

    if (typeof grade !== 'number') throw new Error('Оценка должна быть числом');
    if (grade < minGrade || grade > maxGrade) throw new Error(`Оценка должна быть в диапазоне от ${minGrade} до ${maxGrade}`);

    const currentLessonIndex = this.lessonCount - 1;
    if (!this.attendanceRecord[currentLessonIndex]) throw new Error('Нельзя установить оценку за пропущенное занятие');

    this.grades[currentLessonIndex] = grade;
};

Student.prototype._calculateAverageGrade = function() {
    if (this.grades.every(grade => typeof grade !== 'number')) {
        return 'Невозможно рассчитать среднюю оценку из-за отсутствия оценок';
    }

    const gradeData = this.grades.reduce(
        (acc, grade) => {
            if (typeof grade !== 'number') return acc;
            acc.gradeCount += 1;
            acc.gradeSum += grade;

            return acc;
        },
        {
            gradeCount: 0,
            gradeSum: 0,
        }
    );

    return gradeData.gradeSum / gradeData.gradeCount;
};

Student.prototype._calculateAverageAttendance = function() {
    if (typeof this.attendanceRecord[0] !== 'boolean') {
        return 'Невозможно рассчитать среднюю посещаемость из-за отсутствия данных';
    }

    const attendedLessonsCount = this.attendanceRecord.filter(Boolean).length;
    return attendedLessonsCount / this.lessonCount;
};

Student.prototype.getSummary = function() {
    return {
        averageGrade: Number(this._calculateAverageGrade().toFixed(1)),
        averageAttendance: Number(this._calculateAverageAttendance().toFixed(1)),
    };
};

export default Student;

const studentInstance1 = new Student('Pavlo', 'Doe', 2000);
const studentInstance2 = new Student('Artyr', 'Cooper', 2004);

console.log(studentInstance1);
console.log(studentInstance2);
