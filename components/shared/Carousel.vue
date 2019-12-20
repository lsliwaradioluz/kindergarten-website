<template>
  <div class="carousel">
    <div class="carousel-navdots" v-if="!inactive">
      <div 
        class="carousel-navdot" 
        :class="{ 'active-page': n == currentPage + 1 }" 
        v-for="n in length" 
        :key="n"
        @click="scrollWithNavdots(n)"></div>
    </div>
    <div 
      class="carousel-wrapper"
      :class="{ inactive: inactive }"
      ref="wrapper" 
      v-on="!inactive ? { touchstart: onTouchStart, touchmove: onTouchMove, touchend: onTouchEnd } : {}">
        <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      inactive: Boolean
    },
    data() {
      return {
        currentPage: 0,
        moveStart: null, 
        move: null, 
        currentTranslate: 0, 
        length: this.$slots.default.length
      }
    },
    computed: {
      maxScrollLeft() {
        if (this.currentTranslate == 0) {
          return true;
        } else {
          return false
        }
      },
      maxScrollRight() {
        if (Math.abs(this.currentTranslate) == this.$refs.wrapper.offsetWidth * (this.length - 1)) {
          return true;
        } else {
          return false
        }
      }
    },
    methods: {
      animateCarousel() {
        this.$refs.wrapper.classList.add('scrolling');
        setTimeout(() => {
          this.$refs.wrapper.classList.remove('scrolling');
        }, 500);
      },
      scrollWithNavdots(index) {
        this.animateCarousel();
        this.$refs.wrapper.style.transform = `translateX(${-this.$refs.wrapper.offsetWidth*(index-1)}px)`;
        this.currentTranslate = parseFloat(this.$refs.wrapper.style.transform.slice(11, -3));
        this.currentPage = index - 1;
      },
      onTouchStart() {
        this.moveStart = event.touches[0].screenX;
      },
      onTouchMove() {
        let translate;
        this.move = event.touches[0].screenX - this.moveStart;

        if (this.move < 0 && this.maxScrollRight || this.move > 0 && this.maxScrollLeft) {
          translate = this.currentTranslate + this.move*0.2;
        } else {
          translate = this.currentTranslate + this.move*0.5;
        }
        this.$refs.wrapper.style.transform = `translateX(${translate}px)`;
      }, 
      onTouchEnd() {
        let fullMove, translate;
        this.$refs.wrapper.classList.add('scrolling');
        this.animateCarousel();

        if (Math.abs(this.move) > 40) {
          if (this.move > 0 && this.maxScrollLeft == false) {
            fullMove = -this.$refs.wrapper.offsetWidth;
            this.currentPage--
          } else if (this.move < 0 && this.maxScrollRight == false) {
            this.currentPage++
            fullMove = this.$refs.wrapper.offsetWidth;
          } else {
            fullMove = 0;
          }
          translate = this.currentTranslate - fullMove;
        } else {
          translate = this.currentTranslate;
        }
        this.$refs.wrapper.style.transform = `translateX(${translate}px)`;

        this.currentTranslate = parseFloat(this.$refs.wrapper.style.transform.slice(11, -3));
        this.moveStart = null;
        this.move = null;
      }
    } 
  }
</script>

<style scoped>

  .carousel {
    overflow-x: hidden;
  }

  .carousel-navdots {
    display: flex;
    justify-content: center;
  }

  .carousel-navdot {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: gray;
    margin: 0 5px;
    transition: all 0.5s;
  }

  .active-page {
    background-color: #05AA19;
  }

  .carousel-wrapper {
    display: flex;
    justify-content: space-between;
    padding-top: 1rem;
  }

  .carousel-wrapper div {
    flex-shrink: 0;
    width: 100%;
  }

  .scrolling {
    transition: transform 0.5s;
  }

  .inactive {
    flex-direction: column;
  }
</style>