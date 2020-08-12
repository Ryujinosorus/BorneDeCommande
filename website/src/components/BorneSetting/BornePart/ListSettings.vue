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
            <tr id="dropdown-example">
                <td> Type Affichage </td>
                <td>
                <v-overflow-btn 
                v-model="type"
                @change="setHaveRecap"
                :items="dropdown_rooms" 
                    filled
                    label="Nothing Selected" 
                    segmented 
                        target="#dropdown-example">
                </v-overflow-btn>
                </td>
            </tr>

            <!-- VRAC -->
                <tr v-for="largeur in getVrac" :key="largeur +'L'">
                    <td style="max-width : 150px"><v-img :src="largeur[1]"></v-img></td>
                    <td style="width :550px">
                        <v-slider
                            v-model="borne.list['Désorganisé'][largeur[0]]['largeur']"
                            class="align-center"
                            label="largeur"
                            :max="globalSettings.panelHeight.max"
                            :min="globalSettings.panelHeight.min"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list['Désorganisé'][largeur[0]]['largeur']"
                                class="mt-0 pt-0"
                                hide-details
                                single-line
                                type="number"
                                step='0.1'
                                style="width: 60px"
                            ></v-text-field>
                            </template>
                        </v-slider>
                        <v-slider
                            v-model="borne.list['Désorganisé'][largeur[0]]['hauteur']"
                            class="align-center"
                            label="Hauteur"
                            :max="globalSettings.panelHeight.max"
                            :min="globalSettings.panelHeight.min"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list['Désorganisé'][largeur[0]]['hauteur']"
                                class="mt-0 pt-0"
                                hide-details
                                single-line
                                type="number"
                                step='0.1'
                                style="width: 60px"
                            ></v-text-field>
                            </template>
                        </v-slider>

                        <v-slider
                        label="espacement"
                            v-model="borne.list['Désorganisé'][largeur[0]]['espacement']"
                            class="align-center"
                            :max="globalSettings.panelHeight.max"
                            :min="globalSettings.panelHeight.min"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list['Désorganisé'][largeur[0]]['espacement']"
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
            <!--  ALIGNE -->
                <tr v-if="type == 'Organisé' || type =='Organisé + recap'">
                    <td> Hauteur </td>
                    <td>
                         <v-slider
                            v-model="borne.list['Organisé']['hauteur']"
                            class="align-center"
                            :max="globalSettings.panelHeight.max"
                            :min="globalSettings.panelHeight.min"
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
                <tr v-if="type == 'Organisé' || type =='Organisé + recap'">
                    <td >Largeur </td>
                    <td>
                         <v-slider
                            v-model="borne.list['Organisé']['largeur']"
                            class="align-center"
                            :max="globalSettings.panelHeight.max"
                            :min="globalSettings.panelHeight.min"
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
                <tr v-if="type == 'Organisé' || type =='Organisé + recap'">
                    <td >Espacement </td>
                    <td>
                         <v-slider
                            v-model="borne.list['Organisé']['espacementT']"
                            class="align-center"
                            :max="globalSettings.panelHeight.max"
                            :min="globalSettings.panelHeight.min"
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
                <tr v-if="type == 'Organisé' || type =='Organisé + recap'">
                    <td>Espacement gauche</td>
                    <td>
                                                 <v-slider
                            v-model="borne.list['Organisé']['espacementG']"
                            class="align-center"
                            :max="globalSettings.panelHeight.max"
                            :min="globalSettings.panelHeight.min"
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
            <!--  MENU DEROULANTS -->
                <tr v-if="type == 'Menu déroulant' || type == 'Menu déroulant + récap'">
                    <td>Largeur case</td>
                    <td>
                         <v-slider
                            v-model="borne.list['Menu déroulant']['largeur']"
                            class="align-center"
                            :max="globalSettings.panelHeight.max"
                            :min="globalSettings.panelHeight.min"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list['Menu déroulant']['largeur']"
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
                <tr v-if="type == 'Menu déroulant' || type == 'Menu déroulant + récap'">
                    <td>Hauteur case</td>
                    <td>
                         <v-slider
                            v-model="borne.list['Menu déroulant']['hauteur']"
                            class="align-center"
                            :max="globalSettings.panelHeight.max"
                            :min="globalSettings.panelHeight.min"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list['Menu déroulant']['hauteur']"
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
                <tr v-if="type == 'Menu déroulant' || type == 'Menu déroulant + récap'">
                    <td>Decallage gauche</td>
                    <td>
                         <v-slider
                            v-model="borne.list['Menu déroulant']['marin']"
                            class="align-center"
                            :max="globalSettings.panelHeight.max"
                            :min="globalSettings.panelHeight.min"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list['Menu déroulant']['margin']"
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
                <tr v-if="type == 'Menu déroulant' || type == 'Menu déroulant + récap'">
                    <td>Hauteur menu</td>
                    <td>
                         <v-slider
                            v-model="borne.list['Menu déroulant']['hauteurMenu']"
                            class="align-center"
                            :max="globalSettings.panelHeight.max"
                            :min="globalSettings.panelHeight.min"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list['Menu déroulant']['hauteurMenu']"
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
                <tr v-if="type == 'Menu déroulant' || type == 'Menu déroulant + récap'">
                    <td>Avec text</td>
                    <td> 
                        <v-switch @change="switchWithText" :input-value="borne.list['Menu déroulant']['withText']"></v-switch>
                    </td>
                </tr>
                <tr v-show="showTextDesc">
                    <td>Font</td>
                    <td>
                        <div id="font-picker-menu"></div>
                    </td>
                </tr>
                <tr v-if="showTextDesc">
                    <td>Color</td>
                    <td>
                        <v-color-picker mode="hexa" hide-mode-switch @update:color="changeMenuColor" :value="borne.list['Menu déroulant']['fontColor']" class="ma-2"></v-color-picker>
                    </td>
                </tr>
                <tr v-if="showTextDesc">
                    <td>Font Size</td>
                    <td>
                         <v-slider
                            v-model="borne.list['Menu déroulant']['fontSize']"
                            class="align-center"
                            :max="globalSettings.panelHeight.max"
                            :min="globalSettings.panelHeight.min"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list['Menu déroulant']['fontSize']"
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
                  dropdown_rooms: [
                { text: 'Désorganisé', callback: () => console.log('room1')},
                { text: 'Désorganisé + récap', callback: () => console.log('room3') },
                { text: 'Organisé', callback: () => console.log('room3') },
                { text: 'Organisé + recap', callback: () => console.log('room3') },
                { text: 'Menu déroulant', callback: () => console.log('room3') },
                { text: 'Menu déroulant + recap', callback: () => console.log('room3') }
            ],
        type:'',
        isVrac : false,
        haveRecap : false,
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
    created(){
        this.type = this.borne.type;
        this.showTextDesc = this.borne.list['Menu déroulant']['withText'];
    },
    mounted(){
        let fontMenu = new FontPicker(
            'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
            this.borne.list['Menu déroulant']['font'],
            {   
                pickerId: "menu",
                limit: this.globalSettings.nbFont 
            },
        );
        fontMenu.setOnChange((font) => this.borne.list['Menu déroulant']['font'] = font.family);
    
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