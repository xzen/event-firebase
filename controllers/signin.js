import Controller from './controller.js';
import Navigation from './navigation.js';

/**
 * @@Signin
 */
class Signin extends Controller {
  constructor () {
    super();

    this.render();
  }

  /**
   * Render
   */
  async render () {
    const el = document.querySelector('.container-fluid');

    this.tpl = await this.getTemplate('./views/signin.html');

    el.innerHTML = this.tpl;

    const elButton = document.querySelector('#signin .signin-button');

    elButton.addEventListener('click', () => {
      this.checkAuth(this.getInputValues());
    })
  }

  /**
   * Get input values
   */
  getInputValues () {
    const mail = document.querySelector('.signin-input-mail').value;
    const password = document.querySelector('.signin-input-password').value;

    return {
      mail,
      password
    } 
  }

  /**
   * Check auth
   */
  checkAuth (oauth) {
    firebase.auth().signInWithEmailAndPassword(oauth.mail, oauth.password).then(() => {
      vNotify.success({
        'text': 'Bienvenue !',
        'title':'Connexion résussie'
      });

      new Navigation();
    }).catch(() => {
      vNotify.error({
        'text': 'Ce compte n\'existe pas',
        'title':'Erreur de connexion'
      });
    });
  }
}

export default Signin;
