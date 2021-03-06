'use strict';

import config from './config.js'

// Controllers
import Navigation from './controllers/navigation.js';
import Home from './controllers/home.js';
import EventShow from './controllers/event-show.js';
import Signout from './controllers/signout.js';
import Signin from './controllers/signin.js';
import Signup from './controllers/signup.js';
import Profile from './controllers/profile.js';

/**
 * @@ App
 */
class App {
  constructor() {
    this.initialize();
  }

  /**
   * Routes
   */
  routes () {
    this.router = new Router({
      mode: 'hash',
      root: '/index.html'
    });

    this.router.add('/', () => (new Home()));
    firebase.auth().onAuthStateChanged(user => {
      user ? this.router.add('/user/profile', () => (new Profile())) : this.router.navigateTo('/');
    });
    this.router.add('/user/signout', () => (new Signout(this.router)));
    this.router.add('/user/signin', () => (new Signin()));
    this.router.add('/user/signup', () => (new Signup(this.router)));
    this.router.add('/event/show/(:any)', (id) => (new EventShow(this.router, id)));

    this.router.addUriListener().check();
  }

  /**
   * Initialize
   */
  initialize () {
    document.addEventListener('DOMContentLoaded', () => {
      firebase.initializeApp(config.firebase);

      new Navigation();

      this.routes();
    });
  }
}

new App();
