<template>
  <div class="catering main">
    <div class="catering__content box" v-html="$md.render(catering.content)"></div>
  </div>
</template>

<script>
export default {
  props: ['catering']
}
</script>

<style scoped>

  @media (min-width: 1024px) {
    
    .catering {
      display: flex;
      padding-bottom: 6rem;
      padding-top: 6rem;
    }

    .catering__content {
      width: 50%;
      position: relative;
      padding: 0 3rem 0 0;
    }

    .catering__content::after,
    .catering__content::before {
      content: "";
      width: 100%;
      height: 95%;
      position: absolute;
      right: -100%;
      top: 5%;
      background-image: url('https://images.unsplash.com/photo-1571942727532-a67a4bf9845a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80');
      background-size: cover;
      background-position: center;
      border-radius: 10px;
    }

    .catering__content::before {
      background-image: url('~assets/images/background-contact.png');
      top: 0;
      right: -105%;
      height: 100%;
    }
  }

</style>