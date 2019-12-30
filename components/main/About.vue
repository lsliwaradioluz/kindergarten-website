<template>
  <div class="about main" ref="about">
    <h1>W Akuku dzieci czują się jak w domu</h1>
    <div class="about__facilities">
      <div class="about__facilities">
        <div class="about__facility box">
          <div class="icon b-green">
            <i class="flaticon-shield"></i>
          </div>
          <h2>Spokojny start</h2>
          <p>Wiedząc jak ważne dla harmonijnego rozwoju dziecka jest jego poczucie bezpieczeństwa, proponujemy rodzicom stopniowe wprowadzanie maluszka w świat żłobkowy w miarę możliwości czasowych rodziców.</p>
        </div>
        <div class="about__facility box">
          <div class="icon b-yellow">
            <i class="flaticon-teacher"></i>
          </div>
          <h2>Wychowawcy</h2>
          <p>W żłobku „A Kuku” nie pracują „panie”, „wychowawczynie” czy „nauczycielki”. Tutaj Waszym dzieckiem opiekują się po prostu ciocie. Chcemy, aby dzieci czuły się w naszym żłobku radośnie, bezpiecznie oraz z uśmiechem na twarzy przekraczało próg naszej placówki.</p>
        </div>
        <div class="about__facility box">
          <div class="icon b-pink">
            <i class="flaticon-runer-silhouette-running-fast"></i>
          </div>
          <h2>Aktywności</h2>
          <p>Wspieramy indywidualny rozwój wszystkich dzieci. Nasz plan tygodniowy jest wypełniony zajęciami tematycznymi, a nasz żłobek często odwiedzają ciekawi goście zajmujący się cie dziedzinami życia.</p>
        </div>
      </div>
    </div>
    <div class="about__details box">
      <div class="about__details__text">
        <h1>Zapisy</h1>
        <p>Do żłobka Akuku dzieci przyjmowane są przez cały rok, w zależności od wolnych miejsc. Aby ułatwić proces rezerwacji miejsca, osoby zainteresowane prosimy o:</p>
        <ul>
          <li>Wypełnienie formularza zgłoszeniowego, będącego gwarancją rezerwacji miejsca</li>
          <li>Odesłanie go na adres mailowy</li>
          <li>Uiszczenie opłaty wpisowej w wysokości 39 złotych</li>
        </ul>
      </div>
      <div class="about__details__image"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about__facilities {
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
}

.about__facility {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about__details__text p {
  text-align: justify;
}

.about__details li {
  text-align: left;
}

.about__details__image {
  display: none;
  width: 50%;
  padding-top: 30%;
  background-image: url("https://images.unsplash.com/flagged/photo-1551887373-6edba6dacbb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
  background-size: cover;
  background-position: center;
  margin-top: 2rem;
  margin-left: 5%;
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
  }
}
</style>