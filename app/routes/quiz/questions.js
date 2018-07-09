import Route from '@ember/routing/route'
import {pickRandom} from 'trivia-radio4000/utils/random-helpers'

export default Route.extend({
  async model() {
    let quiz = this.modelFor('quiz')
    let tracks = await quiz.get('channel.tracks')
    let questions = pickRandom(tracks, quiz.get('questionNumber'))
    return questions
  }
})
