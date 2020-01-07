<template>
  <v-app>
    <v-app-bar-nav-icon v-on:click="drawer = !drawer">
      <v-app-bar app dark prominent shrink-on-scroll scroll-target="#scrolling-techniques"
        src="https://c8.alamy.com/comp/PF46Y1/desktop-source-code-and-technology-background-developer-or-programer-with-coding-and-programming-wallpaper-by-computer-language-and-source-code-com-PF46Y1.jpg">
        <v-spacer></v-spacer>
        <v-layout>
          <v-flex>
            <v-toolbar-title>Welcome to my CV page</v-toolbar-title>
            <h6>Click toolbar to menu</h6>
          </v-flex>
        </v-layout>
      </v-app-bar>
    </v-app-bar-nav-icon>

    <v-navigation-drawer app v-model="drawer" temporary color="blue-grey lighten-1">
      <v-layout mt-4 column align-center>
        <v-flex>
          <v-avatar height="150" width="200">
            <img src="https://cde.laprensa.e3.pe/ima/0/0/1/2/4/124248.jpg"
            alt="">
          </v-avatar>
        </v-flex>

        <v-flex>
          <p class="white--text mt-3 headline">Julio Acevedo</p>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    drawer: true
  }),
};
</script>


      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="shrink">
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  :href="source"
                  icon
                  large
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                  href="https://codepen.io/johnjleider/pen/bXNzZL"
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>