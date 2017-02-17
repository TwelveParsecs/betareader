import Ember from 'ember';

export default Ember.Controller.extend({
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  day: '',
  month: '',
  year: '',
  education: '',
  genresRead: '',
  readFreq: '',
  novelLength: '',
  writes: null,
  genresWrite: '',
  yearsWriting: -1,
  draftCompletion: -1,
  published: null,
  experience: '',
  hoursCritique : -1, //hours a week spent reading
  description: '',


  // Drop down options
  educationOptions: ['High School', 'College Diploma', 'Bachelors Degree', 'Masters Degree', 'Doctorate'],
  readFreqOptions: ['Every day','More than once a week','Once a week','Less than once a week'],
  novelLengthOptions: ['> 200 Pages', '> 500 pages', '> 1000 pages'],
  draftCompletionOptions: ['Every Month', 'A few times a year','A year or more'],
  experienceOptions: ['Very experienced','Moderately experienced','Little experience','No experience'],
  hoursOptions: ['1','2','3','4','5'],

  // Email validation
  isValid: Ember.computed.match('email', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  // Send form
  actions: {
    signUp() {
      const email = this.get('email');
      const password = this.get('password');
      const name = this.get('name');
      const birthday = new Date(this.get('year'),this.get('month'),this.get('day'));
      const education = this.get('education');
      const novelLength = this.get('novelLength');
      const genresRead = this.get('genresRead');
      const readFreq = this.get('readFreq');
      const writes = this.get('writes');
      const genresWrite = this.get('genresWrite');
      const yearsWriting = this.get('yearsWriting');
      const draftCompletion = this.get('draftCompletion');
      const published = this.get('published');
      const experience = this.get('experience');
      const hoursCritique = this.get('hoursCritique');
      const description = this.get('description');


      const newUser = this.store.createRecord('user', {
        email: email,
        password: password,
        name: name,
        birthday: birthday,
        education: education,
        novelLength: novelLength,
        genresRead: genresRead,
        readFreq : readFreq,
        writes: writes,
        genresWrite: genresWrite,
        yearsWriting: yearsWriting,
        draft_completion: draftCompletion,
        published: published,
        experience: experience,
        hoursCritique: hoursCritique,
        description: description,
      });

      newUser.save().then((response) => {
        this.set('responseMessage', `Thank you! We saved your data with the following id: ${response.get('id')}`);
      });
    },

    setEducation(value){
      this.set('education',value);
      console.log(this.get('education'));
    },
    setReadFreq(value){
      this.set('readFreq',value);
      console.log(value);
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
    }
  },
});
