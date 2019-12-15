<template>
  <div class="navigation" :class="{ 'navigation-triggered': scroll }">
    <div class="navigation__logo logo">
      aku<span class="c-yellow">ku</span>
    </div>
    <div class="navigation__hamburger" @click="showNav">
      <i class="flaticon-burger"></i>
    </div>
    <transition name="slide">
      <div class="navigation__links" v-if="navToggled">
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
      showNav() {
        this.navToggled = !this.navToggled;
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

  .navigation__logo {
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
  }
</style>