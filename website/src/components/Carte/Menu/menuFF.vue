<template>
    <div>
        <app-menu></app-menu>
        <v-container class="grey lighten-5">
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
                <!--
                <v-col cols="3" v-for="menu of updateMenu" v-bind:key="menu['.key']">
                    <v-card>
                        <v-img :src="menu.picture" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                            <v-card-title>{{menu.nom}} </v-card-title>
                        </v-img>
                        <v-card-actions>
                            <app-listplatmenu :menu="menu" @update="reset"></app-listplatmenu>
                        </v-card-actions>
                    </v-card>
                    <v-col cols="1">
                    </v-col>
                </v-col>
            -->



                <v-col cols="3">
                    <v-card>
                        <v-img src="https://image.freepik.com/free-vector/kawaii-fast-food-cute-fast-food-hotdog-hamburger-fries-drink-ketchup-illustration_24908-60601.jpg" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                            <v-card-title>Nouveau menu </v-card-title>
                        </v-img>
                        <v-card-actions>
                            <app-ajoutemenu></app-ajoutemenu>
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
    import {Plat} from './Plat.js';
    import {fb} from '../main.js';
    export default {
        name: 'plat',
        data() {
        return {
            title: 'plat',
            search: '',
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
        updatMmenu : function(){
            return this.$store.getters.getAllMenu.filter((menu) => {
                        return menu.nom.toLowerCase().match(this.search.toLowerCase());
        });
    }
    }
    }
</script>

<style>
</style>
