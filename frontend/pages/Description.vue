<template>
  <div class="desc container shadow p-3 mb-5 bg-body rounded">
      <h3>Ingénieur en Développement logiciel temps réel </h3>
      <div class="div"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
  <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
</svg><p>Epitech</p></div>
       <p>Type de contrat: Stage</p>
      <p>16/04/2021 17:30</p>
      <button id="btn1">Postuler</button>
     <div class="div"><section class="des"><h4>Description:</h4><br><h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt in velit sed a, eaque odit, eum provident cum facilis cupiditate esse fugiat similique ipsam tenetur repellendus officia obcaecati minus temporibu.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum doloremque eius ratione impedit! Nulla ratione eius voluptatem fugiat tempore. Consequatur at qui nemo fugiat aspernatur quae hic alias esse delectus.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, aspernatur? Aliquam aperiam iure aspernatur ipsum iusto veniam rerum molestiae, pariatur itaque perferendis, excepturi, praesentium eum? Nostrum minima minus modi. Quis?</h5></section>
       <section class="des"></section></div>
  </div>
</template>

<script>

export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@800&family=Poppins:wght@300&display=swap');
.desc{
    font-family: 'poppins';
    margin-top: 10px;
}
.des{
    width: 600px;
    border: 1px solid grey;
    border-radius: 10px;
    margin:5px;
    padding: 5px;
    


}
#btn1{
  background-color: rgb(0, 177, 255);
  color: rgb(255, 255, 255);
  height: 70px;
  width: 250px;
  font-size: 25px;
  color: aliceblue;
  border: none;
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.div{
 display: flex;   
  -webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>