import Vue from "vue";
import Appexp from "./app.vue";
import router from "./router/index";

new Vue({
  el: "#app",
  router,
  render: h => h(Appexp)
});

let p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("done");
  }, 1000);
});
p.then(res => {
  console.log(res);
});