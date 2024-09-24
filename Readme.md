Це ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:

Copy code
let ladder = {
step: 0,
up: function () {
this.step++;
},
down: function () {
this.step--;
},
showStep: function () { // показывает текущую ступеньку
alert(this.step);
}
};
Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо виконати це так:

Copy code
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
Змініть код методів up, down і showStep таким Таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:

Copy code
ladder.up().up().down().showStep(); // 1
Такий підхід широко використовується в бібліотеках JavaScript.