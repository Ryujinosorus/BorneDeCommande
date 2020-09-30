<template>
  <table>
      <tbody>
      <tr>
          <td>
              Taille de la police
          </td>
          <td>
            <v-slider
              v-model="borne.icon.title.fontSize"
              class="align-center"
              max="75"
              min="0"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.icon.title.fontSize"
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
          <td><div id="font-picker-iconTitleFont"></div></td>
      </tr>
        <tr>
            <td>Couleur de la police</td>
            <td>
                <v-color-picker mode="hexa" hide-mode-switch @update:color="changeWhereTitle" :value="borne.icon.title.fontColor" class="ma-2"></v-color-picker>
            </td>
        </tr>
      <tr>
          <td>
              Espacement Haut
          </td>
          <td>
            <v-slider
              v-model="borne.icon.title.marginTop"
              class="align-center"
              max="250"
              min="0"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.icon.title.marginTop"
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
import FontPicker from 'font-picker'
export default {
    props : ['borne','globalSettings'],
    methods : {
        changeWhereTitle(){
            this.borne.icon.title.fontColor;
        }
    },
    mounted(){
        let iconTitleFont = new FontPicker(
            'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
            this.borne.icon.title.font,
            {   
                pickerId: "iconTitleFont",
                limit: this.globalSettings.nbFont 
            },
        );
        iconTitleFont.setOnChange((font) => this.borne.icon.title.font = font.family);
    }
}
</script>

<style>

</style>