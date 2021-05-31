<template>
  <div class="title">
    {{video.name}} - Monchrome
  </div>
  <iframe 
    frameborder="0" 
    allowfullscreen="1" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    title="YouTube video player" 
    width="100%" 
    height="100%" 
    :src="video.url"
    :alt="video.name"
  >
  </iframe>
  <div class="description">
    {{video.description}}
  </div>
</template>

<script>
export default {
  name: 'Video',
  props: {
    video: Object
  }
}
</script>

<style>
  .title {
    margin-bottom: 10px;
  }
</style>