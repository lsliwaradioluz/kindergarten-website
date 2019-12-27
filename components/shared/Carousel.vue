<template>
  <div class="carousel">
    <div class="carousel-navdots" v-if="!inactive">
      <div 
        class="carousel-navdot" 
        :class="{ 'active': n == currentPage + 1 }" 
        v-for="n in numberOfPages" 
        :key="n"
        @click="scrollWithNavdots(n)"></div>
    </div>
    <div 
      class="carousel-wrapper"
      :class="{ 'inactive': inactive }"
      ref="wrapper" 
      v-on="!inactive ? { touchstart: onTouchStart, touchmove: onTouchMove, touchend: onTouchEnd } : {}">
        <slot>
          <div>123</div>
        </slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      inactive: Boolean,
      columns: Array
    },
    data() {
      return {
        currentPage: 0,
        numberOfColumns: 1,
        elementWidth: null,
        containerWidth: null,
        moveStart: null, 
        move: null, 
        currentTranslate: 0, 
        length: this.$slots.default.length,
        viewportMatched: null
      }
    },
    computed: {
      maxScrollLeft() {
        return this.currentTranslate == 0 ? true : false;
      },
      maxScrollRight() {
        if (Math.abs(this.currentTranslate) == (this.containerWidth / this.numberOfColumns) * (this.length - this.numberOfColumns)) {
          return true;
        } else {
          return false
        }
      }, 
      sortedColumns() {
        if (this.columns) {
          return this.columns.sort((a, b) => {
            return a[0] - b[0]
          });
        } else {
          return [1, 1];
        }
      }, 
      numberOfPages() {
        return this.length - (this.numberOfColumns - 1);
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
        this.$refs.wrapper.style.transform = `translateX(${-this.$slots.default[0].elm.offsetWidth*(index-1)}px)`;
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
            fullMove = -this.$slots.default[0].elm.offsetWidth;
            this.currentPage--
          } else if (this.move < 0 && this.maxScrollRight == false) {
            this.currentPage++
            fullMove = this.$slots.default[0].elm.offsetWidth;
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
      },
      setColumnNumber() {
        this.containerWidth = this.$refs.wrapper.offsetWidth;
        this.viewportMatched = false;
        this.sortedColumns.forEach(cur => {
          if (window.matchMedia(`(min-width: ${cur[0]}px)`).matches) {
            this.viewportMatched = true;
            this.numberOfColumns = cur[1];
            this.$refs.wrapper.childNodes.forEach(cur => {
              cur.style.width = `${100/this.numberOfColumns}%`;
            });
          }
        });

        if (!this.viewportMatched) { 
          this.numberOfColumns = 1;
          this.$refs.wrapper.childNodes.forEach(cur => {
            cur.style.width = '100%';
          });
        }
      },
    },
    mounted() {
      this.setColumnNumber();
      window.addEventListener('resize', () => {
        this.setColumnNumber();
      });
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

  .active {
    background-color: #05AA19;
  }

  .carousel-wrapper {
    display: flex;
    justify-content: space-between;
    padding-top: 2rem;
  }

  .carousel-wrapper > div {
    width: 100%;
    flex-shrink: 0;
  }

  .scrolling {
    transition: transform 0.5s;
  }

  .inactive {
    flex-direction: column;
  }
  
</style>