import Ember from 'ember';

export default Ember.Component.extend({
  current:1,
  lastBlock:0,
  writes:0,
  currentBlock: Ember.observer('current', function() {
    var currentBlock= this.get("current");
    var width;
    var _this = this;

    // Change length of progress bar based on the number of sections
    if (this.get("writes") == 0){
      Ember.$("#signup4").css("display","none");

      // Adjust bar length for missing card
      if (currentBlock < 6) width = 25 * (currentBlock - 1);
      else width = 25 * (currentBlock - 2);
    }
    else{
      Ember.$('#section4').css("display","inline-block");
      Ember.$("#signup4").css("display","block");
      width = 20 * (currentBlock - 1);
    }
    Ember.$("#progress-bar").css("width", width + "%");


    if (_this.get("lastBlock") > currentBlock){
      Ember.$("#section"+(currentBlock+1)).removeClass("current");
      Ember.$("#section"+(currentBlock+1)).removeClass("completed");
    }
    // Delay until progress bar is finished
    setTimeout(function() {
      if (_this.get("lastBlock") < currentBlock){
        Ember.$("#section"+ (currentBlock - 1)).addClass("completed");
        Ember.$("#section"+ (currentBlock - 1)).removeClass("current");
      }
      else {
        Ember.$("#section"+ (currentBlock)).removeClass("current");
        Ember.$("#section"+ (currentBlock)).removeClass("completed");
      }

      // Check if we're skipping the writing experience card
      if (_this.get("writes") == 0 && currentBlock == 4 && lastBlock == 3){
         currentBlock += 1;
      }
      else {

      }
      Ember.$("#section"+ currentBlock).addClass("current");
      _this.set("lastBlock", currentBlock);
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
