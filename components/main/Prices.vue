<template>
  <div class="prices main">
    <h1 class="prices__header header-primary" v-if="showHeader">Cennik</h1>
    <div class="prices__container box">
      <div class="price box" v-for="price in prices" :key="price.id">
      <div class="icon">
        <span>{{ price.price }}</span>
      </div>
      <h2 class="price__header header-secondary">{{ price.name }}</h2>
      <p class="price__text text" v-for="entry in price.entries" :key="entry.id">{{ entry.entry }}</p>
      <nuxt-link :to="{ name: 'contact', params: { focusForm: true } }" class="price__button button-yellow" @click.native="$root.$emit('sendMessage')">Zapisz się</nuxt-link>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prices: Array, 
    showHeader: Boolean
  },
}
</script>

<style scoped>

  .prices__header {
    margin-top: 0;
  }

  .prices__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .price {
    border-radius: 5px;
    box-shadow: -2px 2px 10px 5px #e4e3e3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 2rem;
    margin-bottom: 2rem;
    width: 100%;
    max-width: 280px;
  }

  .icon {
    color: white;
    font-family: 'Baloo', cursive;
    font-weight: 700;
    font-size: 1.5rem;
    height: 5.5rem;
    width: 5.5rem;
  }

  .icon::before {
    height: 4.5rem;
    width: 4.5rem;
  }

  .icon span {
    z-index: 10;
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
    background-color: #05AA19;
  }

  @media (min-width: 768px) {
    
    .prices__container {
      padding-left: 20%;
      padding-right: 20%;
    }
  }

  @media (min-width: 1024px) {
    .prices__container {
      flex-direction: row;
      justify-content: space-between;
      padding: 0;
    }

    .price {
      flex-basis: 30%;
    }
  }

</style>