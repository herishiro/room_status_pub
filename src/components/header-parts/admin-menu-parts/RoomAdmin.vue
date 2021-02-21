<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-list-item v-bind="attrs" v-on="on" text>
        <v-list-item-icon>
          <v-icon left> mdi-server-network </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="title">個室一覧管理 </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">個室一覧管理</span>
      </v-card-title>
      <v-card-text>
        <addRoom :dialogState="dialog" />
        <editExistRoom />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import addRoom from "@/components/header-parts/admin-menu-parts/AddRoom";
import editExistRoom from "@/components/header-parts/admin-menu-parts/EditExistRoom";
export default {
  name: "Signup",
  components: {
    addRoom,
    editExistRoom,
  },
  data: () => {
    return {
      dialog: false,
      modal: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.v-list-item__icon {
  margin-right: 16px !important;
}
</style>