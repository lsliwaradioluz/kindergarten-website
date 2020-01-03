<template>
  <div class="bank main">
    <div class="bank__content box" v-html="$md.render(bank.content)"></div>
  </div>
</template>

<script>
export default {
  props: ['bank']
}
</script>

<style scoped>

  .bank,
  .bank__content {
    padding-top: 0;
  }

  @media (min-width: 1024px) {

    .bank {
      display: flex;
      padding-bottom: 6rem;
    }

    .bank__content {
      width: 50%;
      position: relative;
    }
    
    .bank__content::after,
    .bank__content::before {
      content: "";
      width: 100%;
      height: 95%;
      position: absolute;
      right: -100%;
      top: 5%;
      background-image: url('~assets/images/kids.jpg');
      background-size: cover;
      background-position: center;
      border-radius: 10px;
    }

    .bank__content::before {
      background-image: url('~assets/images/background-contact.png');
      top: 0;
      right: -105%;
      height: 100%;
    }
  }
</style>