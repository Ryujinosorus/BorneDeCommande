<template>
    <div class="all">
      <div class="bg" :style="{backgroundImage : 'url(' +  allPics[tmp] + ')'}"></div>
      <router-link to="/where">
      
      <div class="footer" :style="{
                            backgroundColor: settings.firstPage.panelColor,
                            height: settings.firstPage.panelHeight + '%',
                          }">
        <p class="apply-font-diapoFont" :style="{
          fontSize:  settings.firstPage.fontSize +'px',
          color: settings.firstPage.fontColor, 
          'margin-top': settings.firstPage.marginTop + 'px',
          }">{{settings.firstPage.text}}</p>
      </div>
      </router-link>
    </div>
</template> 

<script>
export default {
  name: 'Carrousel',
  props:['settings'],

  data() {
      return {
        allPics : [],
        tmp : 0,
        fontPicker : null
    }
  },
	created: function() {
    console.log(this.settings);
    this.allPics = this.$store.getters.getAllPics;
    let self = this;
		setInterval(function() {
      self.tmp = (self.tmp+1) % self.settings.firstPage.nbDiapo ;
    }, (this.settings.firstPage.interval)*1000);
  }
};
</script>
<style scoped>
.all{
  height: 100%;
  margin: 0;
}

.bg {
  z-index: 8000;

  /* Full height */
  height: 100vh;
  width: 100%; 

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
.footer {
  z-index: 100;
   position: fixed;
   bottom: 0;
   width: 100%;
   text-align: center;
}
</style>
