import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './Scripts/store';
import Routes from './route';
import VueRouter from 'vue-router'
import commandeLeft from './components/CommandeLeft';
import showSelectable from './components/ShowSelectable';
import detailPlat from './components/DetailPlat';
import VueRessource from 'vue-resource';
import * as firebase from "firebase";


import {Custom} from './Scripts//Custom.js';
import BorneSetting from './Scripts/BorneSetting.js'
Vue.config.productionTip = false;
var firebaseConfig = {
    apiKey: "AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg",
    authDomain: "bornekebab.firebaseapp.com",
    databaseURL: "https://bornekebab.firebaseio.com",
    projectId: "bornekebab",
    storageBucket: "bornekebab.appspot.com",
    messagingSenderId: "441985689557",
    appId: "1:441985689557:web:26bef45bd1c62783b83f5c",
    measurementId: "G-P8VCV1GMQ4"
};
export const fb = firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});
Vue.use(VueRessource);
Vue.use(VueRouter);

Vue.component('app-commandeLeft',commandeLeft);
Vue.component('app-showSelectable',showSelectable);
Vue.component('app-detailPlat',detailPlat);
const router = new VueRouter({
  mode: 'hash',
  routes: Routes
});

function initPic(){
  let pictureRef = fb.storage().ref('dataOfUser/undefined/BorneSetting/picure');
  for(let x=0;x<store.getters.borneSettings.firstPage.nbDiapo;x++){
    pictureRef.child('slide' + x + '.png').getDownloadURL().then(function(url) {
      let xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function() {
        store.commit('ADD_PICLINK',[x,URL.createObjectURL(xhr.response)]);
      }
      xhr.open('GET',url);
      xhr.send();
    }).catch(function(error) {
        console.log(error);
    });
  }
  new Vue({
    vuetify,
    store,
    router: router,
    render: h => h(App)
  }).$mount('#app')
}

// CUSTOM
function loadCustom(){
  let storageRef = fb.storage().ref('dataOfUser/'+store.getters.user.email+'/');
  var xhr = new XMLHttpRequest();
  storageRef.child('custom.txt').getDownloadURL().then(function(url) {
      xhr.responseType = '';
      xhr.onload = function() {
          ADD_CUSTOM_START(xhr.response);
      }
      xhr.open('GET', url);
      xhr.send();
  }).catch(function() {
      console.log("file not found");
  });
}




function ADD_CUSTOM_START(data){
  let file = data.split("\n");
  for(let x=0;x<file.length-1;x++){
      let storageRef = fb.storage().ref('dataOfUser/'+'undefined'+'/Custom/'+file[x]+'/recap.txt');
      let xhr = new XMLHttpRequest();
      storageRef.getDownloadURL().then(function(url) {
          xhr.responseType = '';
          xhr.onload = function() {
              store.commit('ADD_CUSTOM',new Custom().init(xhr.response));
              store.commit('SET_CUSTOM'); // A VOIR POUR METTRE A LA FIN DE TOUTES LES XHTMLREQUESTS
          }
          xhr.open('GET', url,true);
          xhr.send();
          
      }).catch(function(error) {
          console.log(error);
      });
  }
}

//BORNE SETTINGS

function loadBorneSettings(){
  let storageRef = fb.storage().ref('dataOfUser/'+store.getters.user.email+'/');
  var xhr = new XMLHttpRequest();
  storageRef.child('BorneSettings.txt').getDownloadURL().then(function(url) {
      xhr.responseType = '';
      xhr.onload = function() {
        store.commit('ADD_BORNESETTINGS',JSON.parse(xhr.response));
        initPic();
      }

      xhr.open('GET', url);
      xhr.send();
  }).catch(function() {
      store.commit('ADD_BORNESETTINGS',new BorneSetting());
      initPic();
      console.log("file not found");
  });
}

loadCustom();
loadBorneSettings();
