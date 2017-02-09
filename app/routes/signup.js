import Ember from 'ember';

export default Ember.Route.extend({

  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  day: '',
  month: '',
  year: '',
  birthday: '',
  age: -1,
  education: '',
  description: '',
  story_length: '',
  genres_read: '',
  writes: null,
  write_freq: -1,
  experience: '',
  hours_reading : -1, //hours a week spent reading
  reader_more: null, //read for an author more than once
  published: null,
  genres_write: '',
  years_seriously_writing: -1,
  draft_completion: -1,
  hours_writing: -1, //hours a week spent writing


  //email validation
  isValid: Ember.computed.match('email', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  //send form
  actions: {
    signUp() {
      const email = this.get('email');
      const password = this.get('password');
      const name = this.get('name');
      const age = this.get('age');
      const education = this.get('education');
      const description = this.get('description');
      const story_length = this.get('story_length');
      const genres_read = this.get('genres_write');
      const writes = this.get('writes');
      const write_freq = this.get('write_freq');
      const experience = this.get('experience');
      const hours_reading = this.get('hours_reading');
      const reader_more = this.get('reader_more');
      const published = this.get('published');
      const genres_write = this.get('genres_read');
      const years_seriously_writing = this.get('years_seriously_writing');
      const draft_completion = this.get('draft_completion');
      const hours_writing = this.get('hours_writing');


      const newUser = this.store.createRecord('user', {
        email: email,
        password: password,
        name: name,
        age: age,
        education: education,
        description: description,
        story_length: story_length,
        genres_read: genres_read,
        writes: writes,
        write_freq: write_freq,
        experience: experience,
        hours_reading: hours_reading,
        reader_more: reader_more,
        published: published,
        genres_write: genres_write,
        years_seriously_writing: years_seriously_writing,
        draft_completion: draft_completion,
        hours_writing: hours_writing
      });

      newUser.save().then((response) => {
        this.set('responseMessage', `Thank you! We saved your data with the following id: ${response.get('id')}`);
      });
    }
  }
});
