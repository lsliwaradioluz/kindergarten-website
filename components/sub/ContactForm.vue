<template>
  <div class="contact-forms main" :class="{ 'green-background': isContact}" ref="form">
    <div class="contact-forms__map" >
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.3652004329683!2d16.888437467313356!3d51.138616242881504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470feaab7dc4f063%3A0xb2ad3dcfc3110d0!2zxbvFgm9iZWsgIkEgS3VrdSI!5e0!3m2!1spl!2spl!4v1576750996433!5m2!1spl!2spl" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    </div>
    <form class="contact-forms__container">
      <h2 class="contact-forms__header header-secondary">Skontaktuj się</h2>
      <p class="contact-forms__text text">Prosimy o podanie swojego adresu e-mail, abyśmy wiedzieli, gdzie mamy przesłać odpowiedź!</p>
      <input class="contact-form" placeholder="Twój adres email" v-model="form.from" type="email" required ref="email" :disabled="loading">
      <input class="contact-form" placeholder="Temat" v-model="form.subject" type="text" required :disabled="loading">
      <textarea class="contact-form" placeholder="Treść" rows="6" v-model="form.text" required :disabled="loading"></textarea>
      <button ref="formbutton" :disabled="loading" type="submit" class="contact-form__button button-yellow b-green" @click.prevent="sendForm">Wyślij</button>
    </form>
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
        loading: false
      }
    },
    methods: {
      sendForm() {
        this.loading = true;
        const endpoint = process.env.environment == 'development' ? 'http://localhost:1337/email' : 'https://akuku-backend.herokuapp.com/email';
        this.$axios.$post(endpoint, this.form)
          .then(res => {
            this.$refs.formbutton.innerText = 'Wysłano!';
            setTimeout(() => {
              this.loading = false;
              this.$refs.formbutton.innerText = 'Wyślij';
              this.form.from = '';
              this.form.subject = '';
              this.form.text = '';
            }, 2000);
          })
          .catch(err => {
            this.$refs.formbutton.innerText = 'Błąd!';
            setTimeout(() => {
              this.loading = false;
              this.$refs.formbutton.innerText = 'Wyślij';
              this.form.from = '';
              this.form.subject = '';
              this.form.text = '';
            }, 2000);
          });
      }
    },
    mounted() {
      if (this.$route.params.focusForm) {
        this.$refs.email.focus();
        setTimeout(() => {
          this.$refs.form.scrollIntoView({ behavior: 'smooth' });
        });
      }
    }
  }
</script>

<style scoped>

  .green-background::after {
    content: "";
    height: 60%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url('~assets/images/background-contact.png');
    background-position: bottom center;
    z-index: -1;
  }

  .contact-forms {
    position: relative;  
    padding-bottom: 5rem;
  }

  .contact-forms__map {
    overflow: hidden;
    padding: 2rem;
    padding-bottom: 60%;
    position:relative;
    width: 100%;
    box-shadow: 1px 0 3px 1px #c9c9c9;
    margin-bottom: -7px;
  }
  
  .contact-forms__map iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    
  }

  .contact-forms__header {
    text-align: left;
  }

  .contact-forms__text {
    text-align: left;
    margin-bottom: 2rem;
  }

  .contact-forms__container {
    width: 100%;
    background-color: white;
    z-index: 2;
    box-shadow: 1px 1px 3px 1px #c9c9c9;
    border-radius: 10px;
    padding: 3rem 2rem;
  }

  .contact-form {
    display: block;
    width: 100%;
    border: none;
    margin: 1rem 0;
    padding-bottom: 0.5rem;
    font-family: inherit;
    transition: all 0.3s;
    resize: none;
    background: none;
    border-bottom: 1px solid rgb(158, 158, 158);
  }

  .contact-form:focus {
    outline: none;
  }
</style>