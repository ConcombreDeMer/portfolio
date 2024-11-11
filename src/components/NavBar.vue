<template>
    <header>
        <input id="burger" type="checkbox" ref="burger" @click="moveMenu"/>
        <label for="burger">
            <span></span>
            <span></span>
            <span></span>
        </label>
        <nav>
            <ul>
                <li><a href="#" @click="scrollToTop">Accueil</a></li>
                <li><a href="#partie_resume" @click="closeMenu">À propos de moi</a></li>
                <li><a href="#formations" @click="closeMenu">Parcours</a></li>
                <li><a href="#skills" @click="closeMenu">Compétences</a></li>
                <li><a href="#experience" @click="closeMenu">Expériences</a></li>
                <li><a href="#contacts" @click="closeMenu">Me contacter</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'NavBar',
    menu: false,
    methods: {
        moveMenu() {
            if (this.menu) {
                this.closeMenu();
            } else {
                this.openMenu();
            }
        },
        openMenu() {
            this.menu = true;
            this.$refs.burger.checked = true;
            document.body.style.overflow = 'hidden';
            console.log('openMenu');
        },
        closeMenu() {
            this.menu = false;
            this.$refs.burger.checked = false;
            document.body.style.overflow = 'auto';
            console.log('closeMenu');
        },
        scrollToTop(event) {
            event.preventDefault();
            this.closeMenu();
            window.scrollTo({ top: 0 });
        },
    
    },
    mounted() {
        // this.moveMenu();  
    },
}
</script>

<style scoped>
/* -------------------------------- MOBILE BUTTON -------------------------------- */

#burger {
    display: none;
    z-index: 100;
}

main {
    height: 100vh;
    width: 100vw;
}

input+label {
    position: fixed;
    top: 40px;
    right: 40px;
    height: 20px;
    width: 15px;
    z-index: 100;
}

span {
    position: absolute;
    width: 100%;
    height: 2px;
    top: 50%;
    margin-top: -1px;
    left: 0;
    display: block;
    background: rgb(51, 51, 51);
    transition: 0.5s;
}

span:first-child {
    top: 3px;
}

span:last-child {
    top: 16px;
}

label:hover {
    cursor: pointer;
}

input:checked+label span {
    opacity: 0;
    top: 50%;
}

input:checked+label span:first-child {
    opacity: 1;
    transform: rotate(405deg);
}

input:checked+label span:last-child {
    opacity: 1;
    transform: rotate(-405deg);
}

input~nav {
    background: #8CAF9E;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 0px;
    z-index: 3;
    transition: 0.5s;
    overflow: hidden;
    text-align: center;
    position: fixed;
    right: 20%;
}

input~nav li {
    list-style-type: none;
    opacity: 0;
    transition: 0.5s;
    transition-delay: 0s;
}

input~nav ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

input~nav a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 4.5vh;
    text-align: left;
    color: white;
    display: block;
    padding: 30px;
    transition: 0.3s;
}

input~nav a:hover {
    text-shadow: 0 0 10px white;
}

input~nav a:not(:hover) {   
    text-shadow: none;
}

input:checked~nav {
    height: 100vh;
    transition-delay: 0s;
    z-index: 50;
}

input:checked~nav li {
    opacity: 1;
    transition-delay: 0.5s;
}
</style>