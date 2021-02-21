<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="pb-0">
        <h3 class="h3">部屋を追加する</h3>
      </v-col>
      <v-col cols="8" class="pb-0">
        <v-text-field
          label="roomName"
          required
          v-model="roomName"
          :maxlength="20"
          :counter="20"
          @input="deleteComment()"
        ></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-card-actions>
        <v-btn
          @click="addRoom()"
          v-if="hasInputVal"
          elevation="0"
          color="amber"
          dark
          class="font-weight-bold"
        >
          部屋を追加
        </v-btn>
        <v-btn v-else class="font-weight-bold" disabled> 部屋を追加 </v-btn>
      </v-card-actions>
      <v-col cols="12" class="pt-0">
        <div v-if="errorState()" class="error">{{ error.message }}</div>
        <div v-else-if="successState()">{{ success }}</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Signup",
  props: ["dialogState"],
  data: () => {
    return {
      roomName: "",
      error: "",
      success: "",
      dialog: false,
    };
  },
  computed: {
    hasInputVal() {
      return this.roomName !== "";
    },
    roomList() {
      return this.$store.state.roomdata.rooms;
    },
  },
  methods: {
    errorState() {
      if (!this.dialogState) {
        this.error = "";
      }
      const errorState = this.dialogState ? this.error : "";
      return errorState;
    },
    successState() {
      if (!this.dialogState) {
        this.success = "";
      }
      const successState = this.dialogState ? this.success : false;
      return successState;
    },
    async addRoom() {
      const res = await this.$store.dispatch("roomdata/addRoom", this.roomName);
      this.roomName = "";
      if (res.type === "success") {
        this.success = res.message;
      } else {
        this.error = res.message;
      }
    },
    deleteComment() {
      if (this.roomName !== "") {
        this.error = "";
        this.success = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>