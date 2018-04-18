class Controller {
  getTemplate (templateUrl) {
    const fetch = window.fetch(templateUrl, {
      method: 'GET'
    });

    return fetch.then(response => {
      return response.text();
    }).then(html => {
      return html;
    });
  }

  /**
   * DOM parse From String
   * @param {string} str
   */
  DOMParseFromString (str) {
    const parser = new DOMParser();

    return parser.parseFromString(str, 'text/html');
  }
}

export default Controller;