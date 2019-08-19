import Vue from "vue";
import Appexp from "./app.vue";
import router from "./router/index";

import pr from "./hotprint";
pr();

new Vue({
  el: "#app",
  router,
  render: h => h(Appexp)
});

if(module.hot){
  module.hot.accept("./hotprint.js",function(){
    console.log("模块热更新了");
    pr();
  });
}

let a;// eslint-disable-line no-unused-vars

let p = new Promise(function (resolve) {
  setTimeout(() => {
    resolve("done3");
  }, 1000);
});
p.then(res => {
  console.log(res);
});