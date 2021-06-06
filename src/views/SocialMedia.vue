<template>
  <v-container>
    <div class="text-center">
      <h1>Social Media</h1>
      <v-row class="my-5 socialmedia">
        <v-col class="my-5 sm" :key="index" v-for="(media, index) in medias">
          <div data-aos="fade-left">
            <v-icon size="100">{{ media.icon }}</v-icon>
            <h1>{{ media.name }}</h1>
            <a :href=media.link class="link">
              <h2 @click="growUp(index, media.color)" ref="animation">
                {{ media.accountName }}
              </h2>
            </a>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { growup } from "../anim";
export default {
  data() {
    return {
      progress: false,
      medias: [
        {
          icon: "mdi-facebook",
          name: "Facebook",
          accountName: "Ayoub Bey",
          link : "https://www.facebook.com/ayoub.bey.9279",
          color: "#1877f2",
        },
        {
          icon: "mdi-instagram",
          name: "Instagram",
          accountName: "Bey.Ayoub",
          link : "https://www.instagram.com/bey.ayoub/",
          color: "#c32aa3",
        },
        {
          icon: "mdi-linkedin",
          name: "Linkedin",
          accountName: "Ayoub Bey",
          link : "https://tn.linkedin.com/in/ayoub-bey-5692641a4",
          color: "#1da1f2",
        },
      ],
    };
  },

  methods: {
    growUp(i, color) {
      growup(this.$refs.animation[i], color);
    },
  },
};
</script>

<style scoped>
.socialmedia {
  margin-top: 100px !important;
}

.link{
  color: white !important;
}
</style>