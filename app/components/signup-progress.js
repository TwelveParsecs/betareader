import Ember from 'ember';

export default Ember.Component.extend({
  current:1,
  writes:0,
  currentBlock: Ember.observer('current', function() {
    var currentBlock= this.get("current");
    var width;

    if (this.get("writes") == 0){
      width = 25 * (currentBlock - 1);
    }
    else{
      Ember.$('#section4').css("display","inline-block");
      width = 20 * (currentBlock - 1);
    }

    Ember.$("#progress-bar").css("width", width + "%");
    // Delay until progress bar is finished
    setTimeout(function() {
      Ember.$("#section"+ (currentBlock - 1)).addClass("completed");
      Ember.$("#section"+ (currentBlock - 1)).removeClass("current");
      Ember.$("#section"+ currentBlock).addClass("current");
    }, 300);
  }),
  writesStatus: Ember.observer('writes', function() {
    console.log("called");
    var currentBlock= this.get("current");
    var width;

    if (this.get("writes") == 0){
      Ember.$('#section4').css("display","none");
      Ember.$('#section4').css("opacity","0");

      Ember.$('#label4').css("display","none");
      Ember.$('#label4').css("opacity","0");

      width = 25 * (currentBlock - 1);
    }
    else{
      Ember.$('#section4').css("display","inline-block");
      Ember.$('#section4').css("opacity","1");

      Ember.$('#label4').css("display","inline-block");
      Ember.$('#label4').css("opacity","1");
      width = 20 * (currentBlock - 1);
    }

    Ember.$("#progress-bar").css("transition-duration", "0s");
    Ember.$("#progress-bar").css("width", width + "%");

    // Stop progress bar from animating when section is added
    setTimeout(function() {
      Ember.$("#progress-bar").css("transition-duration", "0.5s");
    }, 50);
  })

});
