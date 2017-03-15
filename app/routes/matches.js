import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

let projects = [];

export default Ember.Route.extend({
  sessionData: storageFor('session-data'),
  model(){

    let writeTags = [];
    let user = this.get("sessionData.userID");
    let name = this.get("sessionData.name");
    let genresRead = this.get("sessionData.reads");
    let _this = this;
    let promise;
    //console.log(user);

    // Get tags
    // Remove leading and trailing spaces and then split by comma delimiters
    var readTags = genresRead.split(',');
    //console.log(readTags.length);

    // Wrap it all in a promise
    return promise = new Ember.RSVP.Promise(function(resolve, reject) {
      // Find tags that match what the reader reads
      readTags.forEach(function(tag){
          console.log(tag);
           _this.store.query('tags', {
            orderBy:"name",
            equalTo: tag
          }).then(function(results, index, enumerable){

              results.forEach(function(result){
                  // Add each tag result to array if that project id does not already exist

                  if (writeTags.includes(result.get("projectID")) === false){
                    writeTags.push(result.get("projectID"));

                    // Query for the project that corresponds to that ID
                    _this.store.query('project', {
                      equalTo: result.get("projectID")
                    }).then(function(results){

                       results.forEach(function(result){

                          projects.push({
                            id: result.get("id"),
                            title: result.get("title"),
                            author: "Name",
                            description: result.get("description"),
                            tags:readTags
                          });
                      });

                      // Resolve promise with array of projects
                      resolve(projects);
                      //console.log("id: " + result.get("projectID") + ", tag: " + result.get("name"));
                    });
                  }
              });
          });

        });
      }).then(function(results){
        return results;
      });



    //console.log(projects);
    //return projects;
  }
});
