'use strict';

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollBack: 25,
  fullPrice: 0,
  servicePercentPrice: 0,
  allServicePrices: 0,
  services: {},
  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();

    appData.logger();
  },
  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");

    for (let i = 0; i < 2; i++) {
      let name = prompt("Какие типы экранов нужно разработать?");
      let price = 0
      do {
        price = prompt("Сколько будет стоить данная работа?");
      } while (!appData.isNumber(price));

      appData.screens.push({ id: i, name: name, price: price })
    }



    for (let i = 0; i < 2; i++) {
      let name = prompt("Какой дополнительный тип услуги нужен?")
      let servicePrice = 0

      do {
        servicePrice = prompt("Сколько это будет стоить?");

        if (servicePrice === null) {
          return servicePrice;
        }

      } while (!appData.isNumber(servicePrice));

      appData.services[name] = +servicePrice

    };

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },
  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price
    }

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key]
    }
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
  },

  getTitle: function () {
    const str = appData.title.trim();
    if (!str) return "";
    appData.title = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  },
  getFullPrice: function () {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
  },
  getServicePercentPrices: function () {
    appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollBack / 100));
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


}
appData.start();









