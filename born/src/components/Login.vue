<template>
    <div>
      <div v-if="settings == null">
      <v-text-field label="email" v-model="email">
      </v-text-field>
      <v-text-field label="mdp" v-model="password">
      </v-text-field>
      <v-textarea v-model="error" readonly></v-textarea>
      <v-btn @click="login()"></v-btn>
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
      </div>
    </div>
</template> 

<script>
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
    }
  },
  methods : {
    login(){
      const self = this;
      fb.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
        self.error = error.code;
      });

    fb.auth().onAuthStateChanged(user => {
      if(user){
        this.$store.dispatch("fetchUser", user);
        this.loadCustom();
        this.loadBorneSettings(); 
      }
    });
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
            self.$store.commit('ADD_BORNESETTINGS',bs);
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
    initPic(){
      let pictureRef = fb.storage().ref('dataOfUser/' + this.$store.getters.user.email + '/BorneSetting/picure');
      const self = this;
      const max = this.$store.getters.borneSettings.firstPage.nbDiapo; 
      for(let x=0;x<max;x++){
        pictureRef.child('slide' + x + '.png').getDownloadURL().then(function(url) {
          let xhr = new XMLHttpRequest();
          xhr.responseType = 'blob';
          xhr.onload = function() {
            self.$store.commit('ADD_PICLINK',[x,URL.createObjectURL(xhr.response)]);
            if(x==max - 1)
              self.$router.replace('/Carrousel');
          }
          xhr.open('GET',url);
          xhr.send();
        }).catch(function(error) {
          let xhr = new XMLHttpRequest();
          xhr.responseType = 'blob';
          xhr.onload = function() {
            self.$store.commit('ADD_PICLINK',[x,URL.createObjectURL(xhr.response)]);
            if(x==max - 1){
              self.$router.replace('/Carrousel');
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
    }
  }

};
</script>
<style scoped>
</style>
