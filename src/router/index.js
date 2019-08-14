import Vue from "vue";
import Router from "vue-router";
import HelloPage from "../pages/Hello.vue";
import AboutPage from "../pages/About.vue";

Vue.use(Router);
export default new Router({
  routes:[
    {
      path:"/",
      component:HelloPage
    },
    {
      path:"/about",
      component:AboutPage
    }
  ]
});