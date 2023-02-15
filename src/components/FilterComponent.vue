<template>
    <div class = "form-1">
    <div class = "container">
    <div class="navbar-1">
  
       <div class="insearch-1">
       <div class="search-1">
        <!-- style à effacer plus tard -->
        <a style="color:#ff5470" class="link-nav" href="#"> <font-awesome-icon icon="fa-solid fa-water-ladder" /></a>
        <span class="line-1">  </span>
        <a class="link-nav"  href=""><font-awesome-icon icon="fa-solid fa-palette" /></a>
        <span class="line-1">  </span>
        <a class="link-nav"  href=""><font-awesome-icon icon="fa-solid fa-mountain-sun" /></a>
         <span class="line-1">  </span>
        <a class="link-nav" href=""><font-awesome-icon icon="fa-solid fa-chess-rook" /></a> 
        
       </div>
    </div>
   
   </div>
</div>
</div>
</template>

<script>
    export default {
    name: "FilterComponent"
    }
    </script>

    <style>
  
    .form-1 {
        height: 9vh;
        
       
    }

    

    .line-1 {
        flex: 0 0 1px;
    height: 24px;
    width: 1px;
    border-right: solid #00000000;
    margin-left: 15px;
    margin-right:15px;
    text-align: left;
    
    }

  



    .navbar-1{
        display:flex;
       margin-top: 10px;
        padding: 2vh;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-bottom: 2px ;
        padding:2vh;
        justify-content: center;
        
       

       
        
    
    }
    


    .search-1{

        font-size:  30px;
        margin-right: 20VH;
        margin-top:20%;
        margin-bottom: 20%;
    }
    

    a {
    text-decoration: none;
    color: #000000;
    }

   


.link-nav {

    color:rgba(0, 0, 0, 0.686);
}

.link-nav:hover{
        color:#ff5470;
    }

.link-nav:active {
    color: #ff5470;
    text-decoration: line-through;

}
    
    

</style>