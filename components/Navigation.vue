<template>
  <div class="navigation" :class="{ 'navigation-triggered': scroll }">
    <div class="navigation__logo logo" is="nuxt-link" to="/">
      aku<span class="c-yellow">ku</span>
    </div>
    <div class="navigation__hamburger" @click="showNav">
      <i class="flaticon-burger"></i>
    </div>
    <transition name="slide">
      <div class="navigation__links main" v-if="navToggled" @click="showNav($event)">
        <nuxt-link to="/classes" class="navigation__link">Zajęcia</nuxt-link>
        <nuxt-link to="/catering" class="navigation__link">Catering</nuxt-link>
        <nuxt-link to="/teachers" class="navigation__link">Wychowawcy</nuxt-link>
        <nuxt-link to="/prices" class="navigation__link">Cennik</nuxt-link>
        <nuxt-link to="/gallery" class="navigation__link">Galeria</nuxt-link>
        <nuxt-link to="/questions" class="navigation__link">Pytania</nuxt-link>
        <nuxt-link to="/contact" class="navigation__link">Kontakt
        </nuxt-link>
      </div>
    </transition>
  </div>  
</template>

<script>
  export default {
    data() {
      return {
        navToggled: false, 
        scroll: 0
      }
    },
    methods: {
      showNav(event) {
        if (event.target.classList.contains('navigation__links') == false) {
          this.navToggled = !this.navToggled;
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', () => {
        this.scroll = window.scrollY;
      });
    }
  }
</script>

<style scoped>

  .navigation {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    padding: 1.3rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s;
    z-index: 1000;
  }

  .navigation__hamburger {
    z-index: 1000;
  }

  .flaticon-burger::before {
    font-size: 35px;
  }

  .navigation-triggered {
    padding: 1rem;
    background-color: rgb(76, 96, 228);
    box-shadow: 0px 0px 10px 0px #111;    
  }

  .navigation__links {
    height: 100vh;
    width: 100%;
    background-color: rgb(76, 96, 228);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }

  .navigation__link {
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    margin: 0.5rem 0;
    transition: all 0.3s;
  }

  .navigation__link:hover, 
  .navigation__link:active {
    color: #FEB836;
  }

  .nuxt-link-active {
    color: #FEB836;
  }

  .navigation__logo {
    z-index: 998;
    color: white;
  }
</style>