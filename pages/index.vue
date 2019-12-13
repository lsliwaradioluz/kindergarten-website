<template>
  <div>
    <Landing />
    <About />
    <Events />
    <Schedules />
    <Gallery :images="images" />
    <Teachers />
    <Prices />
    <Opinions />
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
  },
  asyncData(context) {
    let client = context.app.apolloProvider.defaultClient;
    return client.query({ query: mainQuery })
      .then(({ data }) => {
        const slicedImages = data.galleries[0].image.slice(0, 6);
        return {
          images: slicedImages
        }
      });
  },
}
</script>
