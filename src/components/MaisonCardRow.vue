<template>
    <div class="Container">
        <div class="maison--row">
            <div class="wrapper--card">
                <maison-card v-for="(card, index) in 4" :key="index"/>
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
  .wrapper--card {
    display: flex;
    align-items: center;
    justify-content: space-between;
   margin-bottom: -7%;
    padding: 4vh;
    margin-top: 7vh;
  }
}
</style>
