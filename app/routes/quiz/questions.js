import Route from '@ember/routing/route'
import {pickRandom} from 'trivia-radio4000/utils/random-helpers'

export default Route.extend({
  async model() {
    let quiz = this.modelFor('quiz')
    let tracks = await quiz.get('channel.tracks')
    if (!tracks) this.transitionTo('quiz.channels')
    let questions = pickRandom(tracks, quiz.get('totalQuestions'))
    return questions
  }
})
