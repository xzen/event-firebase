import Controller from './controller.js';
import { getEventsList } from '../models/index.js';

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
   */
  async initialize () {
    this.tplHome = await this.getTemplate('./views/home.html');
    this.tplEvent = await this.getTemplate('./views/event.html');

    this.render();
    this.renderEventsList();
  }

  /**
   * Render
   */
  render () {
    const el = document.querySelector('.container-fluid');

    el.innerHTML = this.tplHome;
  }

  /**
   * Render events list
   */
  renderEventsList () {
    const el = document.querySelector('.events-list');
    const eventsListDom = [];
    const events = getEventsList();

    for (let eventId in events) {
      const data = events[eventId];
      const dom = this.DOMParseFromString(this.tplEvent);
      const imgEl = dom.querySelector('.card-img-top');

      ! data.image ? imgEl.remove() : imgEl.src = data.image;

      dom.querySelector('.card-title').textContent = data.title;
      dom.querySelector('.card-text').textContent = data.description;
      dom.querySelector('.link-event').href = `#/event/show/${eventId}`;

      el.appendChild(dom.querySelector('body').firstChild);
    }
  }
}

export default Home;
