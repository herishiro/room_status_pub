<template>
  <v-toolbar-items>
    <v-btn @click="logout()" color="#0993d9" elevation="0" class="ml-6">
      <v-icon dark left> mdi-logout </v-icon>
      Logout
    </v-btn>
  </v-toolbar-items>
</template>

<script>
export default {
  name: "Logout",
  data() {
    return {
      error: "",
    };
  },
  methods: {
    async logout() {
      const res = await this.$store.dispatch("auth/logout");
      if (res.type === "error") {
        this.error = res;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>