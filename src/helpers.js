/*
const MyHelper = {
  install(Vue) {
    // ak chceme niečo pridat do vue musi to by byt vo funkcii install, a nasledne vyexportovat to
    Vue.prototype.$log = function (data) {
      console.log(data);
    };
  },
};

export default MyHelper;

*/

export default {
  install: (app, options) => {
    app.config.globalProperties.$log = (data) => {
      console.log(data);
    };

    //app.provide("i18n", options);
  },
};
