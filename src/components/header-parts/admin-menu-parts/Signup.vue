<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-list-item v-bind="attrs" v-on="on" text>
        <v-list-item-icon>
          <v-icon left> mdi-account-multiple-plus </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="title">新規ユーザー登録 </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">新規ユーザー登録</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                label="mail adress"
                required
                v-model="email"
                @input="deleteSignupComment()"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="password"
                type="password"
                v-model="password"
                @input="deleteSignupComment()"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="user name"
                v-model="username"
                @input="deleteSignupComment()"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-card-actions>
              <v-btn
                @click="signup()"
                v-if="username !== ''"
                elevation="0"
                color="amber"
                dark
                class="font-weight-bold"
              >
                ユーザー登録
              </v-btn>
              <v-btn v-else class="font-weight-bold" disabled>
                ユーザー登録
              </v-btn>
            </v-card-actions>
            <v-col>
              <div v-if="error" class="error">{{ error.message }}</div>
              <div v-else-if="success">{{ success }}</div>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Signup",
  data: () => {
    return {
      email: "",
      password: "",
      username: "",
      error: "",
      success: "",
      dialog: false,
    };
  },
  methods: {
    async signup() {
      const res = await this.$store.dispatch("userdata/addUser", {
        email: this.email,
        password: this.password,
        userName: this.username,
      });
      if (res.type === "success") {
        this.email = "";
        this.password = "";
        this.username = "";
        this.success = res.message;
      } else {
        this.error = res.message;
      }
    },
    deleteSignupComment() {
      if (this.email !== "" || this.password !== "") {
        this.error = "";
        this.success = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.v-list-item__icon {
  margin-right: 16px !important;
}
</style>