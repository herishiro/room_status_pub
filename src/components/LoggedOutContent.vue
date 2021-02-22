<template>
  <v-container py-10>
    <v-row class="mt-10" justify="center">
      <v-col cols="3">
        <Login>
          <template v-slot:loginBtn="slotProps">
            <v-img
              alt="door"
              @click="initForm()"
              v-bind="slotProps.data.attrs"
              v-on="slotProps.data.on"
              class="mr-2"
              contain
              src="@/assets/door.svg"
            />
          </template>
        </Login>
      </v-col>
    </v-row>
    <v-row class="mt-2" justify="center">
      <h2 class="grey--text">Please Login...</h2>
    </v-row>
  </v-container>
</template>

<script>
import Login from "@/components/common/Login";
export default {
  components: {
    Login,
  },
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
