<template>
  <v-app-bar app color="#0076bb" dark elevate-on-scroll>
    <div class="d-flex align-center">
      <v-icon dark medium> mdi-door-open </v-icon>
      <h2 class="font-weight-bold">個室使用状況一覧</h2>
    </div>
    <Login v-if="!userState" />
    <logout v-if="userState" />
    <v-spacer></v-spacer>
    <adminMenu v-if="userState" />
  </v-app-bar>
</template>

<script>
import Login from "@/components/common/Login";
import logout from "@/components/common/Logout";
import adminMenu from "@/components/header-parts/AdminMenu";
export default {
  name: "AppHeader",
  components: {
    Login,
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
