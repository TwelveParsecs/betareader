import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  sessionData: storageFor('session-data'),

  actions: {

      createProject() {
         const controller = this.get("controller");
         const userID = this.get('sessionData.userID');
         const manuscriptPath = '';//controller.get('manuscriptPath');
         const previewPath = '';//controller.get('previewPath');
         const title = controller.get('title');
         const description = controller.get('description');
         const critiqueInstructions = controller.get('critiqueInstructions');
         const wordsInPreview = controller.get('wordsInPreview');
         const wordsInManuscript = controller.get('wordsInManuscript');
         const ageLimit = controller.get('wordsInPreview');
         const lookingFor = controller.get('lookingFor');
         const tags = controller.get('tags');
         const matureContent = controller.get('matureContent');

        // Create new project
        var project = this.store.createRecord('project', {

        userID: userID,
        manuscriptPath: manuscriptPath,
        previewPath: previewPath,
        title: title,
        description: description,
        critiqueInstructions: critiqueInstructions,
        wordsInPreview: wordsInPreview,
        wordsInManuscript: wordsInManuscript,
        ageLimit: ageLimit,
        lookingFor: lookingFor,
        tags: tags,
        matureContent: matureContent,

        });

        project.save().then(function(){
              console.log("data stored");
            });
      }
  }
});
