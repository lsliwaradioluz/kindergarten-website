<template>
  <div class="gallery main">
    <h2 class="header-centered" v-if="main">Galeria</h2>
    <div class="gallery__buttons" v-if="!main">
      <button 
        class="button"
        :class="{ 'button-active' : current == index }" 
        v-for="(gallery, index) in galleries" 
        :key="gallery.id" 
        @click="displayGallery(index)">{{ gallery.name }}</button>
    </div>
    <transition name="fade" mode="out-in">
      <div class="gallery__images column" :key="current" ref="images">
        <div 
          class="gallery__image" 
          :class="{ 'main-class': main }" 
          v-for="image in galleries[current].image" 
          :key="image.id" 
          :style="{ backgroundImage: `url('${image.url}')`}"></div>
        <nuxt-link tag="div" to="/gallery" class="gallery__image last" v-if="main"></nuxt-link>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: {
      galleries: Array, 
      main: Boolean
    }, 
    data() {
      return {
        current: 0
      }
    },
    methods: {
      displayGallery(index) {
        this.current = index;
        this.$refs.images.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
  }
</script>

<style scoped>

  .gallery {
    padding-bottom: 6rem;
  }

  .gallery h2 {
    margin-top: 0;
  }

  .gallery__buttons {
    padding-bottom: 3rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
  }

  .button {
    color: rgb(117, 133, 158);
    border: 0.5px solid rgb(212, 212, 212);
    background-color: transparent;
    font-weight: 500;
    /* width: 45%; */
    margin: 0.5rem;
  }

  .button-active {
    background-color: #05AA19;
    color: white;
    border: none;
  }

  .gallery__image {
    width: 100%;
    padding-top: 100%;
    background-size: cover;
    background-position: center;
    border: 10px solid white;
    margin: 0.5rem 0;
    box-shadow: 0 0 10px rgb(192, 192, 192);
  }

  .last {
    background-image: url('~assets/images/kids.jpg');
    cursor: pointer;
    position: relative;
  }

  .last::after {
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
    background-color: rgba(5, 170, 24, 0.849);
    transition: background-color 0.3s;
  }

  .last:hover::after {
    background-color: rgba(3, 143, 20, 0.849);  
  }

  @media (min-width: 768px) {

    .gallery__images {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(2, 1fr);
    }

    .gallery__image {
      margin: 0;
    }

    .gallery__buttons {
      justify-content: center;
    }

    .button {
      width: auto;
    }
  }

  @media (min-width: 1024px) {
    .gallery__images {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
    }
  }

</style>