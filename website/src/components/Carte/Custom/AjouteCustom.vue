<template>
    <div>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition" style="z-index:1000000000000000000">
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary"
                       dark
                       v-bind="attrs"
                       v-on="on"
                       @click="custom.pushHimToFb = true;setCustomName()"
                       >
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
                        <app-deleteCustom :custom="custom" @CLOSE="reset()">></app-deleteCustom>
                        <app-safeCustom :canBeSafe="custom.canBeSafe()" :custom="custom" :action="action" @CLOSE="reset()"></app-safeCustom>
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
                                    <v-spacer></v-spacer>
                                    <v-checkbox v-model="data.payable">
                                        <template v-slot:label>
                                            <span :style="{color : data.payable ? 'green' : 'red'}">Payant</span>
                                        </template>
                                    </v-checkbox>
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
                                <v-img :src="custom.picture">
                                </v-img>
                        </v-col>

                        <v-col cols="3">
                            <v-card>
                                <v-card-title>
                                    Plat en relation
                                </v-card-title>
                                <v-card-actions>
                                              <v-select :items="customName" v-model="custom.linkedWith" chips label="Chips" multiple solo></v-select>
                                </v-card-actions>
                            </v-card>
                            <v-col cols="1">
                            </v-col>
                        </v-col>

                        <v-col cols="12" sm="12">
                            <v-textarea label="Recap" auto-grow outlined rows="1" row-height="10" :value="custom.toString()" readonly></v-textarea>
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
        props : ['custom','action'],
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
                customName : [],
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
                'payable' : false,
                'data' : []
            };
            this.custom.content.push(obj);
            this.newCateName = '';
        },
        updatePlatRecap:function(){
            //this.solo = this.custom.toString();
        },
        reset : function(){
            this.$emit('CLOSE');
            if(this.action == 'ADD_CUSTOM'){
                this.newCateName = '';
                this.platName = '';
                this.platCategorie = '';
                this.platPrix = '';
            }
            this.dialog = false;
        },
        uploadImage:function(e){
            this.custom.picture = URL.createObjectURL(new Blob([e], {type: 'image/bmp'}));
        },
        setCustomName:function(){
            let allCustom = this.$store.getters.getAllCustom;
            for(let i=0;i<allCustom.length;i++)
                if(allCustom[i].nom != this.custom.nom)
                    this.customName.push(allCustom[i].nom);
        }
    },
    created: function(){
        this.food = this.$store.getters.getAllFood;
        let tmp =  this.$store.getters.categories;
        for(let x=0;x<tmp.length;x++)
            this.items.push(tmp[x][0]);
        this.platName = this.custom.nom;
        this.platCategorie = this.custom.categorie;
        this.platPrix = this.custom.prix;
        this.setCustomName();
    }
    }
</script>

<style>
</style>
