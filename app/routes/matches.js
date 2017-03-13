import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  sessionData: storageFor('session-data'),

  model(){
    let projects = [];
    let writeTags = [];
    let user = this.get("sessionData.userID");
    let name = this.get("sessionData.name");
    let genresRead = this.get("sessionData.reads");
    let _this = this;
    console.log(user);

    // Get tags
    // Remove leading and trailing spaces and then split by comma delimiters
    var readTags = genresRead.split(',');
    console.log(readTags.length);

    // Find tags that match what the reader reads
    for (let i = 0; i < readTags.length; i++){

      console.log(readTags[i]);
        _this.store.query('tags', {
          orderBy:"name",
          equalTo: readTags[i]
        }).then(function(results){
          results.forEach(function(result){
            console.log("called 2");
              // Add each tag result to array if that project id does not already exist
              if (writeTags.includes(result.get("projectID")) === false){
                

                writeTags.push(result.get("projectID"));
                console.log("id: " + result.get("projectID") + ", tag: " + result.get("name"));
              }
          });
      });
    }

    // return this.store.query('project', {
    //   orderBy: 'userID', equalTo: user
    // }).then(function(results){
    //   results.forEach(function(result){
    //       // Add results to an array with user data
    //       console.log(result.get('id'));
    //
    //       projects.push({
    //         id: result.get("id"),
    //         title: result.get("title"),
    //         author: name,
    //         description: result.get("description"),
    //         tags:result.get("tags")
    //       });
    //   });
    //
    //   return projects;
    // });
  }
});
