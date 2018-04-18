import Controller from './controller.js';
import { getEvent } from '../models/index.js';

/**
 * @@EventShow
 */
class EventShow extends Controller {
  constructor (router, eventId) {
    super();

    this.router = router;
    this.eventId = eventId;
    this.render();
  }

  /**
   * Render
   */
  async render () {
    const el = document.querySelector('.container-fluid');
    const dom = this.DOMParseFromString(await this.getTemplate('./views/event-show.html'));
    const data = getEvent(this.eventId);

    if (! Object.keys(data).length) {
      this.router.navigateTo('/');

      return;
    }

    dom.querySelector('.image').src = data.image;
    dom.querySelector('.title').textContent = data.title;
    dom.querySelector('.description').textContent = data.description;
    ! data.link ? dom.querySelector('.link-event-insight').remove() : dom.querySelector('.link-event-insight').href = data.link;
    ! data.city ? dom.querySelector('.city').remove() : dom.querySelector('.city').textContent = data.city;
    ! data.adress ? dom.querySelector('.adress').remove() : dom.querySelector('.adress').textContent = data.adress;
    ! data.spaceTimeInfo ? dom.querySelector('.space-time-info').remove() : dom.querySelector('.space-time-info').textContent = data.spaceTimeInfo ;
    ! data.pricingInfo ? dom.querySelector('.pricing-info').remove() : dom.querySelector('.pricing-info').textContent = data.pricingInfo;

    el.firstChild.replaceWith(dom.querySelector('body').firstChild);
  }
}

export default EventShow;
