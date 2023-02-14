<template>
<<<<<<< HEAD
  <div class="maison--row">
    <div class="wrapper--card">
      <MaisonCard v-for="(card, index) in 4" :key="index" />
    </div>
  </div>
=======
    <div class="Container">
        <div class="maison--row">
            <div class="wrapper--card">
                <maison-card v-for="(card, index) in 6" :key="index"/>
            </div>
        </div>
    </div>
>>>>>>> f5bc85fbaffe116e5b0d644b66601a559ae3f1b1
</template>

<script>
import MaisonCard from "./MaisonCard.vue";

export default {
<<<<<<< HEAD
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
=======
    name: "MaisonRow",
    components: {
        MaisonCard
    }
}
</script>

<style lang="scss">
.container{
    width: 20vh;
    height:10vh;
    background-color:red;
}
.maison--row{
    .wrapper--card{
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin: 5vh;
    }
}
</style>
>>>>>>> f5bc85fbaffe116e5b0d644b66601a559ae3f1b1
