<template>
   <div class="containe-filter">
        <div class="filter">
            <a class="link-nav" href="#"> <font-awesome-icon icon="fa-solid fa-water-ladder" /></a>
            <a class="link-nav" href=""><font-awesome-icon icon="fa-solid fa-palette" /></a>
            <a class="link-nav" href=""><font-awesome-icon icon="fa-solid fa-mountain-sun" /></a>
            <a class="link-nav" href=""><font-awesome-icon icon="fa-solid fa-chess-rook" /></a>
            <!-- <a class="lin-nav" href=""><font-awesome-icon icon="fa-solid fa-people-simple" /></a> -->
        </div>
   </div>
</template>

<script>
export default {
    name: "FilterComponent"
}
</script>

<style>
.link-nav{
    color : #808B96;
}

.link-nav:hover{
    color:#dc6075;
}

.containe-filter {
    margin-top:3vh;
    height:5vh;
    /* background-color:red; */
}
.filter{
    /* border-bottom: 1px solid;
    padding-bottom : 3vh; */
    height: 5vh;
    width: 35vh;
    background-color: #F2F3F4;
    display: flex;
    padding-top: 1vh;
    border-radius: 3vh;
    box-shadow: 2px 2px 2px #444B4F;
}

a {
    color:#ff5470;
    text-decoration: underline;
    padding-left: 5vh;
    height: 6vh;
}

</style>