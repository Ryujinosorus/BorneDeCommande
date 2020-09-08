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
    custom : [],
    where : null,
    menu: [],
    platByCate: [],
    menuByPlat : [],
    otherMenuByPlat : [],
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
    },
    menuByPlat(state){
      return state.menuByPlat;
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_WHERE(state,wh){
      state.where = wh;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    ADD_BORNESETTINGS(state, bg) {
      state.borneSettings = bg;
      for(let i=0;i<state.borneSettings.categorie.length;i++){
        let xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function() {
          state.borneSettings.categorie[i][1] = URL.createObjectURL(xhr.response);
          console.log(bg);
        }
        xhr.open('GET', state.borneSettings.categorie[i][1]);
        xhr.send();
      }
    },
    ADD_PICLINK(state, data) {
      if (state.allPics.length == 0)
        state.allPics = new Array(state.borneSettings.firstPage.nbDiapo);
      state.allPics[data[0]] = data[1];
    },
    ADD_CUSTOM(state, res) {
      state.custom.push(res);
      let cv = Convertor.fromCustomToSelectable(res);

      if (state.platByCate[res.categorie] == null)
        state.platByCate[res.categorie] = [];
  

      state.platByCate[res.categorie].push(cv);

    },
    SET_CUSTOM(state){
      for(let i=0;i<state.custom.length;i++){
        let curentCustom = state.custom[i];
        state.menuByPlat[curentCustom.nom] = [curentCustom];
        for(let j=0;j<curentCustom.linkedWith.length;j++){
          let pos = -1;
          for(let k=0;k<state.custom.length;k++)
            if(curentCustom.linkedWith[j] == state.custom[k].nom)
              pos = k;

          state.menuByPlat[curentCustom.nom].push(state.custom[pos]);
          
        }

        for(let j=0;j<curentCustom.otherCustom.length;j++){
          let pos = -1;
          for(let k=0;k<state.custom.length;k++)
            if(curentCustom.otherCustom[j] == state.custom[k].nom)
              pos = k;

          if(pos!=-1)curentCustom.otherCustom[j] = state.custom[pos];
          
        }

      }
      (state.menuByPlat);
      state.otherMenuByPlat = {...state.menuByPlat};
    },
    ADD_SELECTABLE(state,com){
      state.commande.push(com);
      state.menuByPlat = {...state.otherMenuByPlat};
    },
    DEL_COMMANDE(state,com){
      let index = state.commande.indexOf(com);
      state.commande.splice(index,1);
    },
    INIT_MENU(state, res) {
      for(let i=0; i< res.plat.length;i++)
        state.menuByPlat[res.plat[i]].push(Convertor.fromMenuToSelectable(res,state.plat));
      state.menu.push(res);
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
    return sele.fromPlat(plat);
  }
  static fromPayableToSelectable() {
    let sele = new Selectable();
    return sele;
  }
  static fromMenuToSelectable(menu,allPlat){
    let sele = new Selectable();
    return sele.fromMenu(menu,allPlat);
  }
  static fromCustomToSelectable(custom){
    let sele = new Selectable();
    return sele.fromCustom(custom);
  }
}
export class Selectable {
  constructor() {
    this.plat = null;
    this.picture = '';
    this.nom = '';
    this.maxSauce ='1';
    this.nb = 1;
    this.modifiable = {
      'sauce': [[], []],
      'legume': [[], []],
      'supplement': [ store.getters.supplements, []],
    }
    this.prix = '';
  }
  fromPlat(plat) {
    this.type ="PLAT";
    this.plat = plat;
    this.prix = plat.tab['prix'];
    
    let obj = {
      'modifiable' : {
        'sauce': [[...plat.tab['sauces libre']],[]],
        'legume': [[...plat.tab['legumes']], [...plat.tab['legumes']]],
        'supplement': [ store.getters.supplements, []]
      },
      'maxSauce' : plat.tab['max'].sauce,
      'maxSupplement' : plat.tab['max'].supplement,
      'nom' : plat.tab['nom']
    }
    this.content = [obj];
    this.picture = plat.picture;
    this.nom = plat.tab['nom'];
    return this;
  }
  fromMenu(menu,allPlat){
    this.type = "MENU";
    this.menu = menu;
    this.allPlat = allPlat;
    this.prix = menu.prix;
    this.picture = menu.picture;
    this.content = [];
    this.nom = menu.nom;
    for(let x=0;x<menu.plat.length;x++)
      for(let y=0;y<allPlat.length;y++)
        if(menu.plat[x]==allPlat[y].tab['nom']){
          let plat = allPlat[y];
          let obj = {
            'modifiable' : {
              'sauce': [[...plat.tab['sauces libre']],[]],
              'legume': [[...plat.tab['legumes']], [...plat.tab['legumes']]],
              'supplement': [ store.getters.supplements, []]
            },
            'maxSauce' : plat.tab['max'].sauce,
            'maxSupplement' : plat.tab['max'].supplement,
            'nom' : plat.tab['nom']
          }
          this.content.push(obj);
        }
    return this;
  }
  fromCustom(custom){
    this.nom = custom.nom;
    this.prix = custom.prix;
    this.picture = custom.picture;
    this.content = [];
    for(let i=0;i<custom.content.length;i++){
      let obj = {
        nom : custom.content[i].nom,
        all : custom.content[i].data,
        payable : custom.content[i].payable
      }
      this.content.push(obj);
    }
    return this;

  }
  reset(){
    if(this.type =="MENU")
      this.fromMenu(this.menu,this.allPlat)
    else this.fromPlat(this.plat);
  }
}