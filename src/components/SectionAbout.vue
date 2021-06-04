<template>
  <div class="section" id="about">
    <div class="title">
      {{ title }}
    </div>
    <div class="text-about">
      <p>Hi ! I run this production & mixing facility from Rio de Janeiro, Brazil. My goal is to provide the highest level of musical quality to those seeking it in France, Brazil and elsewhere.</p>
      <img :src="require('@/assets/lucas.jpg')" alt="Lucas De Oliveira">
      <div class="skills-list">
        <div class="skill" v-for="(skill, index) in skills" :key=skill.name v-on:click="updateSelectedSkill(index)">
          <font-awesome-icon :icon="['fas', skill.icon]" style='font-size: 18px;' class='icon' />
          <div class="skill-title">
            {{skill.name}}
          </div> 
        </div>
      </div>
      <SkillPreview :skill="skill" />
    </div>
    <p>-</p>
    <p class='bold-700'>Lucas De Oliveira</p>
  </div>
</template>

<script>
import SkillPreview from './SkillPreview';

export default {
  name: 'SectionAbout',
  props: {
    title: String
  },
  components: {
    SkillPreview
  },
  data: function() {
    return {
      skills: [
        {name: 'Composition & Arrangement', icon: 'music' , description: 'I can help you achieve your musical vision from inception to completion in a fully digital manner, assisting you in every step of the songwriting process.'},
        {name: 'Guitar Session Playing', icon: 'guitar' , description: 'Quality guitar parts tailored to your needs. I can provide both DI and/or re-amplified signals.'},
        {name: 'Programming', icon: 'laptop' , description: 'Highly realistic midi parts for virtual instruments, notably drums, bass and keys. I always spend the time necessary for these parts to sound great yet human.'},
        {name: 'Editing', icon: 'sliders-h' , description: 'You can send me already recorded tracks, be it vocals, guitars, bass or else. They will be edited to a professional standard.'},
        {name: 'Mixing', icon: 'headphones' , description: 'Benefiting from several years of mixing experience, I will dedicate my time to take your songs a step forward.'},
      ],
      selectedSkill: 0,
    }
  },
  methods: {
    updateSelectedSkill(index) {
      this.selectedSkill = index
    }
  },
  computed: {
    skill() {
      return this.skills[this.selectedSkill]
    }
  }
}
</script>

<style scoped>
  .skills-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    font-size: 22px;
    margin-top: 30px;
  }

  .skill-title {
      font-size: 18px;
    }


  @media(max-width: 1100px) {
    .skills-list {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }


  @media(max-width: 800px) {
    .skills-list {
      grid-template-columns: 1fr 1fr;
      font-size: 18px;
    }

    .skill-title {
      font-size: 16px;
    }
  }

  @media(max-width: 550px) {
    .skills-list {
      grid-template-columns: 1fr;
    }
  }

  .bold-700 {
    font-weight: 700;
    font-size: 18px;
  }

  .skill {
    text-align: center;
    padding: 8px;
    margin: 10px;
    box-shadow: 2px 2px 2px 2px white;
    border-radius: 8px;
  }

  .skill:hover {
    cursor: pointer;
    border-radius: 8px;
    background-color: white;
    color: black;
    transition: 0.3s;
  }

  .text-about {
    text-align: left;
    font-size: 14px;
  }

  .text-about img {
    display: block;
    margin: auto;
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }

  .section {
    padding: 50px 10%;
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