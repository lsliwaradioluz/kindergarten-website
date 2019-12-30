<template>
  <div class="events main">
    <h1 class="events__header header-primary">
      Najbliższe wydarzenia
    </h1>
    <div class="events__container">
      <Carousel :columns="[[768, 2], [1024, 3]]">
        <div class="event" v-for="event in events" :key="event.id">
          <div class="event__image" :style="{ backgroundImage: `url('${event.image.url}')`}">
          </div>
          <div class="event__content box">
            <h2 class="event__content-header header-secondary">{{ event.name }}</h2>
            <p class="event__content-date text"><i class="flaticon-clock"></i>{{ event.date | convertDate }}</p>
            <p class="event__content-date text">{{ event.description }}</p>
          </div>
        </div>
      </Carousel>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['events'],
    filters: {
      convertDate(value) {
        const months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
        const date = value.split('T')[0].split('-');
        const month = parseInt(date[1]);
        const day = date[2];
        return day[0] == '0' ? `${day[1]} ${months[month -1]}` : `${day} ${months[month -1]}`
      }
    }
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
    background-size: contain;
    width: 100%;
    height: 1rem;
    position: absolute;
    top: 0;
    left: 0;
  }

  .events::after {
    content: "";
    background-image: url('~assets/images/before.png');
    background-size: contain;
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

  .events__container {
    display: flex;
    justify-content: center;
  }

  .event {
    border-radius: 15px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .event__image {
    background-image: url('https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80');
    background-size: cover;
    background-position: center;
    width: 100%;
    padding-top: 60%;
    border-top-right-radius: inherit;
    border-top-left-radius: inherit;
  }

  .event__content {
    border-bottom-right-radius: inherit;
    width: calc(100% - 1rem);
    background-color: white;
    position: relative;
    border: none;
  }

  .event__content::before {
    content: "";
    background-color: #FEB836;
    height: 100%;
    width: 1rem;
    position: absolute;
    left: -1rem;
    top: 0;
    border-bottom-left-radius: 15px;
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