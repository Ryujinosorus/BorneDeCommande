<template>
  <div>
    <section id="about-me" class="white">
      <div class="py-12"></div>

      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3">
          <i class="fas fa-cog"></i> ESPACE BORNE
        </h2>

        <v-responsive class="mx-auto mb-8" width="56">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <v-responsive
          class="mx-auto title font-weight-light mb-8"
          max-width="720"
        >Bienvenue dans votre Espace Borne, vous y trouverez toutes les options nécessaires vous permettant de modifier votre borne comme vous le voulez.</v-responsive>

        <div class="py-12"></div>
      </v-container>

      <div class="py-12"></div>
    </section>
    <v-container fluid class="grey lighten-3">
      <app-safebornesettings @save="upload()"></app-safebornesettings>
      <v-expansion-panels focusable v-model="panel">
        <v-expansion-panel>
          <v-expansion-panel-header>Diaporama</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-carrouselSettings
              :tmpPicture="tmpDiapoPicture"
              :borne="borne"
              :globalSettings="globalSettings"
              @changePicture="changeDiapoPicture($event)"
            ></app-carrouselSettings>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Where</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-whereSettings :borne="borne" :globalSettings="globalSettings"></app-whereSettings>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Liste des categories</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-listSettings :borne="borne" :globalSettings="globalSettings"></app-listSettings>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Récapitulatif</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-recap :borne="borne" :globalSettings="globalSettings"></app-recap>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Récapitulatif d'une commande : Titre</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-recapTitre :borne="borne" :globalSettings="globalSettings"></app-recapTitre>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Récapitulatif d'une commade : details</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-recapCommande :borne="borne" :globalSettings="globalSettings"></app-recapCommande>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Récapitulatif d'une commade : prix</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-recapPrix :borne="borne" :globalSettings="globalSettings"></app-recapPrix>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Récapitulatif : Boutton Commander</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-recapBTNCommander :borne="borne" :globalSettings="globalSettings"></app-recapBTNCommander>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Liste des plats</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-listPlat :borne="borne" :globalSettings="globalSettings"></app-listPlat>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Boutton retour</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-backCardMenu
              @newPicture="changeBackPicture($event)"
              :borne="borne"
              :globalSettings="globalSettings"
            ></app-backCardMenu>
          </v-expansion-panel-content>
        </v-expansion-panel>
          <v-expansion-panel>
          <v-expansion-panel-header>Customisation génerale</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-custom
              :borne="borne"
              :globalSettings="globalSettings"
            ></app-custom>
          </v-expansion-panel-content>
        </v-expansion-panel>
          <v-expansion-panel>
          <v-expansion-panel-header>Customisation toolbar</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-customToolbar
              :borne="borne"
              :globalSettings="globalSettings"
            ></app-customToolbar>
          </v-expansion-panel-content>
        </v-expansion-panel>
          <v-expansion-panel>
          <v-expansion-panel-header>Customisation Carrousel Titre</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-customCarrouselTitle
              :borne="borne"
              :globalSettings="globalSettings"
            ></app-customCarrouselTitle>
          </v-expansion-panel-content>
        </v-expansion-panel>
          <v-expansion-panel>
          <v-expansion-panel-header>Customisation Carrousel Générale</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-customCarousel
              :borne="borne"
              :globalSettings="globalSettings"
            ></app-customCarousel>
          </v-expansion-panel-content>
        </v-expansion-panel>
            <v-expansion-panel>
          <v-expansion-panel-header>Customisation Carrousel Carte ingrédient</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-customCardDeatils
              :borne="borne"
              :globalSettings="globalSettings"
            ></app-customCardDeatils>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import { fb } from "../../main.js";
