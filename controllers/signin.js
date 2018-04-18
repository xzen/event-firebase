import Controller from './controller.js';

/**
 * @@Signin
 */
class Signin extends Controller {
  constructor () {
    super();

    this.render();
  }

  async render () {
    const el = document.querySelector('.container-fluid');

    this.tpl = await this.getTemplate('./views/signin.html');

    el.innerHTML = this.tpl;
  }
}

export default Signin;
