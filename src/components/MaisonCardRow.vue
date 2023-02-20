<template>
  <div class="Container">
    <div class="maison--row">
      <div class="wrapper--card">
        <div v-for="annonce in annonces" class="maison--card">
          <div class="maison--image">
            <img :src="annonce.images[0]" class="img">
          </div>
          <div class="maison--informations">
            <div class="top">
              <p class="location">
                {{ annonce.location }}
              </p>
              <p class="name">
                {{ annonce.nom }}
              </p>

            </div>
            <p class="note">
              {{ annonce.note }}
              <font-awesome-icon icon="fa-solid fa-star" />
            </p>
            <b class="prix">
              <i>{{ annonce.prix }}</i>
            </b>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>





// import MaisonCard from './MaisonCard.vue';
// import { AllUsers } from '/src/getJsons.js';
import { AllAnnonces } from '/src/getJsons.js';
// const users = AllUsers();
const annonces = AllAnnonces();
export default {
  // name: "MaisonRow",
  // components: {
  //     MaisonCard
  // },
  data() {
    return annonces;
  }
}
</script>

<style lang="scss">
.maison--row {
  .wrapper--card {
    // display: flex;
    // align-items: center;
    // justify-content: space-between;
    // margin-bottom: -7%;
    // padding: 4vh;
    // margin-top: 7vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 1vh;
    margin-top: 3vh;
  }
}

.maison--card {
  width: 30%;
  padding: 10px;

  p {
    margin: 0px;
  }

  // .desc {
  //   overflow: hidden;
  //   white-space: nowrap;
  //   text-overflow: ellipsis;
  // }

  // .maison--image {
  //   text-align: center;
  // }

  .img {
    width: 100%;
    height: 35vh;
    border-radius: 10px;
  }

  .maison--informations {
    .top {
      margin: 10px 0;
      justify-content: space-between;

    }
  }

}
</style>
