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
}

export default Controller;