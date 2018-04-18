import Controller from './controller.js';

/**
 * @@Home
 */
class Home extends Controller {
  constructor () {
    super();

    this.initialize();
  }

  /**
   * initialize
   * @param {string} selector
   */
  async initialize () {
    this.tplHome = await this.getTemplate('./views/home.html');
    this.tplEvent = await this.getTemplate('./views/event.html');

    this.render();
    this.renderEventsList();
  }

  render () {
    const el = document.querySelector('.container-fluid');

    el.innerHTML = this.tplHome;
  }

  renderEventsList () {
    const el = document.querySelector('.events-list');

    el.innerHTML = this.tplEvent;
  }
}

export default Home;
