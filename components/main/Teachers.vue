<template>
  <div class="teachers main" :class="{ 'background-blue': blue }">
    <h1 class="teachers-header header-primary" v-if="blue">
      <slot></slot>
    </h1>
    <div class="teachers-container box">
      <div class="teacher" v-for="teacher in filteredTeachers" :key="teacher.id" is="nuxt-link" :to="`/teachers/${teacher.id}`">
        <div class="teacher__image" :style="{ backgroundImage: `url('${teacher.image.url}')` }" >
          <div class="teacher__image-overlay"></div>
        </div>
        <div class="teacher__details box">
          <h2 class="teacher__details-header header-secondary">{{ teacher.name }}</h2>
          <p class="teacher__details-text text">{{ teacher.caption }}</p>
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
    height: 70vh;
    width: 100%;
    background-image: url('~assets/images/background-blue-bus.png');
    background-size: cover;
    background-position: left top;
    z-index: -1;
  }

  .background-blue .teachers-header {
    color: white;
  }

  .background-blue .teachers-header::after {
    text-decoration-color: white;
  }

  .teachers-header {
    margin-top: 4rem;
  }

  .teachers-container {
    padding-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
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

  .teacher__image-overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: background-color 0.3s;
  }

  .teacher:hover .teacher__image-overlay {
    background-color: rgba(77, 100, 249, 0.158);
  }

  .teacher__details-text {
    margin-top: 0.2rem;
    font-size: 0.9rem;
  }

  @media (min-width: 768px) {

    .background-blue::after {
      height: 60vh;
    }
  }

  @media (min-width: 1024px) {

    .teachers {
      padding-top: 15vw;
    }
    
    .background-blue::after {
      height: 40vw;
    }

    .teachers-container {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-around;
    }

    .teacher {
      flex-basis: 30%;
    }
  }
</style>