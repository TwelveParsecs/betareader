import Ember from 'ember';

export default Ember.Controller.extend({
  init: function(){
    var route = this.get('routing').get('currentRouteName');
    console.log(route);
  },
  actions: {
       logout: function() {
           this.get('session').close().then(function() {
               this.transitionTo('login');
           }.bind(this));
       }
   }
});
