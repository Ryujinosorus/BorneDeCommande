<template>
    <div>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary"
                       dark
                       v-bind="attrs"
                       v-on="on">
                    Nouveau
                </v-btn>
            </template>
            <v-card>
                <v-toolbar dark color="primary" style="z-index : 200000000;">
                    <v-btn icon dark @click="close">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Ajouter un nouveau menu !</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <app-safeplat :canBeSafe="menu.canBeSafe()" :plat="menu" action="Ajouter" @save="save"></app-safeplat>
                    </v-toolbar-items>
                </v-toolbar>
                <v-container>
                    <v-row>

                        <!--MODIFIER PLAT-->
                        <v-col cols="3">
                            <v-card>
                                <v-img src="https://image.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                                    <v-card-title>Plats de votre menu ! </v-card-title>
                                </v-img>
                                <v-card-actions>
                                    <app-listformenu :data="getPlat()" :alreadyHave="menu.plat" title="plat" @add="add($event)" @selectAll="addSure($event)"></app-listformenu>
                                </v-card-actions>
                            </v-card>
                            <v-col cols="1">
                            </v-col>
                        </v-col>

                        <!--MODIFIER ACCOMPAGNEMENTS -->
                        <v-col cols="3">
                            <v-card>
                                <v-img src="https://image.freepik.com/free-photo/potato-chips_1339-1685.jpg" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                                    <v-card-title>Accompagnements fixe </v-card-title>
                                </v-img>
                                <v-card-actions>
                                    <app-listformenu :data="getAccompagnements()" :alreadyHave="menu.accompagnementsD" title="accompagnements par d�fault" @add="add($event)"  @selectAll="addSure($event)"></app-listformenu>
                                </v-card-actions>
                            </v-card>
                            <v-col cols="1">
                            </v-col>
                        </v-col>

                        <v-col cols="3">
                            <v-card>
                                <v-img src="https://image.freepik.com/free-photo/four-boxes-nuggets-with-chicken-prawn-cheese-fish-with-four-sauce_141793-2306.jpg" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                                    <v-card-title>Accompagnements libre! </v-card-title>
                                </v-img>
                                <v-card-actions>
                                    <app-listformenu :data="getAccompagnements()" :alreadyHave="menu.accompagnementsL" title="accompagnements libre" @add="add($event)"  @selectAll="addSure($event)"></app-listformenu>
                                    <v-text-field
                                            v-model="max['acc']"
                                            @click="add(['maxAcc',max['acc']])"
                                            class="mx-4"
                                            label="Max"
                                            max="50"
                                            min="0"
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
                                <v-img src="https://image.freepik.com/free-vector/vector-illustration-engraving-style-set-different-sauces-are-poured-from-bottles_1441-405.jpg" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                                    <v-card-title>Sauce </v-card-title>
                                </v-img>
                                <v-card-actions>
                                    <app-listformenu :data="getSauce()" :alreadyHave="menu.sauce" title="sauce" @add="add($event)"  @selectAll="addSure($event)"></app-listformenu>
                                    <v-text-field
                                            v-model="max['sauce']"
                                            @click="add(['maxSauce',max['sauce']])"
                                            class="mx-4"
                                            label="Max"
                                            max="50"
                                            min="0"
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
                                <v-img src="https://image.freepik.com/free-photo/delicious-american-cookies-burlap_23-2148238786.jpg" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                                    <v-card-title>D�ssert Libre </v-card-title>
                                </v-img>
                                <v-card-actions>
                                    <app-listformenu :data="getDessert()" :alreadyHave="menu.dessertL" title="desserts libre" @add="add($event)"  @selectAll="addSure($event)"></app-listformenu>
                                    <v-text-field
                                            v-model="max['dessert']"
                                            @click="add(['maxDessert',max['dessert']])"
                                            class="mx-4"
                                            label="Max"
                                            max="50"
                                            min="0"
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
                                <v-img src="https://image.freepik.com/free-photo/tasty-sweets-wooden-blue-table_23-2147802643.jpg" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                                    <v-card-title>D�ssert fixe</v-card-title>
                                </v-img>
                                <v-card-actions>
                                    <app-listformenu :data="getDessert()" :alreadyHave="menu.dessertD" title="desserts fixe" @add="add($event)"  @selectAll="addSure($event)"></app-listformenu>
                                </v-card-actions>
                            </v-card>
                            <v-col cols="1">
                            </v-col>
                        </v-col>



                        <v-col cols="3">
                            <v-textarea label="Nom du plat" auto-grow outlined rows="1" row-height="10" v-model="platName" @change="add(['nom',platName])"></v-textarea>
                            <v-textarea label="Prix � l'unit�" auto-grow outlined rows="1" row-height="10" v-model="platPrix" @change="add(['prix',platPrix])"></v-textarea>
                            <v-file-input
                                    :rules="rules"
                                    accept="image/png, image/jpeg, image/bmp"
                                    placeholder="Image de votre menu"
                                    prepend-icon="mdi-camera"
                                    v-model="picture"
                                    @change="uploadPicture"
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
    import {Menu} from "../../../Scripts/Menu.js";
    import {db} from'../../../main.js';
    export default {
        name: 'app-ajouteplat',
        data() {
        return {
            menu:null,
            dialog:false,
            allPlat:null,
            allAccompagnements:null,
            platName:'',
            platPrix:'',
            solo :"Menu vide pour l'instant",
            max :{
                'sauce' :1,
                'acc' : 1,
                'dessert' : 0,
            },
            picture : null,
            rules: [
                value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!']
    }
    },
    methods:{
        canBeSafe:function(){
            return true;
        },
        getPlat(){
            return this.$store.getters.getAllPlat;
        },
        getAccompagnements:function(){
            let tmp = this.$store.getters.getFoodByName("Accompagnement Menu");
            return this.myParser(tmp);
        },
        getSauce : function(){
            let tmp = this.$store.getters.getFoodByName('sauces');
            return this.myParser(tmp);
        },
        getDessert : function(){
            let tmp = this.$store.getters.getFoodByName('desserts');
            return this.myParser(tmp);
        },
        myParser:function(data){
            let res=[];
            for(let x=0;x<data.length;x++){
                let Obj= new Tmp();
                Obj.picture = data[x][1];
                Obj.tab['nom'] = data[x][0];
                res.push(Obj);
            }
            return res;
        },
        add(event){
            this.menu.add(event);
            this.solo = this.menu.toString();
        },
        addSure(event){
            this.menu.addSure(event);
            this.solo = this.menu.toString();
        },
        save:function(){
            //this.menu.tmpFile = this.picture;
            
            //this.menu.toFirebase('ADD_MENU');
            this.$store.commit('ADD_MENU',this.menu);
            this.close();
        },
        uploadPicture:function(e){
            this.menu.tmpFile=e;
        },
        close:function(){
            this.platName = '';
            this.platPrix='';
            this.max['sauce']='1';
            this.max['dessert']='0';
            this.max['acc']='1';
            this.solo="Menu vide pour l'instant";
            this.picture=null;
            this.menu = new Menu();
            this.dialog = false;
        }
    },
    created:function(){
        this.menu = new Menu();
    }
    }

    class Tmp{
        constructor(){
            this.picture = '';
            this.tab = new Array();
            this.tab["nom"] = '';
        }
    }
</script>

<style>
</style>
