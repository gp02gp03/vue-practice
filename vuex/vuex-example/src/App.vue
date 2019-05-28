<template>
   <div id="app">
    <h1>{{count}}</h1>
    <button @click="addCount(2)">Add</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  // computed: mapState(["count"]),
  // methods: mapMutations(["addCount"])

  // computed: {
  //   ...mapState(["count"])
  // },
  // methods: {
  //   ...mapMutations(["addcount"])
  // }

  computed: {
    count() {
      return this.$store.state.count;
    }
  },

  methods: mapMutations(["addCount"])

  // methods: {
  //   addCount() {
  //     // this.$store.commit("addCount", 2);
  //     this.$store.commit({
  //       type: "addCount",
  //       step: 2
  //     });
  //   }
  // }
};
</script>

<style>
</style>

