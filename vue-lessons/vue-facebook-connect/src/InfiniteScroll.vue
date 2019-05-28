<template>
  <div class="list">
    <div  class="item"
          v-for="picture in pictures"
          :style="getStyle(picture)"/>
    <div v-if="loading" class="item">Loading></div>
  </div>
</template>

<script>
export default {
  props: ["pictures", "next"],
  data() {
    return {
      loading: false
    };
  },
  methods: {
    getStyle(picture) {
      return {
        backgroundImage: `url('${picture}')`
      };
    },
    onScroll() {
      if (this.loading) {
        return;
      }
      if (
        window.scrollY + window.innerHeight >
        document.body.scrollHeight - 50
      ) {
        this.loading = true;
        this.next().then(() => (this.loading = false));
      }
    }
  },
  mounted() {
    window.addEventListner("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListner("scroll", this.onScroll);
  }
};
</script>

<style scoped>
.list {
  display: flex;
  flex-flow: row wrap;
}

.item {
  background: center center no-repeat #eee;
  background-size: cover;
  width: 100px;
  height: 100px;
  flex: 0 0 100px;
}
</style>

