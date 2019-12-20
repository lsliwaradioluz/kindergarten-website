<template>
  <div class="teacher main">
    <div class="teacher__image box" :style="{ backgroundImage: `url('${teacher.image.url}')`}"></div>
    <div class="teacher__description box">
      <h1 class="teacher__description-header header-primary">O mnie</h1>
      <div class="teacher__description-text text">{{ teacher.description }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['teacher']
  }
</script>

<style scoped>

  .teacher {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .teacher__image {
    background-size: cover;
    background-position: center;
    height: 60vh;
    width: 90%;
  }

  .teacher__description-text {
    text-align: justify;
  }
</style>