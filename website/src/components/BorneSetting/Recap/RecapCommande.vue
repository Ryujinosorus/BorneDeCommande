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
                <td>Taille de la police des details de la commande</td>
                <td>
                    <v-slider
                    v-model="borne.list['recap']['commandeDetailSize']"
                    class="align-center"
                    max="50"
                    min="10"
                    hide-details
                >
                    <template v-slot:append>
                    <v-text-field
                        v-model="borne.list['recap']['commandeDetailSize']"
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
                <td>Police des details de la commande</td>
                <td>
                    <div id="font-picker-commandeDetail"></div>
                </td>
            </tr>
            <tr>
                <td>Couleur des details de la commande</td>
                <td>
                    <v-color-picker mode="hexa" hide-mode-switch @update:color="changeCommandeDetailColor" :value="borne.list['recap']['commandeDetailColor']" class="ma-2"></v-color-picker>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import FontPicker from 'font-picker';
export default {
    props:['borne','globalSettings'],
    data(){
        return{

        }
    },
    methods:{
        changeCommandeDetailColor(e){
            this.borne.list['recap']['commandeDetailColor'] = e.hexa; 
        },
    },
    mounted(){
        let fontCommandeDetail = new FontPicker(
            'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
            this.borne.list['recap']['commandeDetailFont'],
            {   
                pickerId: "commandeDetail",
                limit: this.globalSettings.nbFont 
            },
        );
        fontCommandeDetail.setOnChange((font) => this.borne.list['recap']['commandeDetailFont'] = font.family);
    }
}
</script>

<style>

</style>