<template>
  <div class="preview">
    <div class="title">
      {{video.name}}
    </div>
    <iframe  
      height="315" 
      :src="video.url"
      :title="video.name" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
    >
    </iframe>
    <div class="description">
      {{video.description}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoPreview',
  props: {
    video: Object
  }
}
</script>

<style>

  iframe {
    width: 100%;
  }

  .preview {
    width: 80%;
    margin: auto;
  }

  .title {
    margin-bottom: 10px;
    font-weight: 600;
  }

  .description {
    margin: 30px 10px;
    font-style: italic;
    font-size: 12px;
    text-align: justify;
  }
</style>