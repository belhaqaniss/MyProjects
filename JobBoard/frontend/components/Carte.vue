<template>
   <div class="cartee shadow p-3 mb-5 bg-body ">
       <p class="p">Développeur WEB H/F</p>
       <p class="p">Epitech</p>
       <p>20/12/2021  17:30</p>
     <button id="btnn" type="button"> <nuxt-link to="/Description">Plus d'infos</nuxt-link></button>
    
   </div>
</template>

<script>
export default {
}
</script>

<style>
.cartee{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 335px;
    height: 100%;
    border-radius: 8px;
    background-color: #ffffff;
    margin: 17px;
}
#btnn{ 
    align-self: flex-end;
    border-radius: 20px;
    background-color: #ffba00;
    font-family: 'poppins';
    border: none;
    height: 40px;
    width: 130px;
    left:10px;
    font-size: 20px;
    
}
nuxt-link{
 text-decoration: none; 
}


</style>