<template>
  <div data-aos="fade-down" class="text-center">
    <h1 class="heading my-5 ">Portfolio</h1>
    <!--  

      <v-row class="my-5">
        <v-col md="6" class="text-center"  v-for="image in images" :key="image.id">
  -->
    <!-- <img data-aos="fade-down" class="yoo" :src="`https://drive.google.com/uc?export=view&id=${image.link}`" width="100%" /> -->
    <!-- <v-img :src="`https://drive.google.com/uc?export=view&id=${image.link}`"></v-img> -->
    <!-- <h3>description</h3> -->
    <!-- <v-btn to="/portfilo/1">About</v-btn> -->
    <!-- </v-col> -->

    <!-- </v-row> -->

    <stack :column-min-width="300" :gutter-width="15" :gutter-height="15" monitor-images-loaded>
      <stack-item v-for="(image, i) in images" :key="i">
        <p>{{image.link}}</p>
        <img :src="`https://drive.google.com/uc?export=view&id=${image.link}`" />
      </stack-item>
    </stack>

  </div>

</template>

<script>
import axios from "axios";
import { Stack, StackItem } from "vue-stack-grid";

export default {
  data() {
    return {
      images: [],
    };
  },

  components: {
    Stack,
    StackItem,
  },

  created() {
    axios.get("https://127.0.0.1:8000/api/images").then((response) => {
      this.images = response.data;
      console.log(response.data);
    });
  },
};
</script>

<style>
.display-4 {
  font-family: Georgia, "Times New Roman", Times, serif !important;
}
img {
  width: 100%;
  height: auto;
  border-radius: 12px;
}
</style>