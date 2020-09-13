<template>
  <table>
      <thead>
      </thead>
      <tbody>
          <tr>
              <td>hauteur</td>
              <td>
                <v-slider
                v-model="borne.list.showFood.back.hauteur"
                class="align-center"
                max="1000"
                min="50"
                hide-details
            >
                <template v-slot:append>
                <v-text-field
                    v-model="borne.list.showFood.back.hauteur"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="number"
                    step='0.1'
                    style="width: 60px"
                ></v-text-field>
                </template>
            </v-slider>
              </td>
          </tr>
          <tr>
              <td>Largeur</td>
              <td>
                <v-slider
                v-model="borne.list.showFood.back.largeur"
                class="align-center"
                max="1000"
                min="50"
                hide-details
            >
                <template v-slot:append>
                <v-text-field
                    v-model="borne.list.showFood.back.largeur"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="number"
                    step='0.1'
                    style="width: 60px"
                ></v-text-field>
                </template>
            </v-slider>
              </td>
          </tr>
          <tr>
              <td>Avec text</td>
              <td>
                  <v-checkbox v-model="borne.list.showFood.back.withText"></v-checkbox>
              </td>
          </tr>
          <tr v-if="borne.list.showFood.back.withText">
              <td>Text</td>
              <td><v-text-field v-model="borne.list.showFood.back.text" label="Text du retour"></v-text-field></td>
          </tr>
          <tr v-show="borne.list.showFood.back.withText">
              <td>Police</td>
              <td><div id="font-picker-backMenu"></div></td>
          </tr>
          <tr  v-if="borne.list.showFood.back.withText">
              <td>Couleur de la police</td>
              <td>
                  <v-color-picker mode="hexa" hide-mode-switch @update:color="changeBackTextColor" :value="borne.list.showFood.back.textColor" class="ma-2"></v-color-picker>
              </td>
          </tr>
          <tr  v-if="borne.list.showFood.back.withText">
              <td>Taille de la police</td>
              <td>
                <v-slider
                v-model="borne.list.showFood.back.fontSize"
                class="align-center"
                max="150"
                min="10"
                hide-details
            >
                <template v-slot:append>
                <v-text-field
                    v-model="borne.list.showFood.back.fontSize"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="number"
                    step='0.1'
                    style="width: 60px"
                ></v-text-field>
                </template>
            </v-slider>
              </td>
          </tr>
          <tr v-if="borne.list.showFood.back.withText">
              <td>Espace dédie a l'ecriture</td>
              <td>
                <v-slider
                v-model="borne.list.showFood.back.textHauteur"
                class="align-center"
                max="1000"
                min="50"
                hide-details
            >
                <template v-slot:append>
                <v-text-field
                    v-model="borne.list.showFood.back.textHauteur"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="number"
                    step='0.1'
                    style="width: 60px"
                ></v-text-field>
                </template>
            </v-slider>
              </td>
          </tr>
          <tr v-if="borne.list.showFood.back.withText">
              <td>Couleur de fond de la zone de 'écriture</td>
              <td>
                  <v-color-picker mode="hexa" hide-mode-switch @update:color="changeBackgroundColorText" :value="borne.list.showFood.back.backgroundColorText" class="ma-2"></v-color-picker>
              </td>
          </tr>
          <tr>
              <td>Taille des bordures</td>
              <td>
                <v-slider
                v-model="borne.list.showFood.back.borderSize"
                class="align-center"
                max="100"
                min="0"
                hide-details
            >
                <template v-slot:append>
                <v-text-field
                    v-model="borne.list.showFood.back.borderSize"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="number"
                    step='0.1'
                    style="width: 60px"
                ></v-text-field>
                </template>
            </v-slider>
              </td>
          </tr>
          <tr>
              <td>Couleur des bordures</td>
              <td> <v-color-picker mode="hexa" hide-mode-switch @update:color="changeBorderColor" :value="borne.list.showFood.back.borderColor" class="ma-2"></v-color-picker>
              </td>
          </tr>
          <tr>
              <td>Image de retour</td>
              <td>
                  <v-img :src="borne.list.showFood.back.picture"></v-img>
                  <v-file-input @change="changePicture" label="Changer cette image ?"></v-file-input>
                </td>
          </tr>
      </tbody>
  </table>
</template>

<script>
import FontPicker from 'font-picker'
export default {   
    props : ['borne','globalSettings'],
    data(){
        return{
            tmpFile : null
        }
    },
    methods:{
        changePicture(e){
            this.tmpFile = e;
            this.borne.list.showFood.back.picture = URL.createObjectURL(new Blob([e], {type : 'image/bmp'}));
            this.$emit("newPicture",e)
            console.log(e);
        },
        changeBackTextColor(e){
            this.borne.list.showFood.back.textColor = e.hexa;
        },
        changeBackgroundColorText(e){
            this.borne.list.showFood.back.backgroundColorText = e.hexa;
        },
        changeBorderColor(e){
            this.borne.list.showFood.back.borderColor = e.hexa;
        }
    },
    mounted(){
        let backFont = new FontPicker(
            'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
            this.borne.list.showFood.back.textFont,
            {   
                pickerId: "backMenu",
                limit: this.globalSettings.nbFont 
            },
        );
        backFont.setOnChange((font) => this.borne.list.showFood.back.textFont = font.family);
    
    }
}
</script>
