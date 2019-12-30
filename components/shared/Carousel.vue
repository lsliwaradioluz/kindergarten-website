<template>
  <div class="carousel">
    <div class="carousel-navdots" v-if="isActive">
      <div 
        class="carousel-navdot" 
        :class="{ 'active': n == currentPage + 1 }" 
        v-for="n in numberOfPages" 
        v-show="numberOfPages > 1"
        :key="n"
        ref="navdot"
        @click="scrollWithNavdots(n)"></div>
    </div>
    <div 
      class="carousel-wrapper"
      :class="{ 'inactive': !isActive }"
      ref="wrapper" 
      v-on="isActive ? { touchstart: onTouchStart, touchmove: onTouchMove, touchend: onTouchEnd, mousedown: onTouchStart, mousemove: onTouchMove, mouseup: onTouchEnd } : {}">
        <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      active: { 
        type: Array,
        default: () => [[1, true]]
      },
      columns: { 
        type: Array,
        default: () => [[1, 1]]
      }
    },
    data() {
      return {
        currentPage: 0,
        numberOfColumns: 1,
        moveStart: null, 
        move: null, 
        currentTranslate: 0, 
        length: this.$slots.default.length,
        viewportColumnsMatched: null, 
        isActive: null, 
        mousedown: false
      }
    },
    computed: {
      maxScrollLeft() {
        return this.currentTranslate == 0 ? true : false;
      },
      numberOfPages() {
        return this.length - (this.numberOfColumns - 1);
      },
      sortedColumns() {
        return this.columns.sort((a, b) => {
          return a[0] - b[0];
        });
      }, 
      sortedActive() {
        return this.active.sort((a, b) => {
          return a[0] - b[0];
        })
      },
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
        if (event.type == 'touchstart') {
          this.moveStart = event.touches[0].screenX
        } else {
          this.moveStart = event.screenX;
          this.mousedown = true;
        }
      },
      onTouchMove() {
        let translate;
        const maxScrollRight = this.$refs.navdot[this.$refs.navdot.length - 1].classList.contains('active');

        if (event.type == 'touchmove') {
          this.move = event.touches[0].screenX - this.moveStart;
        } else if (event.type == 'mousemove' && this.mousedown == true) {
          this.move = event.screenX - this.moveStart
        }

        if (this.move < 0 && maxScrollRight || this.move > 0 && this.maxScrollLeft) {
          translate = this.currentTranslate + this.move*0.2;
        } else {
          translate = this.currentTranslate + this.move*0.5;
        }
        this.$refs.wrapper.style.transform = `translateX(${translate}px)`;
      }, 
      onTouchEnd() {
        let fullMove, translate;
        const maxScrollRight = this.$refs.navdot[this.$refs.navdot.length - 1].classList.contains('active');
        this.$refs.wrapper.classList.add('scrolling');
        this.animateCarousel();

        if (Math.abs(this.move) > 40) {
          if (this.move > 0 && this.maxScrollLeft == false) {
            fullMove = -this.$slots.default[0].elm.offsetWidth;
            this.currentPage--
          } else if (this.move < 0 && !maxScrollRight) {
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
        this.mousedown = false;
        this.moveStart = null;
        this.move = null;
      },
      setColumns() {
        this.viewportColumnsMatched = false;
        this.sortedColumns.forEach(cur => {
          if (window.matchMedia(`(min-width: ${cur[0]}px)`).matches) {
            this.viewportColumnsMatched = true;
            this.numberOfColumns = cur[1];
            this.$refs.wrapper.childNodes.forEach(cur => {
              cur.style.width = `${100/this.numberOfColumns}%`;
            });
          }
        });

        if (!this.viewportColumnsMatched) { 
          this.numberOfColumns = 1;
          this.$refs.wrapper.childNodes.forEach(cur => {
            cur.style.width = '100%';
          });
        }
      },
      setActive() {
        this.sortedActive.forEach(cur => {
          if (window.matchMedia(`(min-width: ${cur[0]}px)`).matches) {
            this.isActive = cur[1];
          }
        });
      }
    },
    mounted() {
      this.setColumns();
      this.setActive();
      window.addEventListener('resize', () => {
        this.setColumns();
        this.setActive();
      });
    }
  }
</script>

<style scoped>

  .carousel {
    overflow-x: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
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
    cursor: pointer;
  }

  .active {
    background-color: #05AA19;
  }

  .carousel-wrapper {
    display: flex;
    justify-content: space-between;
    padding-top: 2rem;
    cursor: grab;
  }

  .carousel-wrapper:active {
    cursor: grabbing;
  }

  .carousel-wrapper > div {
    width: 100%;
    flex-shrink: 0;
    position: relative;
  }

  .scrolling {
    transition: transform 0.5s;
  }

  .inactive {
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    .inactive {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
  }
  
</style>