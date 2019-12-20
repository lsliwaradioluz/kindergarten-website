<template>
  <div class="events main">
    <h1 class="events__header header-primary">
      Najbliższe wydarzenia
    </h1>
    <div class="event box" v-for="event in events" :key="event.id">
      <div class="event__image">
      </div>
      <div class="event__content box">
        <h2 class="event__content-header header-secondary">{{ event.name }}</h2>
        <p class="event__content-date text"><i class="flaticon-clock"></i>{{ event.date }}</p>
        <p class="event__content-date text">{{ event.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['events'],
  }
</script>

<style scoped>
  
  .events {
    background-image: url('~assets/images/background-green.png');
    position: relative;
  }

  .events::before {
    content: "";
    background-image: url('~assets/images/before.png');
    background-size: cover;
    width: 100%;
    height: 1rem;
    position: absolute;
    top: 0;
    left: 0;
  }

  .events::after {
    content: "";
    background-image: url('~assets/images/before.png');
    background-size: cover;
    width: 100%;
    height: 1rem;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: rotate(180deg);
  }

  .events__header {
    color: white;
  }

  .events__header::after {
    text-decoration-color: white;
  }

  .event {
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .event__image {
    background-image: url('https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80');
    background-size: cover;
    background-position: center;
    height: 30vh;
    width: 100%;
    border-top-right-radius: inherit;
    border-top-left-radius: inherit;
  }

  .event__content {
    background-color: #FEB836;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    width: 100%;
    position: relative;
    z-index: 2;
    padding-left: 3rem;
    padding-bottom: 3rem;
  }

  .event__content::before {
    content: "";
    background-color: white;
    height: 90%;
    width: 90%;
    position: absolute;
    right: 0;
    top: 0;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    z-index: -1;
  }

  .event__content-header {
    text-align: left;
  }

  .text {
    text-align: left;
    font-size: 0.9rem;
  }

  .flaticon-clock::before {
    color: #FEB836;
    margin-right: 0.5rem;
    font-size: 1rem;
  }
</style>