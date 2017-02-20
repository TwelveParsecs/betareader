import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
       logout: function() {
           this.get('session').close().then(function() {
               this.transitionTo('login');
           }.bind(this));
       }
   }
});
