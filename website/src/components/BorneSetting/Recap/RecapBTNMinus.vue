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
                v-model="borne.list.recap.btnMinus.largeur"
                class="align-center"
                max="100"
                min="10"
                hide-details
                >
                <template v-slot:append>
                    <v-text-field
                    v-model="borne.list.recap.btnMinus.largeur"
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
                v-model="borne.list.recap.btnMinus.hauteur"
                class="align-center"
                max="100"
                min="10"
                hide-details
                >
                <template v-slot:append>
                    <v-text-field
                    v-model="borne.list.recap.btnMinus.hauteur"
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
                        :value="borne.list.recap.btnMinus.backgroundColor"
                        class="ma-2"
                ></v-color-picker>
              </td>
          </tr>
          <tr>
              <td>Espacement haut</td>
              <td>
                <v-slider
                v-model="borne.list.recap.btnMinus.marginT"
                class="align-center"
                max="50"
                min="0"
                hide-details
                >
                <template v-slot:append>
                    <v-text-field
                    v-model="borne.list.recap.btnMinus.marginT"
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
                v-model="borne.list.recap.btnMinus.marginL"
                class="align-center"
                max="50"
                min="0"
                hide-details
                >
                <template v-slot:append>
                    <v-text-field
                    v-model="borne.list.recap.btnMinus.marginL"
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
                v-model="borne.list.recap.btnMinus.logoSize"
                class="align-center"
                max="100"
                min="10"
                hide-details
                >
                <template v-slot:append>
                    <v-text-field
                    v-model="borne.list.recap.btnMinus.logoSize"
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
                    :value="borne.list.recap.btnMinus.logoColor"
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
                v-model="borne.list.recap.btnMinus.borderSize"
                class="align-center"
                max="10"
                min="0"
                hide-details
                >
                <template v-slot:append>
                    <v-text-field
                    v-model="borne.list.recap.btnMinus.borderSize"
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
                  Couleur des bordures
              </td>
              <td>
                <v-color-picker
                    mode="hexa"
                    hide-mode-switch
                    @update:color="changeBorderColor"
                    :value="borne.list.recap.btnMinus.borderColor"
                    class="ma-2"
                ></v-color-picker>
              </td>
          </tr>
          <tr>
              <td>
                Arroundi
              </td>
              <td>
                <v-slider
                v-model="borne.list.recap.btnMinus.borderRadius"
                class="align-center"
                max="100"
                min="0"
                hide-details
                >
                <template v-slot:append>
                    <v-text-field
                    v-model="borne.list.recap.btnMinus.borderRadius"
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
export default {
props : ['borne'],
methods : {
    changeBackgrouBtnColor(e){
        this.borne.list.recap.btnMinus.backgroundColor  = e.hexa;
    },
    changeLogoColor(e){
        this.borne.list.recap.btnMinus.logoColor = e.hexa;
    },
    changeBorderColor(e){
        this.borne.list.recap.btnMinus.borderColor = e.hexa;
    }
}
}
</script>

<style>

</style>