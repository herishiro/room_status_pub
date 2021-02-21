<template>
  <v-container pb-14>
    <v-layout
      v-for="(room, idx) in roomList"
      :key="room.id"
      py-2
      justify-center
    >
      <v-flex xs9>
        <v-card class="d-flex align-center pa-3">
          <CurrentStatus :status="roomStatus(idx)" />
          <v-flex xs6>
            <RoomName :idx="idx" />
          </v-flex>
          <v-flex xs3>
            <CurrentUser :idx="idx" :status="roomStatus(idx)" />
          </v-flex>
          <v-spacer></v-spacer>
          <v-switch
            :input-value="roomStatus(idx)"
            @click="switchStatus(room, roomStatus(idx))"
            inset
            hide-details
          ></v-switch>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CurrentStatus from "@/components/room-list/CurrentStatus";
import CurrentUser from "@/components/room-list/CurrentUser";
import RoomName from "@/components/room-list/RoomName";
export default {
  name: "RoomListItem",
  components: {
    CurrentStatus,
    CurrentUser,
    RoomName,
  },
  computed: {
    roomList() {
      return this.$store.state.roomdata.rooms;
    },
    accessingUser() {
      return this.$store.state.userdata.accessingUser;
    },
  },
  methods: {
    switchStatus(room, status) {
      this.$store.dispatch("roomdata/updateRoom", { roomId: room.id, status });
    },
    roomStatus(idx) {
      return this.roomList[idx].isOccupied;
    },
  },
};
</script>


<style lang="scss" scoped>
.v-input--selection-controls {
  margin-top: 0px;
  padding-top: 0px;
}
</style>