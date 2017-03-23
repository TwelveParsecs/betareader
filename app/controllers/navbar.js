import Ember from 'ember';

export default Ember.Controller.extend({
  matches: false,
  newproject: false,
  routeName: " ",
  init: function(){
    // Get current route
    this._super(...arguments);
    let appCtrl = Ember.getOwner(this).lookup('controller:application');
    this.set ("routeName",appCtrl.currentRouteName);

    switch(this.get("routeName")){
      case "matches":
        this.set("matches",true);
        this.set("newproject",false);
        break;
      case "newproject":
        this.set("matches",true);
        this.set("newproject",false);
        break;
    }

  },
  actions: {
       logout: function() {
           this.get('session').close().then(function() {
               this.transitionTo('login');
           }.bind(this));
       },
       changeUnderline: function(){
         switch(this.get("routeName")){
           case "matches":
             this.set("matches",true);
             this.set("newproject",false);
             break;
           case "newproject":
             this.set("matches",true);
             this.set("newproject",false);
             break;
         }
       }
   }
});
