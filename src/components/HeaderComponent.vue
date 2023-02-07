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
            <div class="nav--item">
                <div class="dropdown">
      <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown link
      </a>
    
      <ul class="dropdown-menu" style="">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
            </div>
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