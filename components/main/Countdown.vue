<template>
  <div class="countdowns main column" :class="{ 'background-green': sub, 'background-blue': main }">
    <h2 class="countdowns__header header-centered">{{ closestEvent.name }} za:</h2>
    <div class="countdowns__container column">
      <div class="countdown" v-for="(time, key) in timeLeft" :key="key">
        <div class="countdown__content column">
          <p class="countdown__content__header">{{ time }}</p>
          <p class="countdown__content__subheader">{{ key | englishToPolish }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      events: Array,
      main: Boolean,
      sub: Boolean,
    },
    data() {
      return {
        difference: 0, 
        today: new Date(),
      }
    },
    computed: {
      replacementEvent() {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(1, 0, 0, 0);
        return {
          name: 'Nowy dzień',
          date: tomorrow.toISOString()
        }
      },
      closestEvent() {
        const upcomingEvents = this.events.filter(event => {
          return event.date.replace(/\D/g,'') > this.today.toISOString().replace(/\D/g,'');
        });
        const sortedUpcomingEvents = upcomingEvents.sort((a, b) => {
          return a.date.replace(/\D/g,'') - b.date.replace(/\D/g,'');
        });
        return sortedUpcomingEvents[0] ? sortedUpcomingEvents[0] : this.replacementEvent;
      },
      timeLeft() {
        const singleDay = 1000 * 60 * 60 * 24;
        const singleHour = 1000 * 60 * 60;
        const singleMinute = 1000 * 60;
        const singleSecond = 1000;

        const days = Math.floor(this.difference / singleDay);
        const hours = Math.floor(this.difference % singleDay / singleHour);
        const minutes = Math.floor(this.difference % singleDay % singleHour / singleMinute);
        const seconds = Math.floor(this.difference % singleDay % singleHour % singleMinute / singleSecond);

        return days == 0 ? { hours: hours, minutes: minutes, seconds: seconds} : { days: days, hours: hours, minutes: minutes, seconds: seconds}
      }
    }, 
    methods: {
      countDown() {
        let newDate = this.closestEvent.date.split('-').join(',').split('T').join(',').split('Z').join(',').split(':').join(',').split(',');
        newDate[1] -= 1;
        newDate = new Date(...newDate);
        this.difference = Math.abs(newDate - this.today);
        setInterval(() => {
          this.difference -= 1000;
        }, 1000);

      }
    }, 
    mounted() {
      this.countDown();
    }, 
    filters: {
      englishToPolish(value) {
        switch (value) {
          case 'days':
            return 'dni'
            break
          case 'hours':
            return 'godziny'
            break
          case 'minutes':
            return 'minuty'
            break
          case 'seconds':
            return 'sekundy'
        }
      }
    }
  }
</script>

<style scoped>

  .countdowns {
    background-size: cover;
    background-position: center;
    position: relative;
    padding-bottom: 5rem;
  }

  .countdowns__header {
    color: white;
    font-size: 2rem;
    line-height: 2.5rem;
  }

  .countdowns__header::after {
    text-decoration-color: white;
  }

  .countdowns__container {
    width: 70%;
    max-width: 150px;
  }

  .countdown {
    width: 100%;
    padding-top: 100%;
    border-radius: 25px;
    text-align: center;
    margin-bottom: 2rem;
    position: relative;
  }

  .countdown__content {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .countdown__content__header {
    color: white;
    margin: 0 0 0.5rem 0;
    font-size: 2rem;
    line-height: 1;
    font-family: 'Baloo', cursive;
  }

  .countdown__content__subheader {
    color: white;
    font-weight: 700;
    font-size: 0.9rem;
    margin: 0;
  }

  .countdown:nth-child(1) {
    background-color: #FEB836;
  }

  .countdown:nth-child(2) {
    background-color: #FA67BF;
  }

  .countdown:nth-child(3) {
    background-color: #E21C3F;
  }

  .countdown:nth-child(4) {
    background-color: #05AA19;
  }

  @media (min-width: 768px) {
    .countdowns__container {
      flex-direction: row;
      justify-content: space-evenly;
      flex-wrap: wrap;
      max-width: 1000px;
    }

    .countdown {
      flex-basis: 45%;
      padding-top: 45%;
    }
  }

  @media (min-width: 1024px) {

    .countdown {
      flex-basis: 17%;
      padding-top: 17%;
    }
  }

  .background-green {
    background-image: url('~assets/images/background-green.png');
  }

  .background-blue {
    background-image: 
      linear-gradient(rgba(88, 112, 247, 0.911), rgba(88, 112, 247, 0.911)),
      url('https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
    background-attachment: fixed;
  }
</style>