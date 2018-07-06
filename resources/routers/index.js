import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from  '../components/Signup'
import Login from '../components/Login'
import CustomerCreate from '../components/CustomerCreate'
import CustomerGet from '../components/CustomerGet'
import Search from '../components/Search'
import Home from '../components/Home'


Vue.use(VueRouter)
const routes = [
   { path: '/', component: Signup },
   { path: '/login', component: Login },
   //{ path: '/post', component: CustomerCreate },
   //{ path: '/get', component: CustomerGet },
   { path: '/search', component: Search },
   { 
       path: '/home', 
       component: Home,
       name:'Home',
       children:[
           {
               path:'/get',
               name:'CustomerGet',
               component:CustomerGet
           },
           {
            path:'/post',
            name:'CustomerCreate',
            component:CustomerCreate
        }
       ]
    },   
];

export default new VueRouter({
    routes,
});
