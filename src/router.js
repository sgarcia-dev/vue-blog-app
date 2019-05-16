import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import Creator from './views/Post/Creator.vue'
import Editor from './views/Post/Editor.vue'
import Preview from './views/Post/Preview.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/post/details/:id',
      name: 'postPreview',
      component: Preview
    },
    {
      path: '/post/editor/:id',
      name: 'postEditor',
      component: Editor
    },
    {
      path: '/post/creator',
      name: 'postCreator',
      component: Creator
    }
  ]
})
