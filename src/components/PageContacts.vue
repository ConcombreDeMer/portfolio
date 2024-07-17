<template>

    <div class="contacts" id="contacts">

        <div class="contact">
            <h2>Discutons !</h2>
            <div class="infos">
                <a href="mailto:yanis.rozier@orange.fr" class="mail">yanis.rozier@orange.fr</a>
                <span class="tel">06 63 99 80 86</span>
            </div>
            <div class="social">
                <a href="https://www.linkedin.com/in/yanis-rozier-79918226a/" target="_blank" class="linkedin"><img src="../assets/linkedin.png" alt=""></a>
                <a href="https://github.com/ConcombreDeMer" target="_blank" class="github"><img src="../assets/github.png" alt=""></a>
            </div>
        </div>        
    </div>

</template>

<script>

export default {
    name: 'PageContacts',
    mounted() {
        // this.animContact('.contact');
    },
    methods: {
        animContact(div) {
            const contact = this.$el.querySelector(div);
            contact.style.opacity = '0';

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const scrollPosition = window.scrollY;
                    const divPosition = contact.getBoundingClientRect().top + scrollPosition;

                    if (entry.isIntersecting) {
                        // Si le scroll est avant la div
                        if (scrollPosition < divPosition) {
                            setTimeout(() => {
                                entry.target.style.animation = 'reveal-right 1s ease-out forwards';
                            }, 300);
                        } else {
                            // Si le scroll est après la div
                            setTimeout(() => {
                                // entry.target.style.animation = 'fade-out 1s ease-out forwards';
                            }, 800);
                        }
                    } else {
                        // entry.target.style.animation = 'fade-out 1s ease-out forwards';
                    }
                });
            }, { threshold: 0.1 });
            observer.observe(contact);
        }
    }
}

</script>

<style scoped>

.contacts {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-top: 10vh;
}

.contact {
    width: 50vw;
    height: 40vh;
    background-color: #8CAF9E;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: white;
    margin: 0;
    padding: 0;
    position: relative;
}

.contact h2 {
    font-size: 8vh;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding-left : 1.5vh;
    
}

.infos {
    display: flex;
    flex-direction: column;
    font-size: 2vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    gap: 1vh;

}


.mail, .tel {
    color: black;
    background-color: white;
    padding: 1vh;
    padding-left: 3vh;
    padding-right: 3vh;
    border-radius: 5px;
    text-decoration: none;
    text-align: center;
}

.mail:hover, .tel:hover {
    box-shadow: 0 0 20px rgb(255, 255, 255);
    transition: 0.5s;   
}

/* quand la souris part de mail et tel */
.mail:not(:hover), .tel:not(:hover) {
    box-shadow: 0 0 0px rgb(255, 255, 255);
    transition: 0.5s;
}

.social {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0;
    padding: 0;
    font-size: 2vh;
}

.linkedin, .github {
    margin: 0;
    padding: 0;
    color: white;
    text-decoration: none;
    margin-right: 1vh;
}

.linkedin img, .github img {
    width: 5vh;
    opacity: 0.8;
}

.linkedin img:hover, .github img:hover {
    opacity: 1;
    transition: 0.3s;
}






</style>