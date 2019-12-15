<template>
  <div>
    <Navigation />
    <nuxt />
    <Footers />
  </div>
</template>

<script>
  import Navigation from '~/components/Navigation.vue'
  import Footers from '~/components/Footers.vue'

  

  export default {
    components: {
      Navigation,
      Footers
    }
  }
</script>