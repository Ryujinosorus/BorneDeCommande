<template>
  <table>
      <tr>
          <td>
              Taille dédié au titre
          </td>
          <td>
            <v-slider
              v-model="borne.valid.recap.titre.height"
              class="align-center"
              max="800"
              min="100"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.valid.recap.titre.height"
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
          <td>Couleur de font du titre</td>
          <td>
            <v-color-picker
              mode="hexa"
              hide-mode-switch
              @update:color="changeRecapTitreBackgroundColor"
              :value="borne.valid.recap.titre.backgroundColor"
              class="ma-2"
            ></v-color-picker>   
          </td>
      </tr>
        <tr>
            <td>
                Text du titre
            </td>
            <td>
                 <v-text-field class="apply-font-recapTitre" label="Text du titre" v-model="borne.valid.recap.titre.text"></v-text-field>
            </td>
        </tr>
        <tr>
            <td>
                Police du titre
            </td>
            <td>
                <div id="font-picker-recapTitre"></div>
            </td>
        </tr>
      <tr>
          <td>
              Taille de l'ecriture
          </td>
          <td>
            <v-slider
              v-model="borne.valid.recap.titre.fontSize"
              class="align-center"
              max="100"
              min="10"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.valid.recap.titre.fontSize"
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
              @update:color="changeRecapTitreColor"
              :value="borne.valid.recap.titre.fontColor"
              class="ma-2"
            ></v-color-picker>   
          </td>
      </tr>
      <tr>
          <td>
              Taille des bordures
          </td>
          <td>
            <v-slider
              v-model="borne.valid.recap.titre.borderSize"
              class="align-center"
              max="50"
              min="0"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.valid.recap.titre.borderSize"
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
              @update:color="changeBorderTitreRecapColor"
              :value="borne.valid.recap.titre.borderColor"
              class="ma-2"
            ></v-color-picker>   
          </td>
      </tr>
      <tr>
          <td>
              Bordure gauche
          </td>
          <td>
              <v-checkbox v-model="borne.valid.recap.titre.borderL"></v-checkbox>
          </td>
      </tr>
      <tr>
          <td>
              Bordure droit
          </td>
          <td>
              <v-checkbox v-model="borne.valid.recap.titre.borderR"></v-checkbox>
          </td>
      </tr>
      <tr>
          <td>
              Bordure haut
          </td>
          <td>
              <v-checkbox v-model="borne.valid.recap.titre.borderT"></v-checkbox>
          </td>
      </tr>
      <tr>
          <td>
              Bordure bas
          </td>
          <td>
              <v-checkbox v-model="borne.valid.recap.titre.borderB"></v-checkbox>
          </td>
      </tr>
  </table>
</template>

<script>
import FontPicker from 'font-picker'
export default {
    props : ['borne','globalSettings'],
    methods:{
        changeRecapTitreBackgroundColor(e){
            this.borne.valid.recap.titre.backgroundColor = e.hexa;
        },
        changeRecapTitreColor(e){
            this.borne.valid.recap.titre.fontColor  = e.hexa;
        },
        changeBorderTitreRecapColor(e){
            this.borne.valid.recap.titre.borderColor = e.hexa;
        }
    },
    mounted(){
        let fontRecapTitre = new FontPicker(
            'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
            this.borne.valid.recap.titre.font,
            {   
                pickerId: "recapTitre",
                limit: this.globalSettings.nbFont 
            },
        );
        fontRecapTitre.setOnChange((font) => this.borne.valid.recap.titre.font = font.family);
    }
}
</script>

<style>

</style>