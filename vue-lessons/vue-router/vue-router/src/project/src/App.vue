<template>
<div>
  <div class="menu">
    <router-link to="/about">About</router-link>
    <router-link to="/products">Products</router-link>
  </div>

  <routenr-view/>
  </div>
</template>

<script>
import VueRouter from "vue-router";
import Products from "./Products.vue";
import About from "./About.vue";
export default {
  router: new VueRouter({
    router: new VueRouter({
      routes: [
        { path: "/about", component: About },
        { path: "products", component: Products }
      ]
    })
  })
};
</script>

<script>
import VueRouter from "vue-router";
import Products from "./Products.vue";
import About from "./About.vue";
export default {
  router: new VueRouter({
    router: new VueRouter({
      routes: [
        { path: "/about", component: About },
        { path: "products", component: Products }
      ]
    })
  })
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
