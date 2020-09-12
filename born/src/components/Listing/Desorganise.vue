<template>
<div :style="{backgroundColor : settings.list.recap.backgroundColorCate}" style="height : 100vh">
  <app-commandeLeft :settings="settings"></app-commandeLeft>
    <v-row>
      <div v-for="data in settings.categorie" :key="data[0]">
        <router-link :to="'Show/'+data[0]" v-if="canShow(data[0])">
        <v-card :height="settings.list['Organisé']['hauteur']" :width="settings.list['Organisé']['largeur']" :style="{
          marginLeft :settings.list['Organisé']['espacementG'] +'px',
          marginTop :settings.list['Organisé']['espacementT'] +'px',
          border :settings.list.recap.cateBorderSize + 'px solid ' + settings.list.recap.cateBorderColor,
          backgroundColor : settings.list.recap.cateBackgroundColor,
          borderRadius :settings.list.recap.rounded +'px',
          }"
          v-if="settings.list.recap.textCate"
          :elevation="settings.list.recap.cateElevation"
          >
          <v-img :src="data[1]" :height="settings.list['Organisé']['hauteur'] -settings.list.recap.cateTextHeight"></v-img>
          <p :style="{textAlign : 'center',
                      fontSize : settings.list.recap.cateTextFontSize +'px',
                      color : settings.list.recap.cateTextColor,
                      }"
              class="apply-font-cateTextFont"
                      >{{data[0]}}</p>
        </v-card>
        <v-card :height="settings.list['Organisé']['hauteur']" :width="settings.list['Organisé']['largeur']" :style="{
          marginLeft :settings.list['Organisé']['espacementG'] +'px',
          marginTop :settings.list['Organisé']['espacementT'] +'px',
          borderRadius :settings.list.recap.rounded +'px'
          }"
          :img="data[1]"
          v-else
          >
        </v-card>  
        </router-link>
      
    
      </div>
    </v-row>
    </div>
</template>

<script>
  export default {
      props:['settings'],
      methods : {
        canShow(){
          return true;
        }
      },
  }
</script>

<style>
* {
margin: 0;
padding: 0;
}

body {
  font-family: sans-serif;
  background-color: #000;
  position: relative;
}

/* ---- grid ---- */

/* clearfix */
.grid:after {
  content: '';
  display: block;
  clear: both;
}

/* ---- grid-item ---- */

.grid-sizer,
.grid-item {
  width: 25%;
}

.grid-item {
  height: 200px;
  float: left;
  background-color: #F4F3F4;
  border: 4px solid #000;
  -webkit-filter: grayscale(70%) blur(0.5px);
  -webkit-transform: translateZ(0);
   transform: translateZ(0);
  background-size: cover;
  background-position: center center;
  transition: all 0.35s ease-in-out;
}


.main{
  height :100%;
  padding :0px;
}

.recap{
  position: fixed;
  top : 0;
  right: 0;
  height : 100vh
}
.center{
  padding-top: 12%;
  text-align: center;
}
.hidden{
  display: none;
}
</style>