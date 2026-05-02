'use strict';

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollBack = 25;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollBack / 100)));
let allServicePrices

const getTitle = function () {
  const str = title.trim();
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
}

const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
}

function getFullPrice() {
  return screenPrice + allServicePrices;
}

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price < 30000) {
    return "Даем скидку в 5%";
  } else if (price >= 0 && price < 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
}

screens = screens.toLowerCase();
title = getTitle();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();

console.log(title);

console.log(allServicePrices);
console.log(fullPrice);

console.log(getRollbackMessage(fullPrice));
showTypeOf(title)
showTypeOf(fullPrice)
showTypeOf(adaptive)


console.log(screens.length);
console.log(servicePercentPrice);

console.log("Стоимость верстки экранов" + " " + screenPrice + " " + "рублей/долларов/гривен/юани");
console.log("Стоимость разработки сайта" + " " + fullPrice + " " + "рублей/долларов/гривен/юани");



console.log(screens.split(", "));

console.log("Процент отката посреднику за работу" + " " + fullPrice * (rollBack / 100));



