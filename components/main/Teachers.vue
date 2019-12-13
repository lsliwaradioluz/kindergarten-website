<template>
  <div class="teachers main">
    <h1 class="teachers-header header-primary">
      Poznaj naszych nauczycieli
    </h1>
    <div class="teacher box">
      <div class="teacher__image"></div>
      <div class="teacher__details box">
        <h2 class="teacher__details-header header-secondary">Janina Buchalska</h2>
        <p class="teacher__details-text text">Nauczyciel Matematyki</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

  .teachers {
    position: relative;
  }

  .teachers::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-image: url('~assets/images/background-blue-bus.png');
    background-size: cover;
    z-index: -1;
  }

  .teachers-header {
    color: white;
    margin-top: 4rem;
  }

  .teachers-header::after {
    text-decoration-color: white;
  }

  .teacher__image {
    height: 60vh;
    width: 100%;
    background-image: url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80');
    background-size: cover;
    background-position: center;
  }

  .teacher__details-text {
    margin-top: 0.2rem;
    font-size: 0.9rem;
  }
</style>