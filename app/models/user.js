import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr('number'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  name: DS.attr('string'),
  age: DS.attr('number'),
  birthday: DS.attr('date'),
  education: DS.attr('string'),
  description: DS.attr('string'),
  story_length: DS.attr('string'),
  genres_read: DS.attr('string'),
  writes: DS.attr('boolean'),
  write_freq: DS.attr('number'),
  experience: DS.attr('string'),
  hours_reading : DS.attr('number'), //hours a week spent reading
  reader_more: DS.attr('boolean'), //read for an author more than once
  published: DS.attr('boolean'),
  genres_write: DS.attr('string'),
  years_seriously_writing: DS.attr('number'),
  draft_completion: DS.attr('number'),
  hours_writing: DS.attr('number'), //hours a week spent writing
});
