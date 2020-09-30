<template>
  <table>
      <tbody>
          <tr>
              <td>
                  Background color
              </td>
              <td>
            <v-color-picker
              mode="hexa"
              hide-mode-switch
              @update:color="changeValidBackgroundColor"
              :value="borne.valid.backgroundColor"
              class="ma-2"
            ></v-color-picker>
              </td>
          </tr>
          <tr>
              <td>Text de validation</td>
                <td>
                    <v-text-field class="apply-font-validFont" label="Text de validation" v-model="borne.valid.text"></v-text-field>
                </td>
           </tr>
           <tr>
               <td>Police du texte de validation</td>
               <td>
                <div id="font-picker-validFont">
                </div>
               </td>
           </tr>
           <tr>
               <td>Couleur de l'ecriture</td>
               <td>
            <v-color-picker
              mode="hexa"
              hide-mode-switch
              @update:color="changeValidFontColor"
              :value="borne.valid.fontColor"
              class="ma-2"
            ></v-color-picker>    
               </td>
           </tr>
           <tr>
               <td>Taille de l'ecriture du texte de vlaidation</td>
               <td>
            <v-slider
              v-model="borne.valid.fontSize"
              class="align-center"
              :max="100"
              :min="10"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.valid.fontSize"
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
              v-model="borne.valid.marginT"
              class="align-center"
              :max="500"
              :min="0"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.valid.marginT"
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
               <td>Epaisseur bordure entre chaque commande</td>
               <td>
            <v-slider
              v-model="borne.valid.recap.detail.borderSize"
              class="align-center"
              :max="500"
              :min="0"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.valid.recap.detail.borderSize"
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
                  Couleur de la bordure
              </td>
              <td>
            <v-color-picker
              mode="hexa"
              hide-mode-switch
              @update:color="changeValidBorderColorCommandeRecap"
              :value="borne.valid.recap.detail.borderColor"
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
      changeValidBorderColorCommandeRecap(e){
        this.borne.valid.recap.detail.borderColor = e.hexa;
      },
        changeValidBackgroundColor(e){
            this.borne.valid.backgroundColor = e.hexa
        },
        changeValidFontColor(e){
            this.borne.valid.fontColor = e.hexa
        }
    },
    mounted(){
        let fontValidText = new FontPicker(
            'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
            this.borne.valid.font,
            {   
                pickerId: "validFont",
                limit: this.globalSettings.nbFont 
            },
        );
        fontValidText.setOnChange((font) => this.borne.valid.font = font.family);
    }
}
</script>

<style>

</style>