<template>
  <div class="about main" ref="about">
    <h2 class="header-centered">W Akuku dzieci czują się jak w domu</h2>
    <div class="about__facilities column">
      <div class="about__facility box column">
        <div class="icon b-green">
          <i class="flaticon-shield"></i>
        </div>
        <h3>Spokojny start</h3>
        <p>Wiedząc jak ważne dla harmonijnego rozwoju dziecka jest jego poczucie bezpieczeństwa, proponujemy rodzicom stopniowe wprowadzanie maluszka w świat żłobkowy w miarę możliwości czasowych rodziców.</p>
      </div>
      <div class="about__facility box column">
        <div class="icon b-yellow">
          <i class="flaticon-teacher"></i>
        </div>
        <h3>Wychowawcy</h3>
        <p>W żłobku AKuku nie pracują „panie”, „wychowawczynie” czy „nauczycielki”. Tutaj Waszym dzieckiem opiekują się po prostu ciocie. Dobro maluszka jest na pierwszym miejscu i chcemy, aby czuł się radośnie, bezpiecznie oraz z uśmiechem na twarzy przekraczało próg naszej placówki.</p>
      </div>
      <div class="about__facility box column">
        <div class="icon b-pink">
          <i class="flaticon-runer-silhouette-running-fast"></i>
        </div>
        <h3>Aktywności</h3>
        <p>Wspieramy indywidualny rozwój wszystkich dzieci. Nasz plan tygodniowy jest wypełniony zajęciami tematycznymi, a nasz żłobek często odwiedzają ciekawi goście zajmujący się cie dziedzinami życia.</p>
      </div>
    </div>
    <div class="about__details box">
      <div class="about__details__text" v-html="$md.render(about.content)"></div>
      <div class="about__details__image"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['about']
};
</script>

<style scoped>

  .about__details__text h1,
  .about__details__text h1::after {
    text-align: center;
  }

  .about__details__text h1::after {
    text-align: center;
    left: 25%;
  }

  .about__facility p {
    text-align: center;
  }

  .about__details__text p {
    text-align: justify;
  }

  .about__details__image {
    display: none;
  }

  @media (min-width: 1024px) {
    
    .about__facilities {
      flex-direction: row;
    }

    .about__facility {
      flex-basis: 0;
      flex-grow: 1;
    }

    .about__details__text h1,
    .about__details__text h1::after {
      text-align: left;
      left: 0;
    }

    .about__details {
      display: flex;
    }

    .about__details div {
      flex-basis: 0;
      flex-grow: 1;
    }

    .about__details__image {
      display: block;
      width: 50%;
      padding-top: 30%;
      background-image: url("https://images.unsplash.com/flagged/photo-1551887373-6edba6dacbb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
      background-size: cover;
      background-position: center;
      margin-top: 2rem;
      margin-left: 5%;
    }
  }
</style>