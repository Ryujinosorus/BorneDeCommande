<template>
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
                <td><v-checkbox v-model="borne.icon.iconIN.withText"></v-checkbox></td>
            </tr>
            <tr v-if="borne.icon.iconIN.withText">
                <td>Taille Ecriture</td>
                <td> <v-slider
                        v-model="borne.icon.iconIN.fontSize"
                        class="align-center"
                        max="75"
                        min="0"
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
            <tr v-if="borne.icon.iconIN.withText">
                <td> Text</td>
                <td>
                    <v-text-field v-model="borne.icon.iconIN.text" counter="20" class="apply-font-fontIN"></v-text-field>
                </td>
            </tr>
            <tr v-show="borne.icon.iconIN.withText">
                <td>Font</td>
                <td>
                    <div id="font-picker-fontIN"></div>
                </td>
            </tr>
            <tr v-if="borne.icon.iconIN.withText">
                <td>Font color</td>
                <td>
                    <v-color-picker mode="hexa" hide-mode-switch @update:color="changeINColor" :value="borne.icon.iconIN.fontColor" class="ma-2"></v-color-picker>
                </td>
            </tr>
            <tr v-if="borne.icon.iconIN.withText">
                <td>margin top</td>
                <td>
                    <v-slider
                        v-model="borne.icon.iconIN.marginTop"
                        class="align-center"
                        max="750"
                        min="0"
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
</template>

<script>
import FontPicker from "font-picker";

export default {
    props : ['borne','globalSettings'],
    data(){
        return{
            iconIN : null,
        }
    },
    methods:{
        changeINColor(e){
            this.borne.icon.iconIN.fontColor = e.hexa;
        },
        changeINBgColor(e){
            this.borne.icon.iconIN.bgColor = e.hexa;
        }
    },
    created(){
        this.iconIN = this.$store.getters.icon['iconIN'];
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
    }
}
</script>

<style>
</style>