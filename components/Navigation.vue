<template>
  <div class="navigation" :class="{ 'navigation-triggered': scroll }">
    <div class="navigation__logo">
      aku<span class="c-yellow">ku</span>
    </div>
    <div class="navigation__hamburger">
      <i class="flaticon-burger"></i>
    </div>
    
    <div class="navigation__links" v-if="navToggled">

    </div>
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
    font-family: 'Baloo', cursive;
    color: white;
    font-size: 1.5rem;
  }

  .flaticon-burger::before {
    font-size: 35px;
  }

  .navigation-triggered {
    padding: 1rem;
    background-color: rgb(76, 96, 228);
    box-shadow: 0px 0px 10px 0px #111;    
  }
</style>