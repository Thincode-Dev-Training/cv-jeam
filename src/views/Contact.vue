<template>
    <v-container bg>
      <v-layout wrap class="mt-5" justify-center align-center>
        <v-flex xs3>
          <v-btn text color="blue lighten-2" block x-large height="160px"
                 href="https://wa.me/5215534442209"
          >
            <v-icon color="cyan lighten-3" left large>mdi-cellphone-android</v-icon>
            ... 55 1647 3758
          </v-btn>

          <v-btn text color="blue lighten-2" block x-large height="160px"
                 href="https://www.facebook.com/julio.acevedo.39589149"
          >
            <v-icon color="cyan lighten-3" left large>mdi-facebook</v-icon>
            ... by FaceBook
          </v-btn>

          <v-btn text color="blue lighten-2" block x-large height="160px"
                 href="https://twitter.com/dicafis"
          >
            <v-icon color="cyan lighten-3" left large>mdi-twitter</v-icon>
            ... by Twitter
          </v-btn>

          <v-btn text color="blue lighten-2" block x-large height="160px"
                 href="mailto:julio.acevedo@thincode.com"
          >
            <v-icon color="cyan lighten-3" left large>mdi-email</v-icon>
             ... by e-Mail
          </v-btn>
        </v-flex>
        <v-flex xs1></v-flex>
        <v-flex xs4>
          <v-btn text color="blue lighten-2" block class="headline" disabled="">
            . . . or send me a message
          </v-btn>
          <v-form
            class="mt-10"
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="name"
              :counter="15"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-textarea
              v-model="message"
              :counter="500"
              :rules="messageRules"
              label="Message"
              required
            ></v-textarea>

            <v-btn
              :loading="loading"
              :disabled="!valid"
              color="blue lighten-2"
              class="mr-4"
              @click="validate"
            >
              Send
            </v-btn>

            <v-btn
              color="cyan lighten-3"
              class="mr-4"
              @click="clear"
            >
              Clear Form
            </v-btn>

            <v-dialog
              v-model="loading"
              hide-overlay
              persistent
              width="300"
              height="200"
            >
              <v-card
                color="primary"
                dark
                align-center
                justify-center
              >
                <v-card-text>
                  <br> Sending your comments ... <br>
                  <v-progress-linear
                    indeterminate
                    color="white"
                    class="info"
                  ></v-progress-linear>
                </v-card-text>
              </v-card>
            </v-dialog>

            <v-dialog
                v-model="sent"
                max-width="290"
              >
                <v-card dark>
                  <v-card-title class="headline">Comments sent</v-card-title>

                  <v-card-text>
                    Thank you for sharing your thoughts, I'm always happy to hear about what you think.
                    If answer is needed I will try to respond as soon as I can.

                    Regards!
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="cyan lighten-3"
                      text
                      @click="sent = false"
                    >
                      O K D K
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      loading: false,
      sent: false,
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 15) || 'Name must be less than 15 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      message: '',
      messageRules: [
        v => !!v || 'Message is required',
        v => (v && v.length >= 10) || 'Message must be at least 10 characters',
        v => (v && v.length <= 500) || 'Message must can be up to 500 characters',
      ],
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.loading = true
          setTimeout(() => {
            this.snackbar = true
            this.submit()
            this.clear()
            this.loading = false
            this.sent = true
          }, 1500);
        }
      },
      clear () {
        this.$refs.form.reset()
      },

      submit() {
        let data = {
          from_name: this.name,
          from_mail: this.email,
          message: this.message
        };

        if (this.$refs.form.validate()) {
          console.log("hola me estan por enviar");
          emailjs.send("dicafis_gmail_com", "contact_cv_form", data).then(
            function(Response) {
              if (response.text === "OK") {
                alert("El correo se ha enviado con éxito");
              }
              console.log(
                "SUCCESS. status=%d, text=%s",
                response.status,
                resonse.text
              );
            },
            function(err) {
              alert("Ocurrio un problema al enviar  el correo");
              console.log("FAILDED. error=", err);
            }
          );
        }
      }

    },
  }
</script>