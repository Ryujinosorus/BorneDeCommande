import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './Scripts/store';
import Routes from './route';
import VueRouter from 'vue-router'
import commandeLeft from './components/CommandeLeft';
import showSelectable from './components/ShowSelectable';
import Login from './components/Login';
import detailPlat from './components/DetailPlat';
import VueRessource from 'vue-resource';
import * as firebase from "firebase";


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


Vue.use(VueRessource);
Vue.use(VueRouter);

Vue.component('app-commandeLeft',commandeLeft);
Vue.component('app-showSelectable',showSelectable);
Vue.component('app-detailPlat',detailPlat);
Vue.component('app-login',Login);
const router = new VueRouter({
  mode: 'hash',
  routes: Routes
});

new Vue({
  vuetify,
  store,
  router: router,
  render: h => h(App)
}).$mount('#app')