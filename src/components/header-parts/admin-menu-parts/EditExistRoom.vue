<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="pb-0">
        <h3 class="h3">現在ある部屋の削除</h3>
      </v-col>
      <v-col cols="12">
        <v-list>
          <template v-for="room in roomList">
            <v-list-item :key="room.id">
              <v-list-item-content>
                {{ room.name }}
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon @click.stop="deleteRoom(room.id)">
                  <v-icon color="grey lighten-1"> mdi-close-box </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </template>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    roomList() {
      return this.$store.state.roomdata.rooms;
    },
  },
  methods: {
    deleteRoom(roomId) {
      this.$store.dispatch("roomdata/deleteRoom", roomId);
    },
  },
};
</script>