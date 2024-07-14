<template>

  <div class="feuille">
    <img class="feuille1" src="../assets/feuille.png" alt="">
    <img class="feuille2" src="../assets/feuille.png" alt="">
    <img class="feuille3" src="../assets/feuille.png" alt="">
    <img class="feuille4" src="../assets/feuille.png" alt="">
    <img class="feuille5" src="../assets/feuille.png" alt="">
  </div>

  <div class="logo">
    <p>Y<span class="point">.</span></p>
  </div>

  <div class="navbar">
    <!-- <div class="nav-item">À propos</div>
    <div class="nav-item">Travaux</div>
    <div class="nav-item">Contacts</div> -->
    <NavBar />

  </div>

  <LinksSet />
  <PresentationSet />

  <div class="photos">
    <img class="appareil_photo" src="../assets/appareil_photo.png" alt="">
    <img class="photo_accueil" src="../assets/photo_accueil.png" alt="">
    <div class="line-photos"></div>
  </div>


  <ResumeSet />

  <FormationsSet />

  <SkillsSet />


  


</template>

<script>
import LinksSet from './LinksSet.vue';
import PresentationSet from './PresentationSet.vue';
import ResumeSet from './ResumeSet.vue';
import NavBar from './NavBar.vue';
import SkillsSet from './SkillsSet.vue';
import FormationsSet from './FormationsSet.vue';

export default {
  name: 'PageAccueil',
  components: {
    LinksSet,
    PresentationSet,
    ResumeSet,
    NavBar,
    SkillsSet,
    FormationsSet
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');


.line-photos{
  width: 80%;
  height: 2px;
  background-color: #1f1f1f;
  position: absolute;
  top: 100vh;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}


.feuille{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120vh;
  z-index: 2;
}

.feuille1{
  position: absolute;
  width: 8vh;
  top: 25%;
  left: 18%;
  rotate: 10deg;
}

.feuille2{
  position: absolute;
  width: 6vh;
  top: 5%;
  left: 25%;
  rotate: 80deg;
  filter: blur(2px);


}

.feuille3{
  position: absolute;
  width: 20vh;
  top: 50%;
  right: 10%;
  rotate: -30deg;
  filter: blur(2px);
}

.feuille4{
  position: absolute;
  width: 16vh;
  top: 60%;
  left: 10%;
  rotate: 150deg;
  filter: blur(1px);
}

.feuille5{
  position: absolute;
  width: 12vh;
  top: 30%;
  right: 8%;
  rotate: 70deg;
  filter: blur(0.5px);
}

.photos{
  position: absolute;
  height: 102vh;
  width: 100%;
  top: 0%;
  left: 0;
  overflow: hidden;
}

.navbar {
  height: 15vh;
  position: absolute;
  top: 2vh;
  right: 2vw;
  font-size: 2.5vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}


.appareil_photo {
  width: 10vh;
  position: absolute;
  top: 8vh;
  left: 38vw;
  rotate: -30deg;
}


.photo_accueil {
  width: 125vh;
  object-fit: cover;
  position: absolute;
  top: -15vh;
  left: 50%;
  transform: translateX(-35%);
  z-index: -1;
  clip-path: inset(0 0 23.2vh 0);
  overflow: hidden;
}


.logo {
  font-size: 6vh;
  font-weight: bold;
  margin: 2vw;
  padding: 0;
}

p {
  margin: 0;
  padding: 0;
}

.point {
  color: #8CAF9E;
}

.full-stack {
  font-weight: bold;
}
</style>