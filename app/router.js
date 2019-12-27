import EmberRouter from '@ember/routing/router'
import config from './config/environment'

export default class Router extends EmberRouter {
  location = config.locationType
  rootURL = config.rootURL
}

Router.map(function() {
  this.route('new-game')
  this.route('quiz')
  this.route('quiz', {path: 'quiz/:id'}, function() {
    this.route('players')
    this.route('questions', function() {
      this.route('question', {path: ':index'})
    })
    this.route('settings')
  })
  this.route('about')
})
