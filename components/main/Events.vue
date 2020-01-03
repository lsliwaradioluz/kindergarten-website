<template>
  <div class="events main">
    <h1 class="header-centered">
      Najbliższe wydarzenia
    </h1>
    <div class="events__container">
      <Carousel :columns="[[768, 2], [1024, 3]]">
        <div class="event column" v-for="event in events" :key="event.id">
          <div class="event__image" :style="{ backgroundImage: `url('${event.image.url}')`}">
          </div>
          <div class="event__content box">
            <h2>{{ event.name }}</h2>
            <p>
              <i class="flaticon-clock"></i>
              {{ event.date | convertDate }}
            </p>
            <p>{{ event.description }}</p>
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

  .events::before,
  .events::after {
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
    top: initial;
    bottom: 0;
    transform: rotate(180deg);
  }

  .events h1 {
    color: white;
  }

  .events h1::after {
    text-decoration-color: white;
  }

  .event {
    border-radius: 15px;
    padding: 1rem;
    align-items: flex-end;
  }

  .event__image {
    background-size: cover;
    background-position: center;
    width: 100%;
    padding-top: 60%;
    border-top-right-radius: inherit;
    border-top-left-radius: inherit;
  }

  .event__content {
    border-bottom-right-radius: inherit;
    width: calc(100% - 0.5rem);
    background-color: white;
    position: relative;
    border: none;
  }

  .event__content::before {
    content: "";
    background-color: #FEB836;
    height: 100%;
    width: 0.5rem;
    position: absolute;
    left: -0.5rem;
    top: 0;
    border-bottom-left-radius: 15px;
  }

  .event__content h2 {
    text-align: left;
  }

  .event__content p {
    text-align: left;
    font-size: 0.9rem;
  }

  .flaticon-clock::before {
    color: #FEB836;
    margin-right: 0.5rem;
    font-size: 1rem;
  }
</style>