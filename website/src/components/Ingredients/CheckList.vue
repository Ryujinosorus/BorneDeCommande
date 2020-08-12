<template>
    <div>
        <v-container>
            <br>
            <br>
            <br>
            <v-row>
                <v-col cols ="10">
                    <v-card class="pa-2"
                            outlined
                            tile>
                        <v-text-field height="25" placeholder="Rechercher" v-model="search"></v-text-field>
                    </v-card>
                </v-col>
                <v-col cols ="1">
                    <v-btn color="primary" class="white--text" small height="60" max-width="150" @click="dialog = true">
                        <v-icon>mdi-format-list-bulleted-square</v-icon>
                    </v-btn>
                </v-col>
                <v-dialog
                        v-model="dialog"
                        max-width="290"
                        >
                    <v-card>
                        <v-card-title class="headline">Etes vous sur de voulour tout sélectionner ?</v-card-title>
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
                                    @click="dialog = false"
                                    >
                                Non
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-col cols="1">
                    <v-btn color="primary" class="white--text" small height="60" max-width="50" @click="$router.replace('/ingredient')">
                        <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3" v-for="data of filterCard" v-bind:key="data['.key']">
                    <v-card>
                        <v-img :src="data.url" height="200px">
                        </v-img>
                        <v-card-actions heigth="10px">
                            <v-card-title class="mx-auto title subtitle-1">{{data.name}} </v-card-title>
                            <v-spacer></v-spacer>
                            <v-switch inset  flat color="rgb(3, 120, 166)" @change="add(data.name,data.url)" :input-value="checkOnOffSwitchStart(data.name)"></v-switch>
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
    export default {
        props: ['allData','parentName'],
        name: 'checkList',
        data() {
            return {
                title: 'CheckList',
                search: '',
                selectedObject: [],
                dialog : false
            }
        },
        methods:{
            add: function (obj,url) {
                this.$store.commit('ADD_FOOD',[this.parentName,obj,url]);
            },
            selectAll : function(){
                for(let x=0;x<this.allData.length;x++)
                    this.$store.commit('ADD_FOOD',[this.parentName,this.allData[x].name,this.allData[x].url,true]);
                this.dialog = false;
            },
            checkOnOffSwitchStart(obj){
               let tmp= this.$store.getters.getFoodByName(this.parentName);
                for(let x = 0; x< tmp.length;x++)
                    if (tmp[x][0] == obj)
                        return true;
                return false;
            }
        },
        computed: {
            filterCard: function () {
                return this.allData.filter((card) => {
                    return card.name.toLowerCase().match(this.search.toLowerCase());
                });
            }
        },
        created: function () {
            this.selectedObject = this.$store.getters.user;
        }
}</script>

<style>
</style>
