<template>
  <div>
    <Landing />
    <About />
    <Events :events="events" />
    <Schedules :schedules="schedules" carousel />
    <Gallery :galleries="galleries" main />
    <Teachers :teachers="teachers" blue >Poznaj naszych nauczycieli</Teachers>
    <Prices :prices="prices" showHeader />
    <Opinions :opinions="opinions" />
    <Countdown :events="events" main/>
  </div>
</template>

<script>
import Landing from '~/components/main/Landing.vue'
import About from '~/components/main/About.vue'
import Events from '~/components/main/Events.vue'
import Schedules from '~/components/main/Schedules.vue'
import Gallery from '~/components/main/Gallery.vue'
import Teachers from '~/components/main/Teachers.vue'
import Prices from '~/components/main/Prices.vue'
import Opinions from '~/components/main/Opinions.vue'
import Countdown from '~/components/main/Countdown.vue'

import mainQuery from '~/apollo/queries/main/mainQuery.gql'

export default {
  components: {
    Landing,
    About,
    Events, 
    Schedules,
    Gallery,
    Teachers,
    Prices,
    Opinions,
    Countdown
  },
  asyncData(context) {
    let client = context.app.apolloProvider.defaultClient;
    return client.query({ query: mainQuery })
      .then(({ data }) => {
        const galleries = data.galleries;
        galleries[0].image = data.galleries[0].image.splice(0, 5);
        return {
          galleries: galleries, 
          schedules: data.schedules, 
          teachers: data.teachers, 
          prices: data.prices, 
          events: data.events, 
          opinions: data.opinions
        }
      });
  }
}
</script>
