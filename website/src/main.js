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
import SafeBorneSettings from './components/BorneSetting/SaveBorneSettings.vue';

Vue.component('app-bornesetting',BorneSettingVue);
Vue.component('app-safebornesettings',SafeBorneSettings);

    /* CARROUSEL */
    import CarrouselSettings from './components/BorneSetting/BornePart/CarrouselSettings';

    Vue.component('app-carrouselSettings',CarrouselSettings);

    /* WHERE */
    import WhereSettingsSurPlace from './components/BorneSetting/Where/WhereSettingsSurPlace';
    import WhereSettingsTitle from './components/BorneSetting/Where/WhereSettingsTitle';
    import WhereSettingsEmporter from './components/BorneSetting/Where/WhereSettingsEmporter';

    Vue.component('app-whereSettingsSurPlace',WhereSettingsSurPlace);
    Vue.component('app-whereSettingsEmporter',WhereSettingsEmporter);
    Vue.component('app-whereSettingsTitle',WhereSettingsTitle);
    
    /* RECAP */
    import RecapCommande from './components/BorneSetting/Recap/RecapCommande';
    import RecapTitre from './components/BorneSetting/Recap/RecapTitre';
    import RecapBTNCommander from './components/BorneSetting/Recap/RecapBTNCommander';
    import RecapPrix from './components/BorneSetting/Recap/RecapPrix';
    import Recap from './components/BorneSetting/Recap/Recap';
    import RecapBTNMinus from './components/BorneSetting/Recap/RecapBTNMinus';
    import RecapBTNPlus from './components/BorneSetting/Recap/RecapBTNPlus';
    import RecapNomCate from './components/BorneSetting/Recap/RecapNomCate';

    Vue.component('app-recapTitre',RecapTitre);
    Vue.component('app-recapCommande',RecapCommande);
    Vue.component('app-recapBTNCommander',RecapBTNCommander);
    Vue.component('app-recapPrix',RecapPrix);
    Vue.component('app-recap',Recap);
    Vue.component('app-recapNomCate',RecapNomCate);
    Vue.component('app-recapBTNMinus',RecapBTNMinus);
    Vue.component('app-recapBTNPlus',RecapBTNPlus);

    /* LIST CATEGORIES */
    import ListSettings from './components/BorneSetting/BornePart/ListSettings.vue'

    Vue.component('app-listSettings',ListSettings);

    /* LIST DES PLATS */
    import ListPlat from './components/BorneSetting/ListPlat';
    import BackCard from './components/BorneSetting/BackCardMenu';

    Vue.component('app-listPlat',ListPlat);
    Vue.component('app-backCardMenu',BackCard);

    /* HOW PAY*/
    import HowPayLiquide from './components/BorneSetting/HowPay/HowPayLiquide';
    import HowPayCB from './components/BorneSetting/HowPay/HowPayCB';

    Vue.component('app-howPayLiquide',HowPayLiquide);
    Vue.component('app-howPayCB',HowPayCB);

    /* VALIDATION DE LA COMMANDE */
    import ValidCommandeRecapDetailsPrix from './components/BorneSetting/ValidationCommande/ValidCommandeRecapDetailsPrix';
    import ValidCommandeRecapDetailsCategorie from './components/BorneSetting/ValidationCommande/ValidCommandeRecapDetailsCategorie';
    import ValidCommandeRecapDetailsDetailsCategorie from './components/BorneSetting/ValidationCommande/ValidCommandeRecapDetailsDetailsCategorie';
    import ValidCommandeGeneral from './components/BorneSetting/ValidationCommande/ValidCommandeGeneral';
    import ValidCommandeRecap from './components/BorneSetting/ValidationCommande/ValidCommandeRecap';
    import ValidCommandeRecapTitre from './components/BorneSetting/ValidationCommande/ValidCommandeRecapTitre';
    import ValidCommandeRecapDetails from './components/BorneSetting/ValidationCommande/ValidCommandeRecapDetails';
    import ValidCommandeBack from './components/BorneSetting/ValidationCommande/ValidCommandeBack';
    import ValidCommandeNext from './components/BorneSetting/ValidationCommande/ValidCommandeNext';
    import ValidCommandeRecapDetailsTitre from './components/BorneSetting/ValidationCommande/ValidCommandeRecapDetailsTitre';

    Vue.component('app-validCommandeGeneral',ValidCommandeGeneral);
    Vue.component('app-validCommandeRecap',ValidCommandeRecap);
    Vue.component('app-validCommandeRecapTitre',ValidCommandeRecapTitre);
    Vue.component('app-validCommandeRecapDetails',ValidCommandeRecapDetails);
    Vue.component('app-validCommandeBack',ValidCommandeBack);
    Vue.component('app-validCommandeNext',ValidCommandeNext);
    Vue.component('app-validCommandeRecapDetailsTitre',ValidCommandeRecapDetailsTitre);
    Vue.component('app-validCommandeRecapDetailsCategorie',ValidCommandeRecapDetailsCategorie);
    Vue.component('app-validCommandeRecapDetailsPrix',ValidCommandeRecapDetailsPrix);
    Vue.component('app-validCommandeRecapDetailsDetailsCategorie',ValidCommandeRecapDetailsDetailsCategorie);

    /* CUSTOM */
    import CustomVue from './components/BorneSetting/Custom'
    import CustomCarrouselTitle from './components/BorneSetting/CustomCarrouselTitle';
    import CustomSelect from './components/BorneSetting/CustomSelect'
    import CustomCardDeatils from './components/BorneSetting/CustomCardDetail'
    import CustomTitleCate from './components/BorneSetting/CustomTitleCate';
    import CustomTitlePlat from './components/BorneSetting/CustomTitlePlat';
    import CustomAddBtn from './components/BorneSetting/CustomAddBtn';
    import CustomCancelBtn from './components/BorneSetting/CustomCancelBtn';

    Vue.component('app-custom',CustomVue);
    Vue.component('app-customCarrouselTitle',CustomCarrouselTitle);
    Vue.component('app-customSelect',CustomSelect);
    Vue.component('app-customCardDeatils',CustomCardDeatils);
    Vue.component('app-customTitleCate',CustomTitleCate);
    Vue.component('app-customTitlePlat',CustomTitlePlat);
    Vue.component('app-customAddBtn',CustomAddBtn);
    Vue.component('app-customCancelBtn',CustomCancelBtn);

    /* MENU CUSTOM BORN */
    import MenuCustomBorn from './components/myBorn/MenuCustomBorn';

    Vue.component('app-menuCustomBorn',MenuCustomBorn);

        /* COMPONENT CUSTOM BORN */
        import CustomCarrousel from './components/myBorn/BornGroup/CustomCarrousel';
        import CustomWhere from './components/myBorn/BornGroup/CustomWhere';

        Vue.component('app-customWhere',CustomWhere);
        Vue.component('app-customCarrousel',CustomCarrousel);
    /* BORN PART */
    import Carrousel from './components/myBorn/BornPart/Carrousel'
    import Where from './components/myBorn/BornPart/Where'

    Vue.component('app-born-carrousel',Carrousel);
    Vue.component('app-born-where',Where);

    /* AUTRES */
    import IconSelector from './components/BorneSetting/BornePart/IconSelector';

    Vue.component('app-iconSelector',IconSelector);


Vue.config.productionTip = false;

export const fb = firebase.initializeApp({
    apiKey: "AIzaSyC3uuRDz7_GmCS506tXPYLqey0O7QrXItg",
    authDomain: "bornekebab.firebaseapp.com",
    databaseURL: "https://bornekebab.firebaseio.com",
    projectId: "bornekebab",
    storageBucket: "bornekebab.appspot.com",
    messagingSenderId: "441985689557",
    appId: "1:441985689557:web:26bef45bd1c62783b83f5c",
    measurementId: "G-P8VCV1GMQ4"
})

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

