<template>
  <div>
    <Head>Galeria Zdjęć</Head>
    <Gallery :galleries="galleries" />
  </div>
</template>

<script>
  import Gallery from '~/components/main/Gallery.vue'

  import galleryQuery from '~/apollo/queries/gallery/galleryQuery.gql'

  export default {
    components: {
      Gallery
    }, 
    asyncData(context) {
      const client = context.app.apolloProvider.defaultClient;
      return client.query ({ query: galleryQuery })
        .then(({ data }) => {
          return {
            galleries: data.galleries
          }
        });
    }
  }
</script>

<style scoped>

</style>