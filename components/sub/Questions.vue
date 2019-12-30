<template>
  <div class="questions main">
    <div class="question box" v-for="(question, index) in questions" :key="question.id">
      <div class="question__number">
        <h1 class="header-primary">{{ index + 1 | addZero }}</h1>
      </div>
      <div class="question__content">
        <h2 class="question__content-header header-secondary">{{ question.question }}</h2>
        <p class="question__content-text text">{{ question.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['questions'], 
  filters: {
    addZero(value) {
      if (value < 10) {
        return `0${value}`
      } else {
        return value
      }
    }
  }
}
</script>

<style scoped>

  .questions {
    display: flex;
    flex-direction: column;
  }

  .question {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .question__number {
    padding: 1rem;
    border-radius: 50%;
    border: 0.5px solid rgb(212, 212, 212);
    margin-bottom: 1rem;
  }

  .question__number h1 {
    margin: 0;
  }
  
  .question__number h1::after {
    display: none;
  }

  .question__content-text {
    text-align: justify;
  }

  @media (min-width: 1024px) {
    .questions {
      flex-direction: row;
    }

    .question {
      width: 50%;
      flex-direction: row;
    }

    .question__content {
      padding-left: 2rem;
    }

    .question__content-header {
      text-align: left;
    }
  }
</style>