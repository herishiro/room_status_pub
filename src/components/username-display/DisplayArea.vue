<template>
  <v-container pt-9>
    <v-layout>
      <v-flex xs3>
        <div class="mr-8 font-weight-bold">
          <div>Your Name：</div>
          <h2 class="mb-22">{{ userName }}</h2>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "DisplayArea",
  computed: {
    userName() {
      return this.$store.state.userdata.accessingUser;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
