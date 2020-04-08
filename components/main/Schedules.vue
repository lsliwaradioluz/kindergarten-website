<template>
  <div class="schedules main">
    <h2 class="header-centered">Plan tygodnia</h2>
    <div class="schedules__container">
      <Carousel
        :active="active"
        :columns="[[768, 2], [1024, 4], [1440, 4]]">
        <div class="schedule centered" v-for="schedule in schedules" :key="schedule.id">
          <div class="schedule__content box column">
            <h3>{{ schedule.day }}</h3>
            <p>{{ schedule.description }}</p>
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
      active: Array
    },
  }
</script>

<style scoped>
  
  .schedule {
    padding: 1rem;
  }

  .schedule__content {
    border-radius: 15px;
    box-shadow: -2px 2px 10px 2px #f2f2f2;
    padding: 2rem;
    height: 17rem;
    max-width: 256px;
  }

  .schedule h3 {
    margin-bottom: 1rem;
  }

  .schedule p {
    margin: 0;
    text-align: center;
  }
</style>