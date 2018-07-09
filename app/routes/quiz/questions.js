import Route from '@ember/routing/route'
import {pickRandom} from 'trivia-radio4000/utils/random-helpers'

export default Route.extend({
  beforeModel() {
    let quiz = this.modelFor('quiz')
    if (!quiz.get('channel.id')) this.transitionTo('quiz.index')
  },
  async model() {
    let quiz = this.modelFor('quiz')
    let tracks = await quiz.get('channel.tracks')
    let questions = pickRandom(tracks, quiz.get('questionNumber'))
    return questions
  }
})
