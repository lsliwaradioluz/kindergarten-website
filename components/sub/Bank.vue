<template>
  <div class="bank main">
    <div class="bank__image" :style="{ backgroundImage: `url('${bank.image.url}')`}" ></div>
    <div class="bank__content box" v-html="$md.render(bank.content)"></div>
  </div>
</template>

<script>
export default {
  props: ['bank']
}
</script>

<style scoped>
  .bank {
    padding-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .bank__image {
    display: none;
  }

  .bank__content {
    padding-top: 0;
  }
</style>