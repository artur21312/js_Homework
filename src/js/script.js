'use strict';


function makeCounter() {
    let counter = 0;
    return function() {
        counter++
        return counter;
    };
}

const Student =function (name,surname,yearOfBirth){
    this.name:name;
    this.surname:surname;
    this.yearOfBirth = yearOfBirth;
    this.attendance:[];
    this.assessments:[];
    this.age = function() {
       return console.log('age ='2024-yearOfBirth);
       };


    let Visit =makeCounter();

    this.present(){
    if (attendance===[]){
    attendance=[true,true,true,true,true,true,true,true,true,true] ;
    }


        if (visit()===11){
            console.log('The student visited the maximum number of pairs');
        }else attendance[Visit]=true;
    };
    this.absent(){

        if (attendance===[]){
            attendance=[true,true,true,true,true,true,true,true,true,true] ;
        }
        if (visit()===11){
            console.log('The student visited the maximum number of pairs');
        }else attendance[Visit]=false;
    };




    this.markcon=makeCounter;
    this.mark(){

        if (attendance===[]){
            assessments=[0,0,0,0,0,0,0,0,0,0] ;
        }

    let nawAssessments prompt('ведіть оцінку','');
    if (markcon()===11){
        console.log('You allow excess of small');
    }else if (nawAssessments<=10&&nawAssessments>=0){
        assessments[markcon()]=nawAssessments;
    } else{
        console.log('This assessment is not possible')
    }

        this.summary()= function() {
            let score = 0;
            for (let i = 0; i <= assessments.length; i++) {
                score+=assessments[i];
            }
            score/=assessments.length;
            return score;


            for (let i = 0; i < attendance.length; i++) {
                attendance[i] = Number(attendance[i]);
            }
            let sum = 0;
            for (let i = 0; i <= attendance.length; i++) {
                sum+=attendance[i];
            }
            sum/=attendance.length;
            return sum;

            if (score>9){
                score=true;
            }else {
            score=false;
            }
            if (sum>0.9){
                sum=true;
            }else {
                sum=false;
            }
            if (sum===true&&score===true){
            console.log('Ух ти, який молодчинка');
            }else if (sum===true||score===true){
                console.log('Нормально, але можна краще');

            } else {
                console.log('Редька!');

            }

        };



}
