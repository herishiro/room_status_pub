<template>
  <v-app-bar app color="#0076bb" dark elevate-on-scroll>
    <div class="d-flex align-center">
      <v-icon dark medium> mdi-door-open </v-icon>
      <h2 class="font-weight-bold">個室使用状況一覧</h2>
    </div>
    <login v-if="!userState" />
    <logout v-if="userState" />
    <v-spacer></v-spacer>
    <adminMenu v-if="userState" />
  </v-app-bar>
</template>

<script>
import login from "@/components/header-parts/Login";
import logout from "@/components/header-parts/Logout";
import adminMenu from "@/components/header-parts/AdminMenu";
export default {
  name: "AppHeader",
  components: {
    login,
    logout,
    adminMenu,
  },
  computed: {
    userState() {
      return this.$store.state.auth.userState;
    },
  },
};
</script>
