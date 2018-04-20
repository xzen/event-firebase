import Controller from './controller.js';

/**
 * @@Signup
 */
class Signup extends Controller {
  constructor (router) {
    super();
    const settings = {
      timestampsInSnapshots: true
    };

    this.router = router;
    this.firestore = firebase.firestore();
    this.firestore.settings(settings);
    this.auth = firebase.auth();
    this.render();
  }

  async render () {
    const el = document.querySelector('.container-fluid');

    this.tpl = await this.getTemplate('./views/signup.html');

    el.innerHTML = this.tpl;

    this.onClickSubmit();
  }

  /**
   * On click submit
   */
  onClickSubmit() {
    const elButton = document.querySelector('.signup-submit');
    const elForm = document.querySelector('#signup > form');

    elButton.addEventListener('click', e => {
      e.preventDefault();

      const email = elForm.querySelector('.signup-email').value;
      const password = elForm.querySelector('.signup-password').value;
      const confirmPassword = elForm.querySelector('.signup-confirm-password').value;

      if (password != confirmPassword) {
        vNotify.error({
          'text': 'Mot de passe de confirmation non identique',
          'title': 'Error'
        });

        return;
      }

      const oauth = {
        'password': password,
        'email': email
      };
      const data = {
        'lastname': elForm.querySelector('.signup-lastname').value,
        'firstname': elForm.querySelector('.signup-firstname').value,
        'email': email
      }

      this.registred(oauth, data);
    });
  }

  /**
   * Registred
   * @param {Object} oauth
   * @param {string} oauth.email
   * @param {string} oauth.password
   * @param {Object} data
   * @param {string} data.firstName
   * @param {string} data.lastName
   * @param {string} data.email
   */
  registred (oauth, data) {
    this.auth.createUserWithEmailAndPassword(oauth.email, oauth.password).then((currentUser) => (
      this.firestore.collection('users').add({
        'lastName': data.lastname.toLowerCase(),
        'firstName': data.firstname.toLowerCase(),
        'email': data.email.toLowerCase()
      })
    )).then(() => {
      vNotify.success({
        'text': 'Bienvenue !',
        'title':'Inscription résussie'
      });
    }).catch((error) => {
      vNotify.error({
        'text': error,
        'title': 'Error'
      });
    });
  }
}

export default Signup;

