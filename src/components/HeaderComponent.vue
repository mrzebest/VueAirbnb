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
                    <button>
                        <img src="../assets/user.png" class="user">  
                    </button>
                    <div>
                        <a href="#">connexion</a>
                        <a href="#">Inscription</a>
                    </div>
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

    .user{
        height:20px;
        display:flex;
    }

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
    .nav--left{
        padding-left:3vh;
    }
    .nav--right{
        display:flex;
        flex-direction: row;
        align-items: center;
        padding-right: 3vh;
        padding-right: 6vh;
    }

    .nav--item{
        padding-right:2vh;
    }

    #search{
    border-radius:1rem;
    height: 4vh;
    width:35vh;
    }
    a {
    text-decoration: none;
    color: #000000;
    }



    .dropdown{
        display:inline-block;
        position:relative;
    
    }

    .dropdown button{
        height: 3.5vh;
        width: 3vh;
        border-radius: 3rem;
        border: none;
        padding: 8px 16px;
        background-color: #ff5470;
        color: white;
        transition: .3s;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    
    .dropdown:hover button{
        background-color:#dc6075;
    }
    
    .dropdown div{
        background-color:#fff;
        box-shadow:0 4px 8px rgba(0,0,0,0.2);
        z-index:1;
        visibility:hidden;
        position:absolute;
        min-width:100%;
        opacity:0;
        transition:.3s;
    }
    
    .dropdown:hover div{
        visibility:visible;
        opacity:1;
    }
    
    .dropdown div a{
        display:block;
        text-decoration:none;
        padding:8px;
        color:#000;
        transition:.1s;
        white-space:nowrap;
    }
    
    .dropdown div a:hover{
        background-color:#ff5470;
        color:#fff;
    }

</style>