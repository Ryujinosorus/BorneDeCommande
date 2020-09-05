<template>
    <div>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition" style="z-index:1000000000000000000">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on">
                Modifier
            </v-btn>
        </template>
        <v-card>
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
                        <v-btn color="primary" class="white--text" small height="60" max-width="150" @click="dialogSelectAll = true">
                            <v-icon>mdi-format-list-bulleted-square</v-icon>
                        </v-btn>
                    </v-col>
                    <v-dialog
                            v-model="dialogSelectAll"
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
                                        @click="dialogSelectAll = false"
                                        >
                                    Non
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-col cols="1">
                        <v-btn color="primary" class="white--text" small height="60" max-width="50" @click="dialog = false">
                            <v-icon>mdi-arrow-left</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="3" v-for="(data,index) of filterCard" v-bind:key="data['.key']">
                        <v-card>
                            <v-img :src="data.url" height="200px">
                            </v-img>
                            <v-card-actions heigth="10px">
                                <v-card-title class="mx-auto title subtitle-1">{{data.name}} </v-card-title>
                                <v-spacer></v-spacer>
                                <v-switch inset  flat color="rgb(3, 120, 166)" @change="add(data.name,data.url,index)" :input-value="checkOnOffSwitchStart(data.name,data.url)"></v-switch>
                                <v-text-field type="number" v-model="priceTab[index]" @change="changePrice(data.name,data.url,index)" v-if="content.payable"></v-text-field>
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
        props: ['allData','content'],
        name: 'checkList',
        data() {
            return {
                title: 'CheckList',
                search: '',
                selectedObject: [],
                dialog : false,
                dialogSelectAll : false,
                priceTab : []
            }
        },
        methods:{
            add: function (name,link,index) {
                let obj={
                    nom : name,
                    url : link,
                    price : this.priceTab[index]
                }
                console.log(obj);
                let pos = -1;
                for(let i=0;i<this.content.data.length;i++)
                    if(this.content.data[i].nom == name && this.content.data[i].url == link)
                        pos = i;

                if(pos == -1)
                    this.content.data.push(obj);
                else this.content.data.splice(pos,1);
                
            },
            changePrice(name,link,index){
                let pos = -1;
                for(let i=0;i<this.content.data.length;i++)
                    if(this.content.data[i].nom == name && this.content.data[i].url == link)
                        pos = i;
                if(pos==-1)
                    return
                else this.content.data[pos].price = this.priceTab[index];
                console.log(pos);

            },
            selectAll : function(){
                for(let x=0;x<this.allData.length;x++)
                    this.$store.commit('ADD_FOOD',[this.parentName,this.allData[x].name,this.allData[x].url,true]);
                this.dialog = false;
            },
            checkOnOffSwitchStart(name,url){
                for(let i=0 ; i< this.content.data.length;i++)
                    if(this.content.data[i].nom == name && this.content.data[i].url == url)
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
            for(let i=0;i<this.allData.length;i++){
                let price = 2;
                for(let j=0;j<this.content.data.length;j++)
                    if(this.allData[i].name == this.content.data[j].nom)
                        price = this.content.data[j].price;
                this.priceTab.push(price);
            }
        }
}</script>

<style>
</style>
