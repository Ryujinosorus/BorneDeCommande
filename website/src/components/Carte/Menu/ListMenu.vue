<template>
    <div>
        <br>
        <br>
        <br>
        <v-container>
            <v-row>
                <v-col>
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
                <v-col cols="1">
                    <app-saveallmenu></app-saveallmenu>
                </v-col>
            </v-row>

            <v-row>
                <!-- MODIFIER MENU-->
                <v-col cols="3" v-for="menu of updateMenu" :key="menu['.key']">
                    <v-card>
                        <v-img :src="menu.picture" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                            <v-card-title>{{menu.nom}} </v-card-title>
                        </v-img>
                        <v-card-actions>
                            <app-modifieplat :menu="menu"></app-modifieplat>
                        </v-card-actions>
                    </v-card>
                    <v-col cols="1">
                    </v-col>
                </v-col>
                <!-- AJOUTE NOUVEAU MENU-->
                <v-col cols="3">
                    <v-card>
                        <v-img src="https://image.freepik.com/free-vector/delicious-fast-food-pop-art-style_24908-61605.jpg" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
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
    export default {
        name: 'ListMeu',
        data() {
        return {
            title: 'ListPlat',
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
        updateMenu : function(){
            return this.$store.getters.getAllMenu.filter((plat) => {
                        return plat.nom.toLowerCase().match(this.search.toLowerCase());
        });
    }
    }
    }
</script>

<style>
</style>
