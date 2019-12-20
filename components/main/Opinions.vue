<template>
  <div class="opinions main">
    <h1 class="opinions-header header-primary">Co mówią rodzice</h1>
    <Carousel>
      <div class="opinion box" v-for="opinion in opinions" :key="opinion.id" ref="opinion">
        <div class="opinion__image" :style="{ backgroundImage: `url('${opinion.image.url}')`}"></div>
        <div class="opinion__details">
          <p class="opinion__details-text text">{{ opinion.body }}</p>
          <h2 class="opinion__details-caption header-secondary">{{ opinion.name }}</h2>
          <p class="opinion__details-subcaption text">{{ opinion.caption }}</p>
        </div>
      </div>
    </Carousel>
  </div>
</template>

<script>
  export default {
    props: ['opinions']
  }
</script>

<style scoped>

  .opinion {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .opinion__image {
    height: 80vw;
    width: 80vw;
    margin-bottom: 1rem;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
  }

  .opinion__details-text {
    text-align: justify;
  }

  .opinion__details-caption {
    text-align: right;
  }

  .opinion__details-subcaption {
    margin-top: 0;
    text-align: right;
  }

</style>