<template>

    <div>
        <div id="hamburger" @click="toggleMenu" class="hamburglar is-closed">
            <div class="burger-icon">
                <div class="burger-container">
                    <span class="burger-bun-top"></span>
                    <span class="burger-filling"></span>
                    <span class="burger-bun-bot"></span>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
export default {
    name: 'NavBar',
    methods: {
        toggleMenu() {
            var trigger = document.getElementById('hamburger');
            var isClosed = trigger.classList.contains('is-closed');
            var navbar = document.getElementsByClassName('mobile-navbar').item(0);
            var links = document.getElementsByClassName('mobile-links').item(0);
            var socialMedia = document.getElementsByClassName('mobile-social-media').item(0);

            if (isClosed) {
                navbar.style.display = 'block';
                setTimeout(() => {
                    console.log('is open');
                    trigger.classList.remove('is-closed');
                    trigger.classList.add('is-open');

                    // Définir la hauteur à une valeur spécifique
                    navbar.style.height = '280px'; // ou toute autre hauteur souhaitée

                    // Afficher les éléments avec une transition fluide
                    links.style.opacity = '1';
                    links.style.transform = 'translateY(0)';
                    socialMedia.style.opacity = '1';
                    socialMedia.style.transform = 'translateY(0)';
                }, 10);
            } else {
                console.log('is closed');
                trigger.classList.remove('is-open');
                trigger.classList.add('is-closed');

                // Réinitialiser la hauteur à auto
                navbar.style.height = '0';

                // Masquer les éléments avec une transition fluide
                links.style.opacity = '0';
                links.style.transform = 'translateY(-10px)';
                socialMedia.style.opacity = '0';
                socialMedia.style.transform = 'translateY(-10px)';


                // attendre la fin de l'animation pour masquer les éléments
                setTimeout(() => {
                    navbar.style.display = 'none';
                }, 250);
            }

            // si l'ecran est redimensionné, on ferme le menu
            window.onresize = function() {
                if (window.innerWidth > 768) {
                    trigger.classList.remove('is-open');
                    trigger.classList.add('is-closed');
                    navbar.style.height = '0';
                    links.style.opacity = '0';
                    links.style.transform = 'translateY(-10px)';
                    socialMedia.style.opacity = '0';
                    socialMedia.style.transform = 'translateY(-10px)';
                    setTimeout(() => {
                        navbar.style.display = 'none';
                    }, 250);
                }
            }
        }
    }
}
</script>

<style scoped>

/* -------------------------------- MOBILE BUTTON -------------------------------- */

*,
*:before,
*:after {
    box-sizing: border-box;
}

.burger-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 20px 16px;
    height: 68px;
    width: 68px;
    cursor: pointer;
}

.burger-container {
    position: relative;
    height: 28px;
    width: 36px;
}

.burger-bun-top,
.burger-bun-bot,
.burger-filling {
    position: absolute;
    display: block;
    height: 4px;
    width: 36px;
    border-radius: 2px;
    background: #000000;
}

.burger-bun-top {
    top: 0;
    transform-origin: 34px 2px;
}

.burger-bun-bot {
    bottom: 0;
    transform-origin: 34px 2px;
}

.burger-filling {
    top: 12px;
}

.hamburglar.is-open .burger-bun-top {
    -webkit-animation: bun-top-out 0.6s linear normal;
    animation: bun-top-out 0.6s linear normal;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}

.hamburglar.is-open .burger-bun-bot {
    -webkit-animation: bun-bot-out 0.6s linear normal;
    animation: bun-bot-out 0.6s linear normal;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}

.hamburglar.is-closed .burger-bun-top {
    -webkit-animation: bun-top-in 0.6s linear normal;
    animation: bun-top-in 0.6s linear normal;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}

.hamburglar.is-closed .burger-bun-bot {
    -webkit-animation: bun-bot-in 0.6s linear normal;
    animation: bun-bot-in 0.6s linear normal;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}

@-webkit-keyframes bun-top-out {
    0% {
        left: 0;
        top: 0;
        transform: rotate(0deg);
    }

    20% {
        left: 0;
        top: 0;
        transform: rotate(15deg);
    }

    80% {
        left: -5px;
        top: 0;
        transform: rotate(-60deg);
    }

    100% {
        left: -5px;
        top: 1px;
        transform: rotate(-45deg);
    }
}

