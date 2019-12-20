<template>
  <div class="schedules main">
    <h1 class="schedules__header header-primary">Plan tygodnia</h1>
    <div class="schedules__container">
      <Carousel :inactive="!carousel" >
        <div class="schedule box" v-for="schedule in schedules" :key="schedule.id">
          <div class="schedule__content box">
            <h2 class="schedule__content-header header-secondary">{{ schedule.day }}</h2>
            <p class="schedule__content-text text">{{ schedule.name }}: {{ schedule.description }}</p>
          </div>
        </div>
      </Carousel>
    </div>
  </div>
</template>

<script>

  export default {
    props: {
      schedules: Array, 
      carousel: Boolean
    },
    computed: {
      showCarousel() {
        return this.$route.path == '/' ? true : false;
      }
    }
  }
</script>

<style scoped>
  
  .schedule {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .schedule__content {
    border-radius: 15px;
    box-shadow: -2px 2px 10px 2px #f2f2f2;
    padding: 2rem;
    height: 17rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .schedule__content-header {
    margin-bottom: 1rem;
  }

  .schedule__content-text {
    margin: 0;
  }
</style>