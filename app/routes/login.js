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

             // Get current user id
             this.get('firebaseApp').auth().onAuthStateChanged(function(user){
                 _this.set('sessionData.userID', user.uid);
                 let userID = user.uid;
                 console.log(userID);
                 // Get user profile data
                 _this.store.query('user',{
                  //  orderBy:"id",
                   equalTo:userID,
                   limitToFirst:1,
                   }).then(function(userData){
                     console.log(userData.objectAt(0).get("name"));
                     _this.set('sessionData.name', userData.objectAt(0).get("name"));
                     _this.set('sessionData.reads', userData.objectAt(0).get("genresRead"));
                     _this.transitionTo('matches');
                   });
              });
           }.bind(this));
       },
       logout: function() {
           this.get('session').close().then(function() {
               this.transitionTo('login');
           }.bind(this));
       }
   }
});
