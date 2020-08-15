<template>
    <div>
        <h2>A emporter</h2>
          <table>
            <thead>
                <tr>
                    <th>Instruction</th>
                    <th>Valeur</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> Logo </td>
                    <td>
                        <app-iconSelector :content='borne.icon.iconOUT' title="à emporter" :allData="iconOUT"></app-iconSelector>
                    </td>
                </tr>
                <tr>
                    <td>Couleur background</td>
                    <td>
                         <v-color-picker mode="hexa" hide-mode-switch @update:color="changeOUTBgColor" :value="borne.icon.iconOUT.bgColor" class="ma-2"></v-color-picker>
                    </td>
                </tr>
                <tr>
                    <td>Avec text </td>
                    <td><v-switch @change="switchIconOUTWithText" :input-value="borne.icon.iconOUT.withText"></v-switch></td>
                </tr>
                <tr v-if="OUTWithText">
                    <td>Taille Ecriture</td>
                    <td> <v-slider
                            v-model="borne.icon.iconOUT.fontSize"
                            class="align-center"
                            :max="globalSettings.fontSize.max"
                            :min="globalSettings.fontSize.min"
                            hide-details>
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.icon.iconOUT.fontSize"
                                class="mt-0 pt-0"
                                hide-details
                                step='0.1'
                                single-line
                                type="number"
                                style="width: 60px"
                            ></v-text-field>
                            </template>
                        </v-slider></td>
                </tr>
                <tr v-if="OUTWithText">
                    <td> Text</td>
                    <td>
                        <v-text-field v-model="borne.icon.iconOUT.text" counter="20" class="apply-font-fontOUT"></v-text-field>
                    </td>
                </tr>
                <tr v-show="OUTWithText">
                    <td>Font</td>
                    <td>
                        <div id="font-picker-fontOUT"></div>
                    </td>
                </tr>
                <tr v-if="OUTWithText">
                    <td>Font color</td>
                    <td>
                        <v-color-picker mode="hexa" hide-mode-switch @update:color="changeOUTColor" :value="borne.icon.iconOUT.fontColor" class="ma-2"></v-color-picker>
                    </td>
                </tr>
                <tr v-if="OUTWithText">
                    <td>margin top</td>
                    <td>
                        <v-slider
                            v-model="borne.icon.iconOUT.marginTop"
                            class="align-center"
                            :max="globalSettings.paddingTop.max"
                            :min="globalSettings.paddingTop.min"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.icon.iconOUT.marginTop"
                                class="mt-0 pt-0"
                                hide-details
                                step='0.1'
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
          <h2>Sur place</h2>

        <table>
            <thead>
                <tr>
                    <th>Instruction</th>
                    <th>Valeur</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> Logo </td>
                    <td>
                        <app-iconSelector :content='borne.icon.iconIN' title="sur place" :allData="iconIN"></app-iconSelector>
                    </td>
                </tr>
                <tr>
                    <td>Bg color</td>
                    <td>
                         <v-color-picker mode="hexa" hide-mode-switch @update:color="changeINBgColor" :value="borne.icon.iconIN.bgColor" class="ma-2"></v-color-picker>
                    </td>
                </tr>
                <tr>
                    <td>Avec text </td>
                    <td><v-switch @change="switchIconINWithText" :input-value="borne.icon.iconIN.withText"></v-switch></td>
                </tr>
                <tr v-if="INWithText">
                    <td>Taille Ecriture</td>
                    <td> <v-slider
                            v-model="borne.icon.iconIN.fontSize"
                            class="align-center"
                            :max="globalSettings.fontSize.max"
                            :min="globalSettings.fontSize.min"
                            hide-details>
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.icon.iconIN.fontSize"
                                class="mt-0 pt-0"
                                hide-details
                                step='0.1'
                                single-line
                                type="number"
                                style="width: 60px"
                            ></v-text-field>
                            </template>
                        </v-slider></td>
                </tr>
                <tr v-if="INWithText">
                    <td> Text</td>
                    <td>
                        <v-text-field v-model="borne.icon.iconIN.text" counter="20" class="apply-font-fontIN"></v-text-field>
                    </td>
                </tr>
                <tr v-show="INWithText">
                    <td>Font</td>
                    <td>
                        <div id="font-picker-fontIN"></div>
                    </td>
                </tr>
                <tr v-if="INWithText">
                    <td>Font color</td>
                    <td>
                        <v-color-picker mode="hexa" hide-mode-switch @update:color="changeINColor" :value="borne.icon.iconIN.fontColor" class="ma-2"></v-color-picker>
                    </td>
                </tr>
                <tr v-if="INWithText">
                    <td>margin top</td>
                    <td>
                        <v-slider
                            v-model="borne.icon.iconIN.marginTop"
                            class="align-center"
                            :max="globalSettings.paddingTop.max"
                            :min="globalSettings.paddingTop.min"
                            hide-details
                        >
                            <template v-slot:append>
                            <v-text-field
                                v-model="borne.icon.iconIN.marginTop"
                                class="mt-0 pt-0"
                                hide-details
                                step='0.1'
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
    </div>
</template>

<script>
import FontPicker from "font-picker";

export default {
    props : ['borne','globalSettings'],
    data(){
        return{
            iconOUT : null,
            iconIN : null,
            OUTWithText : null,
            INWithText : null
        }
    },
    methods:{
        switchIconOUTWithText(){
            this.borne.icon.iconOUT.withText = !this.borne.icon.iconOUT.withText;
            this.OUTWithText = this.borne.icon.iconOUT.withText;
        },
        switchIconINWithText(){
            this.borne.icon.iconIN.withText = !this.borne.icon.iconIN.withText;
            this.INWithText = this.borne.icon.iconIN.withText;
        },
        changeOUTColor(e){
            this.borne.icon.iconOUT.fontColor = e.hexa;
        },
        changeINColor(e){
            this.borne.icon.iconIN.fontColor = e.hexa;
        },
        changeOUTBgColor(e){
            this.borne.icon.iconOUT.bgColor = e.hexa;
        },
        changeINBgColor(e){
            this.borne.icon.iconIN.bgColor = e.hexa;
        }
    },
    created(){
        this.iconIN = this.$store.getters.icon['iconIN'];
        this.iconOUT = this.$store.getters.icon['iconOUT'];
        this.OUTWithText = this.borne.icon.iconOUT.withText;
        this.INWithText = this.borne.icon.iconIN.withText;
        console.log(this.borne);
    },
    mounted(){
        let fontIN = new FontPicker(
            'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
            this.borne.icon.iconIN.font,
            {   
                pickerId: "fontIN",
                limit: this.globalSettings.nbFont 
            },
        );
        fontIN.setOnChange((font) => this.borne.icon.iconIN.font = font.family);

        let fontOUT = new FontPicker(
            'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
            this.borne.icon.iconOUT.font,
            {   
                pickerId: "fontOUT",
                limit: this.globalSettings.nbFont 
            },
        );
        fontOUT.setOnChange((font) => this.borne.icon.iconOUT.font = font.family);
    }
}
</script>

<style>
</style>