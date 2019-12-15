<template>
  <div class="prices main">
    <h1 class="prices__header header-primary">Cennik</h1>
    <div class="prices__container">
      <div class="price box" v-for="price in prices" :key="price.id">
      <div class="icon">
        {{ price.price }}
      </div>
      <h2 class="price__header header-secondary">{{ price.name }}</h2>
      <p class="price__text text" v-for="entry in price.entries" :key="entry.id">{{ entry.entry }}</p>
      <button class="price__button button-yellow">Zapisz się</button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['prices']
}
</script>

<style scoped>

  .prices {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .prices__header {
    margin-top: 0;
  }

  .price {
    border-radius: 5px;
    box-shadow: -2px 2px 10px 5px #e4e3e3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 3rem;
    margin-bottom: 2rem;
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

  .price:nth-child(1) .icon,
  .price:nth-child(1) .price__button {
    background-color: #FA67BF;
  }

  .price:nth-child(2) .icon,
  .price:nth-child(2) .price__button {
    background-color: #E21C3F;
  }

  .price:nth-child(3) .icon,
  .price:nth-child(3) .price__button {
    background-color: #19AA5F;
  }

</style>