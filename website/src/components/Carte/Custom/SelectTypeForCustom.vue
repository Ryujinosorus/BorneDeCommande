<template>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition" style="z-index:1000000000000000000">
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary"
                       dark
                       v-bind="attrs"
                       v-on="on">
                    Modifier
                </v-btn>
            </template>
            <v-card>
                <v-toolbar dark color="#4080FF">
                    <v-btn icon dark @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title> Choisissez la catégorie de ce que vous voulez ajouter dans votre sélection </v-toolbar-title>
                </v-toolbar>
                <v-container class="grey lighten-5">
                    <v-row>
                        <v-col  s="10" sm="6" md="4" lg="3" xl="2" v-for="i in foodName" :key="i">
                            <v-card>
                                <v-img src="https://image.freepik.com/free-photo/professional-male-cook-sprinkles-dough-with-flour-preapares-bakes-bread-kitchen-table_155003-10124.jpg" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                                    <v-card-title>{{i}}</v-card-title>
                                </v-img>
                                <v-card-actions>
                                    <app-displayTypeForCustom :allData="food[i]" :content='content'></app-displayTypeForCustom>
                                </v-card-actions>
                            </v-card>
                            <v-col cols="1">
                            </v-col>
                        </v-col>
                    </v-row>
                    <v-row>

                        <v-col cols="12" sm="12">
                            <v-textarea label="Recap" auto-grow outlined rows="1" row-height="10" :value="getText()" readonly></v-textarea>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-dialog>
</template>

<script>
export default {
    props : ['content'],
    data(){
        return{
            dialog : false,
            foodName: [],
            food : []
        }
    },
    methods : {
        getText(){
            if(this.content.data.length == 0)
                return "Vide pour l'instant ";
            let res =  this.content.data.length + " nombre de choix \n"
            for(let i=0;i<this.content.data.length;i++){
                res+= this.content.data[i].nom ;
                res += (i==this.content.data.length-1) ? '': ', '; 
            }
            return res;
        }
    },
    created(){
        this.food = this.$store.getters.getAllFood;
        for(let i in this.food)
            this.foodName.push(i);
    }
}
</script>

<style>

</style>