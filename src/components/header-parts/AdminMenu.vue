<template>
  <div class="text-center">
    <v-menu v-model="open">
      <template v-slot:activator="{ on: menu, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="{ ...menu }"
          text
          outlined
          elevation="2"
          class="ml-6"
        >
          <v-icon dark left> mdi-cog-outline </v-icon>
          ADMIN
        </v-btn>
      </template>
      <v-list>
        <signup />
        <roomAdmin />
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import signup from "@/components/header-parts/admin-menu-parts/Signup";
import roomAdmin from "@/components/header-parts/admin-menu-parts/RoomAdmin";
export default {
  components: {
    signup,
    roomAdmin,
  },
  data: () => {
    return {
      open: false,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>