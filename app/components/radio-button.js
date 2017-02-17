//https://github.com/Blooie/ember-radio-buttons

import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'input',
  type: 'radio',
  attributeBindings: ['type', 'htmlChecked:checked', 'value', 'name', 'disabled'],

  htmlChecked() {
    return this.get('value') === this.get('checked');
  }.property('value', 'checked'),

  change() {
    this.sendAction('checked', this.get('value'));
  },

  _updateElementValue() {
    Ember.run.next(this, function() {
      this.$().prop('checked', this.get('htmlChecked'));
    });
  }.observes('htmlChecked')
});
