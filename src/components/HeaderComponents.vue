<template>
     <div class="navbar">
        <div class="nav--left">
            <img class="logo"
                src="../assets/logo.png"
                alt=""
            >
        </div>
        <div class="search">
            <input type="search" id="search" name="s" placeholder="">
        </div>
        <div class="nav--right">
            <div class="nav--item">Mettre mon longement sur airbnb</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderComponents"
}
</script>

<style>

    header{
        margin-bottom: 10vh;
        
    }

    .logo{
    height:30px;
    }

    .navbar{
    display:flex;
    border-bottom: 2px solid black;
    padding: 2vh;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid black;
    padding:2vh;
    
    }

    .nav--right{
    display:flex;
    }

    #search{
    border-radius:1rem;
    height: 4vh;
    width:35vh;
    }

</style>