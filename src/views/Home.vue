<template>
  <v-container class="mt-5 mb-5" hover>
    <v-layout>
      <v-flex xs2></v-flex>
      <v-flex xs8
              class="display-4 font-weight-bold font-weight-black">
        about   me
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs2></v-flex>
      <v-flex xs8 class="subtitle-1 font-italic mt-3" style="color:#80DEEA">
        34 years
        <strong class="ml-2 mr-2" style="color:#90A4AE">/</strong>
        León, Guanajuato
        <strong class="ml-2 mr-2" style="color:#90A4AE">/</strong>
        Thincode employee
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs2></v-flex>
      <v-flex xs7 class="mt-5" style="color:#9E9E9E">
        <p> Currently backend web developer increasing fronend development skills. 6 years of experience
          in backend application development for financial institutions. 4 years of experience in
          desktop and web application development (backend) for clinical laboratory with presence some
          states inside México and attention to the government of Mexico City.

          Passionate about development and programming. Looking to become competitive in the field
          of web development.
        </p>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs2></v-flex>
      <v-flex xs7>
        <v-divider color="#80DEEA" class="mt-4"></v-divider>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs2></v-flex>
      <v-flex xs7
              class="display-1 font-weight-bold font-weight-black mt-9">
        my soft skills
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs3></v-flex>
      <v-flex xs5>
        <v-row justify="center" class="mt-10">
          <v-expansion-panels popout>
            <v-expansion-panel
              v-for="(message, i) in messages"
              :key="i"
              hide-actions
            >
              <v-expansion-panel-header>
                <v-row
                  align="center"
                  class="spacer"
                  no-gutters
                >
                  <v-col
                    cols="2"
                    sm="2"
                    md="2"
                  >
                    <v-avatar
                      size="36px"
                    >
                      <v-icon
                        :color="message.color"
                        v-text="message.icon"
                        large
                      ></v-icon>
                    </v-avatar>
                  </v-col>

                  <v-col
                    class="hidden-xs-only"
                    sm="5"
                    md="4"
                    alignt-center
                    text-truncate
                  >
                    <strong v-html="message.name"></strong>
                  </v-col>

                  <v-col
                    v-if="message.excerpt"
                    class="grey--text text-truncate hidden-sm-and-down"
                  >
                    {{ message.excerpt }}
                  </v-col>
                </v-row>
              </v-expansion-panel-header>

              <v-expansion-panel-content>
                <v-divider color="#80DEEA"></v-divider>
                <v-card-text v-text="message.description"></v-card-text>
              </v-expansion-panel-content>

            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },

  data: () => ({
    messages: [
      {
        color: 'blue',
        icon: 'mdi-cube-send',
        name: 'Proactive',
        excerpt: 'click to see a brief description',
        description: 'Ability to propose situations that can improve things in some way.',
      },
      {
        color: 'green',
        icon: 'mdi-office-building',
        name: 'Follow business rules',
        excerpt: 'click to see a brief description',
        description: 'Responsibility and commitment to understand the business rules and follow them.',
      },
      {
        color: 'purple',
        icon: 'mdi-account-network',
        name: 'Teamwork',
        excerpt: 'click to see a brief description',
        description: 'Ability to adapt, interact and mediate with work groups.',
      },
    ],
  }),
}
</script>
