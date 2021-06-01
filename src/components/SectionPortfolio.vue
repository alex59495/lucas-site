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
        <div class="video-list">
          <div class="card-video" v-for="(video, index) in videos" :key="video.url" v-on:click=updateVideoPreview(index)>
            <img :src="require('@/assets/' + video.image)" :alt="video.image">
            <div class="video-content">
              <div class="video-title">
                {{video.name}}
              </div>
              <div class="video-description">
                {{video.description}}
              </div>
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

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: white;
}

::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(34, 34, 34);
}

.musics {
    font-weight: 700;
    margin-bottom: 30px;
  }

  @media( max-width: 991px) {
    .musics {
      margin-top: 30px;
    }
  }

  .video-list {
    max-height: 500px;
    overflow: auto;
  }

  @media( max-width: 991px) {
    .video-list {
      max-height: 300px;
      overflow: auto;
    }
  }

  .preview-video {
    padding: 0 10px;
  }

  .card-video {
    margin: 10px 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .card-video:hover {
    opacity: 0.8;
  }

  .card-video img { 
    width: 90%;
  }

  .video-content {
    text-align: left;
    margin: 10px 10px;
  }

  .video-title {
    font-weight: 600;
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .video-description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .container-grid {
    display: grid;
    grid-template-columns: 2fr 400px;
  }

  @media (max-width: 991px) {
    .container-grid {
      display: block;
    }
  }

  .section {
    margin: 50px 10%;
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
</style>