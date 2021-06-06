<template>
  <div fixed>
    <v-navigation-drawer v-model="drawer" app :width="325" class="pl-5 grey darken-4 elevation-8" >
      <v-list-item>
        <v-list-item-content class="mt-5">
          <v-list-item-title class="title" @click.stop="drawer = !drawer">
            Wolfram.Photography
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list>
        <v-list-item>
          <v-list-item-content>
            <router-link
              :key="index"
              v-for="(item, index) in titles"
              :to="item.link"
              ><v-list-item-title
                @click="go(index)"
                class="my-2 links"
                ref="square"
                >{{ item.name }}</v-list-item-title
              ></router-link
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div>
      <v-icon class="text-center ma-5" @click="drawer = !drawer"
        >mdi-menu</v-icon
      >
    </div>
  </div>
</template>

<script>
import { translate } from "../anim";

export default {
  data() {
    return {
      drawer: null,

      titles: [
        { name: "Home", link: "/" },
        { name: "Portfolio", link: "/Portfolio" },
        { name: "Projects", link: "/Projects" },
        { name: "Social Media", link: "/SocialMedia" },
        { name: "About", link: "/About" },
      ],
    };
  },

  methods: {
    go(x) {
      translate(this.$refs.square[x]);
    },
  },
};
</script>

<style scoped>
.links {
  font-size: 20px;
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

.ee {
  position: sticky;
  top: 0;
}
</style>