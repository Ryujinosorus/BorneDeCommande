<template>
  <table>
      <thead>
          <tr>
              <td>Instruction</td>
              <td>Valeur</td>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>Largeur</td>
              <td>
                <v-slider
                v-model="borne.list.recap.btnPlus.largeur"
                class="align-center"
                max="100"
                min="10"
                hide-details
                >
                <template v-slot:append>
                    <v-text-field
                    v-model="borne.list.recap.btnPlus.largeur"
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
              <td>Hauteur</td>
              <td>
                <v-slider
                v-model="borne.list.recap.btnPlus.hauteur"
                class="align-center"
                max="100"
                min="10"
                hide-details
                >
                <template v-slot:append>
                    <v-text-field
                    v-model="borne.list.recap.btnPlus.hauteur"
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
                  Couleur de fond
              </td>
              <td>
                    <v-color-picker
                        mode="hexa"
                        hide-mode-switch
                        @update:color="changeBackgrouBtnColor"
                        :value="borne.list.recap.btnPlus.backgroundColor"
                        class="ma-2"
                ></v-color-picker>
              </td>
          </tr>
          <tr>
              <td>Espacement haut</td>
              <td>
                <v-slider
                v-model="borne.list.recap.btnPlus.marginT"
                class="align-center"
                max="50"
                min="0"
                hide-details
                >
                <template v-slot:append>
                    <v-text-field
                    v-model="borne.list.recap.btnPlus.marginT"
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
                v-model="borne.list.recap.btnPlus.marginL"
                class="align-center"
                max="50"
                min="0"
                hide-details
                >
                <template v-slot:append>
                    <v-text-field
                    v-model="borne.list.recap.btnPlus.marginL"
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
              <td>Taille du logo</td>
              <td>
                <v-slider
                v-model="borne.list.recap.btnPlus.logoSize"
                class="align-center"
                max="100"
                min="10"
                hide-details
                >
                <template v-slot:append>
                    <v-text-field
                    v-model="borne.list.recap.btnPlus.logoSize"
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
                  Couleur du logo
              </td>
              <td>
                <v-color-picker
                    mode="hexa"
                    hide-mode-switch
                    @update:color="changeLogoColor"
                    :value="borne.list.recap.btnPlus.logoColor"
                    class="ma-2"
                ></v-color-picker>
              </td>
          </tr>
      </tbody>
  </table>
</template>

<script>
export default {
props : ['borne'],
methods : {
    changeBackgrouBtnColor(e){
        this.borne.list.recap.btnPlus.backgroundColor  = e.hexa;
    },
    changeLogoColor(e){
        this.borne.list.recap.btnPlus.logoColor = e.hexa;
    }
}
}
</script>

<style>

</style>