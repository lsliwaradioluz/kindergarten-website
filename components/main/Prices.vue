<template>
  <div class="prices main">
    <h1 class="prices-header header-primary">Cennik</h1>
    <div class="price box">
      <div class="icon b-pink">
        85zł
      </div>
      <h2 class="price__header header-secondary">Pobyt do 8 godzin</h2>
      <p class="price__text text">Przewijanie</p>
      <p class="price__text text">Drzemka</p>
      <p class="price__text text">Zabawy grupowe</p>
      <p class="price__text text">Czytanie bajek</p>
      <button class="price__button button-yellow b-pink">Zapisz się</button>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

  .prices {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .prices-header {
    margin-top: 0;
  }

  .price {
    border-radius: 5px;
    box-shadow: -2px 2px 10px 5px #e4e3e3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .icon {
    color: white;
    font-family: 'Balo', cursive;
    font-weight: 700;
    font-size: 1.5rem;
  }

  .price__header {
    margin-bottom: 1rem;
  }

  .price__text {
    margin: 0 0 0.5rem 0;
  }

  .price__button {
    font-weight: 300;
    text-transform: uppercase;
    font-size: 0.9rem;
    padding: 1rem 1rem;
  }
</style>