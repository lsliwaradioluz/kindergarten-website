<template>
  <div class="teachers main" :class="{ 'background-blue': blue }">
    <div class="teachers-container box">
      <h1 class="teachers-header header-primary" v-if="blue">
        <slot></slot>
      </h1>
      <div class="teacher box" v-for="teacher in filteredTeachers" :key="teacher.id" is="nuxt-link" :to="`/teachers/${teacher.id}`">
        <div class="teacher__image" :style="{ backgroundImage: `url('${teacher.image.url}')` }" ></div>
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
  }

  .background-blue::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-image: url('~assets/images/background-blue-bus.png');
    background-size: cover;
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

  .teacher__image {
    height: 60vh;
    width: 100%;
    background-image: url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80');
    background-size: cover;
    background-position: center;
  }

  .teacher__details-text {
    margin-top: 0.2rem;
    font-size: 0.9rem;
  }
</style>