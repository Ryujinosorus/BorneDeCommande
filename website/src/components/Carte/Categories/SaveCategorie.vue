<template>
<div>
 <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        color="primary" class="white--text" small height="60" max-width="50" 
          v-bind="attrs"
          v-on="on"
          @click="getText()"
          :loading="loader"
        >
          <v-icon>
              mdi-content-save
          </v-icon>
        </v-btn>
      </template>


            <v-card>
                <v-card-title
                        class="headline grey lighten-2"
                        primary-title
                        >
                    Etes vous sur de vouloir enregistre ces catgories ?
                </v-card-title>

                <v-card-text>
                    <v-textarea auto-grow outlined rows="1" row-height="10" :value="textToShow" readonly></v-textarea>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="primary"
                            text
                            @click="save"
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

    <v-dialog
    v-model="dialogError"
    width="500"
    >
            <v-card>
                <v-card-title
                        class="headline grey lighten-2"
                        primary-title
                        >
                    Erreur rencontré
                </v-card-title>

                <v-card-text>
                    <v-textarea auto-grow outlined rows="1" row-height="10" value="Les noms de plats de ne peuvent pas contenir ' : '  Il ne peux pas y avoir deux plats avec le meme nom" readonly></v-textarea>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="primary"
                            text
                            @click="dialogError = false;"
                            outlined
                            >
                        Ok
                    </v-btn>
                </v-card-actions>
            </v-card>
    </v-dialog>
</div>
</template>

<script>
import {fb} from "../../../main";
export default {
    data(){
        return{
            dialog:false,
            textToShow : 'aaa',
            loader : false,
            dialogError : false
        }
    },
    methods:{
        save(){
            this.loader = true;
            let bs = this.$store.getters.bornesettings;


            let nbBlob = 0;
            for(let i=0;i<bs.categorie.length;i++){
                if(bs.categorie[i][1].startsWith('blob'))
                    nbBlob++;
                if(bs.categorie[i][0].includes(' : ')){
                    this.dialogError = true;
                    this.dialog = false;
                    this.loader = false;
                    return;
                }
                for(let j=0;j<bs.categorie.length;j++)
                    if(i!=j && bs.categorie[i][0] == bs.categorie[j][0]){
                        this.dialogError = true;
                        this.dialog = false;
                        this.loader = false;
                        return;
                    }
            }

            if(nbBlob == 0){
                let ref = fb.storage().ref('/dataOfUser/' + this.$store.getters.user.data.email+"/BorneSettings.txt");
                ref.put(new Blob([JSON.stringify(bs)],{type: 'text/plain'}));
                this.dialog = false;
                this.loader = false;
                return
            }

            let nbBlobFound = 0;
            for(let i=0;i<bs.categorie.length;i++)
                if(bs.categorie[i][1].startsWith('blob')){
                let ref = fb.storage().ref('dataOfUser/'+ this.$store.getters.user.data.email+ '/BorneSetting/categorie/' + bs.categorie[i][0] +'.png');
                let xhr = new XMLHttpRequest();
                const self = this;
                xhr.responseType = 'blob';
                xhr.onload = function(){
                    console.log(xhr.response);
                    let uploadTask= ref.put(xhr.response);
                    uploadTask.then((snapshot) => {
                    snapshot.ref.getDownloadURL().then((url) => {
                        bs.categorie[i][1] = url;
                        nbBlobFound ++;
                        if(nbBlob == nbBlobFound){
                            self.loader = false;
                            let ref = fb.storage().ref('/dataOfUser/' + self.$store.getters.user.data.email+"/BorneSettings.txt");
                            ref.put(new Blob([JSON.stringify(bs)],{type: 'text/plain'}));
                        }
                    });
                });
                }
                xhr.open('GET', bs.categorie[i][1]);
                xhr.send();

            }

            this.dialog = false;
        },
        getText(){
            let res= '';
            let tab = this.$store.getters.categories;
            for(let x=0;x<tab.length;x++)
                res+= (tab[x][0] + '\n');
            this.textToShow = res;
        }
    }
}
</script>

<style>

</style>