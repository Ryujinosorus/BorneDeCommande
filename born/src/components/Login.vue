<template>
    <div>
      <div v-if="!start">
        <section id="about-me">
            <div class="py-12"></div>

            <v-container class="text-center">
            <h2 class="display-2 font-weight-bold mb-3"> <i class="fas fa-utensils"></i> FAST ORDER</h2>

            <v-responsive
                class="mx-auto mb-8"
                width="56"
            >
                <v-divider class="mb-1"></v-divider>

                <v-divider></v-divider>
            </v-responsive>

            <v-responsive
                class="mx-auto title font-weight-light mb-8"
                max-width="720"
            >

            <v-card>
          <form class="sign-in-form">
            <h2 class="title">Connectez vous !</h2>
            <div class="input-field">
              <i class="fas fa-user marginAuto"></i>
              <input type="text" placeholder="Email" v-model="email"/>
            </div>
            <div class="input-field">
              <i class="fas fa-lock marginAuto"></i>
              <input type="password" placeholder="Mot de passe" v-model="password" />
            </div>
            <v-btn :disabled="loader" :loading="loader" @click="login()">Connexion</v-btn>
          </form>

            </v-card>
            </v-responsive>

            <div></div>
            </v-container>

            <div class="py-12"></div>
        </section>
      </div>
      <div v-else>
        <router-view :settings="settings"></router-view>
      </div>
      <div class="hidden">
        <div id="font-picker-title"></div>
        <div id="font-picker-recap"></div>
        <div id="font-picker-commandeDetail"></div>
        <div id="font-picker-commandeTitle"></div>
        <div id="font-picker-commandePrix"></div>
        <div id="font-picker-commandeBoutton"></div>
        <div id="font-picker-cateTextFont"></div>

        <div id="font-picker-menuTextFont"></div>
        <div id="font-picker-titleFont"></div>
        <div id="font-picker-fontToolbar"></div>
        <div id="font-picker-detailTitreFont"></div>
        <div id="font-picker-nomDetailFont"></div>
        <div id="font-picker-nomPlatFont"></div>
        <div id="font-picker-IN"></div>
        <div id="font-picker-OUT"></div>
        <div id="font-picker-diapoFont"></div>
        <div id="font-picker-backFont"></div>
        <div id="font-picker-nextFont"></div>
        <div id="font-picker-nomCate"></div>

        <div id="font-picker-recapAndBuyTitre"></div>
        <div id="font-picker-recapAndBuyCategorie"></div>
        <div id="font-picker-recapAndBuyDetailsCategorie"></div>
        <div id="font-picker-recapAndBuyPrix"></div>
        <div id="font-picker-iconTitlleFont"></div>
      </div>

    <v-dialog v-model="dialogError" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Une erreur à été rencontré</v-card-title>
        <v-card-text>{{this.error}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialogError = false">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


    </div>
</template> 

<script>
    window.onbeforeunload = closingCode;
      function closingCode(){
        fb.auth().signOut();
         return null;
  }

import {fb} from '../main';
import {Custom} from '../Scripts/Custom';
import BorneSetting from '../Scripts/BorneSetting';
import FontPicker from 'font-picker'
export default {
  name: 'Login',

  data() {
      return {
        email : '',
        password : '',
        error : '',
        settings:null,
        loader : false,
        start : false,
        dialogError : false,
        fontLoad : false,
        picLoad : false,
    }
  },
  methods : {
    login(){
      this.loader = true;
      const self = this;
      if(!this.validateEmail(this.email)){
        this.error = "Adresse mail mal formaté"
        this.loader = false;
        self.dialogError = true;
        return;
      }
      fb.auth().signInWithEmailAndPassword(this.email, this.password).then().catch(function() {
        self.error = "Couple mot de passe email incorrect"
        self.dialogError = true;
        self.loader = false;
      });

    fb.auth().onAuthStateChanged(user => {
      if(user){
        this.$store.dispatch("fetchUser", user);
        this.loadCustom();
        this.loadBorneSettings(); 
      }
    });
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    loadCustom(){
      let storageRef = fb.storage().ref('dataOfUser/'+this.$store.getters.user.email+'/');
      var xhr = new XMLHttpRequest();
      const self = this;
      storageRef.child('custom.txt').getDownloadURL().then(function(url) {
          xhr.responseType = '';
          xhr.onload = function() {
              self.ADD_CUSTOM_START(xhr.response);
          }
          xhr.open('GET', url);
          xhr.send();
      }).catch(function(error) {
         this.error = error;
      });
    },
    ADD_CUSTOM_START(data){
      let file = data.split("\n");
      for(let x=0;x<file.length-1;x++){
          let storageRef = fb.storage().ref('dataOfUser/'+this.$store.getters.user.email+'/Custom/'+file[x]+'/recap.txt');
          let xhr = new XMLHttpRequest();
          const self = this;
          storageRef.getDownloadURL().then(function(url) {
              xhr.responseType = '';
              xhr.onload = function() {
                console.log(xhr.response);
                  self.$store.commit('ADD_CUSTOM',new Custom().init(xhr.response));
                  self.$store.commit('SET_CUSTOM'); // A VOIR POUR METTRE A LA FIN DE TOUTES LES XHTMLREQUESTS
              }
              xhr.open('GET', url,true);
              xhr.send();
              
          }).catch(function(error) {
              console.log(error);
          });
      }
    },
    loadBorneSettings(){
      let storageRef = fb.storage().ref('dataOfUser/'+this.$store.getters.user.email+'/');
      var xhr = new XMLHttpRequest();
      const self = this;
      storageRef.child('BorneSettings.txt').getDownloadURL().then(function(url) {
          xhr.responseType = '';
          xhr.onload = function() {
            let bs = JSON.parse(xhr.response);
            self.settings = bs;
            self.loadFont();
            self.$store.commit('ADD_BORNESETTINGS',bs);
            console.log(bs);
            self.initPic();
          }

          xhr.open('GET', url);
          xhr.send();
      }).catch(function() {
        let bs = new BorneSetting();
        self.settings = bs;
        self.loadFont();
          self.$store.commit('ADD_BORNESETTINGS', bs);
          self.initPic();
          console.log("file not found");
      });
    },
    goNext(){
      let self = this;
      setTimeout(        
        function(){
          if(self.picLoad && self.fontLoad){
            self.start = true;
            self.$router.replace('/Carrousel');
          }
          else self.goNext();
        },
        1000);  
    },
    initPic(){
      let pictureRef = fb.storage().ref('dataOfUser/' + this.$store.getters.user.email + '/BorneSetting/picure');
      const self = this;
      const max = self.settings.firstPage.nbDiapo; 
      console.log(max);
      for(let x=0;x<max;x++){
        pictureRef.child('slide' + x + '.png').getDownloadURL().then(function(url) {
          let xhr = new XMLHttpRequest();
          xhr.responseType = 'blob';
          xhr.onload = function() {
            self.$store.commit('ADD_PICLINK',[x,URL.createObjectURL(xhr.response)]);
            if(x==max - 1){
              self.picLoad = true;
              self.goNext();
            }
          }
          xhr.open('GET',url);
          xhr.send();
        }).catch(function(error) {
          let xhr = new XMLHttpRequest();
          xhr.responseType = 'blob';
          xhr.onload = function() {
            self.$store.commit('ADD_PICLINK',[x,URL.createObjectURL(xhr.response)]);
            if(x==max - 1){
              self.picLoad = true;
              self.goNext();
            }
          }
          xhr.open('GET','https://firebasestorage.googleapis.com/v0/b/bornekebab.appspot.com/o/data%2Fpicture%2FdefaultCustomPicture.jpg?alt=media&token=cfba1e04-2899-4a0d-9ece-bbc7d1773334');
          xhr.send();
            console.log(error);
        });
      }
    },
    loadFont(){
        new FontPicker(
        'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
        this.settings.list.recap.fontTitle, 
        { 
          pickerId: "title",
          limit: 150 },
        );
        new FontPicker(
        'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
        this.settings.list.recap.fontRecap, 
        { 
          pickerId: "recap",
          limit: 150 },
        );

        new FontPicker(
        'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
        this.settings.list.recap.commandeTitleFont, 
        { 
          pickerId: "commandeTitle",
          limit: 150 },
        );

        new FontPicker(
        'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
        this.settings.list.recap.commandeDetailFont, 
        { 
          pickerId: "commandeDetail",
          limit: 150 },
        );

        new FontPicker(
        'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
        this.settings.list.recap.commandePrixFont, 
        { 
          pickerId: "commandePrix",
          limit: 150 },
        );

        new FontPicker(
        'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
        this.settings.list.recap.fontBouttonCommander, 
        { 
          pickerId: "commandeBoutton",
          limit: 150 },
        );

        new FontPicker(
        'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
        this.settings.list.recap.cateTextFont, 
        { 
          pickerId: "cateTextFont",
          limit: 150 },
        );


         new FontPicker(
      "AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg",
      this.settings.list.showFood.menuTextFont,
      {
        pickerId: "menuTextFont",
        limit: 150,
      }
    );

    new FontPicker(
      "AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg",
      this.settings.custom.title.font,
      {
        pickerId: "titleFont",
        limit: 150,
      }
    );

    new FontPicker(
      "AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg",
      this.settings.custom.cardDetail.font,
      {
        pickerId: "detailTitreFont",
        limit: 150,
      }
    );
    new FontPicker(
      "AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg",
      this.settings.custom.nomDetail.font,
      {
        pickerId: "nomDetailFont",
        limit: 150,
      }
    );
    console.log(this.settings.custom.nomDetail.font);

    new FontPicker(
      "AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg",
      this.settings.custom.nomPlat.font,
      {
        pickerId: "nomPlatFont",
        limit: 150,
      }
    );

    new FontPicker(
      'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
      this.settings.icon.iconOUT.font, 
      { 
          pickerId : 'OUT',
          limit: 150 
      },
  );
    new FontPicker(
      'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
      this.settings.icon.iconIN.font, 
      { 
          pickerId : 'IN',
          limit: 150 
      },
    );

    new FontPicker(
        'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
        this.settings.firstPage.font, 
        { 
          limit: 150,
          pickerId : 'diapoFont'
        },
    );

    new FontPicker(
        'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
        this.settings.custom.cancelBTN.font, 
        { 
          limit: 150,
          pickerId : 'backFont'
        },
    );
    new FontPicker(
        'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
        this.settings.custom.addBTN.font, 
        { 
          limit: 150,
          pickerId : 'nextFont'
        },
    );

    new FontPicker(
        'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
        this.settings.list.recap.nomCateFont, 
        { 
          limit: 150,
          pickerId : 'nomCate'
        },      
    )
    new FontPicker(
        'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
        this.settings.valid.recap.detail.titre.font, 
        { 
          limit: 150,
          pickerId : 'recapAndBuyTitre'
        },      
    )
    new FontPicker(
        'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
        this.settings.valid.recap.detail.categorie.font, 
        { 
          limit: 150,
          pickerId : 'recapAndBuyCategorie'
        },      
    )
    new FontPicker(
        'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
        this.settings.valid.recap.detail.detailCategorie.font, 
        { 
          limit: 150,
          pickerId : 'recapAndBuyDetailsCategorie'
        },      
    )
    new FontPicker(
        'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
        this.settings.valid.recap.detail.prix.font, 
        { 
          limit: 150,
          pickerId : 'recapAndBuyPrix'
        },      
    )
    new FontPicker(
        'AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg', 
        this.settings.icon.title.font, 
        { 
          limit: 150,
          pickerId : 'iconTitlleFont'
        },      
    )
    this.fontLoad = true;
    }
  }

};
</script>
<style scoped>
form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0rem 5rem;
  transition: all 0.2s 0.7s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

form.sign-up-form {
  opacity: 0;
  z-index: 1;
}

form.sign-in-form {
  z-index: 2;
}

.title {
  font-size: 2.2rem;
  color: #444;
  margin-bottom: 10px;
}

.input-field {
  max-width: 380px;
  width: 100%;
  background-color: #f0f0f0;
  margin: 10px 0;
  height: 55px;
  border-radius: 55px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 0.4rem;
  position: relative;
}

.marginAuto{
    margin: auto;
}

.input-field input {
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
}

.input-field input::placeholder {
  color: #aaa;
  font-weight: 500;
}

.social-text {
  padding: 0.7rem 0;
  font-size: 1rem;
}



@media (max-width: 570px) {
  form {
    padding: 0 1.5rem;
  }

  .image {
    display: none;
  }
  .panel .content {
    padding: 0.5rem 1rem;
  }
  .container {
    padding: 1.5rem;
  }

  .container:before {
    bottom: 72%;
    left: 50%;
  }

  .container.sign-up-mode:before {
    bottom: 28%;
    left: 50%;
  }
}
</style>
