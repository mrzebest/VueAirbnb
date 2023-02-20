<template>
    <div class="contain">    
      <div class="contain-form">
        <form action="">
              <img src="../assets/logo-airbnb.png" class="logo-connexion"><br>
              <input type="email" id="fname" name="firstname" placeholder="Adresse e-mail">
              

              <input type="password" id="lname" name="lastname" placeholder="mot de passe">
              <input type="Submit" value="Connexion">
          </form>
      </div>
           
    </div>
</template>

<script>
export default {
  
  }

</script>

<style>
.contain{
    height: 70vh;
    width: 80vh;
    background-color: #FBFCFC;
    margin: auto;
    margin-top: 5%;
    border-radius: 2rem;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    flex-direction: column;
}

form{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 30vh;
}

input[type=email], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=password], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

input[type=submit] {
  width: 100%;
  background-color: #ff5470;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #dd7385;
}

.logo-connexion{
  height: 30vh;
}


</style>