import Ember from 'ember';

export default Ember.Controller.extend({
    lookingFor: 'One time critique',
    lookingForOptions: ['One time critique', "Ongoing feedback", "Not sure yet"],
    tags:[],

    actions: {
      setLookingFor(value){
        this.set('lookingFor',value);
      },

      setTags(value){
        
        this.set('tags',value);
      },
    }
});
