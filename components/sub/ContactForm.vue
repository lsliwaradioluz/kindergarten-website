<template>
  <div class="contact-forms" ref="form">
    <div class="contact-forms__map" v-if="isContact">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.3652004329683!2d16.888437467313356!3d51.138616242881504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470feaab7dc4f063%3A0xb2ad3dcfc3110d0!2zxbvFgm9iZWsgIkEgS3VrdSI!5e0!3m2!1spl!2spl!4v1576750996433!5m2!1spl!2spl" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    </div>
    <div class="contact-forms__background" :class="{ 'green-background': isContact}">
      <form class="contact-forms__container">
        <h2 class="contact-forms__header header-secondary">Skontaktuj się</h2>
        <p class="contact-forms__text text">Prosimy o podanie swojego adresu e-mail, abyśmy wiedzieli, gdzie mamy przesłać odpowiedź!</p>
        <input class="contact-form" placeholder="Twój adres email" v-model="form.from" type="email" required ref="email" :disabled="loading">
        <input class="contact-form" placeholder="Temat" v-model="form.subject" type="text" required :disabled="loading">
        <textarea class="contact-form" placeholder="Treść" rows="6" v-model="form.text" required :disabled="loading"></textarea>
        <button ref="formbutton" :disabled="loading" type="submit" class="contact-form__button button-yellow b-green" @click.prevent="sendForm">{{ buttonText }}</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      isContact: Boolean
    },
    data() {
      return {
        form: {
          to: 'lsliwaradioluz@gmail.com',
          from: '',
          subject: '',
          text: ''
        },
        loading: false, 
        buttonText: 'Wyślij'
      }
    },
    methods: {
      sendForm() {
        this.loading = true;
        const endpoint = process.env.environment == 'development' ? 'http://localhost:1337/email' : 'https://akuku-backend.herokuapp.com/email';
        this.$axios.$post(endpoint, this.form)
          .then(res => {
            this.buttonText = 'Wysłano!';
            setTimeout(() => {
              this.loading = false;
              this.buttonText = 'Wyślij';
              this.form.from = '';
              this.form.subject = '';
              this.form.text = '';
            }, 2000);
          })
          .catch(err => {
            this.buttonText = 'chujemuje!';
            setTimeout(() => {
              this.loading = false;
              this.buttonText = 'Wyślij';
              this.form.from = '';
              this.form.subject = '';
              this.form.text = '';
            }, 2000);
          });
      }
    }
  }
</script>

<style scoped>

  .contact-forms {
    display: flex;
    flex-direction: column;
    align-items: center; 
    position: relative;
    padding: 0 0 5rem 0;
  }

  .contact-forms::before {
    content: "";
    width: 100%;
    height: 20rem;
    position: absolute;
    bottom: 0;
    background-image: url('~assets/images/contact-form-after.png');
    background-position: center top;
    background-size: cover;
    z-index: 1;
  }

  .contact-forms__map {
    overflow: hidden;
    padding-top: 100%;
    width: 100%;
    position: relative;
  }
  
  .contact-forms__map iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  .contact-forms__background {
    width: 100%;
    height: 100%;
    padding: 0 5%;
    display: flex;
    justify-content: center;
  }

  .green-background {
    background-color: #19AA5F;
  }

  .green-background .contact-forms__container {
    max-width: 300px;
  }

  .contact-forms__container {
    background-color: white;
    box-shadow: 1px 1px 3px 1px #c9c9c9;
    border-radius: 10px;
    padding: 3rem 2rem;
    margin-top: 4rem;
    max-width: 500px;
    z-index: 10;
  }

  .contact-forms__header {
    text-align: left;
  }

  .contact-forms__text {
    text-align: left;
    margin-bottom: 2rem;
  }

  .contact-form {
    width: 100%;
    border: none;
    margin: 1rem 0;
    padding-bottom: 0.5rem;
    font-family: inherit;
    transition: all 0.3s;
    resize: none;
    background: none;
    border-bottom: 1px solid rgb(158, 158, 158);
    outline: none;
  }

  @media (min-width: 768px) {
    .contact-forms__map {
      padding-top: 40%;
      position: relative;
      width: 100%;
    }
  }

  @media (min-width: 1024px) {

    .contact-forms {
      flex-direction: row;
      justify-content: center;
      align-items: stretch;
    }

    .contact-forms {
      padding: 5rem 10%;
    }
  }

  @media (min-width: 1200px) {
    .contact-forms {
      padding: 3.125rem 15%;
    }
  }
</style>