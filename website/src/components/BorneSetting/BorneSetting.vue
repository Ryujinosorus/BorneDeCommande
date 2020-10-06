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
    <div>
      <div class="containerOfBorn">
        <app-showBorn :borne="borne"></app-showBorn>
      </div>
    </div>
    <v-container fluid class="grey lighten-3">
      <app-safebornesettings @save="upload()"></app-safebornesettings>
      <div style="width : 50%">
      <h1> Diaporama</h1>
      <v-expansion-panels focusable>
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
      </v-expansion-panels>
      <h1>Sur place ou a emporter ?</h1>
      <v-expansion-panels focusable>
        <v-expansion-panel>
          <v-expansion-panel-header>Sur Place</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-whereSettingsSurPlace :borne="borne" :globalSettings="globalSettings"></app-whereSettingsSurPlace>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>A emporter</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-whereSettingsEmporter :borne="borne" :globalSettings="globalSettings"></app-whereSettingsEmporter>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Where title</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-whereSettingsTitle :borne="borne" :globalSettings="globalSettings"></app-whereSettingsTitle>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <h1>Liste des categories</h1>
      <v-expansion-panels focusable>
        <v-expansion-panel>
          <v-expansion-panel-header>Liste des categories</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-listSettings :borne="borne" :globalSettings="globalSettings"></app-listSettings>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <h1>List des plats</h1>
      <v-expansion-panels focusable>
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
      </v-expansion-panels>
      <h1>Recapitulatif</h1>
      <v-expansion-panels focusable>
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
          <v-expansion-panel-header>Récapitulatif d'une commande : Nom d'une catégorie</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-recapNomCate :borne="borne" :globalSettings="globalSettings"></app-recapNomCate>
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
          <v-expansion-panel-header>Récapitulatif Boutton + </v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-recapBTNPlus :borne="borne" :globalSettings="globalSettings"></app-recapBTNPlus>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Récapitulatif Boutton - </v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-recapBTNMinus :borne="borne" :globalSettings="globalSettings"></app-recapBTNMinus>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Récapitulatif : Boutton Commander</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-recapBTNCommander :borne="borne" :globalSettings="globalSettings"></app-recapBTNCommander>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <h1>Customisation d'un plat/menu</h1>
      <v-expansion-panels focusable>
          <v-expansion-panel>
          <v-expansion-panel-header>Customisation génerale</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-custom
              :borne="borne"
              :globalSettings="globalSettings"
            ></app-custom>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <!--
          <v-expansion-panel>
          <v-expansion-panel-header>Customisation toolbar</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-customToolbar
              :borne="borne"
              :globalSettings="globalSettings"
            ></app-customToolbar>
          </v-expansion-panel-content>
        </v-expansion-panel>
        -->
          <v-expansion-panel>
          <v-expansion-panel-header>Customisation Titre</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-customCarrouselTitle
              :borne="borne"
              :globalSettings="globalSettings"
            ></app-customCarrouselTitle>
          </v-expansion-panel-content>
        </v-expansion-panel>
          <v-expansion-panel>
          <v-expansion-panel-header>Customisation sélection Générale</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-customSelect
              :borne="borne"
              :globalSettings="globalSettings"
            ></app-customSelect>
          </v-expansion-panel-content>
        </v-expansion-panel>
          <v-expansion-panel>
          <v-expansion-panel-header>Customisation sélection Carte ingrédient</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-customCardDeatils
              :borne="borne"
              :globalSettings="globalSettings"
            ></app-customCardDeatils>
          </v-expansion-panel-content>
        </v-expansion-panel>
          <v-expansion-panel>
          <v-expansion-panel-header>Customisation sélection titre catégorie</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-customTitleCate
              :borne="borne"
              :globalSettings="globalSettings"
            ></app-customTitleCate>
          </v-expansion-panel-content>
        </v-expansion-panel>
          <v-expansion-panel>
          <v-expansion-panel-header>Customisation sélection titre plat</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-customTitlePlat
              :borne="borne"
              :globalSettings="globalSettings"
            ></app-customTitlePlat>
          </v-expansion-panel-content>
        </v-expansion-panel>
          <v-expansion-panel>
          <v-expansion-panel-header>Customisation bouton ajouter</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-customAddBtn
              :borne="borne"
              :globalSettings="globalSettings"
            ></app-customAddBtn>
          </v-expansion-panel-content>
        </v-expansion-panel>
          <v-expansion-panel>
          <v-expansion-panel-header>Customisation bouton annuler</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-customCancelBtn
              :borne="borne"
              :globalSettings="globalSettings"
            ></app-customCancelBtn>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <h1>Validation</h1>
      <v-expansion-panels focusable>
        <v-expansion-panel>
          <v-expansion-panel-header>Validation Commande Génerale</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-validCommandeGeneral
              :borne="borne"
              :globalSettings="globalSettings"
            ></app-validCommandeGeneral>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Validation Commande Récap</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-validCommandeRecap
              :borne="borne"
              :globalSettings="globalSettings"
            ></app-validCommandeRecap>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Validation Commande Récap Titre</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-validCommandeRecapTitre
              :borne="borne"
              :globalSettings="globalSettings"
            ></app-validCommandeRecapTitre>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Validation Commande Récap Détails : titre</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-validCommandeRecapDetailsTitre
              :borne="borne"
              :globalSettings="globalSettings"
            ></app-validCommandeRecapDetailsTitre>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Validation Commande Récap Détails : Nom d'une catégorie</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-validCommandeRecapDetailsCategorie
              :borne="borne"
              :globalSettings="globalSettings"
            ></app-validCommandeRecapDetailsCategorie>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Validation Commande Récap Détails : Détails d'une catégorie</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-validCommandeRecapDetailsDetailsCategorie
              :borne="borne"
              :globalSettings="globalSettings"
            ></app-validCommandeRecapDetailsDetailsCategorie>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Validation Commande Récap Détails : Prix</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-validCommandeRecapDetailsPrix
              :borne="borne"
              :globalSettings="globalSettings"
            ></app-validCommandeRecapDetailsPrix>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Validation Commande Récap Boutton annuler</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-validCommandeBack
              :borne="borne"
              :globalSettings="globalSettings"
            ></app-validCommandeBack>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Validation Commande Récap Boutton continuer</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-validCommandeNext
              :borne="borne"
              :globalSettings="globalSettings"
            ></app-validCommandeNext>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <h1>Ou voulez vous payer ?</h1>
      <v-expansion-panels focusable>
        <v-expansion-panel>
          <v-expansion-panel-header>Carte</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-howPayCB :borne="borne" :globalSettings="globalSettings"></app-howPayCB>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Liquide</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-howPayLiquide :borne="borne" :globalSettings="globalSettings"></app-howPayLiquide>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Where title</v-expansion-panel-header>
          <v-expansion-panel-content>
            <app-whereSettingsTitle :borne="borne" :globalSettings="globalSettings"></app-whereSettingsTitle>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      </div>
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
      let myRef ="dataOfUser/" + this.$store.getters.user.data.email + "/BorneSetting/";
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
    let myRef ="dataOfUser/" + this.$store.getters.user.data.email + "/BorneSetting/"; 
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
                  this.$store.getters.user.data.email +
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
              this.$store.getters.user.data.email +
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
.rightSide{
  background-color: violet;
  float : left;
  margin-left: 50%;
  position: absolute;
  max-height: 30%;
  width: 50%;
  overflow: scroll;
}
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
  max-width: 500px;
}
table tbody tr td{
  max-width: 900px;
}
table tbody tr:nth-last-of-type(even) {
  background-color: #f3f3f3;
}
table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}
</style>