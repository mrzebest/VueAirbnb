<template>
    <div class="form">
        <div class="container">
            <div class="navbar">
                <div class="nav--left">
                    <img class="logo" src="../assets/logo.png" alt="">
                </div>
                <div class="insearch">
                    <div class="search">
                        N'importe où
                        <span class="line"> </span>
                        Une Semaine
                        <span class="line"> </span>
                        Affiner vos recherches
                        <div class="loupe">
                            <span class="circle">
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                            </span>
                        </div>
                    </div>
                </div>
                <div class="nav--right">

                    <div class="nav--item"> Mon longement sur Airbnb</div>
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
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderComponents"
}
</script>

<style>
.container {
    background-color: rgba(255, 255, 255, 0);

}

.form {
    height: 9vh;
    box-shadow: 5px 2px 4px #00000018;
    text-align: center;
    z-index: 1;
    /* position: fixed; */
    width: 100%;
    background-color: #fff;
    margin-top: 3vh;
}

.line {
    flex: 0 0 1px;
    height: 24px;
    width: 1px;
    border-right: solid #00000018;
    margin-left: 15px;
    margin-right: 15px;
    text-align: left;

}

.loupe {

    display: flex;
    justify-content: center;
    float: right;
    background-color: #dc6075;
    border-radius: 100%;
    width: 3VH;
    height: 3VH;
    padding-top: 6px;
    margin-left: 20PX;
    color: white;
    font-size: 1.6vh;

}


.user {
    height: 20px;
    display: flex;
}


.logo {
    height: 30px;
}

.navbar {
    display: flex;

    padding: 2vh;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px;
    padding: 2vh;
}

.nav--left {
    padding-left: 3vh;
}

.nav--right {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 3vh;
    padding-right: 6vh;
}

.nav--item {
    padding-right: 2vh;
}

.search {
    border-radius: 1rem;
    height: 5vh;
    width: 70vh;
    border: 1px solid #00000018;
    box-shadow: 5px 2px 4px #00000018;
    line-height: 5px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

}


a {
    text-decoration: none;
    color: #000000;
}




.dropdown {
    display: inline-block;
    position: relative;

}

.dropdown button {
    height: 3.5vh;
    width: 3vh;
    border-radius: 3rem;
    border: none;
    padding: 8px 16px;
    background-color: silver;
    color: white;
    transition: .3s;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.dropdown:hover button {
    background-color: #dc6075;
}

.dropdown div {
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1;
    visibility: hidden;
    position: absolute;
    min-width: 100%;
    opacity: 0;
    transition: .3s;
}

.dropdown:hover div {
    visibility: visible;
    opacity: 1;
}

.dropdown div a {
    display: block;
    text-decoration: none;
    padding: 8px;
    color: #000;
    transition: .1s;
    white-space: nowrap;
}

.dropdown div a:hover {
    background-color: #ff5470;
    color: #fff;
}
</style>