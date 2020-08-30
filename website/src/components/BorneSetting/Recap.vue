<template>
    <table>
        <thead>
            <tr>
                <td>Instrucation</td>
                <td>Valeur</td>
            </tr>
        </thead>
        <tbody>
                <!-- RECAP -->
                <tr>
                    <td>Largeur du recapitulatif </td>
                    <td>
                         <v-slider
                            v-model="borne.list['recap']['largeur']"
                            class="align-center"
                            :max="1000"
                            :min="100"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list['recap']['largeur']"
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
                    <td>Text du titre </td>
                    <td>
                        <v-text-field class="apply-font-title" placeholder="Votre titre" v-model="borne.list['recap']['text']"></v-text-field>
                    </td>
                </tr>
                <tr>
                    <td>Police du titre </td>
                    <td>
                        <div id="font-picker-title"></div>
                    </td>
                </tr>
                <tr>
                    <td>Taille police du titre </td>
                    <td>
                         <v-slider
                            v-model="borne.list['recap']['fontSizeTitle']"
                            class="align-center"
                            :max="120"
                            :min="10"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list['recap']['fontSizeTitle']"
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
                    <td>Couleur du titre </td>
                    <td>
                        <v-color-picker mode="hexa" hide-mode-switch @update:color="changeTitleColor" :value="borne.list['recap']['colorTitle']" class="ma-2"></v-color-picker>
                    </td>
                </tr>
                <tr>
                    <td>Taille dédié au titre en px</td>
                    <td>
                         <v-slider
                            v-model="borne.list['recap']['heightTitle']"
                            class="align-center"
                            max="1000"
                            min="100"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list['recap']['heightTitle']"
                                class="mt-0 pt-0"
                                hide-details
                                single-line
                                type="number"
                                step='0.1'
                                max="1000"
                                min="100"
                                style="width: 60px"
                            ></v-text-field>
                            </template>
                        </v-slider>
                    </td>
                </tr>
                <tr>
                    <td>Taille dédié au details en px</td>
                    <td>
                         <v-slider
                            v-model="borne.list['recap']['detailTitle']"
                            class="align-center"
                            max="1500"
                            min="250"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list['recap']['detailTitle']"
                                class="mt-0 pt-0"
                                hide-details
                                single-line
                                type="number"
                                step='0.1'
                                max="1500"
                                min="250"
                                style="width: 60px"
                            ></v-text-field>
                            </template>
                        </v-slider>
                    </td>
                </tr>
                <tr>
                    <td>Couleur de font du titre </td>
                    <td>
                        <v-color-picker mode="hexa" hide-mode-switch @update:color="changeBackgroundTitleColor" :value="borne.list['recap']['backgroundColorTitle']" class="ma-2"></v-color-picker>
                    </td>
                </tr>
                <tr>
                    <td>Epaisseur bordure entre titre et récap </td>
                    <td>
                         <v-slider
                            v-model="borne.list['recap']['borderTCSize']"
                            class="align-center"
                            :max="10"
                            :min="0"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list['recap']['borderTCSize']"
                                class="mt-0 pt-0"
                                hide-details
                                single-line
                                type="number"
                                step='0.1'
                                max="10"
                                min="0"
                                style="width: 60px"
                            ></v-text-field>
                            </template>
                        </v-slider>
                    </td>
                </tr>
                <tr>
                    <td>Couleur bordure entre titre et récap </td>
                    <td>
                        <v-color-picker mode="hexa" hide-mode-switch @update:color="changeBorderTCColor" :value="borne.list['recap']['borderTCColor']" class="ma-2"></v-color-picker>
                    </td>
                </tr>
                <tr>
                    <td>Couleur de fond du récapitulatif</td>
                    <td> 
                         <v-color-picker mode="hexa" hide-mode-switch @update:color="changeBackgroundRecapColor" :value="borne.list['recap']['backgroundColorRecap']" class="ma-2"></v-color-picker>
                    </td>
                </tr>





                <tr>
                    <td> Bordure du haut</td>
                    <td>
                        <v-checkbox
                        v-model="borne.list['recap']['borderT']"
                        ></v-checkbox>
                    </td>
                </tr>
                <tr>
                    <td> Bordure de droite</td>
                    <td>
                        <v-checkbox
                        v-model="borne.list['recap']['borderD']"
                        
                        ></v-checkbox>
                    </td>
                </tr>
                <tr>
                    <td> Bordure du bas</td>
                    <td>
                        <v-checkbox
                        v-model="borne.list['recap']['borderB']"
                        ></v-checkbox>
                    </td>
                </tr>
                <tr>
                    <td> Bordure de gauche</td>
                    <td>
                        <v-checkbox
                        v-model="borne.list['recap']['borderG']"
                        ></v-checkbox>
                    </td>
                </tr>
                <tr>
                    <td> Epaiseur bordure</td>
                    <td>
                         <v-slider
                            v-model="borne.list['recap']['borderTCSize']"
                            class="align-center"
                            :max="10"
                            :min="0"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list['recap']['borderTCSize']"
                                class="mt-0 pt-0"
                                hide-details
                                single-line
                                type="number"
                                step='0.1'
                                max="10"
                                min="0"
                                style="width: 60px"
                            ></v-text-field>
                            </template>
                        </v-slider>      
                    </td>
                </tr>
                <tr>
                    <td> Couleur des bordures</td>
                    <td>
                        <v-color-picker mode="hexa" hide-mode-switch @update:color="changeBorderColor" :value="borne.list['recap']['borderColor']" class="ma-2"></v-color-picker>
                    </td>
                </tr>

                <tr>
                    <td>Epaiseur bordure entre chaque commande</td>
                    <td>
                         <v-slider
                            v-model="borne.list['recap']['borderCommandeSize']"
                            class="align-center"
                            :max="10"
                            :min="0"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.list['recap']['borderCommandeSize']"
                                class="mt-0 pt-0"
                                hide-details
                                single-line
                                type="number"
                                step='0.1'
                                max="10"
                                min="0"
                                style="width: 60px"
                            ></v-text-field>
                            </template>
                        </v-slider>
                    </td>
                </tr>
               <tr>
                    <td>Couleur bordure entre chaque commande</td>
                    <td>
                        <v-color-picker mode="hexa" hide-mode-switch @update:color="changeBorderCommandeColor" :value="borne.list['recap']['borderCommandeColor']" class="ma-2"></v-color-picker>
                    </td>
                </tr>
        </tbody>
    </table>
</template>

<script>
import FontPicker from 'font-picker';
export default {
    props : ['borne', 'globalSettings'],
    methods:{
                changeTitleColor(e){
            this.borne.list['recap']['colorTitle'] = e.hexa;
        },
                changeBackgroundTitleColor(e){
            this.borne.list['recap']['backgroundColorTitle'] = e.hexa;        
        },
                changeBorderTCColor(e){
            this.borne.list['recap']['borderTCColor'] = e.hexa;   
        },
                changeBackgroundRecapColor(e){
            this.borne.list['recap']['backgroundColorRecap'] = e.hexa;   
        },
        changeBorderColor(e){
            this.borne.list['recap']['borderColor'] = e.hexa;   
        },
        changeBorderCommandeColor(e){
            this.borne.list['recap']['borderCommandeColor'] = e.hexa;  
        },
    },
    mounted(){
        let fontTitle = new FontPicker(
            'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
            this.borne.list['recap']['cateTextFont'],
            {   
                pickerId: "title",
                limit: this.globalSettings.nbFont 
            },
        );
        fontTitle.setOnChange((font) => this.borne.list['recap']['fontTitle'] = font.family);   
    }
}
</script>

<style>

</style>