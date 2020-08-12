<template>
    <div class="all">
      <div id="font-picker" style="display :none;"></div>
      <div class="bg" v-bind:style="{ backgroundImage: 'url(' + allPics[tmp] + '.png)'  }"></div>
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
  methods:{
    change_pics(){
      this.tmp = (this.tmp+1) % 4 ;
      //this.usedPic = this.allPics[(this.allPics.indexOf(this.usedPic)+1)%this.allPics.length];  
    }
  },
	created: function() {
    let self = this;
		setInterval(function() {
      self.change_pics();
    }, (this.settings.firstPage.interval)*1000);
  },
  mounted:function(){
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
