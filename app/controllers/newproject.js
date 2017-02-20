import Ember from 'ember';

export default Ember.Controller.extend({
    lookingFor: "",
    lookingForOptions: ['One time critique', "Ongoing feedback", "Not sure yet"],

    actions: {
      setLookingFor(value){
        this.set('lookingFor',value);
      },
    }
});
