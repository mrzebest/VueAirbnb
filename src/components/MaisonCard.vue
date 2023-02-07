<template>
  <div class="maison--card">
    <div class="maison--image">

    </div>
    <div class="maison--informations">
        <div class="top">
            <p class="name">
                Home
            </p>
            <p class="note">
                4.5
            </p>
        </div>
        <p class="desc">
            description
        </p>
        <p class="prix">
            180 euros
        </p>
    </div>
  </div>
</template>

<script>
export default {
    // name : "MaisonCard",
}
</script>

<style lang="scss">

    .maison--card{
        width:30vh;
        height: 30vh;

        p{
            margin: 0px;
        }

        .maison--image{
            background-image: url("../Images/Visuel5.jpg");
            height: 70%;
            background-size: cover;
            background-position: center;
        }

        .maison--informations{
            .top{
                margin: 10px 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }

    }

</style>