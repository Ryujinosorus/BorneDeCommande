<template>
  <table>
      <tbody>
          <tr>
            <td>Epsce dédié au titre</td>
            <td>
            <v-slider
              v-model="borne.custom.carousel.textHeight"
              class="align-center"
              :max="globalSettings.fontSize.max"
              :min="globalSettings.fontSize.min"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.carousel.textHeight"
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
              :value="borne.custom.carousel.textBackgroundColor"
              class="ma-2"
            ></v-color-picker>
            </td>
          </tr>
          <tr>
              <td>Police</td>
              <td>
                  <div id="font-picker-carouselTilteFont"></div>
              </td>
          </tr>
          <tr>
              <td>Taille de la police</td>
              <td>
            <v-slider
              v-model="borne.custom.carousel.fontSize"
              class="align-center"
              :max="globalSettings.fontSize.max"
              :min="globalSettings.fontSize.min"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.carousel.fontSize"
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
              @update:color="changeCarouselTextColor"
              :value="borne.custom.carousel.textColor"
              class="ma-2"
            ></v-color-picker>
              </td>
          </tr>
      </tbody>
  </table>
</template>

<script>
import FontPicker from 'font-picker';
export default {
    props : ['borne','globalSettings'],
    methods : {
        changeCarouselBGColor(e){
            this.borne.custom.carousel.textBackgroundColor = e.hexa;
        },
        changeCarouselTextColor(e){
            this.borne.custom.carousel.textColor = e.hexa;
        }
    },
    mounted(){
        let carouselTilteFont = new FontPicker(
            'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
            this.borne.custom.carousel.font,
            {   
                pickerId: "carouselTilteFont",
                limit: this.globalSettings.nbFont 
            },
        );
        carouselTilteFont.setOnChange((font) => this.borne.custom.carousel.font = font.family);
    }
}
</script>

<style>

</style>