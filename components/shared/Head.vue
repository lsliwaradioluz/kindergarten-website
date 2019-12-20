<template>
  <div class="head main">
    <h1 class="head__header header-primary"><slot></slot></h1>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  
  .head {
    background-image: url('~assets/images/background-head.png');
    background-size: cover;
    background-position: center right;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
    position: relative;
  }
  
  .head::after {
    content: "";
    background-image: url('~assets/images/head-after-2.png');
    background-size: cover;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2rem;
  }

  .head__header {
    color: white;
    margin: 0;
  }

  .head__header::after {
    text-decoration-color: #FEB836;
  }
</style>

