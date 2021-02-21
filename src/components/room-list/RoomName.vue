<template>
  <h2 class="mr-8 h1 font-weight-bold">{{ roomName(idx) }}</h2>
</template>

<script>
export default {
  name: "RoomName",
  props: ["idx"],
  methods: {
    roomName(idx) {
      return this.$store.state.roomdata.rooms[idx].name;
    },
  },
};
</script>