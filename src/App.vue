<template>
  <Navbar />
  <Banner />
  <SectionPortfolio title="Portfolio"/>
  <SectionAbout title="About"/>
  <SectionContact title="Contact"/>
</template>

<script>
import Banner from './components/Banner.vue';
import SectionPortfolio from './components/Sections/SectionPortfolio.vue';
import SectionAbout from './components/Sections/SectionAbout.vue';
import SectionContact from './components/Sections/SectionContact.vue';
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Banner,
    SectionPortfolio,
    SectionAbout,
    SectionContact,
    Navbar
  },
   metaInfo() {
    return { 
      title: "Themis Production",
      meta: [
          { property: 'og:description', content: 'Themis Production by Lucas De Oliveira.'},
          { property: 'og:title', content: "Themis Production"},
          { property: 'og:site_name', content: 'Themis Production'},
          { property: 'og:type', content: 'website' },
          { property: 'og:image', content: require('@/assets/img/themis-prod.png')},
          { property: 'og:type', content: 'website' },
          { name: 'robots', content: 'index,follow' } 
      ]
    }
  }
}
</script>

<style>
body {
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
