<template>
  <div class="section" id="contact">
    <div class="title">
      {{ title }}
    </div>
    <div class="container-grid">
      <div class="infos">
        <p>Lucas De Oliveira</p>
        <p>E-mail : <a href="mailto:Themis.prods@gmail.com">Themis.prods@gmail.com</a></p>
        <p>Phone : +33 6 04 67 25 40</p>
      </div>
      <ContactForm />
    </div>
  </div>
</template>

<script>
import ContactForm from '../Form/ContactForm.vue';

export default {
  name: 'SectionContact',
  props: {
    title: String
  },
  components: {
    ContactForm
  }
}
</script>


<style scoped>

  @media (min-width: 600px) {
    .container-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      text-align: left;
    }
  }

  .infos {
    border-bottom: 2px solid black;
    height: fit-content;
  }

  .section {
    margin: 50px 10%;
  }

  .title {
    font-size: 36px;
    color: black;
    text-align: left;
    position: relative;
  }

  .title:before{
    content : "";
    position: absolute;
    left    : 0;
    bottom  : 0;
    top: 15;
    width   : 50%;  /* or 100px */
    border-bottom: 2px solid black;
  }
  
</style>