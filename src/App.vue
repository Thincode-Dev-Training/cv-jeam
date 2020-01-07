<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      align-center
    >
      <v-layout mt-4 column align-center>
        <v-flex>
          <v-avatar height="200" width="200">
            <img src="https://st2.depositphotos.com/6306424/11185/v/950/depositphotos_111854282-stock-illustration-cartoon-mime-performance.jpg" alt="">
          </v-avatar>
        </v-flex>

        <v-flex>
          <p class="white--text mt-3 display-1 ">Julio Acevedo</p>
          <v-divider></v-divider>
        </v-flex>

        <v-flex>
          <p class="white--text mt-3 font-weight-light">Software Developer</p>
        </v-flex>
      </v-layout>


      <v-list dense :nav=true :rounded="true">

        <v-divider inset></v-divider>
        <v-list-item link :to="{name: 'home'}">
          <v-list-item-action>
            <v-icon color="blue lighten-1">account_box</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About me</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>
        <v-list-item link :to="{name: 'contact'}">
          <v-list-item-action>
            <v-icon color="blue lighten-1">mdi-phone-classic</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact me</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>
        <v-list-item link :to="{name: 'blog'}">
          <v-list-item-action>
            <v-icon color="blue lighten-1">mdi-file-document-edit-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>My Blog</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>
        <v-list-item link :to="{name: 'work'}">
          <v-list-item-action>
            <v-icon color="blue lighten-1">mdi-cogs</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Some of my work</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>
        <v-list-item link :to="{name: 'details'}">
          <v-list-item-action>
            <v-icon color="blue lighten-1">mdi-account-details</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Details</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      color="blue lighten-1"
      src="https://static3.bigstockphoto.com/3/5/9/large1500/95362232.jpg"
    >
      <v-app-bar-nav-icon v-on:click="drawer = !drawer" />
      <v-spacer></v-spacer>
      <v-toolbar-title>Julio Acevedo - Software Developer</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer app src="https://static3.bigstockphoto.com/3/5/9/large1500/95362232.jpg">
      <span>&copy; Julio Acevedo 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>