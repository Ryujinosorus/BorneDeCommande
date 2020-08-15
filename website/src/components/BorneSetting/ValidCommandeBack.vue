<template>
  <table>
        <tr>
          <td>
              Hauteur
          </td>
          <td>
            <v-slider
              v-model="borne.valid.backBTN.hauteur"
              class="align-center"
              max="750"
              min="50"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.valid.backBTN.hauteur"
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
              v-model="borne.valid.backBTN.largeur"
              class="align-center"
              max="750"
              min="50"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.valid.backBTN.largeur"
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
              v-model="borne.valid.backBTN.marginT"
              class="align-center"
              max="500"
              min="0"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.valid.backBTN.marginT"
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
              v-model="borne.valid.backBTN.marginG"
              class="align-center"
              max="750"
              min="50"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.valid.backBTN.marginG"
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
              :value="borne.valid.backBTN.backgroundColor"
              class="ma-2"
            ></v-color-picker>   
          </td>
      </tr>
      <tr>
        <td>Logo</td>
        <td><app-iconSelector :content='borne.valid.backBTN' title="à emporter" :allData="iconBACK"></app-iconSelector></td>
      </tr>
      <tr>
        <td>
          Taille des bordure
        </td>
        <td>
              <v-slider
              v-model="borne.valid.backBTN.borderSize"
              class="align-center"
              max="50"
              min="0"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.valid.backBTN.borderSize"
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
              :value="borne.valid.backBTN.borderColor"
              class="ma-2"
            ></v-color-picker>  
        </td>
      </tr>
      <tr>
        <td>
          Avec text
        </td>
        <td>
          <v-checkbox v-model="borne.valid.backBTN.withText"></v-checkbox>
        </td>
      </tr>
      <tr v-if="borne.valid.backBTN.withText">
        <td>Taille dédié à l'écriture</td>
        <td>
            <v-slider
              v-model="borne.valid.backBTN.textHeight"
              class="align-center"
              :max="borne.valid.backBTN.hauteur - 50"
              min="15"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.valid.backBTN.textHeight"
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
      <tr v-if="borne.valid.backBTN.withText">
        <td>Couleur de fond du texte</td>
        <td>
            <v-color-picker
              mode="hexa"
              hide-mode-switch
              @update:color="changeBackgrounBTNTextColor"
              :value="borne.valid.backBTN.backgroundTextColor"
              class="ma-2"
            ></v-color-picker>  
        </td>
      </tr>
      <tr v-if="borne.valid.backBTN.withText">
        <td>
          Text
        </td>
        <td>
        <v-text-field class="apply-font-backFont" v-model="borne.valid.backBTN.text" label="Text du boutton annuler"></v-text-field>
        </td>
      </tr>
      <tr v-show="borne.valid.backBTN.withText">
        <td>
          Police
        </td>
        <td>
          <div id="font-picker-backFont"></div>
        </td>
      </tr>
      <tr v-if="borne.valid.backBTN.withText">
        <td>Taille de l'écriture</td>
        <td>
            <v-slider
              v-model="borne.valid.backBTN.fontSize"
              class="align-center"
              max="100"
              min="15"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.valid.backBTN.fontSize"
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
      <tr v-if="borne.valid.backBTN.withText">
        <td>
          Couleur de l'ecriture
        </td>
        <td>
            <v-color-picker
              mode="hexa"
              hide-mode-switch
              @update:color="changeBTNTextColor"
              :value="borne.valid.backBTN.fontColor"
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
        iconBACK : null,
      }
    },
    methods : {
        changeBackgrounBTNColor(e){
            this.borne.valid.backBTN.backgroundColor = e.hexa;
        },
        changeBTNTextColor(e){
          this.borne.valid.backBTN.fontColor = e.hexa;
        },
        changeBackgrounBTNTextColor(e){
          this.borne.valid.backBTN.backgroundTextColor = e.hexa;
        },
        changeBorderColor(e){
          this.borne.valid.backBTN.borderColor = e.hexa;
        }
    },
    mounted(){
        let font = new FontPicker(
            'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
            this.borne.valid.backBTN.font,
            {   
                pickerId: "backFont",
                limit: this.globalSettings.nbFont 
            },
        );
        font.setOnChange((font) => this.borne.valid.backBTN.font = font.family);
    },
    created(){
      this.iconBACK = this.$store.getters.icon['back'];
    }
}
</script>

<style>

</style>