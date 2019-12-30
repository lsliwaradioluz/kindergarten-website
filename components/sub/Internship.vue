<template>
  <div class="internship main">
    <h1 class="internship__header header-primary">Studiujesz i chcesz odbyć praktyki?</h1>
    <p class="internship__text text">W Akuku pomożemy Ci zdobyć Twoje pierwsze zawodowe doświadczenie. Jeśli chcesz rozpocząć pracę w charakterze opiekuna, masz odpowiednie kwalifikacje, chęć do nauki oraz dobre podejście do dzieci - zapewnimy Ci odpowiedni start!</p>
    <button class="internship__button button-yellow" @click="$root.$emit('focusForm')">Aplikuj</button>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

  .internship {
    background-image: url('~assets/images/background-green.png');
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .internship::before,
  .internship::after {
    content: "";
    background-image: url('~assets/images/before.png');
    background-size: contain;
    width: 100%;
    height: 1rem;
    position: absolute;
    top: 0;
    left: 0;
  }

  .internship::after {
    top: initial;
    bottom: 0;
    transform: rotate(180deg);
  }

  .internship__header {
    color: white;
    margin: 0;
  }

  .internship__header::after {
    display: none;
  }

  .internship__text {
    z-index: 1;
    color: white;
    font-size: 0.9rem;
  }
  
  .internship__button {
    z-index: 1;
  }

  @media (min-width: 768px) {
    .internship {
      padding: 4rem 25%;
    }
  }

  @media (min-width: 1024px) {
    .internship {
      padding: 8rem 25%;
    }
  }
</style>