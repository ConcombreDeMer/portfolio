<template>

  <div class="feuille" id="feuille">
    <img class="feuille1" src="../assets/feuilles/feuille.png" alt="">
    <img class="feuille2" src="../assets/feuilles/feuille2.png" alt="">
    <img class="feuille3" src="../assets/feuilles/feuille3.png" alt="">
    <img class="feuille4" src="../assets/feuilles/feuille4.png" alt="">
    <img class="feuille5" src="../assets/feuilles/feuille5.png" alt="">
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

import 'animate.css';

export default {
  name: 'PageAccueil',
  components: {
    LinksSet,
    PresentationSet,
    ResumeSet,
    NavBar,
    SkillsSet,
    FormationsSet,
    PageContacts,
    ExperienceSet
  },
  mounted() {
    this.initFeuilleAnimation();
  },
  beforeUnmount() {
    if (this.feuilleContainer) {
      this.feuilleContainer.removeEventListener('mousemove', this.handleMouseMove);
    }
  },
  methods: {
    initFeuilleAnimation() {
      this.feuilleContainer = document.getElementById('feuille');
      const maxDistance = 40; // Distance maximale de déplacement en pixels
      let moveX = 0;
      let moveY = 0;

      this.handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const centerX = this.feuilleContainer.offsetWidth / 2;
        const centerY = this.feuilleContainer.offsetHeight / 2;
        const targetX = (clientX - centerX) / centerX * maxDistance; // Calcul de la position cible
        const targetY = (clientY - centerY) / centerY * maxDistance; // Calcul de la position cible

        // Interpolation linéaire pour un mouvement fluide
        moveX += (targetX - moveX) * 0.1;
        moveY += (targetY - moveY) * 0.1;
      };

      const animate = () => {
        // Appliquer moveX et moveY pour déplacer ou transformer l'élément
        // Par exemple, en ajustant le style transform de l'élément feuille
        this.feuilleContainer.style.transform = `translate(${moveX}px, ${moveY}px)`;

        requestAnimationFrame(animate);
      };

      this.feuilleContainer.addEventListener('mousemove', this.handleMouseMove);
      animate(); // Commencer l'animation
    }
  },

}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');


body,
html {
  overflow-x: hidden;
}

@keyframes reveal-photo-accueil {
  from {
    opacity: 0;
    transform: translateX(-20%);
  }

  to {
    opacity: 1;
    transform: translateX(-35%);
  }
}

/* reveal top */
@keyframes reveal-top {
  from {
    opacity: 0;
    transform: translateY(-20%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes reveal-left {
  0% {
    opacity: 0;
    transform: translateX(-20%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}


@keyframes reveal-right {
  0% {
    opacity: 0;
    transform: translateX(20%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes reveal-bottom {
  0% {
    opacity: 0;
    transform: translateY(20%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes hide-bottom {
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    transform: translateY(20px);
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}







.feuille img {
  animation: reveal-top 2s;
}

.line-photos {
  width: 80%;
  height: 2px;
  background-color: #1f1f1f;
  position: absolute;
  top: 100vh;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
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

.photos {
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
  animation: reveal-top 2s;
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
  animation: reveal-photo-accueil 2s;
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