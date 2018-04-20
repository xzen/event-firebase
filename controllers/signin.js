import Controller from './controller.js';

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

    const elButton = document.querySelector('.singin-button');

    elButton.addEventListener('click', () => {
      this.checkAuth(this.getInputValues());
    })
  }

  /**
   * Get input values
   */
  getInputValues () {
    const mail = document.querySelector('.singin-input-mail').value;
    const password = document.querySelector('.singin-input-password').value;

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
    }).catch(() => {
      vNotify.error({
        'text': 'Ce compte n\'existe pas',
        'title':'Erreur de connexion'
      });
    });
  }
}

export default Signin;
