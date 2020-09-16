<template>
  <v-app>
    <div>
      <div
        class="navbar"
        :class="{ 'navbar--hidden': !showNavbar }"
      >
          <div class="containerr">
      <h1 class="logo"> <a href="/">FAST ORDER</a></h1>

      <nav>
        <ul>
          <router-link to='/tarif'>
          <li><a class="traitENHaut">Tarif</a></li>
          </router-link>
          <router-link to='/ingredient'>
          <li><a class="traitENHaut">Cuisine</a></li>
          </router-link>
          <router-link :to="'/' + lastElement">
          <li><a class="traitENHaut">{{lastElement}}</a></li>
          </router-link>
          <li v-if="renderIngredient" @click="logout()"><a style="color:red;">Déconexion</a></li>
        </ul>
      </nav>
    </div>
      </div>
    </div>
    <router-view @updateUser="reRender" :showIngredient="renderIngredient"></router-view>
  </v-app>
</template>

<script>
import * as firebase from "firebase";
export default {
  name: 'App',
  data: () => ({
      showNavbar: true,
      lastScrollPosition: 0,
      lastElement : 'Connexion',
      renderIngredient : false,
  }),
  methods: {
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    },
    logout(){
      let self = this;
      firebase.auth().signOut().then(function() {
        self.$router.replace('/');
        self.$store.commit('RESET_CUSTOM');
}, function(error) {
  console.log(error);
});
    this.renderIngredient = false;
    this.lastElement="Connexion"
    },
    reRender(){
      this.renderIngredient = true;
      this.lastElement = "Votre espace";
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
body {
  padding: 0;
  margin: 0;
}
.app {
  width: 100vw;
  height: 500vh;
  background: hsl(200, 50%, 90%);
}
.navbar {
  height: 60px;
  width: 100vw;
  background: hsl(200, 50%, 50%);
  position: fixed;
  box-shadow: 0 2px 15px rgba(71, 120, 120, 0.5);
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
  z-index: 2000000000;
}
.navbar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}


@import url('https://fonts.googleapis.com/css2?family=Karla:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Oswald:wght@300&display=swap');
body {
	margin: 0;
	background: #222;
	font-family: 'Karla', sans-serif;
	font-weight: 800;
}

.containerr {
	width: 80%;
	margin: 0 auto;
}

.navbar {
  background: #0378A6;
}

.navbar::after {
  content: '';
  display: table;
  clear: both;
}

.logo {
  float: left;
  padding: 10px 0;
}

nav {
  float: right;
}
h1 a{
  color : white;
}
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  font-family: 'Montserrat', sans-serif;
  display: inline-block;
  margin-left: 70px;
  padding-top: 20px;

  position: relative;
}

nav .traitENHaut {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 18px;
}

nav .traitENHaut:hover {
  color: #0D0D0D;
}

nav .traitENHaut::before {
  content: '';
  display: block;
  height: 5px;
  background-color: #04C4D9;

  position: absolute;
  top: 0;
  width: 0%;

  transition: all ease-in-out 250ms;
}

nav .traitENHaut:hover::before {
  width: 100%;
}

</style>