<template>
  <div>
    <Head>Kontakt</Head>
    <Contact :contacts="footers" />
    <ContactForm is-contact />
  </div>
</template>

<script>
  import Contact from '~/components/sub/Contact.vue'
  import ContactForm from '~/components/sub/ContactForm.vue'

  import footersQuery from '~/apollo/queries/footer/footersQuery.gql'

  export default {
    components: {
      Contact,
      ContactForm
    },
    asyncData(context) {
      let client = context.app.apolloProvider.defaultClient;
      return client.query({ query: footersQuery })
        .then(({ data }) => {
          return {
            footers: data.footers
          }
        });
    }  
  }
</script>