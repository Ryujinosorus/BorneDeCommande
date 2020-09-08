<template>
    <div class="all">
      <div id="font-picker" style="display :none;"></div>
      <div class="bg"><v-img :src="allPics[tmp]"></v-img></div>
      <router-link to="/where">
      <div class="footer" :style="{
                            backgroundColor: settings.firstPage.panelColor,
                            height: settings.firstPage.panelHeight + '%',
                          }">
        <p class="apply-font" :style="{
          fontSize:  settings.firstPage.fontSize +'px',
          color: settings.firstPage.fontColor, 
          'margin-top': settings.firstPage.marginTop + 'px',
          }">{{settings.firstPage.text}}</p>
      </div>
      </router-link>
    </div>
</template> 

<script>
import FontPicker from "font-picker";

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
    let self = this;
		setInterval(function() {
      self.tmp = (self.tmp+1) % self.settings.firstPage.nbDiapo ;
    }, (this.settings.firstPage.interval)*1000);
  },
  mounted:function(){
    this.allPics = this.$store.getters.getAllPics;
    for(let x=0;x<this.allPics.length;x++){
      let xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      const self= this;
      xhr.onload = function() {
       self.allPics[x] = URL.createObjectURL(xhr.response);
      }
      xhr.open('GET',this.allPics[x]);
      xhr.send();
    }
    this.fontPicker = new FontPicker(
        'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
        this.settings.firstPage.font, 
        { limit: 150 },
    );
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
  height: 100%; 

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
.footer {
  z-index: 100;
   position: fixed;
   left: 50;
   bottom: 0;
   width: 100%;
   text-align: center;
}
</style>
