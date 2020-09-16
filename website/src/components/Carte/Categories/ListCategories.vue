<template>

  
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
                    <v-btn color="primary" class="white--text" small height="60" max-width="50" @click="goBack()">
                        <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                </v-col>
                <v-col cols="1">
                        <app-savecategorie></app-savecategorie>
                </v-col>
            </v-row>
            <v-row>
                <v-col s="10" sm="6" md="4" lg="3" xl="2" v-for="data of filterCard" v-bind:key="data['.key']">
                    <v-card>
                        <v-img :src="data[1]" height="200px">
                        </v-img>
                        <v-card-actions heigth="10px">
                            <v-card-title class="mx-auto title subtitle-1">{{data[0]}} </v-card-title>
                            <v-spacer></v-spacer>


                            <app-deletecategorie :nom="data[0]"></app-deletecategorie>
                        </v-card-actions>
                    </v-card>
                    <v-col cols="1">
                    </v-col>
                </v-col>
                <v-col s="10" sm="6" md="4" lg="3" xl="2">
                    <v-card color="grey">
                        <v-card-title>
                            <v-text-field v-model="tmpText" full-width label="Solo" placeholder="Nom catégorie"></v-text-field>
                        </v-card-title>
                        <v-card-subtitle>
                            <v-file-input placeholder="Photo catégorie" @change="changeTmpFile"></v-file-input>
                        </v-card-subtitle>
                        <v-card-actions heigth="10px">
                            <v-spacer></v-spacer>
                            <v-btn @click="add()"></v-btn>
                        </v-card-actions>
                    </v-card>
                    <v-col cols="1">
                    </v-col>
                </v-col>
                <v-col>

                </v-col>

            </v-row>
        </v-container>
</template>

<script>
export default {
    data(){
        return{
            dialog : false,
            dialogSave : false,
            allData : [],
            search :'',
            tmpFile:null,
            tmpText:''
        }
    },
    methods:{
        changeTmpFile(e){
            this.tmpFile = e;
        },
        add(){
          let url = 'https://firebasestorage.googleapis.com/v0/b/bornekebab.appspot.com/o/data%2Fpicture%2FdefaultCategoriePicture.jpg?alt=media&token=8ed67476-31f0-468d-a092-b8f28a8d16b3';
          if(this.tmpFile!=undefined)
            url = URL.createObjectURL(this.tmpFile);
          this.$store.commit('ADD_CATEGORIE',[this.tmpText,url]);
          this.tmpText = '';
          this.dialogSave = false;
        },
        goBack(){
            this.$router.replace('/ingredient');
        }
    },
    computed:{
        filterCard(){
            return this.$store.getters.categories.filter((card) => {
                return card[0].toLowerCase().match(this.search.toLowerCase());
            });
        }
    }
}
</script>

<style>
</style>