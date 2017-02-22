import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  firebaseApp: Ember.inject.service(),
  sessionData: storageFor('session-data'),
  beforeModel: function(){
    
    // Get user information
    var userData = this.store.findRecord('user',this.get('sessionData.userID'));
    this.store.query('project', {
      filter: {
        id: 'sessionData.userID'
      }
    }).then(function(projects){
      console.log("finished");
      console.log(projects.objectAt(0).get("title"));
    });

  },
  actions: {
  }
});
