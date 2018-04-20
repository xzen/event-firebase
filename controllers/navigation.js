import Controller from './controller.js';

/**
 * @@Navigation
 */
class Navigation extends Controller {
  constructor () {
    super();

    this.render();
  }

  /**
   * Render
   */
  async render() {
    const el = document.querySelector('#navigation');
    const tplNavigation = await this.getTemplate('./views/navigation.html');

    el.innerHTML = tplNavigation; 
  }
}

export default Navigation;
