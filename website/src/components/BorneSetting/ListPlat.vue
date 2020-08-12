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
                            v-model="borne.list['showFood']['hauteur']"
                            class="align-center"
                            :max="globalSettings.panelHeight.max"
                            :min="globalSettings.panelHeight.min"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list['showFood']['hauteur']"
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
                            v-model="borne.list['showFood']['largeur']"
                            class="align-center"
                            :max="globalSettings.panelHeight.max"
                            :min="globalSettings.panelHeight.min"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list['showFood']['largeur']"
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
                    <td >Espacement </td>
                    <td>
                         <v-slider
                            v-model="borne.list['showFood']['espacementT']"
                            class="align-center"
                            :max="globalSettings.panelHeight.max"
                            :min="globalSettings.panelHeight.min"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list['showFood']['espacementT']"
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
                    <td>Espacement gauche</td>
                    <td>
                        <v-slider
                            v-model="borne.list['showFood']['espacementG']"
                            class="align-center"
                            :max="globalSettings.panelHeight.max"
                            :min="globalSettings.panelHeight.min"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list['showFood']['espacementG']"
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
                        <v-color-picker mode="hexa" hide-mode-switch @update:color="changeBackgroundMenuColor" :value="borne.list.showFood.menuBackgroundColor" class="ma-2"></v-color-picker>
                    </td>
                </tr>
                <tr>
                    <td>Arroundisement carte dun menu</td>
                    <td>
                         <v-slider
                            v-model="borne.list.showFood.rounded"
                            class="align-center"
                            max="100"
                            min="0"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list.showFood.rounded"
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
                    <td> <v-checkbox v-model="borne.list.showFood.textMenu"></v-checkbox></td>
                </tr>
                <tr v-if="borne.list.showFood.textMenu">
                    <td>Espace dedié a l'écriture du texte </td>
                    <td>
                         <v-slider
                            v-model="borne.list.showFood.menuTextHeight"
                            class="align-center"
                            max="100"
                            min="0"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list.showFood.menuTextHeight"
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
                <tr v-show="borne.list.showFood.textMenu">
                    <td>Police </td>
                    <td>
                        <div id="font-picker-menuTextFont"></div>
                    </td>
                </tr>
                <tr v-if="borne.list.showFood.textMenu">
                    <td>Couleur de la police</td>
                    <td>
                        <v-color-picker mode="hexa" hide-mode-switch @update:color="changeMenuTextColor" :value="borne.list.showFood.menuTextColor" class="ma-2"></v-color-picker>
                    </td>
                </tr>
                
                <tr v-if="borne.list.showFood.textMenu">
                    <td>Couleur du background</td>
                    <td>
                        <v-color-picker mode="hexa" hide-mode-switch @update:color="changeMenuBackgroundColor" :value="borne.list.showFood.menuBackgroundColor" class="ma-2"></v-color-picker>
                    </td>
                </tr>
                
                <tr v-if="borne.list.showFood.textMenu">
                    <td>Taille de l'ecriture </td>
                    <td>
                         <v-slider
                            v-model="borne.list.showFood.menuTextFontSize"
                            class="align-center"
                            max="100"
                            min="0"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list.showFood.menuTextFontSize"
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
                    <td>Elevatiion carte d'un menu</td>
                    <td>
                         <v-slider
                            v-model="borne.list.showFood.menuElevation"
                            class="align-center"
                            max="100"
                            min="0"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list.showFood.menuElevation"
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
                            v-model="borne.list.showFood.menuBorderSize"
                            class="align-center"
                            max="100"
                            min="0"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list.showFood.menuBorderSize"
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
                        <v-color-picker mode="hexa" hide-mode-switch @update:color="changeMenuBorderColor" :value="borne.list.showFood.menuBorderColor" class="ma-2"></v-color-picker>
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
        haveRecap : false,
        showTextDesc : false,
        }
    },
    methods:{
        switchWithText(){
            this.showTextDesc = !this.showTextDesc;
            this.borne.list['showFood']['withText'] = this.showTextDesc;
        },
        changeMenuBackgroundColor(e){
            this.borne.list.showFood.menuBackgroundColor = e.hexa;
        },
        changeBackgroundMenuColor(e){
            this.borne.list.showFood.backgroundColorMenu = e.hexa;
        },
        changeMenuTextColor(e){
            this.borne.list.showFood.menuTextColor = e.hexa;
        },
        changeMenuBorderColor(e){
            this.borne.list.showFood.menuBorderColor = e.hexa;
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
    created(){
        this.type = this.borne.type;
        this.showTextDesc = this.borne.list['showFood']['withText'];
    },
    mounted(){
        let fontMenu = new FontPicker(
            'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
            this.borne.list.showFood.menuTextFont,
            {   
                pickerId: "menuTextFont",
                limit: this.globalSettings.nbFont 
            },
        );
        fontMenu.setOnChange((font) => this.borne.list.showFood.menuTextFont = font.family);
    
    }
}
</script>

<style>

</style>