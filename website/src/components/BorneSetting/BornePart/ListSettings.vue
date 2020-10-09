<template>
  <div>
    <table>
        <thead>
            <tr>
                <th>Instruction</th>
                <th>Valeur</th>
            </tr>
        </thead>
        <tbody>
                <tr>
                    <td> Hauteur </td>
                    <td>
                         <v-slider
                            v-model="borne.list['Organisé']['hauteur']"
                            class="align-center"
                            :max="1000"
                            :min="100"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list['Organisé']['hauteur']"
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
                    <td >Largeur </td>
                    <td>
                         <v-slider
                            v-model="borne.list['Organisé']['largeur']"
                            class="align-center"
                            max="1000"
                            min="100"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list['Organisé']['largeur']"
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
                    <td >Espacement </td>
                    <td>
                         <v-slider
                            v-model="borne.list['Organisé']['espacementT']"
                            class="align-center"
                            max="500"
                            min="0"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list['Organisé']['espacementT']"
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
                <tr >
                    <td>Espacement gauche</td>
                    <td>
                        <v-slider
                            v-model="borne.list['Organisé']['espacementG']"
                            class="align-center"
                            max="500"
                            min="0"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list['Organisé']['espacementG']"
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
                    <td> Backgorund color</td>
                    <td>
                        <v-color-picker mode="hexa" hide-mode-switch @update:color="changeBackgroundCateColor" :value="borne.list.recap.backgroundColorCate" class="ma-2"></v-color-picker>
                    </td>
                </tr>
                <tr>
                    <td>Arroundisement carte d'une catégorie</td>
                    <td>
                         <v-slider
                            v-model="borne.list.recap.rounded"
                            class="align-center"
                            max="100"
                            min="0"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list.recap.rounded"
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
                    <td>Text en plus de la photo</td>
                    <td> <v-checkbox v-model="borne.list.recap.textCate"></v-checkbox></td>
                </tr>
                <tr v-if="borne.list.recap.textCate">
                    <td>Espace dedié a l'écriture du texte </td>
                    <td>
                         <v-slider
                            v-model="borne.list.recap.cateTextHeight"
                            class="align-center"
                            max="100"
                            min="0"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list.recap.cateTextHeight"
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
                <tr v-show="borne.list.recap.textCate">
                    <td>Police </td>
                    <td>
                        <div id="font-picker-cateTextFont"></div>
                    </td>
                </tr>
                <tr v-if="borne.list.recap.textCate">
                    <td>Couleur de la police</td>
                    <td>
                        <v-color-picker mode="hexa" hide-mode-switch @update:color="changeCateTextColor" :value="borne.list.recap.cateTextColor" class="ma-2"></v-color-picker>
                    </td>
                </tr>
                <tr v-if="borne.list.recap.textCate">
                    <td>Couleur du background</td>
                    <td>
                        <v-color-picker mode="hexa" hide-mode-switch @update:color="changeCateBackgroundColor" :value="borne.list.recap.cateBackgroundColor" class="ma-2"></v-color-picker>
                    </td>
                </tr>
                <tr v-if="borne.list.recap.textCate">
                    <td>Taille de l'ecriture </td>
                    <td>
                         <v-slider
                            v-model="borne.list.recap.cateTextFontSize"
                            class="align-center"
                            max="100"
                            min="0"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list.recap.cateTextFontSize"
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
                    <td>Elevatiion carte d'une catégorie</td>
                    <td>
                         <v-slider
                            v-model="borne.list.recap.cateElevation"
                            class="align-center"
                            max="100"
                            min="0"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list.recap.cateElevation"
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
                    <td>Epaissuer bordure d'une categorie</td>
                    <td>
                         <v-slider
                            v-model="borne.list.recap.cateBorderSize"
                            class="align-center"
                            max="100"
                            min="0"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list.recap.cateBorderSize"
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
                    <td>Couleur de la bordure</td>
                    <td>
                        <v-color-picker mode="hexa" hide-mode-switch @update:color="changeCateBorderColor" :value="borne.list.recap.cateBorderColor" class="ma-2"></v-color-picker>
                    </td>
                </tr>
            </tbody>
    </table>
  </div>
</template>

<script>
import FontPicker from "font-picker";
export default {
    props : ['borne','globalSettings'],
    data(){
        return{
        showTextDesc : false,
        }
    },
    methods:{
        switchWithText(){
            this.showTextDesc = !this.showTextDesc;
            this.borne.list['Menu déroulant']['withText'] = this.showTextDesc;
        },
        changeMenuColor(e){
            this.borne.list['Menu déroulant']['fontColor'] = e.hexa;
        },
        changeBackgroundCateColor(e){
            this.borne.list.recap.backgroundColorCate = e.hexa;
        },
        changeCateTextColor(e){
            this.borne.list['recap']['cateTextColor'] = e.hexa;
        },
        changeCateBorderColor(e){
            this.borne.list['recap']['cateBorderColor'] = e.hexa; 
        },
        changeCateBackgroundColor(e){
            this.borne.list.recap.cateBackgroundColor = e.hexa;
        },
        setHaveRecap(){
             if(this.type.endsWith('recap'))
                this.haveRecap = true;
            else this.haveRecap = false;
            this.borne.type = this.type;
            if(!this.type.startsWith('Menu déroulant'))
                this.showTextDesc = false;
        }
    },
    computed:{
        getVrac(){
            if(this.type == 'Désorganisé' || this.type == 'Désorganisé + récap'){
                let tmp=[]
                for(let x=0;x<this.borne.categorie.length;x++)
                    tmp.push(this.borne.categorie[x]);
                return tmp;
            }
            else return [];
        },
        getAligne(){
            if(this.type == 'Organisé' || this.type == 'Organisé + recap')
                return this.borne.categorie;
            else return [];
        }
    },
    mounted(){
    
        let fontTextCate = new FontPicker(
            'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
            this.borne.list['recap']['cateTextFont'],
            {   
                pickerId: "cateTextFont",
                limit: this.globalSettings.nbFont 
            },
        );
        fontTextCate.setOnChange((font) => this.borne.list['recap']['cateTextFont'] = font.family);
    }
}
</script>

<style>

</style>