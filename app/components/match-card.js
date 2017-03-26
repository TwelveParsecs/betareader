import Ember from 'ember';

export default Ember.Component.extend({
  readMore:false,
  actions:{
    toggleMore: function(event){
      let elements = event.element;
      let full = Ember.$(elements).find(".full-description");
      full.toggle(".hidden");
    }
  }
});
