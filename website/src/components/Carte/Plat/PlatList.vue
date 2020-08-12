<template>
    <div>
        <br>
        <br>
        <br>
        <v-container>
            <v-row>
                <v-col cols="10">
                    <v-card class="pa-2"
                            outlined
                            tile>
                        <v-text-field height="25" placeholder="Rechercher" v-model="search"></v-text-field>
                    </v-card>
                </v-col>

                <v-col cols="1">
                    <v-btn color="primary" class="white--text" small height="60" max-width="50" @click="$router.replace('/ingredient')">
                        <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                </v-col>
                <v-col>
                    <app-saveallplat></app-saveallplat>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="3" v-for="plat of updatePlat" v-bind:key="plat['.key']">
                    <v-card>
                        <v-img :src="plat.picture" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                            <v-card-title>{{plat.tab['nom']}} </v-card-title>
                        </v-img>
                        <v-card-actions>
                            <app-modifierplat :plat="plat" @update="reset"></app-modifierplat>
                        </v-card-actions>
                    </v-card>
                    <v-col cols="1">
                    </v-col>
                </v-col>




                <v-col cols="3">
                    <v-card>
                        <v-img src="https://image.freepik.com/free-photo/junk-food-black-slate-with-copy-space_23-2148273109.jpg" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                            <v-card-title>Nouveau plat </v-card-title>
                        </v-img>
                        <v-card-actions>
                          <app-ajouteplat></app-ajouteplat>
                        </v-card-actions>
                    </v-card>
                    <v-col cols="1">
                    </v-col>
                </v-col>


            </v-row>
        </v-container>
    </div>
</template>

<script>
    /* eslint-disable */
    import {Plat} from '../../../Scripts/Plat.js';
    import {fb} from '../../../main.js';
    export default {
        name: 'plat',
        data() {
            return {
                title: 'plat',
                search: '',
                plat : null,
                startRoute : null,
                tmpLink : null,
            }
        },
    methods:{
        reset: function(){
            let tmp=this.search;
            this.search = tmp+" ";
            this.search=tmp;
        }
    },
        computed :{
            updatePlat : function(){
                return this.$store.getters.getAllPlat.filter((plat) => {
                            return plat.tab['nom'].toLowerCase().match(this.search.toLowerCase());
            });
            }
        },
    created :function(){
        this.startRoute = 'dataOfUser/'+this.$store.getters.user.email+"/";
    }
    }
</script>

<style>
</style>