@keyframes bun-top-out {
    0% {
        left: 0;
        top: 0;
        transform: rotate(0deg);
    }

    20% {
        left: 0;
        top: 0;
        transform: rotate(15deg);
    }

    80% {
        left: -5px;
        top: 0;
        transform: rotate(-60deg);
    }

    100% {
        left: -5px;
        top: 1px;
        transform: rotate(-45deg);
    }
}

@-webkit-keyframes bun-bot-out {
    0% {
        left: 0;
        transform: rotate(0deg);
    }

    20% {
        left: 0;
        transform: rotate(-15deg);
    }

    80% {
        left: -5px;
        transform: rotate(60deg);
    }

    100% {
        left: -5px;
        transform: rotate(45deg);
    }
}

@keyframes bun-bot-out {
    0% {
        left: 0;
        transform: rotate(0deg);
    }

    20% {
        left: 0;
        transform: rotate(-15deg);
    }

    80% {
        left: -5px;
        transform: rotate(60deg);
    }

    100% {
        left: -5px;
        transform: rotate(45deg);
    }
}

@-webkit-keyframes bun-top-in {
    0% {
        left: -5px;
        bot: 0;
        transform: rotate(-45deg);
    }

    20% {
        left: -5px;
        bot: 0;
        transform: rotate(-60deg);
    }

    80% {
        left: 0;
        bot: 0;
        transform: rotate(15deg);
    }

    100% {
        left: 0;
        bot: 1px;
        transform: rotate(0deg);
    }
}

@keyframes bun-top-in {
    0% {
        left: -5px;
        bot: 0;
        transform: rotate(-45deg);
    }

    20% {
        left: -5px;
        bot: 0;
        transform: rotate(-60deg);
    }

    80% {
        left: 0;
        bot: 0;
        transform: rotate(15deg);
    }

    100% {
        left: 0;
        bot: 1px;
        transform: rotate(0deg);
    }
}

@-webkit-keyframes bun-bot-in {
    0% {
        left: -5px;
        transform: rotate(45deg);
    }

    20% {
        left: -5px;
        bot: 0;
        transform: rotate(60deg);
    }

    80% {
        left: 0;
        bot: 0;
        transform: rotate(-15deg);
    }

    100% {
        left: 0;
        transform: rotate(0deg);
    }
}

@keyframes bun-bot-in {
    0% {
        left: -5px;
        transform: rotate(45deg);
    }

    20% {
        left: -5px;
        bot: 0;
        transform: rotate(60deg);
    }

    80% {
        left: 0;
        bot: 0;
        transform: rotate(-15deg);
    }

    100% {
        left: 0;
        transform: rotate(0deg);
    }
}

.hamburglar.is-open .burger-filling {
    -webkit-animation: burger-fill-out 0.6s linear normal;
    animation: burger-fill-out 0.6s linear normal;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}

.hamburglar.is-closed .burger-filling {
    -webkit-animation: burger-fill-in 0.6s linear normal;
    animation: burger-fill-in 0.6s linear normal;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}

@-webkit-keyframes burger-fill-in {
    0% {
        width: 0;
        left: 36px;
    }

    40% {
        width: 0;
        left: 40px;
    }

    80% {
        width: 36px;
        left: -6px;
    }

    100% {
        width: 36px;
        left: 0px;
    }
}

@keyframes burger-fill-in {
    0% {
        width: 0;
        left: 36px;
    }

    40% {
        width: 0;
        left: 40px;
    }

    80% {
        width: 36px;
        left: -6px;
    }

    100% {
        width: 36px;
        left: 0px;
    }
}

@-webkit-keyframes burger-fill-out {
    0% {
        width: 36px;
        left: 0px;
    }

    20% {
        width: 42px;
        left: -6px;
    }

    40% {
        width: 0;
        left: 40px;
    }

    100% {
        width: 0;
        left: 36px;
    }
}

@keyframes burger-fill-out {
    0% {
        width: 36px;
        left: 0px;
    }

    20% {
        width: 42px;
        left: -6px;
    }

    40% {
        width: 0;
        left: 40px;
    }

    100% {
        width: 0;
        left: 36px;
    }
}

</style>