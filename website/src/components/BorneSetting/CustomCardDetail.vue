<template>
  <table>
      <tbody>
          <tr>
              <td>Hauteur</td>
              <td>
            <v-slider
              v-model="borne.custom.cardDetail.hauteur"
              class="align-center"
              :max="1000"
              :min="50"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.cardDetail.hauteur"
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
              <td>Largeur</td>
              <td>
            <v-slider
              v-model="borne.custom.cardDetail.largeur"
              class="align-center"
              :max="1000"
              :min="50"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.cardDetail.largeur"
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
              <td>Espacement gauche</td>
              <td>
            <v-slider
              v-model="borne.custom.cardDetail.marginL"
              class="align-center"
              :max="1000"
              :min="50"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.cardDetail.marginL"
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
              <td>Espacement haut</td>
              <td>
            <v-slider
              v-model="borne.custom.cardDetail.marginT"
              class="align-center"
              :max="1000"
              :min="50"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.cardDetail.marginT"
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
              <td>Taille image</td>
              <td>
            <v-slider
              v-model="borne.custom.cardDetail.imgHeight"
              class="align-center"
              :max="borne.custom.cardDetail.hauteur -25"
              :min="25"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.cardDetail.imgHeight"
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
                <td>Couleur de fond</td>
                <td>
            <v-color-picker
              mode="hexa"
              hide-mode-switch
              @update:color="changeCardDetailBackgroundColor"
              :value="borne.custom.cardDetail.backgroundColor"
              class="ma-2"
            ></v-color-picker>
                </td>
            </tr>
            <tr>
              <td>Police d'écriture</td>
              <td>
                <div id="font-picker-cardDetailFont"></div>
              </td>
            </tr>
          <tr>
              <td>Taille de la police</td>
              <td>
            <v-slider
              v-model="borne.custom.cardDetail.fontSize"
              class="align-center"
              :max="50"
              :min="0"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.cardDetail.fontSize"
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
              <td>Couleur de la police</td>
              <td>
            <v-color-picker
              mode="hexa"
              hide-mode-switch
              @update:color="changeCardDetailFontColor"
              :value="borne.custom.cardDetail.fontColor"
              class="ma-2"
            ></v-color-picker>
              </td>
            </tr>
      </tbody>
  </table>
</template>

<script>
import FontPicker from 'font-picker'
export default {
  props : ['borne','globalSettings'],
  methods : {
    changeCardDetailBackgroundColor(e){
      this.borne.custom.cardDetail.backgroundColor = e.hexa;
    },
    changeCardDetailFontColor(e){
      this.borne.custom.cardDetail.fontColor = e.hexa;
    }
  },
  mounted(){
    let CardDetailFont = new FontPicker(
        'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
        this.borne.custom.cardDetail.font,
        {   
            pickerId: "cardDetailFont",
            limit: this.globalSettings.nbFont 
        },
    );
    CardDetailFont.setOnChange((font) => this.borne.custom.cardDetail.font = font.family);
  }
}
</script>
