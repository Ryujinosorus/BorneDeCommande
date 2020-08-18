<template>
  <v-container
    fluid
    class="main"
    :style="{backgroundColor : settings.list.showFood.backgroundColorMenu}"
  >
    <app-commandeLeft :settings="settings"></app-commandeLeft>
    <v-row>
      <!-- RETOUR -->
      <router-link to="/desorganise" v-if="settings.list.showFood.back.withText">
        <v-card
          :height="settings.list.showFood.back.hauteur"
          :width="settings.list.showFood.back.largeur"
          :style="{
          marginLeft :settings.list.showFood.espacementG +'px',
          marginTop :settings.list.showFood.espacementT +'px',
          border :settings.list.showFood.back.borderSize + 'px solid ' + settings.list.showFood.back.borderColor,
          backgroundColor : settings.list.showFood.back.backgroundColorText,
          borderRadius :settings.list.showFood.rounded +'px',
          }"
          :elevation="settings.list.showFood.menuElevation"
        >
          <v-img
            :src="settings.list.showFood.back.picture"
            :height="settings.list.showFood.back.hauteur -settings.list.showFood.back.textHauteur"
          ></v-img>
          <p
            :style="{textAlign : 'center',
                      fontSize : settings.list.showFood.menuTextFontSize +'px',
                      color : settings.list.showFood.menuTextColor,
                      }"
            class="apply-font-menuTextFont"
          >{{settings.list.showFood.back.text}}</p>
        </v-card>
      </router-link>
      <router-link to="/desorganise" v-else>
        <v-card
          :height="settings.list['Organisé']['hauteur']"
          :width="settings.list['Organisé']['largeur']"
          :style="{
            border :settings.list.showFood.menuBorderSize + 'px solid ' + settings.list.showFood.menuBorderColor,
          marginLeft :settings.list['Organisé']['espacementG'] +'px',
          marginTop :settings.list['Organisé']['espacementT'] +'px',
          borderRadius :settings.list.recap.rounded +'px'
          }"
          :img="settings.list.showFood.back.picture"
        ></v-card>
      </router-link>

      <!-- CARD PART -->
      <div v-for="data in carte" :key="data[0]">
        <v-card
          v-if="settings.list.showFood.textMenu"
          :height="settings.list.showFood.hauteur"
          :width="settings.list.showFood.largeur"
          :style="{
          marginLeft :settings.list.showFood.espacementG +'px',
          marginTop :settings.list.showFood.espacementT +'px',
          border :settings.list.showFood.menuBorderSize + 'px solid ' + settings.list.showFood.menuBorderColor,
          backgroundColor : settings.list.showFood.menuBackgroundColor,
          borderRadius :settings.list.showFood.rounded +'px',
          }"
          :elevation="settings.list.showFood.menuElevation"
          @click="clickOnCard(data)"
        >
          <v-img
            :src="data.picture"
            :height="settings.list.showFood.hauteur -settings.list.showFood.menuTextHeight"
          ></v-img>
          <p
            :style="{textAlign : 'center',
                      fontSize : settings.list.showFood.menuTextFontSize +'px',
                      color : settings.list.showFood.menuTextColor,
                      }"
            class="apply-font-menuTextFont"
          >{{data.nom}}</p>
        </v-card>
        <v-card
          @click="clickOnCard(data)"
          v-else
          :height="settings.list['Organisé']['hauteur']"
          :width="settings.list['Organisé']['largeur']"
          :style="{
          border :settings.list.showFood.menuBorderSize + 'px solid ' + settings.list.showFood.menuBorderColor,
          marginLeft :settings.list['Organisé']['espacementG'] +'px',
          marginTop :settings.list['Organisé']['espacementT'] +'px',
          borderRadius :settings.list.recap.rounded +'px'
          }"
          :img="data.picture"
        ></v-card>
      </div>
    </v-row>

    <!-- DIALOG -->

    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      :transition="settings.custom.transition + '-transition'"
    >
      <v-card :color="settings.custom.backgroundColor">
        <v-toolbar
          :height="settings.custom.toolbar.height"
          dark
          :color="settings.custom.toolbar.backgroundColor"
        >
          <v-icon
            @click="dialog = false"
            :size="settings.custom.toolbar.btnSize"
            color="red"
          >mdi-close</v-icon>
          <v-toolbar-title
            class="apply-font-fontToolbar"
            :style="{
                                                                    marginLeft : settings.custom.toolbar.marginL +'px',
                                                                    fontSize : settings.custom.toolbar.textSize +'px',
                                                                    color : settings.custom.toolbar.textColor 
          
          }"
          >{{settings.custom.toolbar.text}}</v-toolbar-title>
        </v-toolbar>
        <!--
        <div
          :style="{width : settings.custom.carousel.largeur +'px',
                    marginTop :settings.custom.carousel.marginT + 'px',
                    marginLeft: settings.custom.carousel.marginL + 'px'}"
        >
          <v-carousel
            :continuous="false"
            :height=" settings.custom.carousel.hauteur+'px'"
            :hide-delimiters="!settings.custom.carousel.hideDelimiters"
          >
            <v-carousel-item v-for="i in data" :key="i">
              <div
                class="slide"
                :style="{backgroundColor : settings.custom.carousel.backgroundColor}"
              >
                <div
                  :style="{backgroundColor : settings.custom.carousel.textBackgroundColor,
                              fontSize : settings.custom.carousel.fontSize +'px',
                              height : settings.custom.carousel.textHeight +'px',
                              color :settings.custom.carousel.textColor,
                              textAlign : 'center'
                    }"
                >
                  <h1 class="apply-font-carouselTitleFont">{{i}}</h1>
                </div>
                <div class="detail">

                  <!- SAUCE ->

                  <v-row v-if="i == 'sauce'">
                    <v-card
                      :height=" settings.custom.cardDetail.hauteur + 'px'"
                      :style="{'width' : settings.custom.cardDetail.largeur + 'px',
                              'marginLeft':settings.custom.cardDetail.marginL + 'px',
                              'marginTop':settings.custom.cardDetail.marginT + 'px',
                              backgroundColor : settings.custom.cardDetail.backgroundColor 
                              }"
                      v-for="(detail,index) in selectable.modifiable[i][0]"
                      @click="addSauce(detail,index)"
                      :key="detail">
                      <v-img :height=" settings.custom.cardDetail.imgHeight+ 'px'" :src="getURL(i,detail)"></v-img>
                    <v-card-actions>
                       <h2 class="apply-font-detailTitreFont" :style="{
                         fontSize :  settings.custom.cardDetail.fontSize+ 'px',
                         color : settings.custom.cardDetail.imgHeight,
                         }">{{detail}}</h2>
                        <v-spacer></v-spacer>
                        <v-checkbox dark v-model="sauceArray[index]" readonly ></v-checkbox>
                      </v-card-actions>
                    </v-card>
                  </v-row>


                  <!- LEGUMES ->



                  <v-row v-if="i == 'legume'">
                    <v-card
                      :height=" settings.custom.cardDetail.hauteur + 'px'"
                      :style="{'width' : settings.custom.cardDetail.largeur + 'px',
                              'marginLeft':settings.custom.cardDetail.marginL + 'px',
                              'marginTop':settings.custom.cardDetail.marginT + 'px',
                              backgroundColor : settings.custom.cardDetail.backgroundColor 
                              }"
                      v-for="(detail,index) in selectable.modifiable[i][0]"
                      @click="addLegume(detail,index)"
                      :key="detail">
                      <v-img :height=" settings.custom.cardDetail.imgHeight+ 'px'" :src="getURL(i,detail)"></v-img>
                    <v-card-actions>
                       <h2 class="apply-font-detailTitreFont" :style="{
                         fontSize :  settings.custom.cardDetail.fontSize+ 'px',
                         color : settings.custom.cardDetail.imgHeight,
                         }">{{detail}}</h2>
                        <v-spacer></v-spacer>
                        <v-checkbox dark v-model="legumeArray[index]" readonly></v-checkbox>
                      </v-card-actions>
                    </v-card>
                  </v-row>



                  <!- supplement ->



                  <v-row v-if="i == 'supplement'">
                    <v-card
                      :height=" settings.custom.cardDetail.hauteur + 'px'"
                      :style="{'width' : settings.custom.cardDetail.largeur + 'px',
                              'marginLeft':settings.custom.cardDetail.marginL + 'px',
                              'marginTop':settings.custom.cardDetail.marginT + 'px',
                              backgroundColor : settings.custom.cardDetail.backgroundColor 
                              }"
                      v-for="(detail,index) in selectable.modifiable[i][0]"
                      @click="addSupplement(detail[1],index)"
                      :key="detail[0]">
                      <v-img :height=" settings.custom.cardDetail.imgHeight+ 'px'" :src="detail[2]"></v-img>
                    <v-card-actions>
                       <h2 class="apply-font-detailTitreFont" :style="{
                         fontSize :  settings.custom.cardDetail.fontSize+ 'px',
                         color : settings.custom.cardDetail.imgHeight,
                         }">{{detail[0]}}</h2>
                        <v-spacer></v-spacer>
                        <v-checkbox dark v-model="supplementArray[index]" readonly></v-checkbox>
                      </v-card-actions>
                    </v-card>
                  </v-row>

                </div>
              </div>
            </v-carousel-item>
          </v-carousel>
        </div>
        -->

      <div :style="{
                  width : settings.custom.carousel.largeur +'px',
                  height : settings.custom.carousel.hauteur +'px',
                  marginTop :settings.custom.carousel.marginT + 'px',
                  marginLeft: 'auto',
                  marginRight : 'auto',
                  backgroundColor : settings.custom.carousel.backgroundColor,
                  overflowY : 'scroll'
                  }">

        <!-- SAUCE -->
        <div>
          <h1>Sauce {{selectable.modifiable.sauce[1].length + '/' + selectable.maxSauce}}</h1>
          <div>
            <v-row>
               <v-card
                  v-for="(detail,index) in selectable.modifiable['sauce'][0]"
                  @click="addSauce(detail,index)"
                  :key="detail"
                  :style="{
                  height : settings.custom.cardDetail.hauteur + 'px',
                  width : settings.custom.cardDetail.largeur + 'px',
                  marginLeft:settings.custom.cardDetail.marginL + 'px',
                  marginTop:settings.custom.cardDetail.marginT + 'px',
                  backgroundColor : 'blue'
                }">
                <v-img
                  :src="getURL('sauce',detail)"
                  :height="settings.custom.cardDetail.hauteur - 50"
                ></v-img>
                <div>
                  <p class="apply-font-detailTitreFont" :style="{
                    fontSize :  settings.custom.cardDetail.fontSize+ 'px',
                    color : settings.custom.cardDetail.imgHeight,
                    float : 'left'
                  }">{{detail}}</p>
                    <v-checkbox dark v-model="sauceArray[index]" readonly :style="{float : 'right',marginTop: '0px'}" ></v-checkbox>
                  </div>
                </v-card>
            </v-row>
          </div>
        </div>

        <!-- LEGUME -->
        <div>
          <h1>Legume</h1>
          <div>
            <v-row>
               <v-card
                  v-for="(detail,index) in selectable.modifiable['legume'][0]"
                  @click="addLegume(detail,index)"
                  :key="detail"
                  :style="{
                  height : settings.custom.cardDetail.hauteur + 'px',
                  width : settings.custom.cardDetail.largeur + 'px',
                  marginLeft:settings.custom.cardDetail.marginL + 'px',
                  marginTop:settings.custom.cardDetail.marginT + 'px',
                  backgroundColor : 'blue'
                }">
                <v-img
                  :src="getURL('legume',detail)"
                  :height="settings.custom.cardDetail.hauteur - 50"
                ></v-img>
                <div>
                  <p class="apply-font-detailTitreFont" :style="{
                    fontSize :  settings.custom.cardDetail.fontSize+ 'px',
                    color : settings.custom.cardDetail.imgHeight,
                    float : 'left'
                  }">{{detail}}</p>
                    <v-checkbox dark v-model="legumeArray[index]" readonly :style="{float : 'right',marginTop: '0px'}" ></v-checkbox>
                  </div>
                </v-card>
            </v-row>
          </div>
        </div>


        <!-- SUPPLEMENTS -->
        <div>
          <h1> SUPPLEMENTS</h1>
          <div>
            <v-row>
               <v-card
                  v-for="(detail,index) in selectable.modifiable['supplement'][0]"
                  @click="addSupplement(detail[1],index)"
                  :key="detail[1]"
                  :style="{
                  height : settings.custom.cardDetail.hauteur + 'px',
                  width : settings.custom.cardDetail.largeur + 'px',
                  marginLeft:settings.custom.cardDetail.marginL + 'px',
                  marginTop:settings.custom.cardDetail.marginT + 'px',
                  backgroundColor : 'blue'
                }">
                <v-img
                  :src="detail[2]"
                  :height="settings.custom.cardDetail.hauteur - 50"
                ></v-img>
                <div>
                  <p class="apply-font-detailTitreFont" :style="{
                    fontSize :  settings.custom.cardDetail.fontSize+ 'px',
                    color : settings.custom.cardDetail.imgHeight,
                    float : 'left',
                    maxWidth : settings.custom.cardDetail.largeur - 40 + 'px'
                  }">{{detail[0] + detail[1]}}</p>
                    <v-checkbox dark v-model="supplementArray[index]" readonly :style="{float : 'right',marginTop: '0px'}" ></v-checkbox>
                  </div>
                </v-card>
            </v-row>
          </div>
        </div>


      </div>
      <v-btn @click="add()">Valider</v-btn>
      </v-card>
    </v-dialog>

    <div class="hidden">
      <div id="font-picker-menuTextFont"></div>
      <div id="font-picker-carouselTitleFont"></div>
      <div id="font-picker-fontToolbar"></div>
      <div id="font-picker-detailTitreFont"></div>
    </div>
  </v-container>
