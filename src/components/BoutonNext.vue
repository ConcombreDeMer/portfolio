<template>

    <div class="next" @click="scrollToFormations">
        <slot class="texte">Suivant</slot>
        <div class="down"></div>
    </div>

</template>

<script>

export default {
    name: 'BoutonNext',
    props: {
    targetSection: {
      type: String,
      default: 'formations'
    }
  },
    methods: {
        scrollToFormations() {
            const element = document.getElementById(this.targetSection);
            if (element) {
                smoothScrollTo(element, 1000);
            }
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

.next {
  position: relative;
  height: 7vh;
  width: 40vh;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2vh;
  transition: all 0.3s ease;
  text-align: center;
}

.texte{
  text-align: center
}

.down {
  width: 10vh;
  height: 10vh;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s ease;
  background-image: url('~@/assets/down.png');
  background-size: cover;
}

.next:hover {
  cursor: pointer;
  font-size: 2.2vh;
  transition: 0.3s;
  color : #8CAF9E;
}

.next:hover .down {
  cursor: pointer;
  width: 12vh;
  transition: all 0.3s ease;
  background-image: url('~@/assets/down-vert.png');
}


</style>