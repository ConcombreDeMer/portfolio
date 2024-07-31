<template>

    <div class="photos" id="photos">
        <img class="appareil_photo" src="../assets/appareil_photo.png" alt="">
        <img class="photo_accueil" src="../assets/photo_accueil.png" alt="">
        <div class="line-photos"></div>
    </div>

</template>

<script>
import animations from '@/mixins/animations';

export default {
    mixins: [animations],
    name: 'PhotosSet',
    mounted() {
        this.animationInstant(".appareil_photo", 100, "reveal-top");
        this.animationInstant(".photo_accueil", 100, "reveal-right");
        this.animationInstant(".line-photos", 100, "reveal-right");
    },
}

</script>

<style scoped>
.photos {
    position: absolute;
    height: 102vh;
    width: 100%;
    top: 0%;
    left: 0;
    overflow: hidden;
}


.appareil_photo {
    width: 10vh;
    position: absolute;
    top: 8vh;
    left: 38vw;
}

.photo_accueil {
    width: 125vh;
    object-fit: cover;
    position: absolute;
    top: -15vh;
    left: 25%;
    transform: translateX(-35%);
    z-index: -1;
    clip-path: inset(0 0 23.2vh 0);
    overflow: hidden;
}

.line-photos {
    width: 80%;
    height: 2px;
    background-color: #1f1f1f;
    position: relative;
    top: 100vh;
    margin-left: auto;
    margin-right: auto;
}
</style>