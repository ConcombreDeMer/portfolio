<template>
    <div>
        <div class="spacer"></div>
        <div ref="testDiv" class="test" :style="{ opacity: opacity, width: width + 'px', height: height + 'px' }">
            <!-- Contenu de la div -->
            Contenu de la div animée
        </div>
        <div class="spacer"></div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            opacity: 0,
            width: 0, // Initialiser avec 0 ou une valeur par défaut
            height: 0, // Initialiser avec 0 ou une valeur par défaut
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll(); // Appel initial pour définir les propriétés au montage
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const rect = this.$refs.testDiv.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const windowWidth = window.innerWidth;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const elementTop = rect.top + scrollTop;
            const elementBottom = elementTop + rect.height;
            const scrollBottom = scrollTop + windowHeight;

            const offset = 200; // Ajustez cette valeur selon les besoins

            // Définir la fonction vhToPixels ici pour qu'elle soit accessible
            const vhToPixels = (vh) => windowHeight * (vh / 100);
            const vwToPixels = (vw) => windowWidth * (vw / 100);

            if (scrollTop + offset < elementBottom && scrollBottom - offset > elementTop) {
                const visibleHeight = Math.min(scrollBottom - offset, elementBottom) - Math.max(scrollTop + offset, elementTop);
                const opacity = visibleHeight / rect.height;
                this.opacity = Math.max(0, Math.min(1, opacity));

                this.width = vwToPixels(10 + (80 * opacity)); // Commence à 10vh et augmente jusqu'à 25vh converti en pixels
                this.height = vhToPixels(10 + (10 * opacity)); // Commence à 10vh et augmente jusqu'à 20vh converti en pixels
            } else {
                this.opacity = 0;
                this.width = vhToPixels(10); // Réinitialiser à la largeur initiale en vh converti en pixels
                this.height = vhToPixels(10); // Réinitialiser à la hauteur initiale en vh converti en pixels
            }
        },
    },
};
</script>

<style scoped>
.test {
    opacity: 0;
    background-color: red;
    margin-left: auto;
    margin-right: auto;
}

.spacer {
    height: 2000px;
    /* Espace pour permettre le scroll */
}
</style>