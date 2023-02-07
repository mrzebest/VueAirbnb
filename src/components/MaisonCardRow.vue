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
import MaisonCard from './MaisonCard.vue';

export default {
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