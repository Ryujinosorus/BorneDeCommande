<template>
  <table>
      <tbody>
          <tr>
              <td>Hauteur</td>
              <td>
            <v-slider
              v-model="borne.custom.carousel.hauteur"
              class="align-center"
              :max="10000"
              :min="250"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.carousel.hauteur"
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
              v-model="borne.custom.carousel.largeur"
              class="align-center"
              :max="10000"
              :min="500"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.carousel.largeur"
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
              v-model="borne.custom.carousel.marginL"
              class="align-center"
              :max="globalSettings.fontSize.max"
              :min="globalSettings.fontSize.min"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.carousel.marginL"
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
              v-model="borne.custom.carousel.marginT"
              class="align-center"
              :max="globalSettings.fontSize.max"
              :min="globalSettings.fontSize.min"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.carousel.marginT"
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
              @update:color="changeCarouselBGColor"
              :value="borne.custom.carousel.backgroundColor"
              class="ma-2"
            ></v-color-picker>
              </td>
          </tr>
      </tbody>
  </table>
</template>

<script>
export default {
    props:['borne','globalSettings'],
    methods : {
        changeCarouselBGColor(e){
            this.borne.custom.carousel.backgroundColor =e.hexa;
        }
    }
}
</script>

<style>

</style>