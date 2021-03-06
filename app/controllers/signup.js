import Ember from 'ember';


export default Ember.Controller.extend({
  responseMessage: '',
  current:1,
  last:1,
  //Table data
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  day: '',
  month: '',
  year: '',
  education: 'High School',
  genresRead: '',
  readFreq: 'Every day',
  novelLength: '> 200 Pages',
  writes: 0,
  genresWrite: '',
  yearsWriting: '',
  draftCompletion: 'Every Month',
  published: null,
  experience: 'Very experienced',
  hoursCritique : '1', //hours a week available for critique
  description: '',

  // Drop down options
  educationOptions: ['High School', 'College Diploma', 'Bachelors Degree', 'Masters Degree', 'Doctorate'],
  readFreqOptions: ['Every day','More than once a week','Once a week','Less than once a week'],
  novelLengthOptions: ['> 200 Pages', '> 500 pages', '> 1000 pages'],
  draftCompletionOptions: ['Every Month', 'A few times a year','A year or more'],
  experienceOptions: ['Very experienced','Moderately experienced','Little experience','No experience'],
  hoursOptions: ['1','2','3','4','5+'],

  // Email validation
  isValid: Ember.computed.match('email', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  // Send form
  actions: {
    nextBlock(currentBlock){
      this.set("last", currentBlock);
      Ember.$("#signup"+currentBlock).addClass("page-turn");
      Ember.$("#signup"+(currentBlock)).addClass("block-shadow");

      if (this.get("writes") == 0){
        if (currentBlock != 3)this.set("current", currentBlock + 1);
        else this.set("current", currentBlock + 2);
      }
      else{
        this.set("current", currentBlock + 1);
      }
        // Ember.$("#signup"+next).removeClass("block-1");
        // Ember.$("#signup"+nextBlock).addClass("block-1");
        // Ember.$("#signup"+nextBlock).removeClass("block-2");
        // Ember.$("#signup"+nextNextBlock).addClass("block-2");
        // Ember.$("#signup"+nextNextBlock).removeClass("block-3");

      // Ember.$("#signup"+currentBlock).fadeToggle(".hidden");
      // Ember.$("#signup"+next).fadeToggle(".hidden");

    },
    lastBlock(currentBlock){
      this.set("last", currentBlock);

      if (this.get("writes") == 0){
        if (currentBlock != 5){
          this.set("current", currentBlock - 1);
          Ember.$("#signup"+(currentBlock-1)).removeClass("page-turn");
          Ember.$("#signup"+(currentBlock-1)).removeClass("block-shadow");
        }
        else {
          this.set("current", currentBlock - 2);
          Ember.$("#signup"+(currentBlock-2)).removeClass("page-turn");
          Ember.$("#signup"+(currentBlock-2)).removeClass("block-shadow");
        }
      }
      else{
        this.set("current", currentBlock - 1);
        Ember.$("#signup"+(currentBlock-1)).removeClass("page-turn");
        Ember.$("#signup"+(currentBlock-1)).removeClass("block-shadow");
      }
    },

    setEducation(value){
      this.set('education',value);
    },
    setReadFreq(value){
      this.set('readFreq',value);
    },
    setNovelLength(value){
      this.set('novelLength',value);
    },
    setDraftCompletion(value){
      this.set('draftCompletion',value);
    },
    setExperience(value){
      this.set('experience',value);
    },
    setHours(value){
      this.set('hoursAWeek',value);
    },
    setWrites(value){
      this.set('writes',value);
      if (value == 1){
        // Show additional card information
        Ember.$('#genres-write').removeClass("invisible");
        Ember.$('#genres-write-label').removeClass("invisible");
      }
      else{
        // Hide additional card information
        Ember.$('#genres-write').addClass("invisible");
        Ember.$('#genres-write-label').addClass("invisible");
      }
    },
    setPublished(value){
      this.set('published',value);
    }
  },
});
