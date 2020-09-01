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
                    <app-saveAllCustom></app-saveAllCustom>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="3">
                    <v-card>
                        <v-img src="https://image.freepik.com/free-photo/junk-food-black-slate-with-copy-space_23-2148273109.jpg" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                            <v-card-title>Nouveau plat </v-card-title>
                        </v-img>
                        <v-card-actions>
                          <app-ajouteCustom :custom="initCustom" action="ADD_CUSTOM" @CLOSE="reset()" ></app-ajouteCustom>
                        </v-card-actions>
                    </v-card>
                    <v-col cols="1">
                    </v-col>
                </v-col>



                <v-col cols="3" v-for="(custom,index) of updateCustom" v-bind:key="custom['.key']">
                    <v-card>
                        <v-img :src="custom.picture" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                            <v-card-title>{{custom.nom}} </v-card-title>
                        </v-img>
                        <v-card-actions>
                            <app-ajouteCustom :custom="custom" action="UPDATE_CUSTOM" :index="index" ></app-ajouteCustom>
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
import {Custom} from '../../Scripts/Custom'
    /* eslint-disable */
    export default {
        name: 'custom',
        data() {
            return {
                title: 'custom',
                search: '',
                startRoute : null,
                initCustom : null
            }
        },
    methods:{
        reset: function(){
            this.initCustom = new Custom();
        }
    },
        computed :{
            updateCustom : function(){
                return this.$store.getters.getAllCustom.filter((custom) => {
                            return custom.nom.toLowerCase().match(this.search.toLowerCase());
            });
            }
        },
        created(){
            this.initCustom = new Custom();
        }
    }
</script>

<style>
</style>
