import Ember from 'ember';


export default Ember.Controller.extend({
  responseMessage: '',
  current:1,
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
      this.set("current", currentBlock + 1);
      var next = currentBlock+1;
      var nextBlock = currentBlock+2;
      var nextNextBlock = currentBlock+3;
      Ember.$("#signup"+currentBlock).addClass("page-turn");

      if (currentBlock < 6){
        Ember.$("#signup"+next).removeClass("block-1");

        Ember.$("#signup"+nextBlock).removeClass("block-2");
        Ember.$("#signup"+nextBlock).addClass("block-1");

        Ember.$("#signup"+nextNextBlock).removeClass("block-3");
        Ember.$("#signup"+nextNextBlock).addClass("block-2");
      }
      console.log(currentBlock);
      // Ember.$("#signup"+currentBlock).fadeToggle(".hidden");
      // Ember.$("#signup"+next).fadeToggle(".hidden");

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
      if (value === 1){
        Ember.$('#section4').css("display","inline-block");
      }
      console.log(this.get('writes',value));
    },
    setPublished(value){
      this.set('published',value);
    }
  },
});
