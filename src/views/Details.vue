<template>
    <v-container bg>
      <v-layout wrap class="mt-5" justify-center align-center>
        <v-flex xs8>


            <v-container
              fluid
              grid-list-md
            >
              <v-layout row wrap>
                <v-flex
                  v-for="card in cards"
                  :key="card.title"
                  v-bind="{ [`xs${card.flex}`]: true }"
                >
                  <v-card hover elevation="24">
                    <v-container>
                      <v-layout>
                        <v-flex xs12 class="display-1 white--text ml-3 blue lighten-1"
                                style="border-radius:7px; box-shadow: 1px 1px 4px rgb(0,255,255);"
                        >
                          <v-icon color="blue-grey darken-1" large>
                            {{ card.icon }}
                          </v-icon>
                          {{ card.title }}
                        </v-flex>
                      </v-layout>

                      <v-layout class="ml-5 mt-5" row wrap v-for="skill in card.skills" :key="skill.name">
                        <v-flex>
                          <v-toolbar height="20" class="mb-1" flat>
                            <strong>{{ skill.name }}</strong>
                            <v-spacer></v-spacer>
                            <strong style="color:#80DEEA">{{ skill.value }} % </strong>
                          </v-toolbar>
                          <v-progress-linear
                            v-if="card.has_skills"
                            :indeterminate="indeterminate"
                            size="120"
                            :value="skill.value"
                            color="cyan lighten-3"
                          ></v-progress-linear>
                        </v-flex>
                      </v-layout>

                      <v-timeline
                        v-if="card.has_education"
                        :align-top="alignTop"
                        :dense="dense"
                        :reverse="reverse_education"
                      >
                        <v-timeline-item
                          v-for="school in card.schools"
                          :key="school.grade"
                          :fill-dot="fillDot"
                          :hide-dot="hideDot"
                          :icon="icon ? 'mdi-star' : ''"
                          :icon-color=" iconColor ? 'deep-orange' : ''"
                          :left="left"
                          :right="right"
                          :small="small"
                        >
                          <template v-slot:icon class="ml-10 mr-10">
                            <v-avatar v-if="avatar" height="90" width="90" class="ml-10 mr-10">
                              <img :src="school.src">
                            </v-avatar>
                          </template>
                          <span slot="opposite">{{ school.grade }}</span>
                          <v-card elevation="20">
                            <v-card-title class="headline">{{  school.name }}</v-card-title>
                            <v-card-text>
                              {{ school.description }}
                            </v-card-text>
                          </v-card>
                        </v-timeline-item>
                      </v-timeline>

                      <v-timeline
                        v-if="card.has_experience"
                        :reverse="reverse_jobs"
                        dense
                      >
                        <v-timeline-item

                          v-for="job in card.jobs"
                          :key="job.name"
                        >
                          <template v-slot:icon>
                            <v-avatar v-if="avatar" height="90" width="90" class="ml-5">
                              <img :src="job.src">
                            </v-avatar>
                          </template>

                          <v-card elevation="24">
                            <v-card-title class="headline">{{ job.name }}</v-card-title>
                            <v-card-text>
                              {{ job.description }}
                            </v-card-text>
                          </v-card>
                        </v-timeline-item>
                      </v-timeline>

                    </v-container>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>


        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      alignTop: false,
      avatar: true,
      dense: false,
      fillDot: false,
      hideDot: false,
      icon: false,
      iconColor: false,
      left: false,
      right: false,
      small: false,
      indeterminate: false,
      rotate: 0,
      size: 64,
      value: 0,
      width: 4,
      reverse_jobs: true,
      reverse_education: false,
      cards: [
        { title: 'Education', flex: 12, icon: 'fas fa-university', has_education: true,
          schools: [
            { grade: 'High School', name: 'Lefranc - Liceo Francés Mexicano',
              description: 'I studied ther for 3 years getting a degree on Informatica Administrativa',
              src: 'https://upload.wikimedia.org/wikipedia/commons/6/64/LogoLFMcirc.jpg'
            },
            { grade: 'University', name: 'Universidad del Valle de México',
              description: 'I studied ther for 4 and a half years getting a degree on Computational Systems Engineering',
              src: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Escudo_de_la_UVM.jpg'
            },
          ]
        },
        { title: 'Skills', flex: 4, icon: 'fab fa-accessible-icon', has_skills: true,
          skills: [
            { name: 'Ruby on Rails', value: 50 },
            { name: 'Git', value: 40 },
            { name: 'MySQL', value: 60 },
            { name: 'Algol', value: 80 },
            { name: 'DMAlgol', value: 70 },
            { name: 'DCAlgol', value: 70 },
            { name: 'AlgoL', value: 80 },
            { name: 'Unisys', value: 65 },
            { name: 'DMSII', value: 30 },
            { name: 'Cobol', value: 50 },
            { name: 'WFL', value: 40 },
            { name: 'FoxPro', value: 50 },
            { name: 'PHP', value: 30 },
            { name: 'C', value: 20 },
          ],
        },
        { title: 'Experience', flex: 8, icon: 'fas fa-building', has_experience: true,
          jobs: [
            {name: 'LUDI', description: 'Developing desktop management system in VisualFoxPro 9 + MySQL',
             src: 'https://scontent.fgdl4-1.fna.fbcdn.net/v/t1.0-9/24068244_1745161295502585_4594559330133761970_n.jpg?_nc_cat=105&_nc_ohc=xFzssVV8AbIAX-k0JwE&_nc_ht=scontent.fgdl4-1.fna&oh=d67cd1dfa7c354d7f880d3307043a690&oe=5EAA3D8C',
            },
            {name: 'LAPI', description: 'Developing desktop management system in VisualFoxPro 9 + MySQL',
             src: 'https://www.lapi.com.mx/img/3576/195.jpg',
            },
            {name: 'CHEMP', description: 'Developing desktop management system in VisualFoxPro 9 + MySQL',
             src: 'http://da9w.e-tlaxcala.mx/sites/default/files/site_uploads/1_fileminimizer_36.jpg',
            },
            {name: 'Infoware-Thincode', description: 'Developing backend applications on Unisys for MCP. An now developing backend applications on Ruby on Rails + PostgreSQL + Vue.js + ...',
             src: 'https://media-exp1.licdn.com/dms/image/C4D0BAQHGxR0B4COlTQ/company-logo_200_200/0?e=2159024400&v=beta&t=7u3bjTjaDSl8VUNh52GNR_kZV7RJuCpAN9r-uNT4AXg',
            },
          ]
        }
      ]
    })
  }
</script>