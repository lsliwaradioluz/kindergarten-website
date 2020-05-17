<template>
  <div>
    <Head>Wychowawcy</Head>
    <Teachers :teachers="teachers"></Teachers>
    <Internship />
    <ContactForm />
  </div>
</template>

<script>
  import Teachers from '~/components/main/Teachers.vue'
  import Internship from '~/components/sub/Internship.vue'
  import ContactForm from '~/components/sub/ContactForm.vue'

  import teachersQuery from '~/apollo/queries/teachers/teachersQuery.gql'

  export default {
    components: {
      Teachers,
      Internship,
      ContactForm
    }, 
    asyncData(context) {
      let client = context.app.apolloProvider.defaultClient
      return client.query({ query: teachersQuery })
        .then(({ data }) => {
          return {
            teachers: data.teachers,
          }
        });
    },
  }
</script>