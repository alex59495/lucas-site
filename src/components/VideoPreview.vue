<template>
  <div class="title">
    {{video.name}}
  </div>
  <iframe 
    width="560" 
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
  .title {
    margin-bottom: 10px;
    font-weight: 600;
  }

  .description {
    padding: 0 10px;
  }
</style>