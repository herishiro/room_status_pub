<template>
  <div class="d-inline-flex">
    <div>User：</div>
    <h3 v-if="status" class="h3 font-weight-bold">
      {{ roomUser(idx) }}
    </h3>
    <h3 v-else>なし</h3>
  </div>
</template>

<script>
export default {
  name: "CurrentUser",
  props: ["idx", "status"],
  methods: {
    roomUser(idx) {
      return this.$store.state.roomdata.rooms[idx].user;
    },
  },
};
</script>