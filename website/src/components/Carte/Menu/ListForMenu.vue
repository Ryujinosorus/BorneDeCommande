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
                    <v-toolbar-title>Modifier les {{this.title}} de votre Menu !</v-toolbar-title>
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
                        <v-col cols ="1">
                            <v-btn color="primary" class="white--text" small height="60" max-width="150" @click="dialogSelectAll = true">
                                <v-icon>mdi-format-list-bulleted-square</v-icon>
                            </v-btn>
                        </v-col>
                        <v-dialog
                                v-model="dialogSelectAll"
                                max-width="290"
                                >
                            <v-card>
                                <v-card-title class="headline">Etes vous sur de voulour tout s�lectionner ?</v-card-title>
                                <v-card-actions>
                                    <v-spacer></v-spacer>

                                    <v-btn
                                            color="#4080FF"
                                            text
                                            @click="selectAll()"
                                            outlined
                                            >
                                        Oui
                                    </v-btn>

                                    <v-btn
                                            color="red"
                                            text
                                            @click="dialogSelectAll = false"
                                            >
                                        Non
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-row>


                    <!--LIST DATA-->

                    <v-row>
                        <v-col cols="3" v-for="myData of filterCard" v-bind:key="myData['.key']">
                            <v-card>
                                <v-img :src="myData.picture" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                                    <v-card-title>{{myData.tab['nom']}} </v-card-title>
                                </v-img>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-switch  @change="add(myData.tab['nom'])" :input-value="checkOnOffSwitchStart(myData.tab['nom'])"></v-switch>
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
        props: ['data','menu','title','alreadyHave'],
        name: 'ListForMenu',
        data() {
        return {
            search: '',
            dialog:false,
            dialogSelectAll: false
        }
    },
    methods:{
        add: function(nom) {
            this.$emit('add',[this.title,nom]);
        },
        selectAll : function(){
            for(let x=0;x<this.data.length;x++)
                this.$emit('selectAll',[this.title,this.data[x].tab['nom']]);
            this.dialogSelectAll = false;
        },
        checkOnOffSwitchStart(obj){
            for(let x = 0; x< this.alreadyHave.length;x++)
                if (this.alreadyHave[x]== obj)
                    return true;
            return false;
        }
    },
    computed: {
        filterCard: function () {
            return this.data.filter((card) => {
                        return card.tab['nom'].toLowerCase().match(this.search.toLowerCase());
        });
    }
    }
    }</script>

<style>
</style>
