<template>
  <table>
      <tbody>
          <tr>
              <td>Hauteur</td>
              <td>
            <v-slider
              v-model="borne.custom.selectDiv.hauteur"
              class="align-center"
              :max="10000"
              :min="250"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.selectDiv.hauteur"
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
              v-model="borne.custom.selectDiv.largeur"
              class="align-center"
              :max="10000"
              :min="500"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.selectDiv.largeur"
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
              v-model="borne.custom.selectDiv.marginT"
              class="align-center"
              :max="globalSettings.fontSize.max"
              :min="globalSettings.fontSize.min"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.selectDiv.marginT"
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
              @update:color="changeSelectDivBGColor"
              :value="borne.custom.selectDiv.backgroundColor"
              class="ma-2"
            ></v-color-picker>
              </td>
          </tr>
          <tr>
              <td>Epaisseur bordure</td>
              <td>
            <v-slider
              v-model="borne.custom.selectDiv.borderSize"
              class="align-center"
              max="50"
              min="0"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.selectDiv.borderSize"
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
              <td>Couleur de la bordure </td>
              <td>
            <v-color-picker
              mode="hexa"
              hide-mode-switch
              @update:color="changeSelectDivBorderColor"
              :value="borne.custom.selectDiv.borderColor"
              class="ma-2"
            ></v-color-picker>
              </td>
          </tr>
          <tr>
            <td>Bordure haut</td>
            <td>
              <v-checkbox v-model="borne.custom.selectDiv.borderT"></v-checkbox>
            </td>
          </tr>
          <tr>
            <td>Bordure droite</td>
            <td>
              <v-checkbox v-model="borne.custom.selectDiv.borderR"></v-checkbox>
            </td>
          </tr>
            <tr>
            <td>Bordure bas</td>
            <td>
              <v-checkbox v-model="borne.custom.selectDiv.borderB"></v-checkbox>
            </td>
          </tr>
          <tr>
            <td>Bordure gauche</td>
            <td>
              <v-checkbox v-model="borne.custom.selectDiv.borderL"></v-checkbox>
            </td>
          </tr>
      </tbody>
  </table>
</template>

<script>
export default {
    props:['borne','globalSettings'],
    methods : {
        changeSelectDivBGColor(e){
            this.borne.custom.selectDiv.backgroundColor =e.hexa;
        },
        changeSelectDivBorderColor(e){
          this.borne.custom.selectDiv.borderColor =e.hexa;
        }
    }
}
</script>

<style>

</style>