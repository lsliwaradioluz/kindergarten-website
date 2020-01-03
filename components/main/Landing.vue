<template>
  <div class="landing main">
    <div class="landing__content">
      <h1>Dobro maluszka na pierwszym miejscu</h1>
      <p>W żłobku Akuku dbamy o harmonijmy rozwój dzieci. Chcemy, by z nami czuły się szczęsliwe i bezpieczne!</p>
      <div class="landing__content__buttons">
        <a class="button b-yellow" href="tel:576139837">Zadzwoń</a>
        <button class="button" @click="$emit('scroll')">O nas</button>
      </div>
    </div>
    <div class="landing__image"></div>
  </div>  
</template> 

<script>
  export default {
    
  }
</script>

<style scoped>

  .landing {
    height: auto;
    padding-top: 6rem;
    padding-bottom: 11rem;
    background-image: url('~assets/images/background-blue.png');
    background-size: cover;
    background-position: right bottom;
    display: flex;
    align-items: center;
  }

  .landing__content h1 {
    color: white;
    margin-bottom: 1rem;
    margin-top: 0;
  }

  .landing__content h1::after {
    display: none;
  }

  .landing p {
    color: white;
  }

  .landing__content__buttons {
    display: flex;
    justify-content: flex-start;
  }
  
  .button:first-child {
    color: black;
    margin-right: 0.5rem;
  }

  .button:nth-child(2) {
    background-color: transparent;
    border: 1px solid white;
  }

  .button:nth-child(2):hover,
  .button:nth-child(2):active {
    background-color: white;
    color: black;
  }

  .landing__image {
    display: none;
  }

  @media (min-width: 768px) {
    
    .landing {
      height: 100vh;
    }
  }

  @media (min-width: 1024px) {

    .landing__content h1 {
      font-size: 3.5rem;
      line-height: 3rem;
    }

    .landing__content {
      width: 50%;
    }

    .landing__image {
      display: block;
      height: 80%;
      width: 50%;
      background-image: url('~assets/images/kid2.png');
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
  }

</style>