import Ember from 'ember';

  export default Ember.Route.extend({
  beforeModel: function(){
    // Redirect users who haven't logged in 
    this.transitionTo('login');
    }
  });
