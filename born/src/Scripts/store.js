import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    allPics: [],
    borneSettings: "a",
    user: {
      loggedIn: false,
      data: null
    },
    plat: [],
    menu: [],
    platByCate: [],
    menuByPlat : [],
    supplements : [],
    commande : []
  },
  getters: {
    borneSettings(state) {
      return state.borneSettings;
    },
    supplements(state){
      return state.supplements;
    },
    getAllPics(state) {
      return state.allPics;
    },
    user(state) {
      return state.user;
    },
    commande(state){
      return state.commande;
    },
    platByCate(state) {
      return state.platByCate;
    },
    plat(state) {
      return state.plat;
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    ADD_BORNESETTINGS(state, bg) {
      state.borneSettings = bg;
    },
    ADD_PICLINK(state, data) {
      if (state.allPics.length == 0)
        state.allPics = new Array(state.borneSettings.firstPage.nbDiapo);
      state.allPics[data[0]] = data[1];
    },
    ADD_PLAT(state, res) {
      state.plat.push(res);

      if (state.platByCate[res.tab['categorie']] == null) {
        state.platByCate[res.tab['categorie']] = [];
      }
      let cv = Convertor.fromPlatToSelectable(res);
      state.platByCate[res.tab['categorie']].push(cv);
    },
    ADD_SELECTABLE(state,com){
      state.commande.push(com);
    },
    INIT_MENU(state, res) {
      for(let i=0; i< res.plat.length;i++)
        state.menuByPlat[res.plat[i]] = res;
      state.menu.push(res);
      console.log(state.menuByPlat);
    },
    INIT_SUPPLEMENT(state,res){
      state.supplements = res;
    },
    INIT(state, data) {
      if (state.platByCate[data[0]] == null) {
        state.platByCate[data[0]] = [];
      }

      state.platByCate[data[0]].push(Convertor.fromPayableToSelectable(data[1]));
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    }
  }
});
export default store;
class Convertor {
  static fromPlatToSelectable(plat) {
    let sele = new Selectable();
    
    sele.modifiable.sauce = [plat.tab['sauces libre'],[]];
    sele.modifiable.legume = [plat.tab['legumes'],[]];
    sele.maxSauce = plat.tab['max'].sauce;
    return sele.fromPlat(plat);
  }
  static fromPayableToSelectable() {
    let sele = new Selectable();
    return sele;
  }
}
export class Selectable {
  constructor() {
    this.picture = '';
    this.nom = '';
    this.maxSauce ='1';
    this.modifiable = {
      'sauce': [[], []],
      'legume': [[], []],
      'supplement': [ store.getters.supplements, []],
    }
    this.prix = '';
  }
  fromPlat(plat) {
    this.picture = plat.picture;
    this.nom = plat.tab['nom'];
    return this;
  }
}