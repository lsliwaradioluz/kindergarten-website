<template>
  <div class="head main centered">
    <h1 class="header-centered">
      <slot></slot>
    </h1>
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
    height: 50vh;
    position: relative;
  }
  
  .head::after {
    content: "";
    background-image: url('~assets/images/head-after-2.png');
    background-size: cover;
    background-position: center bottom;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2rem;
  }

  .head h1 {
    color: white;
    margin: 0;
  }

  .head h1::after {
    text-decoration-color: #FEB836;
  }
</style>

