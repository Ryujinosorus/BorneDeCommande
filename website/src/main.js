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
import vuetify from './plugins/vuetify';

//import BorneFirstPage from './components/BorneSetting/firstPage.vue';

/* CATEGORIES */
import DeleteCategorie from './components/Carte/Categories/DeleteCategorie';
import SaveCategorie from './components/Carte/Categories/SaveCategorie.vue';


Vue.component('app-savecategorie',SaveCategorie);
Vue.component('app-deletecategorie',DeleteCategorie);


/* CUSTOM */
import SafeCustom from './components/Carte/Custom/SafeCustom';
import SaveAllCustom from './components/Carte/Custom/SaveAllCustom';
import SelectTypeForCustom from './components/Carte/Custom/SelectTypeForCustom.vue'
import DisplayTypeForCustom from './components/Carte/Custom/DisplayTypeForCustom.vue'
import AjouteCustom from './components/Carte/Custom/AjouteCustom';
import DeleteCustom from './components/Carte/Custom/DeleteCustom';


Vue.component('app-safeCustom',SafeCustom);
Vue.component('app-ajouteCustom',AjouteCustom)
Vue.component('app-selectTypeForCustom',SelectTypeForCustom);
Vue.component('app-saveAllCustom',SaveAllCustom);
Vue.component('app-displayTypeForCustom',DisplayTypeForCustom);
Vue.component('app-deleteCustom',DeleteCustom);


/* BORNE SETTINGS */
import BorneSettingVue from './components/BorneSetting/BorneSetting.vue';
import CarrouselSettings from './components/BorneSetting/BornePart/CarrouselSettings';
import WhereSettings from './components/BorneSetting/BornePart/WhereSettings';
import IconSelector from './components/BorneSetting/BornePart/IconSelector';
import ListSettings from './components/BorneSetting/BornePart/ListSettings.vue'
import SafeBorneSettings from './components/BorneSetting/SaveBorneSettings.vue';
import ValidCommandeRecapDetailsTitre from './components/BorneSetting/ValidCommandeRecapDetailsTitre';
import RecapCommande from './components/BorneSetting/RecapCommande';
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
import RecapNomCate from './components/BorneSetting/RecapNomCate';
import WhereSettingsSurPlace from './components/BorneSetting/WhereSettingsSurPlace';
import WhereSettingsTitle from './components/BorneSetting/WhereSettingsTitle';
import WhereSettingsEmporter from './components/BorneSetting/WhereSettingsEmporter';
import HowPayLiquide from './components/BorneSetting/HowPayLiquide';
import HowPayCB from './components/BorneSetting/HowPayCB';
import ValidCommandeRecapDetailsPrix from './components/BorneSetting/ValidCommandeRecapDetailsPrix';
import ValidCommandeRecapDetailsCategorie from './components/BorneSetting/ValidCommandeRecapDetailsCategorie';
import ValidCommandeRecapDetailsDetailsCategorie from './components/BorneSetting/ValidCommandeRecapDetailsDetailsCategorie';

Vue.component('app-bornesetting',BorneSettingVue);
Vue.component('app-safebornesettings',SafeBorneSettings);
Vue.component('app-whereSettings',WhereSettings)
Vue.component('app-carrouselSettings',CarrouselSettings);
Vue.component('app-iconSelector',IconSelector);
Vue.component('app-listSettings',ListSettings);
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
Vue.component('app-validCommandeNext',ValidCommandeNext);
Vue.component('app-customTitleCate',CustomTitleCate);
Vue.component('app-customTitlePlat',CustomTitlePlat);
Vue.component('app-customAddBtn',CustomAddBtn);
Vue.component('app-customCancelBtn',CustomCancelBtn);
Vue.component('app-recapNomCate',RecapNomCate);
Vue.component('app-recapBTNMinus',RecapBTNMinus);
Vue.component('app-recapBTNPlus',RecapBTNPlus);
Vue.component('app-validCommandeRecapDetailsTitre',ValidCommandeRecapDetailsTitre);
Vue.component('app-validCommandeRecapDetailsCategorie',ValidCommandeRecapDetailsCategorie);
Vue.component('app-validCommandeRecapDetailsPrix',ValidCommandeRecapDetailsPrix);
Vue.component('app-validCommandeRecapDetailsDetailsCategorie',ValidCommandeRecapDetailsDetailsCategorie);
Vue.component('app-howPayLiquide',HowPayLiquide);
Vue.component('app-howPayCB',HowPayCB);
Vue.component('app-whereSettingsSurPlace',WhereSettingsSurPlace);
Vue.component('app-whereSettingsEmporter',WhereSettingsEmporter);
Vue.component('app-whereSettingsTitle',WhereSettingsTitle);

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

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuetify);

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

