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
      <div v-for="data in carte" :key="data.nom">
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
      <v-card :color="settings.custom.backgroundColor" style="min-height : 100vh;width : 100%">
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
        <div :style="{height : settings.custom.title.marginT + 'px'}"></div>
        <h1 class="apply-font-titleFont" :style="{
          fontSize : settings.custom.title.fontSize + 'px',
          color : settings.custom.title.fontColor,
          textAlign : 'center'
          }">{{settings.custom.title.text}}</h1>
        <div
          :style="{
                  width : settings.custom.selectDiv.largeur +'px',
                  height : settings.custom.selectDiv.hauteur +'px',
                  marginTop :settings.custom.selectDiv.marginT + 'px',
                  marginLeft: 'auto',
                  marginRight : 'auto',
                  backgroundColor : settings.custom.selectDiv.backgroundColor,
                  borderTop : settings.custom.selectDiv.borderT ? settings.custom.selectDiv.borderSize+'px solid' + settings.custom.selectDiv.borderColor : '0px',
                  borderBottom : settings.custom.selectDiv.borderB ? settings.custom.selectDiv.borderSize+'px solid' + settings.custom.selectDiv.borderColor : '0px',
                  borderLeft : settings.custom.selectDiv.borderL ? settings.custom.selectDiv.borderSize+'px solid' + settings.custom.selectDiv.borderColor : '0px',
                  borderRight : settings.custom.selectDiv.borderR ? settings.custom.selectDiv.borderSize+'px solid' + settings.custom.selectDiv.borderColor : '0px',
                  overflowY : 'scroll',
                  overflowX : 'hidden'
                  }"
        >
          <!-- LISTING -->
          <div>
            <h1>Comment le voulez vous ?</h1>
            
            <div>
              <v-row>
                <v-card
                  v-for="(detail,index) in allSelectable"
                  @click="changeSelectable(index)"
                  :key="detail.nom"
                  :style="{
                  height : settings.custom.cardDetail.hauteur + 'px',
                  width : settings.custom.cardDetail.largeur + 'px',
                  marginLeft:settings.custom.cardDetail.marginL + 'px',
                  marginTop:settings.custom.cardDetail.marginT + 'px',
                  backgroundColor : 'blue'
                }"
                >
                  <v-img :src="detail.picture" :height="settings.custom.cardDetail.hauteur - 50"></v-img>
                  <div>
                    <p
                      class="apply-font-detailTitreFont"
                      :style="{
                    fontSize :  settings.custom.cardDetail.fontSize+ 'px',
                    color : settings.custom.cardDetail.fontColor,
                    float : 'left'
                  }"
                    >{{detail.nom}}</p>
                    <v-checkbox
                      dark
                      v-model="selectableArray[index]"
                      readonly
                      :style="{float : 'right',marginTop: '0px'}"
                    ></v-checkbox>
                  </div>
                </v-card>
              </v-row>
            </div>
          </div>

          <div v-for="(content,indexC) in selectable.content" :key="content.nom">
            <h1 class="apply-font-nomPlatFont" :style="{
                color : settings.custom.nomPlat.fontColor,
                marginTop : settings.custom.nomPlat.marginT + 'px',
                marginLeft : settings.custom.nomPlat.marginL + 'px',
                fontSize : settings.custom.nomPlat.fontSize + 'px'
              }">{{content.nom}}</h1>
            <!-- CONTENT -->
            <div>
              <!--
              <h3 class="apply-font-nomDetailFont" :style="{
                color : settings.custom.nomDetail.fontColor,
                marginTop : settings.custom.nomDetail.marginT + 'px',
                marginLeft : settings.custom.nomDetail.marginL + 'px',
                fontSize : settings.custom.nomDetail.fontSize + 'px'
              }">Sauce {{content.modifiable.sauce[1].length + '/' + content.maxSauce}}</h3>-->
              <div>
                <v-row>
                  <v-card
                    v-for="(detail,indexSC) in content.data"
                    :key="indexS + ' ' + detail.nom + ' ' + detail.picture"
                    @click="addDetail(content,detail,indexC,indexSC)"
                    :style="{
                    height : settings.custom.cardDetail.hauteur + 'px',
                    width : settings.custom.cardDetail.largeur + 'px',
                    marginLeft:settings.custom.cardDetail.marginL + 'px',
                    marginTop:settings.custom.cardDetail.marginT + 'px',
                    backgroundColor : 'blue'
                  }"
                  >
                    <v-img
                    :src='detail.url'
                      :height="settings.custom.cardDetail.hauteur - 50"
                    ></v-img>
                    <div>
                      <p
                        class="apply-font-detailTitreFont"
                        :style="{
                      fontSize :  settings.custom.cardDetail.fontSize+ 'px',
                      color : settings.custom.cardDetail.fontColor,
                      float : 'left'
                    }"
                      >{{detail.nom}}</p>
                      <v-checkbox
                        dark
                        readonly
                        v-if="reRenderCheckBox"
                        v-model="model[indexS][indexC][indexSC]"
                        :style="{float : 'right',marginTop: '0px'}"
                      ></v-checkbox>
                    </div>
                  </v-card>
                </v-row>
              </div>
            </div>
          </div>
        </div>
        <div>
                  <!-- CANCEL BTN -->
        <router-link to="/desorganise">
        <div :style="{
            height : settings.custom.cancelBTN.hauteur + 'px',
            width : settings.custom.cancelBTN.largeur + 'px',
            marginTop : settings.custom.cancelBTN.marginT + 'px',
            marginLeft : settings.custom.cancelBTN.marginG + 'px',
            backgroundColor : settings.custom.cancelBTN.backgroundColor,
            backgroundImage :'url(' +  settings.custom.cancelBTN.url + ')',
            float :'left',
            backgroundSize : 'cover',
            border : settings.custom.cancelBTN.borderSize + 'px solid' + settings.custom.cancelBTN.borderColor
        }">
            <div v-if="settings.custom.cancelBTN.withText"  :style="{
                height : settings.custom.cancelBTN.textHeight + 'px',
                backgroundColor : settings.custom.cancelBTN.backgroundTextColor,
                marginTop : settings.custom.cancelBTN.hauteur - settings.custom.cancelBTN.textHeight - 2*settings.custom.cancelBTN.borderSize + 'px'
            }">
                <h2 :style="{
                    textAlign :'center',
                    fontSize : settings.custom.cancelBTN.fontSize +'px',
                    color : settings.custom.cancelBTN.fontColor
                    }" class="apply-font-backFont">{{settings.custom.cancelBTN.text}}</h2>
            </div>
        </div>
        </router-link>
        <!-- ADD BTN -->
        <div @click="add()" :style="{
            height : settings.custom.addBTN.hauteur + 'px',
            width : settings.custom.addBTN.largeur + 'px',
            marginTop : settings.custom.addBTN.marginT + 'px',
            marginRight : settings.custom.addBTN.marginR + 'px',
            backgroundColor : settings.custom.addBTN.backgroundColor,
            float : 'right',
            backgroundImage :'url(' +  settings.custom.addBTN.url + ')',
            backgroundSize : 'cover',
            border : settings.custom.addBTN.borderSize + 'px solid' + settings.custom.addBTN.borderColor
        }">
            <div v-if="settings.custom.addBTN.withText"  :style="{
                height : settings.custom.addBTN.textHeight + 'px',
                backgroundColor : settings.custom.addBTN.backgroundTextColor,
                marginTop : settings.custom.addBTN.hauteur - settings.custom.addBTN.textHeight - 2*settings.custom.addBTN.borderSize + 'px'
            }">
                <h2 :style="{
                    textAlign :'center',
                    fontSize : settings.vcustom.addBTN.fontSize +'px',
                    color : settings.custom.addBTN.fontColor
                    }" class="apply-font-nextFont">{{settings.custom.addBTN.text}}</h2>
            </div>
        </div>
        </div>
          <div :style="{
            height :  settings.custom.cancelBTN.hauteur + settings.custom.cancelBTN.borderSize > settings.custom.addBTN.hauteur + settings.custom.addBTN.borderSize ? settings.custom.cancelBTN.hauteur + settings.custom.cancelBTN.borderSize : settings.custom.addBTN.hauteur + settings.custom.addBTN.borderSize + 'px',
            marginTop : settings.custom.cancelBTN.marginT + 'px',
            }"></div>
      </v-card>
    </v-dialog>

    <div class="hidden">
      <div id="font-picker-menuTextFont"></div>
      <div id="font-picker-titleFont"></div>
      <div id="font-picker-fontToolbar"></div>
      <div id="font-picker-detailTitreFont"></div>
      <div id="font-picker-nomDetailFont"></div>
      <div id="font-picker-nomPlatFont"></div>
    </div>
  </v-container>
