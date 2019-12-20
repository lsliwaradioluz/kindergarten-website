<template>
  <div class="catering main">
    <div class="catering__content box" v-html="$md.render(catering.content)"></div>
  </div>
</template>

<script>
export default {
  props: ['catering']
}
</script>

<style scoped>

  .catering {
    padding-top: 0;
  }


</style>