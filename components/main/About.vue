<template>
  <div class="about main">
    <div class="about__facilities">
      <h1 class="header-primary">W Akuku dzieci czują się jak w domu</h1>
      <div class="about__facilities-tabs">
        <div class="about__facilities-tab box">
          <div class="icon b-green">
            <i class="flaticon-shield"></i>
          </div>
          <h2 class="header-secondary">
            Spokojny start
          </h2>
          <p class="text">
            Wiedząc jak ważne dla harmonijnego rozwoju dziecka jest jego poczucie bezpieczeństwa, proponujemy rodzicom stopniowe wprowadzanie maluszka w świat żłobkowy w miarę możliwości czasowych rodziców.
          </p>
        </div>
        <div class="about__facilities-tab box">
          <div class="icon b-yellow">
            <i class="flaticon-teacher"></i>
          </div>
          <h2 class="header-secondary">
            Wychowawcy
          </h2>
          <p class="text">
            W żłobku „A Kuku” nie pracują „panie”, „wychowawczynie” czy „nauczycielki”. Tutaj Waszym dzieckiem opiekują się po prostu ciocie. Chcemy, aby dzieci czuły się w naszym żłobku radośnie, bezpiecznie oraz z uśmiechem na twarzy przekraczało próg naszej placówki. 
          </p>
        </div>
        <div class="about__facilities-tab box">
          <div class="icon b-pink">
            <i class="flaticon-runer-silhouette-running-fast"></i>
          </div>
          <h2 class="header-secondary">
            Aktywności
          </h2>
          <p class="text">
            Wspieramy indywidualny rozwój wszystkich dzieci. Nasz plan tygodniowy jest wypełniony zajęciami tematycznymi, a nasz żłobek często odwiedzają ciekawi goście zajmujący się cie dziedzinami życia.  
          </p>
        </div>
      </div>
    </div>
    <div class="about__details box">
      <div>
        <h1 class="about__details-header header-primary">Zapisy</h1>
        <p class="about__details-text text">Do żłobka Akuku dzieci przyjmowane są przez cały rok, w zależności od wolnych miejsc. Aby ułatwić proces rezerwacji miejsca, osoby zainteresowane prosimy o:</p>
        <ul>
          <li class="text">Wypełnienie formularza zgłoszeniowego, będącego gwarancją rezerwacji miejsca</li>
          <li class="text">Odesłanie go na adres mailowy</li>
          <li class="text">Uiszczenie opłaty wpisowej w wysokości 39 złotych</li>
        </ul>
      </div>
      <div class="about__details-image">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

  .about__facilities-tabs {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
  }

  .about__facilities-tab {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .about__details-text {
    text-align: justify;
  }

  .about__details li {
    text-align: left;
  }

  .about__details-image {
    display: none;
    height: 30vh;
    width: 50%;
    background-image: url('https://images.unsplash.com/flagged/photo-1551887373-6edba6dacbb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
    background-size: cover;
    background-position: center;
  }
</style>