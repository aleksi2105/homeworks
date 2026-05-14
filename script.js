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
    } while (!appData.isNumber(appData.screenPrice));

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
  },

  getTitle: function () {
    const str = appData.title.trim();
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  },
  getAllServicePrices: function () {
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

      } while (!appData.isNumber(servicePrice));

      sum += +servicePrice;
    };
    return sum;
  },
  getFullPrice: function () {
    return +appData.screenPrice + appData.allServicePrices;
  },
  getServicePercentPrices: function () {
    return appData.fullPrice - (appData.fullPrice * (appData.rollBack / 100));
  },
  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return "Даем скидку в 10%";
    } else if (price >= 15000 && price < 30000) {
      return "Даем скидку в 5%";
    } else if (price >= 0 && price < 15000) {
      return "Скидка не предусмотрена";
    } else {
      return "Что то пошло не так";
    }
  },
  logger: function () {
    for (let key in appData) {
      console.log(key, appData[key]);
    }
  },
  start: function () {
    appData.asking();
    appData.screens = appData.screens.toLowerCase();
    appData.title = appData.getTitle();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice = appData.getServicePercentPrices();
    appData.logger();
  }

}
appData.start();









