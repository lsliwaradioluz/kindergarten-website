<template>
  <div class="internship main centered">
    <div class="internship__content column">
      <h1 class="header-centered">Studiujesz i chcesz odbyć praktyki?</h1>
      <p>W Akuku pomożemy Ci zdobyć Twoje pierwsze zawodowe doświadczenie. Jeśli chcesz rozpocząć pracę w charakterze opiekuna, masz odpowiednie kwalifikacje, chęć do nauki oraz dobre podejście do dzieci - zapewnimy Ci odpowiedni start!</p>
      <button class="button b-yellow" @click="scroll" ref="button">Aplikuj</button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      scroll() {
        this.$refs.button.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    }
  }
</script>

<style scoped>

  .internship {
    background-image: url('~assets/images/background-green.png');
    background-size: cover;
    background-position: center;
    position: relative;
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

  .internship h1 {
    color: white;
    margin: 0;
  }

  .internship h1::after {
    display: none;
  }

  .internship p {
    text-align: center;
    color: white;
    font-size: 0.9rem;
  }

  @media (min-width: 768px) {
    .internship {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }

    .internship__content {
      width: 80%;
    }
  }

  @media (min-width: 1024px) {
    .internship {
      padding-top: 6rem;
      padding-bottom: 6rem;
    }

    .internship__content {
      width: 60%;
    }
  }
</style>