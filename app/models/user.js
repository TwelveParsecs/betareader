import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr('number'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  name: DS.attr('string'),
  birthday: DS.attr('date'),
  education: DS.attr('string'),
  genresRead: DS.attr('string'),
  readFreq: DS.attr('string'),
  novelLength: DS.attr('string'),
  writes: DS.attr('boolean'),
  genresWrite: DS.attr('string'),
  yearsWriting: DS.attr('number'),
  draftCompletion: DS.attr('number'),
  published: DS.attr('boolean'),
  experience: DS.attr('string'),
  hoursCritique: DS.attr('number'), //hours a week for critique
  description: DS.attr('string')
});
