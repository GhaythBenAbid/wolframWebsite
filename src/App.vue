<template>
  <v-app>

    <!-- <app-header/> -->

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
// import Header from "./components/Header";

export default {
  name: "App",

  components: {
    // 'app-header':Header,
  },

  data: () => ({
    //
  }),
};
</script>


<style >
/* @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap'); */
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
* {
  /* font-family: 'Quicksand', sans-serif; */
  font-family: "Roboto", sans-serif;
}

a,
a:visited,
a:hover,
a:focus,
a:any-link,
a:active {
  text-decoration: none;
  color: white;
}
</style>