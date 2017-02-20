import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('signup');
  this.route('navbar');
  this.route('newproject');
  this.route('matches');
  this.route('projects');
  this.route('critiques');
  this.route('login');

});

export default Router;
