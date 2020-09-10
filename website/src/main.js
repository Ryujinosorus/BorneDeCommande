import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import Vue from 'vue'
import App from './App.vue'
import * as firebase from "firebase";
import store from "./Scripts/store";
import VueResource from 'vue-resource'


import VueRouter from 'vue-router'
import Routes from './route'

import Vuetify from 'vuetify'

import MenuV from './components/Menu.vue'
import CheckList from './components/Ingredients/CheckList'
import PayCheckList from './components/Ingredients/PayCheckList.vue'
import SafePayCheckList from './components/Ingredients/SafePayCheckList.vue'
import PlatList from './components/Carte/Plat/PlatList.vue'
import DetailPlat from './components/Carte/Plat/DetailPlat.vue'
import SafePlat from './components/Carte/Plat/SafePlat.vue'
import DeletePlat from '././components/Carte/Plat/DeletePlat.vue'
import AjoutePlat from './components/Carte/Plat/AjoutePlat.vue'
import ModifierPlat from './components/Carte/Plat/ModifierPlat.vue'
import AjouteMenu from './components/Carte/Menu/AjouteMenu.vue'
import ListForMenu from './components/Carte/Menu/ListForMenu.vue'
import ModifieMenu from './components/Carte/Menu/ModifieMenu.vue'
import SelectTypeForCustom from './components/Carte/Custom/SelectTypeForCustom.vue'
import DisplayTypeForCustom from './components/Carte/Custom/DisplayTypeForCustom.vue'

import AjouteCustom from './components/Carte/Custom/AjouteCustom';
//import BorneFirstPage from './components/BorneSetting/firstPage.vue';
import BorneSettingVue from './components/BorneSetting/BorneSetting.vue';
import SaveCategorie from './components/BorneSetting/SaveCategorie.vue';
import DeleteMenu from './components/Carte/Menu/DeleteMenu';
import FontPicker from './components/BorneSetting/BornePart/fontPicker.vue';
import CarrouselSettings from './components/BorneSetting/BornePart/CarrouselSettings';
import WhereSettings from './components/BorneSetting/BornePart/WhereSettings';
import IconSelector from './components/BorneSetting/BornePart/IconSelector';
import SaveAllPlat from './components/Carte/Plat/SaveAllPlat';
import SaveAllMenu from './components/Carte/Menu/SaveAllMenu';
import ListSettings from './components/BorneSetting/BornePart/ListSettings.vue'
import SafeBorneSettings from './components/BorneSetting/SaveBorneSettings.vue';
import vuetify from './plugins/vuetify';
import ListCategories from './components/BorneSetting/ListCategories';
import DeleteCategories from './components/BorneSetting/DeleteCategorie';

import RecapCommande from './components/BorneSetting/RecapCommande';

import SafeCustom from './components/Carte/Custom/SafeCustom';
import SaveAllCustom from './components/Carte/Custom/SaveAllCustom';
import RecapTitre from './components/BorneSetting/RecapTitre';
import RecapBTNCommander from './components/BorneSetting/RecapBTNCommander';
import RecapPrix from './components/BorneSetting/RecapPrix';
import Recap from './components/BorneSetting/Recap'
import ListPlat from './components/BorneSetting/ListPlat';
import BackCard from './components/BorneSetting/BackCardMenu';
import CustomToolbar from './components/BorneSetting/CustomToolbar'
import CustomVue from './components/BorneSetting/Custom'
import CustomCarrouselTitle from './components/BorneSetting/CustomCarrouselTitle';
import CustomSelect from './components/BorneSetting/CustomSelect'
import CustomCardDeatils from './components/BorneSetting/CustomCardDetail'
import ValidCommandeGeneral from './components/BorneSetting/ValidCommandeGeneral';
import ValidCommandeRecap from './components/BorneSetting/ValidCommandeRecap';
import ValidCommandeRecapTitre from './components/BorneSetting/ValidCommandeRecapTitre';
import ValidCommandeRecapDetails from './components/BorneSetting/ValidCommandeRecapDetails';
import ValidCommandeBack from './components/BorneSetting/ValidCommandeBack';
import ValidCommandeNext from './components/BorneSetting/ValidCommandeNext';
import CustomTitleCate from './components/BorneSetting/CustomTitleCate';
import CustomTitlePlat from './components/BorneSetting/CustomTitlePlat';
import CustomAddBtn from './components/BorneSetting/CustomAddBtn';
import CustomCancelBtn from './components/BorneSetting/CustomCancelBtn';
import RecapBTNMinus from './components/BorneSetting/RecapBTNMinus';
import RecapBTNPlus from './components/BorneSetting/RecapBTNPlus';

