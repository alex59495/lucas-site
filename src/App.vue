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
