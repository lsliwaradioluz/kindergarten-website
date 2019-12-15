<template>
  <div class="opinions main">
    <h1 class="opinions-header header-primary">Co mówią rodzice</h1>
    <div class="opinion box">
      <div class="opinion__image"></div>
      <div class="opinion__details">
        <p class="opinion__details-text text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <h2 class="opinion__details-caption header-secondary">Maria Peszek</h2>
        <p class="opinion__details-subcaption text">mama Jasia</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

  .opinion {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .opinion__image {
    height: 80vw;
    width: 80vw;
    margin-bottom: 1rem;
    border-radius: 50%;
    background-image: url('https://images.unsplash.com/photo-1564156280315-1d42b4651629?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=976&q=80');
    background-size: cover;
    background-position: center;
  }

  .opinion__details-text {
    text-align: justify;
  }

  .opinion__details-caption {
    text-align: right;
  }

  .opinion__details-subcaption {
    margin-top: 0;
    text-align: right;
  }

</style>