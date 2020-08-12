import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './Scripts/store';
import Routes from './route';
import VueRouter from 'vue-router'
import commandeLeft from './components/CommandeLeft';
import VueRessource from 'vue-resource';
import * as firebase from "firebase";


import {Plat} from './Scripts//Plat.js';
import {Menu} from './Scripts//Menu.js';
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
const router = new VueRouter({
  mode: 'history',
  routes: Routes
});

function initPic(){
  let pictureRef = fb.storage().ref('dataOfUser/undefined/BorneSetting/picure');
  for(let x=0;x<store.getters.borneSettings.firstPage.nbDiapo;x++){
    pictureRef.child('slide' + x + '.png').getDownloadURL().then(function(url) {
      store.commit('ADD_PICLINK',[x,url]);
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

function load(name){
  let storageRef = fb.storage().ref('dataOfUser/'+store.getters.user.email+'/');
  var xhr = new XMLHttpRequest();
  storageRef.child(name).getDownloadURL().then(function(url) {
      xhr.responseType = '';
      xhr.onload = function() {
          SET_UP(name,xhr.response);
      }
      xhr.open('GET', url);
      xhr.send();
  }).catch(function() {
      if(name =='BorneSettings.txt'){
          store.commit('ADD_BORNESETTINGS',new BorneSetting());
      }

      console.log("file not found");
  });
}


function SET_UP(name,data){
  switch(name){
      case 'plat.txt':{
          ADD_PLAT_START(data);
          break;
      }
      case 'Menu.txt':{
          ADD_MENU_START(data);
          break;
      }
      case 'Accompagnement Menu.txt':{
          ADD_DEFAULT_START(data,'Accompagnement Menu');
          break;
      }
      case 'desserts.txt':{
          ADD_DEFAULT_START(data,'desserts');
          break;
      }
      case 'boissons.txt':{
          ADD_DEFAULT_START(data,'boissons');
          break;
      }
      case 'BorneSettings.txt':{
          ADD_BORNESETTINGS(data);
          break;
      }
      case 'supplements.txt' : {
        ADD_SUPPLEMENTS_START(data);
        break;
      }
  }
}


function ADD_PLAT_START(data){
  let file = data.split("\n");
  for(let x=0;x<file.length;x++){
      let storageRef = fb.storage().ref('dataOfUser/'+'undefined'+'/Plat/'+file[x]+'/recap.txt');
      let xhr = new XMLHttpRequest();
      storageRef.getDownloadURL().then(function(url) {
          xhr.responseType = '';
          xhr.onload = function() {
              store.commit('ADD_PLAT',new Plat().init(xhr.response));
          }
          xhr.open('GET', url);
          xhr.send();
      }).catch(function(error) {
          console.log(error);
      });
  }
}

function ADD_MENU_START(data){
  let res=[];
  let file = data.split('\n');
  for(let x=0;x<file.length;x++){
      if(file[x]!=''){
          let storageRef = fb.storage().ref('dataOfUser/'+'undefined'+'/Menu/'+file[x]+'/recap.txt');
          let xhr = new XMLHttpRequest();
          storageRef.getDownloadURL().then(function(url) {
              xhr.responseType = '';
              xhr.onload = function() {
                  res.push(new Menu().init(xhr.response));
              }
              xhr.open('GET', url);
              xhr.send();
          }).catch(function(error) {
              console.log(error);
          });
      }
  }
  store.commit('INIT_MENU',res);
}
function ADD_DEFAULT_START(data,name){
  let res=[];
  let file = data.split('\n');
  for(let x=0;x<file.length;x++)
      if(file[x]!='') {
          let tmp = file[x].split(' : ');
          res.push([tmp[0],tmp[1],tmp[2]]);
      }
  store.commit('INIT',[name,res]);
}


function ADD_SUPPLEMENTS_START(data){
  let res=[];
  let file = data.split('\n');
  for(let x=0;x<file.length;x++)
      if(file[x]!='') {
          let tmp = file[x].split(' : ');
          res.push([tmp[0],tmp[1],tmp[2]]);
      }
  store.commit('INIT_SUPPLEMENT',res);
}
function ADD_BORNESETTINGS(data){
  store.commit('ADD_BORNESETTINGS',JSON.parse(data));
  initPic();
}




load('plat.txt');
load('Accompagnement Menu.txt');
load('desserts.txt');
load('boissons.txt');
load('Menu.txt');
load('supplements.txt');
load('BorneSettings.txt');
