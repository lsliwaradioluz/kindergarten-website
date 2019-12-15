<template>
  <div>
    <Landing />
    <About />
    <Events />
    <Schedules :schedules="schedules" />
    <Gallery :images="images" />
    <Teachers :teachers="teachers" />
    <Prices :prices="prices" />
    <Opinions />
    <Facilities :facilities="facilities"/>
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
import Facilities from '~/components/main/Facilities.vue'

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
    Facilities
  },
  asyncData(context) {
    let client = context.app.apolloProvider.defaultClient;
    return client.query({ query: mainQuery })
      .then(({ data }) => {
        const slicedImages = data.galleries[0].image.slice(0, 6);
        return {
          images: slicedImages, 
          schedules: data.schedules, 
          teachers: data.teachers, 
          prices: data.prices, 
          facilities: data.facilities
        }
      });
  },
}
</script>
