import Ember from 'ember';

export default Ember.Controller.extend({
  current:"true",
  actions: {
    toggle(current){
      this.set("current",current);

      if (current == "true"){
        Ember.$("#current-link").addClass("selected");
        Ember.$("#past-link").removeClass("selected");

        Ember.$("#current").removeClass("hidden");
        Ember.$("#past").addClass("hidden");
      }
      else{
        Ember.$("#current-link").removeClass("selected");
        Ember.$("#past-link").addClass("selected");

        Ember.$("#current").addClass("hidden");
        Ember.$("#past").removeClass("hidden");
      }
    }
  }
});
