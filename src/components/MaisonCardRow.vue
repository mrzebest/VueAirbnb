<template>
  <div class="Container">
    <div class="maison--row">
      <div class="wrapper--card">
        <!-- <maison-card v-for="(card, index) in 4" :key="index"/> -->
        <!-- <div class="maison--card"> -->

        <div v-for="annonce in annonces" class="maison--card">
          <div class="maison--image">
            <!-- <div v-for="img in annonce.images">
                                      <img :src="img" class="img">
                                  </div> -->
            <img :src="annonce.images[0]" class="img">
          </div>
          <div class="maison--informations">
            <div class="top">
              <p class="name">
                {{ annonce.nom }}
              </p>
              <p class="desc">
                {{ annonce.description }}
              </p>

            </div>
            <p class="location">
              {{ annonce.location }}
            </p>
            <p class="equipements">
            <p>Équipements :</p>
            <li v-for="equip in annonce.equipements">
              {{ equip }}
            </li>
            </p>
            <p class="note">
              <font-awesome-icon icon="fa-solid fa-star" />
              <span>
                Note :
                {{ annonce.note }}
              </span>
            </p>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </div>
</div>
</template>

<script>





// import MaisonCard from './MaisonCard.vue';
import { AllUsers } from '/src/getJsons.js';
import { AllAnnonces } from '/src/getJsons.js';
const users = AllUsers();
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
      margin-bottom: -7%;
      padding: 4vh;
      margin-top: 7vh;
  }
}

.maison--card {
  // width: 35vh;
  // height: 45vh;
  width: 50%;
    height: 50%;

  p {
    margin: 0px;
  }

  .maison--image {
    // background-image: url("../Images/Visuel5.jpg");
    // height: 70%;
    // background-size: cover;
    // background-position: center;
    // border-radius: 3px;
  }

  .img {
    width: 50%;
  }

  .maison--informations {
    .top {
      margin: 10px 0;
      align-items: center;
      justify-content: space-between;

    }
  }

}
</style>
