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
            Bezpieczeństwo
          </h2>
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
    <div class="about__details box">
      <div>
        <h1 class="about__details-header header-primary">O nas</h1>
        <p class="about__details-text text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        <ul>
          <li class="text"><span class="c-pink">✔ </span>Lorem ipsum dolor sit amet</li>
          <li class="text"><span class="c-green">✔ </span>Ut enim ad minim veniam,</li>
          <li class="text"><span class="c-yellow">✔ </span>Duis aute irure dolor in reprehenderit in voluptate</li>
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