import Ember from 'ember';

export default Ember.Route.extend({
  actions: {

      createProject() {
         const controller = this.get("controller");
         const title = controller.get('title');

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
