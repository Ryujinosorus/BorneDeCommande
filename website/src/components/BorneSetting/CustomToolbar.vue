<template>
  <table>
    <tbody>
      <tr>
        <td>Taille toolbar</td>
        <td>
            <v-slider
              v-model="borne.custom.toolbar.height"
              class="align-center"
              :max="globalSettings.fontSize.max"
              :min="globalSettings.fontSize.min"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.toolbar.height"
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
            <td>Background Color</td>
            <td>
            <v-color-picker
              mode="hexa"
              hide-mode-switch
              @update:color="changeToolbarColor"
              :value="borne.custom.toolbar.backgroundColor"
              class="ma-2"
            ></v-color-picker>
            </td>
        </tr>
        <tr>
            <td>Text de la barre d'outils</td>
            <td><v-text-field class="apply-font-toolbarFont" label="Text de la barre a outil" v-model="borne.custom.toolbar.text"></v-text-field></td>
        </tr>
      <tr>
          <td>Police d'ecriture du texte de la barre d'outils</td>
          <td>
              <div id="font-picker-toolbarFont"></div>
          </td>
      </tr>
      <tr>
        <td>Couleur du texte de la toolbar</td>
        <td>
            <v-color-picker
              mode="hexa"
              hide-mode-switch
              @update:color="changeToolbarTextColor"
              :value="borne.custom.toolbar.textColor"
              class="ma-2"
            ></v-color-picker>
        </td>
      </tr>
      <tr>
        <td>Taille du text de la toolbar</td>
        <td>
            <v-slider
              v-model="borne.custom.toolbar.textSize"
              class="align-center"
              :max="globalSettings.fontSize.max"
              :min="globalSettings.fontSize.min"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.toolbar.textSize"
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
            <td>Couleur du bouton</td>
            <td>
            <v-color-picker
              mode="hexa"
              hide-mode-switch
              @update:color="changeBTNToolbarColor"
              :value="borne.custom.toolbar.btnColor"
              class="ma-2"
            ></v-color-picker>
            </td>
        </tr>
        <tr>
        <td>Taille du boutton</td>
        <td>
            <v-slider
              v-model="borne.custom.toolbar.btnSize"
              class="align-center"
              :max="globalSettings.fontSize.max"
              :min="globalSettings.fontSize.min"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.toolbar.btnSize"
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
        <td>Espacement gauche du text</td>
        <td>
            <v-slider
              v-model="borne.custom.toolbar.marginL"
              class="align-center"
              :max="globalSettings.fontSize.max"
              :min="globalSettings.fontSize.min"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.custom.toolbar.marginL"
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
    props : ['borne','globalSettings'],
    methods:{
        changeToolbarColor(e){
            this.borne.custom.toolbar.backgroundColor = e.hexa;
        },
        changeBTNToolbarColor(e){
            this.borne.custom.toolbar.btnColor = e.hexa;
        },
        changeToolbarTextColor(e){
          this.borne.custom.toolbar.textColor = e.hexa;
        }
    },
    mounted(){
        let fontToolbar = new FontPicker(
            'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
            this.borne.custom.toolbar.font,
            {   
                pickerId: "toolbarFont",
                limit: this.globalSettings.nbFont 
            },
        );
        fontToolbar.setOnChange((font) => this.borne.custom.toolbar.font = font.family);
    }
};
</script>

<style>
</style>