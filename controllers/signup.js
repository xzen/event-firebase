import Controller from './controller.js';

/**
 * @@Signup
 */
class Signup extends Controller {
  constructor () {
    super();

    this.render();
  }

  async render () {
    const el = document.querySelector('.container-fluid');

    this.tpl = await this.getTemplate('./views/signup.html');

    el.innerHTML = this.tpl;
  }
}

export default Signup;

