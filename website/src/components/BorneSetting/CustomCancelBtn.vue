<template>
  <table>
        <tr>
          <td>
              Hauteur
          </td>
          <td>
            <v-slider
              v-model="borne.custom.cancelBTN.hauteur"
              class="align-center"
              max="750"
              min="50"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.cancelBTN.hauteur"
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
              v-model="borne.custom.cancelBTN.largeur"
              class="align-center"
              max="750"
              min="50"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.cancelBTN.largeur"
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
              v-model="borne.custom.cancelBTN.marginT"
              class="align-center"
              max="500"
              min="0"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.cancelBTN.marginT"
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
              Espacement Gauche
          </td>
          <td>
            <v-slider
              v-model="borne.custom.cancelBTN.marginG"
              class="align-center"
              max="750"
              min="50"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.cancelBTN.marginG"
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
              :value="borne.custom.cancelBTN.backgroundColor"
              class="ma-2"
            ></v-color-picker>   
          </td>
      </tr>
      <tr>
        <td>Logo</td>
        <td><app-iconSelector :content='borne.custom.cancelBTN' title="annuler" :allData="iconCANCEL"></app-iconSelector></td>
      </tr>
      <tr>
        <td>
          Taille des bordure
        </td>
        <td>
              <v-slider
              v-model="borne.custom.cancelBTN.borderSize"
              class="align-center"
              max="50"
              min="0"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.cancelBTN.borderSize"
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
              :value="borne.custom.cancelBTN.borderColor"
              class="ma-2"
            ></v-color-picker>  
        </td>
      </tr>
      <tr>
        <td>
          Avec text
        </td>
        <td>
          <v-checkbox v-model="borne.custom.cancelBTN.withText"></v-checkbox>
        </td>
      </tr>
      <tr v-if="borne.custom.cancelBTN.withText">
        <td>Taille dédié à l'écriture</td>
        <td>
            <v-slider
              v-model="borne.custom.cancelBTN.textHeight"
              class="align-center"
              :max="borne.custom.cancelBTN.hauteur - 50"
              min="15"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.cancelBTN.textHeight"
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
      <tr v-if="borne.custom.cancelBTN.withText">
        <td>Couleur de fond du texte</td>
        <td>
            <v-color-picker
              mode="hexa"
              hide-mode-switch
              @update:color="changeBackgrounBTNTextColor"
              :value="borne.custom.cancelBTN.backgroundTextColor"
              class="ma-2"
            ></v-color-picker>  
        </td>
      </tr>
      <tr v-if="borne.custom.cancelBTN.withText">
        <td>
          Text
        </td>
        <td>
        <v-text-field class="apply-font-backFont" v-model="borne.custom.cancelBTN.text" label="Text du boutton annuler"></v-text-field>
        </td>
      </tr>
      <tr v-show="borne.custom.cancelBTN.withText">
        <td>
          Police
        </td>
        <td>
          <div id="font-picker-backFont"></div>
        </td>
      </tr>
      <tr v-if="borne.custom.cancelBTN.withText">
        <td>Taille de l'écriture</td>
        <td>
            <v-slider
              v-model="borne.custom.cancelBTN.fontSize"
              class="align-center"
              max="100"
              min="15"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.cancelBTN.fontSize"
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
      <tr v-if="borne.custom.cancelBTN.withText">
        <td>
          Couleur de l'ecriture
        </td>
        <td>
            <v-color-picker
              mode="hexa"
              hide-mode-switch
              @update:color="changeBTNTextColor"
              :value="borne.custom.cancelBTN.fontColor"
              class="ma-2"
            ></v-color-picker>   
        </td>
      </tr>
  </table>
</template>

<script>
import FontPicker from 'font-picker'
export default {
    props : ['borne','globalSettings'],
    data(){
      return{
        iconCANCEL : null,
      }
    },
    methods : {
        changeBackgrounBTNColor(e){
            this.borne.custom.cancelBTN.backgroundColor = e.hexa;
        },
        changeBTNTextColor(e){
          this.borne.custom.cancelBTN.fontColor = e.hexa;
        },
        changeBackgrounBTNTextColor(e){
          this.borne.custom.cancelBTN.backgroundTextColor = e.hexa;
        },
        changeBorderColor(e){
          this.borne.custom.cancelBTN.borderColor = e.hexa;
        }
    },
    mounted(){
        let font = new FontPicker(
            'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
            this.borne.custom.cancelBTN.font,
            {   
                pickerId: "backFont",
                limit: this.globalSettings.nbFont 
            },
        );
        font.setOnChange((font) => this.borne.custom.cancelBTN.font = font.family);
    },
    created(){
      this.iconCANCEL = this.$store.getters.icon['cancel'];
    }
}
</script>

<style>

</style>