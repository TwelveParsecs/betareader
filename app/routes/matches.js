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
    var count = 0;
    //console.log(user);

    // Get tags
    // Remove leading and trailing spaces and then split by comma delimiters
    var readTags = genresRead.split(',');

    // Wrap it all in a promise
    return promise = new Ember.RSVP.Promise(function(resolve, reject) {
      // Find tags that match what the reader reads
      for (let i = 0; i < readTags.length; i ++){
           _this.store.query('tags', {
            orderBy:"name",
            equalTo: readTags[i]
          }).then(function(results){

              results.forEach(function(result){
                  count += 1;
                  // Add each tag result to array if that project id does not already exist

                  if (!writeTags.includes(result.get("projectID"))){

                     writeTags.push(result.get("projectID"));

                    // Query for the project that corresponds to that ID
                    _this.store.query('project', {
                      equalTo: result.get("projectID")
                    }).then(function(projectResults){
                       projectResults.forEach(function(projectResult){

                          projects.push({
                            id: projectResult.get("id"),
                            title: projectResult.get("title"),
                            novelType: projectResult.get("novelType"),
                            author: "Name",
                            date: formatDate(projectResult.get("datePosted")),
                            pagesInManuscript: projectResult.get("pagesInManuscript"),
                            description: projectResult.get("description"),
                            instructions: projectResult.get("critiqueInstructions"),
                            tags: projectResult.get("tags")
                          });

                      });

                      //Resolve promise with array of projects

                      //console.log("id: " + result.get("projectID") + ", tag: " + result.get("name"));
                    resolve(projects);
                  });
                }
              });
          });

        }

      }).then(function(results){
        return results;
      });


      function formatDate(date) {
        var monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];

        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();

        return monthNames[monthIndex] + ' ' + day + ', ' + year;
      }

  }
});
