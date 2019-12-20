<template>
  <div class="footers main">
    <div class="footer">
      <div class="footer__logo logo">
      <span class="c-green">aku</span><span class="c-pink">ku</span>
      </div>
      <p class="footer__text text">Głównym celem naszej pracy jest dobro każdego maluszka, jego harmonijny i wszechstronny rozwój. Chcemy aby z nami czuło się szczęśliwe i bezpieczne.</p>
    </div>
    <div class="footer">
      <h2 class="footer__header header-secondary">Przydatne linki</h2>
      <nuxt-link to="/" class="text" tag="a">Strona Główna</nuxt-link>
      <nuxt-link to="/" class="text" tag="a">Catering</nuxt-link>
      <nuxt-link to="/" class="text" tag="a">Wychowawcy</nuxt-link>
      <nuxt-link to="/" class="text" tag="a">Cennik</nuxt-link>
      <nuxt-link to="/" class="text" tag="a">Kontakt</nuxt-link>
    </div>
    <div class="footer">
      <h2 class="footer__header header-secondary">Dokumenty</h2>
      <a href="" class="text">Formularz zapisowy</a>
      <a href="" class="text">Regulamin</a>
      <a href="" class="text">Statut</a>
    </div>
    <div class="footer">
      <h2 class="footer__header header-secondary">Skontaktuj się z nami</h2>
      <div v-for="footer in footers" :key="footer.id">
        <h2 class="footer__subheader header-seconary">{{ footer.name }}</h2>
        <component :is="footer.name == 'Telefon' ? 'a' : 'p'" class="footer__text text" v-for="entry in footer.entries" :key="entry.id" :href="`tel:${entry.entry}`">{{ entry.entry }}</component>
      </div>
    </div>
    <p class="footers__signature text">Website made with joy by Łukasz Śliwa. Icons made by Freepik from www.flaticon.com
    </p>
  </div>
</template>

<script>
  import footersQuery from '~/apollo/queries/footer/footersQuery'

  export default {
    apollo: {
      footers: {
        prefetch: true, 
        query: footersQuery
      }
    }
  }
</script>

<style scoped>
  
  .footers {
    background-image: url('~assets/images/background-footer.png');
    background-color: #F6F6F6;
    background-repeat: no-repeat;
    background-position: bottom center;
    padding-bottom: 5rem;
    padding-top: 1rem;
    position: relative;
  }

  .footers::after {
    content: "";
    position: absolute;
    top: -3rem;
    left: 0;
    width: 100%;
    height: 3rem;
    background-image: url('~assets/images/numbers-after.png');
    background-size: cover;
  }

  .footer {
    padding: 1rem 0;
  }

  .footer a {
    display: block;
    text-align: left;
    margin-bottom: 0;
    margin-top: 0.75rem;
  }

  .text {
    text-align: left;
    margin-top: 0;
    padding-right: 2rem;
  }

  .footer__header {
    text-align: left;
    margin-bottom: 1rem;
  }

  .footer__subheader {
    font-size: 1rem;
  }

  .footers__signature {
    margin-top: 2rem;
  }
</style>