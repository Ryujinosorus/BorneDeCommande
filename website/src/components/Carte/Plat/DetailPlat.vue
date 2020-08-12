<template>
    <div>
         <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn color="primary"
                                           dark
                                           v-bind="attrs"
                                           v-on="on">
                                        Modifier
                                    </v-btn>
                                </template>
                                <v-card>
                                     <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
                                         <v-toolbar-title>Modifier les {{this.title}} de votre plat !</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-container>
            <v-row>
                <v-col>
                    <v-card class="pa-2"
                            outlined
                            tile>
                        <v-text-field placeholder="Rechercher" v-model="search"></v-text-field>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3" v-for="data of filterCard" v-bind:key="data['.key']">
                    <v-card>
                        <v-img :src="data[1]" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                            <v-card-title>{{data[0]}} </v-card-title>
                        </v-img>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-switch :input-value="checkOnOffSwitchStart(data[0])" @change="add(data[0])"></v-switch>
                        </v-card-actions>
                    </v-card>
                    <v-col cols="1">
                    </v-col>
                </v-col>
            </v-row>
        </v-container>
                                </v-card>
                            </v-dialog>
    </div>
</template>

<script>
export default {
        name: 'app-listingredientplat',
        props : ['allData','title','plat'],
        data() {
            return {
    dialog : false,
    search :'',
    items: ['Pizza','Hamburger','Pates','Soupe','Entr�e']
            }
        },
        methods:{
           add:function(a){
            this.$emit('add',[this.title,a]);
        },
        checkOnOffSwitchStart : function(name){
            return this.plat.tab[this.title].indexOf(name) !=-1;
        }
    },
            computed: {
            filterCard: function () {
                if(this.allData == undefined)
                    return [];
                return this.allData.filter((card) => {
                    return card[0].toLowerCase().match(this.search.toLowerCase());
                });
            }
        }
}
</script>

<style>
</style>
