<template>
    <v-app>
      <button type="button" @click="toggle" >Fullscreen</button>
      <fullscreen ref="fullscreen" @change="fullscreenChange">
      <app-login></app-login>
      </fullscreen>
    </v-app>
</template> 

<script>
export default {
  name: 'App',

  data() {
      return {
        fullscreen: false
    }
  },
  methods : {
      toggle () {
        this.$refs['fullscreen'].toggle() // recommended
        // this.fullscreen = !this.fullscreen // deprecated
      },
      fullscreenChange (fullscreen) {
        this.fullscreen = fullscreen
      }
  }
 };
</script>