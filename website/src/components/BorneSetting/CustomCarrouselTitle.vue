<template>
  <table>
    <tbody>
      <tr>
        <td>Text</td>
        <td>
          <v-text-field class="apply-font-customTilteFont" v-model="borne.custom.title.text" label="Text du titre"></v-text-field>
        </td>
      </tr>
      <tr>
        <td>Police</td>
        <td>
          <div id="font-picker-customTilteFont"></div>
        </td>
      </tr>
      <tr>
        <td>Taille du titre</td>
        <td>
          <v-slider
            v-model="borne.custom.title.fontSize"
            class="align-center"
            :max="globalSettings.fontSize.max"
            :min="globalSettings.fontSize.min"
            hide-details
          >
            <template v-slot:append>
              <v-text-field
                v-model="borne.custom.title.fontSize"
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
        <td>Couleur du titre</td>
        <td>
          <v-color-picker
            mode="hexa"
            hide-mode-switch
            @update:color="changeCustomFontColor"
            :value="borne.custom.title.fontColor"
            class="ma-2"
          ></v-color-picker>
        </td>
      </tr>
      <tr>
        <td>Espacement haut</td>
        <td>
          <v-slider
            v-model="borne.custom.title.marginT"
            class="align-center"
            max="500"
            min="0"
            hide-details
          >
            <template v-slot:append>
              <v-text-field
                v-model="borne.custom.title.marginT"
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
import FontPicker from "font-picker";
export default {
  props: ["borne", "globalSettings"],
  methods: {
    changeCustomFontColor(e) {
      this.borne.custom.title.fontColor = e.hexa;
    },
    changeCarouselTextColor(e) {
      this.borne.custom.carousel.textColor = e.hexa;
    },
  },
  mounted() {
    let customTilteFont = new FontPicker(
      "AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg",
      this.borne.custom.title.font,
      {
        pickerId: "customTilteFont",
        limit: this.globalSettings.nbFont,
      }
    );
    customTilteFont.setOnChange(
      (font) => (this.borne.custom.title.font = font.family)
    );
  },
};
</script>

<style>
</style>