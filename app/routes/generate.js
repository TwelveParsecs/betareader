import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  sessionData: storageFor('session-data'),
  actions: {
      createProject() {
         const controller = this.get("controller");
         const userID = "AdzZ4tpgOifoZfchXoRfemeSLal2";
         const author = 'Author Name';
         const manuscriptPath = '';//controller.get('manuscriptPath');
         const previewPath = '';//controller.get('previewPath');
         const numberToGenerate = parseInt(controller.get('num'));
         const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus, eros at rhoncus fermentum, urna mi imperdiet ligula, nec laoreet elit ante id purus. Nam maximus malesuada est, quis posuere sapien gravida blandit. Praesent euismod, risus non mattis pellentesque, nulla neque ornare risus, et accumsan lacus nisl eget eros. Sed pretium mi lobortis nibh vehicula, ac condimentum libero venenatis. Cras lacinia, tellus et suscipit vestibulum, quam odio elementum justo, eget semper turpis enim in est. Vestibulum mattis velit efficitur leo eleifend venenatis. Nam hendrerit purus ut ex accumsan lacinia. Vivamus at quam justo. In eget mauris ex. Mauris sollicitudin rutrum libero, nec sodales erat pharetra in. Etiam sit amet massa sem. Fusce sed dapibus lectus. Etiam bibendum purus non sapien varius, id pulvinar ex ultrices.";
         const critiqueInstructions = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus, eros at rhoncus fermentum, urna mi imperdiet ligula, nec laoreet elit ante id purus. Nam maximus malesuada est, quis posuere sapien gravida blandit. Praesent euismod, risus non mattis pellentesque, nulla neque ornare risus, et accumsan lacus nisl eget eros. Sed pretium mi lobortis nibh vehicula, ac condimentum libero venenatis. Cras lacinia, tellus et suscipit vestibulum, quam odio elementum justo, eget semper turpis enim in est. Vestibulum mattis velit efficitur leo eleifend venenatis. Nam hendrerit purus ut ex accumsan lacinia. Vivamus at quam justo. In eget mauris ex. Mauris sollicitudin rutrum libero, nec sodales erat pharetra in. Etiam sit amet massa sem. Fusce sed dapibus lectus. Etiam bibendum purus non sapien varius, id pulvinar ex ultrices.";

         const ageLimit = "none";
         const matureContent = controller.get('matureContent');

        // Create new project
        for (var i = 0; i < numberToGenerate; i ++){
           var wordsInPreview = Math.floor(Math.random() * 18000 + 2000);
           var wordsInManuscript = Math.floor(Math.random() * 450000 + 50000);
           var lookingFor = randomize(['One time critique', "Ongoing feedback", "Not sure yet"],1);
           var date = new Date(2017,3,5);
           var title = randomize(['A Game of Thrones','The Fellowship of the Ring','Harry Potter and the Philospher\'s Stone','Old Man\'s War','Shade\'s Children', "Abhorsen"],1);
           var novelType = randomize(["Series","Novel","Novel","Novel","Short Story","Series"],1);

          var project = this.store.createRecord('project', {
            userID: userID,
            author: author,
            manuscriptPath: manuscriptPath,
            previewPath: previewPath,
            datePosted: date,
            title: title,
            description: description,
            critiqueInstructions: critiqueInstructions,
            wordsInPreview: wordsInPreview,
            wordsInManuscript: wordsInManuscript,
            ageLimit: ageLimit,
            lookingFor: lookingFor,
            matureContent: matureContent,
            novelType: novelType,
            tags: "tags"
          });

          project.save().then((response) => {
              // Create tag records for project
              //console.log(response.id);
              var tags = randomize(['true crime','science fiction','religion','fantasy','children','literary criticism','sports','mystery','drama','romance','history','period', 'western','horror','non-fiction','biography'],3);
              for (let i = 0; i < tags.length; i++){
                let tag = this.store.createRecord ('tags',{
                  name:tags[i],
                  projectID:response.id
                });

                let project = this.store.findRecord('project',response.id).then(function(projectTags){
                  projectTags.set("tags",tags);
                  projectTags.save();
                  console.log("called")
                });

                tag.save();
              }
            });
        }

          // Take an array of possible answers and return a single random answer
          function randomize(answers,amount){
            let length = answers.length;
            let selectedAnswers =[];

            // If only one answer is being returned, do so as a string
            if (amount === 1){
              selectedAnswers = answers[Math.floor(Math.random() * length)];
            }
            // If more answers are returned, stick them in an array
            else{
              for (var i = 0; i < amount; i ++ ){
                selectedAnswers.push(answers[Math.floor(Math.random() * length)]);
                //console.log(selectedAnswers[i]);
              }
            }
            return selectedAnswers;
          }
      }
  },


});
