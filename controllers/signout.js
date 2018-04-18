import Controller from './controller.js';

/**
 * @@Signout
 */
class Signout extends Controller {
  constructor () {
    super();

    this.render();
  }

  async render () {
    const el = document.querySelector('.container-fluid');

    this.tpl = await this.getTemplate('./views/signout.html');

    el.innerHTML = this.tpl;
  }
}

export default Signout;

