import Ember from 'ember';
export default Ember.Component.extend({
  options:null,
  todo: null,
  selectedOption: null,
  actions: {
    setSelection(selected) {
      this.set('selectedOption', selected);
      this.sendAction( 'sendOptions', selected);
    },
  }
});
