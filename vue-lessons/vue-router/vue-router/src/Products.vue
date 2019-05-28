<template>
  <h1>Products</h1>
  <h2>{{$route.params.id}}</h2>
</template>

<script>
const Products = {
  18: "shoes",
  26: "t-shirt",
  37: "pants"
};
export default {
  computed: {
    id() {
      return this.$route.params.id;
    }
  }
};
</script>
