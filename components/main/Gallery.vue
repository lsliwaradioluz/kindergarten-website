<template>
  <div class="gallery main">
    <h1 class="gallery__header header-primary">Galeria</h1>
    <div class="gallery__images">
      <div class="gallery__image" v-for="image in images" :key="image.id" :style="{ backgroundImage: `url('${image.url}')`}"></div>
    </div>
  </div>
</template>

<script>

  export default {
    props: ['images'], 
  }
</script>

<style scoped>

  .gallery__header {
    margin-top: 0;
  }

  .gallery__images {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .gallery__image {
    width: 100%;
    height: 80vw;
    background-size: cover;
    background-position: center;
    margin: 0.5rem 0;
    border: 10px solid white;
    box-shadow: 0 0 10px rgb(192, 192, 192);
    position: relative;
  }

  .gallery__image:last-child::after {
    content: "+";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    font-weight: 500;
    font-family: 'Baloo', cursive;
    background-color: rgba(88, 193, 137, 0.884);
  }
</style>