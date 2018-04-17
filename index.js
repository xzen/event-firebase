'use strict';

// Config
import config from './config.js';

// Controllers
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

    this.router.add('/', () => {
      const home = new Home();
    });

    this.router.add('/user/signout', () => {
      const signout = new Signout();
    });

    this.router.add('/user/signin', () => {
      const signin = new Signin();
    });

    this.router.add('/user/signup', () => {
      const signup = new Signup();
    });

    this.router.addUriListener().check();
  }

  /**
   * Run
   */
  run () {
    document.addEventListener('DOMContentLoaded', () => {
      this.routes();
    });
  }
}

const app = new App();

app.run();