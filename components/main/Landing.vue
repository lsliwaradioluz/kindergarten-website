<template>
  <div class="landing main">
    <div class="landing__content">
      <div class="landing__content-header">
        <h1 class="header-primary">Dobro maluszka na pierwszym miejscu</h1>
      </div>
      <div class="landing__content-text">
        <p>W żłobku Akuku dbamy o harmonijmy rozwój dzieci. Chcemy, by z nami czuły się szczęsliwe i bezpieczne!</p>
      </div>
      <div class="landing__content-buttons">
        <a href="tel:576139837" class="landing__content-button button-yellow">Zadzwoń</a>
        <button class="landing__content-button button-transparent">O nas</button>
      </div>
    </div>
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
    background-position: bottom center;
    color: rgb(80, 69, 69);
    display: flex;
    align-items: center;
  }

  .header-primary {
    color: white;
    text-align: left;
    margin-bottom: 1rem;
    margin-top: 0;
  }

  .header-primary::after {
    display: none;
  }

  .landing__content-text p {
    color: white;
  }

  .landing__content-buttons {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .landing__content-button {
    margin-right: 0.5rem;
  }
  
  .button-yellow {
    color: black;
  }

</style>