<template>
  <table>
        <tr>
          <td>
              Hauteur
          </td>
          <td>
            <v-slider
              v-model="borne.custom.addBTN.hauteur"
              class="align-center"
              max="750"
              min="50"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.addBTN.hauteur"
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
              v-model="borne.custom.addBTN.largeur"
              class="align-center"
              max="750"
              min="50"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.addBTN.largeur"
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
              v-model="borne.custom.addBTN.marginT"
              class="align-center"
              max="500"
              min="0"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.addBTN.marginT"
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
              v-model="borne.custom.addBTN.marginG"
              class="align-center"
              max="750"
              min="50"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.addBTN.marginG"
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
              :value="borne.custom.addBTN.backgroundColor"
              class="ma-2"
            ></v-color-picker>   
          </td>
      </tr>
      <tr>
        <td>Logo</td>
        <td><app-iconSelector :content='borne.custom.addBTN' title="ajouter a la commande" :allData="iconADD"></app-iconSelector></td>
      </tr>
      <tr>
        <td>
          Taille des bordure
        </td>
        <td>
              <v-slider
              v-model="borne.custom.addBTN.borderSize"
              class="align-center"
              max="50"
              min="0"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.addBTN.borderSize"
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
              :value="borne.custom.addBTN.borderColor"
              class="ma-2"
            ></v-color-picker>  
        </td>
      </tr>
      <tr>
        <td>
          Avec text
        </td>
        <td>
          <v-checkbox v-model="borne.custom.addBTN.withText"></v-checkbox>
        </td>
      </tr>
      <tr v-if="borne.custom.addBTN.withText">
        <td>Taille dédié à l'écriture</td>
        <td>
            <v-slider
              v-model="borne.custom.addBTN.textHeight"
              class="align-center"
              :max="borne.custom.addBTN.hauteur - 50"
              min="15"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.addBTN.textHeight"
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
      <tr v-if="borne.custom.addBTN.withText">
        <td>Couleur de fond du texte</td>
        <td>
            <v-color-picker
              mode="hexa"
              hide-mode-switch
              @update:color="changeBackgrounBTNTextColor"
              :value="borne.custom.addBTN.backgroundTextColor"
              class="ma-2"
            ></v-color-picker>  
        </td>
      </tr>
      <tr v-if="borne.custom.addBTN.withText">
        <td>
          Text
        </td>
        <td>
        <v-text-field class="apply-font-addFont" v-model="borne.custom.addBTN.text" label="Text du boutton annuler"></v-text-field>
        </td>
      </tr>
      <tr v-show="borne.custom.addBTN.withText">
        <td>
          Police
        </td>
        <td>
          <div id="font-picker-addFont"></div>
        </td>
      </tr>
      <tr v-if="borne.custom.addBTN.withText">
        <td>Taille de l'écriture</td>
        <td>
            <v-slider
              v-model="borne.custom.addBTN.fontSize"
              class="align-center"
              max="100"
              min="15"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.addBTN.fontSize"
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
      <tr v-if="borne.custom.addBTN.withText">
        <td>
          Couleur de l'ecriture
        </td>
        <td>
            <v-color-picker
              mode="hexa"
              hide-mode-switch
              @update:color="changeBTNTextColor"
              :value="borne.custom.addBTN.fontColor"
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
        iconADD : null,
      }
    },
    methods : {
        changeBackgrounBTNColor(e){
            this.borne.custom.addBTN.backgroundColor = e.hexa;
        },
        changeBTNTextColor(e){
          this.borne.custom.addBTN.fontColor = e.hexa;
        },
        changeBackgrounBTNTextColor(e){
          this.borne.custom.addBTN.backgroundTextColor = e.hexa;
        },
        changeBorderColor(e){
          this.borne.custom.addBTN.borderColor = e.hexa;
        }
    },
    mounted(){
        let font = new FontPicker(
            'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
            this.borne.custom.addBTN.font,
            {   
                pickerId: "addFont",
                limit: this.globalSettings.nbFont 
            },
        );
        font.setOnChange((font) => this.borne.custom.addBTN.font = font.family);
    },
    created(){
      this.iconADD = this.$store.getters.icon['add'];
    }
}
</script>

<style>

</style>