import DeleteCustom from './components/Carte/Custom/DeleteCustom'

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


Vue.component('app-menu',MenuV);
Vue.component('app-checklist', CheckList);
Vue.component('app-paychecklist', PayCheckList);
Vue.component('app-safepaychecklist', SafePayCheckList);
Vue.component('app-bornesetting',BorneSettingVue);
Vue.component('app-safebornesettings',SafeBorneSettings);
Vue.component('app-listplat', PlatList);
Vue.component('app-detailplat', DetailPlat);
Vue.component('app-safeplat', SafePlat);
Vue.component('app-deleteplat', DeletePlat);
Vue.component('app-ajouteplat', AjoutePlat);
Vue.component('app-modifierplat', ModifierPlat);
Vue.component('app-whereSettings',WhereSettings)
Vue.component('app-carrouselSettings',CarrouselSettings);
Vue.component('app-iconSelector',IconSelector);
Vue.component('app-savecategorie',SaveCategorie);
Vue.component('app-safeCustom',SafeCustom);
Vue.component('app-ajoutemenu', AjouteMenu);
Vue.component('app-listformenu', ListForMenu);
Vue.component('app-modifieplat', ModifieMenu);
Vue.component('app-ajouteCustom',AjouteCustom)
Vue.component('app-selectTypeForCustom',SelectTypeForCustom);
Vue.component('fontPicker',FontPicker);
Vue.component('app-listSettings',ListSettings);
Vue.component('app-listcategories',ListCategories);
Vue.component('app-deletecategorie',DeleteCategories);
Vue.component('app-saveallplat',SaveAllPlat);
Vue.component('app-saveallmenu',SaveAllMenu);
Vue.component('app-deletemenu',DeleteMenu);
Vue.component('app-recapTitre',RecapTitre);
Vue.component('app-recapCommande',RecapCommande);
Vue.component('app-recapBTNCommander',RecapBTNCommander);
Vue.component('app-recapPrix',RecapPrix);
Vue.component('app-recap',Recap);
Vue.component('app-listPlat',ListPlat);
Vue.component('app-backCardMenu',BackCard);
Vue.component('app-customToolbar',CustomToolbar);
Vue.component('app-custom',CustomVue);
Vue.component('app-customCarrouselTitle',CustomCarrouselTitle);
Vue.component('app-customSelect',CustomSelect);
Vue.component('app-customCardDeatils',CustomCardDeatils);
Vue.component('app-validCommandeGeneral',ValidCommandeGeneral);
Vue.component('app-validCommandeRecap',ValidCommandeRecap);
Vue.component('app-validCommandeRecapTitre',ValidCommandeRecapTitre);
Vue.component('app-validCommandeRecapDetails',ValidCommandeRecapDetails);
Vue.component('app-validCommandeBack',ValidCommandeBack);
Vue.component('app-saveAllCustom',SaveAllCustom);
Vue.component('app-displayTypeForCustom',DisplayTypeForCustom);
Vue.component('app-validCommandeNext',ValidCommandeNext);
Vue.component('app-customTitleCate',CustomTitleCate);
Vue.component('app-customTitlePlat',CustomTitlePlat);
Vue.component('app-customAddBtn',CustomAddBtn);
Vue.component('app-customCancelBtn',CustomCancelBtn);

Vue.component('app-deleteCustom',DeleteCustom);
Vue.component('app-recapBTNMinus',RecapBTNMinus);
Vue.component('app-recapBTNPlus',RecapBTNPlus);
//Vue.component('app-bornefirstpage',BorneFirstPage);


Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuetify);

store.commit("START");
const router = new VueRouter({
    mode: 'history',
    routes: Routes
});

new Vue({
    render: h => h(App),
vuetify,
router: router,
store
}).$mount('#app')

