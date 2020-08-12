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
                <v-col cols="1">
                    <app-safepaychecklist :parentName='parentName' canBeSafe="true" @close="dialog = false"></app-safepaychecklist>
                </v-col>
                <v-col cols="1">
                    <v-btn color="primary" class="white--text" small height="60" max-width="50" @click="$router.replace('/ingredient')">
                        <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3" v-for="(data,index) of filterCard" v-bind:key="data['.key']">
                    <v-card>
                        <v-img :src="data[2]" class="white--text align-end" height="200px">
                            <v-card-title>{{data[0].trim()}} </v-card-title>
                        </v-img>
                        <v-card-actions heigth="10px">
                            <v-spacer></v-spacer>
                            <v-text-field
                                    class="mx-4"
                                    max="50"
                                    min="0"
                                    step="0.1"
                                    style="width: 125px"
                                    @click="change(index)"
                                    v-model="textFieldValue[index][1]"
                                    type="number"
                                    ></v-text-field>
                                <v-btn @click="onOff(data[0],data[2],index)">
                                    <v-icon color="red">mdi-delete</v-icon>
                                </v-btn>
                        </v-card-actions>
                    </v-card>
                    <v-col cols="1">
                    </v-col>
                </v-col>

                <v-col cols="3">
                    <v-card>
                        <v-card-title><v-text-field v-model="tmpName" label="nom" ></v-text-field> </v-card-title>
                        <v-card-subtitle> <v-file-input @change="changeTmpFile" ></v-file-input></v-card-subtitle>
                        <v-card-actions heigth="10px">
                            <v-text-field
                                    class="mx-4"
                                    max="50"
                                    min="0"
                                    step="0.1"
                                    style="width: 125px"
                                    type="number"
                                    v-model="tmpPrix"
                                    ></v-text-field>
                                <v-btn @click="add()">
                                    <v-icon color="blue">mdi-plus</v-icon>
                                </v-btn>
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
import {fb} from '../../main.js';
    export default {
        props: ['parentName'],
        name: 'PayCheckList',
        data() {
        return {
            title: 'CheckList',
            search: '',
            tmpPrice : [],
            textFieldValue : [],
            tmpName : '',
            tmpFile:null,
            tmpPrix:'2.5'
        }
    },
    methods:{
        checkOnOffSwitchStart(obj){
            let tmp= this.$store.getters.getFoodByName(this.parentName);
            for(let x = 0; x< tmp.length;x++)
                if (tmp[x][0].trim() == obj.trim())
                    return true;
            return false;
        },
        onOff(name,url,index){
            this.$store.commit('CHANGE_FOOD_WPRICE',[this.parentName,name,this.textFieldValue[index][1],url]);
        },
        add(){
            let ref = fb.storage().ref('dataOfUser/'+ this.$store.getters.user.email+ '/BorneSetting/'+ this.parentName +'/' +this.tmpName+'.png');
            let uploadTask= ref.put(new Blob([this.tmpFile],{ type: "image/png" }));
            uploadTask.then((snapshot) => {
                snapshot.ref.getDownloadURL().then((url) => {
                    this.$store.commit('CHANGE_FOOD_WPRICE',[this.parentName,this.tmpName,this.tmpPrix,url]);
                    this.tmpName = null;
                });
            });

        },
        change(index){
            this.$store.commit('UPDATE_FOOD_WPRICE',[this.parentName,this.textFieldValue[index][1],index]);
        },
        changeTmpFile(e){
            this.tmpFile = e;
        },
    },
    computed:{
        filterCard:function(){
                return this.textFieldValue.filter((card) => {
                    return card[0].toLowerCase().match(this.search.toLowerCase());
                });
        }
    },
    created:function(){
        let tmp = this.$store.getters.getFoodByName(this.parentName);
        this.textFieldValue = tmp;
    }
    }
</script>

<style>
</style>
