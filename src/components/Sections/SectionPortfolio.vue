<template>
  <div class="section" id="portfolio">
    <div class="title">
      {{ title }}
    </div>
    <div class="container-grid">
      <div class="preview-video" v-if="content.type === 'video'">
        <VideoPreview :video="content"/>
      </div>
      <div class="preview-mp3" v-else-if="content.type === 'mp3'">
        <Mp3Preview :mp3="content"/>
      </div>
      <div class="list">
        <div class="video-list">
          <div class="card-video" v-for="(content, index) in contents" :key="content.url" v-on:click=updateContentPreview(index)>
            <img :src="require('@/assets/img/' + content.image)" :alt="content.image">
            <div class="video-content">
              <div class="video-title">
                {{content.name}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import VideoPreview from '../Preview/VideoPreview.vue';
import Mp3Preview from '../Preview/Mp3Preview.vue';


export default {
  name: 'SectionPortfolio',
  props: {
    title: String
  },
  components: {
    VideoPreview,
    Mp3Preview
  },
  data: function () {
  return {
      contents: [
        {type: 'mp3', url: 'cardinal_sin.wav', image: 'district7.jpg', name: 'Cardinal Sin - Versailles', description: ''},
        {type: 'mp3', url: 'the_place_we_used_to_called_home.wav', image: 'district7.jpg', name: 'The place we used to call home - District 7', description: 'Mixed and mastered by Lucas De Oliveira at Themis Productions. This track is used with permission by District 7and URM Academy. The original production was done by Vasco Ramos, mix was done by Marco Cipriano. This new mix is an unofficial version and not on the actual release'},
        {type: 'video', url: 'https://www.youtube.com/embed/pedqe2ZXB0A', image: 'castaway.jpg', name: 'Castaway - Monochrome', description: 'Composed, produced, recorded, mixed and mastered by Lucas De Oliveira at Themis Productions'},
        {type: 'video', url: 'https://www.youtube.com/embed/YkUQ-UShRhE', image: 'sidebyside.jpg', name: 'Side By Side - Monochrome', description: `Composed, produced and recorded by Lucas De Oliveira at Themis Productions \n Mixed and mastered by Romain Saule at 90 Reasons Music Production`},
        {type: 'video', url: 'https://www.youtube.com/embed/n3xCSELdbn0', image: 'leona.jpg', name: 'Leona - Monochrome', description: 'Composed, produced, recorded, mixed and mastered by Lucas De Oliveira at Themis Productions'},
        {type: 'video', url: 'https://www.youtube.com/embed/fnNJHQT00-U', image: 'basement.jpg', name: 'Basement Girasol - Monochrome', description: ''},

      ],
      selectedContent: 0,
    }
  },
  methods: {
    updateContentPreview(index) {
      this.selectedContent = index
    }
  },
  computed: {
    content() {
      return this.contents[this.selectedContent]
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
    max-height: 800px;
    overflow: auto;
  }

  @media( max-width: 991px) {
    .video-list {
      max-height: 300px;
      overflow: auto;
    }
  }

  .preview-video, .preview-mp3 {
    padding: 0 10px;
    margin-top: 5%;
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