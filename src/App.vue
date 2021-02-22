<template>
  <v-app>
    <AppHeader />
    <v-main>
      <DisplayArea v-if="userState" />
      <RoomListItem v-if="userState" />
      <loggedOutContent v-if="!userState" />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import AppFooter from "@/components/layout/AppFooter";
import DisplayArea from "@/components/username-display/DisplayArea";
import RoomListItem from "@/components/room-list/RoomListItem";
import loggedOutContent from "@/components/LoggedOutContent";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    DisplayArea,
    RoomListItem,
    loggedOutContent,
  },
  created() {
    this.$store.dispatch("auth/listenUserState");
  },
  computed: {
    userState() {
      return this.$store.state.auth.userState;
    },
  },
};
</script>
