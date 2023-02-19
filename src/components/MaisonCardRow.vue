<template>
  <div class="Container">
    <div class="maison--row">
      <div class="wrapper--card">

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
                <b> {{ annonce.nom }}</b>
              </p>
              <p class="desc">
                {{ annonce.description }}
              </p>

            </div>
            <p class="location">
              Basé à :
              {{ annonce.location }}
            </p>
            <p class="equipements">
              Équipements :
              <span v-for="equip in annonce.equipements">
                {{ equip }},
              </span>
            </p>
            <p class="note">
              <span>
                Note :
                {{ annonce.note }}
              </span>
              <font-awesome-icon icon="fa-solid fa-star" />
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
  width: 50%;
  height: 50;
  padding: 10px;

  p {
    margin: 0px;
  }

  .desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .maison--image {
    text-align: center;
  }

  .img {
    width: 50%;
    height: 25vh;
    border-radius: 10px;
  }

  .maison--informations {
    .top {
      margin: 10px 0;
      text-align: center;
      justify-content: space-between;

    }
  }

}
</style>
