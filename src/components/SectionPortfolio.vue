<template>
  <div class="section" id="portfolio">
    <div class="title">
      {{ title }}
    </div>
    <div class="container-grid">
      <div class="preview-video">
        <VideoPreview :video="video"/>
      </div>
      <div class="list">
        <div class="musics">My musics</div>
        <div class="video-list" v-for="(video, index) in videos" :key="video.url">
          <div class="card-video" v-on:click=updateVideoPreview(index)>
            <img :src="require('@/assets/' + video.image)" :alt="video.image">
            <div class="video-title">
              {{video.name}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import VideoPreview from './VideoPreview.vue';

export default {
  name: 'SectionPortfolio',
  props: {
    title: String
  },
  components: {
    VideoPreview
  },
  data: function () {
  return {
      videos: [
        {url: 'https://www.youtube.com/embed/n3xCSELdbn0', image: 'leona.jpg', name: 'Leona - Monochrome', description: 'Composed, produced, recorded, mixed and mastered by Lucas De Oliveira at Themis Productions'},
        {url: 'https://www.youtube.com/embed/YkUQ-UShRhE', image: 'sidebyside.jpg', name: 'Side By Side - Monochrome', description: `Composed, produced and recorded by Lucas De Oliveira at Themis Productions \n Mixed and mastered by Romain Saule at 90 Reasons Music Production`},
        {url: 'https://www.youtube.com/embed/pedqe2ZXB0A', image: 'casteway.jpg', name: 'Casteway - Monochrome', description: 'Composed, produced, recorded, mixed and mastered by Lucas De Oliveira at Themis Productions'},
        {url: 'https://www.youtube.com/embed/fnNJHQT00-U', image: 'basement.jpg', name: 'Basement Girasol - Monochrome', description: ''}
      ],
      selectedVideo: 0,
    }
  },
  methods: {
    updateVideoPreview(index) {
      this.selectedVideo = index
    }
  },
  computed: {
    video() {
      return this.videos[this.selectedVideo]
    }
  }
}
</script>

<style scoped>

  .preview-video {
    padding: 0 10px;
  }

  .card-video {
    margin: 10px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .card-video:hover {
    opacity: 0.8;
  }

  .card-video img { 
    width: 90%;
  }

  .video-title {
    align-self: center;
  }

  .container-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
  .section {
    margin: 5% 10%;
  }

  .card-video:hover {
    cursor: pointer;
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