<template>
  <div>
    <Head>Często zadawane pytania</Head>
    <Questions :questions="questions" />
  </div>
</template>

<script>
  import Questions from '~/components/sub/Questions.vue'

  import questionsQuery from '~/apollo/queries/questions/questionsQuery.gql'
  
  export default {
    components: {
      Questions
    }, 
    asyncData(context) {
      const client = context.app.apolloProvider.defaultClient;
      return client.query({ query: questionsQuery })
        .then(({ data }) => {
          return {
            questions: data.questions
          }
        })
    }
  }
</script>