<template>
  <div class="banner">
    <div class="banner-title" id="themis">
      <div class="letter" v-for="letter in 'THEMIS'" :key='letter' v-on:mouseover="hoverLetter" v-on:mouseleave="leaveLetter">
        {{letter}}
      </div>
    </div>
    <div class="banner-title" id="production">
      <div class="letter" v-for="letter in 'PRODUCTION'" :key='letter' v-on:mouseover="hoverLetter" v-on:mouseleave="leaveLetter">
        {{letter}}
      </div>
    </div>
    <transition name="fade">
      <div class="back-font" v-if="showBackLetter">{{backLetter}}</div>
    </transition>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        backLetter: '',
        showBackLetter: false
      }
    },
    methods: {
    hoverLetter(e) {
      const currentDiv = e.currentTarget;
      const letter = currentDiv.textContent
      const style = window.getComputedStyle(currentDiv, null).getPropertyValue('font-size');
      var fontSize = parseFloat(style); 
      currentDiv.style.fontSize = fontSize * 2 + 'px'
      this.backLetter = letter
      this.showBackLetter = true
    },
    leaveLetter(e) {
      const currentDiv = e.currentTarget;
      currentDiv.style.fontSize = 62 + 'px'
      this.backLetter = ''
      this.showBackLetter = false
    }
  },
  }  
</script>

<style scoped>
  .banner {
    font-size: 62px;
    color: white;
    background-color: black;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .banner-title {
    display: flex;
    align-items: center;
    z-index: 1;
  }

  #themis {
    margin-right: 30px;
  }

  @media(max-width: 750px) {
    .banner {
      display: block;
    }
  }

  .letter {
    transition: 1s;
  }

  .back-font {
    position: absolute;
    font-size: 400px;
    opacity: 0.5;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .letter:hover {
    cursor: pointer;
  }

</style>