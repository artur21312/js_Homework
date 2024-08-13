'use strict';


const age = prompt('сколько вам лет');
const conditionage=age!== null && age.trim().length && !isNaN(+age) ;
const city=prompt('где вы проживаете');
const conditioncity=city!== null && city.trim().length && !isNaN(+city);
const sport=prompt('какой твой льбимый спорт');
const conditionsport=sport!== null && sport.trim().length && !isNaN(+sport);

if (conditionage){
    alert(age);
}
else {
    alert('Шкода, що Ви не захотіли ввести свій(ю) дату народження');
}
if (!conditioncity){
    alert('Шкода, що Ви не захотіли ввести свіє місто');
}else if (city==='Київ'||city==='Вашингтон'||city==='Лондон'){
    alert('Ти живеш у столиці '+city);
}else if (city===isNaN(+city)){
    alert('ти живеш у місті '+city);
}


if (!conditionsport) {
    alert('Шкода, що Ви не захотіли ввести свій спорт');
}




if (sport === 'бокс') {
    alert('Круто! Хочеш стати Александр Усик');
} else if (sport === 'волейбол') {
    alert('Круто! Хочеш стати Вильфредо Леона');
} else if (sport === 'тенис') {
    alert('Круто! Хочеш стати Джон Пий Боланд');
} else if(sport===isNaN(+sport)){
    alert('Крутий вид спорту');
}




