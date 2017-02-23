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
         var _this = this;

           this.get('session').open('firebase', {
                provider: 'password',
                email: email,
                password: password
           }).then(function() {
             this.get('sessionData').reset();// Clear data from previous session

             // Get current user
             this.get('firebaseApp').auth().onAuthStateChanged(function(user){
                   _this.set('sessionData.userID', user.uid);
                   _this.transitionTo('matches');

                  console.log(user.uid);
                  //this.set('sessionData.email', email);
              })
           }.bind(this));
       },
       logout: function() {
           this.get('session').close().then(function() {
               this.transitionTo('login');
           }.bind(this));
       }
   }
});
