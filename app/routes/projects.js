import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  sessionData: storageFor('session-data'),

  model(){
    let projects = [];
    let user = this.get("sessionData.userID");
    console.log(user);
    // Get user information
    var userData = this.store.findRecord('user',user);

    return this.store.query('project', {
      orderBy: 'userID', equalTo: user
    }).then(function(results){
      results.forEach(function(result){
          // Add results to an array with user data
          projects.push({
            title: result.get("title"),
            author: userData.name,
            description: result.get("description"),
          });
      })

      return projects;
    })
  }
});
