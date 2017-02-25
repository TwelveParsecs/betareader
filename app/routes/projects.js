import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  sessionData: storageFor('session-data'),

  model(){
    let projects = [];
    let user = this.get("sessionData.userID");
    let name = this.get("sessionData.name");
    let _this = this;
    console.log(user);
    // Get user information


    return this.store.query('project', {
      orderBy: 'userID', equalTo: user
    }).then(function(results){
      results.forEach(function(result){
          // Add results to an array with user data
          console.log(result.get('id'));

          projects.push({
            id: result.get("id"),
            title: result.get("title"),
            author: name,
            description: result.get("description"),
            tags:result.get("tags")
          });
      })

      return projects;
    })
  }
});
