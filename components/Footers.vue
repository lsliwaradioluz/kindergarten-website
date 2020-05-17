<template>
  <div class="footers main">
    <div class="footer">
      <div class="logo">
        <span class="c-green">aku</span><span class="c-pink">ku</span>
      </div>
      <p>Akuku to nowy, niepubliczny żłobek we Wrocławiu. Głównym celem naszej pracy jest dobro każdego maluszka, jego harmonijny i wszechstronny rozwój. Chcemy aby z nami czuło się szczęśliwe i bezpieczne.</p>
    </div>
    <div class="footer">
      <h3>Przydatne linki</h3>
      <nuxt-link to="/" tag="a">Strona Główna</nuxt-link>
      <nuxt-link to="/catering" tag="a">Catering</nuxt-link>
      <nuxt-link to="/teachers" tag="a">Wychowawcy</nuxt-link>
      <nuxt-link to="/prices" tag="a">Cennik</nuxt-link>
      <nuxt-link to="/contact" tag="a">Kontakt</nuxt-link>
    </div>
    <div class="footer">
      <h3>Dokumenty</h3>
      <a v-for="document in documents" :key="document.id" :href="document.file.url">{{ document.name }}</a>
    </div>
    <div class="footer">
      <h3>Skontaktuj się z nami</h3>
      <div v-for="footer in footers" :key="footer.id">
        <h3 class="footer__subheader">{{ footer.name }}</h3>
        <component 
          :is="footer.name == 'Telefon' ? 'a' : 'p'" 
          v-for="entry in footer.entries" 
          :key="entry.id" 
          :href="`tel:${entry.entry}`">{{ entry.entry }}</component>
      </div>
    </div>
    <p class="footers__signature">
      Website made with joy by Łukasz Śliwa. Icons made by Freepik from www.flaticon.com
    </p>
  </div>
</template>

<script>
  import documentsQuery from '~/apollo/queries/footer/documentsQuery'
  import footersQuery from '~/apollo/queries/footer/footersQuery'

  export default {
    apollo: {
      footers: {
        prefetch: true, 
        query: footersQuery
      },
      documents: {
        prefetch: true, 
        query: documentsQuery
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
    z-index: 2;
  }

  .footer {
    padding: 1rem 0;
  }

  .footer a {
    display: block;
    text-align: left;
    margin: 0.5rem 0;
  }

  .footer p {
    text-align: left;
    margin: 0;
    padding-right: 2rem;
  }

  .footer__subheader {
    font-size: 1rem;
    margin: 1rem 0 0.5rem 0;
  }

  .footers__signature {
    margin-top: 2rem;
  }

  @media (min-width: 1024px) {
    .footers {
      display: grid;
      grid-template-columns: 37% 21% 21% 21%;
      grid-template-areas: ". . . ."
                           "s s s s";
    }

    .footers__signature {
      grid-area: s;
      text-align: center;
    }
  }
</style>