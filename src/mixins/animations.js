export default {
  data() {
    return {
      // données partagées
    };
  },
  created() {},
  methods: {
    feuillesAnimation(div, maxDist) {
      console.log("feuillesAnimation");
      this.feuilleContainer = document.getElementById(div);
      const maxDistance = maxDist; // Distance maximale de déplacement en pixels
      let moveX = 0;
      let moveY = 0;
      this.handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const centerX = this.feuilleContainer.offsetWidth / 2;
        const centerY = this.feuilleContainer.offsetHeight / 2;
        const targetX = ((clientX - centerX) / centerX) * maxDistance; // Calcul de la position cible
        const targetY = ((clientY - centerY) / centerY) * maxDistance; // Calcul de la position cible
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
      this.feuilleContainer.addEventListener("mousemove", this.handleMouseMove);
      animate(); // Commencer l'animation
    },

    clearFeuillesAnimation() {
      if (this.feuilleContainer) {
        this.feuilleContainer.removeEventListener(
          "mousemove",
          this.handleMouseMove
        );
      }
    },

    animationOnScroll(div, latence, animBefore, animAfter, animDefault) {
      const divAnime = this.$el.querySelector(div);
      divAnime.style.opacity = "0";

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const scrollPosition = window.scrollY;
            const divPosition =
              divAnime.getBoundingClientRect().top + scrollPosition;

            if (entry.isIntersecting) {
              // Si le scroll est avant la div
              if (scrollPosition < divPosition) {
                setTimeout(() => {
                    if(animBefore !== "none") {
                        entry.target.style.animation = `${animBefore} 1s ease-out forwards`;
                    }
                }, latence);
              } else {
                // Si le scroll est après la div
                setTimeout(() => {
                    if(animAfter !== "none") {
                        entry.target.style.animation = `${animAfter} 1s ease-out forwards`;
                    }
                }, latence);
              }
            } else {
                if(animDefault !== "none") {
                    entry.target.style.animation = `${animDefault} 1s ease-out forwards`;
                }
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(divAnime);
    },

    animationInstant(div, latence, anim) {
      const divAnime = this.$el.querySelector(div);
      divAnime.style.opacity = "0";

      setTimeout(() => {
        divAnime.style.animation = `${anim} 1s ease-out forwards`;
      }, latence);
    }
  },
};
