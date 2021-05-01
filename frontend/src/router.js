import Feed from './pages/Feed.vue';
import Login from './pages/Login.vue';

import { createRouter, createWebHistory } from 'vue-router';

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  {
    path: '/feed',
    name: 'feed',
    component: Feed,

  },
  {
    path: '/login',
    component: Login,
    name: 'login',
    props: {
      mode: 'login'
    },
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/register',
    component: Login,
    name: 'register',
    props: {
      mode: 'register'
    },
    meta: {
      requiresAuth: false,
    },
  },
];

const myRouter = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

myRouter.beforeEach(async (to, from, next) => {
  const user = null;
  if (to.meta.requiresAuth !== false && !user) {
    next({name: 'login'});
  } else if (to.meta.requiresAuth == false && user) {
    next({name: 'feed'});
  }else {
    next();
  }
});

export default myRouter;
