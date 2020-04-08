<template>
  <div class="teachers main" :class="{ 'background-blue': blue }">
    <h2 class="header-centered" v-if="blue">
      <slot></slot>
    </h2>
    <div class="teachers__container box column">
      <div class="teacher" v-for="teacher in filteredTeachers" :key="teacher.id" is="nuxt-link" :to="`/teachers/${teacher.id}`">
        <div class="teacher__image" :style="{ backgroundImage: `url('${teacher.image.url}')` }"></div>
        <div class="teacher__details box">
          <h3>{{ teacher.name }}</h3>
          <p>{{ teacher.caption }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      teachers: Array, 
      blue: Boolean
    }, 
    computed: {
      filteredTeachers() {
        return this.teachers.filter(teacher => {
          return teacher.id !== this.$route.params.id;
        });
      }
    }
  }
</script>

<style scoped>

  .teachers {
    position: relative;
    padding-top: 5rem;
  }

  .background-blue::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 35rem;
    width: 100%;
    background-image: url('~assets/images/background-blue-bus.png');
    background-size: cover;
    background-position: left top;
    z-index: -1;
  }

  .teachers h2 {
    margin-top: 4rem;
    color: white;
  }

  .teachers h2::after {
    text-decoration-color: white;
  }

  .teachers__container {
    padding-top: 0;
  }

  .teacher {
    width: 100%;
    max-width: 256px;
    padding-bottom: 1rem;
  }

  .teacher__image {
    padding-top: 130%;
    width: 100%;
    background-size: cover;
    background-position: center;
    position: relative;
  }
  
  .teacher__image::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: background-color 0.3s;
  }

  .teacher:hover .teacher__image::after {
    background-color: rgba(77, 100, 249, 0.158);
  }

  .teacher__details h3 {
    text-align: center;
  }

  .teacher__details p {
    margin-top: 0.2rem;
    font-size: 0.9rem;
    text-align: center;
  }

  @media (min-width: 1024px) {

    .teachers {
      padding-top: 15vw;
    }

    .teachers__container {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-around;
    }

    .teacher {
      flex-basis: 30%;
    }
  }
</style>