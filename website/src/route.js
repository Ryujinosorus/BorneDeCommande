import homePage from './components/Main/homePage.vue';
import ingredient from './components/Ingredients/Ingredient.vue'
import login from './components/Auth/Login.vue'
import EspaceClient from './components/Auth/EspaceClient.vue';
import bornesetting from './components/BorneSetting/BorneSetting.vue';
import Custom from './components/Carte/Custom.vue'
import ListCategorie from './components/Carte/Categories/ListCategories';

import Carrousel from './components/myBorn/BornPart/Carrousel';
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
    path: '/ingredient',
    component: ingredient
  },
  {
    path: '/Votre espace',
    component: EspaceClient
  },
    {
      path: '/add/custom',
      component: Custom
    },
    {
      path : '/add/categories',
      component : ListCategorie
    },
    {
      path : '/born/carrousel',
      component : Carrousel
    }
];
