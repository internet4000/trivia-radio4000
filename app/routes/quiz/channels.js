import Route from '@ember/routing/route'
import {hash} from 'rsvp'

export default Route.extend({
  model() {
    return hash({
      quiz: this.modelFor('quiz'),
      channels: this.store.findAll('channel')
    })
  },
  actions: {
    setChannel(channel) {
      let quiz = this.modelFor('quiz')
      quiz.set('channel', channel)
      if (quiz.get('channel.id')) {
        this.transitionTo('quiz.index')
      }
    }
  }
});