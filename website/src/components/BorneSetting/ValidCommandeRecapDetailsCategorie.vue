<template>
  <table>
    <thead></thead>
    <tbody>
      <tr>
        <td>Police d'écriture</td>
        <td>
          <div id="font-picker-recapDetailCategorie"></div>
        </td>
      </tr>
      <tr>
          <td>
              Couleur de la police
          </td>
          <td>
            <v-color-picker
              mode="hexa"
              hide-mode-switch
              @update:color="changeRecapDetailFontColor"
              :value="borne.valid.recap.detail.categorie.fontColor"
              class="ma-2"
            ></v-color-picker>   
          </td>
      </tr>
      <tr>
          <td>
              Taille de la police
          </td>
          <td>
            <v-slider
              v-model="borne.valid.recap.detail.categorie.fontSize"
              class="align-center"
              max="50"
              min="0"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.valid.recap.detail.categorie.fontSize"
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
              Espacement Haut
          </td>
          <td>
            <v-slider
              v-model="borne.valid.recap.detail.categorie.marginT"
              class="align-center"
              max="50"
              min="0"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.valid.recap.detail.categorie.marginT"
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
              Espacement Gauche
          </td>
          <td>
            <v-slider
              v-model="borne.valid.recap.detail.categorie.marginL"
              class="align-center"
              max="50"
              min="0"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.valid.recap.detail.categorie.marginL"
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
    changeRecapDetailFontColor(e){
      this.borne.valid.recap.detail.categorie.fontColor = e.hexa;
    }
  },
  mounted(){
    let recapDetailCategorie = new FontPicker(
        'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
        this.borne.valid.recap.detail.categorie.font,
        {   
            pickerId: "recapDetailCategorie",
            limit: this.globalSettings.nbFont 
        },
    );
    recapDetailCategorie.setOnChange((font) => this.borne.valid.recap.detail.categorie.font = font.family);
  }
}
</script>

<style>

</style>