import Ember from 'ember';

export default Ember.Component.extend({
  readMore:false,
  actions:{
    toggleMore: function(event){
      let elements = event.element;
      Ember.$(elements).find(".full-description").toggle(".hidden");
      Ember.$(elements).find(".instructions-title").toggle(".hidden");
      Ember.$(elements).find(".instructions").toggle(".hidden");
      Ember.$(elements).find(".hide-gradient").toggle(".hidden");

      if (this.get("readMore")){
        Ember.$(elements).find(".read-more").html("Read More&hellip;");
        this.set("readMore",false);
      }
      else{
        Ember.$(elements).find(".read-more").html("Read Less&hellip;");
        this.set("readMore",true);
      }
    }
  }
});
