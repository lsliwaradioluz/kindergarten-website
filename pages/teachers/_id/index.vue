<template>
  <div>
    <Head>{{ teacher.name }}</Head>
    <Teacher :teacher="teacher" />
    <Internship />
    <ContactForm />
    <Teachers :teachers="teachers" blue>Pozostali wychowawcy</Teachers>
  </div>
</template>

<script>
  import Teacher from '~/components/sub/Teacher.vue'
  import Internship from '~/components/sub/Internship.vue'
  import ContactForm from '~/components/sub/ContactForm.vue'
  import Teachers from '~/components/main/Teachers.vue'

  import teacherQuery from '~/apollo/queries/teachers/teacherQuery.gql'

  export default {  
    components: {
      Teacher,
      Internship,
      ContactForm, 
      Teachers
    },
    asyncData(context) {
      let client = context.app.apolloProvider.defaultClient;
      return client.query({ query: teacherQuery, variables: { id: context.route.params.id } })
        .then(({ data }) => {
          return {
            teacher: data.teacher, 
            teachers: data.teachers
          }
        });
    },
  }
</script>