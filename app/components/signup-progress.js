import Ember from 'ember';

export default Ember.Component.extend({
  current:1,
  lastBlock:1,
  writes:0,
  currentBlock: Ember.observer('current', function() {
    var currentBlock= this.get("current");
    var nextBlock = currentBlock + 1;
    var previousBlock = currentBlock - 1;
    var lastBlock = this.get("lastBlock")
    var width;
    var _this = this;

    // Check if we're skipping the writing experience card
    // if (_this.get("writes") == 0 && currentBlock == 4 && lastBlock ==3){
    //   currentBlock += 1;
    // }
    // else if (_this.get("writes") == 0 && currentBlock == 4 && lastBlock == 5){
    //   currentBlock -= 1;
    // }

    // Change length of progress bar based on the number of sections
    if (this.get("writes") == 0){
      Ember.$("#signup4").css("display","none");

      // Adjust bar length for missing card
      if (currentBlock < 5) width = 25 * (currentBlock - 1);
      else width = 25 * (currentBlock - 2);
    }
    else{
      Ember.$('#section4').css("display","inline-block");
      Ember.$("#signup4").css("display","block");
      width = 20 * (currentBlock - 1);
    }
    Ember.$("#progress-bar").css("width", width + "%");



    console.log("current: " + currentBlock + ", last: " + lastBlock);

    if (lastBlock > currentBlock){
      var offset = lastBlock - currentBlock;
      Ember.$("#section"+(currentBlock+offset)).removeClass("current");
      Ember.$("#section"+(currentBlock+offset)).removeClass("completed");
    }
    // Delay until progress bar is finished
    setTimeout(function() {
      if (_this.get("lastBlock") < currentBlock){
        var offset = 1;
        if (currentBlock == 5) offset = 2;
        Ember.$("#section"+ (currentBlock - offset)).addClass("completed");
        Ember.$("#section"+ (currentBlock - offset)).removeClass("current");

      }
      else {
        Ember.$("#section"+ (currentBlock)).removeClass("current");
        Ember.$("#section"+ (currentBlock)).removeClass("completed");
      }


      Ember.$("#section"+ currentBlock).addClass("current");
      _this.set("lastBlock", currentBlock);
    }, 300);

    function resizeBar(){

    }
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
