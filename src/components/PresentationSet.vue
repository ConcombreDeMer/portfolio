<template>

    <div class="presentation">
        <p class="titre">M1 Dev Manager <span class="full-stack">Full Stack</span></p>
        <div class="identite">
            <div class="line"></div>
            <div class="prenom-nom">
                <p class="prenom">Yanis</p>
                <p class="nom">Rozier</p>
            </div>
        </div>

        <div class="decouvrir" @click="scrollToResume">
            Découvrir
            <svg class="arrow" width="43" height="15" viewBox="0 0 43 15" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M42.3517 7.9591C42.7351 7.57596 42.7354 6.95455 42.3522 6.57113L36.1086 0.322998C35.7254 -0.0604177 35.104 -0.0606418 34.7206 0.322498C34.3372 0.705638 34.337 1.32705 34.7201 1.71047L40.27 7.26437L34.7161 12.8143C34.3327 13.1974 34.3325 13.8188 34.7156 14.2022C35.0987 14.5856 35.7202 14.5859 36.1036 14.2027L42.3517 7.9591ZM0.437146 8.23145L41.6576 8.24631L41.6583 6.28342L0.437854 6.26855L0.437146 8.23145Z"
                    fill="white" />
            </svg>
        </div>
        <div class="cv" @click="downloadFile">
            Télécharger mon CV
        </div>

    </div>

</template>

<script>
import animations from '@/mixins/animations';


export default {
    mixins: [animations],
    name: 'PresentationSet',
    mounted() {
        this.animationOnScroll(".titre", 100, "reveal-left", "none", "none");
        this.animationOnScroll(".identite", 100, "reveal-left", "none", "none");
        this.animationOnScroll(".decouvrir", 100, "reveal-left", "none", "none");
        this.animationOnScroll(".cv", 100, "reveal-left", "none", "none");
    },
    methods: {
        scrollToResume() {
            const element = document.getElementById('partie_resume');
            if (element) {
                smoothScrollTo(element, 1000);
            }
        },
        downloadFile() {
            const link = document.createElement('a');
            link.href = '/CV.pdf'; // Remplacez par le chemin réel de votre fichier
            link.download = 'cv.pdf'; // Nom du fichier à télécharger
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

}

function smoothScrollTo(target, duration) {
    const start = window.pageYOffset;
    const end = target.getBoundingClientRect().top + window.pageYOffset;
    const distance = end - start;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, start, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

</script>

<style scoped>
.cv {
    width: 20vh;
    background-color: #ffffff;
    color: #8CAF9E;
    padding: 1vh 2vw;
    margin-top: 2vh;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 10px;
    font-size: 1.8vh;
    border: 2px solid #8CAF9E;
}

.cv:hover {
    background-color: #8CAF9E;
    color: white;
}


.arrow {
    width: 6vh;
    vertical-align: middle;
    margin-left: 2vw;
}

.decouvrir {
    width: 20vh;
    background-color: #8CAF9E;
    color: white;
    padding: 1vh 2vw;
    margin-top: 2vh;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 10px;
    font-size: 1.8vh;
}

.decouvrir:hover {
    background-color: #99baad;
}


.presentation {
    display: inline-flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
    z-index: 3;
}

.identite {
    display: inline-flex;
    width: auto;
    height: auto;
    margin-top: 2vh;
}

.line {
    width: 2px;
    height: 12vh;
    background-color: black;
}

.prenom-nom {
    font-size: 5vh;
    margin-left: 1vw;
}

.nom {
    font-weight: bold;

}

.titre {
    font-size: 2vh;
}
</style>