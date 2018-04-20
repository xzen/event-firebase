'use strict';

// Controllers
import Navigation from './controllers/navigation.js';
import Home from './controllers/home.js';
import EventShow from './controllers/event-show.js';
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
    this.router.add('/event/show/(:any)', (id) => (new EventShow(this.router, id)));

    this.router.addUriListener().check();
  }

  /**
   * Run
   */
  run () {
    document.addEventListener('DOMContentLoaded', () => {
      new Navigation();

      this.routes();
    });
  }
}

const app = new App();

app.run();
