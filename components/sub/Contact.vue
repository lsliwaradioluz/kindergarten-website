<template>
  <div class="contacts main">
    <div class="contacts__container box">
      <div class="contact box" v-for="contact in contacts" :key="contact.id">
        <div class="contact__icon icon">
          <i :class="assignIcon(contact.name)"></i>
        </div>
        <h2 class="contact__header header-secondary">{{ contact.name }}</h2>
        <p class="contact__text text" v-for="entry in contact.entries" :key="entry.id">{{ entry.entry }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['contacts'], 
    methods: {
      assignIcon(contactName) {
        switch(contactName) {
          case 'Adres': 
            return 'flaticon-location-pin'
            break
          case 'Telefon': 
            return 'flaticon-viber'
            break
          case 'Email':
            return 'flaticon-black-back-closed-envelope-shape';
        }
      }
    }
  }
</script>

<style scoped>

  .contacts__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .contact {
    height: 17rem;
    width: 100%;
    max-width: 256px;
    margin-bottom: 2rem;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 0 10px 2px #f2f2f2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .contact:nth-child(1) .contact__icon {
    background-color: #FA67BF;
  }

  .contact:nth-child(2) .contact__icon {
    background-color: #FEB836;
  }

  .contact:nth-child(3) .contact__icon {
    background-color: #05AA19;
  }

  .contact__header {
    margin-bottom: 1rem;
  }

  .contact__text {
    margin: 0;
  }

  [class*="flaticon-"]:before {
    font-size: 40px;
  }

  @media (min-width: 1024px) {
    
    .contacts__container {
      flex-direction: row;
      justify-content: space-between;
    }

    .contact {
      width: 32%;
    }
  }
</style>