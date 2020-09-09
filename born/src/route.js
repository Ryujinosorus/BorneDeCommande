import Carrousel from './components/Carrouseul';
import Login from './components/Login';
import Where from './components/Where';
import Desorganise from './components/Listing/Desorganise';
import ShowCate from './components/Show.vue';
import RecapAndBuy from './components/RecapAndBuy';
import LoadingData from './components/LoadingData';
export default[
    {
      path: '/',
      component: Login
    },
    {
      path: '/start',
      component:LoadingData
    },
    {
      path: '/Carrousel',
      component:Carrousel
    },
    {
      path: '/Where',
      component:Where
    },
    {
      path: '/Desorganise',
      component:Desorganise
    },
    { path: '/Show/:id',
     component: ShowCate 
    },
    {
      path : '/RecapAndBuy',
      component : RecapAndBuy
    }
]