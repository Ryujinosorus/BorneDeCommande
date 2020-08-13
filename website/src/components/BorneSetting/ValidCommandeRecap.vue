<template>
  <table>
      <tr>
          <td>
              Largeur
          </td>
          <td>
            <v-slider
              v-model="borne.valid.recap.largeur"
              class="align-center"
              :max="1000"
              :min="50"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.valid.recap.largeur"
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
              Hauteur
          </td>
          <td>
            <v-slider
              v-model="borne.valid.recap.hauteur"
              class="align-center"
              :max="1000"
              :min="50"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.valid.recap.hauteur"
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
              Espacement hauteur px
          </td>
          <td>
            <v-slider
              v-model="borne.valid.recap.marginT"
              class="align-center"
              :max="1000"
              :min="0"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.valid.recap.marginT"
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
              Couleur Background
          </td>
          <td>
            <v-color-picker
              mode="hexa"
              hide-mode-switch
              @update:color="changeRecapBackgroundColor"
              :value="borne.valid.recap.backgroundColor"
              class="ma-2"
            ></v-color-picker>   
          </td>
      </tr>
      <tr>
          <td>
              Epaiseeur bordure
          </td>
          <td>
            <v-slider
              v-model="borne.valid.recap.borderSize"
              class="align-center"
              max="50"
              min="0"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="borne.valid.recap.borderSize"
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
              Couleur Bordure 
          </td>
          <td>
            <v-color-picker
              mode="hexa"
              hide-mode-switch
              @update:color="changeRecapBorderColor"
              :value="borne.valid.recap.borderColor"
              class="ma-2"
            ></v-color-picker>   
          </td>
      </tr>
  </table>
</template>

<script>
export default {
    props: ['borne'],
    methods : {
        changeRecapBackgroundColor(e){
            this.borne.valid.recap.backgroundColor = e.hexa;
        },
        changeRecapBorderColor(e){
            this.borne.valid.recap.borderColor = e.hexa;
        }
    }
}
</script>

<style>

</style>