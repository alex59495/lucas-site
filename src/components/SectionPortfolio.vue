<template>
  <div class="section" id="portfolio">
    <div class="title">
      {{ title }}
    </div>
    <div class="container-video" v-for="video in videos" :key="video.url">
      <Video :video="video"/>
    </div>
    <div class='video' ></div>
  </div>

</template>

<script>
import Video from './Video.vue';

export default {
  name: 'SectionPortfolio',
  props: {
    title: String
  },
  components: {
    Video
  },
  data: function () {
  return {
      videos: [
        {url: 'https://www.youtube.com/embed/n3xCSELdbn0', name: 'Lena', description: 'Composed, produced, recorded, mixed and mastered by Lucas De Oliveira at Themis Productions'},
        {url: 'https://www.youtube.com/embed/YkUQ-UShRhE', name: 'Side By Side', description: `Composed, produced and recorded by Lucas De Oliveira at Themis Productions \n Mixed and mastered by Romain Saule at 90 Reasons Music Production`},
        {url: 'https://www.youtube.com/embed/pedqe2ZXB0A', name: 'Casteway', description: 'Composed, produced, recorded, mixed and mastered by Lucas De Oliveira at Themis Productions'}
      ]
    }
  }
}
</script>

<style scoped>
  .section {
    margin: 5% 10%;
  }

  .title {
    font-size: 36px;
    color: black;
    text-align: left;
    position: relative;
    margin-bottom: 10px;
  }

  .title:before{
    content : "";
    position: absolute;
    left    : 0;
    bottom  : 0;
    width   : 50%;  /* or 100px */
    border-bottom: 2px solid black;
  }

  .container-video {
    
  }
</style>