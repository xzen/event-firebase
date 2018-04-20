/**
 * @@Signout
 */
class Signout {
  constructor (router) {    
    this.auth = firebase.auth();
    this.router = router;

    this.destroyOauth();
  }

  destroyOauth() {
    this.auth.signOut().then(() => {
      this.router.navigateTo('/');
    }).catch(() => {
      this.router.navigateTo('/');
    });
  }
}

export default Signout;

