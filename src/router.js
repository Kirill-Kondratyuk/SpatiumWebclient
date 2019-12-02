import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Planets from "./components/Planets";
import Planet from "./components/Planet";
import Description from "./components/Description";
import Authors from "./components/Authors";
import Home from "./components/Home";

let routers = [
    {path: '/', name:'home', component: Home},
    {path: '/planets', name:'planets', component: Planets},
    {path: '/planets/:name', name: 'planet', component: Planet},
    {path: '/description', name: 'description', component: Description},
    {path: '/authors', name: 'authors', component: Authors},
];


export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routers
});