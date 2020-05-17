<template>
  <div>
    <Head>Cennik</Head>
    <Prices :prices="prices" />
    <Bank :bank="bank" />
  </div>
</template>

<script>
import Prices from '~/components/main/Prices.vue';
import Bank from '~/components/sub/Bank.vue';

import pricesQuery from '~/apollo/queries/prices/pricesQuery.gql'

export default {
  components: {
    Prices,
    Bank,
  }, 
  asyncData(context) {
    const client = context.app.apolloProvider.defaultClient;
    return client.query({ query: pricesQuery })
      .then(({ data }) => {
        return {
          prices: data.prices, 
          bank: data.other
        }
      });
  }
}
</script>