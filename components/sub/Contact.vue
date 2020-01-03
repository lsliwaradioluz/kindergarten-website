<template>
  <div class="contacts main">
    <div class="contacts__container box column">
      <div class="contact box column" v-for="contact in contacts" :key="contact.id">
        <div class="icon">
          <i :class="assignIcon(contact.name)"></i>
        </div>
        <h2>{{ contact.name }}</h2>
        <p v-for="entry in contact.entries" :key="entry.id">{{ entry.entry }}</p>
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

  .contact {
    height: 17rem;
    width: 100%;
    max-width: 256px;
    margin-bottom: 2rem;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 0 10px 2px #f2f2f2;
  }

  .contact:nth-child(1) .icon {
    background-color: #FA67BF;
  }

  .contact:nth-child(2) .icon {
    background-color: #FEB836;
  }

  .contact:nth-child(3) .icon {
    background-color: #05AA19;
  }

  .contact h2 {
    margin-bottom: 0.5rem;
  }

  .contact p {
    margin: 0;
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