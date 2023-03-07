// 1

// {
// let name = prompt('Меня зовут - ...');
// console.log (name);

// let age = prompt('Мне ...  лет.');
// console.log (age);

// let city = prompt('Я проживаю в городе ...');
// console.log (city);

// let company = prompt('и работаю в компании...');
// console.log (company);

// let phone = prompt('Мои контактные данные: Телефон ...');
// console.log (phone);

// let email = prompt('Мои контактные данные: Почта ...');
// console.log (email);

// }

// 2

// {
// let name = prompt('Меня зовут - ...');
// let age = prompt('Мне ...  лет.');

// let year = (2023 - age);

// document.write (name + " " + "родился в" + " " + year +  " " + "году" )
// }

// 3

// let one = 1;
// let two = 2;
// let tree = 3;

// let four = 1;
// let five = 3;
// let six = 2;

// let total1 = (one + two + tree);
// let total2 = (four + five + six);

// if (total1 === total2) 
//  console.log ("Да") ;

// else 
//  console.log ("Нет");

// 4

// let a = 0;
// let b = 0;

// if (a > b) 
// console.log ("верно"); 

// if (a == b) 
// console.log ("это же ноль"); 

// else 
// console.log("неверно");


// 5

// let a = 10
// let b = 5

// let total = (a + b);
// console.log(total);

// let difference = (a - b);
// console.log(difference);

// let multiplication = (a * b);
// console.log(multiplication);

// let division = (a / b);
// console.log(division);

// let fraction = (total*total)
// if (total > 1);
// console.log (fraction);

// // 6 

// if(a > 2 & a < 11 || b >= 6 & b < 14) 
// console.log("Верно");
// else 
// console.log("Неверно");

// 7

// let n = 2
 
// if  (n>0 & n<=15) {
// console.log ("Первая четверть часа") 
// }
// else if  (n>15 & n<=30) {
// console.log ("Вторая четверть часа") 
// }
// else if (n>31 & n<=45) {
// console.log ("Третья четверть часа")
// }
// else if (n>46 & n<=59) {
// console.log ("Четвертая четверть часа")
// }
// else {
// console.log ("Не верное значение.")
// }

// // 8

// let d = 45

// if (1>=d & d<=10){
//     console.log ("Первая Декада")
// }

// else if (11>=d & d<=20){
//     console.log ("Вторая Декада")
// }
// else if (21>=d & d<=31){
//     console.log ("Третья Декада")
// }

// else {
//     console.log ("В месяце нету такого дня")
// }

// 9 

let day = prompt('Напишите количество дней')
  console.log (day + "  " + "дней это....")
  

let years = ( day/365) 
if (years>=1){
  console.log ( years. toFixed(1) + "Лет")
}
  else {
    console.log ("Меньше года")
  }


  let  month= ( day/31) 
  if (month>=1){
  console.log ( month. toFixed(1) +"  " + "Месяцев")
  }
  else {
    console.log ("Меньше месяца")
  }


  let  week= ( day/7) 
  if (week>=1){
  console.log ( week. toFixed(1) +"  " + "Недель")
  }
  else {
    console.log ("Меньше недели")
  }

  let  hours= ( day*24) 
  console.log ( hours. toFixed(1) +"  " + "Часов")

  let  minuts= ( day*24*60) 
  console.log ( minuts. toFixed(1) +"  " + "Минут")

  let  second= ( day*24*60*60) 
  console.log ( second. toFixed(1) +"  " + "Секунд")
  
// 10

if  (day <= 31) 
{
    console.log ("Месяц Январь")
}

else if (day <= 31+28 & day>=32) {
    console.log ("Месяц Февраль")
}

else if (day <= 31+28+31 & day>=32+28) {
    console.log ("Месяц Март")
}

else if (day <= 31+28+31+30 & day>=32+28+30) {
    console.log ("Месяц Апрель")
}

else if (day <= 31+28+31+30+31 & day>=32+28+30+31) {
    console.log ("Месяц Май")
}

else if (day <= 31+28+31+30+31+30 & day>=32+28+30+31+30) {
    console.log ("Месяц Июнь")
}

else if (day <= 31+28+31+30+31+30+31 & day>=32+28+30+31+30) {
    console.log ("Месяц Июль")
}

else if (day <= 31+28+31+30+31+30+31+31 & day>=32+28+30+31+30+31+31) {
    console.log ("Месяц Август")
}

else if (day <= 31+28+31+30+31+30+31+31+30 & day>=32+28+30+31+30+31+31+30) {
    console.log ("Месяц Сентябрь")
}

else if (day <= 31+28+31+30+31+30+31+31+30+31 & day>=32+28+30+31+30+31+31+30+31) {
    console.log ("Месяц Октябрь")
}

else if (day <= 31+28+31+30+31+30+31+31+30+31+30 & day>=32+28+30+31+30+31+31+30+31+30) {
    console.log ("Месяц Ноябрь")
}

else if (day <= 31+28+31+30+31+30+31+31+30+31+30+31 & day>=32+28+30+31+30+31+31+30+31+30+31) {
    console.log ("Месяц Декабрь")
}

else (day >= 366)



let monthalert = prompt('Напишите цифру месяца')
  
switch (monthalert) {
    case "1":
    case "2":
    case "12": 
    console.log ("Зима");
    break;
    case "3":
    case "4":
    case "5":
    console.log ("Весна");
    break;
    case "6":
    case "7":
    case "8":
    console.log ("Лето");
    break;
    case "9":
    case "10":
    case "11":
    console.log ("Осень");
    break;
}
