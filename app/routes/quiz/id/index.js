import Ember from 'ember';
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let quiz = this.modelFor('quiz.id')

    return Ember.RSVP.hash({
      channels: this.store.findAll('channel'),
      quiz
    });
  }
});
