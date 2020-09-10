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
        plat:[],
        menu:[],
        custom : [],
        font : null,
        bornesettings:null,
        fontPicker : {
            'carrousel':null
        },
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
fontPicker(state){
    return state.fontPicker;
},
font(state){
    return state.font;
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
getAllPlat(state){
    return state.plat;
},
getAllAcc(state){
    return state.food['Accompagnement Menu'];
},
getAllMenu(state){
    return state.menu;
},
globalSettings(state){
    return state.globalSettings;
},
icon(state){
    return state.icon;
}
},
mutations: {
    ADD_ALL_FONTS(state,data){
        state.font = data;
    },
    changeCarouselFont(state,data){
        state.fontPicker['carrousel'] = data;
    },
    ADD_CUSTOM(state,data){
        state.custom.push(data[0]);
        console.log('OK');
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
    UPDATE_FOOD_WPRICE(state,value){
        
        state.food[value[0]][value[2]][1] = value[1];
    },
    CHANGE_FOOD_WPRICE(state,value){
        let tab = state.food[value[0]];
        let pos = -1;
        for(let x=0;x<tab.length;x++)
            if(tab[x][0].trim() == value[1].trim())
                pos = x;

        if(pos!=-1)
            state.food[value[0]].splice(pos,1);
        else state.food[value[0]].push([value[1],value[2],value[3]]);
    },
    addTFfromPCL(state,value){
        for (let x = 0; x < state.food[value[0]].length; x++)
            if (state.food[value[0]][x][0] == value[1]) {
                state.food[value[0]][x] = [value[1], value[2],value[3]];
                return;
            }
        state.food[value[0]].push([value[1], value[2],value[3]]);
    },
    START(state){
        let data =  localStorage.getItem("food");
        if(data != undefined)
            state.food = JSON.parse(data);
    },
    INIT(state,data){
        state.food[data[0]] = data[1];
    },
    INIT_PLAT(state,data){
        state.plat = data;
    },
    INIT_MENU(state,data){
        state.menu = data;
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
            
    },
    ADD_PLAT(state,plat){
        let pos = state.plat.indexOf(plat);
        if(plat.tmpFile == null){
            if(pos!=-1) 
                state.plat[pos] = plat;
            else state.plat.push(plat);
        }
        else{
            let route = fb.storage().ref('dataOfUser/' + state.user.data.email + '/Plat/' + plat.tab['nom'] +'/picture.png');

            let uploadTask = route.put(plat.tmpFile);

            //GET URL
            uploadTask.then((snapshot) => {
                snapshot.ref.getDownloadURL().then((url) => {
                plat.picture = url;
                if(pos ==-1)
                    state.plat.push(plat)
                else state.plat[pos] = plat;
            });})
        }
    },
    DELETE_PLAT(state,plat){
        let pos = state.plat.indexOf(plat);
        if(pos!=-1) {
            state.plat.splice(pos, 1);
        }
    },
    UPDATE_PLAT(state,plat){
        let pos = state.plat.indexOf(plat);
        if(pos!=-1) {
            state.plat[pos] = plat;
        }
    },
    ADD_MENU(state,menu){
        let pos = state.menu.indexOf(menu);
        if(menu.tmpFile == null){
            if(pos!=-1) 
                state.menu[pos] = menu;
            else state.menu.push(menu);
        }
        else{
            let route = fb.storage().ref('dataOfUser/' + state.user.data.email+ '/Menu/' + menu.nom +'/picture.png');

            let uploadTask = route.put(menu.tmpFile);

            //GET URL
            uploadTask.then((snapshot) => {
                snapshot.ref.getDownloadURL().then((url) => {
                menu.picture = url;
                if(pos ==-1)
                    state.menu.push(menu)
                else state.menu[pos] = menu;
            });})
        }

    },
    DELETE_MENU(state,menu){
        let pos = state.menu.indexOf(menu);
        state.menu.splice(pos,1);
    },
    UPDATE_MENU(state,menu){
        let pos = state.menu.indexOf(menu);
        if(pos!=-1) {
            state.menu[pos] = menu;
            this.dispatch('UPDATE_MENU');
        }
    },
    getPCL(state,nom){
        return state.food[nom];
    }
},
actions: {
    fetchUser({commit}, user)
    {
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
,
    UPDATE_PLAT({state})
    {
        let route = fb.storage().ref('dataOfUser/' + state.user.data.email + '/plat.txt');
        let data_string = '';
        for (let x = 0; x < state.plat.length; x++) {
            data_string += state.plat[x].tab['nom'];
            let end = '\n';
            if (x == state.plat.length - 1)
                end = '';
            data_string += end;
        }
        var blob = new Blob([data_string], {type: 'text/plain'});
        route.put(blob);
},
ADD_ALLCUSTOM_FB({state}){
    let res='';
    for(let i=0;i<state.custom.length;i++){
        res+= (state.custom[i].nom + '\n');
        if(state.custom[i].pushHimToFb)
            state.custom[i].upload(state.user.data.email);
    }
    let route = fb.storage().ref('dataOfUser/' + state.user.data.email + '/custom.txt');
    route.put(new Blob([res], {type: 'text/plain'}));

},
ADD_ALLPLAT_FB({state, dispatch})
{
    for(let x=0;x<state.plat.length;x++)
        state.plat[x].toFirebase('dataOfUser/' + state.user.data.email + "/Plat/" + state.plat[x].tab['nom'] + "/");
    dispatch('UPDATE_PLAT');
},
ADD_ALLMENU_FB({state, dispatch})
{
    for(let x=0;x<state.menu.length;x++)
        state.menu[x].toFirebase('dataOfUser/' + state.user.data.email + "/Menu/" + state.menu[x].nom + "/");
    dispatch('UPDATE_MENU');
}
,
getPrice({state},data){
    let cate = data[0];
    let nom = data[1];
    for (let x = 0; x < state.food[cate].length; x++)
        if (state.food[cate][x][0] == nom)
            return state.food[cate][x][2];
    return 2;
    },
    UPDATE_MENU({state}){
        let res ='';
        for(let x=0;x<state.menu.length;x++) {
            res += ( state.menu[x].nom + "\n");
        }
        var blob = new Blob([res], {type: 'text/plain'});
        fb.storage().ref('dataOfUser/' +state.user.data.email + '/Menu.txt').put(blob);
    }
},
});
