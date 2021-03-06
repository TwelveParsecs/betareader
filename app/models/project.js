import DS from 'ember-data';

export default DS.Model.extend({
  userID: DS.attr('string'),
  author: DS.attr('string'),
  manuscriptPath: DS.attr('string'),
  previewPath: DS.attr('string'),
  datePosted: DS.attr('date'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  critiqueInstructions: DS.attr('string'),
  pagesInPreview: DS.attr('number'),
  pagesInManuscript: DS.attr('number'),
  ageLimit: DS.attr('number'),
  lookingFor: DS.attr('string'), // Whether reader is looking for a one time critique or an ongoing relationship
  matureContent: DS.attr('boolean'),
  novelType: DS.attr('string'),
  tags: DS.attr('string'),
});
