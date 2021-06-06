<template>
  <!-- <v-container>
     <div data-aos="fade-down" class="text-center">
       <h1 class="pb-5 display-3">Wolfram.Photography</h1>
       <img src="../assets/Profile.jpg" alt="Ayoub bey" class="image">
        <h1>Bey Ayoub</h1>
        <h3 class="mt-5">" What separates good content from great content is a willingness to take risks and push the envelope "</h3>
     </div>
     <v-divider class="my-5"></v-divider>
      <div class="text-center">
        <h2>wolframphotography provides for there customers the best service possible . <br> we stand for our product and the way we deliever it</h2>
        
      </div>
  </v-container> -->

  <v-row class="fill-height " align="center">
    <v-col md="6 text-center" data-aos="fade-right">
      <div class="logo">
      </div>
      <img src="https://drive.google.com/uc?export=view&id=1PZrcO72AMws9iVP55GI6jIKQYjTFClxy" alt="">
      <div >
        <h1 class="display-4 my-5 Name">Bey Ayoub</h1>
        <h3 class="quote">" What separates good content from great content is a willingness to take risks and push the envelope "</h3>
      </div>
      <div class="my-5">
        <h4 class="description">wolframphotography provides for there customers the best service possible . <br> we stand for our product and the way we deliever it</h4>
      </div>

      <div class="buttons">
        <v-btn class="mx-5" elevation="2" outlined tile x-large to="/Portfolio">Portfolio</v-btn>
        <v-btn class="mx-5" elevation="2" outlined tile x-large to="/About">About me</v-btn>
        <v-btn class="mx-5" elevation="2" outlined tile x-large to="/SocialMedia">social media</v-btn>
        
      </div>

    </v-col>
    <v-col md="6" class="text-center image" data-aos="fade-left">
      <v-img src="../assets/Profile.jpg" width="100%"></v-img>
    </v-col>

  </v-row>

</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
};
</script>

<style scoped>
.logo {
  margin: 50px 0;
}
.Name{
  font-weight: 900 !important;
}

.quote{
  font-weight: lighter;
}

.description{
  font-weight: 700;
}
.image{
  padding-bottom: 0px;
}
</style>
