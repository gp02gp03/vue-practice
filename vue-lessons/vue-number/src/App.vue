<template>
  <div id="app">
    <h1>APP</h1>
    <h2>{{count}}</h2>
    <RunningNumber :number="count"/>
    <br>
    <button @click="count+=100">+</button>
    <button @click="count-=100">+</button>
  </div>
</template>

<script>
import RunningNumber from "./RunningNumber";
export default {
  components: {
    RunningNumber
  },
  data() {
    return {
      count: 0
    };
  },
  methods: {}
};
</script>

<style>
</style>
