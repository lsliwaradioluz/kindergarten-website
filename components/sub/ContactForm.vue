<template>
  <div class="forms column" ref="form">
    <div class="forms__map" v-if="isContact">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.3652004329683!2d16.888437467313356!3d51.138616242881504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470feaab7dc4f063%3A0xb2ad3dcfc3110d0!2zxbvFgm9iZWsgIkEgS3VrdSI!5e0!3m2!1spl!2spl!4v1576750996433!5m2!1spl!2spl" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    </div>
    <div class="forms__container centered" :class="{ 'green-background': isContact}">
      <form>
        <h2>Skontaktuj się</h2>
        <p>Prosimy o podanie swojego adresu e-mail, abyśmy wiedzieli, gdzie mamy przesłać odpowiedź!</p>
        <input placeholder="Twój adres email" v-model="form.from" type="email" required ref="email" :disabled="loading">
        <input placeholder="Temat" v-model="form.subject" type="text" required :disabled="loading">
        <textarea placeholder="Treść" rows="6" v-model="form.text" required :disabled="loading"></textarea>
        <button ref="formbutton" :disabled="loading" type="submit" class="button b-green" @click.prevent="sendForm">{{ buttonText }}</button>
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

  .forms {
    position: relative;
    padding: 0 0 5rem 0;
  }

  .forms::before {
    content: "";
    width: 100%;
    height: 20rem;
    position: absolute;
    bottom: 0;
    background-image: url('~assets/images/form-after.png');
    background-position: center top;
    background-size: cover;
    z-index: 1;
  }

  .forms__map {
    overflow: hidden;
    padding-top: 100%;
    width: 100%;
    position: relative;
  }
  
  .forms__map iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  .forms__container {
    width: 100%;
    height: 100%;
    padding: 0 5%;
  }

  .green-background {
    background-color: #19AA5F;
  }

  .forms__container form {
    background-color: white;
    box-shadow: 1px 1px 3px 1px #c9c9c9;
    border-radius: 10px;
    padding: 3rem 2rem;
    margin-top: 4rem;
    max-width: 500px;
    z-index: 10;
  }

  .forms h2 {
    text-align: left;
  }

  .forms p {
    text-align: left;
    margin-bottom: 2rem;
  }

  .forms__container input, 
  .forms__container textarea {
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

  .green-background form {
    max-width: 350px;
  }

  @media (min-width: 768px) {
    .forms__map {
      padding-top: 40%;
      position: relative;
      width: 100%;
    }
  }

  @media (min-width: 1024px) {

    .forms {
      flex-direction: row;
      justify-content: center;
      align-items: stretch;
      padding: 5rem 10%;
    }
  }

  @media (min-width: 1200px) {
    .forms {
      padding: 3rem 15% 6rem 15%;
    }
  }
</style>