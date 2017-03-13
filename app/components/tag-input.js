import Ember from 'ember';

export default Ember.Component.extend({
    actions:{
      splitTags(input){
        console.log("called");
        console.log(input);
        var tags = input.split(',');
        this.sendAction( 'sendOptions',tags );
      }
    }
});
