<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Catégories
          </v-toolbar-title>
        </v-toolbar>

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
                    <v-btn color="primary" class="white--text" small height="60" max-width="50" @click="dialog = false">
                        <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                </v-col>
                <v-col cols="1">
                        <app-savecategorie></app-savecategorie>
                </v-col>
            <v-row>
                <v-col cols="3" v-for="data of filterCard" v-bind:key="data['.key']">
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
                <v-col cols="3">
                    <v-card color="grey">
                        <v-card-title>
                            <v-text-field v-model="tmpText" full-width label="Solo" placeholder="Nom catégorie"></v-text-field>
                        </v-card-title>
                        <v-card-subtitle>
                            <v-file-input placeholder="Photo catégorie" @change="changeTmpFile"></v-file-input>
                        </v-card-subtitle>
                        <v-card-actions heigth="10px">
                            <v-spacer></v-spacer>
    <v-dialog
      v-model="dialogSave"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="blue"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>
              mdi-plus
          </v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Etes vous de vouloir ajouter {{tmpText}} en tant que catégorie ?
        </v-card-title>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
            <v-btn
            color="primary"
            text
            @click="dialogSave = false"
          >
            Non
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="add()"
          >
            Oui
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
                        </v-card-actions>
                    </v-card>
                    <v-col cols="1">
                    </v-col>
                </v-col>
                <v-col>

                </v-col>

            </v-row>
            </v-row>
        </v-container>



      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import {fb} from '../../main'
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
            let ref = fb.storage().ref('dataOfUser/'+ this.$store.getters.user.email+ '/BorneSetting/categorie/' +this.tmpText+'.png');
            let uploadTask= ref.put(new Blob([this.tmpFile],{ type: "image/png" }));
            uploadTask.then((snapshot) => {
                snapshot.ref.getDownloadURL().then((url) => {
                    this.$store.commit('ADD_CATEGORIE',[this.tmpText,url]);
                    this.tmpFile = null;
                    this.tmpText = null;
                });
            });
            this.dialogSave = false;
        },
    },
    created(){
        this.allData = this.$store.getters.categories;
    },
    computed:{
        filterCard(){
            return this.allData.filter((card) => {
                return card[0].toLowerCase().match(this.search.toLowerCase());
            });
        }
    }
}
</script>

<style>
</style>