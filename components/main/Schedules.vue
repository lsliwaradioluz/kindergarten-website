<template>
  <div class="schedules main">
    <h1 class="schedules__header header-primary">Plan tygodnia</h1>
    <div class="schedules__container" is="transition" name="fade" mode="out-in">
      <div class="schedule box" v-for="schedule in currentSchedule" :key="schedule.id">
        <h2 class="schedule__header header-secondary">{{ schedule.day }}</h2>
        <p class="schedule__text text">{{ schedule.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['schedules'], 
    data() {
      return {
        current: 0, 
        carouselInterval: null
      }
    }, 
    computed: {
      currentSchedule() {
        return [this.schedules[this.current]];
      }
    }, 
    methods: {
      changeCurrentSchedule() {
        this.current++
        if (this.current == this.schedules.length) this.current = 0;
      }
    }, 
    mounted() {
      this.carouselInterval = setInterval(() => {
        this.changeCurrentSchedule();
      }, 5000);
    }, 
    destroyed() {
      clearInterval(this.carouselInterval);
    }
  }
</script>

<style scoped>

  .schedules {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .schedule {
    height: 17rem;
    border-radius: 15px;
    box-shadow: -2px 2px 10px 2px #f2f2f2;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>