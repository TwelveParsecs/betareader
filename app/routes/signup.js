import Ember from 'ember';

export default Ember.Route.extend({
  firebaseApp: Ember.inject.service(),
  actions: {
    signUp() {
      const controller = this.get("controller");
      const email = controller.get('email');
      const password = controller.get('password');
      const name = controller.get('name');
      const birthday = new Date(parseInt(controller.get('year')),parseInt(controller.get('month')),parseInt(controller.get('day')));
      const education = controller.get('education');
      const novelLength = controller.get('novelLength');
      const genresRead = controller.get('genresRead');
      const readFreq = controller.get('readFreq');
      const writes = (controller.get('writes') === '1'); // Convert string to boolean
      const genresWrite = controller.get('genresWrite');
      const yearsWriting = controller.get('yearsWriting');
      const draftCompletion = controller.get('draftCompletion');
      const published = (controller.get('published') === '1'); // Convert string to boolean
      const experience = controller.get('experience');
      const hoursCritique = controller.get('hoursCritique');
      const description = controller.get('description');

      var ref = this.get('firebaseApp').auth();

      // Create new account
      ref.createUserWithEmailAndPassword(email, password).then((userResponse) => {
        console.log("user created");
      });
    }
  }
});
