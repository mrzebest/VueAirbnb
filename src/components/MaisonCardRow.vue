<template>
  <div class="maison--row">
    <div class="wrapper--card">
      <MaisonCard v-for="(card, index) in 4" :key="index" />
    </div>
  </div>
</template>

<script>
import MaisonCard from "./MaisonCard.vue";

export default {
  name: "MaisonRow",
  components: {
    MaisonCard,
  },
};
</script>

<style lang="scss">
.maison--row {
  width: 600vh;
  display: flex;
  justify-content: space-between;
  .wrapper--card {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
