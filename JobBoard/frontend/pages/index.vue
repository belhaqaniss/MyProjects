<template>
<div class="hello container"><nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><span id="spn">QuickJob</span><span id="sp">.fr</span></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <nuxt-link to="/index" tag="a" class="nav-link">Accueil</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/Login" tag="a" class="nav-link">se connecter</nuxt-link>
      </li>
      <li class="nav-item">
       <nuxt-link to="/Signup" tag="a" class="nav-link">s'inscrire</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/partners" tag="a" class="nav-link">Nos Partenaires</nuxt-link>
      </li>
    </ul>
  </div>
</nav>
  <div class="p-3 mb-2 bg-secondary text-white">
  <h1>Bienvenue à QuickJob.fr</h1>
  <p>QuickJob est le 1er site d'emploi mondial <br> enregistrant plus de 250 millions 
    de visiteurs uniques chaque mois. <br> QuickJob s'efforce de faire des candidats une priorité en leur 
    permettant de chercher un emploi, de publier leur CV et de se renseigner au sujet des employeurs,
     le tout gratuitement.
     Chaque jour, nous offrons de nouvelles opportunités à des millions de personnes.</p>
   <nuxt-link to="/Login"><button id="btn1">Trouver un emploi</button></nuxt-link>
  <form class="form-inline">
    <input class="input2" type="text" placeholder="Quelle ville?" aria-label="Search">
    <input class="input1" type="text" placeholder="Trouvez ce que vous désirez..." aria-label="Search"><br>
  </form>
    <button id="btn3" type="submit">Chercher</button>
  </div>
  <div class="p-3 mb-2 bg-light text-dark">
  <Slide/>
</div>
<div class="p-3 mb-2 bg-info text-white">QuickJob.fr 2021, All right Reserved</div>
</div>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@800&family=Poppins:wght@300&display=swap');
.hello{
  font-family: 'poppins';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#spn{
  font-family: 'Manrope';
  color: rgb(0, 177, 255);
  font-size: 30px;
}
#sp{
  font-family: 'Manrope';
  color: rgb(255, 186, 0);
  font-size: 30px;
}
#btn1{
  background-color: rgb(0, 177, 255);
  color: aliceblue;
  height: 70px;
  width: 250px;
  font-size: 25px;
  color: aliceblue;
  border: none;
  border-radius: 20px;
  margin: 10px;
}
#btn3{
  background-color: rgb(255, 186, 0);
  color: aliceblue;
  height: 60px;
  width: 200px;
  font-size: 17px;
  border: none;
  border-radius: 20px;
  margin: 10px;
}
.input1{
  width: 68%;
  height: 40px;
  margin: 5px;
  border-radius: 5px;
  border: none;
}
.input2{
  width: 27%;
  height: 40px;
  margin: 3px;
  border-radius: 5px;
  border: none;
}
</style>