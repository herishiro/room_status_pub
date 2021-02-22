<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-toolbar-items>
        <slot name="loginBtn" :data="{ on, attrs }">
          <v-btn
            @click="initForm()"
            v-bind="attrs"
            v-on="on"
            color="#0993d9"
            elevation="0"
            class="ml-6"
          >
            <v-icon dark left> mdi-login </v-icon>
            Login
          </v-btn>
        </slot>
      </v-toolbar-items>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">ログインフォーム</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                label="mail adress"
                required
                v-model="email"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="password"
                type="password"
                v-model="password"
              ></v-text-field>
            </v-col>
            <v-card-actions>
              <v-btn
                @click="login()"
                class="amber white--text font-weight-bold"
                text
              >
                ログイン
              </v-btn>
            </v-card-actions>
            <v-col>
              <div v-if="error" class="error">{{ error.message }}</div>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      dialog: false,
      error: "",
    };
  },
  methods: {
    initForm() {
      this.email = "";
      this.password = "";
      this.error = "";
    },
    async login() {
      const res = await this.$store.dispatch("auth/login", {
        email: this.email,
        password: this.password,
      });
      if (res.type === "success") {
        this.email = "";
        this.password = "";
        this.dialog = !this.dialog;
      } else {
        this.error = res.message;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>