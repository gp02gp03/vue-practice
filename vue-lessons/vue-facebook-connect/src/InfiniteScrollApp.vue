<template>
  <div>
    <span>{{connected}}</span>
    <InfiniteScroll :pictures="pictures" :next="getAlbum"/>
  </div>
</template>


<script>
import InfiniteScroll from "./InfiniteScroll";
import { resolve } from "url";

export default {
  components: {
    InfiniteScroll
  },
  data() {
    return {
      connected: false,
      pictures: [],
      after: ""
    };
  },
  methods: {
    connect() {
      FB.login(this.statusGet);
    },
    statusGet(result) {
      if (result.status === "connected") {
        this.connected = true;
        this.getAlbum();
      }
    },
    getAlbum() {
      return new Promise(resolve => {
        FB.api(
          "/738251022885507/photos",
          {
            fileds: ["picture"],
            after: this.after
          },
          result => {
            this.agter = result.paging.cusors.after;
            this.pictures = this.pictures.concat(
              result.data.map(item => item.picture)
            );
            // console.log(result);
            // console.log(this.pictures);

            resolve();
          }
        );
      });
    },
    next() {
      getAlbum();
    }
  },
  mounted() {
    FB.init({
      appId: 606325612911177,
      version: "v2.12"
    });

    FB.getLoginStatus(this.statusGet);
  }
};
</script>
