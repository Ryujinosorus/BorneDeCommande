<template>
  <table>
      <thead>
          <tr>
              <td>Instruction</td>
              <td>ValeucardDetailr</td>
        </tr>
      </thead>
      <tbody>
          <tr>
              <td>Taille de la police</td>
              <td>
            <v-slider
              v-model="borne.custom.nomDetail.fontSize"
              class="align-center"
              :max="75"
              :min="10"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.nomDetail.fontSize"
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
              <td>Police</td>
              <td>
                  <div id="font-picker-nomDetailFont"></div>
              </td>
          </tr>
          <tr>
            <td>Couleur de la police</td>
            <td>
            <v-color-picker
              mode="hexa"
              hide-mode-switch
              @update:color="changeNomDetailFontColor"
              :value="borne.custom.nomDetail.fontColor"
              class="ma-2"
            ></v-color-picker>
            </td>
          </tr>
          <tr>
              <td>Espacement haut</td>
              <td>
            <v-slider
              v-model="borne.custom.nomDetail.marginT"
              class="align-center"
              :max="75"
              :min="10"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.nomDetail.marginT"
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
              v-model="borne.custom.nomDetail.marginL"
              class="align-center"
              :max="75"
              :min="10"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.nomDetail.marginL"
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
      </tbody>
  </table>
</template>

<script>
import FontPicker from 'font-picker';
export default {
    props : ["borne",'globalSettings'],
    methods : {
      changeNomDetailFontColor(e){
        this.borne.custom.nomDetail.fontColor = e.hexa;
      }
    },
    mounted(){
    let nomDetail = new FontPicker(
      "AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg",
      this.borne.custom.nomDetail.font,
      {
        pickerId: "nomDetailFont",
        limit: this.globalSettings.nbFont,
      }
    );
    nomDetail.setOnChange(
      (font) => (this.borne.custom.nomDetail.font = font.family)
    );
    }
}
</script>

<style>

</style>