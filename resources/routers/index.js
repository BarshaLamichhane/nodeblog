import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from  '../components/Signup'
import Login from '../components/Login'
import CustomerCreate from '../components/CustomerCreate'
import CustomerGet from '../components/CustomerGet'


Vue.use(VueRouter)
const routes = [
   { path: '/', component: Signup },
   { path: '/login', component: Login },
   { path: '/post', component: CustomerCreate },
   { path: '/get', component: CustomerGet },
];

export default new VueRouter({
    routes,
});
