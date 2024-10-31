'use strict';

function makeCounter() {
    let counter = 0;
    return function() {
        counter++;
        return counter;
    };
}

const Student = function(name, surname, yearOfBirth) {
    this.name = name;
    this.surname = surname;
    this.yearOfBirth = yearOfBirth;
    this.attendance = new Array(10).fill(null);
    this.assessments = new Array(10).fill(null);

    this.age = function() {
        return console.log('age =', 2024 - this.yearOfBirth);
    };

    let visitCounter = makeCounter();
    let markCounter = makeCounter();

    this.present = function() {
        let visitCount = visitCounter();
        if (visitCount > 10) {
            console.log('The student visited the maximum number of pairs');
        } else {
            this.attendance[visitCount - 1] = true;
        }
    };

    this.absent = function() {
        let visitCount = visitCounter();
        if (visitCount > 10) {
            console.log('The student visited the maximum number of pairs');
        } else {
            this.attendance[visitCount - 1] = false;
        }
    };

    this.mark = function() {
        let newAssessment = parseInt(prompt('Введите оценку', ''));
        let markCount = markCounter();
        if (markCount > 10) {
            console.log('You allowed excess of marks');
        } else if (newAssessment >= 0 && newAssessment <= 10) {
            this.assessments[markCount - 1] = newAssessment;
        } else {
            console.log('This assessment is not possible');
        }
    };

    this.summary = function() {
        let totalScore = this.assessments.reduce((acc, curr) => acc + (curr || 0), 0);
        let averageScore = totalScore / this.assessments.filter(a => a !== null).length || 0;

        let totalAttendance = this.attendance.reduce((acc, curr) => acc + (curr ? 1 : 0), 0);
        let averageAttendance = totalAttendance / this.attendance.filter(a => a !== null).length || 0;

        if (averageScore > 9 && averageAttendance > 0.9) {
            console.log('Ух ти, який молодчинка!');
        } else if (averageScore > 9 || averageAttendance > 0.9) {
            console.log('Нормально, але можна краще');
        } else {
            console.log('Редька!');
        }
    };
};
