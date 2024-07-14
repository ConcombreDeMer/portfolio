<template>

    <div class="formations" id="formations">

        <div class="licence">
            <img class="mockup" src="../assets/mockup2.png" alt="">
            <img class="licence-icon" src="../assets/paper.png" alt="">
            <div class="licence-contenu">
                <p class="dates">2019 - 2023</p>
                <h2>Licence Informatique général</h2>
                <p class="lieux">Université Paris cité<br><span class="diderot">(anciennement Paris Diderot)</span></p>
            </div>
        </div>

        <div class="mastere">
            <img class="mockup" src="../assets/mockup2.png" alt="">
            <img class="mastere-icon" src="../assets/mastere.png" alt="">
            <div class="mastere-contenu">
                <p class="dates">2023 - 2025</p>
                <h2>Mastère Dev Manager Fullstack <span class="alternance">en alternance</span></h2>
                <p class="lieux">Efrei Paris</p>
            </div>
        </div>

        <BoutonNext class="next" targetSection="skills">
            <p>Qu'est ce que j'y ai appris ?</p>
        </BoutonNext>

    </div>


</template>

<script>

import BoutonNext from './BoutonNext.vue';

export default {
    name: 'FormationsSet',
    components: {
        BoutonNext
    }
}
</script>

<style scoped>

.next{
    position: absolute;
    bottom: 5vh;
}


.alternance {
    font-size: 2.5vh;
}

.dates {
    position: absolute;
    top: 1vh;
    left: 50%;
    transform: translateX(-50%);
}

h2 {
    position: absolute;
    font-size: 4vh;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.lieux {
    position: absolute;
    bottom: 2vh;
    left: 50%;
    transform: translateX(-50%);
}

.diderot {
    font-size: 1.5vh;
}

.licence-contenu,
.mastere-contenu {
    height: 85%;
    width: 100%;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 3vh;
}


.formations {
    position: relative;
    height: 100vh;
    margin-top: 20vh;
    margin-bottom: 20vh;
}

.licence,
.mastere {
    position: absolute;
    width: 80vh;
}

.licence {
    top: 6vh;
    left: 8vw;
    z-index: 1;
}


.mastere {
    bottom: 14vh;
    right: 8vw;
    z-index: 2;
}


.mockup {
    width: 100%;
    height: auto;
}

.licence-icon,
.mastere-icon {
    position: absolute;
    width: 30vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.5;
    filter: blur(2px);
}
</style>