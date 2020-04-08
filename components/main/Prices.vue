<template>
  <div class="prices main">
    <h2 class="header-centered" v-if="showHeader">Cennik</h2>
    <div class="prices__container box column">
      <div class="price box column" v-for="price in prices" :key="price.id">
      <div class="icon">
        <span>{{ price.price }}</span>
      </div>
      <h3>{{ price.name }}</h3>
      <p v-for="entry in price.entries" :key="entry.id">{{ entry.entry }}</p>
      <nuxt-link 
        class="button" 
        :to="{ name: 'contact', params: { focusForm: true } }" 
        @click.native="$root.$emit('sendMessage')">Zapisz się</nuxt-link>
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

  .prices h2 {
    margin-top: 0;
  }

  .price {
    border-radius: 5px;
    box-shadow: -2px 2px 10px 5px #e4e3e3;
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

  .price h3 {
    margin-bottom: 1rem;
    text-align: center;
  }

  .price p {
    margin: 0 0 0.5rem 0;
    text-align: center;
  }

  .price .button {
    font-weight: 300;
    text-transform: uppercase;
    font-size: 0.9rem;
    padding: 1rem 1rem;
  }

  .price:nth-child(1) .icon,
  .price:nth-child(1) .button {
    background-color: #FA67BF;
  }

  .price:nth-child(2) .icon,
  .price:nth-child(2) .button {
    background-color: #E21C3F;
  }

  .price:nth-child(3) .icon,
  .price:nth-child(3) .button {
    background-color: #05AA19;
  }

  @media (min-width: 1024px) {
    .prices__container {
      flex-direction: row;
      justify-content: space-between;
    }

    .price {
      flex-basis: 30%;
    }
  }

</style>