import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['path'],
  path:'matches',
  isShowingModal: false,
  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    }
 }
});