</template>

<script>
import FontPicker from "font-picker";
import { Selectable } from "../Scripts/store";
export default {
  props: ["settings"],
  data() {
    return {
      carte: [],
      dialog: false,
      selectable: null,
      data: [],
      allSelectable: [],
      selectableArray : [true],
      model: [],
      indexS: 0,
      reRenderCheckBox : true
    };
  },
  methods: {
    clickOnCard(data) {
      this.allSelectable = this.$store.getters.menuByPlat[data.nom];

      for(let i=0;i<this.allSelectable.length;i++){
        this.model[i] = [];
        for(let j=0;j<this.allSelectable[i].content.length;j++){
          this.model[i][j] = new Array(this.allSelectable[i].content[j].data.length);
          for(let k=0;k<this.allSelectable[i].content[j].data.length;k++)
            this.model[i][j][k] = false;
        }
      }
      this.selectable = this.allSelectable[0];
      this.indexS = 0;

      this.dialog = true;
    },
    addDetail(content, detail,indexC,indexSC){
      let pos = content.selected.indexOf(detail);
      if(pos== -1)
        content.selected.push(detail)
      else content.selected.splice(pos,1);
      this.model[this.indexS][indexC][indexSC] = !this.model[this.indexS][indexC][indexSC];
      this.reRenderCheckBox = false;
      this.reRenderCheckBox = true;
      console.log(this.model);
    },
    add() {
      this.$store.commit(
        "ADD_SELECTABLE",
        JSON.parse(JSON.stringify(this.selectable))
      );

      this.resetAllSelectable();
      this.dialog = false;
      this.$router.replace("/desorganise");
    },
    changeSelectable(index) {
      this.selectable = this.allSelectable[index];
      for (let i = 0; i < this.allSelectable.length; i++)
        this.selectableArray[i] = i == index;
      this.indexS = index;
    },
    resetAllSelectable(){
      for(let x=0;x<this.allSelectable.length;x++)
        this.allSelectable[x].reset();
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
      this.settings.custom.title.font,
      {
        pickerId: "titleFont",
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
    new FontPicker(
      "AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg",
      this.settings.custom.nomDetail.font,
      {
        pickerId: "nomDetailFont",
        limit: 150,
      }
    );

    new FontPicker(
      "AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg",
      this.settings.custom.nomPlat.font,
      {
        pickerId: "nomPlatFont",
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