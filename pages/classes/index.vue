<template>
  <div>
    <Head>Nasze zajęcia</Head>
    <Schedules :schedules="schedules" />
    <Countdown :events="events" sub />
  </div>
</template>

<script>
  import Schedules from '~/components/main/Schedules.vue'
  import Countdown from '~/components/main/Countdown.vue'

  import classesQuery from '~/apollo/queries/classes/classesQuery.gql'

  export default {
    components: {
      Schedules,
      Countdown
    },
    asyncData(context) {
      let client = context.app.apolloProvider.defaultClient;
      return client.query({ query: classesQuery })
        .then(({ data }) => {
          return {
            schedules: data.schedules, 
            events: data.events
          }
        });
    },
  }
</script>

<style scoped>

</style>