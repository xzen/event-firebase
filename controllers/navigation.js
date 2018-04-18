import Controller from './controller.js';

/**
 * @@Navigation
 */
class Navigation extends Controller {
  constructor () {
    super();
  }

  /**
   * Render
   * @param {string} selector
   */
  async render(selector) {
    const el = document.querySelector(selector);
    const tplNavigation = await this.getTemplate('./views/navigation.html');

    el.innerHTML = tplNavigation; 
  }
}

export default Navigation;
