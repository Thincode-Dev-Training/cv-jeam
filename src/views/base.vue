<template>
  <v-container>
    <v-layout>
      <v-flex>

        <v-btn>Botón</v-btn>
        <v-btn dark color="cyan darken-1">Botón</v-btn>
        <v-btn text>Botón sin Fondo</v-btn>
        <v-btn color="secondary" large>Botón grande</v-btn>
        <v-btn color="secondary">Botón normal</v-btn>
        <v-btn color="secondary" small>Botón pequeño</v-btn>
        <v-btn color="cyan lighten-3" :disabled="true">Deshabilitado</v-btn>
        <v-btn color="cyan lighten-3" depressed>Sin Fondo</v-btn>

        <v-btn color="purple">
          <v-icon color="cyan lighten-3">mdi-wrench</v-icon>
        </v-btn>
        <v-btn color="purple">
          <v-icon color="cyan lighten-3">mdi-dropbox</v-icon>
        </v-btn>
        <v-btn color="purple">
          <v-icon color="cyan lighten-3">mdi-desktop-classic</v-icon>
        </v-btn>
        <v-btn color="purple" icon text>
          <v-icon color="cyan lighten-3">mdi-nintendo-switch</v-icon>
        </v-btn>

        <v-btn color="purple" fab small>
          <v-icon color="cyan lighten-3">mdi-nintendo-switch</v-icon>
        </v-btn>
        <v-btn color="purple" fab>
          <v-icon color="cyan lighten-3">mdi-nintendo-switch</v-icon>
        </v-btn>
        <v-btn color="purple" fab large>
          <v-icon color="cyan lighten-3">mdi-nintendo-switch</v-icon>
        </v-btn>

        <v-btn color="secondary">
          Ir a Nintendo
          <v-icon color="cyan lighten-3" right>mdi-nintendo-switch</v-icon>
        </v-btn>
        <v-btn color="secondary">
          <v-icon color="cyan lighten-3" left>mdi-nintendo-switch</v-icon>
          Ir a Nintendo
        </v-btn>
        <v-btn outlined color="purple">
          <v-icon color="cyan lighten-3" left>mdi-nintendo-switch</v-icon>
          Ir a Nintendo
        </v-btn>

        <v-btn outlined color="purple" block>
          <v-icon color="cyan lighten-3" left>mdi-nintendo-switch</v-icon>
          Ir a Nintendo
        </v-btn>

      </v-flex>
    </v-layout>

    <v-layout wrap class="mt-5">
      <v-flex class="info" xs12>
        <h1>12</h1>
      </v-flex>
      <v-flex class="secondary" xs6>
        <h1>12</h1>
      </v-flex>
      <v-flex class="error" xs6>
        <h1>12</h1>
      </v-flex>
    </v-layout>

    <v-layout class="mt-5 secondary" justify-center  align-center style="height:300px">
      <v-flex class="info" xs3>
        <h1>Centrado</h1>
      </v-flex>
      <v-flex class="blue-grey white--text" xs3>
        <h1>Centrado</h1>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex>
        <h1 class="display-1 text-uppercase">Lorem ipsum dolor sit amet .</h1>
        <h1 class="display-2 light-blue pa-5 mt-5">Lorem ipsum dolor sit .</h1>
        <h1 class="display-3 text-center">Lorem ipsum dolor.</h1>
        <h1 class="display-4">Lorem ipsum dolor sit amet .</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  }
}
</script>
