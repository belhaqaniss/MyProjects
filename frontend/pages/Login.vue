<template>
<div class="Log container">
<div class="logo"><nuxt-link to="/"> <img id="img" src="../static/totoJob_logo2.svg"/></nuxt-link></div>
  <div class="Login container shadow p-3 mb-5 bg-body rounded">
    <h1>Se connecter</h1>
      <input type="text" placeholder="Email ou username"><br>
      <input type="text" placeholder="Mot de passe"><br>
      <button id="button">se connecter</button><br>
      <nuxt-link to="/Signup" tag="a" class="nav-link">Voulez-vous s'inscrire? cliquez ici.</nuxt-link>
  </div></div>
</template>

<script>

export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@800&family=Poppins:wght@300&display=swap');

.Log{
 
  font-family: 'poppins';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.Login{
    margin: 0 auto;
     width: 100%; 
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     text-align: center;
}
input{
  width: 80%;
  height: 60px;
  margin: 10px;
  border: 1px solid black;
  border-radius: 20px;
}
.Login h1{
    color: rgb(66, 64, 64);
}

#button{
  background-color: rgb(15, 18, 168);
  color: aliceblue;
  height: 60px;
  font-size: 30px;
  border: none;
  border-radius: 20px;
  margin: 10px;
}
#img{
  height:60px;
  margin-bottom: 10px;
 
}

</style>