</template>

<script>
import FontPicker from "font-picker";
import { Selectable } from "../Scripts/store";
import {legumes} from '../Data/legumes';
import {sauce} from '../Data/sauce'
export default {
  props: ["settings"],
  data() {
    return {
      carte: [],
      dialog: false,
      selectable: null,
      data: [],
      localLegumes : legumes,
      localSauces : sauce,
      sauceSelected : [],
      sauceArray : [],
      legumeArray : [],
      supplementArray : []
    };
  },
  methods: {
    clickOnCard(data) {
      this.selectable = data;
      for(let i=0;i<data.modifiable.sauce[0].length;i++) this.sauceArray.push(false);
      for(let i=0;i<data.modifiable.legume[0].length;i++) this.legumeArray.push(true);
      for(let i=0;i<data.modifiable.supplement[0].length;i++) this.supplementArray.push(false);
      this.dialog = true;
    },
    getURL(cate, name) {
      switch (cate) {
        case "supplement": {
          return "a";
        }
        case "legume": {
          for(let i=0;i<this.localLegumes.length;i++)
            if(this.localLegumes[i].name == name)
              return this.localLegumes[i].url;
          break;
        }
        case "sauce": {
          for(let i=0;i<this.localSauces.length;i++)
            if(this.localSauces[i].name == name)
              return this.localSauces[i].url;
          break;
        }
      }
    },
    add(){
      this.$store.commit('ADD_SELECTABLE',this.selectable);
      this.dialog = false;
      this.$router.replace('/desorganise');
    },
    addSauce(name,index){
      let pos = this.selectable.modifiable.sauce[1].indexOf(name);
      if(pos==-1)
        this.selectable.modifiable.sauce[1].push(name);
      else 
         this.selectable.modifiable.sauce[1].splice(pos,1);
      this.sauceArray[index] = !this.sauceArray[index];

      if(this.selectable.modifiable.sauce[1].length > this.selectable.maxSauce){
        let a = this.selectable.modifiable.sauce[1].shift();
        let posDel = this.selectable.modifiable.sauce[0].indexOf(a);
        this.sauceArray[posDel] = false;
      }
    },
    addLegume(name,index){
      let pos = this.selectable.modifiable.legume[1].indexOf(name);
      if(pos==-1)
        this.selectable.modifiable.legume[1].push(name);
      else 
         this.selectable.modifiable.legume[1].splice(pos,1);
      this.legumeArray[index] = !this.legumeArray[index];
    },
    addSupplement(name,index){
      let pos = this.selectable.modifiable.supplement[1].indexOf(name);
      if(pos==-1)
        this.selectable.modifiable.supplement[1].push(name);
      else 
         this.selectable.modifiable.supplement[1].splice(pos,1);
      this.supplementArray[index] = !this.supplementArray[index];     
    }
  },
  created() {
    this.selectable = new Selectable();
    for (let i in this.selectable.modifiable) this.data.push(i);
  },
  mounted() {
    this.carte = this.$store.getters.platByCate[this.$route.params.id];

    new FontPicker(
      "AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg",
      this.settings.list.showFood.menuTextFont,
      {
        pickerId: "menuTextFont",
        limit: 150,
      }
    );

    new FontPicker(
      "AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg",
      this.settings.custom.toolbar.font,
      {
        pickerId: "fontToolbar",
        limit: 150,
      }
    );

    new FontPicker(
      "AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg",
      this.settings.custom.carousel.font,
      {
        pickerId: "carouselTitleFont",
        limit: 150,
      }
    );

      new FontPicker(
      "AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg",
      this.settings.custom.cardDetail.font,
      {
        pickerId: "detailTitreFont",
        limit: 150,
      }
    );
  },
};
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
  content: "";
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
  background-color: #f4f3f4;
  border: 4px solid #000;
  -webkit-filter: grayscale(70%) blur(0.5px);
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  background-size: cover;
  background-position: center center;
  transition: all 0.35s ease-in-out;
}

.main {
  height: 100%;
  padding: 0px;
}

.recap {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
}
.center {
  padding-top: 12%;
  text-align: center;
}
.hidden {
  display: none;
}
.slide {
  width: 100%;
  height: 100%;
}
.detail {
  height: 100%;
  overflow-y: scroll;
}
</style>