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
                    <app-iconSelector :content='borne.icon.iconOUT' title="sur place" :allData="iconOUT"></app-iconSelector>
                </td>
            </tr>
            <tr>
                <td>Bg color</td>
                <td>
                        <v-color-picker mode="hexa" hide-mode-switch @update:color="changeINBgColor" :value="borne.icon.iconOUT.bgColor" class="ma-2"></v-color-picker>
                </td>
            </tr>
            <tr>
                <td>Avec text </td>
                <td><v-checkbox v-model="borne.icon.iconOUT.withText"></v-checkbox></td>
            </tr>
            <tr v-if="borne.icon.iconOUT.withText">
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
            <tr v-if="borne.icon.iconOUT.withText">
                <td> Text</td>
                <td>
                    <v-text-field v-model="borne.icon.iconOUT.text" counter="20" class="apply-font-fontOUT"></v-text-field>
                </td>
            </tr>
            <tr v-show="borne.icon.iconOUT.withText">
                <td>Font</td>
                <td>
                    <div id="font-picker-fontOUT"></div>
                </td>
            </tr>
            <tr v-if="borne.icon.iconOUT.withText">
                <td>Font color</td>
                <td>
                    <v-color-picker mode="hexa" hide-mode-switch @update:color="changeINColor" :value="borne.icon.iconOUT.fontColor" class="ma-2"></v-color-picker>
                </td>
            </tr>
            <tr v-if="borne.icon.iconOUT.withText">
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
</template>

<script>
import FontPicker from "font-picker";

export default {
    props : ['borne','globalSettings'],
    data(){
        return{
            iconOUT : null,
        }
    },
    methods:{
        changeINColor(e){
            this.borne.icon.iconOUT.fontColor = e.hexa;
        },
        changeINBgColor(e){
            this.borne.icon.iconOUT.bgColor = e.hexa;
        }
    },
    created(){
        this.iconOUT = this.$store.getters.icon['iconOUT'];
    },
    mounted(){
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