<template>
  <table>
        <tr>
          <td>
              Hauteur
          </td>
          <td>
            <v-slider
              v-model="borne.valid.nextBTN.hauteur"
              class="align-center"
              max="750"
              min="50"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.valid.nextBTN.hauteur"
                  class="mt-0 pt-0"
                  hide-details
                  step="0.1"
                  single-line
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </td>
      </tr>
      <tr>
          <td>
              Largeur
          </td>
          <td>
            <v-slider
              v-model="borne.valid.nextBTN.largeur"
              class="align-center"
              max="750"
              min="50"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.valid.nextBTN.largeur"
                  class="mt-0 pt-0"
                  hide-details
                  step="0.1"
                  single-line
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </td>
      </tr>
      <tr>
          <td>
              Espacement Haut
          </td>
          <td>
            <v-slider
              v-model="borne.valid.nextBTN.marginT"
              class="align-center"
              max="500"
              min="0"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.valid.nextBTN.marginT"
                  class="mt-0 pt-0"
                  hide-details
                  step="0.1"
                  single-line
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </td>
      </tr>
      <tr>
          <td>
              Espacement Droite
          </td>
          <td>
            <v-slider
              v-model="borne.valid.nextBTN.marginR"
              class="align-center"
              max="750"
              min="50"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.valid.nextBTN.marginR"
                  class="mt-0 pt-0"
                  hide-details
                  step="0.1"
                  single-line
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </td>
      </tr>
      <tr>
          <td>
              Couleur de fond
          </td>
          <td>
            <v-color-picker
              mode="hexa"
              hide-mode-switch
              @update:color="changeBackgrounBTNColor"
              :value="borne.valid.nextBTN.backgroundColor"
              class="ma-2"
            ></v-color-picker>   
          </td>
      </tr>
      <tr>
        <td>Logo</td>
        <td><app-iconSelector :content='borne.valid.nextBTN' title="à emporter" :allData="iconNEXT"></app-iconSelector></td>
      </tr>
      <tr>
        <td>
          Taille des bordure
        </td>
        <td>
              <v-slider
              v-model="borne.valid.nextBTN.borderSize"
              class="align-center"
              max="50"
              min="0"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.valid.nextBTN.borderSize"
                  class="mt-0 pt-0"
                  hide-details
                  step="0.1"
                  single-line
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
        </td>
      </tr>
      <tr>
        <td>Couleur des bordures</td>
        <td>
            <v-color-picker
              mode="hexa"
              hide-mode-switch
              @update:color="changeBorderColor"
              :value="borne.valid.nextBTN.borderColor"
              class="ma-2"
            ></v-color-picker>  
        </td>
      </tr>
      <tr>
        <td>
          Avec text
        </td>
        <td>
          <v-checkbox v-model="borne.valid.nextBTN.withText"></v-checkbox>
        </td>
      </tr>
      <tr v-if="borne.valid.nextBTN.withText">
        <td>Taille dédié à l'écriture</td>
        <td>
            <v-slider
              v-model="borne.valid.nextBTN.textHeight"
              class="align-center"
              :max="borne.valid.nextBTN.hauteur - 50"
              min="15"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.valid.nextBTN.textHeight"
                  class="mt-0 pt-0"
                  hide-details
                  step="0.1"
                  single-line
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
        </td>
      </tr>
      <tr v-if="borne.valid.nextBTN.withText">
        <td>Couleur de fond du texte</td>
        <td>
            <v-color-picker
              mode="hexa"
              hide-mode-switch
              @update:color="changeBackgrounBTNTextColor"
              :value="borne.valid.nextBTN.backgroundTextColor"
              class="ma-2"
            ></v-color-picker>  
        </td>
      </tr>
      <tr v-if="borne.valid.nextBTN.withText">
        <td>
          Text
        </td>
        <td>
        <v-text-field class="apply-font-backFont" v-model="borne.valid.nextBTN.text" label="Text du boutton continuer"></v-text-field>
        </td>
      </tr>
      <tr v-show="borne.valid.nextBTN.withText">
        <td>
          Police
        </td>
        <td>
          <div id="font-picker-nextFont"></div>
        </td>
      </tr>
      <tr v-if="borne.valid.nextBTN.withText">
        <td>Taille de l'écriture</td>
        <td>
            <v-slider
              v-model="borne.valid.nextBTN.fontSize"
              class="align-center"
              max="100"
              min="15"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.valid.nextBTN.fontSize"
                  class="mt-0 pt-0"
                  hide-details
                  step="0.1"
                  single-line
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
        </td>
      </tr>
      <tr v-if="borne.valid.nextBTN.withText">
        <td>
          Couleur de l'ecriture
        </td>
        <td>
            <v-color-picker
              mode="hexa"
              hide-mode-switch
              @update:color="changeBTNTextColor"
              :value="borne.valid.nextBTN.fontColor"
              class="ma-2"
            ></v-color-picker>   
        </td>
      </tr>
  </table>
</template>

<script>
import IconNEXT from '../../Data/back'
import FontPicker from 'font-picker'
export default {
    props : ['borne','globalSettings'],
    data(){
      return{
        iconNEXT : IconNEXT,
      }
    },
    methods : {
        changeBackgrounBTNColor(e){
            this.borne.valid.nextBTN.backgroundColor = e.hexa;
        },
        changeBTNTextColor(e){
          this.borne.valid.nextBTN.fontColor = e.hexa;
        },
        changeBackgrounBTNTextColor(e){
          this.borne.valid.nextBTN.backgroundTextColor = e.hexa;
        },
        changeBorderColor(e){
          this.borne.valid.nextBTN.borderColor = e.hexa;
        }
    },
    mounted(){
        let font = new FontPicker(
            'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
            this.borne.valid.nextBTN.font,
            {   
                pickerId: "nextFont",
                limit: this.globalSettings.nbFont 
            },
        );
        font.setOnChange((font) => this.borne.valid.nextBTN.font = font.family);
    }
}
</script>

<style>

</style>