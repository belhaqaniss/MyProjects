<template>
<div class="Log container">
<div class="logo"><img id="img" src="../static/totoJob_logo2.svg"/></div>
  <div class="Login container shadow p-3 mb-5 bg-body rounded">
    <h1>Créer un compte</h1>
      <input type="text" placeholder="Prénom">
      <input type="text" placeholder="Nom">
      <input type="text" placeholder="Email">
      <input type="text" placeholder="Mot de passe">
      <input type="text" placeholder="Téléphone">
      <input type="text" placeholder="site web"><br>
      <div class="radio"><input class="dd" type="radio" id="Male" name="drone" value="Male" checked><label for="Male">Male</label>
      <input class="dd" type="radio" id="Female" name="drone" value="Female" checked><label for="Male">Female</label></div>
      <input type="date" id="start" name="trip-start" value="YYYY-MM-DD" min="1900-01-01" max="2021-12-31"><br>
      <input type="text" placeholder="Addresse">
      <input type="text" placeholder="Ville"><br>
      <label>Votre photo de profil:</label><br><input class="ph" type="file" name="avatar" accept="image/png, image/jpeg"><br>
      <label>Votre CV:</label><br><input class="ph" type="file" name="avatar" accept="document/pdf, document/docx">
      <br><button id="button">s'inscrire</button>
      <nuxt-link to="/Login" tag="a" class="nav-link">Avez-vous déjà un compte? cliquez ici.</nuxt-link>
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
.Login h1{
    color: rgb(66, 64, 64);
}
input{
  width:350px;
  height: 60px;
  margin: 10px;
  border: 1px solid grey;
  border-radius: 20px;
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
.dd{
    height: 20px;
    width: 20px;
}
.ph{
    height: 30px;
}
#img{
  height:60px;
  margin-bottom: 10px;
 
}
</style>