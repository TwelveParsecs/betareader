import DS from 'ember-data';

export default DS.Model.extend({
  userID: DS.attr('string'),
  email: DS.attr('string'),
  manuscriptPath: DS.attr('string'),
  previewPath: DS.attr('string'),
  datePosted: DS.attr('date'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  critiqueInstructions: DS.attr('string'),
  wordsInPreview: DS.attr('number'),
  wordsInManuscript: DS.attr('number'),
  ageLimit: DS.attr('number'),
  lookingFor: DS.attr('string'), // Whether reader is looking for a one time critique or an ongoing relationship
  tags: DS.attr('string'),
  matureContent: DS.attr('boolean')
});
