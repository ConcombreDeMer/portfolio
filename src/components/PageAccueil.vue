<template>

  <div class="feuille" id="feuille">
    <img class="feuille1" src="../assets/feuilles/feuille.png" alt="">
    <img class="feuille2" src="../assets/feuilles/feuille2.png" alt="">
    <img class="feuille3" src="../assets/feuilles/feuille3.png" alt="">
    <img class="feuille4" src="../assets/feuilles/feuille4.png" alt="">
    <img class="feuille5" src="../assets/feuilles/feuille5.png" alt="">
  </div>


  <div class="logo" id="logo">
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
  <PhotosSet />
  <ResumeSet />
  <FormationsSet />
  <SkillsSet />
  <ExperienceSet />
  <PageContacts />

</template>

<script>
import LinksSet from './LinksSet.vue';
import PresentationSet from './PresentationSet.vue';
import ResumeSet from './ResumeSet.vue';
import NavBar from './NavBar.vue';
import SkillsSet from './SkillsSet.vue';
import FormationsSet from './FormationsSet.vue';
import PageContacts from './PageContacts.vue';
import ExperienceSet from './ExperienceSet.vue';
import PhotosSet from './PhotosSet.vue';

import animations from '../mixins/animations.js';

export default {
  mixins: [animations],
  name: 'PageAccueil',
  components: {
    LinksSet,
    PresentationSet,
    ResumeSet,
    NavBar,
    SkillsSet,
    FormationsSet,
    PageContacts,
    ExperienceSet,
    PhotosSet
  },
  mounted() {
    this.$nextTick(() => {
      this.feuillesAnimation("feuille", 40);

    });
  },
  beforeUnmount() {
    this.clearFeuillesAnimation();
  },
  methods: {
  },
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@import '../css/animations.css';


body,
html {
  overflow-x: hidden;
}

.feuille img {
  animation: reveal-top 2s;
}



.feuille {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120vh;
  z-index: 2;
}

.feuille1 {
  position: absolute;
  width: 8vh;
  top: 25%;
  left: 18%;
}

.feuille2 {
  position: absolute;
  width: 6vh;
  top: 5%;
  left: 25%;
  filter: blur(2px);


}

.feuille3 {
  position: absolute;
  width: 20vh;
  top: 50%;
  right: 10%;
  filter: blur(2px);
}

.feuille4 {
  position: absolute;
  width: 16vh;
  top: 60%;
  left: 10%;
  filter: blur(1px);
}

.feuille5 {
  position: absolute;
  width: 12vh;
  top: 30%;
  right: 8%;
  filter: blur(0.5px);
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