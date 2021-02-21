<template>
  <div
    class="py-1 px-3 mr-2 rounded text-center text-body-2 font-weight-bold"
    v-bind:class="status ? { occupied } : { empty }"
  >
    <span v-if="status">使用中</span>
    <span v-else>使用可</span>
  </div>
</template>

<script>
export default {
  name: "CurrentStatus",
  props: ["status"],
  data: () => {
    return {
      occupied: true,
      empty: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.occupied {
  background-color: #0076bb;
  color: #fff;
  border: 2px solid #0076bb;
}
.empty {
  background-color: #fff;
  color: #0076bb;
  border: 2px solid #0076bb;
}
</style>