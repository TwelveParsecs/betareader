import Ember from 'ember';
export default Ember.Component.extend({
  options: ["College","Thing"],
  selectedOption: null,
  actions: {
    setSelection: function(selected) {
      //this.set('selectedOption', selected);
      //console.log(this.get('selectedOption'));
    },
    submit: function(){
      //selectedOption = this.get('selectedOption');
      //this.sendAction('submit', selectedOption);
    }
  }
});
