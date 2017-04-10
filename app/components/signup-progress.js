import Ember from 'ember';

export default Ember.Component.extend({
  current:1,
  currentBlock: Ember.observer('current', function() {
    var currentBlock= this.get("current");
    var width = 20 * (currentBlock - 1);

    Ember.$("#progress-bar").css("width", width + "%");

    // Delay until progress bar is finished
    setTimeout(function() {
      Ember.$("#section"+ (currentBlock - 1)).addClass("completed");
      Ember.$("#section"+ (currentBlock - 1)).removeClass("current");
      Ember.$("#section"+ currentBlock).addClass("current");
    }, 300);


  })
});
