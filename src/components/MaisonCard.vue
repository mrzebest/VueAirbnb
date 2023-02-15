<template>
    <div class="maison--card">
        <div class="maison--image">

        </div>
        <div class="maison--informations">
         
            <div class="top">
            
                <p class="name"><B>Name</B></p>
           
                <p class="note">
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <span>
                        4.5
                    </span>
                </p>
            </div>
            <p class="desc">
                description
            </p>
            <p class="prix">
                description
            </p>
        </div>
    </div>
</template>

<script>

    export default {
        name:'MaisonCardRow',
    }
     

</script>


<style lang="scss">
        .maison--card{
        width:35vh;
        height: 45vh;

        p{
            margin: 0px;
        }

        .maison--image{
            background-image: url("../Images/Visuel5.jpg");
            height: 70%;
            background-size: cover;
            background-position: center;
            border-radius: 3px;
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
