<template>
  <figure>
    <figcaption>
      <div class="title">
        {{mp3.name}}
      </div>
    </figcaption>
    <img :src="require('@/assets/img/' + mp3.image)" alt="">
    <audio
        controls
        :src="require('@/assets/mp3/' + mp3.url)">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
    <div class="description">
      {{mp3.description}}
    </div>
  </figure>
</template>

<script>
export default {
  name: 'Mp3Preview',
  props: {
    mp3: Object
  }
}
</script>

<style>
  figure {
    width: 80%;
    margin: auto;
  }

  figure img {
    width: 100%;
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