import BorneSetting from "../../Scripts/BorneSetting";
export default {
  name: "BorneSetting",
  data() {
    return {
      borne: null,
      globalSettings: null,
      panel: [0],
      backPicture: null,
      tmpDiapoPicture: null, 
    };
  },
  methods: {
    upload(){
         this.uploadPictures();
    },
    changeDiapoPicture(event) {
      this.tmpDiapoPicture[event[1]] = URL.createObjectURL(
        new Blob([event[0]], { type: "image/bmp" })
      );
      console.log(this.tmpDiapoPicture);
    },
    changeBackPicture(e) {
      this.backPicture = e;
    },
    async uploadPictures() {
        let nbBlob = 0;
        for (let x = 0; x < this.borne.firstPage.nbDiapo; x++)
            if (this.tmpDiapoPicture[x].startsWith('blob')) 
                nbBlob++;
        let nbBlobFound = 0;
      let myRef ="dataOfUser/" + this.$store.getters.user.email + "/BorneSetting/";
      for (let x = 0; x < this.borne.firstPage.nbDiapo; x++){
        if (this.tmpDiapoPicture[x].startsWith('blob')) {
            nbBlobFound++;
            let blob = await fetch(this.tmpDiapoPicture[x]).then((r) => r.blob());
            let ref =  fb.storage().ref(myRef + "picure/slide"+ x +'.png');
            let uploadTask = ref.put(blob);
            uploadTask.then((snapshot) => {
          snapshot.ref.getDownloadURL().then((url) => {
            this.borne.firstPage.picture[x] = url;
            if(nbBlob==nbBlobFound)
                this.save();
          });
        });
        }
      }
      if(nbBlob==0)
        this.save();
    },
    save:function(){
    let myRef ="dataOfUser/" + this.$store.getters.user.email + "/BorneSetting/"; 
      if (this.backPicture != null) {
        let ref = fb.storage().ref(myRef + "picure/backPicture.png");
        let uploadTask = ref.put(
          new Blob([this.backPicture], { type: "image/png" })
        );
        uploadTask.then((snapshot) => {
          snapshot.ref.getDownloadURL().then((url) => {
            this.borne.list.showFood.back.picture = url;

            console.log(this.borne.firstPage.picture);
            let data = JSON.stringify(this.borne);
            let ref = fb
              .storage()
              .ref(
                "/dataOfUser/" +
                  this.$store.getters.user.email +
                  "/BorneSettings.txt"
              );
            ref.put(new Blob([data], { type: "text/plain" }));
          });
        });
      } else {
          console.log(this.borne.firstPage.picture);
        let data = JSON.stringify(this.borne);
        let ref = fb
          .storage()
          .ref(
            "/dataOfUser/" +
              this.$store.getters.user.email +
              "/BorneSettings.txt"
          );
        ref.put(new Blob([data], { type: "text/plain" }));
      }
    },
    uploadPicture(file, myRef, index) {
      if (file != undefined) {
        console.log(file);
        let ref = fb.storage().ref(myRef + "picure/slide" + index + ".png");
        console.log(file);
        let uploadTask = ref.put(new Blob([file], { type: "image/png" }));
        uploadTask.then((snapshot) => {
          snapshot.ref.getDownloadURL().then((url) => {
            console.log(url);
          });
        });
      }
    },
  },
  created: function () {
    let tmp = this.$store.getters.bornesettings;
    console.log(tmp);
    if (tmp == null) this.borne = new BorneSetting();
    else this.borne = tmp;
    this.tmpDiapoPicture = this.borne.firstPage.picture;
    this.globalSettings = this.$store.getters.globalSettings;
  },
};
</script>

<style>
table {
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
  font-size: 0.9em;
  min-width: 400px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
table thead tr {
  background-color: blue;
  color: #fff;
  text-align: left;
  font-weight: bold;
}
table th,
table td {
  padding: 12px 15px;
}
table tbody tr {
  border-bottom: 1px solid #dddddd;
}
table tbody tr:nth-last-of-type(even) {
  background-color: #f3f3f3;
}
table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}
</style>