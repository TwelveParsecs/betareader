import Ember from 'ember';

export default Ember.Controller.extend({
  responseMessage: '',

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
  writes: null,
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
    //firebaseApp: Ember.inject.service(),
    //signUp() {
      // const email = this.get('email');
      // const password = this.get('password');
      // const name = this.get('name');
      // const birthday = new Date(parseInt(this.get('year')),parseInt(this.get('month')),parseInt(this.get('day')));
      // const education = this.get('education');
      // const novelLength = this.get('novelLength');
      // const genresRead = this.get('genresRead');
      // const readFreq = this.get('readFreq');
      // const writes = (this.get('writes') === '1'); // Convert string to boolean
      // const genresWrite = this.get('genresWrite');
      // const yearsWriting = this.get('yearsWriting');
      // const draftCompletion = this.get('draftCompletion');
      // const published = (this.get('published') === '1'); // Convert string to boolean
      // const experience = this.get('experience');
      // const hoursCritique = this.get('hoursCritique');
      // const description = this.get('description');

      // Authentication
      // var ref = this.get('firebaseApp').auth();
      // var _this = this;

      // Create new account
      // ref.createUserWithEmailAndPassword(email, password).then((userResponse) => {
      // const user = this.store.createRecord('user', {
      //   id: userResponse.uid,
      //   email: userResponse.email
      // console.log("user created");
      // });
      //return user.save();

      //
      // var newUser = this.store.createRecord('user', {
      //   id: userData.uid,
      //   name: name,
      //   birthday: birthday,
      //   education: education,
      //   novelLength: novelLength,
      //   genresRead: genresRead,
      //   readFreq : readFreq,
      //   writes: writes,
      //   genresWrite: genresWrite,
      //   yearsWriting: yearsWriting,
      //   draft_completion: draftCompletion,
      //   published: published,
      //   experience: experience,
      //   hoursCritique: hoursCritique,
      //   description: description,
      // });
      // newUser.save().then((response) => {
      //   console.log("sent!");
      //   this.set('responseMessage', `Thank you! We saved your data with the following id: ${response.get('id')}`);
      // });
    //},

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
      console.log(this.get('writes',value));
    },
    setPublished(value){
      this.set('published',value);
    }
  },
});
