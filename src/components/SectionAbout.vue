<template>
  <div class="section" id="about">
    <div class="title">
      {{ title }}
    </div>
    <div class="text-about">
      <p>Hi ! I run this production & mixing facility from Rio de Janeiro, Brazil. My goal is to provide the highest level of musical quality to those seeking it in France, Brazil and elsewhere.</p>
      <p><b>Composition & Arrangement</b> - I can help you achieve your musical vision from inception to completion in a fully digital manner, assisting you in every step of the songwriting process.</p>
      <p><b>Guitar Session Playing</b> - Quality guitar parts tailored to your needs. I can provide both DI and/or re-amplified signals.</p>
      <p><b>Programming</b> - Highly realistic midi parts for virtual instruments, notably drums, bass and keys. I always spend the time necessary for these parts to sound great yet human.</p>
      <p><b>Editing & Tuning</b> - You can send me already recorded tracks, be it vocals, guitars, bass or else. They will be edited to a professional standard.</p>
      <p><b>Mixing</b> - Benefiting from several years of mixing experience, I will dedicate my time to take your songs a step forward.</p>   
    </div>
    <p>-</p>
    <p>Lucas De Oliveira</p>
  </div>
</template>

<script>
export default {
  name: 'SectionAbout',
  props: {
    title: String
  }
}
</script>

<style scoped>
  .text-about {
    text-align: left;
    font-size: 14px;
  }

  .section {
    padding: 5% 10%;
    background-color: black;
    color: white;
  }

  .title {
    font-size: 36px;
    text-align: left;
    position: relative;
  }

  .title:before{
    content : "";
    position: absolute;
    left    : 0;
    bottom  : 0;
    width   : 50%;  /* or 100px */
    border-bottom: 2px solid white;
  }
</style>