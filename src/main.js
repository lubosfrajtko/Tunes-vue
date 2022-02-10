import { createApp } from "vue";
import mitt from "mitt";
import App from "./App.vue";
import router from "./router";
//import MyHelper from "./helpers"; // import helpers functions

window.eventBus = mitt();

/*
const $log = function (data) {
  console.log(data);
}; */

//createApp(App).use(router, MyHelper).mount("#app");
createApp(App).use(router).mount("#app");
