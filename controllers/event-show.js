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

    const adressEl = dom.querySelector('.adress');
    const cityEL = dom.querySelector('.city');
    const descriptionEl = dom.querySelector('.description');
    const imgEl = dom.querySelector('.image');
    const linkEventInsightEl = dom.querySelector('.link-event-insight');
    const pricingInfoEL = dom.querySelector('.pricing-info');
    const regionEL = dom.querySelector('.region');
    const spaceTimeInfoEl = dom.querySelector('.space-time-info');
    const titleEl = dom.querySelector('.title');
    const mapEl = dom.querySelector('.map');

    titleEl.textContent = data.title;
    descriptionEl.textContent = data.description;

    ! data.adress ? adressEl.remove() : adressEl.textContent = data.adress;
    ! data.city ? cityEL.remove() : cityEL.textContent = data.city;
    ! data.image ? imgEl.remove() : imgEl.src = data.image;
    ! data.link ? linkEventInsightEl.remove() : linkEventInsightEl.href = data.link;
    ! data.pricingInfo ? pricingInfoEL.remove() : pricingInfoEL.textContent = data.pricingInfo;
    ! data.region ? regionEL.remove() : cityEL.textContent = data.region;
    ! data.spaceTimeInfo ? spaceTimeInfoEL.remove() : spaceTimeInfoEl.textContent = data.spaceTimeInfo;

    el.innerHTML = dom.querySelector('body').firstChild.innerHTML;
  }
}

export default EventShow;
