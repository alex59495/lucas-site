<template>
   <nav class="navbar">
      <ul class="nav-menu grid-container">
        <div class="grid-element">
          <li class="nav-item">
            <a v-on:click="scrollTo('portfolio')" class="nav-link">Portfolio</a>
          </li>
          <li class="nav-item">
            <a v-on:click="scrollTo('about')" class="nav-link">About</a>
          </li>
          <li class="nav-item">
            <a v-on:click="scrollTo('contact')" class="nav-link">Contact</a>
          </li>
        </div>
        <div class="grid-element">
          <li>
            <a href="https://www.youtube.com/channel/UCSc1J3qwIlSReB-Cf1D8R8A" target='_blank' style='font-size: 28px; margin-right: 20px'><font-awesome-icon :icon="['fab', 'youtube']" /></a>
            <a href="https://www.instagram.com/monochrome.lucas/" target='_blank' style='font-size: 28px'><font-awesome-icon :icon="['fab', 'instagram']" /></a>
          </li>
        </div>
      </ul>
      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
</template>

<script>
window.onload = () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  
  hamburger.addEventListener("click", mobileMenu);
  
  function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
  }
}

export default {
  name: 'Navbar',
  methods: {
    scrollTo(elementId) {
      const element = document.getElementById(elementId)
      element.scrollIntoView({behavior: 'smooth'})
    },
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

body {
  scroll-behavior: smooth;
}

li {
  list-style: none;
}

ul {
  padding: 0;
}

a {
  text-decoration: none;
}

li.nav-item a:hover { 
  cursor: pointer;
}

.header{
  border-bottom: 1px solid black;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: black;
}

.navbar a {
  color: white;
}

.navbar a:hover {
  color: rgb(228, 228, 228);
}

.hamburger {
  display: none;
  margin: auto;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: white;
}

.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-item {
  margin-left: 5rem;
}

.nav-link{
  font-size: 1.6rem;
  font-weight: 400;
  color: #475569;
}

.grid-container {
  display: grid;
  grid-template-columns: 5fr 1fr;
  width: 100%;
}

.grid-element {
  display: flex;
  justify-content: space-around;
}


@media only screen and (max-width: 768px) {
  .hamburger.active .bar:nth-child(2) {
      opacity: 0;
    }

    .hamburger.active .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }

  .nav-menu {
    position: absolute;
    left: -100%;
    top: 1.5rem;
    flex-direction: column;
    background-color: black;
    width: 100%;
    border-radius: 10px;
    text-align: center;
    transition: 0.3s;
  }

  .grid-element, .grid-container {
    display: block;
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-item {
    margin: 2.5rem 0;
  }

  .hamburger {
    display: block;
    cursor: pointer;
  }
}

</style>