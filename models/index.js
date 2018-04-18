import mock from './mock.js';

/**
 * Get events list
 */
export const getEventsList = () => {
  const result = {};
  const events = mock.records;

  events.forEach((event) => {
    Object.assign(result, {
      [event.recordid]:{
        title: event.fields.title,
        description: event.fields.description,
        image: event.fields.image || false
      }
    });
  });

  return result;
};
  
export const getEvent = (eventId) => {
  const result = {};

  mock.records.filter(event => {
    if (event.recordid === eventId) { 
      return Object.assign(result, {
        title: event.fields.title,
        description: event.fields.description,
        image: event.fields.image || false,
        link: event.fields.link || false,
        city: event.fields.city || false,
        adress: event.fields.adress || false,
        spaceTimeInfo: event.fields['space_time_info'] || false,
        pricingInfo: event.fields['pricing_info'] || false
      });
    }
  })

  return result;
};
