import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  firebaseApp: Ember.inject.service(),
  sessionData: storageFor('session-data'),
  actions: {
       login: function() {
         var controller = this.get('controller');
         //var path = controller.get('path');
         var email = controller.get('email');
         var password = controller.get('password');

           this.get('session').open('firebase', {
                provider: 'password',
                email: email,
                password: password
           }).then(function() {
              // Store userID with ember-local-storage
              var user = this.get('firebaseApp').auth().currentUser;

              if (user != null) {
                console.log( user.uid);
                this.set('sessionData.userID', user.uid);
                this.set('sessionData.email', email);
                console.log( this.get('sessionData.userID'));
              }

               //this.transitionTo(path);
               //this.transitionTo('matches');
           }.bind(this));
       },
       logout: function() {
           this.get('session').close().then(function() {
               this.transitionTo('login');
           }.bind(this));
       }
   }
});
