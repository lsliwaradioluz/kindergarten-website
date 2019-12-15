<template>
  <div class="facilities main">
    <h1 class="facilities__header header-primary">Akuku w liczbach</h1>
    <div class="facilities__container">
      <div class="facility b-yellow" v-for="facility in facilities" :key="facility.id">
        <h1 class="facility__header header-primary">{{ facility.caption }}</h1>
        <span class="facility__subheader">{{ facility.entry }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['facilities']
  }
</script>

<style scoped>

  .facilities {
    background-image: url('https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
    background-size: cover;
    background-position: center;
    position: relative;
    padding-bottom: 8rem;
  }

  .facilities::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(88, 112, 247, 0.911);
    z-index: 0;
  }

  .facilities::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3rem;
    background-image: url('~assets/images/numbers-after.png');
    background-size: cover;
  }

  .facilities__header {
    color: white;
    z-index: 1;
  }

  .facilities__header::after {
    text-decoration-color: white;
  }

  .facilities__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .facility {
    width: 60vw;
    height: 60vw;
    padding: 1.5rem;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    text-align: center;
    margin-bottom: 2rem;
  }

  .facility__header {
    color: white;
    margin: 0 0 0.5rem 0;
  }

  .facility__header::after {
    display: none;
  }

  .facility__subheader {
    color: white;
    font-weight: 700;
    font-size: 0.9rem;
  }

  .facility:nth-child(1) {
    background-color: #FEB836;
  }

  .facility:nth-child(2) {
    background-color: #FA67BF;
  }

  .facility:nth-child(3) {
    background-color: #E21C3F;
  }

  .facility:nth-child(4) {
    background-color: #58C189;
  }
</style>