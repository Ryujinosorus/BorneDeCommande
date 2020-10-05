<template>
  <table>
        <thead>
            <tr>
                <td>Instruction</td>
                <td>Valeur</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Taille de la police du titre de la commande</td>
                <td>
                    <v-slider
                    v-model="borne.list['recap']['nomCateTitleSize']"
                    class="align-center"
                    max="50"
                    min="10"
                    hide-details
                >
                    <template v-slot:append>
                    <v-text-field
                        v-model="borne.list['recap']['nomCateTitleSize']"
                        class="mt-0 pt-0"
                        hide-details
                        single-line
                        type="number"
                        step='0.1'
                        max="50"
                        min="10"
                        style="width: 60px"
                    ></v-text-field>
                    </template>
                </v-slider>
                </td>
            </tr>
            <tr>
                <td>Police du titre de la commande</td>
                <td>
                    <div id="font-picker-nomCateTitleFont"></div>
                </td>
            </tr>
            <tr>
                <td>Couleur du titre de la commande</td>
                <td>
                    <v-color-picker mode="hexa" hide-mode-switch @update:color="changeNomCateColor" :value="borne.list['recap']['nomCateColor']" class="ma-2"></v-color-picker>
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

        }
    },
    methods : {
        changeNomCateColor(e){
            this.borne.list['recap']['nomCateColor'] = e.hexa; 
        }
    },
    mounted(){
            let fontCommandeTitle = new FontPicker(
            'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
            this.borne.list['recap']['nomCateFont'],
            {   
                pickerId: "nomCateTitleFont",
                limit: this.globalSettings.nbFont 
            },
        );
        fontCommandeTitle.setOnChange((font) => this.borne.list['recap']['nomCateFont'] = font.family);
    }
}
</script>

<style>

</style>