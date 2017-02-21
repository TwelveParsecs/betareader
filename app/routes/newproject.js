import Ember from 'ember';

export default Ember.Route.extend({
  actions: {

      createProject() {

         const controller = this.get("controller");
         const userID = this.session
         const manuscriptPath = ''//controller.get('manuscriptPath');
         const previewPath = ''//controller.get('previewPath');
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
          // id: userResponse.uid,
          // name: name,
          // birthday: birthday,
          // education: education,
          // novelLength: novelLength,
          // genresRead: genresRead,
          // readFreq : readFreq,
          // writes: writes,
          // genresWrite: genresWrite,
          // yearsWriting: yearsWriting,
          // draft_completion: draftCompletion,
          // published: published,
          // experience: experience,
          // hoursCritique: hoursCritique,
          // description: description
        });

        project.save().then(function(){
              console.log("data stored");
              //_this.transitionTo('matches');
            });
      }
  }
});
