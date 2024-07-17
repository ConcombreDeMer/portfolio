<template>

    <div class="experience" id="experience">
        <img class="band1" src="../assets/band.png" alt="">
        <img class="band2" src="../assets/band.png" alt="">
        <div class="travaux">
            <h3>Experiences et projets</h3>
            <h3>en travaux</h3>
        </div>

        <BoutonNext class="bouton" targetSection="contacts">
            <p>Me contacter</p>
        </BoutonNext>

    </div>

</template>

<script>
import BoutonNext from './BoutonNext.vue';

export default {
    name: 'ExperienceSet',
    components: {
        BoutonNext
    },
}

</script>

<style scoped>

.bouton {
    position: absolute;
    bottom: 5vh;
    left: 50%;
    transform: translateX(-50%);
}

.experience {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-top: 10vh;
    position: relative;
}

.band1 {
    z-index: -1;
    rotate: 20deg;
    position: absolute;
    top : 80%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.band2 {
    z-index: -1;
    rotate: -20deg;
    position: absolute;
    top : 5%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.travaux {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 8vh;
    color: #8CAF9E;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    width: 50vw;
    height: 40vh;
    position: relative;
    border: 3px solid #8CAF9E;
    rotate: 5deg;
    margin-bottom: 10%;
}

.travaux h3 {
    margin: 0;
    padding: 0;
    font-size: 5vh;
}



</style>