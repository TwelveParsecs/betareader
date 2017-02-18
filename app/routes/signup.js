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
      var _this = this;

      // Create new account
      ref.createUserWithEmailAndPassword(email, password)
        .then((userResponse) => {
          _this.get('session').open('firebase', {
            provider: 'password',
            'email': email,
            'password': password
          })
          .then(function(){
            var user = _this.store.createRecord('user', {
              id: userResponse.uid,
              name: name,
              birthday: birthday,
              education: education,
              novelLength: novelLength,
              genresRead: genresRead,
              readFreq : readFreq,
              writes: writes,
              genresWrite: genresWrite,
              yearsWriting: yearsWriting,
              draft_completion: draftCompletion,
              published: published,
              experience: experience,
              hoursCritique: hoursCritique,
              description: description
            });

            user.save().then(function(){
              console.log("data stored");
            //_this.transitionTo('protected');
            });
          });
        }).catch((error) => {
          // let authError = error as firebase.auth.Error;
          // let errorCode = authError.code;
          // let errorMessage = authError.message;
          //
          // if (errorMessage === "auth/weak-password") {
          //   alert("The password is too weak.");
          // } else {
          //   alert(errorMessage);
          // }
          console.log(error);
        });
    }
  }
});
