import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  sessionData: storageFor('session-data'),
  beforeModel: function(){
    let user = this.get("sessionData.userID");
    console.log(user);
    // Get user information
    var userData = this.store.findRecord('user',user);

    this.store.query('project', {
      orderBy: 'userID', equalTo: user
    }).then(function(results){
      results.forEach(function(result){
          console.log(result.get("title"));
      })
    });

  },
  actions: {
  }
});
