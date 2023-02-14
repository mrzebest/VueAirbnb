<template>
    <div class="Container">
        <div class="maison--row">
            <div class="wrapper--card">
                <maison-card v-for="(card, index) in 6" :key="index"/>
            </div>
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
