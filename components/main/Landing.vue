<template>
  <div class="landing main">
    <div class="landing__content">
      <div class="landing__content-header">
        <h1 class="header-primary">Odkryj nowe oblicze opieki</h1>
      </div>
      <div class="landing__content-text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div class="landing__content-buttons">
        <button class="landing__content-button button-yellow">Zadzwoń</button>
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
    height: 100vh;
    background-image: url('~assets/images/background-blue.png');
    background-size: cover;
    background-position: bottom center;
    color: white;
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