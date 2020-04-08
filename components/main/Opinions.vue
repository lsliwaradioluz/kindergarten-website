<template>
  <div class="opinions main">
    <h2 class="header-centered">Co mówią rodzice</h2>
    <Carousel>
      <div class="opinion box column" v-for="opinion in opinions" :key="opinion.id">
        <div class="opinion__images">
          <div class="opinion__image" :style="{ backgroundImage: `url('${opinion.image.url}')`}"></div>
          <div class="opinion__image" :style="{ backgroundImage: `url('${getSmallImages(opinion.id, 0)}')`}"></div>
          <div class="opinion__image" :style="{ backgroundImage: `url('${getSmallImages(opinion.id, 1)}')`}"></div>
        </div>
        <div class="opinion__details">
          <p class="opinion__details__body">{{ opinion.body }}</p>
          <h3 class="opinion__details__caption">{{ opinion.name }}</h3>
          <p class="opinion__details__caption">{{ opinion.caption }}</p>
        </div>
      </div>
    </Carousel>
  </div>
</template>

<script>
  export default {
    props: ['opinions'],
    methods: {
      getSmallImages(id, index) {
        const opinions = this.opinions.filter(opinion => {
          return opinion.id !== id;
        });
        return opinions[index].image.url;
      }
    }
  }
</script>

<style scoped>

  .opinion__images {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .opinion__image {
    width: 100%;
    padding-top: 100%;
    margin-bottom: 1rem;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
  }

  .opinion__image:nth-child(2),
  .opinion__image:nth-child(3) {
    display: none;
  }

  .opinion__details__body {
    text-align: justify;
  }

  .opinion__details__caption {
    text-align: right;
    margin-top: 0;
  }

  @media (min-width: 768px) {

    .opinion {
      padding: 4rem;
    }

    .opinion__image {
      width: 80%;
      padding-top: 80%;
    }
  }

  @media (min-width: 1024px) {
    
    .opinions h2, 
    .opinions h2::after {
      text-align: left;
      left: 0;
    }

    .opinion {
      flex-direction: row;
    }

    .opinion__images {
      width: 50%;
      position: relative;
      justify-content: flex-start;
    }

    .opinion__image {
      width: 70%;
      padding-top: 70%;
    }

    .opinion__image:nth-child(2),
    .opinion__image:nth-child(3) {
      display: block;
      width: 15%;
      padding-top: 15%;
      position: absolute;
      top: 0;
      right: 15%;
    }

    .opinion__image:nth-child(3) {
      top: 25%;
      right: 10%;
    }

    .opinion__details {
      padding: 0 2rem;
      width: 50%;
    }
  }

</style>