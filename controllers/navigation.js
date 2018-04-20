import Controller from './controller.js';

/**
 * @@Navigation
 */
class Navigation extends Controller {
  constructor () {
    super();

    this.auth = firebase.auth();
    this.render();
  }

  /**
   * Render
   */
  async render() {
    const el = document.querySelector('#navigation');
    const tplNavigation = await this.getTemplate('./views/navigation.html');
    const dom = this.DOMParseFromString(tplNavigation);

    this.auth.onAuthStateChanged(user => {
      if (user) {
        dom.querySelector('.nav-signin').remove();
        dom.querySelector('.nav-signup').remove();
      } else {
        dom.querySelector('.nav-profile').remove();
        dom.querySelector('.nav-signout').remove();
      }

      el.innerHTML = dom.querySelector('body').innerHTML;
    });
  }
}

export default Navigation;
