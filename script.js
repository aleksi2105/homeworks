let title = "Homeworks";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 550;
let rollBack = 25;
let fullPrice = 75055854;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log("Стоимость верстки экранов" + " " + screenPrice + " " + "рублей/долларов/гривен/юани");
console.log("Стоимость разработки сайта" + " " + fullPrice + " " + "рублей/долларов/гривен/юани");

screens = screens.toLowerCase();

console.log(screens.split(", "));

console.log("Процент отката посреднику за работу" + " " + fullPrice * (rollBack / 100));
