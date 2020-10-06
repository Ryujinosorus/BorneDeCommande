<template>
  <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
        <v-icon></v-icon>
          Sauvegarder
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">Etes vous sur de vouloir sauvergrder ?</v-card-title>
        <v-card-text>En sauvegardant vous allez modfier le theme de vos bornes, attention si celles ci sont allumé un redemerage sera necessaire pour que les modfication soit effectives</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="save">Oui</v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">Non</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import { fb } from "../../main.js";

export default {
  props : ['borne'],
    data(){
        return{
            'dialog':false
        }
    },
    methods:{
      async save(){
        console.log(this.borne.firstPage.picture[1]);
        let nbBlob = 0;
        for (let x = 0; x < this.borne.firstPage.nbDiapo; x++)
          if (this.borne.firstPage.picture[x].startsWith('blob')) 
              nbBlob++;
        let nbBlobFound = 0;
        let myRef ="dataOfUser/" + this.$store.getters.user.data.email + "/BorneSetting/";
        for (let x = 0; x < this.borne.firstPage.nbDiapo; x++){
          if (this.borne.firstPage.picture[x].startsWith('blob')) {
            nbBlobFound++;
            let blob = await fetch(this.borne.firstPage.picture[x]).then((r) => r.blob());
            let ref =  fb.storage().ref(myRef + "picure/slide"+ x +'.png');
            let uploadTask = ref.put(blob);
            uploadTask.then((snapshot) => {
              snapshot.ref.getDownloadURL().then((url) => {
                this.borne.firstPage.picture[x] = url;
                if(nbBlob==nbBlobFound)
                  this.upload();
              });
            });
          }
        }
        if(nbBlob==0)
          this.upload();
        this.dialog = false;
        },
        upload(){
          let data = JSON.stringify(this.borne);
          let ref = fb.storage().ref( "/dataOfUser/" + this.$store.getters.user.data.email + "/BorneSettings.txt");
          ref.put(new Blob([data], { type: "text/plain" }));
        }
      }
}
</script>

<style>

</style>