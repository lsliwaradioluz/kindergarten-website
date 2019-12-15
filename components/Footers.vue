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
        <p class="footer__text text" v-for="entry in footer.entries" :key="entry.id">{{ entry.entry }}</p>
      </div>
      <!-- <h2 class="footer__subheader header-seconary">Adres</h2>
      <p class="footer__text text">ul. Rzeszowska 11</p>
      <p class="footer__text text">54-027 Wrocław</p>
      <h2 class="footer__subheader header-seconary">Telefon</h2> 
      <p class="footer__text text">576 139 837</p>
      <h2 class="footer__subheader header-seconary">Email</h2> 
      <p class="footer__text text">osmalekk@gmail.com</p> -->
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