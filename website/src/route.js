import homePage from './components/Main/homePage.vue';
import add from './components/Main/Accueil.vue'

import fromage from './components/Ingredients/SubIngredients/fromage.vue'
import viandepoisson from './components/Ingredients/SubIngredients/viandepoisson.vue'
import legume from './components/Ingredients/SubIngredients/legume.vue'
import extra from './components/Ingredients/SubIngredients/extra.vue'
import boisson from './components/Ingredients/SubIngredients/boisson.vue'
import accMenu from './components/Ingredients/SubIngredients/accMenu.vue'
import sauce from './components/Ingredients/SubIngredients/sauce.vue'
import pain from './components/Ingredients/SubIngredients/pain.vue'
import dessert from './components/Ingredients/SubIngredients/dessert.vue'
import plat from './components/Carte/Plat/PlatList.vue'
import carte from './components/Carte/Carte.vue'
import ingredient from './components/Ingredients/Ingredient.vue'
import ListMenu from './components/Carte/Menu/ListMenu.vue'
import login from './components/Auth/Login.vue'
import register from './components/Auth/Register.vue'
import EspaceClient from './components/Auth/EspaceClient.vue';
import bornesetting from './components/BorneSetting/BorneSetting.vue';
import supplements from './components/Ingredients/SubIngredients/supplements.vue'
import Custom from './components/Carte/Custom.vue'
export default [
  {
    name:'home',
    path: '/',
    component: homePage
  },
  {
    name:'borneSetting',
    path: '/BorneSetting',
    component: bornesetting
  },
  {
    path: '/connexion',
    component: login
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/ingredient',
    component: ingredient
  },
  {
    path: '/carte',
    component: carte
  },
  {
    path: '/Espace Client',
    component: EspaceClient
  },
  {
    name :'add',
    path: '/add',
    component: add
  },
  {
    path: '/add/pain',
    component: pain
  },
  {
    path: '/add/sauce',
    component: sauce
  },
  {
    path: '/add/legume',
    component: legume
  },
  {
    path: '/add/viandepoisson',
    component: viandepoisson
  },
  {
    path: '/add/fromage',
    component: fromage
  },
  {
    path: '/add/extra',
    component: extra
  },
  {
    path: '/add/dessert',
    component: dessert
  },
  {
    path :'/add/suppléments',
    component : supplements
  },
  {
    path: '/add/Accompagnement Menu',
    component: accMenu
  },
  {
    path: '/add/boisson',
    component: boisson
    },
    {
        path: '/add/plat',
        component: plat
    },
    {
        path: '/add/Menu',
        component: ListMenu
    },
    {
      path: '/add/custom',
      component: Custom
  }
];
