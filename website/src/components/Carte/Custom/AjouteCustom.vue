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
                        <!--<app-safeplat :canBeSafe="custom.canBeSafe()" :custom="custom" @save="save" action="ajouter"></app-safeplat>-->
                    </v-toolbar-items>
                </v-toolbar>
                <v-container class="grey lighten-5">
                    <v-row>

                        <v-col cols="3" v-for="data in custom.content" :key="data.nom">
                            <v-card>
                                <v-card-title>
                                    {{data.nom}}
                                </v-card-title>
                                <v-card-actions>
                                    <app-selectTypeForCustom :content="data"></app-selectTypeForCustom>
                                </v-card-actions>
                            </v-card>
                            <v-col cols="1">
                            </v-col>
                        </v-col>

                        <v-col cols="3">
                            <v-card>
                                <v-card-title>
                                    Nouvelle catégorie
                                </v-card-title>
                                <v-text-field v-model="newCateName"></v-text-field>
                                <v-card-actions>
                                    <v-btn @click="addNewCate()"></v-btn>
                                </v-card-actions>
                            </v-card>
                            <v-col cols="1">
                            </v-col>
                        </v-col>
                        <v-col cols="3">
                            <v-textarea label="Nom du plat" auto-grow outlined rows="1" row-height="10" v-model="platName" @change="custom.nom = platName"></v-textarea>
                            <v-select :items="items" label="Categorie" dense solo v-model="platCategorie" @change="custom.categorie = platCategorie"></v-select>
                            <v-textarea label="Prix � l'unit�" auto-grow outlined rows="1" row-height="10" v-model="platPrix" @change="custom.prix = platPrix"></v-textarea>
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
    import {Custom} from'../../../Scripts/Custom.js';
    export default {
        name: 'app-ajouteCustom',
        props : ['custom'],
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
        newCateName : '',
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
        addNewCate(){
            let obj = {
                'nom' : this.newCateName,
                'data' : []
            };
            this.custom.content.push(obj);
            this.newCateName = '';
        },
        updatePlatRecap:function(){
            //this.solo = this.custom.toString();
        },
        save : function(){
            this.$store.commit("ADD_PLAT",this.plat);
            this.reset();
            this.dialog = false;
        },
        uploadImage:function(e){
            this.custom.tmpFile =e;
            this.updatePlatRecap();
        }
    },
    created: function(){
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
