import Vue from "vue";
import VueRouter from "vue-router";
import Products from "./Products";
import About from "./About";
import AboutUs from "./AboutUs";
import AboutYou from "./AboutYou";
import AboutHome from "./AboutHome";
import App from './App.vue'

Vue.use(VueRouter);

export default new VueRouter({
  //mode => 預設為hash
  mode: 'history',
  routes: [{
      path: '/',
      component: App,
      children: [{
        path: "/about",
        component: About,
        children: [{
            path: "",
            component: AboutHome
          } {
            path: "us",
            name: 'name',
            component: AboutUs
          },
          {
            path: "you",
            name: 'prod',
            component: AboutYou
          },
          {
            path: "both",
            components: {
              default: AboutUs,
              another: AboutYou
            }
          },

        ]
      }]
    },
    {
      path: "products/:id",
      component: Products
    },
    {
      path: '*',
      redirect: {
        name: 'home'
      }
    }
  ]
})
