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
                    <app-iconSelector :content='borne.icon.iconLiquide' title="sur place" :allData="iconLiquide"></app-iconSelector>
                </td>
            </tr>
            <tr>
                <td>Bg color</td>
                <td>
                        <v-color-picker mode="hexa" hide-mode-switch @update:color="changeINBgColor" :value="borne.icon.iconLiquide.bgColor" class="ma-2"></v-color-picker>
                </td>
            </tr>
            <tr>
                <td>Avec text </td>
                <td><v-checkbox v-model="borne.icon.iconLiquide.withText"></v-checkbox></td>
            </tr>
            <tr v-if="borne.icon.iconLiquide.withText">
                <td>Taille Ecriture</td>
                <td> <v-slider
                        v-model="borne.icon.iconLiquide.fontSize"
                        class="align-center"
                        :max="globalSettings.fontSize.max"
                        :min="globalSettings.fontSize.min"
                        hide-details>
                        <template v-slot:append>
                        <v-text-field
                            v-model="borne.icon.iconLiquide.fontSize"
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
            <tr v-if="borne.icon.iconLiquide.withText">
                <td> Text</td>
                <td>
                    <v-text-field v-model="borne.icon.iconLiquide.text" counter="20" class="apply-font-fontLiquide"></v-text-field>
                </td>
            </tr>
            <tr v-show="borne.icon.iconLiquide.withText">
                <td>Font</td>
                <td>
                    <div id="font-picker-fontLiquide"></div>
                </td>
            </tr>
            <tr v-if="borne.icon.iconLiquide.withText">
                <td>Font color</td>
                <td>
                    <v-color-picker mode="hexa" hide-mode-switch @update:color="changeINColor" :value="borne.icon.iconLiquide.fontColor" class="ma-2"></v-color-picker>
                </td>
            </tr>
            <tr v-if="borne.icon.iconLiquide.withText">
                <td>margin top</td>
                <td>
                    <v-slider
                        v-model="borne.icon.iconLiquide.marginTop"
                        class="align-center"
                        :max="globalSettings.paddingTop.max"
                        :min="globalSettings.paddingTop.min"
                        hide-details
                    >
                        <template v-slot:append>
                        <v-text-field
                            v-model="borne.icon.iconLiquide.marginTop"
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
            iconLiquide : null,
        }
    },
    methods:{
        changeINColor(e){
            this.borne.icon.iconLiquide.fontColor = e.hexa;
        },
        changeINBgColor(e){
            this.borne.icon.iconLiquide.bgColor = e.hexa;
        }
    },
    created(){
        this.iconLiquide = this.$store.getters.icon['iconLiquide'];
    },
    mounted(){
        let fontLiquide = new FontPicker(
            'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
            this.borne.icon.iconLiquide.font,
            {   
                pickerId: "fontLiquide",
                limit: this.globalSettings.nbFont 
            },
        );
        fontLiquide.setOnChange((font) => this.borne.icon.iconLiquide.font = font.family);
    }
}
</script>

<style>
</style>