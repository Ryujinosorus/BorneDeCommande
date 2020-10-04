import Vue from "vue";
import Vuex from "vuex";
import {fb} from '../main.js';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        user: {
            loggedIn: false,
            data: null
        },
        food:{
        },
        custom : [],
        bornesettings:null,
        globalSettings:{
            'nbFont' :200,
            'diapo':{
                'min':1,
                'max':10
            },
            'fontSize' : {
                'min' : 10,
                'max' : 500
            },
            'panelHeight':{
                'min':100,
                'max':1000,
            },
            'paddingTop' : {
                'min':10,
                'max':500
            }
        },
        icon : {
            'back' : null,
            'next' : null,
            'iconIN' : null,
            'iconOUT' : null,
            'add' : null,
            'cancel' : null
        }
    },
    getters: {
        user(state){
            return state.user;
        },
        getAllCustom(state) {
            return state.custom;
        },
        categories(state){
            return state.bornesettings.categorie;
        },
        bornesettings(state){
            return state.bornesettings;
        },
        getFoodByName: (state) => (name) => {
            return state.food[name];
        },
        getAllFood(state){
            return state.food;
        },
        globalSettings(state){
            return state.globalSettings;
        },
        icon(state){
            return state.icon;
        }
    },
    mutations: {
        ADD_CUSTOM(state,data){
            state.custom.push(data[0]);
        },
        UPDATE_CUSTOM(state,data){
            state.custom[data[1]] = data[0];
        },
        SET_ICON(state,data){
            state.icon[data[0]] = data[1];
        },
        SET_FOOD(state,data){
            state.food[data[0]] = data[1];
        },
        SET_LOGGED_IN(state, value) {
            state.user.loggedIn = value;
        },
        SET_USER(state, data) {
            state.user.data = data;
        },
        ADD_BORNESETTINGS(state,data){
            state.bornesettings = data;
        },
        RESET_CUSTOM(state){
            state.custom = [];
        },
        ADD_FOOD(state,value){
            let index = -1 ;
            let isIn = false;
            while(!isIn){
                for(let x=0;x<state.food[value[0]].length;x++)
                    if(state.food[value[0]][x][0] == value[1]) {
                        index = x ;
                        isIn = true;
                    }
                break;
            }
            let callFromSelectAll = value[3]==undefined ? false : true;

            if(callFromSelectAll && isIn)
                return;
            else if(!isIn){
                state.food[value[0]].push([value[1], value[2]]);
            }
            else{
                state.food[value[0]].splice(index,1);
            }
            localStorage.setItem("food",JSON.stringify(state.food));
        },
        ADD_CATEGORIE(state,data){
            state.bornesettings.categorie.push(data);
        },
        DEL_CATEGORIE(state,data){
            let pos = -1;
            for(let x=0;x<state.bornesettings.categorie.length;x++)
                if(state.bornesettings.categorie[x][0] == data)
                    pos = x;
            state.bornesettings.categorie.splice(pos,1);
        },
        INIT_CUSTOM(state,data){
            state.custom = data;
        },
        DELETE_CUSTOM(state,custom){
            let nom = custom.nom;

            let pos = state.custom.indexOf(custom);
            state.custom.splice(pos,1);

            for(let i=0;i<state.custom.length;i++){
                    let posNameLinkedWith = state.custom[i].linkedWith.indexOf(nom);
                    let posNameOtherCustom = state.custom[i].otherCustom.indexOf(nom);
                    if(posNameLinkedWith != -1){
                        state.custom[i].linkedWith.splice(posNameLinkedWith,1);
                        state.custom[i].pushHimToFb = true;
                    }
                    if(posNameOtherCustom != -1){
                        state.custom[i].otherCustom.splice(posNameOtherCustom,1);
                        state.custom[i].pushHimToFb = true;
                    }
            }
                
        }
    },
    actions: {
        fetchUser({commit}, user){
            commit("SET_LOGGED_IN", user !== null);
            if (user) {
                commit("SET_USER", {
                    displayName: user.displayName,
                    email: user.email
                });
            } else {
                commit("SET_USER", null);
            }
        },
        async ADD_ALLCUSTOM_FB({state}){
            let res='';
            for(let i=0;i<state.custom.length;i++){
                res+= (state.custom[i].nom + '\n');
                if(state.custom[i].pushHimToFb)
                    state.custom[i].upload(state.user.data.email);
            }
            let route = fb.storage().ref('dataOfUser/' + state.user.data.email + '/custom.txt');
            route.put(new Blob([res], {type: 'text/plain'}));

        }
    }
});
