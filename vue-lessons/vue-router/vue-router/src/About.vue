<template>
  <h1>About</h1>
  <router-link :to="{name:'us'}" >Us</router-link>
  <router-link to="/about/you" >You</router-link>
  <router-link :to="{name:'prod',params:{id:18}}" >shoes</router-link>
  <router-view></router-view>
</template>
