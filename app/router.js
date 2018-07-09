import EmberRouter from '@ember/routing/router'
import config from './config/environment'

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function() {
  this.route('quiz', function() {
    this.route('id', {path: ':id'}, function() {
      this.route('players')
    });
  });
});

export default Router
