<template>
    <div>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition" style="z-index:1000000000000000000">
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary"
                       dark
                       v-bind="attrs"
                       v-on="on">
                    Nouveau
                </v-btn>
            </template>
            <v-card>
                <v-toolbar dark color="#4080FF">
                    <v-btn icon dark @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Ajouter un nouveau plat !</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <app-safeplat :canBeSafe="plat.canBeSafe()" :plat="plat" @save="save" action="ajouter"></app-safeplat>
                    </v-toolbar-items>
                </v-toolbar>
                <v-container class="grey lighten-5">
                    <v-row>
                        <v-col cols="3">
                            <v-card>
                                <v-img src="https://image.freepik.com/free-photo/professional-male-cook-sprinkles-dough-with-flour-preapares-bakes-bread-kitchen-table_155003-10124.jpg" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                                    <v-card-title>Pain</v-card-title>
                                </v-img>
                                <v-card-actions>
                                    <app-detailplat :allData="food['pains']" title="pains" :plat='plat' @add="add($event)"></app-detailplat>
                                </v-card-actions>
                            </v-card>
                            <v-col cols="1">
                            </v-col>
                        </v-col>
                        <v-col cols="3">
                            <v-card>
                                <v-img src="https://image.freepik.com/free-photo/colorful-delicious-vegetables-arrangement_23-2148290786.jpg" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                                    <v-card-title>Legumes</v-card-title>
                                </v-img>
                                <v-card-actions>
                                    <app-detailplat :allData="food['legumes']" title="legumes" :plat='plat' @add="add($event)"></app-detailplat>
                                </v-card-actions>
                            </v-card>
                            <v-col cols="1">
                            </v-col>
                        </v-col>
                        <v-col cols="3">
                            <v-card>
                                <v-img src="https://image.freepik.com/free-photo/pancake-sauces-honey-condensed-milk-berry-jam-top-view_141793-4500.jpg" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                                    <v-card-title>Sauce par d�fault</v-card-title>
                                </v-img>
                                <v-card-actions>
                                    <app-detailplat :allData="food['sauces']" title="sauces par d�fault" :plat='plat' @add="add($event)"></app-detailplat>
                                </v-card-actions>
                            </v-card>
                            <v-col cols="1">
                            </v-col>
                        </v-col>
                        <v-col cols="3">
                            <v-card>
                                <v-img src="https://image.freepik.com/free-photo/homemade-ketchup-mustard-mayonnaise-sauce-ingredients-dark-top-view_114579-4970.jpg" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                                    <v-card-title>Sauce au choix</v-card-title>
                                </v-img>
                                <v-card-actions>
                                    <app-detailplat :allData="food['sauces']" title="sauces libre" :plat='plat' @add="add($event)"></app-detailplat>
                                    <v-text-field
                                            v-model="max.sauce"
                                            @click="numberChange('sauce')"
                                            class="mx-4"
                                            label="Max"
                                            max="50"
                                            min="1"
                                            step="1"
                                            style="width: 125px"
                                            type="number"
                                            ></v-text-field>
                                </v-card-actions>
                            </v-card>
                            <v-col cols="1">
                            </v-col>
                        </v-col>
                        <v-col cols="3">
                            <v-card>
                                <v-img src="https://image.freepik.com/free-photo/cutted-beef-steak-cuisine-concept_53876-23368.jpg" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                                    <v-card-title>Viande/poisson</v-card-title>
                                </v-img>
                                <v-card-actions>
                                    <app-detailplat :allData="food['viandes et poissons']" title="viandes et poissons" :plat='plat' @add="add($event)"></app-detailplat>
                                </v-card-actions>
                            </v-card>
                            <v-col cols="1">
                            </v-col>
                        </v-col>
                        <v-col cols="3">
                            <v-card>
                                <v-img src="https://image.freepik.com/free-photo/close-up-woman-breaking-eggs_23-2148535207.jpg" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                                    <v-card-title>Extra</v-card-title>
                                </v-img>
                                <v-card-actions>
                                    <app-detailplat :allData="food['extras']" title="extras" :plat='plat' @add="add($event)"></app-detailplat>
                                </v-card-actions>
                            </v-card>
                            <v-col cols="1">
                            </v-col>
                        </v-col>
                        <v-col cols="3">
                            <v-card>
                                <v-img src="https://image.freepik.com/free-photo/flat-lay-mix-gourmet-cheese-grapes-cutting-board-with-copy-space_23-2148376122.jpg" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                                    <v-card-title>Fromage</v-card-title>
                                </v-img>
                                <v-card-actions>
                                    <app-detailplat :allData="food['fromages']" title="fromages" :plat='plat' @add="add($event)"></app-detailplat>
                                </v-card-actions>
                            </v-card>
                            <v-col cols="1">
                            </v-col>
                        </v-col>
                        <v-col cols="3">
                            <v-card>
                                <v-img src="https://image.freepik.com/free-photo/close-up-crispy-organic-bacon_1232-3552.jpg" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                                    <v-card-title>Supplements</v-card-title>
                                </v-img>
                                <v-card-actions>
                                    <v-text-field
                                            v-model="max.supplements"
                                            @click="numberChange('supplements')"
                                            class="mx-4"
                                            label="Max"
                                            max="50"
                                            min="1"
                                            step="1"
                                            style="width: 125px"
                                            type="number"
                                            ></v-text-field>
                                </v-card-actions>
                            </v-card>
                            <v-col cols="1">
                            </v-col>
                        </v-col>
                        <v-col cols="3">
                            <v-textarea label="Nom du plat" auto-grow outlined rows="1" row-height="10" v-model="platName" @change="add(['nom',platName])"></v-textarea>
                            <v-select :items="items" label="Categorie" dense solo v-model="platCategorie" @change="add(['categorie',platCategorie])"></v-select>
                            <v-textarea label="Prix � l'unit�" auto-grow outlined rows="1" row-height="10" v-model="platPrix" @change="add(['prix',platPrix])"></v-textarea>
                        </v-col>
                        <v-col cols="3">
                            <v-file-input
                                    :rules="rules"
                                    accept="image/png, image/jpeg, image/bmp"
                                    placeholder="Image de votre plat"
                                    prepend-icon="mdi-camera"
                                    v-model="picture"
                                    @change="uploadImage"
                                    ></v-file-input>
                        </v-col>
                        <v-col cols="12" sm="12">
                            <v-textarea label="Recap" auto-grow outlined rows="1" row-height="10" v-model="solo" readonly></v-textarea>
                        </v-col>

                    </v-row>
                </v-container>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    /* eslint-disable */
    import {fb} from "../../../main.js";
    import {Plat} from'../../../Scripts/Plat.js';
    export default {
        name: 'app-ajouteplat',
        data() {
        return {
            rules: [
                value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
    ],
                dialog : false,
                        picture : null,
                max:{
            'sauce' : '1',
                    'supplements' : '3'
        },
        plat : null,
        rows :'',
                items: [],
                platName :'',
                platCategorie:'',
                platPrix:'',
                solo :"Menu vide pour l'instant",
    }
    },
    methods:{
        add:function(event){
            this.plat.add(event);
            this.updatePlatRecap();
        },
        updatePlatRecap:function(){
            this.solo = this.plat.toString();
        },
        numberChange:function(a){
            this.plat.change(a,this.max[a]);
            this.updatePlatRecap();
        },
        save : function(){
            this.$store.commit("ADD_PLAT",this.plat);
            this.reset();
            this.dialog = false;
        },
        reset:function () {
            this.plat = new Plat();
            this.platName = '';
            this.solo = "Menu vide pour l'instant";
            this.platCategorie='';
            this.platPrix='';
            this.picture = null;
        },
        uploadImage:function(e){
            this.plat.tmpFile =e;
            this.updatePlatRecap();
        }
    },
    created: function(){
        this.plat = new Plat();
        this.food = this.$store.getters.getAllFood;
        let tmp =  this.$store.getters.categories;
        for(let x=0;x<tmp.length;x++)
            this.items.push(tmp[x][0]);
        this.platName ='';
        this.platCategorie ='';
        this.platPrix = '';
    }
    }
</script>

<style>
</style>
