<template>
  <div class="navbar nav-container">
    <div class="navgrid-left">
      <a href='#portfolio' class="title">Portfolio</a>
      <a href='#about' class="title">About</a>
      <a href='#contact' class="title">Contact</a>
    </div>
    <div class="navgrid-right">
      <a href="https://www.youtube.com/channel/UCSc1J3qwIlSReB-Cf1D8R8A" target='_blank'><font-awesome-icon :icon="['fab', 'youtube']" /></a>
      <a href="https://www.instagram.com/monochrome.lucas/" target='_blank'><font-awesome-icon :icon="['fab', 'instagram']" /></a>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.nav-container {
  display: grid;
  grid-template-columns: 5fr 1fr;
  grid-template-rows: auto;
}

.navgrid-left {
  display: flex;
  justify-content: space-around;
}

.navgrid-right {
  display: flex;
  justify-content: space-around;
}

.navbar {
  background-color: black;
  padding-top: 60px;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-size: 26px;
}

.navbar a:hover {
  text-shadow: 1px 1px 1px white;
  text-decoration: none;
}

</style>