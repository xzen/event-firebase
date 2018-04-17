/**
 * @@Signup
 */
class Signup {
  constructor () {
    this.html = '';
    this.render();
  }

  render () {
    const el = document.querySelector('.container');
    const fetch = window.fetch('./views/signup.html', {
      method: 'GET'
    });

    fetch.then(response => {
      return response.text();
    }).then(html => {
      el.innerHTML = html;
    });
  }
}

export default Signup;