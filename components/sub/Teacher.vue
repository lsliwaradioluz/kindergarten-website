<template>
  <div class="teacher main column">
    <div class="teacher__container">
      <div class="teacher__image" :style="{ backgroundImage: `url('${teacher.image.url}')`}"></div>
      <div class="teacher__description">
        <h1>O mnie</h1>
        <p>{{ teacher.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['teacher']
  }
</script>

<style scoped>

  .teacher__container {
    max-width: 256px;
  }

  .teacher__image {
    background-size: cover;
    background-position: center;
    padding-top: 130%;
    width: 100%;
  }

  .teacher__description h1 {
    text-align: center;
  }

  .teacher__description h1::after {
    text-align: center;
    left: 25%;
  }

  .teacher__description p {
    text-align: justify;
  }

  @media (min-width: 1024px) {

    .teacher__container {
      display: flex;
      max-width: initial;
      padding-top: 4rem;
      padding-bottom: 4rem;
    }

    .teacher__description {
      padding-left: 2rem;
      width: 70%;
    }

    .teacher__description h1,
    .teacher__description h1::after {
      text-align: left;
      left: 0;
    }

    .teacher__image {
      width: 30%;
      padding-top: 30%;
    }
  }
</style>