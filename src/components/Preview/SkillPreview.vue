<template>
  <div class="preview-skill">
    <font-awesome-icon :icon="['fas', skill.icon]" style='font-size: 72px;' class='icon' />
    <div class="preview-skill-title">
      {{skill.name}}
    </div>
    <div class="preview-skill-description">
      {{skill.description}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'SkillPreview',
  props: {
    skill: Object
  },
}
</script>

<style scoped>
  .preview-skill-title {
    font-size: 38px;
  }

  .preview-skill {
    text-align: center;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
</style>