'use strict';

// Controllers
import Navigation from './controllers/navigation.js';
import Home from './controllers/home.js';
import Signout from './controllers/signout.js';
import Signin from './controllers/signin.js';
import Signup from './controllers/signup.js';

/**
 * @@ App
 */
class App {
  /**
   * Routes
   */
  routes () {
    this.router = new Router({
      mode: 'hash',
      root: '/index.html'
    });

    this.router.add('/', () => (new Home()));
    this.router.add('/user/signout', () => (new Signout()));
    this.router.add('/user/signin', () => (new Signin()));
    this.router.add('/user/signup', () => (new Signup()));

    this.router.addUriListener().check();
  }

  /**
   * Run
   */
  run () {
    document.addEventListener('DOMContentLoaded', () => {
      const navigation = new Navigation();
      navigation.render('#navigation');

      this.routes();
    });
  }
}

const app = new App();

app.run();