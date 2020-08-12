import Carrousel from './components/Carrouseul';
import Login from './components/Login';
import Where from './components/Where';
import Desorganise from './components/Listing/Desorganise';
import ShowCate from './components/Show.vue';
export default[
    {
      path: '/',
      component: Login
    },
    {
      path: '/start',
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
     component: ShowCate }
]