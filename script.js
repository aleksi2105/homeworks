'use strict';

let title;
let screens;
let screenPrice;
let adaptive;

let rollBack = 25;
let fullPrice;
let servicePercentPrice;
let allServicePrices;
let service1;
let service2;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function () {
  title = prompt("Как называется ваш проект?", "Калькулятор верстки");
  screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

  do {
    screenPrice = prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screenPrice));
  screenPrice = +screenPrice;
  adaptive = confirm("Нужен ли адаптив на сайте?");
}

const getTitle = function () {
  const str = title.trim();
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
}

const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {

    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?")
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?")
    }

    sum += +prompt("Сколько это будет стоить?")
  };
  return sum;
}

function getFullPrice() {
  return screenPrice + allServicePrices;
}

const getServicePercentPrices = function () {
  return fullPrice - (fullPrice * (rollBack / 100));
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


asking();
screens = screens.toLowerCase();
title = getTitle();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();


showTypeOf(title)
showTypeOf(fullPrice)
showTypeOf(adaptive)

console.log("allServicePrices", allServicePrices);

console.log(screens.length);
console.log(servicePercentPrice);
console.log("Стоимость верстки экранов " + screenPrice + " рублей", "Стоимость разработки сайта " + fullPrice + " рублей");




