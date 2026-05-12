'use strict';

const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  rollBack: 25,
  fullPrice: 0,
  servicePercentPrice: 0,
  allServicePrices: 0,
  service1: '',
  service2: '',
  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

    do {
      appData.screenPrice = prompt("Сколько будет стоить данная работа?");
    } while (!isNumber(appData.screenPrice));

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  }
}

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num)
}

const getTitle = function () {
  const str = appData.title.trim();
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}


const getAllServicePrices = function () {
  let sum = 0;
  let servicePrice;

  for (let i = 0; i < 2; i++) {

    if (i === 0) {
      appData.service1 = prompt("Какой дополнительный тип услуги нужен?")
    } else if (i === 1) {
      appData.service2 = prompt("Какой дополнительный тип услуги нужен?")
    }

    do {
      servicePrice = prompt("Сколько это будет стоить?");

      if (servicePrice === null) {
        return sum;
      }

    } while (!isNumber(servicePrice));

    sum += +servicePrice;
  };
  return sum;
}

function getFullPrice() {
  return +appData.screenPrice + appData.allServicePrices;
}

const getServicePercentPrices = function () {
  return appData.fullPrice - (appData.fullPrice * (appData.rollBack / 100));
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


appData.asking();
appData.screens = appData.screens.toLowerCase();
appData.title = getTitle();
appData.allServicePrices = getAllServicePrices();
appData.fullPrice = getFullPrice();
appData.servicePercentPrice = getServicePercentPrices();

console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);






