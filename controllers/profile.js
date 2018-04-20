import Controller from './controller.js';

/**
 * @@Profile
 */
class Profile extends Controller {
  constructor () {
    super();
    
    this.render();
  }

  /**
   * Render
   */
  async render() {
    const el = document.querySelector('.container-fluid');
    const tplNavigation = await this.getTemplate('./views/profile.html');

    el.innerHTML = tplNavigation; 
  }
}

export default Profile;