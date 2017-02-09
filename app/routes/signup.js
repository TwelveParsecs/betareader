import Ember from 'ember';

export default Ember.Route.extend({

  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  day: '',
  month: '',
  year: '',
  education: '',
  genresRead: '',
  description: '',
  storyLength: '',
  readFreq: '',
  novelLength: '',
  writes: null,
  yearsWriting: -1,
  draftCompletion: -1,
  published: null,
  experience: '',
  hoursAWeek : -1, //hours a week spent reading
  description: '',


  //email validation
  isValid: Ember.computed.match('email', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  //send form
  actions: {
    signUp() {
      const email = this.get('email');
      const password = this.get('password');
      const name = this.get('name');
      const birthday = new Date(this.get('year'),this.get('month'),this.get('day'));
      const education = this.get('education');
      const description = this.get('description');
      const story_length = this.get('storyLength');
      const genres_read = this.get('genresWrite');
      const writes = this.get('writes');
      const write_freq = this.get('writeFreq');
      const experience = this.get('experience');
      const hours_reading = this.get('hoursReading');
      const reader_more = this.get('readerMore');
      const published = this.get('published');
      const genres_write = this.get('genresRead');
      const years_seriously_writing = this.get('yearsWriting');
      const draft_completion = this.get('draftCompletion');
      const hours_writing = this.get('hoursWriting');


      const newUser = this.store.createRecord('user', {
        email: email,
        password: password,
        name: name,
        birthday: birthday,
        education: education,
        description: description,
        storyLength: story_length,
        genresRead: genres_read,
        writes: writes,
        writeFreq: write_freq,
        experience: experience,
        hoursReading: hours_reading,
        reader_more: reader_more,
        published: published,
        genresWrite: genresWrite,
        yearsWriting: yearsWriting,
        draft_completion: draft_completion,
        hours_writing: hours_writing
      });

      newUser.save().then((response) => {
        this.set('responseMessage', `Thank you! We saved your data with the following id: ${response.get('id')}`);
      });
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
    setDraftCompletion(value){
      this.set('hoursAWeek',value);
    }
  }
});
