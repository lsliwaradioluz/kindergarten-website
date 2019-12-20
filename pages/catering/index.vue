<template>
  <div>
    <Head>Catering</Head>
    <Catering :catering="catering" />
  </div>
</template>

<script>
  import Catering from '~/components/sub/Catering.vue'

  import cateringQuery from '~/apollo/queries/catering/cateringQuery.gql'

  export default {
    components: {
      Catering
    },
    asyncData(context) {
      let client = context.app.apolloProvider.defaultClient;
      return client.query({ query: cateringQuery })
        .then(({ data }) => {
          return {
            catering: data.other
          }
        });
    },
  }
</script>

<style scoped>

</style>