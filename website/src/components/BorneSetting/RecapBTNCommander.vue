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
                <td>Text du boutton commander</td>
                <td> <v-text-field class="apply-font-commandeBoutton" v-model="borne.list['recap']['textBouttonCommander']" label="Text du boutton commander"></v-text-field></td>
            </tr>
            <tr>
                <td>Taille de la police du boutton commander</td>
                <td>
                    <v-slider
                    v-model="borne.list['recap']['fontSizeBouttonCommander']"
                    class="align-center"
                    max="50"
                    min="10"
                    hide-details
                >
                    <template v-slot:append>
                    <v-text-field
                        v-model="borne.list['recap']['fontSizeBouttonCommander']"
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
                <td>Police du boutton commander</td>
                <td>
                    <div id="font-picker-commandeBoutton"></div>
                </td>
            </tr>
            <tr>
                <td>Couleur de la police du button commander</td>
                <td>
                    <v-color-picker mode="hexa" hide-mode-switch @update:color="changeCommandeBouttonColor" :value="borne.list['recap']['fontColorBouttonCommander']" class="ma-2"></v-color-picker>
                </td>
            </tr>

            <tr>
                <td>Couleur de fond du button commander</td>
                <td>
                    <v-color-picker mode="hexa" hide-mode-switch @update:color="changeCommandeBackgroundBouttonColor" :value="borne.list['recap']['backgroundColorBouttonCommander']" class="ma-2"></v-color-picker>
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
        changeCommandeBouttonColor(e){
            this.borne.list['recap']['fontColorBouttonCommander'] = e.hexa; 
        },
        changeCommandeBackgroundBouttonColor(e){
            this.borne.list['recap']['backgroundColorBouttonCommander'] = e.hexa; 
        },
    },
    mounted(){
        let fontCommandeBoutton = new FontPicker(
            'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
            this.borne.list['recap']['fontBouttonCommander'],
            {   
                pickerId: "commandeBoutton",
                limit: this.globalSettings.nbFont 
            },
        );
        fontCommandeBoutton.setOnChange((font) => this.borne.list['recap']['fontBouttonCommander'] = font.family);
    }
}
</script>

<style>

</style>