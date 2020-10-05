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
                    <app-iconSelector :content='borne.icon.iconCB' title="sur place" :allData="iconCB"></app-iconSelector>
                </td>
            </tr>
            <tr>
                <td>Bg color</td>
                <td>
                        <v-color-picker mode="hexa" hide-mode-switch @update:color="changeINBgColor" :value="borne.icon.iconCB.bgColor" class="ma-2"></v-color-picker>
                </td>
            </tr>
            <tr>
                <td>Avec text </td>
                <td><v-checkbox v-model="borne.icon.iconCB.withText"></v-checkbox></td>
            </tr>
            <tr v-if="borne.icon.iconCB.withText">
                <td>Taille Ecriture</td>
                <td> <v-slider
                        v-model="borne.icon.iconCB.fontSize"
                        class="align-center"
                        :max="globalSettings.fontSize.max"
                        :min="globalSettings.fontSize.min"
                        hide-details>
                        <template v-slot:append>
                        <v-text-field
                            v-model="borne.icon.iconCB.fontSize"
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
            <tr v-if="borne.icon.iconCB.withText">
                <td> Text</td>
                <td>
                    <v-text-field v-model="borne.icon.iconCB.text" counter="20" class="apply-font-fontCB"></v-text-field>
                </td>
            </tr>
            <tr v-show="borne.icon.iconCB.withText">
                <td>Font</td>
                <td>
                    <div id="font-picker-fontCB"></div>
                </td>
            </tr>
            <tr v-if="borne.icon.iconCB.withText">
                <td>Font color</td>
                <td>
                    <v-color-picker mode="hexa" hide-mode-switch @update:color="changeINColor" :value="borne.icon.iconCB.fontColor" class="ma-2"></v-color-picker>
                </td>
            </tr>
            <tr v-if="borne.icon.iconCB.withText">
                <td>margin top</td>
                <td>
                    <v-slider
                        v-model="borne.icon.iconCB.marginTop"
                        class="align-center"
                        :max="globalSettings.paddingTop.max"
                        :min="globalSettings.paddingTop.min"
                        hide-details
                    >
                        <template v-slot:append>
                        <v-text-field
                            v-model="borne.icon.iconCB.marginTop"
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
            iconCB : null,
        }
    },
    methods:{
        changeINColor(e){
            this.borne.icon.iconCB.fontColor = e.hexa;
        },
        changeINBgColor(e){
            this.borne.icon.iconCB.bgColor = e.hexa;
        }
    },
    created(){
        this.iconCB = this.$store.getters.icon['iconCB'];
    },
    mounted(){
        let fontCB = new FontPicker(
            'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
            this.borne.icon.iconCB.font,
            {   
                pickerId: "fontCB",
                limit: this.globalSettings.nbFont 
            },
        );
        fontCB.setOnChange((font) => this.borne.icon.iconCB.font = font.family);
    }
}
</script>

<style>
</style>